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

import { Injectable } from '@angular/core';
import { EmptyValueService } from './empty-value.service';
import { JsonStoreService } from './json-store.service';
import { JsonSchemaService } from './json-schema.service';
import { DomUtilService } from './dom-util.service';
import { StateChangeStoreService } from './state-change-store.service';
import { TabIndexService } from './tab-index.service';
import { PathUtilService } from './path-util.service';
import { List } from 'immutable';

@Injectable()
export class ShortcutActionService {

  constructor(public emptyValueService: EmptyValueService,
              public domUtilService: DomUtilService,
              public jsonStoreService: JsonStoreService,
              public jsonSchemaService: JsonSchemaService,
              public pathUtilService: PathUtilService,
              public stateChangeStoreService: StateChangeStoreService,
              public tabIndexService: TabIndexService) { }

  addRootAction(path: Array<any>): void {
    this.addAction(path, true);
  }

  addParentAction(path: Array<any>): void {
    this.addAction(path, false);
  }

  private addAction(path: Array<any>, root: boolean): void {
    this.stateChangeStoreService.notifyJsonStateModified(this.jsonStoreService.getPreModifiedJson().toJS());
    let _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
    this.addNewElementInArray(_path, this.jsonSchemaService.getSchemaFromPath(_path));
  }

  /**
   * @param {Array<any>} path - Path of the array parent that the element is about to be inserted
   * @param {Object} schema - Schema of the element that is about to be inserted
   */
  private addNewElementInArray(path: Array<any>, schema: Object) {
    let itemSchema = schema['items'];
    let emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    let values = this.jsonStoreService.getIn(path) || List.of([]);
    this.jsonStoreService.setIn(path, values.push(emptyValue));
    path.push(values.size);
    setTimeout(() => {
      this.updateTabIndexesAndFocusElementInPath(path.join('.'));
    });
  }

  moveUpAction(path: Array<any>): void {
    this.moveAction(path, -1);
  }

  moveDownAction(path: Array<any>): void {
    this.moveAction(path, 1);
  }

  private moveAction(path: Array<any>, direction: number): void {
    this.stateChangeStoreService.notifyJsonStateModified(this.jsonStoreService.getPreModifiedJson().toJS());
    let index = this.pathUtilService.getElementIndexInReversePath(path);
    path[path.length - 2] = this.moveElement(index, direction, this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
    let _path = path.join('.');
    setTimeout(() => {
      this.domUtilService.flashElementById(_path);
      this.domUtilService.focusAndSelectFirstInputChildById(_path);
    });
  }

  /**
   * @param {number} index - Index of the element that is moved
   * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
   * @returns {number} - Returns the new index of the moved element
   */
  private moveElement(index: number, direction: number, path: Array<any>): number {
    let values =  this.jsonStoreService.getIn(path);
    let newIndex = ((index + direction) < values.size &&
                    (index + direction) >= 0) ? index + direction : values.size - Math.abs((index + direction));
    let temp = values.get(index);
    values = values
      .set(index, values.get(newIndex))
      .set(newIndex, temp);
    this.jsonStoreService.setIn(path, values);
    return newIndex;
  }

  deleteAction(path: Array<any>) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.stateChangeStoreService.notifyJsonStateModified(this.jsonStoreService.getPreModifiedJson().toJS());
      this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false),
        this.pathUtilService.getElementIndexInReversePath(path));
    }
  }

  undoAction() {
    this.stateChangeStoreService.restoreJsonState();
  }

  private deleteElement(path: Array<any>, index: number) {
    let values = this.jsonStoreService.getIn(path);
    this.jsonStoreService.setIn(path, values.delete(index));
    this.tabIndexService.deleteElemTabIndex(path.join('.'));
  }


  navigateUpAction(path: Array<any>): void {
    this.navigateUpDownAction(path, -1);
  }

  navigateDownAction(path: Array<any>): void {
    this.navigateUpDownAction(path, 1);
  }

  private navigateUpDownAction(path: Array<any>, direction: number) {
    let values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
    if (List.isList(values)) {
      let elemIndexInPath = this.pathUtilService.getElementIndexInPath(path);
      path[path.length - 2] = ((elemIndexInPath + direction) < values.size &&
                              (elemIndexInPath + direction) >= 0) ? elemIndexInPath + direction :
                              values.size - Math.abs((elemIndexInPath + direction));
      this.domUtilService.focusAndSelectFirstInputChildById(path.join('.'));
    }
  }

  navigateLeftAction(path: Array<any>): void {
    this.navigateRightLeftAction(path, -1);
  }

  navigateRightAction(path: Array<any>): void {
    this.navigateRightLeftAction(path, 1);
  }

  private navigateRightLeftAction(path: Array<any>, direction: number) {
    let tabIndex = this.tabIndexService.getElemTabIndex(path.join('.'));
    if (tabIndex >= 0) {
      this.domUtilService.focusRightOrLeftCell(tabIndex, direction);
    }
  }

  copyRowAction(path: Array<any>) {
    this.stateChangeStoreService.notifyJsonStateModified(this.jsonStoreService.getPreModifiedJson().toJS());
    let _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, false);
    this.copyCurrentRowBelow(path, _path);
  }

  copyItemAction(path: Array<any>) {
    this.stateChangeStoreService.notifyJsonStateModified(this.jsonStoreService.getPreModifiedJson().toJS());
    let _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
    this.copyCurrentSchemaItemBelow(path, _path);
  }

  private copyCurrentRowBelow(originalPath: Array<any>, arrayParentPath: Array<any>) {
    let elemIndex = this.pathUtilService.getElementIndexInReversePath(originalPath);
    let valuesList = this.jsonStoreService.getIn(arrayParentPath) || List.of([]);
    let newValue = valuesList.get(elemIndex);
    newValue = newValue.set(originalPath[originalPath.length - 1], '');
    this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
    arrayParentPath.push(elemIndex + 1);
    setTimeout(() => {
      this.updateTabIndexesAndFocusElementInPath(arrayParentPath.join('.').concat('.' + originalPath[originalPath.length - 1]));
    });
  }

  private copyCurrentSchemaItemBelow(originalPath: Array<any>, arrayParentPath: Array<any>) {
    let elemIndex = this.pathUtilService.getElementIndexInPath(originalPath);
    let valuesList = this.jsonStoreService.getIn(arrayParentPath) || List.of([]);
    let newValue = valuesList.get(elemIndex);
    this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
    arrayParentPath.push(elemIndex + 1);
    setTimeout(() => {
      this.updateTabIndexesAndFocusElementInPath(arrayParentPath.join('.'));
    });
  }

  private updateTabIndexesAndFocusElementInPath(path: string) {
    this.tabIndexService.insertElemTabIndex(path);
    this.domUtilService.flashElementById(path);
    this.domUtilService.focusAndSelectFirstInputChildById(path);
  }

  generateShortcutAction(action: string) {

    return (event: KeyboardEvent) => {
      event.preventDefault();
      let eventTarget = event.target as HTMLInputElement;
      this[action](this.tabIndexService.getPathFromTabIndex(eventTarget.tabIndex));
      return false;
    };
  }
}
