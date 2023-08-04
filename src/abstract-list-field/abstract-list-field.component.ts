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
import { ChangeDetectorRef } from '@angular/core';
import { List } from 'immutable';

import { AbstractFieldComponent } from '../abstract-field';
import { JsonStoreService, AppGlobalsService, PathUtilService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

/**
 * Abstract component to share code of common operations of all array fields
 *
 * Instance properties declared here only to resolve syntax errors.
 * Hence they need to be declared in children extending components (with decarators if necessary)
 */
export abstract class AbstractListFieldComponent extends AbstractFieldComponent {

  values: List<any>;
  schema: JSONSchema;
  path: Array<any>;
  supportValues: List<any>;

  constructor(public appGlobalsService: AppGlobalsService,
    public problemsService: ProblemsService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService,
    public changeDetectorRef: ChangeDetectorRef) {
    super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
  }

  /**
   * @param index - Index of the element that is moved
   * @param  direction - Movement direction. -1 for UP, +1 for DOWN
   */
  moveElement(index: number, direction: number) {
    this.jsonStoreService.moveIn(this.path, index, direction);
  }

  /**
   * @param index - Index of the element to be deleted
   */
  deleteElement(index: number, value: any) {
    const elementPath = this.path.concat(index);
    const patchIndex = this.supportValues.indexOf(value);

    this.jsonStoreService.removeIn(elementPath);
    // empty list as notSetValue, because there can be lists rendered on the UI, while they are absent in json (alwaysShow)
    this.values = this.jsonStoreService.getIn(this.path, List());

    // remove patches for this element
    if (this.jsonStoreService.hasPatch(this.pathString)) {
      this.jsonStoreService.deletePatchForElement(this.pathString);
    }

    // if patch is in child path that will be removed
    if (this.jsonStoreService.hasPatchOrChildrenHavePatch(this.getPathStringForChild(patchIndex))) {
      this.jsonStoreService.deletePatchForElement(this.getPathStringForChild(patchIndex));
    }
  }

  getPathStringForChild(index: number): string {
    return `${this.pathString}${this.pathUtilService.separator}${index}`;
  }

  hasPatchOrChildrenHavePatch(): boolean {
    return this.jsonStoreService.hasPatchOrChildrenHavePatch(this.pathString);
  }
}
