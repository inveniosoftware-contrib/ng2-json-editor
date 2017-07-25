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
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
import { Http } from '@angular/http';
import { fromJS, Map, Set } from 'immutable';
import 'rxjs/add/operator/skipWhile';
import { ReplaySubject } from 'rxjs/ReplaySubject';


import { AbstractTrackerComponent } from './abstract-tracker';

import {
  AppGlobalsService,
  JsonStoreService,
  JsonUtilService,
  JsonSchemaService,
  KeysStoreService,
  PathUtilService,
  RecordFixerService,
  SchemaFixerService,
  ShortcutService,
  TabsUtilService
} from './shared/services';

import { JsonEditorConfig, Preview, SchemaValidationErrors, JsonPatch } from './shared/interfaces';


@Component({
  selector: 'json-editor',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './json-editor.component.scss'
  ],
  templateUrl: './json-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class JsonEditorComponent extends AbstractTrackerComponent implements OnInit {

  @Input() config: JsonEditorConfig;
  @Input() record: Object;
  @Input() schema: any;
  @Input() set errorMap(errors: SchemaValidationErrors) {
    this._errorMap = errors;
    this.appGlobalsService.externalErrors = this.errorMap;
  }
  @Input() jsonPatches: Array<JsonPatch>;

  get errorMap(): SchemaValidationErrors {
    return this._errorMap;
  }

  @Input() templates: { [templateName: string]: TemplateRef<any> } = {};

  @Output() onRecordChange: EventEmitter<Object> = new EventEmitter<Object>();

  private _errorMap: SchemaValidationErrors = {};
  _record: Map<string, any>;
  tabNames: Array<string>;
  previews: Array<Preview>;
  isPreviewerHidden: boolean;
  isErrorPanelOpen = false;
  errorPanelActiveTab = '';

  constructor(public http: Http,
    public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public jsonUtilService: JsonUtilService,
    public jsonSchemaService: JsonSchemaService,
    public keysStoreService: KeysStoreService,
    public recordFixerService: RecordFixerService,
    public schemaFixerService: SchemaFixerService,
    public shortcutsService: ShortcutService,
    public tabsUtilService: TabsUtilService,
    public pathUtilService: PathUtilService) {
    super();
  }

  ngOnInit() {
    if (!(this.schema && this.record)) {
      throw new Error(`[schema] or [record] is undefined 
        if you are fetching them async then please consider using:
          <json-editor *ngIf="mySchema && myRecord" ...> </json-editor>
        in order to wait for them to be fetched before initializing json-editor
      `);
    } else if (!this.config) {
      this.config = {};
      console.warn(`[config] is undefined, make sure that is intended.`);
    }

    this.schema = this.schemaFixerService.fixSchema(this.schema, this.config.schemaOptions);
    this.record = this.recordFixerService.fixRecord(this.record, this.schema);

    this.extractPreviews();

    // set config to make it globally accessible all over the app
    this.appGlobalsService.config = this.config;
    // set errors that is used by other components
    this.appGlobalsService.externalErrors = this.errorMap;
    this.appGlobalsService.templates = this.templates;
    this.appGlobalsService.adminMode$.subscribe(adminMode => {
      this.keysStoreService.buildKeysMap(this._record, this.schema);
    });
    // use fromJS to convert input to immutable then pass it to the store
    this._record = fromJS(this.record);
    this.jsonStoreService.setJson(this._record);
    // listen for all changes on json
    this.jsonStoreService.jsonChange
      .skipWhile(json => json === this._record)
      .subscribe(json => {
        this._record = json;
        // emit the change as plain JS object
        this.onRecordChange.emit(json.toJS());
      });
    this.jsonStoreService.setJsonPatches(this.jsonPatches);
    this.jsonSchemaService.setSchema(this.schema);
    // construct enhanced sorted filtered keys map for objects in the record
    this.keysStoreService.buildKeysMap(this._record, this.schema);

    // setup variables need for tab grouping.
    if (this.config.tabsConfig) {
      this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
      this.tabsUtilService.activeTabName$.subscribe(tabName => { this.appGlobalsService.activeTabName = tabName; });
      this.appGlobalsService.activeTabName = this.config.tabsConfig.defaultTabName;
    }
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

  get shortcuts() {
    return this.shortcutsService.getShortcutsWithConfig(this.config.shortcuts);
  }

  get isPreviewerDisabled(): boolean {
    return this.config.previews === undefined || this.config.previews.length === 0;
  }

  get rightContainerColMdClass(): string {
    return this.isPreviewerHidden ? 'col-md-1' : 'col-md-4';
  }

  get middleContainerColMdClass(): string {
    if (this.isPreviewerDisabled) {
      return 'col-md-10';
    }
    return this.isPreviewerHidden ? 'col-md-9' : 'col-md-6';
  }

  set activeTabName(tabName: string) {
    this.appGlobalsService.activeTabName = tabName;
  }

  get pathString(): string {
    return '';
  }

  isActiveTab(tabName) {
    return this.appGlobalsService.activeTabName === tabName;
  }

  get shorterEditorContainerClass(): string {
    return this.isErrorPanelOpen ? 'shorter-editor-container' : '';
  }

  openErrorPanel(errorPanelTabName: string) {
    this.isErrorPanelOpen = true;
    this.errorPanelActiveTab = errorPanelTabName;
  }

}
