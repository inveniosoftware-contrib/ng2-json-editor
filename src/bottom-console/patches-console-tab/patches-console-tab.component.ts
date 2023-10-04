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
  OnInit,
  ChangeDetectorRef,
  TemplateRef
} from '@angular/core';

import { AbstractSubscriberComponent } from '../../abstract-subscriber';
import { DomUtilService, PathUtilService, JsonStoreService, AppGlobalsService } from '../../shared/services';
import { JsonPatch, JsonPatchesByPath } from '../../shared/interfaces';

@Component({
  selector: 'patches-console-tab',
  styleUrls: [
    '../abstract-console-tab/abstract-console-tab.component.scss',
    './patches-console-tab.component.scss'
  ],
  templateUrl: './patches-console-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatchesConsoleTabComponent extends AbstractSubscriberComponent implements OnInit {

  patchesByPath: JsonPatchesByPath = {};

  constructor(private domUtilService: DomUtilService,
    private appGlobalsService: AppGlobalsService,
    private pathUtilService: PathUtilService,
    private jsonStoreService: JsonStoreService,
    private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.jsonStoreService.patchesByPath$
      .takeUntil(this.isDestroyed)
      .subscribe(patchesByPath => {
        this.patchesByPath = patchesByPath;
        this.changeDetectorRef.markForCheck();
      });
  }

  focusPatch(patch: JsonPatch) {
    this.domUtilService.focusPatch(patch);
  }

  get patches(): Array<JsonPatch> {
    return Object
      .keys(this.patchesByPath)
      .reduce((patches, path) => patches.concat(this.patchesByPath[path]), []);
  }

  get customHeaderTemplate(): TemplateRef<any> {
    return this.appGlobalsService.templates.patchesHeaderTemplate;
  }

  acceptAll() {
    this.patches
      .forEach(patch => this.jsonStoreService.applyPatch(patch));
  }

  rejectAll() {
    this.patches
      .forEach(patch => this.jsonStoreService.rejectPatch(patch));
  }
}

