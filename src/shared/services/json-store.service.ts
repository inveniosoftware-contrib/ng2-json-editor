import { Injectable } from '@angular/core';
import { Map, List } from 'immutable';
import { ReplaySubject } from 'rxjs';


@Injectable()
export class JsonStoreService implements NestedStore {

  private json: Map<string, any>;
  private _jsonChange: ReplaySubject<Map<string, any>> = new ReplaySubject<any>(1);

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

  setJson(json: Map<string, any>) {
    this.json = json;
  }

  get jsonChange(): ReplaySubject<Map<string, any>> {
    return this._jsonChange;
  }
}
