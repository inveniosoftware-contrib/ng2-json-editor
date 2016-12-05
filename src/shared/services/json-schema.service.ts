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

@Injectable()
export class JsonSchemaService {

  private schema: Object;

  setSchema(schema: Object) {
    this.schema = schema;
  }

  /**
   *
   * @param {Array<any>} path - Path of an element
   * @returns {Object} - Returns the schema extracted from this path
   */
  getSchemaFromPath(path: Array<any>): Object {
    let schema = this.schema['properties'];
    let _path = path.filter(value => {
      return isNaN(value);
    });
    let pathSize = _path.length;
    for (let i = 0; i <= pathSize - 1; i++) {
      schema = schema[_path[i]];
      if (schema['type']) {
        if (schema['type'] === 'array' && !(i === (pathSize - 1))) {
          schema = schema['items']['properties'] || schema['items'];
        }
        if (schema['type'] === 'object' && !(i === (pathSize - 1))) {
          schema =  schema['properties'];
        }
      }
    }
    return schema;
  }
}

