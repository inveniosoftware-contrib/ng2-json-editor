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
  ElementRef,
  Directive,
  Renderer,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';

@Directive({
  selector: '[textareaAutofit]'
})
export class TextareaAutofitDirective implements OnInit, OnDestroy {

  windowResizeSub: Subscription;
  inputChangeSub: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.registerObservables();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.resizeElementToFitContent();
    });
  };

  ngOnDestroy() {
    if (this.windowResizeSub) {
      this.windowResizeSub.unsubscribe();
    }
    if (this.inputChangeSub) {
      this.inputChangeSub.unsubscribe();
    }
  }

  registerObservables(): void {
    this.windowResizeSub = Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe((event) => {
        this.resizeElementToFitContent();
      });
    this.inputChangeSub = Observable.fromEvent(this.el.nativeElement, 'input')
      .throttleTime(200)
      .subscribe((event) => {
        this.resizeElementToFitContent();
      });
  }

  resizeElementToFitContent(): void {
    // Set element's height:auto every time to be able to override it.
    if (this.el.nativeElement.scrollHeight > 0) {
      this.renderer.setElementStyle(this.el.nativeElement, 'height', 'auto');
      this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
    }
  }
}

