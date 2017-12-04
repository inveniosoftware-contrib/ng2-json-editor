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
import { JSONSchema, ShortcutActionFunction } from '../interfaces';

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
    const _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
    this.addNewElementInArray(_path, this.jsonSchemaService.forPathArray(_path));
  }

  /**
   * @param path - Path of the array parent that the element is about to be inserted
   * @param schema - Schema of the element that is about to be inserted
   */
  private addNewElementInArray(path: Array<any>, schema: JSONSchema) {
    const itemSchema = schema.items;
    const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    const values = this.jsonStoreService.getIn(path) || List();
    this.jsonStoreService.setIn(path, values.push(emptyValue));
    path.push(values.size);
    this.waitThenFocus(this.pathUtilService.toPathString(path));
  }

  addBelowToRootAction(path: Array<any>): void {
    const rootPath = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
    const schema = this.jsonSchemaService.forPathArray(rootPath);
    const itemSchema = schema.items;
    const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    const values = this.jsonStoreService.getIn(rootPath) || List();
    this.jsonStoreService.setIn(rootPath, values.insert(path[1] + 1, emptyValue));
    rootPath.push(path[1] + 1);
    this.waitThenFocus(this.pathUtilService.toPathString(rootPath));
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
   * @param path - Path of the element that is moved
   * @param direction - Movement direction. -1 for UP, +1 for DOWN
   */
  private move(path: Array<any>, direction: number, root = false): void {
    this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
    const index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, root);
    path = this.jsonStoreService.moveIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, root), index, direction);
    const pathString = this.pathUtilService.toPathString(path);
    this.waitThenFocus(pathString);
  }

  deleteAction(path: Array<any>) {
    // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
    this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
    this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false),
      this.pathUtilService.getElementIndexInForwardOrReversePath(path, false));
  }

  /**
   * @param path - Path of the element's array parent
   * @param index - Index of the element that is deleted from array parent path
   */
  private deleteElement(path: Array<any>, index: number) {
    const values = this.jsonStoreService.getIn(path);
    this.jsonStoreService.setIn(path, values.remove(index));
  }

  navigateUpAction(path: Array<any>): void {
    this.navigateUpDown(path, -1);
  }

  navigateDownAction(path: Array<any>): void {
    this.navigateUpDown(path, 1);
  }

  /**
   * @param path - Path of the element that is focused
   * @param direction - Navigation direction. -1 for UP, +1 for DOWN
   */
  private navigateUpDown(path: Array<any>, direction: number) {
    const values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
    if (List.isList(values)) {
      const elemIndexInPath = this.pathUtilService.getElementIndexInForwardOrReversePath(path, true);
      if ((elemIndexInPath + direction) < values.size && (elemIndexInPath + direction) >= 0) {
        path[path.length - 2] = elemIndexInPath + direction;
      } else {
        path[path.length - 2] = values.size - Math.abs((elemIndexInPath + direction));
      }
      const pathString = this.pathUtilService.toPathString(path);
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
   * @param path - Path of the element that is focused
   * @param direction - Navigation direction. -1 for LEFT, +1 for RIGHT
   */
  private navigateRightLeft(path: Array<any>, direction: number) {
    const pathString = this.pathUtilService.toPathString(path);
    this.domUtilService.focusRightOrLeftParentCell(pathString, direction);
  }

  /**
   * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
   * @param path - Path
   */
  copyAction(path: Array<any>) {
    this.copyRowOrSchemaBelow(path, false);
  }

  /**
   * Copies the root parent element below(eg creates a new author in authors list)
   * when you edit an author's field)
   * @param path - Path
   */
  copyFromRootAction(path: Array<any>) {
    this.copyRowOrSchemaBelow(path, true);
  }

  /**
   * @param originalPath - Path of the element that is copied
   * @param root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
   * for usage as in `copyAction`
   */
  private copyRowOrSchemaBelow(originalPath: Array<any>, root: boolean) {
    const arrayParentPath = this.pathUtilService.getNearestOrRootArrayParentInPath(originalPath, root);
    if (this.jsonSchemaService.forPathArray(arrayParentPath)['items'].hasOwnProperty('properties')) {
      const elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
      const valuesList = this.jsonStoreService.getIn(arrayParentPath) || List();
      let newValue = valuesList.get(elemIndex);
      const newPath = arrayParentPath.concat(elemIndex + 1);
      let newPathString = this.pathUtilService.toPathString(newPath);
      if (!root) {
        newValue = newValue.set(originalPath[originalPath.length - 1]);
        newPathString = `${newPathString}${this.pathUtilService.separator}${originalPath[originalPath.length - 1]}`;
      }
      this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
      this.waitThenFocus(newPathString);
    }
  }

  undoAction() {
    const rolledBackPath = this.jsonStoreService.rollbackLastChange();
    if (rolledBackPath) {
      this.waitThenFocus(rolledBackPath);
    }
  }

  private waitThenFocus(path: string) {
    setTimeout(() => {
      this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
    });
  }

  generateShortcutAction(actionName: string): ShortcutActionFunction {

    return (event: KeyboardEvent) => {
      event.preventDefault();
      const eventTarget = event.target as HTMLInputElement;
      const pathString = eventTarget.getAttribute('data-path');
      if (pathString) {
        this[actionName](this.pathUtilService.toPathArray(pathString));
      }
      return false;
    };
  }
}
