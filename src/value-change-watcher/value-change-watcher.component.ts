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
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { JsonStoreService } from '../shared/services';

import { OnValueChangeFunction } from '../shared/interfaces';
/**
 * This component has dummy html but a logic to change the value of another part
 * in top level json when its value changed. It's inserted in component tree
 * just before the actual field, so that it can detect its change and
 * run the call-back function
 */
@Component({
  selector: 'value-change-watcher',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './value-change-watcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueChangeWatcherComponent implements OnInit, OnChanges {

  @Input() schema: Object;
  @Input() path: Array<any>;
  @Input() value: any;

  onValueChange: OnValueChangeFunction;

  constructor(public changeDetectionRef: ChangeDetectorRef,
    public jsonStoreService: JsonStoreService) { }

  ngOnInit() {
    this.onValueChange = this.schema['onValueChange'];
    // remove this config so that it will not be detected as value-change-watcher again
    // by ComponentTypeService, but its actual type
    this.schema = Object.assign({}, this.schema);
    delete this.schema['onValueChange'];
  }

  ngOnChanges(changes: SimpleChanges) {
    let valueChange = changes['value'];
    if (valueChange && !valueChange.isFirstChange()) {
      // this.path.slice is used to pass by value not by reference, because the function might modify the path
      this.onValueChange(this.path.slice(), valueChange.currentValue, this.jsonStoreService);
      // force to detect changes since onValueChange might change some other parts of top level json
      this.changeDetectionRef.detectChanges();
    }
  }
}
