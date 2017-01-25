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

import { Pipe, PipeTransform } from '@angular/core';

import { EmptyValueService } from '../services';
import { List } from 'immutable';

@Pipe({
  name: 'selfOrEmpty',
})

export class SelfOrEmptyPipe implements PipeTransform {

  constructor(public emptyValueService: EmptyValueService) {}

  /**
   * Transforms a value to empty value if it is undefined, 
   * returns self if it is already defined
   * 
   * @param {any} value
   * @param {Object} schema 
   * @return {any} - empty value if given value is undefined or value itself.
   */
  transform(value: any, schema: Object): any {
    if (value) {
      if (List.isList(value) && value.size === 0) {
        return this.emptyValueService.generateEmptyValue(schema);
      }
      return value;
    }
    return this.emptyValueService.generateEmptyValue(schema);
  }
}
