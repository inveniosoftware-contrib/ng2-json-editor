import { Injectable } from '@angular/core';
import { Map } from 'immutable';
import { ReplaySubject } from 'rxjs';


@Injectable()
export class JsonStoreService {

  private json: Map<string, any>;
  private _jsonChange: ReplaySubject<Map<string, any>> = new ReplaySubject<any>(1);

  setIn(path: Array<any>, value: any) {
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
