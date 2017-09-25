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

import { ComponentTypeService } from './component-type.service';

describe('ComponentTypeService', () => {

  let service: ComponentTypeService;

  beforeEach(() => {
    service = new ComponentTypeService();
  });

  it('should return primitive-list', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'string'
      }
    };
    expect(service.getComponentType(schema)).toEqual('primitive-list');
  });

  it('should return table-list', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          array_prop: {
            type: 'array',
            items: {
              type: 'string'
            }
          },
          string_prop: {
            type: 'string'
          }
        }
      }
    };
    expect(service.getComponentType(schema)).toEqual('table-list');
  });

  it('should return table-list with an ref-field element property', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          prop: {
            type: 'object',
            properties: {
              $ref: {
                type: 'string'
              }
            }
          }
        }
      }
    };
    expect(service.getComponentType(schema)).toEqual('table-list');
  });

  it('should return complex-list', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          prop: {
            type: 'array',
            items: {
              type: 'object',
              properties: {}
            }
          }
        }
      }
    };
    expect(service.getComponentType(schema)).toEqual('complex-list');
  });

  it('should return complex-list if an element property is an object', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          prop: {
            type: 'object',
            properties: {}
          }
        }
      }
    };
    expect(service.getComponentType(schema)).toEqual('complex-list');
  });

  it('should return raw', () => {
    const schema = {};
    expect(service.getComponentType(schema)).toEqual('raw');
  });

  it('should return object', () => {
    const schema = {
      type: 'object',
      properties: {}
    };
    expect(service.getComponentType(schema)).toEqual('object');
  });

  it('should return ref', () => {
    const schema = {
      type: 'object',
      properties: {
        $ref: {
          type: 'string'
        }
      }
    };
    expect(service.getComponentType(schema)).toEqual('ref');
  });

  it('should return autocomplete', () => {
    const schema = {
      autocompletionConfig: {
        size: 1
      },
      type: 'string'
    };
    expect(service.getComponentType(schema)).toEqual('autocomplete');
  });

  it('should return enum', () => {
    const schema = {
      enum: [],
      type: 'string'
    };
    expect(service.getComponentType(schema)).toEqual('enum');
  });

  it('should not return array', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'number'
      }
    };
    expect(service.getComponentType(schema)).not.toEqual('array');
  });
});
