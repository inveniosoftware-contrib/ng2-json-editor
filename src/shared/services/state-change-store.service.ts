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

import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import 'mousetrap';

@Injectable()
export class StateChangeStoreService implements  OnDestroy {

  private jsonStateList= new Array<any>();
  private maxStateRestoreCounter = 5;
  private _jsonStateRestoreChange: ReplaySubject<any> = new ReplaySubject(1);
  private _jsonStateAddChange: ReplaySubject<any> = new ReplaySubject(1);
  private mousetrap: MousetrapInstance;

  constructor() {
    this.mousetrap = new Mousetrap(document.body);
    this.mousetrap.bind('mod+shift+z', (event: KeyboardEvent) => {
      event.preventDefault();
      this.restoreJsonState();
      return false;
    });
  }

  addNewJsonState(json: Object) {
    if (this.jsonStateList.length < this.maxStateRestoreCounter) {
      this.jsonStateList.push(json);
    }
  }

  notifyJsonStateModified(json: Object) {
    this._jsonStateAddChange.next(json);
  }

  restoreJsonState() {
   if (this.jsonStateList.length) {
     this._jsonStateRestoreChange.next(this.jsonStateList.pop());
   }
  }

  get jsonStateRestoreChange(): ReplaySubject<Array<any>> {
    return this._jsonStateRestoreChange;
  }

  get jsonStateAddChange(): ReplaySubject<Array<any>> {
    return this._jsonStateAddChange;
  }

  ngOnDestroy(): void {
    this.mousetrap.unbind('mod+shift+z');
  }
}
