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
  TestBed
} from '@angular/core/testing';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { SearchableDropdownComponent } from '../searchable-dropdown';
import { AutocompleteInputComponent } from '../autocomplete-input';
import { PrimitiveFieldComponent } from './primitive-field.component';

import { FilterByExpressionPipe } from '../shared/pipes';

import {
  AppGlobalsService,
  ComponentTypeService,
  SchemaValidationService,
  JsonStoreService,
  PathUtilService
} from '../shared/services';
import { ContentModelDirective } from '../shared/directives';

/**
 * Change input html element value
 * and dispatches/fires an input event.
 *
 * Used to mock changing element value on UI.
 *
 * TODO: create a test helper class for this kind of functions!
 *
 * @param {HTMLElement} el - <div contenteditable=true> or <input> html element
 * @param {string} value - new value to be set to el.value
 */
function changeInputElementValue(el: HTMLElement, value: string) {
  if (el instanceof HTMLInputElement) {
    el.value = value;
  } else {
    el.innerText = value;
  }
  el.dispatchEvent(new Event('blur'));
}

class MockJsonStoreService extends JsonStoreService {
  setIn(path: Array<any>, value: any) { }
}

describe('PrimitiveFieldComponent', () => {

  let fixture: ComponentFixture<PrimitiveFieldComponent>;
  let component: PrimitiveFieldComponent;
  let nativeEl: HTMLElement;
  let inputEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterByExpressionPipe,
        AutocompleteInputComponent,
        SearchableDropdownComponent,
        PrimitiveFieldComponent,
        ContentModelDirective
      ],
      imports: [
        Ng2BootstrapModule.forRoot()
      ],
      providers: [
        AppGlobalsService,
        ComponentTypeService,
        SchemaValidationService,
        PathUtilService,
        { provide: JsonStoreService, useClass: MockJsonStoreService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveFieldComponent);
    component = fixture.componentInstance;

    // force component to render completely by setting @Input() manually
    component.value = 'defaultStringValue';
    component.path = ['default', 'path'];
    component.schema = {
      type: 'string'
    };
    fixture.detectChanges();

    // get useful elements to use in tests
    nativeEl = fixture.nativeElement;
    inputEl = nativeEl
      .querySelector('input, div[contenteditable=true]') as HTMLElement;
  });

  it('should be binded to view', () => {
    /**
     * inputEl.value is not updated in test environment
    let modelValue = 'modelValue';
    component.value = modelValue;
    fixture.detectChanges();
    expect(inputEl.value).toEqual(modelValue);
    */

    let inputValue = 'inputValue';
    changeInputElementValue(inputEl, inputValue);
    fixture.detectChanges();
    expect(component.value).toEqual(inputValue);
  });

  it('should call jsonStore for change on blur', () => {
    spyOn(component.jsonStoreService, 'setIn');
    // change the value
    let newValue = 'newValue';
    changeInputElementValue(inputEl, newValue);
    fixture.detectChanges();
    // blur
    inputEl.dispatchEvent(new Event('blur'));

    expect(component.jsonStoreService.setIn).toHaveBeenCalledWith(component.path, newValue);
  });

  it('should call jsonStore for change on enter pressed', () => {
    spyOn(component.jsonStoreService, 'setIn');
    // change the value
    let newValue = 'newValue';
    changeInputElementValue(inputEl, newValue);
    fixture.detectChanges();
    // press enter
    let enterPressedEvent = new Event('keypress');
    enterPressedEvent['key'] = 'Enter';
    inputEl.dispatchEvent(enterPressedEvent);

    expect(component.jsonStoreService.setIn).toHaveBeenCalledWith(component.path, newValue);
  });
});
