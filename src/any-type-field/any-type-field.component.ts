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
  ChangeDetectionStrategy,
} from '@angular/core';

import { AppGlobalsService, ComponentTypeService } from '../shared/services';

/**
 * AnyFieldComponent
 *
 * This is a dummy component that has no logic, just passes @Input to its child and
 * propagates its child's output to its parent.
 *
 * IMPORTANT:
 * On the other hand it has smart template which has logic to decide which type of
 * component to use according to schema.
 */
@Component({
  selector: 'any-type-field',
  styleUrls: [
    './any-type-field.component.scss'
  ],
  templateUrl: './any-type-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnyTypeFieldComponent {

  @Input() schema: Object;
  @Input() path: Array<any>;
  @Input() value: any;

  constructor(public componentTypeService: ComponentTypeService,
    public  appGlobalsService: AppGlobalsService) { }

  get componentType(): string {
    return this.componentTypeService.getComponentType(this.schema);
  }

  get isDisabled(): boolean {
    return this.schema && this.schema['disabled'] && !this.appGlobalsService.adminMode;
  }
}
