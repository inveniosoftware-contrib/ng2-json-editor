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
import { OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { AbstractTrackerComponent } from '../abstract-tracker';

import { AppGlobalsService, PathUtilService, JsonPatchService } from '../shared/services';

import { JsonPatch } from '../shared/interfaces';

/**
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
export abstract class AbstractFieldComponent
  extends AbstractTrackerComponent
  implements OnInit, OnDestroy {

  path: Array<any>;
  errors: Array<Object> = [];
  jsonPatches: Array<JsonPatch>;
  errorsSubscription: Subscription;
  jsonPatchesSubscription: Subscription;

  constructor(public appGlobalsService: AppGlobalsService,
    public pathUtilService: PathUtilService,
    public jsonPatchService: JsonPatchService) {
    super();
  }

  ngOnInit() {
    this.errorsSubscription = this.appGlobalsService
      .globalErrorsSubject
      .subscribe((globalErrors) => {
        this.errors = globalErrors[this.pathString] || [];
      });

    this.jsonPatchesSubscription = this.jsonPatchService
      .patchesByPath$
      .subscribe(patchesByPath => {
        this.jsonPatches = patchesByPath[this.pathString] || [];
      });
  }

  ngOnDestroy() {
    if (this.errorsSubscription) {
      this.errorsSubscription.unsubscribe();
    }
  }

  onPatchAccept(patchIndex: number) {
    this.jsonPatchService.apply(this.jsonPatches[patchIndex]);
    this.jsonPatches.splice(0, this.jsonPatches.length);
  }

  onPatchReject(patchIndex: number) {
    this.jsonPatchService.apply(this.jsonPatches[patchIndex]);
    this.jsonPatches.splice(patchIndex, 1);
  }

  onPatchAdd(patchIndex: number) {
    let patch = this.jsonPatches[patchIndex];
    patch.op = 'add';
    // FIXME: what if patch.path is not to an index.
    this.jsonPatchService.apply(patch);
    this.jsonPatches.splice(patchIndex, 1);
  }

  get errorNgClass(): Object {
    return {
      error: this.errors.length > 0
    };
  }

  get isErrorTooltipEnabled(): boolean {
    return this.errors && this.errors.length > 0;
  }

  get pathString(): string {
    return this.pathUtilService.toPathString(this.path);
  }
}
