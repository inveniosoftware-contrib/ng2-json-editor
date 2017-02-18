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

import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Map, Set } from 'immutable';

import { AbstractFieldComponent } from '../abstract-field';

import { AppGlobalsService, JsonStoreService, PathUtilService } from '../shared/services';
import { PathCache } from '../shared/interfaces';

@Component({
  selector: 'object-field',
  styleUrls: [
    './object-field.component.scss'
  ],
  templateUrl: './object-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectFieldComponent extends AbstractFieldComponent implements OnInit {

  @Input() value: Map<string, any>;
  @Input() schema: Object;
  @Input() path: Array<any>;

  keys: Set<string>;
  pathCache: PathCache = {};

  constructor(public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService) {
    super(appGlobalsService, pathUtilService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.keys = this.value.keySeq().toSet();
  }

  deleteField(name: string) {
    // remove it from the record
    this.value = this.value.remove(name);
    this.jsonStoreService.setIn(this.path, this.value);
    // remove the key too, so that it will not be displayed as empty
    this.keys = this.keys.remove(name);
  }

  getFieldPath(name: string): Array<any> {
    if (!this.pathCache[name]) {
      this.pathCache[name] = this.path.concat(name);
    }
    return this.pathCache[name];
  }

  onFieldAdd(field: string) {
    this.keys = this.keys.add(field);
  }

}
