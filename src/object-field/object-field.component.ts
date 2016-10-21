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

import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { AbstractFieldComponent } from '../abstract-field';

import { AppGlobalsService } from '../shared/services';

@Component({
  selector: 'object-field',
  styleUrls: [
    './object-field.component.scss'
  ],
  templateUrl: './object-field.component.html'
})
export class ObjectFieldComponent extends AbstractFieldComponent implements OnInit {

  @Input() value: Object;
  @Input() schema: Object;
  @Input() path: string;

  keys: Array<string>;

  @Output() onValueChange: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(public appGlobalsService: AppGlobalsService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.keys = Object.keys(this.value);
  }

  onPropertyChange(propertyValue: any, key: string) {
    this.value[key] = propertyValue;
    this.onValueChange.emit(this.value);
  }

  deleteField(name: string) {
    delete this.value[name];
    this.onValueChange.emit(this.value);
  }

  getFieldPath(name: string): string {
    return `${this.path}.${name}`;
  }

  onFieldAdd(field: string) {
    this.keys.push(field);
  }

}
