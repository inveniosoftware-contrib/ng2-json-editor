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
              public tabIndexService: TabIndexService) { }

  addToRootAction(path: Array<any>): void {
    this.add(path, true);
  }

  addAction(path: Array<any>): void {
    this.add(path, false);
  }

  private add(path: Array<any>, root: boolean): void {
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
    let values = this.jsonStoreService.getIn(path) || List();
    this.jsonStoreService.setIn(path, values.push(emptyValue));
    path.push(values.size);
    setTimeout(() => {
      this.updateTabIndexesAndFocusElementInPath(path.join('.'));
    });
  }

  moveUpAction(path: Array<any>): void {
    this.move(path, -1);
  }

  moveDownAction(path: Array<any>): void {
    this.move(path, 1);
  }

  /**
   * @param {Array<any>} path - Path of the element that is moved
   * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
   */
  private move(path: Array<any>, direction: number): void {
    let index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, false);
    path[path.length - 2] = this.moveElement(index, direction, this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
    let pathString = path.join('.');
    setTimeout(() => {
      this.domUtilService.flashElementById(pathString);
      this.domUtilService.focusAndSelectFirstInputChildById(pathString);
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
    // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
    (document.getElementById(path.join('.'))
      .querySelector('input,textarea') as HTMLInputElement)
      .blur();
    this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false),
      this.pathUtilService.getElementIndexInForwardOrReversePath(path, false));
  }

  /**
   * @param {Array<any>} path - Path of the element's array parent
   * @param {number} index - Index of the element that is deleted from array parent path
   */
  private deleteElement(path: Array<any>, index: number) {
    let values = this.jsonStoreService.getIn(path);
    this.jsonStoreService.setIn(path, values.remove(index));
    let pathString = `${path.join('.')}`;
    setTimeout(() => {
      this.tabIndexService.deleteElemTabIndex(pathString);
    });
  }

  navigateUpAction(path: Array<any>): void {
    this.navigateUpDown(path, -1);
  }

  navigateDownAction(path: Array<any>): void {
    this.navigateUpDown(path, 1);
  }

  /**
   * @param {Array<any>} path - Path of the element that is focused
   * @param {number} direction - Navigation direction. -1 for UP, +1 for DOWN
   */
  private navigateUpDown(path: Array<any>, direction: number) {
    let values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
    if (List.isList(values)) {
      let elemIndexInPath = this.pathUtilService.getElementIndexInForwardOrReversePath(path, true);
      if ((elemIndexInPath + direction) < values.size && (elemIndexInPath + direction) >= 0) {
        path[path.length - 2] = elemIndexInPath + direction;
      } else {
        path[path.length - 2] = values.size - Math.abs((elemIndexInPath + direction));
      }
      this.domUtilService.focusAndSelectFirstInputChildById(path.join('.'));
    }
  }

  navigateLeftAction(path: Array<any>): void {
    this.navigateRightLeft(path, -1);
  }

  navigateRightAction(path: Array<any>): void {
    this.navigateRightLeft(path, 1);
  }

  /**
   * @param {Array<any>} path - Path of the element that is focused
   * @param {number} direction - Navigation direction. -1 for LEFT, +1 for RIGHT
   */
  private navigateRightLeft(path: Array<any>, direction: number) {
    this.domUtilService.focusRightOrLeftParentCell(path.join('.'), direction);
  }

  /**
   * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
   * @param {Array<any>} path - Path
   */
  copyAction(path: Array<any>) {
    this.copyRowOrSchemaBelow(path, false);
  }

  /**
   * Copies the root parent element below(eg creates a new author in authors list)
   * when you edit an author's field)
   * @param {Array<any>} path - Path
   */
  copyFromRootAction(path: Array<any>) {
    this.copyRowOrSchemaBelow(path, true);
  }

  /**
   * @param {Array<any>} originalPath - Path of the element that is copied
   * @param {boolean} root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
   * for usage as in `copyAction`
   */
  private copyRowOrSchemaBelow(originalPath: Array<any>, root: boolean) {
    let arrayParentPath = this.pathUtilService.getNearestOrRootArrayParentInPath(originalPath, root);
    if (this.jsonSchemaService.getSchemaFromPath(arrayParentPath)['items'].hasOwnProperty('properties')) {
      let elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
      let valuesList = this.jsonStoreService.getIn(arrayParentPath) || List();
      let newValue = valuesList.get(elemIndex);
      let newPathString = `${arrayParentPath.concat(elemIndex + 1).join('.')}`;
      if (!root) {
        newValue = newValue.set(originalPath[originalPath.length - 1]);
        newPathString = `${newPathString}.${originalPath[originalPath.length - 1]}`;
      }
      this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
      setTimeout(() => {
        this.updateTabIndexesAndFocusElementInPath(newPathString);
      });
    }
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
