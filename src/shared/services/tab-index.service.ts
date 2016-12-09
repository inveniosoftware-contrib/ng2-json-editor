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
import { ReplaySubject } from 'rxjs';


@Injectable()
export class TabIndexService {
  private fieldTabIndexList = Array<string>();
  private fieldPathToIndexMap = {};
  private _tabIndexChange: ReplaySubject<any> = new ReplaySubject(1);

  // http://stackoverflow.com/questions/15478954/sort-array-elements-string-with-numbers-natural-sort
  naturalCompare(a, b) {
    let ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || '']); });
    b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || '']); });

    while (ax.length && bx.length) {
      let an = ax.shift();
      let bn = bx.shift();
      let nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
      if (nn) {
        return nn;
      }
    }

    return ax.length - bx.length;
  }

  insertElemTabIndex(path: string) {
    this.fieldTabIndexList.push(path);
    this.sortAndSynchronizeTabIndexes();
  }

  sortAndSynchronizeTabIndexes() {
    this.fieldTabIndexList.sort(this.naturalCompare);
    // Update map to new indexes;
    this.fieldPathToIndexMap = {};
    for (let i = 0; i < this.fieldTabIndexList.length; i++) {
      this.fieldPathToIndexMap[this.fieldTabIndexList[i]] = i;
    }
    this._tabIndexChange.next(1);
  }

  addElemTabIndex(path: string): number {
    this.fieldTabIndexList.push(path);
    let elemIndex = this.fieldTabIndexList.indexOf(path);
    this.fieldPathToIndexMap[path] = elemIndex;
    return this.getElemTabIndex(path);
  }

  deleteElemTabIndex(path: string) {
    delete this.fieldTabIndexList[this.getElemTabIndex(path)];
  }

  getElemTabIndex(path: string): number {
    return this.fieldPathToIndexMap[path];
  }

  getPathFromTabIndex(tabIndex: number): Array<any> {
    let path = this.fieldTabIndexList[tabIndex];
    return path.split('.')
      .map((key) => isNaN(parseInt(key, 10)) ? key : parseInt(key, 10));
  }

  get tabIndexChange(): ReplaySubject<Array<string>> {
    return this._tabIndexChange;
  }
}
