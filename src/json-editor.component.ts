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
  ChangeDetectionStrategy
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
  ShortcutService
} from './shared/services';

import { JsonEditorConfig, Preview, SchemaValidationErrors } from './shared/interfaces';


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

  @Output() onRecordChange: EventEmitter<Object> = new EventEmitter<Object>();

  _record: Map<string, any>;
  previews: Array<Preview> = [];
  isPreviewerHidden: boolean;
  keys: Set<string>;

  constructor(public http: Http,
    public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public jsonUtilService: JsonUtilService,
    public jsonSchemaService: JsonSchemaService,
    public recordFixerService: RecordFixerService,
    public schemaFixerService: SchemaFixerService,
    public shortcutsService: ShortcutService) {
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
    // set errors that is used by other components
    this.appGlobalsService.globalErrors = this.errorMap;
    // get names of top-level fields
    this.keys = Set.fromKeys(this.record);
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
  }

  /**
   * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
   */
  private extractPreviews() {
    let previewConfigs = this.config.previews;
    if (previewConfigs) {
      // if url is not set directly, populate it
      previewConfigs
        .forEach(previewConfig => {
          let url: string;
          if (previewConfig.url) {
            url = previewConfig.url;
          } else if (previewConfig.getUrl) {
            url = previewConfig.getUrl(this.record);
          } else if (previewConfig.urlPath) {
            url = this.jsonUtilService.getValueInPath(this.record, previewConfig.urlPath);
          } else {
            throw new Error('Either url, urlPath or getUrl should be set for a preview');
          }
          this.previews.push({
            name: previewConfig.name,
            type: previewConfig.type,
            url: url
          });
        });
    }
  }

  deleteField(field: string) {
    let record = this._record.remove(field);
    this.jsonStoreService.setIn([], record);

    this.keys = this.keys.remove(field);
  }

  getPathForField(field: string): Array<any> {
    return [field];
  }

  onFieldAdd(field: string) {
    this.keys = this.keys.add(field);
  }

  get shortcuts() {
    return this.shortcutsService.getShortcutsWithConfig(this.config.shortcuts);
  }
}
