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

import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Set } from 'immutable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { DomUtilService, PathUtilService, KeysStoreService, JsonSchemaService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  selector: 'add-nested-field-dropdown',
  styleUrls: [
    './add-field-dropdown.component.scss',
    './add-nested-field-dropdown.component.scss'
  ],
  templateUrl: './add-nested-field-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNestedFieldDropdownComponent implements OnChanges, OnDestroy {

  @Input() schema: JSONSchema;
  @Input() pathString: string;
  @Input() isDisabled: boolean;

  nestedKeysMap: { [path: string]: Set<string> };
  keysChangeSubscription: Subscription;

  constructor(public keysStoreService: KeysStoreService,
    public jsonSchemaService: JsonSchemaService,
    public pathUtilService: PathUtilService,
    public domUtilService: DomUtilService) { }

  ngOnChanges(changes: SimpleChanges) {
    const pathStringChange = changes['pathString'];
    if (pathStringChange) {
      this.nestedKeysMap = {};
      this.nestedKeysMap[this.pathString] = this.keysStoreService.keysMap[this.pathString];
      const nestedPathPrefix = this.pathString + this.pathUtilService.separator;
      Object.keys(this.keysStoreService.keysMap)
        .filter(path => path.startsWith(nestedPathPrefix))
        .forEach(path => {
          this.nestedKeysMap[path] = this.keysStoreService.keysMap[path];
        });

      if (this.keysChangeSubscription) {
        this.keysChangeSubscription.unsubscribe();
      }
      this.keysChangeSubscription = this.keysStoreService.onKeysChange
        .filter(change => change.path.startsWith(this.pathString))
        .subscribe(change => { this.nestedKeysMap[change.path] = change.keys; });
    }
  }

  ngOnDestroy() {
    this.keysChangeSubscription.unsubscribe();
  }

  /**
   * Return keys that could be added for the given path.
   *
   * @return schema key - hidden keys - existing keys
   */
  addableKeysForPath(path: string): Set<string> {
    const keys = this.nestedKeysMap[path];
    const schema = this.jsonSchemaService.forPathString(path);
    // || schema.items.properties is to handle the keys when the path belongs to table-list.
    const schemaProps = schema.properties || schema.items.properties;
    const schemaKeys = Set<string>(Object.keys(schemaProps)
      .filter(key => !schemaProps[key].hidden));
    const addableKeys = schemaKeys.subtract(keys);
    return addableKeys.size > 0 ? addableKeys : undefined;
  }

  onFieldSelect(path: string, key: string) {
    let schema = this.jsonSchemaService.forPathString(path);
    if (schema.componentType === 'table-list') {
      schema = schema.items;
    }
    const newKeyPath = this.keysStoreService.addKey(path, key, schema);
    if (this.keysStoreService.keysMap[newKeyPath]) {
      this.nestedKeysMap[newKeyPath] = this.keysStoreService.keysMap[newKeyPath];
    }
    this.domUtilService.focusAndSelectFirstEditableChildById(newKeyPath);
  }
}
