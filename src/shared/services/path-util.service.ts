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
import { JsonStoreService } from './json-store.service';
import { List } from 'immutable';

@Injectable()
export class PathUtilService {

  constructor(public jsonStoreService: JsonStoreService) { }

  getNearestOrRootArrayParentInPath(path: Array<any>, root: boolean): Array<any> {
    let _path = Array<any>();
    for (let index = 0; index < path.length; index++) {
      _path = root ? path.slice(0, index + 1) : path.slice(0, path.length - index);
      let value = this.jsonStoreService.getIn(_path);
      if (List.isList(value)) {
        break;
      }
    }
    return _path;
  }

  getElementIndexInReversePath(path: Array<any>): number {
    let index = 0;
    // ensure that path argument isn't changed by reverse()
    let _path = path.slice();
    _path.reverse();
    for (let item in _path) {
        if (!isNaN(_path[item])) {
          index = _path[item];
          break;
        }
    }
    return index;
  }

  getElementIndexInPath(path: Array<any>): number {
    let index = 0;
    for (let item in path) {
      if (!isNaN(path[item])) {
        index = path[item];
        break;
      }
    }
    return index;
  }
}

