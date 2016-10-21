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

import { AbstractListFieldComponent } from '../abstract-list-field';

import {
  AppGlobalsService,
  EmptyValueService
} from '../shared/services';

@Component({
  selector: 'complex-list-field',
  styleUrls: [
    './complex-list-field.component.scss'
  ],
  templateUrl: './complex-list-field.component.html'
})
export class ComplexListFieldComponent extends AbstractListFieldComponent implements OnInit {

  @Input() values: Array<Object>;
  @Input() schema: Object;
  @Input() path: string;

  keys: Array<Array<string>>;

  @Output() onValuesChange: EventEmitter<Array<Object>> = new EventEmitter<Array<Object>>();

  constructor(public emptyValueService: EmptyValueService,
    public appGlobalsService: AppGlobalsService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.keys = this.values
      .map(value => Object.keys(value));
  }

  onFieldAdd(field: string, index: number) {
    this.keys[index].push(field);
  }

  /**
   * @override
   * to update keys
   */
  moveElement(index: number, direction: number) {
    super.moveElement(index, direction);

    // update keys array when element moved
    let newIndex = index + direction;
    let temp = this.keys[index];
    this.keys[index] = this.keys[newIndex];
    this.keys[newIndex] = temp;
  }


  /**
   * @override
   * to update keys
   */
  addNewElement() {
    super.addNewElement();

    // update keys array when element moved
    this.keys.push([]);
  }

  /**
   * @override
   * to update keys
   */
  deleteElement(index: number) {
    super.deleteElement(index);

    // update keys array when element moved
    this.keys.splice(index, 1);
  }
}
