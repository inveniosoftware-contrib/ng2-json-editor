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
  SimpleChanges
} from '@angular/core';

import { List, Map } from 'immutable';

import { AbstractListFieldComponent } from '../abstract-list-field';

import { AppGlobalsService, JsonStoreService, DomUtilService } from '../shared/services';

@Component({
  selector: 'complex-list-field',
  styleUrls: [
    './complex-list-field.component.scss'
  ],
  templateUrl: './complex-list-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexListFieldComponent extends AbstractListFieldComponent implements OnChanges, OnInit {

  @Input() values: List<Map<string, any>>;
  @Input() schema: Object;
  @Input() path: Array<any>;

  keys: Array<Array<string>>;

  foundIndices: Array<number> = [];
  currentFound: number = 0;
  currentPage: number = 1;
  expression: string;
  navigator: LongListNavigatorConfig;

  constructor(public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public domUtilService: DomUtilService) {
    super(appGlobalsService, jsonStoreService);
  }

  ngOnInit() {
    this.navigator = this.schema['x_editor_long_list_navigator'];
  }

  ngOnChanges(changes: SimpleChanges) {
    let valuesChanges = changes['values'];
    if (valuesChanges) {
      // FIXME: extract keys for only visible elements
      this.keys = valuesChanges.currentValue
        .map(value => value.keySeq().toArray())
        .toArray();
    }
  }

  onFieldAdd(field: string, index: number) {
    this.keys[index].push(field);
  }

  onFindClick() {
    // clear for new search
    this.foundIndices = [];
    this.currentFound = 0;
    // search to look for the first match
    if (this.navigator.findSingle) {
      let foundIndex = this.values
        .findIndex(value => this.navigator.findSingle(value, this.expression));
      if (foundIndex > -1) {
        this.foundIndices.push(foundIndex);
      }
    }
    // search to look for all matches
    if (this.foundIndices.length === 0 && this.navigator.findMultiple) {
      this.values
        .forEach((value, index) => {
          if (this.navigator.findMultiple(value, this.expression)) {
            this.foundIndices.push(index);
          }
        });
    }
    // navigate to first search result if found any
    if (this.foundIndices.length > 0) {
      this.navigateToItem(this.foundIndices[0]);
    }
  }

  onFoundNavigate(direction: number) {
    // No bound checks, since the buttons are disabled in these cases.
    this.currentFound += direction;
    this.navigateToItem(this.foundIndices[this.currentFound]);
  }

  navigateToItem(index: number) {
    this.currentPage = Math.floor((index / this.navigator.itemsPerPage) + 1);
    let itemId = this.path
      .concat(index)
      .join('.');
    setTimeout(() => this.domUtilService.focusAndSelectFirstInputChildById(itemId));
  }

  shouldDisplayItem(index: number): boolean {
    // if navigator is not enabled, show all
    if (!this.navigator) {
      return true;
    }

    let endIndex = this.currentPage * this.navigator.itemsPerPage;
    return index < endIndex && index >= (endIndex - this.navigator.itemsPerPage);
  }

  getValuePath(index: number): Array<any> {
    return this.path.concat(index);
  }

}
