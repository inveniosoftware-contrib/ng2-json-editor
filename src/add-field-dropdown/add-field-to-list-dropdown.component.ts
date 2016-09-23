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

import { Component, Input } from '@angular/core';

import { AbstractAddFieldDropdownComponent } from './abstract-add-field-dropdown.component';

import { EmptyValueService } from '../shared/services';

@Component({
  selector: 'add-field-to-list-dropdown',
  styleUrls: [
    './add-field-dropdown.component.scss'
  ],
  templateUrl: './add-field-dropdown.component.html'
})
export class AddFieldToListDropdownComponent extends AbstractAddFieldDropdownComponent {

  // 'items.properties' of an array of objects schema
  @Input() schema: Object;
  // WARN: every value of values should have the same properties
  @Input() values: Array<Object>;
  // sample value from values, to extract keys
  @Input() value: Object;

  constructor(private emptyValueService: EmptyValueService) {
    super();
  }

  addFieldFromSchema(field: string) {
    let fieldSchema = this.schema[field];
    let emptyValue = this.emptyValueService.generateEmptyValue(fieldSchema);
    this.values.forEach(value => {
      if (typeof emptyValue === 'object') {
        // Object.assign is used to create new reference per value, 
        // so that they won't be binded to same variable
        value[field] = Object.assign({}, emptyValue);
      } else {
        value[field] = emptyValue;
      }
    });
  }

}
