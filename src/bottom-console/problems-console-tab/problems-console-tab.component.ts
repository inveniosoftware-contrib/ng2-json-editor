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

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AbstractSubscriberComponent } from '../../abstract-subscriber';
import { DomUtilService, PathUtilService, ProblemsService } from '../../shared/services';
import { SchemaValidationProblems, ProblemCollectionType } from '../../shared/interfaces';

@Component({
  selector: 'problems-console-tab',
  styleUrls: [
    '../abstract-console-tab/abstract-console-tab.component.scss',
    './problems-console-tab.component.scss'
  ],
  templateUrl: './problems-console-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProblemsConsoleTabComponent extends AbstractSubscriberComponent implements OnInit {

  @Input() problemType: ProblemCollectionType;

  internalProblemMap: SchemaValidationProblems;
  externalProblemMap: SchemaValidationProblems;
  problemCount = 0;
  iconClassName: string;

  constructor(public domUtilService: DomUtilService,
    public pathUtilService: PathUtilService,
    public problemsService: ProblemsService,
    public changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.problemsService.externalCategorizedProblems$
      .map(categorizedProblemMap => categorizedProblemMap[this.problemType])
      .takeUntil(this.isDestroyed)
      .subscribe(problemMap => {
        this.externalProblemMap = problemMap;
        this.changeDetectorRef.markForCheck();
      });
    this.problemsService.internalCategorizedProblems$
      .map(categorizedProblemMap => categorizedProblemMap[this.problemType])
      .takeUntil(this.isDestroyed)
      .subscribe(problemMap => {
        this.internalProblemMap = problemMap;
        this.changeDetectorRef.markForCheck();
      });

    // TODO: create WarningsConsoleTabComponent with same template to avoid `if`

    const problemCount$ = this.problemType === 'errors' ? this.problemsService.errorCount$ : this.problemsService.warningCount$;
    problemCount$
      .takeUntil(this.isDestroyed)
      .subscribe(problemCount => {
        this.problemCount = problemCount;
      });

    this.iconClassName = this.problemType === 'errors' ? 'fa fa-times' : 'fa fa-exclamation-triangle';
  }

  focusAndSelectPath(path: string) {
    this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
  }
}

