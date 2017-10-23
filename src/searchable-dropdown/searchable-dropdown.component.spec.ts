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
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { SearchableDropdownComponent } from './searchable-dropdown.component';
import { FilterByExpressionPipe } from '../shared/pipes';

describe('SearchableDropdownComponent', () => {

  let fixture: ComponentFixture<SearchableDropdownComponent>;
  let component: SearchableDropdownComponent;
  let nativeEl: HTMLElement;
  let inputEl: HTMLInputElement;

  const getDropdownItems: () => Array<HTMLElement> = () => {
    component.status = { isOpen: true };
    fixture.detectChanges();
    return Array.prototype
      .slice.call(nativeEl.querySelectorAll('.dropdown-item'))
      .map((item: HTMLElement) => item.textContent);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterByExpressionPipe,
        SearchableDropdownComponent,
      ],
      imports: [
        Ng2BootstrapModule.forRoot(),
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableDropdownComponent);
    component = fixture.componentInstance;
    component.value = 'default';
    component.items = [];
    fixture.detectChanges();

    nativeEl = fixture.nativeElement;
    inputEl = nativeEl
      .querySelector('input') as HTMLInputElement;
  });

  it('should map shortcut to correct value when pressed enter', () => {
    component.shortcutMap = {
      s: 'shortcut'
    };

    // open the dropdown
    component.status.isOpen = true;
    // input change, to update component.expression;
    inputEl.value = 's';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // trigger Enter key press
    const enterPressedEvent = new Event('keypress');
    enterPressedEvent['key'] = 'Enter';
    inputEl.dispatchEvent(enterPressedEvent);

    expect(component.value).toEqual('shortcut');
  });

  xit('should show all items when clicked if expression is empty', () => {
    // set enum.items
    const items = ['First', 'Second'];
    component.items = items;
    inputEl.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const dropdownItems = getDropdownItems()
      .map((item) => item.textContent);
    expect(dropdownItems).toEqual(items);
  });

  xit('should show filtered items by pipe if expression is not empty', () => {
    component.items = ['a1', 'a2', 'b1'];
    const itemsWithA = ['a1', 'a2'];
    component.status.isOpen = true;
    inputEl.value = 'a';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const dropdownItems = getDropdownItems()
      .map((item) => item.textContent);
    expect(dropdownItems).toEqual(itemsWithA);
  });
});
