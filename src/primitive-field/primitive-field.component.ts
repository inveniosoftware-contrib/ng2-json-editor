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

import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import { AbstractFieldComponent } from '../abstract-field';
import {
  AppGlobalsService,
  ComponentTypeService,
  JsonStoreService,
  SchemaValidationService,
  PathUtilService,
  DomUtilService
} from '../shared/services';
import { JSONSchema } from '../shared/interfaces';


@Component({
  selector: 'primitive-field',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './primitive-field.component.scss'
  ],
  templateUrl: './primitive-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimitiveFieldComponent extends AbstractFieldComponent implements OnInit {

  @Input() schema: JSONSchema;
  @Input() path: Array<any>;
  @Input() value: string | number | boolean;

  constructor(public schemaValidationService: SchemaValidationService,
    public componentTypeService: ComponentTypeService,
    public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService,
    public domUtilService: DomUtilService
  ) {
    super(appGlobalsService, pathUtilService);
  }

  get valueType(): string {
    return this.componentTypeService.getComponentType(this.schema);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  commitValueChange() {
    this.domUtilService.clearHighlight();

    let errors = this.schemaValidationService.validateValue(this.value, this.schema);
    if (!errors.length) {
      this.jsonStoreService.setIn(this.path, this.value);
    }
    this.errors = errors;
  }

  onKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.commitValueChange();
      event.preventDefault();
    }
  }

  onAutocompleteInputValueChange(value: string) {
    this.value = value;
  }

  onSearchableDropdownSelect(value: string) {
    this.value = value;
    this.commitValueChange();
  }

  get tabIndex(): number {
    return this.schema.disabled ? -1 : 1;
  }

  get tooltipPosition(): string {
    let tooltipPlacement = 'top';
    if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
      tooltipPlacement = 'bottom';
    }
    return tooltipPlacement;
  }

  get disabled(): boolean {
    return this.schema.disabled && !this.appGlobalsService.adminMode;
  }

  get disabledClass(): string {
    return this.disabled ? 'disabled' : '';
  }

}
