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

import { JsonSchemaService } from './json-schema.service';

describe('JsonSchemaService', () => {
  let service: JsonSchemaService;

  beforeEach(() => {
    service = new JsonSchemaService();
  });

  it('should return the correct schema for array element', () => {

    let schema = {
      properties: {
        abstracts: {
          items: {
            properties: {
              source: {
                'type': 'string'
              },
              value: {
                'type': 'string'
              }
            },
            type: 'object'
          },
          type: 'array',
        }
      }
    };
    let expectedArrayElementSchema = {
      items: {
        properties: {
          source: {
            type: 'string'
          },
          value: {
            type: 'string'
          }
        },
        type: 'object'
      },
      type: 'array',
    };
    let arrayElementPath = ['abstracts', 0];
    service.setSchema(schema);
    expect(service.getSchemaFromPath(arrayElementPath)).toEqual(expectedArrayElementSchema);
  });

  it('should return the correct schema for property of array element', () => {

    let schema = {
      properties: {
        abstracts: {
          items: {
            properties: {
              source: {
                'type': 'string'
              },
              value: {
                'type': 'string'
              }
            },
            type: 'object'
          },
          type: 'array',
        }
      }
    };
    let expectedPropertyOfArrayElementSchema = {
      'type': 'string'
    };
    let propertyOfArrayElementPath = ['abstracts', 0, 'source'];
    service.setSchema(schema);
    expect(service.getSchemaFromPath(propertyOfArrayElementPath)).toEqual(expectedPropertyOfArrayElementSchema);
  });

  it('should return the correct schema for property of an object', () => {

    let schema = {
      properties: {
        authors: {
          description: 'List with all the authors',
          items: {
            properties: {
              affiliations: {
                items: {
                  properties: {
                    value: {
                      type: 'string'
                    }
                  },
                  type: 'object'
                },
                type: 'array',
              }
            },
            type: 'object'
          },
          type: 'array',
        }
      }
    };
    let expectedPropertyOfObjectSchema = {
      type: 'string'
    };
    let propertyOfObjectPath = ['authors', 0, 'affiliations', 0, 'value'];
    service.setSchema(schema);
    expect(service.getSchemaFromPath(propertyOfObjectPath)).toEqual(expectedPropertyOfObjectSchema);
  });

  it('should return the correct schema for element of an array which is property of an object', () => {

    let schema = {
      properties: {
        authors: {
          description: 'List with all the authors',
          items: {
            properties: {
              affiliations: {
                items: {
                  properties: {
                    value: {
                      type: 'string'
                    }
                  },
                  type: 'object'
                },
                type: 'array',
              }
            },
            type: 'object'
          },
          type: 'array',
        }
      }
    };
    let expectedPropertyOfArrayWhichIsPropertyOfObjectElementSchema = {
      items: {
        properties: {
          value: {
            type: 'string'
          }
        },
        type: 'object'
      },
      type: 'array',
    };
    let propertyOfArrayWhichIsPropertyOfObjectElementPath = ['authors', 0, 'affiliations', 0];
    service.setSchema(schema);
    expect(service.getSchemaFromPath(propertyOfArrayWhichIsPropertyOfObjectElementPath))
      .toEqual(expectedPropertyOfArrayWhichIsPropertyOfObjectElementSchema);
  });
});
