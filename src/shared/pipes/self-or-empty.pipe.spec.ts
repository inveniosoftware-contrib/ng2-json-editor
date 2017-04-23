/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2017 CERN.
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

import { Map, List } from 'immutable';

import { EmptyValueService } from '../services/empty-value.service';
import { SelfOrEmptyPipe } from './self-or-empty.pipe';

describe('SelfOrEmptyPipe', () => {
  let pipe: SelfOrEmptyPipe;

  beforeEach(() => {
      pipe = new SelfOrEmptyPipe(new EmptyValueService());
  });

  it('should return empty value if given value is undefined', () => {
    let schema = {
      type: 'object',
        properties: {
          prop1: {
            type: 'string'
          }
        }
    };

  let value = undefined;
  let expectedResult = Map();
  let pipeResult = pipe.transform(value, schema);
  expect(pipeResult).toEqual(expectedResult);
  });

  it('should return empty value if given value is immutable List and is empty', () => {
    let schema = {
      type: 'array',
      items: {
        type: 'string'
      }
    };

    let value = List();
    let expectedResult = List<string>(['']);
    let pipeResult = pipe.transform(value, schema);
    expect(pipeResult).toEqual(expectedResult);
  });

  it('should return empty value if given value is immutable List and is empty given array of objects', () => {
    let schema = {
      type: 'array',
      items: {
        properties: {
          prop1: {
            type: 'string'
          }
        },
        type: 'object'
      }
    };

    let value = List();
    let expectedResult = List([Map()]);
    let pipeResult = pipe.transform(value, schema);
    expect(pipeResult).toEqual(expectedResult);
  });

  it('should return value if given value is defined', () => {
    let schema = {
      type: 'object',
      properties: {
        prop1: {
          type: 'string'
        }
      }
    };

    let value = Map<string, string>({'prop1': 'dummy'});
    let expectedResult = Map<string, string>({'prop1': 'dummy'});
    let pipeResult = pipe.transform(value, schema);
    expect(pipeResult).toEqual(expectedResult);
  });

});
