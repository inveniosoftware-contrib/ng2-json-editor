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

import { fromJS } from 'immutable';

import { JsonStoreService } from './json-store.service';
import { PathUtilService } from './path-util.service';
import { KeysStoreService } from './keys-store.service';

class MockKeysStoreService extends KeysStoreService {
  buildKeysMapRecursivelyForPath(map: any, path: any) { }
  syncKeysForPath(path: any, json: any) { }
}

describe('JsonStoreService', () => {

  let service: JsonStoreService;
  let historyLimit;

  beforeEach(() => {
    service = new JsonStoreService(new PathUtilService(), new MockKeysStoreService(null, null, null));
    historyLimit = service['historyLimit'];
  });

  it('should set in path and notify when some lists parents is missing', () => {
    let json = fromJS({
      aMap: {}
    });
    service.setJson(json);

    let path = ['aMap', 'aList', 0, 'innerList', 0, 'innerProperty'];
    let value = 'value';
    let expected = fromJS({
      aMap: {
        aList: [
          {
            innerList: [
              { innerProperty: value }
            ]
          }
        ]
      }
    });

    service.jsonChange.subscribe(changedJson => {
      // expect(immutable1).toEqual(immutable2) doesn't work as expected
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.setIn(path, value);
  });

  it('should set in path and notify when some map parents are missing', () => {
    let json = fromJS({
      aMap: {}
    });
    service.setJson(json);

    let path = ['aMap', 'anotherMap', 'innerMap', 'innerProperty'];
    let value = 'value';
    let expected = fromJS({
      aMap: {
        anotherMap: {
          innerMap: {
            innerProperty: value
          }
        }
      }
    });

    service.jsonChange.subscribe(changedJson => {
      // expect(immutable1).toEqual(immutable2) doesn't work as expected
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.setIn(path, value);
  });


  it('should insert a new element if addIn path is to an array index', () => {
    let json = fromJS({
      aMap: {
        aList: ['val1', 'val2', 'val3']
      }
    });
    service.setJson(json);

    let path = ['aMap', 'aList', 1];
    let value = 'toBeInsertedAt1';
    let expected = fromJS({
      aMap: {
        aList: ['val1', 'toBeInsertedAt1', 'val2', 'val3']
      }
    });

    service.jsonChange.subscribe(changedJson => {
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.addIn(path, value);
  });

  it('should append a new element if addIn path is to the -', () => {
    let json = fromJS({
      aMap: {
        aList: ['val1', 'val2', 'val3']
      }
    });
    service.setJson(json);

    let path = ['aMap', 'aList', '-'];
    let value = 'toBeAppended';
    let expected = fromJS({
      aMap: {
        aList: ['val1', 'val2', 'val3', 'toBeAppended']
      }
    });

    service.jsonChange.subscribe(changedJson => {
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.addIn(path, value);
  });

  it('should removeIn if setIn value is empty string', () => {
    let json = fromJS({
      foo: 'bar'
    });
    let path = ['foo'];
    service.setJson(json);
    spyOn(service, 'removeIn');
    service.setIn(path, '');
    expect(service.removeIn).toHaveBeenCalledWith(path);
  });

  it('should add new field if addIn path is to an object property', () => {
    let json = fromJS({
      aMap: {}
    });
    service.setJson(json);
    let value = 'value';
    let path = ['aMap', 'aProp'];
    let expected = fromJS({
      aMap: {
        aProp: 'value'
      }
    });

    service.jsonChange.subscribe(changedJson => {
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.addIn(path, value);
  });

  it('should addIn an object', () => {
    let json = fromJS({
      aList: []
    });
    service.setJson(json);

    let value = {
      foo: 'bar'
    };
    let path = ['aList', '-'];
    let expected = fromJS({
      aList: [
        { foo: 'bar' }
      ]
    });
    service.jsonChange.subscribe(changedJson => {
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.addIn(path, value);
  });

  it('should setIn an array', () => {
    let json = fromJS({
      aMap: {}
    });
    service.setJson(json);

    let value = [1];
    let path = ['aMap', 'aList'];
    let expected = fromJS({
      aMap: {
        aList: [1]
      }
    });
    service.jsonChange.subscribe(changedJson => {
      expect(changedJson.equals(expected)).toBeTruthy();
    });

    service.setIn(path, value);
  });
});
