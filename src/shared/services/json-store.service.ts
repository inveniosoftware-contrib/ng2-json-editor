import { Injectable } from '@angular/core';
import { Map, List, fromJS } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { PathUtilService } from './path-util.service';
import { KeysStoreService } from './keys-store.service';
import { JsonPatch, JsonPatchesByPath } from '../interfaces';
import { SizedStack } from '../classes';

@Injectable()
export class JsonStoreService {

  readonly patchesByPath$ = new ReplaySubject<JsonPatchesByPath>(1);
  readonly json$ = new ReplaySubject<Map<string, any>>(1);

  private patchesByPath: JsonPatchesByPath = {};
  private json: Map<string, any>;

  // list of reverse patches for important changes
  private history = new SizedStack<JsonPatch>(5);

  constructor(private pathUtilService: PathUtilService,
    private keysStoreService: KeysStoreService) { }

  setIn(path: Array<any>, value: any, allowUndo = true) {
    // if value is undefined or empty string
    if (value === '' || value === undefined) {
      this.removeIn(path);
      return;
    }

    value = this.toImmutable(value);

    // immutablejs setIn creates Map for keys that don't exist in path
    // therefore List() should be set manually for some of those keys.
    for (let i = 0; i < path.length - 1; i++) {
      const pathToIndex = path.slice(0, i + 1);
      // create a list for a key if the next key is a number.
      if (!this.json.hasIn(pathToIndex) && typeof path[i + 1] === 'number') {
        this.json = this.json.setIn(pathToIndex, List());
      }
    }

    // save revert patch for undo if it's all document or top-level
    if (allowUndo && path.length <= 1) {
      this.history.push({
        path: this.pathUtilService.toPathString(path),
        op: 'replace',
        value: this.json.getIn(path)
      });
    }

    // set new value
    this.json = this.json.setIn(path, value);

    this.keysStoreService.syncKeysForPath(path, this.json);


    this.json$.next(this.json);
  }

  getIn(path: Array<any>): any {
    return this.json.getIn(path);
  }

  removeIn(path: Array<any>) {
    this.history.push({
      path: this.pathUtilService.toPathString(path),
      op: 'add',
      value: this.json.getIn(path)
    });

    this.json = this.json.removeIn(path);
    this.json$.next(this.json);
    this.keysStoreService.deletePath(path);
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
    this.patchesByPath$.next(this.patchesByPath);
  }

  private getComponentPathForPatch(patch: JsonPatch): string {
    if (patch.op === 'add') {
      const pathArray = this.pathUtilService.toPathArray(patch.path);
      const lastPathElement = pathArray[pathArray.length - 1];
      if (lastPathElement === '-' || !isNaN(Number(lastPathElement))) {
        pathArray.pop();
        return this.pathUtilService.toPathString(pathArray);
      }
    }
    return patch.path;
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

  hasPatch(path: string) {
    return this.patchesByPath[path] && this.patchesByPath[path].length > 0;
  }

  private removeJsonPatch(patch: JsonPatch) {
    const path = this.getComponentPathForPatch(patch);
    // don't do anything if it's UNDO json-patch.
    if (this.patchesByPath[path]) {
      const patchIndex = this.patchesByPath[path].indexOf(patch);
      if (patchIndex > -1) {
        this.patchesByPath[path].splice(patchIndex, 1);
        this.patchesByPath$.next(this.patchesByPath);
      }
    }
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

  /**
   * Converts the value to immutable if it is not an immutable.
   */
  private toImmutable(value: any): any {
    if (typeof value === 'object' && !(List.isList(value) || Map.isMap(value))) {
      return fromJS(value);
    }
    return value;
  }
}
