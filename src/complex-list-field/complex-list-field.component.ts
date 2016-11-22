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
  ChangeDetectionStrategy,
  SimpleChanges
} from '@angular/core';

import { List, Map } from 'immutable';

import { AbstractListFieldComponent } from '../abstract-list-field';

import { AppGlobalsService, JsonStoreService } from '../shared/services';

@Component({
  selector: 'complex-list-field',
  styleUrls: [
    './complex-list-field.component.scss'
  ],
  templateUrl: './complex-list-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexListFieldComponent extends AbstractListFieldComponent implements OnChanges {

  @Input() values: List<Map<string, any>>;
  @Input() schema: Object;
  @Input() path: Array<any>;

  keys: Array<Array<string>>;

  constructor(public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService) {
    super(appGlobalsService, jsonStoreService);
  }

  onFieldAdd(field: string, index: number) {
    this.keys[index].push(field);
  }

  ngOnChanges(changes: SimpleChanges) {
    let valuesChanges = changes['values'];
    if (valuesChanges) {
      this.keys = valuesChanges.currentValue
        .map(value => value.keySeq().toArray())
        .toArray();
    }
  }

}
