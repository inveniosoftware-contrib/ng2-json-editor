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
  SimpleChanges,
  ChangeDetectorRef,
  TemplateRef
} from '@angular/core';
import { List, Map, Set, Iterable } from 'immutable';

import { AbstractListFieldComponent } from '../abstract-list-field';
import {
  AppGlobalsService,
  JsonStoreService,
  DomUtilService,
  PathUtilService,
  ListPageChangerService,
  ProblemsService
} from '../shared/services';
import { LongListNavigatorConfig, JSONSchema, PaginatedItem } from '../shared/interfaces';

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
  @Input() schema: JSONSchema;
  @Input() path: Array<any>;

  paginatedItems: Iterable<number, PaginatedItem>;
  paginatableItems: Iterable<number, PaginatedItem>;

  foundIndices: Array<number>;
  currentFound = 0;
  currentPage = 1;
  findExpression: string;
  navigator: LongListNavigatorConfig;
  shouldDisplayFoundNavigation: boolean;
  private _shouldDisplayOnlyEditFormItems = false;

  constructor(public appGlobalsService: AppGlobalsService,
    public problemsService: ProblemsService,
    public jsonStoreService: JsonStoreService,
    public domUtilService: DomUtilService,
    public pathUtilService: PathUtilService,
    public changeDetectorRef: ChangeDetectorRef,
    public listPageChangerService: ListPageChangerService) {
    super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.navigator = this.schema.longListNavigatorConfig;
    this.paginatableItems = this.getPaginatableItems();
    this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);

    if (this.navigator) {
      this.listPageChangerService
        .registerPaginatedList(this.pathString, this.navigator.itemsPerPage)
        .skipWhile(page => page === this.currentPage)
        .takeUntil(this.isDestroyed)
        .subscribe(page => this.onPageChange(page));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);

    const valuesChange = changes['values'];
    if (valuesChange && !valuesChange.isFirstChange()) {
      const preSize = valuesChange.previousValue.size;
      const curSize = valuesChange.currentValue.size;

      if (curSize !== preSize) {
        if (this.navigator) {
          // check if element added in the end by comparing the last elements
          const elementAddedToEnd = valuesChange.previousValue.equals(valuesChange.currentValue.pop());
          const lastPage = this.getPageForIndex(curSize - 1);
          // change the page if a new element is added in the end and it's not on the last page
          if (curSize > preSize && this.currentPage !== lastPage && elementAddedToEnd) {
            this.currentPage = lastPage;
          }
        }
        this.paginatableItems = this.getPaginatableItems();
        this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
      }
    }
  }

  hasProblemOrPatch(index: number) {
    const itemPath = this.getPathStringForChild(index);
    return this.problemsService.hasProblem(itemPath) || this.jsonStoreService.hasPatch(itemPath);
  }

  get headerItemTemplate(): TemplateRef<any> {
    return this.appGlobalsService.templates[this.navigator.headerItemTemplateName];
  }

  onFindClick() {
    // clear for new search
    this.foundIndices = [];
    this.currentFound = 0;
    // search to look for the first match
    if (this.navigator.findSingle) {
      const foundIndex = this.values
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
    const itemPath = this.path.concat(index);
    const itemId = this.pathUtilService.toPathString(itemPath);
    setTimeout(() => this.domUtilService.focusAndSelectFirstEditableChildById(itemId));
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.paginatedItems = this.getPaginatableItemsForPage(page);
  }

  getPaginatableItemsForPage(page: number): Iterable<number, PaginatedItem> {
    if (this.navigator) {
      const begin = (page - 1) * this.navigator.itemsPerPage;
      const end = (page * this.navigator.itemsPerPage);
      return this.paginatableItems.slice(begin, end);
    } else {
      return this.paginatableItems;
    }
  }

  getPaginatableItems(): Iterable<number, PaginatedItem> {
    return this.values
      .map((value, index) => {
        const viewTemplateConfig = this.schema.viewTemplateConfig;
        const isEditFormVisible = viewTemplateConfig ? viewTemplateConfig.showEditForm(value) : true;
        return { index, isEditFormVisible };
      }).filter(item => {
        if (this.shouldDisplayOnlyEditFormItems) {
          return item.isEditFormVisible;
        } else {
          return true;
        }
      });
  }

  getPageForIndex(index: number): number {
    return Math.floor((index / this.navigator.itemsPerPage) + 1);
  }

  get customTemplate(): TemplateRef<any> {
    return this.appGlobalsService.templates[this.schema.viewTemplateConfig.itemTemplateName];
  }

  get shouldDisplayViewTemplate(): boolean {
    return this.schema.viewTemplateConfig !== undefined;
  }

  get sortable(): boolean {
    return this.schema.sortable && !this.shouldDisplayOnlyEditFormItems;
  }

  set shouldDisplayOnlyEditFormItems(value: boolean) {
    this.currentPage = 1;
    this._shouldDisplayOnlyEditFormItems = value;
    this.paginatableItems = this.getPaginatableItems();
    this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
  }

  get shouldDisplayOnlyEditFormItems(): boolean {
    return this._shouldDisplayOnlyEditFormItems;
  }
}
