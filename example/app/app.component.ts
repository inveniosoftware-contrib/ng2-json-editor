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
import { AppConfig } from './app.config';

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
  record: Object;
  schema: Object;
  patches: Array<any>;
  errorMap: Object;

  constructor(private http: Http, public config: AppConfig) {
    Observable.zip(
      this.http.get('./assets/mock-data/record.json'),
      this.http.get('./assets/mock-data/schema.json'),
      this.http.get('./assets/mock-data/patches.json'),
      this.http.get('./assets/mock-data/error-map.json'),
      (recordRes, schemaRes, patchesRes, errorMapRes) => {
        return {
          record: recordRes.json(),
          schema: schemaRes.json(),
          patches: patchesRes.json(),
          errorMap: errorMapRes.json(),
        };
      }
    ).subscribe((data) => {
      this.record = data.record; // set ./assets/mock-data/record.json
      this.schema = data.schema; // set ./assets/mock-data/schema.json
      this.patches = data.patches; // set ./assets/mock-data/patches.json
      this.errorMap = data.errorMap;
    });

  }

  onRecordChange(record: Object) {
    this.record = record;
  }
}
