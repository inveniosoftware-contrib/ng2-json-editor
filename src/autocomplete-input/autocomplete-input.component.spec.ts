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

import { HttpModule } from '@angular/http';
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AutocompleteInputComponent } from '../autocomplete-input';
import {
  RemoteAutocompletionService,
  JsonStoreService,
  PathUtilService,
  AppGlobalsService,
  ErrorMapUtilService,
  KeysStoreService
} from '../shared/services';
import { AutocompletionResult, AutocompletionConfig } from '../shared/interfaces';

const autocompletionServiceResults = [
  { text: 'Result1' },
  { text: 'Result2' },
  { text: 'Result3' }
];
class MockRemoteAutocompletionService extends RemoteAutocompletionService {
  getAutocompletionResults(options: AutocompletionConfig,
    token: string): Observable<Array<AutocompletionResult>> {
    return Observable.of(autocompletionServiceResults);
  }
}

class MockAppGlobalsService extends AppGlobalsService {
  templates = {};
}

describe('AutocompleteInputComponent', () => {
  let fixture: ComponentFixture<AutocompleteInputComponent>;
  let component: AutocompleteInputComponent;
  let nativeEl: HTMLElement;
  let inputEl: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutocompleteInputComponent,
      ],
      imports: [
        Ng2BootstrapModule.forRoot(),
        HttpModule
      ],
      providers: [
        { provide: RemoteAutocompletionService, useClass: MockRemoteAutocompletionService },
        { provide: AppGlobalsService, useClass: MockAppGlobalsService },
        JsonStoreService,
        KeysStoreService,
        PathUtilService,
        ErrorMapUtilService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteInputComponent);
    component = fixture.componentInstance;

    // need to size to render the component!
    component.autocompletionConfig = {
      url: '',
      path: '',
      size: 3,
      onCompletionSelect: (path, completion, store) => { }
    };
    component.value = '';
    fixture.detectChanges();

    nativeEl = fixture.nativeElement;
    inputEl = nativeEl
      .querySelector('input') as HTMLInputElement;
  });

  it('should be loaded and rendered', () => {
    expect(nativeEl).toBeDefined();
    expect(inputEl).toBeDefined();
  });
});
