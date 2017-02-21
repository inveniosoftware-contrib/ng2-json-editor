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

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { isNumeric } from 'rxjs/util/isNumeric';

import { JsonStoreService } from './json-store.service';
import { PathUtilService } from './path-util.service';
import { JsonPatch, JsonPatchesByPath } from '../interfaces';

@Injectable()
export class JsonPatchService {

  patchesByPath$ = new ReplaySubject<JsonPatchesByPath>(1);

  constructor(private jsonStoreService: JsonStoreService,
    private pathUtilService: PathUtilService) { }

  setJsonPatches(patches: Array<JsonPatch>) {
    let patchesByPath = patches
      .map(patch => {
        if (patch.op === 'add') {
          return this.fixAddPatchPath(patch);
        } else {
          return patch;
        }
      })
      .reduce<JsonPatchesByPath>((group, patch) => {
        if (!group[patch.path]) {
          group[patch.path] = [];
        }
        group[patch.path].push(patch);
        return group;
      }, {});
    this.patchesByPath$.next(patchesByPath);
  }

  private fixAddPatchPath(patch: JsonPatch): JsonPatch {
    let lastPathElement = this.pathUtilService.getLastPathElement(patch.path);
    let index = Number(lastPathElement);
    if (lastPathElement === '-' || !isNaN(index)) {
      // remove the lastElementPath and the seperator (- 1)
      patch.path = patch.path.substring(0, patch.path.length - lastPathElement.length - 1);

      if (!isNaN(index)) {
        patch.index = index;
      } else {
        // at the end of the array.
        patch.index = -1;
      }
    }
    return patch;
  }

  apply(patch: JsonPatch) {
    let path = this.pathUtilService.toPathArray(patch.path);
    switch (patch.op) {
      case 'replace':
        this.jsonStoreService.setIn(path, patch.value);
        break;
      case 'remove':
        this.jsonStoreService.removeIn(path);
        break;
      case 'add':
        // put the last element back which is removed in fixAddPatchPath
        if (patch.index) {
          path.push(patch.index);
        }

        this.jsonStoreService.addIn(path, patch.value);
        break;
      default:
        console.warn(`${patch.op} is not supported!`);
    }
  }
}
