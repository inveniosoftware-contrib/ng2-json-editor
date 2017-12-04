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
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';

import { BiDirectionalMap } from 'bi-directional-map/dist';

import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'searchable-dropdown',
  styleUrls: [
    './searchable-dropdown.component.scss'
  ],
  templateUrl: './searchable-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableDropdownComponent implements OnChanges {

  @Input() items: Array<string>;
  @Input() shortcutMap: { [key: string]: string };
  @Input() displayValueMap: { [key: string]: string };
  @Input() value: string;
  @Input() pathString: string;
  @Input() tabIndex: number;
  @Input() placeholder: string;
  expression: string;
  biDisplayValueMap: BiDirectionalMap<string, string>;
  displayValues: Array<string>;

  @Output() onSelect = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter<void>();

  @ViewChild('filterInput') filterInputElRef: ElementRef;
  @ViewChild('dropdown') dropdown: BsDropdownDirective;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.placeholder = this.value || this.placeholder || '';
    }

    if (changes['displayValueMap'] || changes['items']) {
      this.displayValueMap = this.displayValueMap || Object.create(null);
      this.biDisplayValueMap = new BiDirectionalMap<string, string>(this.displayValueMap);
      // set original value as display value for not configured items.
      this.items
        .filter(item => !this.displayValueMap[item])
        .forEach(item => {
          this.biDisplayValueMap.set(item, item);
        });

      this.displayValues = Array.from(this.biDisplayValueMap.values());
    }
  }

  onItemClick(displayValue: string) {
    const originalValue = this.biDisplayValueMap.getKey(displayValue);
    this.onSelect.emit(originalValue);

    // only necessary to force closing when selected is item equals to value
    // in which case dropdown doesn't close automatically for some reason
    this.dropdown.hide();
  }

  onEnterKeyUp() {
    if (this.shortcutMap && this.shortcutMap[this.expression]) {
      this.onItemClick(this.shortcutMap[this.expression]);
    }
    this.dropdown.hide();
  }

  showDropdown() {
    this.dropdown.show();
    this.expression = '';
    setTimeout(() => {
      (this.filterInputElRef.nativeElement as HTMLInputElement).focus();
    });
  }

  onInputBlur(event: FocusEvent) {
    // this avoids closing dropdown when an item is selected
    // so that onItemClick() can be executed properly before closing.
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget || relatedTarget.className !== 'dropdown-item') {
      this.dropdown.hide();
    }
    this.onBlur.emit();
  }
}
