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

import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app',
  styleUrls: [
    'app.component.scss'
  ],
  template: `
    <json-editor *ngIf="record && schema" 
      [config]="config"
      [record]="record"
      (onRecordChange)="onRecordChange($event)"
      [schema]="schema">
    </json-editor>
  `
})
export class AppComponent {
  record: Object;
  schema: Object;
  config: Object;

  constructor(private http: Http, @Inject(APP_CONFIG) config: AppConfig) {
    this.config = config;
    Observable.zip(
      this.http.get('./assets/mock-data/big-record.json'),
      this.http.get('./assets/mock-data/schema.json'),
      (recordRes, schemaRes) => {
        return {
          record: recordRes.json(),
          schema: schemaRes.json()
        };
      }
    ).subscribe((data) => {
      this.record = data.record; // set ./assets/mock-data/record.json
      this.schema = data.schema; // set ./assets/mock-data/schema.json
    });
  }

  onRecordChange(record: Object) {
    this.record = record;
  }
}
