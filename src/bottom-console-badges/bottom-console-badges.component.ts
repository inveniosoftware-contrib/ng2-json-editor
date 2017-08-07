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

import { Component, Output, EventEmitter, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { AppGlobalsService, JsonStoreService } from '../shared/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'bottom-console-badges',
  styleUrls: [
    './bottom-console-badges.component.scss'
  ],
  templateUrl: './bottom-console-badges.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomConsoleBadgesComponent implements OnInit, OnDestroy {

  @Output() badgeClick = new EventEmitter<string>();

  globalErrorCount = 0;
  internalErrorCount = 0;
  globalWarningCount = 0;
  internalWarningCount = 0;
  patchCount = 0;
  externalErrorCounterSubscription: Subscription;
  internalErrorCounterSubscription: Subscription;
  patchCounterSubscription: Subscription;

  constructor(private appGlobalsService: AppGlobalsService,
    private changeDetectorRef: ChangeDetectorRef,
    private jsonStoreService: JsonStoreService) { }

  ngOnInit() {
    this.externalErrorCounterSubscription = this.appGlobalsService.externalErrorCountersSubject
      .subscribe(errorCounters => {
        this.globalErrorCount = errorCounters.errors;
        this.globalWarningCount = errorCounters.warnings;
        this.changeDetectorRef.markForCheck();
      });
    this.internalErrorCounterSubscription = this.appGlobalsService.internalErrorCountersSubject
      .subscribe(errorCounters => {
        this.internalErrorCount = errorCounters.errors;
        this.internalWarningCount = errorCounters.warnings;
        this.changeDetectorRef.markForCheck();
      });
    this.patchCounterSubscription = this.jsonStoreService.patchesByPath$
      .map(patchesByPath => {
        return Object.keys(patchesByPath)
          .map(path => patchesByPath[path].length)
          .reduce((sum, patchCountPerPath) => sum + patchCountPerPath);
      }).subscribe(patchCounter => {
        this.patchCount = patchCounter;
        this.changeDetectorRef.markForCheck();
      });
  }

  onBadgeClick(event: Event, badgeName: string) {
    event.preventDefault();
    this.badgeClick.emit(badgeName);
  }

  ngOnDestroy() {
    this.externalErrorCounterSubscription.unsubscribe();
    this.internalErrorCounterSubscription.unsubscribe();
    this.patchCounterSubscription.unsubscribe();
  }
}
