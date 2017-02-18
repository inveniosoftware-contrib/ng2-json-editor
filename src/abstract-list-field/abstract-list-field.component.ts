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

import { List } from 'immutable';

import { AbstractFieldComponent } from '../abstract-field';

import { JsonStoreService, AppGlobalsService, TabIndexService, PathUtilService } from '../shared/services';
import { PathCache } from '../shared/interfaces';

/**
 * Abstract component to share code of common operations of all array fields
 *
 * Instance properties declared here only to resolve syntax errors.
 * Hence they need to be declared in children extending components (with decarators if necessary)
 */
export abstract class AbstractListFieldComponent extends AbstractFieldComponent {

  values: List<any>;
  schema: Object;
  path: Array<any>;
  pathCache: PathCache = {};

  constructor(public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public tabIndexService: TabIndexService,
    public pathUtilService: PathUtilService) {
    super(appGlobalsService, pathUtilService);
  }
  /**
   * @param {number} index - Index of the element that is moved
   * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
   */
  moveElement(index: number, direction: number) {
    let newIndex = index + direction;
    let temp = this.values.get(index);
    this.values = this.values
      .set(index, this.values.get(newIndex))
      .set(newIndex, temp);
    this.jsonStoreService.setIn(this.path, this.values);
    setTimeout(() => {
      this.tabIndexService.sortAndSynchronizeTabIndexes();
    });
  }

  /**
   * @param {number} index - Index of the element to be deleted
   */
  deleteElement(index: number) {
    this.jsonStoreService.setIn(this.path, this.values.remove(index));
    this.values = this.jsonStoreService.getIn(this.path);
    let elementPathString = this.getElementPathString(index);
    setTimeout(() => {
      this.tabIndexService.deleteElemTabIndex(elementPathString);
    });
  }

  /**
   * Returns path of the property of an element at index.
   */
  getValuePath(index: number, property: string): Array<any> {
    let valuePathString = `${this.getElementPathString(index)}${this.pathUtilService.separator}${property}`;
    if (!this.pathCache[valuePathString]) {
      this.pathCache[valuePathString] = this.path.concat(index, property);
    }
    return this.pathCache[valuePathString];
  }

  getElementPathString(index: number): string {
    return `${this.pathString}${this.pathUtilService.separator}${index}`;
  }

}
