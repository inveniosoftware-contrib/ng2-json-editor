/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */

import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
import { fromJS, Map, Set } from 'immutable';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AbstractSubscriberComponent } from './abstract-subscriber';
import {
  AppGlobalsService,
  JsonStoreService,
  JsonUtilService,
  JsonSchemaService,
  KeysStoreService,
  PathUtilService,
  RecordFixerService,
  SchemaFixerService,
  TabsUtilService,
  ProblemsService
} from './shared/services';

import {
  JsonEditorConfig,
  Preview,
  SchemaValidationProblems,
  JsonPatch,
  Shortcut,
  CustomShortcutKeys,
  JSONSchema
} from './shared/interfaces';


@Component({
  selector: 'json-editor',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './json-editor.component.scss'
  ],
  templateUrl: './json-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class JsonEditorComponent extends AbstractSubscriberComponent implements OnChanges, OnInit {

  @Input() config: JsonEditorConfig;
  @Input() record: object;
  // original schema
  @Input() schema: any;
  @Input() problemMap: SchemaValidationProblems;
  @Input() jsonPatches: Array<JsonPatch>;
  @Input() templates: { [templateName: string]: TemplateRef<any> };

  @Output() recordChange = new EventEmitter<Object>();
  @Output() jsonPatchesChange = new EventEmitter<Array<JsonPatch>>();
  @Output() validationProblems = new EventEmitter<SchemaValidationProblems>();

  readonly pathString = '';
  _record: Map<string, any>;
  tabNames: Array<string>;
  previews: Array<Preview>;
  isBottomConsoleOpen = false;
  isPreviewerHidden = false;
  isSidebarCollapsed = true;
  bottomConsoleActiveTab = '';
  customShortcutKeys: CustomShortcutKeys;
  // altered schema enchanced with configs
  fixedSchema: JSONSchema;

  // used to decide if the [record] is change caused by recordChange.emit or parent component
  private lastEmittedRecord: object;

  constructor(
    public appGlobalsService: AppGlobalsService,
    public problemsService: ProblemsService,
    public jsonStoreService: JsonStoreService,
    public jsonUtilService: JsonUtilService,
    public jsonSchemaService: JsonSchemaService,
    public keysStoreService: KeysStoreService,
    public recordFixerService: RecordFixerService,
    public schemaFixerService: SchemaFixerService,
    public tabsUtilService: TabsUtilService,
    public pathUtilService: PathUtilService
  ) {
    super();
  }

  ngOnInit() {
    this.isPreviewerHidden = this.config.isPreviewerHiddenOnStart;
    this.appGlobalsService.adminMode$
      .takeUntil(this.isDestroyed)
      .subscribe(adminMode => {
        this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
      });

    // listen for all changes on json
    this.jsonStoreService.json$
      .skipWhile(json => json === this._record)
      .takeUntil(this.isDestroyed)
      .subscribe(json => {
        this._record = json;
        // emit the change as plain JS object
        this.lastEmittedRecord = json.toJS();
        this.recordChange.emit(this.lastEmittedRecord);
      });

    // list for all changes on jsonPatches
    this.jsonStoreService.jsonPatches$
      .takeUntil(this.isDestroyed)
      .subscribe(patches => {
        this.jsonPatchesChange.emit(patches);
      });

    this.problemsService.internalProblemMap$
      .takeUntil(this.isDestroyed)
      .subscribe(internalProblemMap => {
        this.validationProblems.emit(internalProblemMap);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    // throw error if a required input is undefined
    if (changes['schema'] && !this.schema) {
      this.throwInputUndefined('schema');
    }
    if (changes['record'] && !this.record) {
      this.throwInputUndefined('record');
    }

    // warn if an important input is undefined
    if (changes['config'] && !this.config) {
      this.config = {};
      console.warn(`[config] is undefined, make sure that is intended.`);
    }

    const recordChanged = changes['record'] && this.record !== this.lastEmittedRecord;
    const schemaChanged = changes['schema'] || changes['config'];

    if (schemaChanged) {
      this.fixedSchema = this.schemaFixerService.fixSchema(this.schema, this.config.schemaOptions);
      this.jsonSchemaService.setSchema(this.fixedSchema);
    }

    if (schemaChanged || recordChanged) {
      this.record = this.recordFixerService.fixRecord(this.record, this.fixedSchema);
      this.lastEmittedRecord = this.record;
      this._record = fromJS(this.record);
      this.jsonStoreService.setJson(this._record);
      this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
    }


    if (changes['config']) {
      this.appGlobalsService.config = this.config;
      if (this.config.tabsConfig) {
        this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
        this.tabsUtilService.activeTabName$.subscribe(tabName => { this.appGlobalsService.activeTabName = tabName; });
        this.appGlobalsService.activeTabName = this.config.tabsConfig.defaultTabName;
      }

      this.customShortcutKeys = this.config.shortcuts;
    }

    if (recordChanged || changes['config']) {
      this.extractPreviews();
    }

    if (changes['jsonPatches']) {
      if (this.jsonPatches) {
        this.jsonStoreService.setJsonPatches(this.jsonPatches);
      }
    }

    if (changes['problemMap']) {
      this.problemsService.externalProblems = this.problemMap;
    }

    if (changes['templates']) {
      this.appGlobalsService.templates = this.templates || {};
    }
  }

  private throwInputUndefined(inputName: string) {
    throw new Error(`[${inputName}] is undefined!
      if you are fetching ${inputName} async then please consider using:
        <json-editor *ngIf="${inputName}" [${inputName}]="${inputName}" ...> </json-editor>
      in order to wait for it to be fetched before initializing json-editor`
    );
  }

  /**
   * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
   */
  private extractPreviews() {
    if (!this.isPreviewerDisabled) {
      // if url is not set directly, populate it
      this.previews = [];
      this.config.previews
        .forEach(previewConfig => {
          let url: string;
          if (previewConfig.url) {
            url = previewConfig.url;
          } else if (previewConfig.getUrl) {
            url = previewConfig.getUrl(this.record);
          } else if (previewConfig.urlPath) {
            try {
              url = this.jsonUtilService.getValueInPath(this.record, previewConfig.urlPath);
            } catch (error) {
              console.warn(`Path ${previewConfig.urlPath} in preview config is not present in the input record`);
            }
          } else {
            throw new Error('Either url, urlPath or getUrl should be set for a preview');
          }
          if (url) {
            this.previews.push({
              name: previewConfig.name,
              type: previewConfig.type,
              url: url
            });
          }
        });
    }
  }

  get keys$(): ReplaySubject<Set<string>> {
    return this.keysStoreService.forPath(this.pathString);
  }

  get isPreviewerDisabled(): boolean {
    return (
      this.config.previews === undefined || this.config.previews.length === 0
    );
  }

  set activeTabName(tabName: string) {
    this.appGlobalsService.activeTabName = tabName;
  }

  isActiveTab(tabName) {
    return this.appGlobalsService.activeTabName === tabName;
  }

  get shorterEditorContainerClass(): string {
    return this.isBottomConsoleOpen ? 'shorter-editor-container' : '';
  }

  openBottomConsole(tabName: string) {
    this.isBottomConsoleOpen = true;
    this.bottomConsoleActiveTab = tabName;
  }

  trackByElement(index: number, element: any): any {
    return element;
  }
}
