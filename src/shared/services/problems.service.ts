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
  SchemaValidationProblems,
  CategorizedValidationProblems,
  ValidationProblem,
  ProblemCollectionType,
  ProblemCount
} from '../interfaces';

@Injectable()
export class ProblemsService {

  readonly externalCategorizedProblems$ = new ReplaySubject<CategorizedValidationProblems>(1);
  readonly internalCategorizedProblems$ = new ReplaySubject<CategorizedValidationProblems>(1);

  private readonly externalProblemCount$ = new ReplaySubject<ProblemCount>(1);
  private readonly internalProblemCount$ = new ReplaySubject<ProblemCount>(1);
  readonly errorCount$ = this.getTotalDistinctProblemCount$ForType('errors');
  readonly warningCount$ = this.getTotalDistinctProblemCount$ForType('warnings');

  readonly internalProblemMap$ = new ReplaySubject<SchemaValidationProblems>(1);
  private internalProblemMap: SchemaValidationProblems = {};

  private internalCategorizedProblemMap: CategorizedValidationProblems = { errors: {}, warnings: {} };
  private externalCategorizedProblemMap: CategorizedValidationProblems = { errors: {}, warnings: {} };

  private externalProblemCount = { errors: 0, warnings: 0 };
  private internalProblemCount = { errors: 0, warnings: 0 };

  constructor() {
    // set default counts to components
    this.externalProblemCount$.next(this.externalProblemCount);
    this.internalProblemCount$.next(this.internalProblemCount);
  }

  private getTotalDistinctProblemCount$ForType(type: ProblemCollectionType): Observable<number> {
    const external$ = this.externalProblemCount$
      .map(counts => counts[type]);
    const internal$ = this.internalProblemCount$
      .map(counts => counts[type]);
    return combineLatest(external$, internal$, (external, internal) => external + internal)
      .distinctUntilChanged();
  }

  set externalProblems(problems: SchemaValidationProblems) {
    const { categorizedProblemMap, errorCount, warningCount } = this.categorizeProblemMap(problems);

    this.externalProblemCount = { errors: errorCount, warnings: warningCount };
    this.externalProblemCount$.next(this.externalProblemCount);

    this.externalCategorizedProblemMap = categorizedProblemMap;
    this.externalCategorizedProblems$.next(this.externalCategorizedProblemMap);
  }

  setInternalProblemsForPath(path: string, problems: Array<ValidationProblem>) {
    this.internalProblemMap[path] = problems;
    this.internalProblemMap$.next(this.internalProblemMap);

    const categorizedProblems = this.categorizeValidationProblems(problems);

    this.internalProblemCount.errors += categorizedProblems.errors.length - this.internalProblemCountForPath(path, 'errors');
    this.internalProblemCount.warnings += categorizedProblems.warnings.length - this.internalProblemCountForPath(path, 'warnings');
    this.internalProblemCount$.next(this.internalProblemCount);

    this.internalCategorizedProblemMap.errors[path] = categorizedProblems.errors;
    this.internalCategorizedProblemMap.warnings[path] = categorizedProblems.warnings;
    this.internalCategorizedProblems$.next(this.internalCategorizedProblemMap);
  }

  private internalProblemCountForPath(path: string, type: ProblemCollectionType): number {
    if (this.internalCategorizedProblemMap[type][path]) {
      return this.internalCategorizedProblemMap[type][path].length;
    }
    return 0;
  }

  hasProblem(path: string): boolean {
    const internalProblems = this.internalCategorizedProblemMap.errors[path];
    const externalProblems = this.externalCategorizedProblemMap.errors[path];
    const internalProblemCount = internalProblems ? internalProblems.length : 0;
    const externalProblemCount = externalProblems ? externalProblems.length : 0;
    return (internalProblemCount + externalProblemCount) > 0;
  }

  private categorizeProblemMap(problemMap: SchemaValidationProblems): {
    categorizedProblemMap: CategorizedValidationProblems,
    errorCount: number, warningCount: number
  } {
    const categorizedProblemMap = { errors: {}, warnings: {} };
    let errorCount = 0;
    let warningCount = 0;

    Object.keys(problemMap)
      .map(path => {
        const validationProblems = problemMap[path];
        const categorized = this.categorizeValidationProblems(validationProblems);
        return { path, categorized };
      }).forEach(problemsForPath => {
        categorizedProblemMap.errors[problemsForPath.path] = problemsForPath.categorized.errors;
        categorizedProblemMap.warnings[problemsForPath.path] = problemsForPath.categorized.warnings;
        errorCount += problemsForPath.categorized.errors.length;
        warningCount += problemsForPath.categorized.warnings.length;
      });
    return { categorizedProblemMap, errorCount, warningCount };
  }

  private categorizeValidationProblems(validationProblems: Array<ValidationProblem>) {
    const categorized: { errors: Array<ValidationProblem>, warnings: Array<ValidationProblem> }
      = { errors: [], warnings: [] };
    validationProblems.forEach(error => {
      if (error.type === 'Error') {
        categorized.errors.push(error);
      } else {
        categorized.warnings.push(error);
      }
    });
    return categorized;
  }
}
