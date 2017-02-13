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
  TabIndexService,
  PathUtilService
} from '../shared/services';

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

  @Input() schema: Object;
  @Input() path: Array<any>;

  @Input() value: string | number | boolean;

  constructor(public schemaValidationService: SchemaValidationService,
    public componentTypeService: ComponentTypeService,
    public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public tabIndexService: TabIndexService,
    public pathUtilService: PathUtilService) {
    super(appGlobalsService, pathUtilService);
  }

  get valueType(): string {
    return this.componentTypeService.getComponentType(this.schema);
  }

  ngOnInit() {
    super.ngOnInit();
    this.schema = this.schema || {};
    if (!(this.valueType === 'boolean')) {
      this.setTabIndex();
    }
  }

  commitValueChange() {
    // Validation
    if (this.schema['type'] === 'string' && this.schema['enum'] === undefined) {
      try {
        this.schemaValidationService.validateStringValue(this.value.toString(), this.schema);
      } catch (error) {
        console.error(error);
      }
    }
    // TODO: should we make the change even if it is not validated
    this.jsonStoreService.setIn(this.path, this.value);
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
    return this.tabIndexService.getElemTabIndex(this.pathString);
  }

  setTabIndex() {
    this.tabIndexService.addElemTabIndex(this.pathString);
  }
}
