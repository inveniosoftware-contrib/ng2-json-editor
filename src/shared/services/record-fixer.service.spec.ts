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

  it('should throw error if schema type object but value is not', () => {
    const schema = {
      type: 'object',
      properties: {
        anObject: {
          type: 'object',
          properties: {
            foo: {
              type: 'string'
            }
          }
        }
      }
    };
    const record = {
      anObject: 'aString'
    };
    const errorMessage = '"anObject" in "aString" is specified as "object" by schema but it is not an object in json';
    expect(() => service.fixRecord(record, schema)).toThrowError(errorMessage);
  });

});
