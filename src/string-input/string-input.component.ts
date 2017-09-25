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
  ViewChild,
  OnChanges,
  SimpleChanges
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
export class StringInputComponent implements AfterViewInit, OnInit, OnChanges {
  @ViewChild('latexPreview') latexPreviewEl: ElementRef;

  // value update triggers re-rendering of latex preview if it's enabled
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() pathString: string;
  @Input() placeholder: string;
  @Input() tabIndex: number;
  @Input() latexPreviewEnabled: boolean;

  @Output() blur = new EventEmitter<void>();
  @Output() onKeypress = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<string>();

  latexPreviewShown: boolean;
  // updated as typed in contenteditable div, doesn't trigger latex re-rendering.
  contentModel: string;

  constructor(public domUtilService: DomUtilService, public katexService: KatexService) { }

  ngOnChanges(changes: SimpleChanges) {
    const valueChange = changes['value'];
    if (valueChange) {
      this.contentModel = this.value;
      if (this.latexPreviewEnabled && !valueChange.firstChange) {
        this.renderLatex();
      }
    }
  }

  ngOnInit() {
    if (this.shouldShowLatexPreview) {
      this.latexPreviewShown = true;
    }
  }

  ngAfterViewInit() {
    // render latex preview on init, if it's enabled and value is not empty
    if (this.shouldShowLatexPreview) {
      this.renderLatex();
    }
  }

  onBlur() {
    if (this.shouldShowLatexPreview) {
      this.latexPreviewShown = true;
      this.value = this.contentModel;
    }
    this.blur.emit();
  }

  renderLatex() {
    this.katexService.renderMathInText(this.value, this.latexPreviewEl.nativeElement);
  }

  hideLatexPreview(contentEditableDiv: HTMLElement) {
    this.latexPreviewShown = false;
    setTimeout(() => contentEditableDiv.focus());
  }

  contentModelChange(value: string) {
    this.contentModel = value;
    this.valueChange.emit(value);
  }

  get shouldShowLatexPreview(): boolean {
    return this.latexPreviewEnabled && Boolean(this.value);
  }
}
