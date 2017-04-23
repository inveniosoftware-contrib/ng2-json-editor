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
import { DomSanitizer } from '@angular/platform-browser';
import { List, Map } from 'immutable';

import { FindReplaceAllService, JsonStoreService, ModalService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

@Component({
  selector: 'find-replace',
  styleUrls: [
    './find-replace.component.scss'
  ],
  templateUrl: './find-replace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindReplaceComponent {

  @Input() path: Array<any>;
  @Input() schema: JSONSchema;

  private replaced: List<any> | Map<string, any>;

  private find: string;
  private replace: string;
  private exactPhrase: boolean;

  constructor(public changeDetectionRef: ChangeDetectorRef,
    public domSanitizer: DomSanitizer,
    public findReplaceAllService: FindReplaceAllService,
    public jsonStoreService: JsonStoreService,
    public modalService: ModalService) { }

  onKeypress(key: string) {
    if (key === 'Enter') {
      this.findAndReplace();
    }
  }

  findAndReplace() {
    if (!(this.find && this.replace)) {
      return;
    }
    let value = this.jsonStoreService.getIn(this.path);
    let result = this.findReplaceAllService
      .findReplaceInImmutable(value, this.schema, this.find, this.replace, this.exactPhrase);
    this.replaced = result.replaced;
    let stringyfiedDiffHtml = JSON.stringify(result.diffHtml, undefined, 2);
    this.modalService.displayModal({
      title: 'After Replace',
      bodyHtml: this.domSanitizer.bypassSecurityTrustHtml(`<pre class="max-height-70-vh"><code>${stringyfiedDiffHtml}</code></pre>`),
      type: 'confirm',
      onConfirm: () => {
        this.modalService.closeCurrentModal();
        this.jsonStoreService.setIn(this.path, this.replaced);
        this.cleanParameters();
      }
    });
  }

  private cleanParameters() {
    this.find = '';
    this.replace = '';
    this.exactPhrase = false;
    this.changeDetectionRef.markForCheck();
  }
}
