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
  OnChanges,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges
} from '@angular/core';
import { List, Set } from 'immutable';

import { AbstractFieldComponent } from '../abstract-field';
import {
  AppGlobalsService,
  JsonStoreService,
  PathUtilService
} from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  // Defined as attribute selector not to break table > tr > td html structure
  // tslint:disable-next-line
  selector: '[table-item-field]',
  styleUrls: [
    './table-item-field.component.scss'
  ],
  templateUrl: './table-item-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableItemFieldComponent extends AbstractFieldComponent {

  @Input() value: Map<string, any>;
  @Input() schema: JSONSchema;
  @Input() path: Array<any>;
  @Input() keys: Set<string>;

  constructor(public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService,
    public changeDetectorRef: ChangeDetectorRef) {
    super(appGlobalsService, pathUtilService, changeDetectorRef, jsonStoreService);
  }
}
