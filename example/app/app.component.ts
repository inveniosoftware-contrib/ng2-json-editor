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

import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { JsonEditorConfig } from '../../dist';

import { environment } from '../environments/environment';


@Component({
  // tslint:disable-next-line
  selector: 'app',
  encapsulation: ViewEncapsulation.None, //  Apply style (bootstrap.scss) globally
  styleUrls: [
    'app.component.scss'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  record: object;
  schema: object;
  patches: Array<any>;
  problemMap: object;
  readonly config: JsonEditorConfig = environment.editorConfig;

  constructor(private http: Http) {
    Observable.zip(
      this.http.get(`./assets/${environment.mockDataFolder}/record.json`),
      this.http.get(`./assets/${environment.mockDataFolder}/schema.json`),
      this.http.get(`./assets/${environment.mockDataFolder}/patches.json`),
      this.http.get(`./assets/${environment.mockDataFolder}/problem-map.json`),
      (recordRes, schemaRes, patchesRes, problemMapRes) => {
        return {
          record: recordRes.json(),
          schema: schemaRes.json(),
          patches: patchesRes.json(),
          problemMap: problemMapRes.json(),
        };
      }
    ).subscribe((data) => {
      this.record = data.record;
      this.schema = data.schema;
      this.patches = data.patches;
      this.problemMap = data.problemMap;
    });
  }
}
