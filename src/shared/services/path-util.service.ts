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


@Injectable()
export class PathUtilService {

  get separator() {
    return '/';
  }

  /**
   *
   * @param {Array<any>} path - Element's path
   * @param {boolean} root - Find nearest or root parent array. True for root and false for nearest array parent
   * @returns {Array<any>} - Returns the path to the array parent
   */
  getNearestOrRootArrayParentInPath(path: Array<any>, root: boolean): Array<any> {
    let _path = [];
    let pathLength = path.length;
    for (let index = 0; index < pathLength; index++) {
      _path = root ? path.slice(0, index + 1) : path.slice(0, path.length - index);
      if (typeof _path[_path.length - 1] === 'number') {
        // transform ['arrayParent',0] => ['arrayParent']
        _path.pop();
        break;
      }
    }
    return _path;
  }

  getElementIndexInForwardOrReversePath(path: Array<any>, directPathSearch: boolean): number {
    return this.findIndexFromPath(path.slice(), directPathSearch);
  }

  /**
   *
   * @param {Array<any>} path - The path of an element
   * @param {boolean} directPathSearch - Flag for define direct or reverse searching in path. Set to true for searching in direct
   * or false for searching in reverse path
   * @returns {number} - Returns found index in path or -1 if not found
   */
  findIndexFromPath(path: Array<any>, directPathSearch: boolean): number {
    path = directPathSearch ? path : path.reverse();
    for (let index in path) {
      if (!isNaN(path[index])) {
        return path[index];
      }
    }
    return -1;
  }

  /**
   * Converts path array `/` separated path string.
   * Example: from ['foo', 'bar', 0] to '/foo/bar/0'
   */
  toPathString(path: Array<any>): string {
    return `${this.separator}${path.join(this.separator)}`;
  }

  /**
   * Converts `/` separated path string to path array.
   * Example from '/foo/bar/0' to ['foo', 'bar', 0]
   */
  toPathArray(pathString: string): Array<any> {
    return pathString.split(this.separator)
      .slice(1) // remove the empty
      .map((key) => isNaN(parseInt(key, 10)) ? key : parseInt(key, 10));
  }

  /**
   * Gets the last path element from `/` seperated path string.
   * Example it returns '0' for '/foo/bar/0'
   */
  getLastPathElement(pathString: string): string {
    let pathElements = pathString.split(this.separator);
    return pathElements[pathElements.length - 1];
  }
}

