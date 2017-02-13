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

import { List, Map, Set } from 'immutable';

import { AbstractListFieldComponent } from '../abstract-list-field';

import { AppGlobalsService, JsonStoreService, TabIndexService, DomUtilService, PathUtilService } from '../shared/services';

import { LongListNavigatorConfig } from '../shared/interfaces';

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

  keys: List<Set<string>>;
  paginatedIndices: Array<number>;

  foundIndices: Array<number>;
  currentFound = 0;
  currentPage = 1;
  findExpression: string;
  navigator: LongListNavigatorConfig;
  shouldDisplayFoundNavigation: boolean;

  constructor(public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public domUtilService: DomUtilService,
    public tabIndexService: TabIndexService,
    public pathUtilService: PathUtilService) {
    super(appGlobalsService, jsonStoreService, tabIndexService, pathUtilService);
  }

  ngOnInit() {
    this.navigator = this.schema['longListNavigatorConfig'];
    if (this.navigator) {
      this.paginatedIndices = this.getIndicesForPage(this.currentPage);
    } else {
      // set all indices as paginated indices if pagination is not enabled.
      this.paginatedIndices = this.values.keySeq().toArray();
    }
    this.keys = this.getKeysForCurrentPage();
  }

  ngOnChanges(changes: SimpleChanges) {
    let valuesChange = changes['values'];
    if (valuesChange && !valuesChange.isFirstChange()) {
      let preSize = valuesChange.previousValue.size;
      let curSize = valuesChange.currentValue.size;

      if (curSize !== preSize) {
        if (this.navigator) {
          let lastPage = this.getPageForIndex(curSize - 1);
          // change the page if a new element is added and it's not on the last page
          if (curSize > preSize && this.currentPage !== lastPage) {
            this.currentPage = lastPage;
          } else {
            this.paginatedIndices = this.getIndicesForPage(this.currentPage);
          }
        } else {
          this.paginatedIndices = this.values.keySeq().toArray();
        }
      }

      this.keys = this.getKeysForCurrentPage();
    }
  }

  onFieldAdd(index: number, field: string) {
    this.keys = this.keys
      .update(index, value => value.add(field));
    setTimeout(() => {
      this.tabIndexService.sortAndSynchronizeTabIndexes();
    });
  }

  deleteField(index: number, field: string) {
    this.values = this.values.removeIn([index, field]);
    this.jsonStoreService.setIn(this.path, this.values);

    // remove it from keys too, so that it will not be displayed as empty
    this.keys = this.keys
      .update(index, value => value.remove(field));
  }

  onFindClick() {
    // clear for new search
    this.foundIndices = [];
    this.currentFound = 0;
    // search to look for the first match
    if (this.navigator.findSingle) {
      let foundIndex = this.values
        .findIndex(value => this.navigator.findSingle(value, this.findExpression));
      if (foundIndex > -1) {
        this.foundIndices.push(foundIndex);
      }
    }
    // search to look for all matches
    if (this.foundIndices.length === 0 && this.navigator.findMultiple) {
      this.values
        .forEach((value, index) => {
          if (this.navigator.findMultiple(value, this.findExpression)) {
            this.foundIndices.push(index);
          }
        });
    }
    // navigate to first search result if found any
    if (this.foundIndices.length > 0) {
      this.navigateToItem(this.foundIndices[0]);
      this.shouldDisplayFoundNavigation = true;
    } else {
      this.shouldDisplayFoundNavigation = false;
    }
  }

  onFindInputKeypress(key: string) {
    if (key === 'Enter') {
      this.onFindClick();
    }
  }

  onFoundNavigate(direction: number) {
    // No bound checks, since the buttons are disabled in these cases.
    this.currentFound += direction;
    this.navigateToItem(this.foundIndices[this.currentFound]);
  }

  navigateToItem(index: number) {
    this.currentPage = this.getPageForIndex(index);
    let itemPath = this.path.concat(index);
    let itemId = this.pathUtilService.toPathString(itemPath);
    setTimeout(() => this.domUtilService.focusAndSelectFirstInputChildById(itemId));
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.paginatedIndices = this.getIndicesForPage(page);
    this.keys = this.getKeysForCurrentPage();
    setTimeout(() => {
      this.tabIndexService.sortAndSynchronizeTabIndexes();
    });
  }

  getIndicesForPage(page: number): Array<number> {
    let start = (page - 1) * this.navigator.itemsPerPage;
    let indices: Array<number> = Array.apply(0, Array(this.navigator.itemsPerPage))
      .map((el, index) => start + index);
    // check if the indices includes some numbers that are out of values index range.
    let lastIndexDiff = indices[indices.length - 1] - (this.values.size - 1);
    if (lastIndexDiff > 0) {
      indices.splice(indices.length - lastIndexDiff);
    }
    return indices;
  }

  getKeysForCurrentPage(): List<Set<string>> {
    return List(
      this.paginatedIndices
        .map(pIndex => this.values.get(pIndex).keySeq().toSet())
    );
  }

  getPageForIndex(index: number): number {
    return Math.floor((index / this.navigator.itemsPerPage) + 1);
  }
}
