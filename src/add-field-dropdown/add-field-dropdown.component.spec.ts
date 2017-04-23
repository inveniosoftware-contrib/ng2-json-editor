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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Set } from 'immutable';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AddFieldDropdownComponent } from './add-field-dropdown.component';
import { DifferentKeysPipe, FilterByExpressionPipe } from '../shared/pipes';
import { DomUtilService, EmptyValueService, PathUtilService, TabsUtilService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

const testSchema: JSONSchema = {
  type: 'object',
  properties: {
    propA: { type: 'string' },
    propB: { type: 'string' },
    propNotInValueA: { type: 'string' },
    propNotInValueB: { type: 'string' }
  }
};
const fields = Set(['propA', 'propB']);
const mockDifferentKeys = Set(['propNotInValueB', 'propNotInValueA']);
const emptyValue = 'empty-value';

class MockEmptyValueService extends EmptyValueService {
  generateEmptyValue(schema: JSONSchema): any {
    return emptyValue;
  }
}

describe('AddFieldToObjectDropdownComponent', () => {

  let fixture: ComponentFixture<AddFieldDropdownComponent>;
  let component: AddFieldDropdownComponent;
  let nativeEl: HTMLElement;
  let showDropdownButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DifferentKeysPipe,
        FilterByExpressionPipe,
        AddFieldDropdownComponent
      ],
      imports: [
        Ng2BootstrapModule.forRoot()
      ],
      providers: [
        { provide: EmptyValueService, useClass: MockEmptyValueService },
        DomUtilService,
        PathUtilService,
        TabsUtilService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldDropdownComponent);
    component = fixture.componentInstance;
    component.fields = fields;
    component.schema = testSchema;
    fixture.detectChanges();

    nativeEl = fixture.nativeElement;
    showDropdownButton = nativeEl.querySelector('button') as HTMLButtonElement;
  });

  xit('should show different keys of schema', () => {
    showDropdownButton.dispatchEvent(new Event('click'));
    let items: Set<string> = Set(
      Array.prototype
        .slice.call(nativeEl.querySelectorAll('li a'))
        .map((a: HTMLAnchorElement) => a.textContent) as Array<string>
    );
    expect(items).toEqual(mockDifferentKeys);
  });

  xit('should add field with empty value when dropdown item clicked', () => {
    showDropdownButton.dispatchEvent(new Event('click'));
    let anchor = nativeEl.querySelector('li a') as HTMLAnchorElement;
    expect(component.fields.has(anchor.textContent)).toBeFalsy();
    spyOn(component.fieldAdd, 'emit');
    anchor.dispatchEvent(new Event('click'));
    expect(component.fieldAdd.emit).toHaveBeenCalledWith(anchor.textContent);
  });
});
