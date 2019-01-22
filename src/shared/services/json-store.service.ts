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
import { Map, List, fromJS } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import { PathUtilService } from './path-util.service';
import { KeysStoreService } from './keys-store.service';
import { JsonPatch, JsonPatchesByPath } from '../interfaces';
import { SizedStack } from '../classes';

@Injectable()
export class JsonStoreService {

  readonly patchesByPath$ = new ReplaySubject<JsonPatchesByPath>(1);
  readonly json$ = new Subject<Map<string, any>>();
  readonly jsonPatches$ = new Subject<Array<JsonPatch>>();

  private patchesByPath: JsonPatchesByPath = {};
  private json: Map<string, any>;
  private jsonPatches: Array<JsonPatch>;

  // list of reverse patches for important changes
  private history = new SizedStack<JsonPatch>(5);

  constructor(private pathUtilService: PathUtilService,
    private keysStoreService: KeysStoreService) { }

  setIn(path: Array<any>, value: any, allowUndo = true) {
    if (value === '' || value === undefined) {
      this.removeIn(path);
      return;
    }

    value = this.toImmutable(value);

    // immutablejs setIn creates Map for keys that don't exist in path
    // therefore List() should be set manually for some of those keys.
    this.setEmptyListBeforeEachIndexInPath(path);

    if (allowUndo && path.length <= 1) {
      this.pushRevertPatchToHistory(path, 'replace');
    }

    // set new value
    this.json = this.json.setIn(path, value);

    this.keysStoreService.syncKeysForPath(path, this.json);

    this.json$.next(this.json);
  }

  private setEmptyListBeforeEachIndexInPath(path: Array<any>) {
    for (let i = 0; i < path.length - 1; i++) {
      const currentPath = path.slice(0, i + 1);
      if (!this.json.hasIn(currentPath) && typeof path[i + 1] === 'number') {
        this.json = this.json.setIn(currentPath, List());
      }
    }
  }

  getIn(path: Array<any>, notSetValue?: any): any {
    return this.json.getIn(path, notSetValue);
  }

  removeIn(path: Array<any>) {
    this.pushRevertPatchToHistory(path, 'add');

    this.json = this.json.removeIn(path);
    this.json$.next(this.json);
    this.keysStoreService.deletePath(path);
  }

  private pushRevertPatchToHistory(path: Array<any>, revertOp: string) {
    this.history.push({
      path: this.pathUtilService.toPathString(path),
      op: revertOp,
      value: this.json.getIn(path)
    });
  }

  addIn(path: Array<any>, value: any) {
    const lastPathElement = path[path.length - 1];
    const isInsert = typeof lastPathElement === 'number' || lastPathElement === '-';
    if (isInsert) {
      const pathWithoutIndex = path.slice(0, path.length - 1);
      let list = this.getIn(pathWithoutIndex) as List<any> || List();
      value = this.toImmutable(value);
      if (lastPathElement === '-') {
        list = list.push(value);
        path[path.length - 1] = list.size - 1;
      } else {
        list = list.insert(lastPathElement, value);
      }
      // allowUndo=false to avoid creating replace history patch when adding an item to a list.
      this.setIn(pathWithoutIndex, list, false);
    } else {
      this.setIn(path, value);
    }
  }

  private toImmutable(value: any): any {
    if (typeof value === 'object' && !(List.isList(value) || Map.isMap(value))) {
      return fromJS(value);
    }
    return value;
  }

  /**
   * Moves the element at given index UP or DOWN within the list
   * @param listPath path to a list in json
   * @param index index of the element that is being moved
   * @param direction 1 for DOWN, -1 for UP movement
   * @return new path of the moved element
   */
  moveIn(listPath: Array<any>, index: number, direction: number): Array<any> {
    let list = this.getIn(listPath);
    let newIndex = index + direction;
    if (newIndex >= list.size || newIndex < 0) {
      newIndex = list.size - Math.abs(newIndex);
    }
    const temp = list.get(index);
    list = list
      .set(index, list.get(newIndex))
      .set(newIndex, temp);
    this.setIn(listPath, list);

    this.keysStoreService.swapListElementKeys(listPath, index, newIndex);

    return listPath.concat(newIndex);
  }

  setJson(json: Map<string, any>) {
    this.json = json;
  }

  setJsonPatches(patches: Array<JsonPatch>) {
    this.patchesByPath = {};
    patches.forEach(patch => {
      const path = this.getComponentPathForPatch(patch);
      if (!this.patchesByPath[path]) {
        this.patchesByPath[path] = [];
      }
      this.patchesByPath[path].push(patch);
    });

    this.jsonPatches = patches;
    this.patchesByPath$.next(this.patchesByPath);
  }

  rollbackLastChange(): string {
    const lastChangeReversePatch = this.history.pop();
    if (lastChangeReversePatch) {
      this.applyPatch(lastChangeReversePatch, false);
      return lastChangeReversePatch.path;
    } else {
      return undefined;
    }
  }

  applyPatch(patch: JsonPatch, allowUndo = true) {
    const path = this.pathUtilService.toPathArray(patch.path);
    switch (patch.op) {
      case 'replace':
        this.setIn(path, patch.value, allowUndo);
        break;
      case 'remove':
        this.removeIn(path);
        break;
      case 'add':
      // custom type for adding a replace patch as new.
      case 'add-as-new':
        this.addIn(path, patch.value);
        break;
      default:
        console.warn(`${patch.op} is not supported!`);
    }
    this.removeJsonPatch(patch);
  }

  rejectPatch(patch: JsonPatch) {
    this.removeJsonPatch(patch);
  }

  hasPatch(path: string): boolean {
    return this.patchesByPath[path] && this.patchesByPath[path].length > 0;
  }

  hasPatchOrChildrenHavePatch(path: string): boolean {
    if (this.hasPatch(path)) {
      return true;
    }

    if (this.jsonPatches) {
      const childPathPrefix = `${path}${this.pathUtilService.separator}`;
      return this.jsonPatches
        .some(patch => patch.path.startsWith(childPathPrefix));
    }
    return false;
  }

  private removeJsonPatch(patch: JsonPatch) {
    const path = this.getComponentPathForPatch(patch);
    // don't do anything if it's UNDO json-patch.
    if (this.patchesByPath[path]) {
      const patchIndex = this.patchesByPath[path].indexOf(patch);
      if (patchIndex > -1) {
        this.patchesByPath[path].splice(patchIndex, 1);
        this.patchesByPath$.next(this.patchesByPath);

        const globalPatchIndex = this.jsonPatches.indexOf(patch);
        this.jsonPatches.splice(globalPatchIndex, 1);
        this.jsonPatches$.next(this.jsonPatches);
      }
    }
  }

  private getComponentPathForPatch(patch: JsonPatch): string {
    if (patch.op === 'add') {
      // add patches handled by parent component
      return this.getParentPath(patch.path);
    }
    return patch.path;
  }

  private getParentPath(path: string): string {
    const pathArray = this.pathUtilService.toPathArray(path);
    const parentPathArray = pathArray.slice(0, -1);
    return this.pathUtilService.toPathString(parentPathArray);
  }
}
