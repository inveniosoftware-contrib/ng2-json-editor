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

import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { ProblemsService, JsonStoreService } from '../shared/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'bottom-console-badges',
  styleUrls: [
    './bottom-console-badges.component.scss'
  ],
  templateUrl: './bottom-console-badges.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomConsoleBadgesComponent extends AbstractSubscriberComponent implements OnInit, OnDestroy {

  @Output() badgeClick = new EventEmitter<string>();

  errorCount = 0;
  warningCount = 0;
  patchCount = 0;

  constructor(private problemsService: ProblemsService,
    private changeDetectorRef: ChangeDetectorRef,
    private jsonStoreService: JsonStoreService) {
    super();
  }

  ngOnInit() {
    this.problemsService.errorCount$
      .takeUntil(this.isDestroyed)
      .subscribe(count => {
        this.errorCount = count;
        // FIXME: use markForCheck() instead
        // markForCheck() wasn't working for mysterious reasons for initial update
        this.changeDetectorRef.detectChanges();
      });
    this.problemsService.warningCount$
      .takeUntil(this.isDestroyed)
      .subscribe(count => {
        this.warningCount = count;
        // FIXME: use markForCheck() instead
        // markForCheck() wasn't working for mysterious reasons for initial update
        this.changeDetectorRef.detectChanges();
      });
    this.jsonStoreService.patchesByPath$
      .map(patchesByPath => {
        return Object.keys(patchesByPath)
          .map(path => patchesByPath[path].length)
          .reduce((sum, patchCountPerPath) => sum + patchCountPerPath, 0);
      })
      .takeUntil(this.isDestroyed)
      .subscribe(patchCount => {
        this.patchCount = patchCount;
        this.changeDetectorRef.markForCheck();
      });
  }

  onBadgeClick(event: Event, badgeName: string) {
    event.preventDefault();
    this.badgeClick.emit(badgeName);
  }
}
