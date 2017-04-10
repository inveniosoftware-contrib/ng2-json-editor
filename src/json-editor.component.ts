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


import { AbstractTrackerComponent } from './abstract-tracker';

import {
  AppGlobalsService,
  JsonStoreService,
  JsonUtilService,
  JsonSchemaService,
  RecordFixerService,
  SchemaFixerService,
  ShortcutService,
  TabsUtilService
} from './shared/services';

import { JsonEditorConfig, Preview, SchemaValidationErrors, PathCache } from './shared/interfaces';


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
  @Input() schema: Object;
  @Input() errorMap: SchemaValidationErrors = {};
  @Input() templates: { [templateName: string]: TemplateRef<any> } = {};


  @Output() onRecordChange: EventEmitter<Object> = new EventEmitter<Object>();

  _record: Map<string, any>;
  tabNameToSubSchema: {};
  tabNames: Array<string>;
  schemaKeyToTabName: { [key: string]: string };
  tabNameToKeys: { [tabName: string]: Set<string> };
  previews: Array<Preview>;
  isPreviewerHidden: boolean;
  keys: Set<string>;

  constructor(public http: Http,
    public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public jsonUtilService: JsonUtilService,
    public jsonSchemaService: JsonSchemaService,
    public recordFixerService: RecordFixerService,
    public schemaFixerService: SchemaFixerService,
    public shortcutsService: ShortcutService,
    public tabsUtilService: TabsUtilService) {
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

    this.keys = Set.fromKeys(this.record);

    // set errors that is used by other components
    this.appGlobalsService.globalErrors = this.errorMap;
    this.appGlobalsService.templates = this.templates;

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
    this.jsonSchemaService.setSchema(this.schema);

    // setup variables need for tab grouping.
    if (this.config.tabsConfig) {
      this.schemaKeyToTabName = this.tabsUtilService.getSchemaKeyToTabName(this.config.tabsConfig, this.schema);
      this.tabNameToKeys = this.keys
        .groupBy(key => this.schemaKeyToTabName[key])
        .toObject() as any;
      this.tabNameToSubSchema = this.tabsUtilService.getTabNameToSubSchema(this.schema, this.schemaKeyToTabName);
      this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
      this.tabsUtilService.tabSelectionSubject.subscribe(tabName => {
        this.activeTabName = tabName;
      });
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

  onFieldAdd(field: string) {
    this.keys = this.keys.add(field);
    if (this.config.tabsConfig) {
      let tabName = this.schemaKeyToTabName[field];
      this.tabNameToKeys[tabName] = this.tabNameToKeys[tabName].add(field);
    }
  }

  onDeleteKey(field) {
    this.keys = this.keys.remove(field);
    if (this.config.tabsConfig) {
      let tabName = this.schemaKeyToTabName[field];
      this.tabNameToKeys[tabName] = this.tabNameToKeys[tabName].remove(field);
    }
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

  isActiveTab(tabName) {
    return this.appGlobalsService.activeTabName === tabName;
  }
}
