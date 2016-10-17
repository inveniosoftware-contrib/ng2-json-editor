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

import { RecordFixerService } from './record-fixer.service';
import { EmptyValueService } from './empty-value.service';
import { ComponentTypeService } from './component-type.service';

describe('RecordFixerService', () => {

  let service: RecordFixerService;

  beforeEach(() => {
    service = new RecordFixerService(new EmptyValueService(), new ComponentTypeService());
  });

  it('should add properties that are marked as x_editor_always_show to a record with depth 1',
    () => {
      let schema = {
        properties: {
          prop: {
            type: 'string',
            x_editor_always_show: true
          }
        }
      };

      let record = {};

      let fixedRecord = service.fixRecord(record, schema);

      expect(fixedRecord['prop']).toBeDefined();
    }
  );

  it('should add properties that are marked as x_editor_always_show to a record with depth 2',
    () => {
      let schema = {
        properties: {
          level1: {
            type: 'object',
            properties: {
              prop: {
                type: 'string',
                x_editor_always_show: true
              }
            }
          }
        }
      };

      let record = {
        level1: {}
      };

      let fixedRecord = service.fixRecord(record, schema);

      expect(fixedRecord['level1']['prop']).toBeDefined();
    }
  );

  it('should add properties that are marked as x_editor_always_show to' +
    ' a record with depth 2 and without defined parent',
    () => {
      let schema = {
        properties: {
          level1: {
            type: 'object',
            properties: {
              prop: {
                type: 'string',
                x_editor_always_show: true
              }
            }
          }
        }
      };

      let record = {};

      let fixedRecord = service.fixRecord(record, schema);

      expect(fixedRecord['level1']['prop']).toBeDefined();
    }
  );

  it('should add properties that are marked as x_editor_always_show ' +
    ' to a record with depth 2 and with array parent',
    () => {
      let schema = {
        properties: {
          level1: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                prop: {
                  type: 'string',
                  x_editor_always_show: true
                }
              }
            }
          }
        }
      };

      let record = {
        level1: [
          {}, {}
        ]
      };

      let fixedRecord = service.fixRecord(record, schema);

      fixedRecord['level1'].forEach(element => expect(element['prop']).toBeDefined());
    }
  );

  it('should not overwrite existing properties that are marked as x_editor_always_show' +
    ' to a record with depth 2 and with array parent',
    () => {
      let schema = {
        properties: {
          level1: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                prop: {
                  type: 'string',
                  x_editor_always_show: true
                }
              }
            }
          }
        }
      };

      let record = {
        level1: [
          { prop: 'value1' },
          { prop: 'value2' }
        ]
      };

      let originalValues = record['level1'];
      let fixedRecord = service.fixRecord(record, schema);
      let fixedValues = fixedRecord['level1'];

      fixedValues.forEach((fixedValue, index) => {
        expect(fixedValue['prop']).toEqual(originalValues[index]['prop']);
      });

    }
  );

  it('should add missing properties that are marked as x_editor_always_show' +
    ' to a record with so deep schema',
    () => {
      let schema = {
        type: 'object',
        properties: {
          prop0: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                prop1: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      prop2: {
                        type: 'object',
                        properties: {
                          prop3: {
                            type: 'string',
                            x_editor_always_show: true
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      let everythingMissingRecord = {};
      let fixedEverythingMissingRecord = service.fixRecord(everythingMissingRecord, schema);
      expect(fixedEverythingMissingRecord['prop0'][0]['prop1'][0]['prop2']['prop3']).toBeDefined();
    }
  );
});
