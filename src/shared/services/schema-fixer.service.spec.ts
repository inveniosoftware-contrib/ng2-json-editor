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

import { SchemaFixerService } from './schema-fixer.service';
import { JsonUtilService } from './json-util.service';
import { PathUtilService } from './path-util.service';

describe('SchemaFixerService', () => {

  let service: SchemaFixerService;

  beforeEach(() => {
    service = new SchemaFixerService(new JsonUtilService(new PathUtilService()));
  });

  it('should fix anyOf with multiple enum properties', () => {
    let schema = {
      anyOf: [
        {
          type: 'object',
          properties: {
            enumProp1: {
              type: 'string',
              enum: [
                'enumProp11',
                'enumProp12'
              ]
            },
            enumProp2: {
              type: 'string',
              enum: [
                'enumProp21',
                'enumProp22'
              ]
            }
          }
        },
        {
          type: 'object',
          properties: {
            enumProp1: {
              type: 'string',
              enum: [
                'enumProp13',
                'enumProp14'
              ]
            },
            enumProp2: {
              type: 'string',
              enum: [
                'enumProp23',
                'enumProp24'
              ]
            }
          }
        }
      ]
    };
    let expected = {
      type: 'object',
      properties: {
        enumProp1: {
          type: 'string',
          enum: [
            'enumProp11',
            'enumProp12',
            'enumProp13',
            'enumProp14'
          ]
        },
        enumProp2: {
          type: 'string',
          enum: [
            'enumProp21',
            'enumProp22',
            'enumProp23',
            'enumProp24'
          ]
        }
      }
    };
    let fixed = service.fixSchema(schema, {});
    expect(fixed).toEqual(expected);
  });

  it('should fix anyOf with partial enum properties', () => {
    let schema = {
      anyOf: [
        {
          type: 'object',
          properties: {
            enumProp: {
              type: 'string',
              enum: [
                'enumProp1',
                'enumProp2',
              ]
            },
            partialEnumProp: {
              type: 'string',
              enum: [
                'partialEnumProp1',
                'partialEnumProp2'
              ]
            }
          }
        },
        {
          type: 'object',
          properties: {
            enumProp: {
              type: 'string',
              enum: [
                'enumProp3',
                'enumProp4'
              ]
            },
            partialEnumProp: {
              type: 'string'
            }
          }
        }
      ]
    };
    let expected = {
      type: 'object',
      properties: {
        enumProp: {
          type: 'string',
          enum: [
            'enumProp1',
            'enumProp2',
            'enumProp3',
            'enumProp4'
          ]
        },
        partialEnumProp: {
          type: 'string',
          autocompletionConfig: {
            source: [
              'partialEnumProp1',
              'partialEnumProp2'
            ],
            size: 7
          }
        }
      }
    };
    let fixed = service.fixSchema(schema, {});
    expect(fixed).toEqual(expected);
  });

  it('should fix allOf', () => {
    let schema = {
      allOf: [
        {
          type: 'object'
        },
        {
          properties: {
            strProp: {
              type: 'string'
            }
          }
        },
        {
          properties: {
            intProp: {
              type: 'integer'
            }
          }
        },
        {
          properties: {
            enumProp: {
              type: 'string',
              enum: [
                'enumValue1',
                'enumValue2'
              ]
            }
          }
        }
      ]
    };
    let expected = {
      type: 'object',
      properties: {
        strProp: {
          type: 'string'
        },
        intProp: {
          type: 'integer'
        },
        enumProp: {
          type: 'string',
          enum: [
            'enumValue1',
            'enumValue2'
          ]
        }
      }
    };
    let fixed = service.fixSchema(schema, {});
    expect(fixed).toEqual(expected);
  });

  it('should fix order config', () => {
    let schema = {
      type: 'object',
      properties: {
        parent: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              prop1: {
                type: 'string'
              },
              prop2: {
                type: 'string'
              }
            }
          }
        }
      }
    };
    let config = {
      '/parent/items': {
        order: ['prop2', 'prop1']
      }
    };
    let expected = {
      type: 'object',
      properties: {
        parent: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              prop1: {
                type: 'string',
                priority: 1
              },
              prop2: {
                type: 'string',
                priority: 2
              }
            },
            order: ['prop2', 'prop1']
          }
        }
      }
    };
    let fixed = service.fixSchema(schema, config);
    expect(fixed).toEqual(expected);
  });

  it(`should pass disable config for an element to all items and properties
      of its children `, () => {
      let schema = {
        type: 'object',
        properties: {
          parent: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                prop1: {
                  type: 'string'
                },
                prop2: {
                  type: 'string'
                }
              }
            }
          }
        }
      };
      let config = {
        '/parent': {
          disabled: true
        }
      };
      let expected = {
        type: 'object',
        properties: {
          parent: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                prop1: {
                  type: 'string',
                  disabled: true
                },
                prop2: {
                  type: 'string',
                  disabled: true
                }
              },
              disabled: true
            },
            disabled: true
          }
        }
      };
      let fixed = service.fixSchema(schema, config);
      expect(fixed).toEqual(expected);
    });

  it('should warn user when config order key does not exist', () => {
    let schema = {
      type: 'object',
      properties: {
        parent: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              prop1: {
                type: 'string'
              },
              prop2: {
                type: 'string'
              }
            }
          }
        }
      }
    };
    let config = {
      '/parent/items': {
        order: ['prop2', 'prop1', 'doesnotexist']
      }
    };
    spyOn(console, 'warn');

    let fixed = service.fixSchema(schema, config);
    expect(console.warn).toHaveBeenCalledWith('doesnotexist defined in order config does not exist in schema.');
  });

  it('should enrich schema with config', () => {
    let schema = {
      type: 'object',
      properties: {
        parent: {
          type: 'object',
          properties: {
            prop: {
              type: 'string'
            }
          }
        }
      }
    };
    let config = {
      '/parent/properties/prop': {
        configTrue: true,
        configFalse: false
      }
    };
    let expected = {
      type: 'object',
      properties: {
        parent: {
          type: 'object',
          properties: {
            prop: {
              type: 'string',
              configTrue: true,
              configFalse: false
            }
          }
        }
      }
    };
    let fixed = service.fixSchema(schema, config);
    expect(fixed).toEqual(expected);
  });

  it('should remove alwayShow keys that are not in the schema', () => {
    let schema = {
      type: 'object',
      properties: {
        prop1: {
          type: 'string'
        },
        prop2: {
          type: 'string'
        }
      }
    };
    let config = {
      '': {
        alwaysShow: ['prop1', 'doesnotexist']
      }
    };
    spyOn(console, 'warn');

    let fixed = service.fixSchema(schema, config);
    expect(console.warn).toHaveBeenCalledWith('doesnotexist is configured as alwaysShow but it is not in ["prop1","prop2"]');
    expect(fixed['alwaysShow'].includes('doesnotexist')).toBeFalsy();
  });

  it('should enrich root schema with config when path is empty', () => {
    let schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'string'
        }
      }
    };
    let config = {
      '': {
        configTrue: true,
        configFalse: false
      }
    };
    let expected = {
      type: 'object',
      configTrue: true,
      configFalse: false,
      properties: {
        foo: {
          type: 'string'
        }
      }
    };
    let fixed = service.fixSchema(schema, config);
    expect(fixed).toEqual(expected);
  });
});
