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
import { JSONSchema, SchemaOptions } from '../interfaces';

@Injectable()
export class SchemaFixerService {

  constructor(private jsonUtilService: JsonUtilService,
    private componentTypeService: ComponentTypeService) { }

  /**
   * Fixes schema to be in a format that expected by json-editor
   *
   * @param schema - json schema
   * @param config - schema specific options
   * @return {JSONSchema} - fixed schema
   */
  fixSchema(originalSchema: JSONSchema, config?: SchemaOptions): JSONSchema {
    let schema = _.cloneDeep(originalSchema);
    if (config) {
      schema = this.enrichSchemaWithConfig(schema, config);
    }
    schema = this.fixRecursively(schema);
    return schema;
  }

  /**
   * Enriches given schema with given configuration objects
   * puts config into correct places in schema.
   *
   * @param schema - json schema
   * @param config - schema specific options
   */
  private enrichSchemaWithConfig(schema: JSONSchema, config: SchemaOptions): JSONSchema {
    return _.mergeWith(schema, config, (currentSchema, currentConfig, key) => {
      if ((key === 'properties' || key === 'items') && !currentSchema) {
        console.warn(`config => ${JSON.stringify(currentConfig, (configKey, value) => {
          if (typeof value === 'function') {
            return 'ƒ()';
          }
          return value;
        }, 2)} should not be under "${key}" because schema does not have "${key}"`);
        // cancel merge to avoid creating broken json schema
        return null;
      }
      if (currentSchema && key === 'properties') {
        const configKeys = Object.keys(currentConfig);
        configKeys
          .filter(configKey => !currentSchema[configKey])
          .forEach(wrongConfigKey => {
            delete currentConfig[wrongConfigKey];
            console.warn(wrongConfigKey);
          });
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
    if (schema.alwaysShowRegExp) {
      schema = this.fixAlwaysShowRegExp(schema);
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

    return schema;
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
    const order: Array<string> = schema.order;
    order.forEach((orderKey: string, index: number) => {
      const priority = order.length - index;
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
    const anyOf = schema.anyOf;

    // find existence count of all enum properties in anyOf elements
    // the reason of this, a field could be enum type for some and not for some other anyOf element
    const enumPropCount = {};
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
    const enums = {};
    Object.keys(enumPropCount)
      .forEach(prop => {
        anyOf.forEach(anyOfElement => {
          if (!enums[prop]) {
            enums[prop] = [];
          }
          const enumValues = anyOfElement.properties[prop].enum;
          // check if current field is enum for current anyOf element
          if (enumValues) {
            enums[prop] = enums[prop].concat(enumValues);
          }
        });
      });

    const fixedSchema = anyOf[0];
    // shallow cleaning of format and pattern
    Object.keys(fixedSchema.properties)
      .forEach(prop => {
        delete fixedSchema.properties[prop].format;
        delete fixedSchema.properties[prop].pattern;
      });

    Object.keys(enumPropCount)
      .forEach(prop => {
        const uniqueEnumValues = Array.from(new Set(enums[prop])) as Array<string>;
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
   * Adds keys that matches `alwaysShowRegExp` to `alwaysShow`.
   * Passes `alwaysShowRegExp` down to children so that it is applied recursively.
   */
  private fixAlwaysShowRegExp(schema: JSONSchema): JSONSchema {
    if (!schema.alwaysShow) {
      schema.alwaysShow = [];
    }
    Object.keys(schema.properties)
      .forEach(key => {
        // pass alwaysShowRegExp down to apply it recursively.
        const subSchema = schema.properties[key];
        if (subSchema.type === 'object') {
          subSchema.alwaysShowRegExp = schema.alwaysShowRegExp;
        }

        if (key.search(schema.alwaysShowRegExp) > -1) {
          schema.alwaysShow.push(key);
        }
      });
    return schema;
  }

  /**
   * Removes alwayShow fields that aren't in the schema.properties
   * and warns on console.
   */
  private fixAlwaysShow(schema: JSONSchema): JSONSchema {
    const alwaysShow = schema.alwaysShow;
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
