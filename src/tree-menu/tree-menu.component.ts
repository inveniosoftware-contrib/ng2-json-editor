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

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Map, Set } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AbstractTrackerComponent } from '../abstract-tracker';
import { DomUtilService, PathUtilService, AppGlobalsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  selector: 'tree-menu',
  styleUrls: [
    './tree-menu.component.scss'
  ],
  templateUrl: './tree-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeMenuComponent extends AbstractTrackerComponent implements OnChanges {

  @Input() record: Map<string, any>;
  @Input() schema: JSONSchema;

  keys: Set<string>;

  private prefixOrPath = '';

  constructor(private domUtilService: DomUtilService,
    private pathUtilService: PathUtilService,
    private appGlobalsService: AppGlobalsService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['record']) {
      this.keys = this.record.keySeq().toSet();
    }
  }

  getChildPath(key: string) {
    return `${this.pathUtilService.separator}${key}`;
  }

  get adminMode$(): ReplaySubject<boolean> {
    return this.appGlobalsService.adminMode$;
  }
}
