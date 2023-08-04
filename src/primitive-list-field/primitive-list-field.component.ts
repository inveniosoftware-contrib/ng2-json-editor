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

import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { List } from 'immutable';

import { AbstractListFieldComponent } from '../abstract-list-field';
import { AppGlobalsService, JsonStoreService, PathUtilService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  selector: 'primitive-list-field',
  styleUrls: [
    './primitive-list-field.component.scss'
  ],
  templateUrl: './primitive-list-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimitiveListFieldComponent extends AbstractListFieldComponent {
  @Input() values: List<any>;
  @Input() supportValues: List<any>;
  @Input() schema: JSONSchema;
  @Input() path: Array<any>;

  constructor(public appGlobalsService: AppGlobalsService,
    public problemsService: ProblemsService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService,
    public changeDetectorRef: ChangeDetectorRef) {
    super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
  }

}
