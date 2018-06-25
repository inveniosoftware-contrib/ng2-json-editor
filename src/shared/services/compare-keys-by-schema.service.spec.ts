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

import { CompareKeysBySchemaService } from './compare-keys-by-schema.service';

describe('CompareKeysBySchemaService', () => {

  let service: CompareKeysBySchemaService;

  beforeEach(() => {
    service = new CompareKeysBySchemaService();
  });

  it('should return negative if first key has higher priorty', () => {
    const schema = {
      type: 'object',
      properties: {
        a: {
          type: 'string',
          priority: 2
        },
        b: {
          type: 'string',
          priority: 1
        }
      }
    };
    expect(service.compare('a', 'b', schema)).toBeLessThan(0);
  });

  it('should return positive if first key has lower priorty', () => {
    const schema = {
      type: 'object',
      properties: {
        a: {
          type: 'string',
          priority: 1
        },
        b: {
          type: 'string',
          priority: 2
        }
      }
    };
    expect(service.compare('a', 'b', schema)).toBeGreaterThan(0);
  });

  it('should fallback to alphabetical order if no priority set', () => {
    const schema = {
      type: 'object',
      properties: {
        a: {
          type: 'string',
        },
        b: {
          type: 'string',
        }
      }
    };
    expect(service.compare('a', 'b', schema)).toBeLessThan(0);
  });

  it('should use 0 as default priority', () => {
    const schema = {
      type: 'object',
      properties: {
        a: {
          type: 'string',
        },
        b: {
          type: 'string',
          priority: -1,
        }
      }
    };
    expect(service.compare('a', 'b', schema)).toBeLessThan(0);
  });
});
