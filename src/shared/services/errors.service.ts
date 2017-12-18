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
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import {
  SchemaValidationErrors,
  CategorizedValidationErrors,
  ValidationError,
  ErrorCollectionType,
  ErrorCounts
} from '../interfaces';

@Injectable()
export class ErrorsService {

  readonly externalCategorizedErrors$ = new ReplaySubject<CategorizedValidationErrors>(1);
  readonly internalCategorizedErrors$ = new ReplaySubject<CategorizedValidationErrors>(1);

  private readonly externalErrorCounts$ = new ReplaySubject<ErrorCounts>(1);
  private readonly internalErrorCounts$ = new ReplaySubject<ErrorCounts>(1);
  readonly errorCount$ = this.getTotalDistinctCount$('errors');
  readonly warningCount$ = this.getTotalDistinctCount$('warnings');

  readonly internalErrorMap$ = new ReplaySubject<SchemaValidationErrors>(1);
  private internalErrorMap: SchemaValidationErrors = {};

  private internalCategorizedErrorMap: CategorizedValidationErrors = { errors: {}, warnings: {} };
  private externalCategorizedErrorMap: CategorizedValidationErrors = { errors: {}, warnings: {} };

  private externalErrorCounts = { errors: 0, warnings: 0 };
  private internalErrorCounts = { errors: 0, warnings: 0 };

  private getTotalDistinctCount$(type: ErrorCollectionType): Observable<number> {
    const external$ = this.externalErrorCounts$
      .map(counts => counts[type]);
    const internal$ = this.internalErrorCounts$
      .map(counts => counts[type]);
    return combineLatest(external$, internal$, (external, internal) => external + internal)
      .distinctUntilChanged();
  }

  private areErrorCountsObjectsEqual(a: ErrorCounts, b: ErrorCounts): boolean {
    return a.errors === b.errors && a.warnings === b.warnings;
  }

  set externalErrors(errors: SchemaValidationErrors) {
    const { categorizedErrorMap, errorCount, warningCount } = this.categorizeErrorMap(errors);

    this.externalErrorCounts = { errors: errorCount, warnings: warningCount };
    this.externalErrorCounts$.next(this.externalErrorCounts);

    this.externalCategorizedErrorMap = categorizedErrorMap;
    this.externalCategorizedErrors$.next(this.externalCategorizedErrorMap);
  }

  setInternalErrorsForPath(path: string, errors: Array<ValidationError>) {
    this.internalErrorMap[path] = errors;
    this.internalErrorMap$.next(this.internalErrorMap);

    const categorizedErrors = this.categorizeValidationErrors(errors);

    this.internalErrorCounts.errors += categorizedErrors.errors.length - this.internalCountForPath(path, 'errors');
    this.internalErrorCounts.warnings += categorizedErrors.warnings.length - this.internalCountForPath(path, 'warnings');
    this.internalErrorCounts$.next(this.internalErrorCounts);

    this.internalCategorizedErrorMap.errors[path] = categorizedErrors.errors;
    this.internalCategorizedErrorMap.warnings[path] = categorizedErrors.warnings;
    this.internalCategorizedErrors$.next(this.internalCategorizedErrorMap);
  }

  private internalCountForPath(path: string, type: ErrorCollectionType): number {
    if (this.internalCategorizedErrorMap[type][path]) {
      return this.internalCategorizedErrorMap[type][path].length;
    }
    return 0;
  }

  hasError(path: string) {
    const internalErrors = this.internalCategorizedErrorMap.errors[path];
    const externalErrors = this.externalCategorizedErrorMap.errors[path];
    const internalErrorCount = internalErrors ? internalErrors.length : 0;
    const externalErrorCount = externalErrors ? externalErrors.length : 0;
    return (internalErrorCount + externalErrorCount) > 0;
  }

  private categorizeErrorMap(errorMap: SchemaValidationErrors): {
    categorizedErrorMap: CategorizedValidationErrors,
    errorCount: number, warningCount: number
  } {
    const categorizedErrorMap = { errors: {}, warnings: {} };
    let errorCount = 0;
    let warningCount = 0;

    Object.keys(errorMap)
      .map(path => {
        const validationErrors = errorMap[path];
        const categorized = this.categorizeValidationErrors(validationErrors);
        return { path, categorized };
      }).forEach(errorsForPath => {
        categorizedErrorMap.errors[errorsForPath.path] = errorsForPath.categorized.errors;
        categorizedErrorMap.warnings[errorsForPath.path] = errorsForPath.categorized.warnings;
        errorCount += errorsForPath.categorized.errors.length;
        warningCount += errorsForPath.categorized.warnings.length;
      });
    return { categorizedErrorMap, errorCount, warningCount };
  }

  private categorizeValidationErrors(validationErrors: Array<ValidationError>) {
    const categorized: { errors: Array<ValidationError>, warnings: Array<ValidationError> }
      = { errors: [], warnings: [] };
    validationErrors.forEach(error => {
      if (error.type === 'Error') {
        categorized.errors.push(error);
      } else {
        categorized.warnings.push(error);
      }
    });
    return categorized;
  }
}
