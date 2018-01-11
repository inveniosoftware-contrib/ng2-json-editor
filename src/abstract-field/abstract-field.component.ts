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

import { OnInit, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { AppGlobalsService, PathUtilService, JsonStoreService, ProblemsService } from '../shared/services';
import { ValidationProblem, PathCache, JSONSchema, JsonPatch, JsonPatchesByOp } from '../shared/interfaces';

/**
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
export abstract class AbstractFieldComponent extends AbstractSubscriberComponent implements OnInit, OnDestroy, OnChanges {

  // @Input
  path: Array<any>;

  pathString: string;
  pathCache: PathCache = {};
  externalErrors: Array<ValidationProblem> = [];
  schema: JSONSchema;

  // patches grouped by op because they different UI representation
  replaceJsonPatches: Array<JsonPatch> = [];
  addJsonPatches: Array<JsonPatch> = [];
  removeJsonPatch: JsonPatch;


  constructor(public appGlobalsService: AppGlobalsService,
    public problemsService: ProblemsService,
    public pathUtilService: PathUtilService,
    public changeDetectorRef: ChangeDetectorRef,
    public jsonStoreService: JsonStoreService) {
    super();
  }

  ngOnInit() {
    this.problemsService.externalCategorizedProblems$
      .takeUntil(this.isDestroyed)
      .subscribe(externalCategorizedProblemMap => {
        this.externalErrors = externalCategorizedProblemMap.errors[this.pathString] || [];
        this.changeDetectorRef.markForCheck();
      });

    this.jsonStoreService.patchesByPath$
      .map(patchesByPath => patchesByPath[this.pathString])
      .map(patches => this.groupJsonPatchesByOp(patches))
      .takeUntil(this.isDestroyed)
      .subscribe(patchesByOp => {
        this.removeJsonPatch = patchesByOp.remove[0];
        this.addJsonPatches = patchesByOp.add;
        this.replaceJsonPatches = patchesByOp.replace;
        this.changeDetectorRef.markForCheck();
      });
  }

  private groupJsonPatchesByOp(patches: Array<JsonPatch>): JsonPatchesByOp {
    const group: JsonPatchesByOp = {
      add: [],
      remove: [],
      replace: []
    };

    if (patches) {
      patches.forEach((patch) => {
        const opPatches = group[patch.op];
        opPatches.push(patch);
      });
    }

    return group;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['path']) {
      this.pathString = this.pathUtilService.toPathString(this.path);
    }
  }

  /**
   * Gets path for child, returns from `pathCache` if it is a hit
   * in order not to re-render child component due to reference change its path.
   *
   * @param key - index or field name for child
   */
  getPathForChild(key: any): Array<any> {
    if (!this.pathCache[key] || this.pathCache[key][this.path.length - 1] !== this.path[this.path.length - 1]) {
      this.pathCache[key] = this.path.concat(key);
    }
    return this.pathCache[key];
  }

  hasErrors(): boolean {
    return this.externalErrors.length > 0;
  }

  get disabled() {
    return this.schema.disabled && !this.appGlobalsService.adminMode;
  }

  get redLeftBorderClass(): string {
    return this.removeJsonPatch ? 'red-left-border' : '';
  }

  trackByElement(index: number, element: any): any {
    return element;
  }

  trackByIndex(index: number, element: any): number {
    return index;
  }

}
