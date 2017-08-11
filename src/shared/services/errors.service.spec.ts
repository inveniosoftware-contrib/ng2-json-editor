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


import { ErrorsService } from './errors.service';

describe('ErrorsService', () => {

  let service: ErrorsService;

  beforeEach(() => {
    service = new ErrorsService();
  });

  it(`should categorize a map of SchemaValidationErrors by splitting
      them into errors and warnings array. Every array should have only
      json pointer paths which include only the type of messages of the
      array that they belong to.`, () => {

    let errorMap = {
      '/key/path/1': [
        {
          message: 'Error message.',
          type: 'Error'
        },
        {
          message: 'Warning message.',
          type: 'Warning'
        }
      ],
      '/key/path/2': [{
        message: 'Another error message.',
        type: 'Error'
      }]
    };

    let categorizedErrorMap = {
      categorizedErrorMap: {
        errors: {
          '/key/path/1': [{
            message: 'Error message.',
            type: 'Error'
          }],
          '/key/path/2': [{
            message: 'Another error message.',
            type: 'Error'
          }]
        },
        warnings: {
          '/key/path/1': [{
            message: 'Warning message.',
            type: 'Warning'
          }]
        }
      },
      errorCounter: 2,
      warningCounter: 1
    };

    expect(categorizedErrorMap).toEqual(service.categorizeErrorMap(errorMap));
  });

});

