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
  EventEmitter,
  Input,
  Output,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'searchable-dropdown',
  styleUrls: [
    './searchable-dropdown.component.scss'
  ],
  templateUrl: './searchable-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableDropdownComponent implements OnInit {

  @Input() items: Array<string>;
  @Input() shortcutMap: object;
  @Input() value: string;
  @Input() pathString: string;
  @Input() tabIndex: number;
  @Input() placeholder: string;
  expression = '';
  status: { isOpen: boolean } = { isOpen: false };

  @Output() onSelect = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter<void>();


  ngOnInit() {
    this.placeholder = this.value || this.placeholder || '';
  }

  get expressionOrValue(): string {
    return this.status.isOpen ? this.expression : this.value;
  }

  set expressionOrValue(expressionOrValue: string) {
    if (this.status.isOpen) {
      this.expression = expressionOrValue;
    } else {
      this.value = expressionOrValue;
    }
  }

  onItemClick(item: string) {
    this.value = item;
    this.onSelect.emit(item);
    // only necessary to force closing when selected is item equals to value
    // in which case dropdown doesn't close automatically for some reason
    this.status.isOpen = false;
  }

  onKeypress(key: string) {
    if (key === 'Enter') {
      if (this.shortcutMap && this.shortcutMap[this.expression]) {
        this.onItemClick(this.shortcutMap[this.expression]);
      }
      this.status.isOpen = false;
    }
  }

  onInputFocus(event: FocusEvent) {
    this.status.isOpen = true;
  }

  onInputBlur(event: FocusEvent) {
    // this avoids closing dropdown when an item is selected
    // so that onItemClick() can be executed properly before closing.
    let relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget || relatedTarget.className !== 'dropdown-item') {
      this.status.isOpen = false;
    }
    this.onBlur.emit();
  }
}
