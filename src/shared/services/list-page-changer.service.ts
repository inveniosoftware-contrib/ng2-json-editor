/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2017 CERN.
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
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { PathUtilService } from './path-util.service';

@Injectable()
export class ListPageChangerService {

  private pageChange$Map: { [path: string]: ReplaySubject<number> } = {};
  private itemsPerPageMap: { [path: string]: number } = {};

  constructor(private pathUtilService: PathUtilService) { }

  /**
   * Changes the page of the list so that requested item is visible on UI
   * It doesn't do anything if given path's parent is not paginated list.
   *
   * @param itemPath path to a list item
   */
  changePage(fieldPath: string) {
    const fieldPathArray = this.pathUtilService.toPathArray(fieldPath);
    const listPathArray = this.pathUtilService.getNearestOrRootArrayParentInPath(fieldPathArray, true);

    const listPath = this.pathUtilService.toPathString(listPathArray);
    if (this.pageChange$Map[listPath]) {
      const itemIndex = fieldPathArray[listPathArray.length];
      const itemsPerPage = this.itemsPerPageMap[listPath];
      const page = Math.floor((itemIndex / itemsPerPage) + 1);
      this.pageChange$Map[listPath].next(page);
    }
  }

  registerPaginatedList(listPath: string, itemsPerPage: number): ReplaySubject<number> {
    this.itemsPerPageMap[listPath] = itemsPerPage;
    this.pageChange$Map[listPath] = new ReplaySubject<number>(1);
    return this.pageChange$Map[listPath];
  }

}
