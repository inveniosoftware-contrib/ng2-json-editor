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
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { Map, Set } from 'immutable';

import { AbstractTrackerComponent } from '../abstract-tracker';
import { PathCache, JSONSchema } from '../shared/interfaces';
import { JsonStoreService, AppGlobalsService, TabsUtilService, KeysStoreService } from '../shared/services';

@Component({
  selector: 'sub-record',
  styleUrls: [
    './sub-record.component.scss'
  ],
  templateUrl: './sub-record.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubRecordComponent extends AbstractTrackerComponent implements OnChanges {
  @Input() value: Map<string, any>;
  @Input() schema: JSONSchema;
  @Input() tabName: string;
  @Input() keys: Set<string>;
  @Input() pathString: string;

  keysByType: { others: Set<string>, toggles: Set<string> };
  pathCache: PathCache = {};

  constructor(public jsonStoreService: JsonStoreService,
    public appGlobalsService: AppGlobalsService,
    public tabsUtilService: TabsUtilService,
    public changeDetectorRef: ChangeDetectorRef,
    public keysStoreService: KeysStoreService) {
    super();
    this.appGlobalsService.adminModeSubject.subscribe(adminMode => {
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['keys']) {
      let keys;
      if (this.tabName) {
        let keyToTabName = this.tabsUtilService.getSchemaKeyToTabName(this.appGlobalsService.config.tabsConfig, this.schema);
        keys = this.keys
          .filter(key => keyToTabName[key] === this.tabName);
      } else {
        keys = this.keys;
      }
      this.keysByType = keys
        .groupBy(key => this.isToggle(key) ? 'toggles' : 'others')
        .toObject() as any;
    }
  }

  // delete only work for others, not toggles (UPDATE: config comment if this changes)
  deleteField(field: string) {
    this.jsonStoreService.removeIn(this.getPathForChild(field));

    this.keysStoreService.deleteKey(this.pathString, field);
  }

  getPathForChild(key: string): Array<any> {
    if (!this.pathCache[key]) {
      this.pathCache[key] = [key];
    }
    return this.pathCache[key];
  }

  onToggleValueChange(field: string, value: boolean) {
    this.jsonStoreService.setIn(this.getPathForChild(field), value);
  }

  private isToggle(field: string): boolean {
    return this.schema.properties[field].toggleColor !== undefined;
  }

  isDisabled(key): boolean {
    return this.schema.properties[key].disabled && !this.appGlobalsService.adminMode ;
  }
}
