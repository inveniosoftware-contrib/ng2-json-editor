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
  ConnectionBackend,
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  RequestOptionsArgs
} from '@angular/http';
import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import { RemoteAutocompletionService } from './remote-autocompletion.service';

// results will be returened in body of MockHttp response.
const mockResults = [
  { text: 'result1' },
  { text: 'result2' }
];
// path option for AutocompletionService.
const mockOptionsPath = 'stuff.0.results';
// reponse will be returned to any get request by MockHttp.
const getResponseJson = {
  stuff: [
    {
      results: mockResults
    }
  ]
};

class MockHttp extends Http {
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    let responseOptions = new ResponseOptions({ body: getResponseJson });
    return Observable.of(new Response(responseOptions));
  }
}

describe('AutocompletionService', () => {

  let service: RemoteAutocompletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ConnectionBackend,
        RemoteAutocompletionService,
        { provide: Http, useClass: MockHttp }
      ]
    });
  });

  beforeEach(inject([RemoteAutocompletionService], (autocompletionService) => {
    service = autocompletionService;
  }));

  it('should get autocompletion results', (done) => {
    let options = {
      url: 'whatever.json', // ignored for test
      path: mockOptionsPath,
      size: 1 // ignored for test
    };
    service.getAutocompletionResults(options, 'whatever').subscribe(result => {
      expect(result).toEqual(mockResults);
      done();
    });
  });

});
