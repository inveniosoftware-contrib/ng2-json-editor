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
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { SearchableDropdownComponent } from '../searchable-dropdown';
import { TextDiffComponent } from '../text-diff';
import { PatchActionsComponent } from '../patch-actions';
import { AutocompleteInputComponent } from '../autocomplete-input';
import { PrimitiveFieldComponent } from './primitive-field.component';
import { StringInputComponent } from '../string-input';
import { FilterByExpressionPipe } from '../shared/pipes';
import {
  AppGlobalsService,
  ComponentTypeService,
  SchemaValidationService,
  JsonStoreService,
  KeysStoreService,
  KatexService,
  PathUtilService,
  DomUtilService,
  TabsUtilService,
  ErrorsService,
  JsonSchemaService,
  TextDiffService,
  ListPageChangerService
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
function changeInputElementValue(el: HTMLInputElement, value: string) {
  el.value = value;
  el.dispatchEvent(new Event('input'));
}

class MockJsonStoreService extends JsonStoreService {
  readonly patchesByPath$ = Observable.of({}) as ReplaySubject<any>;

  setIn(path: Array<any>, value: any) { }
}

describe('PrimitiveFieldComponent', () => {

  let fixture: ComponentFixture<PrimitiveFieldComponent>;
  let component: PrimitiveFieldComponent;
  let nativeEl: HTMLElement;
  let inputEl: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterByExpressionPipe,
        AutocompleteInputComponent,
        SearchableDropdownComponent,
        StringInputComponent,
        PrimitiveFieldComponent,
        ContentModelDirective,
        TextDiffComponent,
        PatchActionsComponent
      ],
      imports: [
        Ng2BootstrapModule.forRoot()
      ],
      providers: [
        AppGlobalsService,
        ComponentTypeService,
        SchemaValidationService,
        PathUtilService,
        DomUtilService,
        TabsUtilService,
        ErrorsService,
        KatexService,
        KeysStoreService,
        JsonSchemaService,
        TextDiffService,
        ListPageChangerService,
        { provide: JsonStoreService, useClass: MockJsonStoreService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveFieldComponent);
    component = fixture.componentInstance;

    // force component to render completely by setting @Input() manually
    component.value = 1;
    component.path = ['default', 'path'];
    component.schema = {
      type: 'integer',
      componentType: 'integer'
    };
    fixture.detectChanges();

    // get useful elements to use in tests
    nativeEl = fixture.nativeElement;
    inputEl = nativeEl
      .querySelector('input') as HTMLInputElement;
    inputEl.focus();
  });

  it('should be binded to view', () => {
    /**
     * inputEl.value is not updated in test environment
    const modelValue = 'modelValue';
    component.value = modelValue;
    fixture.detectChanges();
    expect(inputEl.value).toEqual(modelValue);
    */

    const inputValue = '2';
    changeInputElementValue(inputEl, inputValue);
    fixture.detectChanges();
    expect(component.value).toEqual(Number(inputValue));
  });

  it('should call jsonStore for change on blur', () => {
    spyOn(component.jsonStoreService, 'setIn');
    // change the value
    const newValue = '2';
    changeInputElementValue(inputEl, newValue);
    fixture.detectChanges();
    // blur
    inputEl.dispatchEvent(new Event('blur'));
    expect(component.jsonStoreService.setIn).toHaveBeenCalledWith(component.path, Number(newValue));
  });

  it('should not call jsonStore on blur if there is no change', () => {
    spyOn(component.jsonStoreService, 'setIn');

    const sameValue = component.value;
    changeInputElementValue(inputEl, sameValue.toString());
    fixture.detectChanges();
    // blur
    inputEl.dispatchEvent(new Event('blur'));
    expect(component.jsonStoreService.setIn).not.toHaveBeenCalled();
  });

  it('should call jsonStore for change on enter pressed', () => {
    spyOn(component.jsonStoreService, 'setIn');
    // change the value
    const newValue = '2';
    changeInputElementValue(inputEl, newValue);
    fixture.detectChanges();
    // press enter
    const enterPressedEvent = new Event('keypress');
    enterPressedEvent['key'] = 'Enter';
    inputEl.dispatchEvent(enterPressedEvent);

    expect(component.jsonStoreService.setIn).toHaveBeenCalledWith(component.path, Number(newValue));
  });

  it('should call jsonStore for default value even on blur', () => {
    spyOn(component.jsonStoreService, 'setIn');
    // change the value
    const defaultValue = 99;
    component.schema.default = defaultValue;
    component.value = 99;
    component.ngOnInit();
    fixture.detectChanges();
    // blur
    inputEl.dispatchEvent(new Event('blur'));
    expect(component.jsonStoreService.setIn).toHaveBeenCalledWith(component.path, defaultValue);
  });
});
