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

import { Injectable, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { CategorizedValidationErrors, SchemaValidationErrors, ValidationError, JsonEditorConfig } from '../interfaces';
import { ErrorMapUtilService } from './error-map-util.service';

@Injectable()
export class AppGlobalsService {
  private _externalCategorizedErrorsSubject = new ReplaySubject<CategorizedValidationErrors>(1);
  private _internalCategorizedErrorsSubject = new ReplaySubject<CategorizedValidationErrors>(1);
  private _externalErrorCountersSubject = new ReplaySubject<{errors: number, warnings: number}>(1);
  private _internalErrorCountersSubject = new ReplaySubject<{errors: number, warnings: number}>(1);
  private internalErrorMap: SchemaValidationErrors = {};
  public adminMode = false;
  public activeTabName = '';
  public tabNameToFirstTopLevelElement: { [tabName: string]: string } = {};
  public templates: { [templateName: string]: TemplateRef<any> };
  public config: JsonEditorConfig;
  public internalCategorizedErrorMap: CategorizedValidationErrors = { Errors: {}, Warnings: {} };
  public externalCategorizedErrorMap: CategorizedValidationErrors = { Errors: {}, Warnings: {} };

  constructor(public errorMapUtilService: ErrorMapUtilService) { }

  get externalCategorizedErrorsSubject(): ReplaySubject<CategorizedValidationErrors> {
    return this._externalCategorizedErrorsSubject;
  }

  get externalErrorCountersSubject(): ReplaySubject<{errors: number, warnings: number}> {
    return this._externalErrorCountersSubject;
  }

  get internalCategorizedErrorsSubject(): ReplaySubject<CategorizedValidationErrors> {
    return this._internalCategorizedErrorsSubject;
  }

  get internalErrorCountersSubject(): ReplaySubject<{errors: number, warnings: number}> {
    return this._internalErrorCountersSubject;
  }

  set externalErrors(errors: SchemaValidationErrors) {
    let {categorizedErrorMap, errorCounter, warningCounter} = this.errorMapUtilService.categorizeErrorMap(errors);
    this.externalCategorizedErrorMap = categorizedErrorMap;

    this.externalCategorizedErrorsSubject.next(this.externalCategorizedErrorMap);
    this.externalErrorCountersSubject.next({
      errors: errorCounter,
      warnings: warningCounter
    });
  }

  extendInternalErrors(path: string, errors: Array<ValidationError>) {
    this.internalErrorMap[path] = errors;
    let {categorizedErrorMap, errorCounter, warningCounter} = this.errorMapUtilService.categorizeErrorMap(this.internalErrorMap);
    this.internalCategorizedErrorMap = categorizedErrorMap;

    this.internalCategorizedErrorsSubject.next(this.internalCategorizedErrorMap);
    this.internalErrorCountersSubject.next({
      errors: errorCounter,
      warnings: warningCounter
    });
  }

  get firstElementPathForCurrentTab() {
    return this.tabNameToFirstTopLevelElement[this.activeTabName];
  }

}
