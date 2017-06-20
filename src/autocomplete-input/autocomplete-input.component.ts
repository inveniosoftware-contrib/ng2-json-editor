/*
 * This file is part of INSPIRE.
 * Copyright (C) 2016 CERN.
 *
 * INSPIRE is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { JsonStoreService, RemoteAutocompletionService, AppGlobalsService, KeysStoreService } from '../shared/services';
import { AutocompletionConfig, AutocompletionResult } from '../shared/interfaces';

@Component({
  selector: 'autocomplete-input',
  styleUrls: [
    './autocomplete-input.component.scss'
  ],
  templateUrl: './autocomplete-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteInputComponent implements OnInit {

  @Input() autocompletionConfig: AutocompletionConfig;
  @Input() path: Array<any>;
  @Input() value: string;
  @Input() pathString: string;
  @Input() tabIndex: number;
  @Input() placeholder: string;

  @Output() onValueChange: EventEmitter<string> = new EventEmitter<any>();
  @Output() onKeypress: EventEmitter<KeyboardEvent> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  dataSource: Observable<string> | Array<string>;
  typeaheadOptionField: string;

  constructor(public remoteAutocompletionService: RemoteAutocompletionService,
    public jsonStoreService: JsonStoreService,
    public keysStoreService: KeysStoreService,
    public appGlobalsService: AppGlobalsService) { }

  ngOnInit() {
    // if url option set then use remote autocompletion service
    if (this.autocompletionConfig.url) {
      this.typeaheadOptionField = 'text';
      this.dataSource = Observable.create((observer: any) => {
        if (this.value && this.value.length > 0) {
          observer.next(this.value);
        }
      }).mergeMap((token: string) =>
        this.remoteAutocompletionService.getAutocompletionResults(this.autocompletionConfig, token));
    } else {
      this.dataSource = this.autocompletionConfig.source;
    }

  }

  get customItemTemplate(): TemplateRef<any> {
    return this.appGlobalsService.templates[this.autocompletionConfig.itemTemplateName];
  }

  onModelChange(value: string) {
    this.value = value;
    this.onValueChange.emit(value);
  }

  onCompletionSelect(completionItem: AutocompletionResult) {
    let onCompletionSelect = this.autocompletionConfig.onCompletionSelect;
    // if callback set and it is remote autocompletion source
    if (onCompletionSelect && this.typeaheadOptionField) {
      // .slice() is used to pass by value instead of reference
      onCompletionSelect(this.path.slice(), completionItem, this.jsonStoreService, this.keysStoreService);
    }
  }
}
