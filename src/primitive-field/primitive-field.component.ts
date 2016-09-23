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

import { Component, Input, Output, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';

import { AbstractFieldComponent } from '../abstract-field';

import {
  AppGlobalsService,
  ComponentTypeService,
  SchemaValidationService
} from '../shared/services';

@Component({
  selector: 'primitive-field',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './primitive-field.component.scss'
  ],
  templateUrl: './primitive-field.component.html'
})
export class PrimitiveFieldComponent extends AbstractFieldComponent implements OnInit {

  @Input() value: string | number | boolean;
  @Input() schema: Object;
  @Input() path: string;
  valueType: string;

  @Output() onValueChange = new EventEmitter<any>();

  constructor(private schemaValidationService: SchemaValidationService,
    private componentTypeService: ComponentTypeService,
    public appGlobalsService: AppGlobalsService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.schema = this.schema || {};
    this.valueType = this.componentTypeService.getComponentType(this.schema);
  }

  onModelChange(value: any) {
    // Validation
    if (this.schema['type'] === 'string' && this.schema['enum'] === undefined) {
      try {
        this.schemaValidationService.validateStringValue(value.toString(), this.schema);
      } catch (error) {
        console.error(error);
      }
    }
    // TODO: should we make the change even if it is not validated
    this.value = value;
    this.onValueChange.emit(value);
  }

}
