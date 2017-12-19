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


import { ProblemsService } from './problems.service';

import { SchemaValidationProblems, ValidationProblem } from '../interfaces';

describe('ProblemsService', () => {

  let service: ProblemsService;

  beforeEach(() => {
    service = new ProblemsService();
  });

  it(`should set external problems`, () => {
    const problemMap: SchemaValidationProblems = {
      '/key/path/1': [
        {
          message: 'Error message 1',
          type: 'Error'
        },
        {
          message: 'Error message 2',
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

    const expectedCategorized = {
      errors: {
        '/key/path/1': [
          {
            message: 'Error message 1',
            type: 'Error'
          },
          {
            message: 'Error message 2',
            type: 'Error'
          }
        ],
        '/key/path/2': [{
          message: 'Another error message.',
          type: 'Error'
        }]
      },
      warnings: {
        '/key/path/1': [{
          message: 'Warning message.',
          type: 'Warning'
        }],
        '/key/path/2': []
      }
    };
    service.externalProblems = problemMap;
    service.externalCategorizedProblems$
      .subscribe((categorized) => {
        expect(categorized).toEqual(expectedCategorized);
      });
    service.errorCount$
      .subscribe(count => {
        expect(count).toBe(3);
      });
    service.warningCount$
      .subscribe(count => {
        expect(count).toBe(1);
      });
  });

  it('should set internal problems for path', () => {
    service['internalErrorMap'] = {
      '/key': [
        {
          type: 'Error',
          message: 'Error Message'
        }
      ]
    };
    const problems: Array<ValidationProblem> = [
      {
        type: 'Error',
        message: 'New1',
      },
      {
        type: 'Error',
        message: 'New1',
      }
    ];
    const expectedCategorized = {
      errors: {
        '/key': problems
      },
      warnings: {
        '/key': []
      }
    };
    service.setInternalProblemsForPath('/key', problems);
    service.internalCategorizedProblems$
      .subscribe((categorized) => {
        expect(categorized).toEqual(expectedCategorized);
      });
    service.errorCount$
      .subscribe(count => {
        expect(count).toBe(2);
      });
    service.warningCount$
      .subscribe(count => {
        expect(count).toBe(0);
      });
  });

});

