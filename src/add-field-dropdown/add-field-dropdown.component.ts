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

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DomUtilService, EmptyValueService } from '../shared/services';

@Component({
  selector: 'add-field-dropdown',
  styleUrls: [
    './add-field-dropdown.component.scss'
  ],
  templateUrl: './add-field-dropdown.component.html'
})
export class AddFieldDropdownComponent {

  // 'propeties' of an object schema
  @Input() schema: Object;
  @Input() fields: Array<string>;
  @Input() pathString: string;
  @Input() isDisabled: boolean;

  @Output() onFieldAdd: EventEmitter<string> = new EventEmitter<string>();

  expression: string = '';

  constructor(private domUtilService: DomUtilService,
    private emptyValueService: EmptyValueService) { }

  get disabled(): boolean {
    return Object.keys(this.schema).length === this.fields.length;
  }

  focusElementIfOpen(isDropdownOpen: boolean, el: HTMLElement) {
    if (isDropdownOpen) {
      // focus doesn't work without setTimeout, since dropdown is closed when this is called.
      setTimeout(() => el.focus());
    }
  }

  onFieldSelect(field: string) {
    this.onFieldAdd.emit(field);

    let newFieldPathString = `${this.pathString}.${field}`;
    setTimeout(() => this.domUtilService.focusAndSelectFirstInputChildById(newFieldPathString));
  }

}
