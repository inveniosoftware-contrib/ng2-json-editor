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

import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Set, Iterable } from 'immutable';

import { DomUtilService, KeysStoreService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'add-field-dropdown',
  styleUrls: [
    './add-field-dropdown.component.scss'
  ],
  templateUrl: './add-field-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFieldDropdownComponent implements OnChanges {

  @Input() schema: JSONSchema;
  @Input() fields: Set<string>;
  @Input() pathString: string;
  @Input() isDisabled: boolean;

  addableKeys: Iterable<string, string>;
  expression = '';
  hidden = false;

  constructor(private elementRef: ElementRef,
    private domUtilService: DomUtilService,
    private keysStoreService: KeysStoreService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['schema'] || changes['fields']) {
      this.hidden = Object.keys(this.schema.properties).length === this.fields.size;
      this.addableKeys = Set.fromKeys(this.schema.properties)
        .subtract(this.fields)
        .filter(field => !this.schema.properties[field].hidden);
    }
  }

  onDropdownShown() {
    setTimeout(() =>
      this.domUtilService.focusFirstInputChildByElement(this.elementRef.nativeElement));
  }

  onFieldSelect(field: string) {
    const newFieldPathString = this.keysStoreService.addKey(this.pathString, field, this.schema);
    this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString);
    this.expression = '';
  }

}
