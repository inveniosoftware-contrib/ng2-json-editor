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
import { List } from 'immutable';

import { EmptyValueService } from './empty-value.service';
import { JsonStoreService } from './json-store.service';
import { JsonSchemaService } from './json-schema.service';
import { DomUtilService } from './dom-util.service';
import { PathUtilService } from './path-util.service';
import { KeysStoreService } from './keys-store.service';
import { JSONSchema } from '../interfaces';

@Injectable()
export class ShortcutActionService {

  constructor(public emptyValueService: EmptyValueService,
    public domUtilService: DomUtilService,
    public jsonStoreService: JsonStoreService,
    public jsonSchemaService: JsonSchemaService,
    public pathUtilService: PathUtilService,
    public keysStoreService: KeysStoreService) { }

  addToRootAction(path: Array<any>): void {
    this.add(path, true);
  }

  addAction(path: Array<any>): void {
    this.add(path, false);
  }

  private add(path: Array<any>, root: boolean): void {
    let _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
    this.addNewElementInArray(_path, this.jsonSchemaService.forPathArray(_path));
  }

  /**
   * @param path - Path of the array parent that the element is about to be inserted
   * @param schema - Schema of the element that is about to be inserted
   */
  private addNewElementInArray(path: Array<any>, schema: JSONSchema) {
    let itemSchema = schema.items;
    let emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    let values = this.jsonStoreService.getIn(path) || List();
    this.jsonStoreService.setIn(path, values.push(emptyValue));
    path.push(values.size);
    setTimeout(() => {
      this.focusElementInPath(this.pathUtilService.toPathString(path));
    });
  }

  addBelowToRootAction(path: Array<any>): void {
    let rootPath = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
    let schema = this.jsonSchemaService.forPathArray(rootPath);
    let itemSchema = schema.items;
    let emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    let values = this.jsonStoreService.getIn(rootPath) || List();
    this.jsonStoreService.setIn(rootPath, values.insert(path[1] + 1, emptyValue));
    rootPath.push(path[1] + 1);
    setTimeout(() => {
      this.focusElementInPath(this.pathUtilService.toPathString(rootPath));
    });
  }

  moveUpAction(path: Array<any>): void {
    this.move(path, -1);
  }

  moveDownAction(path: Array<any>): void {
    this.move(path, 1);
  }

  moveUpRootAction(path: Array<any>): void {
    this.move(path, -1, true);
  }

  moveDownRootAction(path: Array<any>): void {
    this.move(path, 1, true);
  }

  /**
   * @param {Array<any>} path - Path of the element that is moved
   * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
   */
  private move(path: Array<any>, direction: number, root = false): void {
    this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
    let index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, root);
    path = this.moveElement(index, direction, this.pathUtilService.getNearestOrRootArrayParentInPath(path, root));
    let pathString = this.pathUtilService.toPathString(path);
    setTimeout(() => {
      this.focusElementInPath(pathString);
    });
  }

  /**
   * @param {number} index - Index of the element that is moved
   * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
   * @returns {number} - Returns the new path of the moved element
   */
  private moveElement(index: number, direction: number, path: Array<any>): Array<any> {
    let values = this.jsonStoreService.getIn(path);
    let newIndex = ((index + direction) < values.size &&
      (index + direction) >= 0) ? index + direction : values.size - Math.abs((index + direction));
    let temp = values.get(index);
    values = values
      .set(index, values.get(newIndex))
      .set(newIndex, temp);
    this.jsonStoreService.setIn(path, values);
    return path.concat(newIndex);
  }

  deleteAction(path: Array<any>) {
    // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
    this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
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
      let pathString = this.pathUtilService.toPathString(path);
      this.domUtilService.focusAndSelectFirstEditableChildById(pathString);
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
    let pathString = this.pathUtilService.toPathString(path);
    this.domUtilService.focusRightOrLeftParentCell(pathString, direction);
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
    if (this.jsonSchemaService.forPathArray(arrayParentPath)['items'].hasOwnProperty('properties')) {
      let elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
      let valuesList = this.jsonStoreService.getIn(arrayParentPath) || List();
      let newValue = valuesList.get(elemIndex);
      let newPath = arrayParentPath.concat(elemIndex + 1);
      let newPathString = this.pathUtilService.toPathString(newPath);
      if (!root) {
        newValue = newValue.set(originalPath[originalPath.length - 1]);
        newPathString = `${newPathString}${this.pathUtilService.separator}${originalPath[originalPath.length - 1]}`;
      }
      this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
      setTimeout(() => {
        this.focusElementInPath(newPathString);
      });
    }
  }

  undoAction() {
    let rolledBackPath = this.jsonStoreService.rollbackLastChange();
    if (rolledBackPath) {
      let parentPath = this.pathUtilService.toPathArray(rolledBackPath).slice(0, -1);
      this.keysStoreService.buildKeysMap(this.jsonStoreService.getIn(parentPath), this.jsonSchemaService.forPathArray(parentPath));
    }
  }

  private focusElementInPath(path: string) {
    this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
  }

  generateShortcutAction(action: string) {

    return (event: KeyboardEvent) => {
      event.preventDefault();
      let eventTarget = event.target as HTMLInputElement;
      let pathString = eventTarget.getAttribute('data-path');
      if (pathString) {
        this[action](this.pathUtilService.toPathArray(pathString));
      }
      return false;
    };
  }
}
