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

import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { AbstractTrackerComponent } from '../abstract-tracker';

import { Map, Set } from 'immutable';

import { DomUtilService, WindowHrefService, PathUtilService } from '../shared/services';

@Component({
  selector: 'tree-menu-item',
  styleUrls: [
    './tree-menu-item.component.scss'
  ],
  templateUrl: './tree-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeMenuItemComponent extends AbstractTrackerComponent implements OnInit, OnChanges {

  @Input() label: string;
  @Input() value: any;
  @Input() schema: Object;
  @Input() path: string;

  // defined only if schmea.type equals to 'object'
  keys: Set<string>;

  private isCollapsed = true;
  private href: string;

  constructor(private windowHrefService: WindowHrefService,
    private domUtilService: DomUtilService,
    private pathUtilService: PathUtilService) {
    super();
  }

  ngOnInit() {
    this.href = `${this.windowHrefService.getHrefWithoutHash()}#${this.path}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    let valueChange = changes['value'];
    if (valueChange && this.schema['type'] === 'object') {
      let currentValue: Map<string, any> = valueChange.currentValue;
      this.keys = currentValue.keySeq().toSet();
    }
  }

  toggle(event: Event) {
    // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
    event.preventDefault();

    this.isCollapsed = !this.isCollapsed;
    this.domUtilService.focusAndSelectFirstEditableChildById(this.path);
    this.domUtilService.flashElementById(this.path);
  }

  collapse() {
    this.isCollapsed = true;
  }

  get isCollapsable(): boolean {
    let schemaType = this.schema['type'];
    return (schemaType === 'object' || schemaType === 'array');
  }

  getChildPath(indexOrKey: number | string) {
    return `${this.path}${this.pathUtilService.separator}${indexOrKey}`;
  }

}
