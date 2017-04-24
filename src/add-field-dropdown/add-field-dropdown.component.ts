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

import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Set } from 'immutable';

import { DomUtilService, EmptyValueService, PathUtilService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  selector: 'add-field-dropdown',
  styleUrls: [
    './add-field-dropdown.component.scss'
  ],
  templateUrl: './add-field-dropdown.component.html'
})
export class AddFieldDropdownComponent {

  @Input() schema: JSONSchema;
  @Input() fields: Set<string>;
  @Input() pathString: string;

  @Output() onFieldAdd: EventEmitter<string> = new EventEmitter<string>();

  expression = '';

  constructor(public elementRef: ElementRef,
    public domUtilService: DomUtilService,
    public emptyValueService: EmptyValueService,
    public pathUtilService: PathUtilService) { }

  get disabled(): boolean {
    return Object.keys(this.schema.properties).length === this.fields.size;
  }

  onDropdownShown() {
    setTimeout(() =>
      this.domUtilService.focusFirstInputChildByElement(this.elementRef.nativeElement));
  }

  onFieldSelect(field: string) {
    this.onFieldAdd.emit(field);

    let newFieldPathString = `${this.pathString}${this.pathUtilService.separator}${field}`;
    this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString);
    this.expression = '';
  }

}
