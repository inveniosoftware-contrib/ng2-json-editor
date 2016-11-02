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

import { JsonUtilService } from './json-util.service';

@Injectable()
export class SchemaFixerService {

  constructor(private jsonUtilService: JsonUtilService) { }

  /**
   * Fixes schema to be in a format that expected by json-editor
   * 
   * @param {Object} schema - json schema
   * @param {Object} config - schema specific options
   * @return {Object} - fixed schema
   */
  fixSchema(schema: Object, config: Object): Object {

    this.enrichSchemaWithConfig(schema, config);
    schema = this.fixRecursively(schema);
    return schema;
  }

  /**
   * Enriches given schema with given configuration objects
   * puts config into correct places in schema.
   * 
   * @param {Object} schema - json schema
   * @param {Object} config - schema specific options
   */
  private enrichSchemaWithConfig(schema: Object, config: Object) {
    Object.keys(config).forEach(field => {
      let schemaField = this.jsonUtilService.getValueInPath(schema['properties'], field);
      Object.assign(schemaField, config[field]);
    });
  }
  /**
   * Applies all fixes to schema recursively
   */
  private fixRecursively(schema: Object): Object {
    if (schema['anyOf']) {
      schema = this.fixAnyOf(schema);
    }
    // schema fixes must be done above

    // recursively call for deeper parts of schema
    if (schema['properties']) {
      Object.keys(schema['properties'])
        .forEach(prop => {
          schema['properties'][prop] = this.fixRecursively(schema['properties'][prop]);
        });
    } else if (schema['items']) {
      schema['items'] = this.fixRecursively(schema['items']);
    }
    return schema;
  }

  /**
   * Fixes anyOf schemas with exactly same property structure
   * it merges all enum fields in anyOf elements
   */
  private fixAnyOf(schema: Object): Object {
    let anyOf: Array<Object> = schema['anyOf'];
    // find enum types
    let anyOfProps = anyOf[0]['properties'];
    let enumPropNames = Object.keys(anyOfProps)
      .filter(prop => anyOfProps[prop]['enum']);
    // concat enum values for each enum property
    let enums = {};
    anyOf.forEach(anyOfElement => {
      enumPropNames.forEach(propName => {
        if (!enums[propName]) {
          enums[propName] = [];
        }
        enums[propName] = enums[propName].concat(anyOfElement['properties'][propName]['enum']);
      });
    });
    let fixedSchema = anyOf[0];
    // shallow cleaning of format and pattern
    Object.keys(fixedSchema['properties'])
      .forEach(prop => {
        delete fixedSchema['properties'][prop]['format'];
        delete fixedSchema['properties'][prop]['pattern'];
      });
    // merge all values of each enum property
    enumPropNames.forEach(propName => {
      // use Set to have unique values
      fixedSchema['properties'][propName]['enum'] = Array.from(new Set(enums[propName]));
    });
    return fixedSchema;
  }

}
