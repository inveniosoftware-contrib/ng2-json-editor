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
import * as _ from 'lodash';

import { JsonUtilService } from './json-util.service';
import { ComponentTypeService } from './component-type.service';
import { JSONSchema } from '../interfaces';

@Injectable()
export class SchemaFixerService {

  constructor(private jsonUtilService: JsonUtilService,
    private componentTypeService: ComponentTypeService) { }

  /**
   * Fixes schema to be in a format that expected by json-editor
   *
   * @param {Object} schema - json schema
   * @param {Object} config - schema specific options
   * @return {Object} - fixed schema
   */
  fixSchema(schema: JSONSchema, config?: Object): Object {
    if (config) {
      this.enrichSchemaWithConfig(schema, config);
    }
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
  private enrichSchemaWithConfig(schema: JSONSchema, config: Object) {
    Object.keys(config).forEach(field => {
      try {
        let schemaField;
        if (field === '') {
          // enrich root schema when the config path is empty
          schemaField = schema;
        } else {
          schemaField = this.jsonUtilService.getValueInPath(schema.properties, field);
        }
        Object.assign(schemaField, config[field]);
      } catch (error) {
        console.warn(`Config for "${field}" path is ignored, since it does not exist in schema`);
      }
    });
  }
  /**
   * Applies all fixes to schema recursively
   */
  private fixRecursively(schema: JSONSchema): JSONSchema {
    if (schema.anyOf) {
      schema = this.fixAnyOf(schema);
    } else if (schema.allOf) {
      schema = this.fixAllOf(schema);
    }
    if (schema.order) {
      schema = this.fixOrder(schema);
    }
    if (schema.disabled) {
      schema = this.fixDisabled(schema);
    }
    if (schema.alwaysShow) {
      schema = this.fixAlwaysShow(schema);
    }
    // schema fixes must be done above

    // recursively call for deeper parts of schema
    if (schema.properties) {
      Object.keys(schema.properties)
        .forEach(prop => {
          schema.properties[prop] = this.fixRecursively(schema.properties[prop]);
        });
    } else if (schema.items) {
      schema.items = this.fixRecursively(schema.items);
    }
    // fixes that needs above fixes to be done deeply for the current schema
    schema.componentType = this.componentTypeService.getComponentType(schema);

    return Object.assign({}, schema);
  }

  /**
   * Fixes disabled config to assign the disabled attribute
   * to array items or object properties
   */
  private fixDisabled(schema: JSONSchema): JSONSchema {
    if (schema.items) {
      schema.items.disabled = true;
    } else if (schema.properties) {
      Object.keys(schema.properties)
        .forEach(prop => {
          schema.properties[prop].disabled = true;
        });
    }
    return schema;
  }

  /**
   * Fixes order config to assign the right priority to properties
   */
  private fixOrder(schema: JSONSchema): JSONSchema {
    let order: Array<string> = schema.order;
    order.forEach((orderKey: string, index: number) => {
      let priority = order.length - index;
      if (orderKey in schema.properties) {
        schema.properties[orderKey].priority = priority;
      } else {
        console.warn(`${orderKey} defined in order config does not exist in schema.`);
      }
    });
    return schema;
  }

  /**
   * Fixes anyOf schemas with exactly same property structure
   * it merges all enum fields in anyOf elements
   */
  private fixAnyOf(schema: JSONSchema): JSONSchema {
    let anyOf = schema.anyOf;

    // find existence count of all enum properties in anyOf elements
    // the reason of this, a field could be enum type for some and not for some other anyOf element
    let enumPropCount = {};
    anyOf.forEach(anyOfElement => {
      Object.keys(anyOfElement.properties)
        .filter(prop => anyOfElement.properties[prop].enum)
        .forEach(prop => {
          if (!enumPropCount[prop]) {
            enumPropCount[prop] = 0;
          }
          enumPropCount[prop]++;
        });
    });

    // combine all enum arrays in anyOf elements
    let enums = {};
    Object.keys(enumPropCount)
      .forEach(prop => {
        anyOf.forEach(anyOfElement => {
          if (!enums[prop]) {
            enums[prop] = [];
          }
          let enumValues = anyOfElement.properties[prop].enum;
          // check if current field is enum for current anyOf element
          if (enumValues) {
            enums[prop] = enums[prop].concat(enumValues);
          }
        });
      });

    let fixedSchema = anyOf[0];
    // shallow cleaning of format and pattern
    Object.keys(fixedSchema.properties)
      .forEach(prop => {
        delete fixedSchema.properties[prop].format;
        delete fixedSchema.properties[prop].pattern;
      });

    Object.keys(enumPropCount)
      .forEach(prop => {
        let uniqueEnumValues = Array.from(new Set(enums[prop])) as Array<string>;
        // if a field enum for all anyOf elements
        if (enumPropCount[prop] === anyOf.length) {
          // merge all enum values into one
          fixedSchema.properties[prop].enum = uniqueEnumValues;
          // if a field enum for some of anyOf elements
        } else {
          // create a autocomplete config so that it will allow any values
          // but autocomplete from enum values from where the field is defined as enum
          delete fixedSchema.properties[prop].enum;
          fixedSchema.properties[prop].autocompletionConfig = {
            source: uniqueEnumValues,
            size: 7
          };
        }
      });
    // copy disabled attribute inside fixedSchema because it
    // is outside anyOf element and is ignored
    if (schema.disabled) {
      fixedSchema.disabled = true;
    }
    return fixedSchema;
  }

  private fixAllOf(schema: JSONSchema): JSONSchema {
    return _.merge({}, ...schema.allOf) as JSONSchema;
  }

  /**
   * Removes alwayShow fields that aren't in the schema.properties
   * and warns on console.
   */
  private fixAlwaysShow(schema: JSONSchema): JSONSchema {
    let alwaysShow: Array<string> = schema.alwaysShow;
    schema.alwaysShow = alwaysShow.filter(key => {
      if (schema.properties[key]) {
        return true;
      } else {
        console.warn(`${key} is configured as alwaysShow but it is not in ${JSON.stringify(Object.keys(schema.properties))}`);
      }
    });
    return schema;
  }

}
