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
import { JsonStoreService } from './json-store.service';
import { PathUtilService } from './path-util.service';
import { fromJS } from 'immutable';

describe('PathUtilService', () => {
  let pathUtilService: PathUtilService;
  let jsonStoreService: JsonStoreService;

  beforeEach(() => {
    jsonStoreService = new JsonStoreService();
    pathUtilService = new PathUtilService(jsonStoreService);
  });

  it('should return the right nearest or root parent given a path', () => {
    let path = ['aMap', 'aList', 0, 'innerList', 0, 'innerProperty'];
    let value = 'value';
    let json = fromJS({
      aMap: {}
    });
    jsonStoreService.setJson(json);
    jsonStoreService.setIn(path, value);
    let expectedRootParent = ['aMap', 'aList'];
    let expectedNearestParent = ['aMap', 'aList', 0, 'innerList'];
    expect(JSON.stringify(pathUtilService.getNearestOrRootArrayParentInPath(path, true))).toBe(JSON.stringify(expectedRootParent));
    expect(JSON.stringify(pathUtilService.getNearestOrRootArrayParentInPath(path, false))).toBe(JSON.stringify(expectedNearestParent));
  });

  it('should return the right index in direct or reverse given path', () => {
    let path = ['aMap', 'aList', 0, 'innerList', 0, 'innerProperty'];
    let expectedDirectIndex = 0;
    let expectedReverseIndex = 0;
    expect(pathUtilService.getElementIndexInPath(path)).toBe(expectedDirectIndex);
    expect(pathUtilService.getElementIndexInReversePath(path)).toBe(expectedReverseIndex);
  });
});
