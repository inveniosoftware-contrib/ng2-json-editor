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
import { PathUtilService } from './path-util.service';

describe('PathUtilService', () => {
  let pathUtilService: PathUtilService;

  beforeEach(() => {
    pathUtilService = new PathUtilService();
  });

  it('should return the right nearest parent given a path', () => {
    let path = ['aMap', 'aList', 0, 'innerList', 0, 'innerProperty'];
    let expectedNearestParent = ['aMap', 'aList', 0, 'innerList'];
    expect(pathUtilService.getNearestOrRootArrayParentInPath(path, false)).toEqual(expectedNearestParent);
  });

  it('should return the right root parent given a path', () => {
    let path = ['aMap', 'aList', 0, 'innerList', 0, 'innerProperty'];
    let expectedRootParent = ['aMap', 'aList'];
    expect(pathUtilService.getNearestOrRootArrayParentInPath(path, true)).toEqual(expectedRootParent);
  });

  it('should return the right index in direct given path', () => {
    let path = ['aMap', 'aList', 1, 'innerList', 0, 'innerProperty'];
    let expectedDirectIndex = 1;
    expect(pathUtilService.getElementIndexInForwardOrReversePath(path, true)).toBe(expectedDirectIndex);
  });

  it('should return the right index in reverse given path', () => {
    let path = ['aMap', 'aList', 1, 'innerList', 0, 'innerProperty'];
    let expectedReverseIndex = 0;
    expect(pathUtilService.getElementIndexInForwardOrReversePath(path, false)).toBe(expectedReverseIndex);
  });

  it('should convert path string (json-pointer) to path array', () => {
    let pathString = '/foo/bar/0';
    let expected = ['foo', 'bar', 0];
    let result = pathUtilService.toPathArray(pathString);
    expect(result).toEqual(expected);
  });

  it('should convert path array to path string (json-pointer)', () => {
    let path = ['foo', 'bar', 0];
    let expected = '/foo/bar/0';
    let result = pathUtilService.toPathString(path);
    expect(result).toEqual(expected);
  });

  it('should convert path array to path string (json-pointer) for empty path', () => {
    let path = [];
    let expected = '';
    let result = pathUtilService.toPathString(path);
    expect(result).toEqual(expected);
  });
});
