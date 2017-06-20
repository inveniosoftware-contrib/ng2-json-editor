import { Injectable } from '@angular/core';
import { Map, List } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { PathUtilService } from './path-util.service';
import { JsonPatch } from '../interfaces';
import { SizedStack } from '../classes';

@Injectable()
export class JsonStoreService {

  private json: Map<string, any>;
  private _jsonChange = new ReplaySubject<Map<string, any>>(1);
  // list of reverse patches for important changes
  private history = new SizedStack<JsonPatch>(5);

  constructor(private pathUtilService: PathUtilService) { }

  setIn(path: Array<any>, value: any) {
    // if value is undefined or empty string
    if (!value) {
      this.removeIn(path);
      return;
    }

    // immutablejs setIn creates Map for keys that don't exist in path
    // therefore List() should be set manually for some of those keys.
    for (let i = 0; i < path.length - 1; i++) {
      let pathToIndex = path.slice(0, i + 1);
      // create a list for a key if the next key is a number.
      if (!this.json.hasIn(pathToIndex) && typeof path[i + 1] === 'number') {
        this.json = this.json.setIn(pathToIndex, List());
      }
    }
    this.json = this.json.setIn(path, value);
    this._jsonChange.next(this.json);
  }

  getIn(path: Array<any>): any {
    return this.json.getIn(path);
  }

  removeIn(path: Array<any>): any {
    this.history.push({
      path: this.pathUtilService.toPathString(path),
      op: 'add',
      value: this.json.getIn(path)
    });

    this.json = this.json.removeIn(path);
    this._jsonChange.next(this.json);
  }

  addIn(path: Array<any>, value: any) {
    let lastPathElement = path[path.length - 1];
    let isInsert = typeof lastPathElement === 'number' || lastPathElement === '-';
    if (isInsert) {
      let pathWithoutIndex = path.slice(0, path.length - 1);
      let list = this.getIn(pathWithoutIndex) as List<any>;
      list = lastPathElement === '-' ? list.push(value) : list.insert(lastPathElement, value);
      this.setIn(pathWithoutIndex, list);
    } else {
      this.setIn(path, value);
    }
  }

  setJson(json: Map<string, any>) {
    this.json = json;
  }

  applyPatch(patch: JsonPatch) {
    let path = this.pathUtilService.toPathArray(patch.path);
    switch (patch.op) {
      case 'replace':
        this.setIn(path, patch.value);
        break;
      case 'remove':
        this.removeIn(path);
        break;
      case 'add':
        this.addIn(path, patch.value);
        break;
      default:
        console.warn(`${patch.op} is not supported!`);
    }
  }

  rollbackLastChange(): string {
    let lastChangeReversePatch = this.history.pop();
    if (lastChangeReversePatch) {
      this.applyPatch(lastChangeReversePatch);
      return lastChangeReversePatch.path;
    } else {
      return undefined;
    }
  }

  get jsonChange(): ReplaySubject<Map<string, any>> {
    return this._jsonChange;
  }
}
