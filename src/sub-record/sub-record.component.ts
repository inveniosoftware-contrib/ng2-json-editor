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
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Map, Set } from 'immutable';

import { PathCache, JSONSchema } from '../shared/interfaces';
import { JsonStoreService, AppGlobalsService } from '../shared/services';

@Component({
  selector: 'sub-record',
  styleUrls: [
    './sub-record.component.scss'
  ],
  templateUrl: './sub-record.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecordComponent implements OnInit, OnChanges {
  @Input() value: Map<string, any>;
  @Input() schema: JSONSchema;
  @Input() tabName = '';
  @Input() keys: Set<string>;

  @Output() deleteKey: EventEmitter<string> = new EventEmitter<string>();

  keysByType: { others: Set<string>, toggles: Set<string> };
  pathCache: PathCache = {};

  constructor(public jsonStoreService: JsonStoreService,
    public appGlobalsService: AppGlobalsService) { }

  ngOnInit() {
    this.keysByType = this.keys
      .groupBy(key => this.isToggle(key) ? 'toggles' : 'others')
      .toObject() as any;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['keys']) {
      this.keys = changes['keys'].currentValue;
      this.keysByType = this.keys
        .groupBy(key => this.isToggle(key) ? 'toggles' : 'others')
        .toObject() as any;
    }
  }

  // delete only work for others, not toggles (UPDATE: config comment if this changes)
  deleteField(field: string) {
    this.deleteKey.emit(field);
    this.jsonStoreService.removeIn(this.getPathForField(field));
  }

  getPathForField(field: string): Array<any> {
    if (!this.pathCache[field]) {
      this.pathCache[field] = [field];
    }
    return this.pathCache[field];
  }

  onToggleValueChange(field: string, value: boolean) {
    this.jsonStoreService.setIn(this.getPathForField(field), value);
  }


  private isToggle(field: string): boolean {
    return this.schema.properties[field].toggleColor !== undefined;
  }
}
