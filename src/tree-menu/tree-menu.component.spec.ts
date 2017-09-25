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
import { Component } from '@angular/core';
import { fromJS, Map } from 'immutable';

import { TreeMenuItemComponent } from './tree-menu-item.component';
import { TreeMenuComponent } from './tree-menu.component';
import {
  DomUtilService,
  PathUtilService,
  WindowHrefService,
  AppGlobalsService,
  TabsUtilService,
  ListPageChangerService
} from '../shared/services';
import {
  AddAlwaysShowFieldsPipe,
  FilterHiddenFieldsPipe,
  SortAlphabeticallyPipe
} from '../shared/pipes';


/**
 * Wrap tree-menu in a host component to be able trigger `ngOnChanges`
 */
@Component({
  template: '<tree-menu [record]="record" [schema]="schema"></tree-menu>'
})
class TestHostComponent {
  schema = {
    type: 'object',
    properties: {
      anArray: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            aString: {
              type: 'string'
            }
          }
        }
      }
    }
  };

  record: Map<string, any> = fromJS({
    anArray: [
      {
        aString: 'foo'
      },
      {
        aString: 'bar'
      }
    ]
  });
  firstLevelKeysCount = 1;
  allKeysCount = 5;
}

describe('TreeMenuComponent', () => {

  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let nativeEl: HTMLElement;
  const appGlobalsService = new AppGlobalsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        TreeMenuComponent,
        TreeMenuItemComponent,
        AddAlwaysShowFieldsPipe,
        FilterHiddenFieldsPipe,
        SortAlphabeticallyPipe
      ],
      imports: [

      ],
      providers: [
        PathUtilService,
        WindowHrefService,
        DomUtilService,
        TabsUtilService,
        ListPageChangerService,
        { provide: AppGlobalsService, useValue: appGlobalsService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    appGlobalsService.config = {};
    fixture.detectChanges();
    nativeEl = fixture.nativeElement;
  });

  it('should be nested if menuMaxDepth is not set', () => {
    const menuItemsCount = nativeEl.querySelectorAll('tree-menu-item').length;

    expect(menuItemsCount).toEqual(component.allKeysCount);
  });

  it('should not go deeper than menuMaxDepth', () => {
    appGlobalsService.config = { menuMaxDepth: 1 };
    // Create the component again to render with new menuMaxDepth
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();

    const menuItemsCount = nativeEl.querySelectorAll('tree-menu-item').length;
    expect(menuItemsCount).toEqual(component.firstLevelKeysCount);
  });
});
