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
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';

import { DomUtilService, KatexService } from '../shared/services';

@Component({
  selector: 'string-input',
  styleUrls: [
    './string-input.component.scss'
  ],
  templateUrl: './string-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringInputComponent implements AfterViewInit, OnInit {
  @ViewChild('latexPreview') latexPreviewEl: ElementRef;

  @Input() value: string;
  @Input() pathString: string;
  @Input() placeholder: string;
  @Input() tabIndex: number;
  @Input() latexPreviewEnabled: boolean;

  @Output() blur = new EventEmitter<void>();
  @Output() keypress = new EventEmitter<void>();

  latexPreviewShown: boolean;
  valuePreviewed = '';

  constructor(public domUtilService: DomUtilService, public katexService: KatexService) {}

  ngOnInit() {
    this.latexPreviewShown = this.latexPreviewEnabled;
  }

  ngAfterViewInit() {
    if (this.latexPreviewEnabled) {
      this.renderLatex();
    }
  }

  onBlur() {
    if (this.latexPreviewEnabled) {
      this.latexPreviewShown = true;
      this.renderLatex();
    }
    this.blur.emit();
  }

  valueChanged() {
    return this.value !== this.valuePreviewed;
  }

  renderLatex() {
    if (this.valueChanged()) {
      // Save value previewed to avoid re-rendering later on
      this.valuePreviewed = this.value;
      this.latexPreviewEl.nativeElement.innerHTML = this.value;
      this.katexService.renderMathInText(this.value, this.latexPreviewEl.nativeElement);
    }
  }

  hideLatexPreview(contentEditableDiv: HTMLElement) {
    this.latexPreviewShown = false;
    setTimeout(() => contentEditableDiv.focus());
  }
}
