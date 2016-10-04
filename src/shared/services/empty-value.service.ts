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
import { AlwaysShowPathHelper } from './always-show-path.helper';

@Injectable()
export class EmptyValueService {

  private static defaultValueLookup = {
    'string': '',
    'boolean': false
  };

  generateEmptyValue(schema: Object): any {
    let emptyValue = this.generateEmptyValueRecursively(schema);
    new AlwaysShowPathHelper().getAlwaysShowFieldPaths(schema)
      .forEach(path => {
        this.insertEmptyIntoPath(path, emptyValue, schema);
      });
    return emptyValue;
  }

  private generateEmptyValueRecursively(schema: Object): any {
    if (schema['type'] === 'object') {
      let emptyObject = {};
      Object.keys(schema['properties'])
        .filter(prop => {
          let required: Array<string> = schema['required'] || [];
          return required.indexOf(prop) > -1;
        }).forEach(prop => {
          let propSchema = schema['properties'][prop];
          emptyObject[prop] = this.generateEmptyValueRecursively(propSchema);
        });
      return emptyObject;
    }
    if (schema['type'] === 'array') {
      let emptyArray = [];
      let arrayElementSchema = schema['items'];
      emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
      return emptyArray;
    }
    return EmptyValueService.defaultValueLookup[schema['type']];
  }

  /*
   * Inserts empty value into a highest levelproperty going through the given path.
   * 
   * It goes into path step by step until empty values inserted through the all path.
   * 
   * @param {Array<string>} path - array of path elements
   * @param {any} value - value which the property will be inserted
   * @param {Object} schema - jsonschema of value
   */
  private insertEmptyIntoPath(path: Array<string>, value: any, schema: Object) {
    let subSchema = schema;
    for (let i = 0; i < path.length; i++) {
      let parentSchema = subSchema;
      subSchema = (subSchema['properties'] || subSchema['items']['properties'])[path[i]];

      if (parentSchema['type'] === 'array') {
        value[0][path[i]] = this.generateEmptyValueRecursively(subSchema);
        value = value[0][path[i]];
      } else {
        value[path[i]] = this.generateEmptyValueRecursively(subSchema);
        value = value[path[i]];
      }
    }
  }

}
