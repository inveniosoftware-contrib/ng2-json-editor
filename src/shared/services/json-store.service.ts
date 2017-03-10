import { Injectable } from '@angular/core';
import { Map, List } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { NestedStore } from '../interfaces';

@Injectable()
export class JsonStoreService implements NestedStore {

  private json: Map<string, any>;
  private _jsonChange: ReplaySubject<Map<string, any>> = new ReplaySubject<any>(1);
  private historyLimit = 5;
  private history = Array<Map<string, any>>();

  setIn(path: Array<any>, value: any) {
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
    this.json = this.json.removeIn(path);
    this._jsonChange.next(this.json);
  }

  setJson(json: Map<string, any>) {
    this.json = json;
  }

  addJsonToHistory() {
    this.history.push(this.json);
    if (this.history.length > this.historyLimit) {
      this.history.shift();
    }
  }

  rollbackJsonFromHistory() {
    let rollbackJson = this.history.pop();
    if (rollbackJson) {
      this.json = rollbackJson;
      this.jsonChange.next(this.json);
    }
  }

  get jsonChange(): ReplaySubject<Map<string, any>> {
    return this._jsonChange;
  }
}
