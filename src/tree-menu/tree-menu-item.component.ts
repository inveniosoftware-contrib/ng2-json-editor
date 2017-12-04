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
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Map, Set } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { DomUtilService, WindowHrefService, PathUtilService, AppGlobalsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  selector: 'tree-menu-item',
  styleUrls: [
    './tree-menu-item.component.scss'
  ],
  templateUrl: './tree-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeMenuItemComponent implements OnInit, OnChanges {

  @Input() label: string;
  @Input() value: any;
  @Input() schema: JSONSchema;
  @Input() path: string;
  @Input() depth: number;

  // defined only if schmea.type equals to 'object'
  keys: Set<string>;

  isCollapsed = true;
  href: string;

  constructor(private windowHrefService: WindowHrefService,
    private domUtilService: DomUtilService,
    private pathUtilService: PathUtilService,
    private appGlobalsService: AppGlobalsService) {
  }

  ngOnInit() {
    this.href = `${this.windowHrefService.hrefWithoutHash}#${this.path}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] && this.value && this.schema.type === 'object') {
      this.keys = this.value.keySeq().toSet();
    }
  }

  toggle(event: Event) {
    // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
    event.preventDefault();

    this.isCollapsed = !this.isCollapsed;
    this.domUtilService.focusAndSelectFirstEditableChildById(this.path, true);
  }

  collapse() {
    this.isCollapsed = true;
  }

  get isCollapsable(): boolean {
    const schemaType = this.schema.type;
    return this.isNotLeaf && (schemaType === 'object' || schemaType === 'array');
  }

  get maxDepth(): number {
    return this.appGlobalsService.config.menuMaxDepth;
  }

  get isNotLeaf(): boolean {
    return this.maxDepth === undefined || this.depth < this.maxDepth;
  }

  get adminMode$(): ReplaySubject<boolean> {
    return this.appGlobalsService.adminMode$;
  }

  getChildPath(indexOrKey: number | string) {
    return `${this.path}${this.pathUtilService.separator}${indexOrKey}`;
  }

  trackByElement(index: number, element: any): any {
    return element;
  }

}
