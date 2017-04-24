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
  Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, Output,
  EventEmitter, OnDestroy
} from '@angular/core';

import { AbstractTrackerComponent } from '../abstract-tracker';
import { CategorizedValidationErrors } from '../shared/interfaces';
import { AppGlobalsService } from '../shared/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'error-panel',
  styleUrls: [
    './error-panel.component.scss'
  ],
  templateUrl: './error-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPanelComponent extends AbstractTrackerComponent implements OnInit, OnDestroy {

  @Input() isOpen = false;
  @Input() activeTab = '';
  @Input() externalErrorMap: CategorizedValidationErrors = {Errors: {}, Warnings: {}};
  @Input() internalErrorMap: CategorizedValidationErrors = {Errors: {}, Warnings: {}};

  @Output() onCollapse = new EventEmitter<boolean>();

  tabs = [
    { title: 'Errors', customClass: 'error-tab-class'},
    { title: 'Warnings', customClass: 'warning-tab-class'}
  ];
  externalErrorCount = 0;
  internalErrorCount = 0;
  externalWarningCount = 0;
  internalWarningCount = 0;
  externalCategorizedErrorSubscription: Subscription;
  internalCategorizedErrorSubscription: Subscription;
  externalErrorCounterSubscription: Subscription;
  internalErrorCounterSubscription: Subscription;


  constructor(public appGlobalsService: AppGlobalsService,
              public changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.externalCategorizedErrorSubscription = this.appGlobalsService.externalCategorizedErrorsSubject
    .subscribe(categorizedErrorMap => {
      this.externalErrorMap = categorizedErrorMap;
      this.changeDetectorRef.markForCheck();
    });
    this.externalErrorCounterSubscription = this.appGlobalsService.externalErrorCountersSubject
    .subscribe(errorCounters => {
      this.externalErrorCount = errorCounters.errors;
      this.externalWarningCount = errorCounters.warnings;
      if (!this.checkForErrors) {
        this.isOpen = false;
        this.onCollapse.emit(false);
      }
      this.changeDetectorRef.markForCheck();
    });
    this.internalCategorizedErrorSubscription = this.appGlobalsService.internalCategorizedErrorsSubject
    .subscribe(categorizedErrorMap => {
      this.internalErrorMap = categorizedErrorMap;
      this.changeDetectorRef.markForCheck();
    });
    this.internalErrorCounterSubscription = this.appGlobalsService.internalErrorCountersSubject
    .subscribe(errorCounters => {
      this.internalErrorCount = errorCounters.errors;
      this.internalWarningCount = errorCounters.warnings;
      if (!this.checkForErrors) {
        this.isOpen = false;
        this.onCollapse.emit(false);
      }
      this.changeDetectorRef.markForCheck();
    });
  }

  get checkForErrors() {
    return this.externalErrorCount || this.externalWarningCount
      || this.internalErrorCount || this.internalWarningCount;
  }

  isTabActive(tabTitle) {
    return this.activeTab === tabTitle;
  }

  closePanel() {
    this.onCollapse.emit(false);
  }

  isTabEnabled(tabTitle) {
    if (tabTitle === 'Warnings') {
      return this.externalWarningCount || this.internalWarningCount;
    }
    return this.externalErrorCount || this.internalErrorCount;
  }

  ngOnDestroy() {
    this.externalCategorizedErrorSubscription.unsubscribe();
    this.internalCategorizedErrorSubscription.unsubscribe();
    this.externalErrorCounterSubscription.unsubscribe();
    this.internalErrorCounterSubscription.unsubscribe();
  }
}
