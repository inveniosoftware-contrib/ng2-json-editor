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

import { Injectable } from '@angular/core';

import { EmptyValueService } from './empty-value.service';
import { ComponentTypeService } from './component-type.service';

@Injectable()
export class RecordFixerService {

  constructor(private emptyValueService: EmptyValueService,
    private componentTypeService: ComponentTypeService) { }

  /**
   * Fixes given record according to given schema, in other words
   * changes it to match the format expected the by te json-editor
   * 
   * @param {Object} rawRecord - json record to be fixed
   * @param {Object} schema - extended schema of rawRecord
   * @return {Object} - fixed record
   */
  fixRecord(rawRecord: Object, schema: Object): Object {
    let record = Object.assign({}, rawRecord);
    Object.keys(record).forEach(field => {
      if (!schema['properties'][field]) {
        // Delete if field is not in schema!
        this.deleteField(record, field);
      } else {
        // Fix the field and all children.
        this.fix(field, record, schema['properties'][field]);
      }
    });
    return record;
  }

  /**
   * Visits all parts of record recursivly, along with the subschema of the part
   * and apply required fixes.
   * 
   * NOTE: the reason that parent and key are passed instead of the direct value
   * is to be able do some operations that needs the parent such as `delete`.
   * 
   * TODO: add special case for arrays because fixes are the same for
   * all elements.
   * 
   * @param key {string | number} - field name or element index
   * @param parent {Object | Array<any>} - parent of the field/element
   * @param schema - schema of visited field/element
   */
  private fix(key: string | number, parent: Object | Array<any>, schema: Object) {
    if (schema['x_editor_hidden']) {
      return;
    }

    // Fixes for each type/condition, can be added below.
    let value = parent[key];

    // Recursive calls
    if (schema['type'] === 'object') {
      // Looping over record to filter out fields that are not in schema.
      Object.keys(value).forEach(prop => {
        if (!schema['properties'][prop]) {
          // we don't like fields without schema!
          this.deleteField(value, prop);
        } else {
          this.fix(prop, value, schema['properties'][prop]);
        }
      });
    } else if (schema['type'] === 'array') {
      value.forEach((element, index) => {
        this.fix(index, value, schema['items']);
      });
    }
  }

  /**
   * Deletes given field from the given object.
   * Used for deleting fields that aren't on the schema.
   * 
   * TODO: replace this with only `delete` when logging is not necessary!
   */
  private deleteField(object: Object, field: string) {
    delete object[field];
    console.log(`REMOVED: ${field} not in schema`);
  }
}
