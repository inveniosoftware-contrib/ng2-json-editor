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

import { DomUtilService, PathUtilService, ErrorsService } from '../../shared/services';
import { SchemaValidationErrors } from '../../shared/interfaces';

@Component({
  selector: 'errors-console-tab',
  styleUrls: [
    '../abstract-console-tab/abstract-console-tab.component.scss',
    './errors-console-tab.component.scss'
  ],
  templateUrl: './errors-console-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorsConsoleTabComponent implements OnInit {

  @Input() errorType: 'errors' | 'warnings';

  internalErrorMap: SchemaValidationErrors;
  externalErrorMap: SchemaValidationErrors;
  externalErrorCount: number;
  internalErrorCount: number;
  iconClassName: string;

  constructor(public domUtilService: DomUtilService,
    public pathUtilService: PathUtilService,
    public errorsService: ErrorsService,
    public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.errorsService.externalCategorizedErrorsSubject
      .map(categorizedErrorMap => categorizedErrorMap[this.errorType])
      .subscribe(errorMap => {
        this.externalErrorMap = errorMap;
        this.changeDetectorRef.markForCheck();
      });
    this.errorsService.externalErrorCountersSubject
      .map(errorCounters => errorCounters[this.errorType])
      .subscribe(errorCount => {
        this.externalErrorCount = errorCount;
        this.changeDetectorRef.markForCheck();
      });
    this.errorsService.internalCategorizedErrorsSubject
      .map(categorizedErrorMap => categorizedErrorMap[this.errorType])
      .subscribe(errorMap => {
        this.internalErrorMap = errorMap;
        this.changeDetectorRef.markForCheck();
      });
    this.errorsService.internalErrorCountersSubject
      .map(errorCounters => errorCounters[this.errorType])
      .subscribe(errorCount => {
        this.internalErrorCount = errorCount;
        this.changeDetectorRef.markForCheck();
      });

    this.iconClassName = this.errorType === 'errors' ? 'fa fa-times' : 'fa fa-exclamation-triangle';
  }

  focusAndSelectPath(path: string) {
    this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
  }
}

