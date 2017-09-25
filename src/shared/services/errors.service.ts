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

import { SchemaValidationErrors, CategorizedValidationErrors, ValidationError } from '../interfaces';

@Injectable()
export class ErrorsService {

  readonly externalCategorizedErrors$ = new ReplaySubject<CategorizedValidationErrors>(1);
  readonly internalCategorizedErrors$ = new ReplaySubject<CategorizedValidationErrors>(1);
  readonly externalErrorCounters$ = new ReplaySubject<{ errors: number, warnings: number }>(1);
  readonly internalErrorCounters$ = new ReplaySubject<{ errors: number, warnings: number }>(1);
  internalErrorMap: SchemaValidationErrors = {};
  internalCategorizedErrorMap: CategorizedValidationErrors = { errors: {}, warnings: {} };
  externalCategorizedErrorMap: CategorizedValidationErrors = { errors: {}, warnings: {} };

  set externalErrors(errors: SchemaValidationErrors) {
    const { categorizedErrorMap, errorCounter, warningCounter } = this.categorizeErrorMap(errors);
    this.externalCategorizedErrorMap = categorizedErrorMap;

    this.externalCategorizedErrors$.next(this.externalCategorizedErrorMap);
    this.externalErrorCounters$.next({
      errors: errorCounter,
      warnings: warningCounter
    });
  }

  extendInternalErrors(path: string, errors: Array<ValidationError>) {
    this.internalErrorMap[path] = errors;
    const { categorizedErrorMap, errorCounter, warningCounter } = this.categorizeErrorMap(this.internalErrorMap);
    this.internalCategorizedErrorMap = categorizedErrorMap;

    this.internalCategorizedErrors$.next(this.internalCategorizedErrorMap);
    this.internalErrorCounters$.next({
      errors: errorCounter,
      warnings: warningCounter
    });
  }

  hasError(path: string) {
    const internalErrors = this.internalCategorizedErrorMap.errors[path];
    const externalErrors = this.externalCategorizedErrorMap.errors[path];
    const internalErrorCount = internalErrors ? internalErrors.length : 0;
    const externalErrorCount = externalErrors ? externalErrors.length : 0;
    return (internalErrorCount + externalErrorCount) > 0;
  }

  categorizeErrorMap(errorMap: SchemaValidationErrors): {
    categorizedErrorMap: CategorizedValidationErrors,
    errorCounter: number, warningCounter: number
  } {

    const categorizedErrorMap = { errors: {}, warnings: {} };
    let errorCounter = 0;
    let warningCounter = 0;

    Object.keys(errorMap)
      .forEach(key => {
        const validationErrors = errorMap[key];
        validationErrors.forEach(error => {
          if (error.type === 'Error') {
            categorizedErrorMap.errors[key] ? categorizedErrorMap.errors[key].push(error)
              : categorizedErrorMap.errors[key] = [error];
            errorCounter++;
          } else {
            categorizedErrorMap.warnings[key] ? categorizedErrorMap.warnings[key].push(error)
              : categorizedErrorMap.warnings[key] = [error];
            warningCounter++;
          }
        });
      });
    return { categorizedErrorMap, errorCounter, warningCounter };
  }
}
