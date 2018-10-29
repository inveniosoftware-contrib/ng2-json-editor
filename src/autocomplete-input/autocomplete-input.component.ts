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
import { TypeaheadMatch } from 'ngx-bootstrap';

import { RemoteAutocompletionService, AppGlobalsService } from '../shared/services';
import { AutocompletionConfig } from '../shared/interfaces';

@Component({
  selector: 'autocomplete-input',
  styleUrls: [
    './autocomplete-input.component.scss'
  ],
  templateUrl: './autocomplete-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteInputComponent implements OnInit {
  static readonly slashesRegExp = new RegExp('/', 'g');

  @Input() autocompletionConfig: AutocompletionConfig;
  @Input() value: string;
  @Input() pathString: string;
  @Input() tabIndex: number;
  @Input() placeholder: string;

  @Output() onValueChange = new EventEmitter<string>();
  @Output() onCompletionSelect = new EventEmitter<string>();
  @Output() onKeypress = new EventEmitter<KeyboardEvent>();
  @Output() onBlur = new EventEmitter<void>();

  dataSource: Observable<Array<string | object>> | Array<string | object>;
  typeaheadOptionField: string;

  constructor(public remoteAutocompletionService: RemoteAutocompletionService,
    public appGlobalsService: AppGlobalsService) { }

  ngOnInit() {
    if (this.autocompletionConfig.url) {
      // remote
      this.typeaheadOptionField = this.getDotSeparatedOptionField() || 'text';
      this.dataSource = Observable.create((observer: any) => {
        if (this.value && this.value.length > 0) {
          observer.next(this.value);
        }
      }).mergeMap((token: string) =>
        this.remoteAutocompletionService.getAutocompletionResults(this.autocompletionConfig, token));
    } else {
      // local
      this.typeaheadOptionField = this.getDotSeparatedOptionField() || '';
      this.dataSource = this.autocompletionConfig.source;
    }
  }

  get customItemTemplate(): TemplateRef<any> {
    return this.appGlobalsService.templates[this.autocompletionConfig.itemTemplateName];
  }

  getDotSeparatedOptionField() {
    const { optionField } = this.autocompletionConfig;
    return optionField && optionField.replace(AutocompleteInputComponent.slashesRegExp, '.');
  }

  onModelChange(value: string) {
    this.value = value;
    this.onValueChange.emit(value);
  }

  onMatchSelect(match: TypeaheadMatch) {
    this.onCompletionSelect.emit(match.item);
  }
}
