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

describe('JsonStoreService', () => {

  let service: JsonStoreService;
  let historyLimit;

  beforeEach(() => {
    service = new JsonStoreService();
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

  it('should shift the first element if the new pushed element exceeds the maximum history length', () => {
    let initialJson = fromJS({
      aMap: {
        anotherMap: {
          innerMap: {
            innerProperty: 'value'
          }
        }
      }
    });
    service.setJson(initialJson);
    service.addJsonToHistory();

    let anotherJson = fromJS({
      anotherMap: {
        anotherAnotherMap: {
          anotherInnerMap: {
            anotherInnerProperty: 'anotherValue'
          }
        }
      }
    });
    service.setJson(anotherJson);

    for (let i = 0; i < historyLimit; i++) {
      service.addJsonToHistory();
    }
    for (let i = 0; i < historyLimit - 1; i++) {
      service.rollbackJsonFromHistory();
    }

    service.jsonChange.subscribe(changedJson => {
      expect(initialJson.equals(changedJson)).toBeFalsy();
    });

    service.rollbackJsonFromHistory();
  });

  it('should get the right history item on history rollback', () => {
    let initialJson = fromJS({
      aMap: {
        anotherMap: {
          innerMap: {
            innerProperty: 'value'
          }
        }
      }
    });
    service.setJson(initialJson);
    service.addJsonToHistory();

    let anotherJson = fromJS({
      anotherMap: {
        anotherAnotherMap: {
          anotherInnerMap: {
            anotherInnerProperty: 'anotherValue'
          }
        }
      }
    });
    service.setJson(anotherJson);
    service.addJsonToHistory();

    service.jsonChange.subscribe(changedJson => {
      expect(anotherJson.equals(changedJson)).toBeTruthy();
    });

    service.rollbackJsonFromHistory();
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
});
