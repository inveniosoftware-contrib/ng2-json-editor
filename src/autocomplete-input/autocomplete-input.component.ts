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

import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AutocompletionService } from '../shared/services';

@Component({
  selector: 'autocomplete-input',
  styleUrls: [
    './autocomplete-input.component.scss'
  ],
  templateUrl: './autocomplete-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteInputComponent implements OnInit {

  @Input() autocompletionOptions: AutocompletionOptions;
  @Input() value: string;
  @Input() placeholder: string;

  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  dataSource: Observable<string>;

  constructor(private autocompletionService: AutocompletionService) { }

  ngOnInit() {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.value);
    }).mergeMap((token: string) =>
      this.autocompletionService.getAutocompletionResults(this.autocompletionOptions, token));
  }

  onModelChange(value: string) {
    this.value = value;
    this.onValueChange.emit(value);
  }
}
