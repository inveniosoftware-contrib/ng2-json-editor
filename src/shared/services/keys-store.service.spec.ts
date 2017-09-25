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

import { fromJS, Map, OrderedSet } from 'immutable';

import { KeysStoreService } from './keys-store.service';
import { PathUtilService } from './path-util.service';
import { AppGlobalsService } from './app-globals.service';
import { JsonSchemaService } from './json-schema.service';
import { ErrorsService } from './errors.service';

import { JSONSchema } from '../interfaces';

class MockJsonSchemaService extends JsonSchemaService {
  static schemaToReturn: JSONSchema;

  forPathString(path: string): JSONSchema {
    return MockJsonSchemaService.schemaToReturn;
  }

  forPathArray(path: Array<any>): JSONSchema {
    return MockJsonSchemaService.schemaToReturn;
  }
}

describe('KeysStoreService', () => {
  let service: KeysStoreService;

  const assertKeys$Map = (expectedKeysMap: Map<string, OrderedSet<string>>) => {
    expectedKeysMap.forEach((expectedKeys, path) => {
      service.forPath(path).subscribe(keys => {
        expect(keys).toEqual(expectedKeys);
      });
    });
  };

  beforeEach(() => {
    service = new KeysStoreService(
      new AppGlobalsService(),
      new PathUtilService(),
      new MockJsonSchemaService(null)
    );
  });

  it('should build keys map for simple json', () => {
    const map = fromJS({
      aString: 'value',
      aStringArray: [
        'value1',
        'value2'
      ],
      anObject: {
        prop1: 'value',
        prop2: 'value'
      }
    });
    const schema = {
      type: 'object',
      properties: {
        aString: {
          type: 'string'
        },
        aStringArray: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        anObject: {
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
    };
    const expectedKeysMap = Map({
      '': OrderedSet(['aString', 'aStringArray', 'anObject']),
      '/anObject': OrderedSet(['prop1', 'prop2'])
    });

    service.buildKeysMap(map, schema);
    assertKeys$Map(expectedKeysMap);
  });

  it('should build keys map for nested complex json with table list', () => {
    const map = fromJS({
      anArray: [
        {
          anObject: {
            prop1: 'value',
            prop2: 'value'
          },
          aString: 'value',
          innerArray: [
            {
              prop1: 'value',
            }
          ]
        },
        {
          anObject: {
            prop1: 'value'
          }
        }
      ]
    });
    const schema = {
      type: 'object',
      properties: {
        anArray: {
          type: 'array',
          componentType: 'complex-list',
          items: {
            type: 'object',
            properties: {
              anObject: {
                type: 'object',
                properties: {
                  prop1: {
                    type: 'string'
                  },
                  prop2: {
                    type: 'string'
                  }
                }
              },
              aString: {
                type: 'string'
              },
              innerArray: {
                componentType: 'table-list',
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
          }
        }
      }
    };
    const expectedKeysMap = Map({
      '': OrderedSet(['anArray']),
      '/anArray/0': OrderedSet(['aString', 'anObject', 'innerArray']),
      '/anArray/1': OrderedSet(['anObject']),
      '/anArray/0/anObject': OrderedSet(['prop1', 'prop2']),
      '/anArray/1/anObject': OrderedSet(['prop1']),
      '/anArray/0/innerArray': OrderedSet(['prop1'])
    });
    service.buildKeysMap(map, schema);
    assertKeys$Map(expectedKeysMap);
  });

  it('built keys should be ordered by schema.priority (ositive larger first, then alphabetically, then negative)', () => {
    const schema = {
      type: 'object',
      properties: {
        key1: {
          type: 'string',
          priority: -100
        },
        key2: {
          type: 'string',
          priority: -10
        },
        key3: {
          type: 'string'
        },
        key4: {
          type: 'string',
          priority: 10
        },
        key5: {
          type: 'string'
        }
      }
    };
    const json = fromJS({
      key1: 'value',
      key2: 'value',
      key3: 'value',
      key4: 'value',
      key5: 'value'
    });
    const expected = OrderedSet(['key4', 'key3', 'key5', 'key2', 'key1']);
    service.buildKeysMap(json, schema);
    service.forPath('')
      .subscribe(keys => expect(keys).toEqual(expected));
  });

  it('built keys should not have hidden', () => {
    const schema = {
      type: 'object',
      properties: {
        key1: {
          type: 'string',
          hidden: true
        },
        key2: {
          type: 'string'
        }
      }
    };
    const json = fromJS({
      key1: 'value',
      key2: 'value'
    });
    const expected = OrderedSet(['key2']);
    service.buildKeysMap(json, schema);
    service.forPath('')
      .subscribe(keys => expect(keys).toEqual(expected));
  });

  it('built keys should have alwaysShow', () => {
    const schema = {
      type: 'object',
      alwaysShow: ['key2'],
      properties: {
        key1: {
          type: 'string'
        },
        key2: {
          type: 'string'
        }
      }
    };
    const json = fromJS({
      key1: 'value'
    });
    const expected = OrderedSet(['key1', 'key2']);
    service.buildKeysMap(json, schema);
    service.forPath('')
      .subscribe(keys => expect(keys).toEqual(expected));
  });

  it('should add simple key and return the new key path', () => {
    const schema = {
      type: 'object',
      properties: {
        key1: {
          type: 'string'
        },
        key2: {
          type: 'string'
        }
      }
    };
    const json = fromJS({
      key1: 'value'
    });
    service.buildKeysMap(json, schema);
    const newKeyPath = service.addKey('', 'key2', schema);
    const expected = OrderedSet(['key1', 'key2']);
    const expectNewKeyPath = '/key2';
    service.forPath('')
      .subscribe(keys => expect(keys.toArray()).toEqual(expected.toArray()));
    expect(newKeyPath).toEqual(expectNewKeyPath);
  });

  it('should add key in the right place to maintain the order', () => {
    const schema = {
      type: 'object',
      properties: {
        key1: {
          type: 'string',
          priority: 1
        },
        key2: {
          type: 'string',
          priority: 2
        }
      }
    };
    const json = fromJS({
      key1: 'value'
    });
    service.buildKeysMap(json, schema);
    service.addKey('', 'key2', schema);
    const expected = OrderedSet(['key2', 'key1']);
    service.forPath('')
      .subscribe(keys => expect(keys.toArray()).toEqual(expected.toArray()));
  });

  it('should add object key then build keys for it', () => {
    const schema = {
      type: 'object',
      properties: {
        key1: {
          type: 'string'
        },
        key2: {
          type: 'object',
          properties: {
            innerKey: {
              type: 'string'
            }
          }
        }
      }
    };
    const json = fromJS({
      key1: 'value'
    });
    service.buildKeysMap(json, schema);
    service.addKey('', 'key2', schema);
    const expected = OrderedSet(['key1', 'key2']);
    service.forPath('')
      .subscribe(keys => expect(keys.toArray()).toEqual(expected.toArray()));
    service.forPath('/key2')
      .subscribe(keys => expect(keys).toEqual(OrderedSet()));
  });

  it('should delete key and its keys', () => {
    const schema = {
      type: 'object',
      properties: {
        key1: {
          type: 'string'
        },
        key2: {
          type: 'object',
          properties: {
            innerKey: {
              type: 'string'
            }
          }
        }
      }
    };
    const json = fromJS({
      key1: 'value',
      key2: {
        innerKey: 'value'
      }
    });
    service.buildKeysMap(json, schema);
    service.deleteKey('', 'key2');
    const expected = OrderedSet(['key1']);
    service.forPath('')
      .subscribe(keys => expect(keys.toArray()).toEqual(expected.toArray()));
    expect(service.forPath('/key2')).toBeUndefined();
  });

  it('should delete keys of children when deleting a key', () => {
    const schema = {
      type: 'object',
      properties: {
        key: {
          type: 'object',
          properties: {
            child: {
              type: 'object',
              properties: {
                grandChild: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    };
    const json = fromJS({
      key: {
        child: {
          grandChild: 'value'
        }
      }
    });
    service.buildKeysMap(json, schema);
    service.deleteKey('', 'key');
    expect(service.forPath('/key/child')).toBeUndefined();
    expect(service.keysMap['/key/child']).toBeUndefined();
  });

  it('should swap keys recursively', () => {
    const schema = {
      type: 'object',
      properties: {
        key: {
          type: 'array',
          componentType: 'complex-list',
          items: {
            type: 'object',
            properties: {
              child1: {
                type: 'object',
                properties: {
                  grandChild1: {
                    type: 'string'
                  },
                  grandChild2: {
                    type: 'string'
                  },
                  grandChild3: {
                    type: 'string'
                  }
                }
              },
              child2: {
                type: 'string'
              },
              child3: {
                type: 'string',
              },
              child4: {
                type: 'object',
                properties: {
                  grandChild4: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    };
    MockJsonSchemaService.schemaToReturn = schema.properties.key;
    const json = fromJS({
      key: [
        {
          child1: {
            grandChild1: 'val',
            grandChild3: 'val'
          },
          child3: 'val'
        },
        {
          child1: {
            grandChild2: 'val',
            grandChild3: 'val'
          },
          child2: 'val',
          child3: 'val',
          child4: {
            grandChild4: 'val'
          }
        }
      ]
    });
    const expectedKey0 = ['child1', 'child2', 'child3', 'child4'];
    const expectedKey1 = ['child1', 'child3'];
    const expectedKey0Child1 = ['grandChild2', 'grandChild3'];
    const expectedKey0Child4 = ['grandChild4'];
    const expectedKey1Child1 = ['grandChild1', 'grandChild3'];
    service.buildKeysMap(json, schema);
    service.swapListElementKeys(['key'], 0, 1);
    expect(service.keysMap['/key/0'].toArray()).toEqual(expectedKey0);
    expect(service.keysMap['/key/1'].toArray()).toEqual(expectedKey1);
    expect(service.keysMap['/key/0/child1'].toArray()).toEqual(expectedKey0Child1);
    expect(service.keysMap['/key/0/child4'].toArray()).toEqual(expectedKey0Child4);
    expect(service.keysMap['/key/1/child4']).toBeUndefined();
    expect(service.keysMap['/key/1/child1'].toArray()).toEqual(expectedKey1Child1);
  });

  it('should set path, when object key not present ', () => {
    const schema = {
      type: 'object',
      properties: {
        child: {
          type: 'object',
          properties: {
            grandChild: {
              type: 'string'
            }
          }
        }
      }
    };
    MockJsonSchemaService.schemaToReturn = schema;
    // build initial keys map
    const json = fromJS({});
    service.buildKeysMap(json, schema);

    // new json after set
    const newJson = fromJS({
      child: {
        grandChild: 'value'
      }
    });
    const expectedKeysMap = {
      '': OrderedSet(['child']),
      '/child': OrderedSet(['grandChild'])
    };
    service.syncKeysForPath(['child', 'grandChild'], newJson);
    expect(service.keysMap).toEqual(expectedKeysMap);
  });

  it('should set path, when table-list key not present ', () => {
    const schema = {
      type: 'object',
      properties: {
        tableList: {
          type: 'array',
          componentType: 'table-list',
          items: {
            type: 'object',
            properties: {
              child1: {
                type: 'string'
              },
              child2: {
                type: 'string'
              }
            }
          }
        }
      }
    };
    MockJsonSchemaService.schemaToReturn = schema;
    // build initial keys map
    const json = fromJS({});
    service.buildKeysMap(json, schema);
    // new json after set
    const newJson = fromJS({
      tableList: [
        { child1: 'value' }
      ]
    });
    const expectedKeysMap = {
      '': OrderedSet(['tableList']),
      '/tableList': OrderedSet(['child1'])
    };
    service.syncKeysForPath(['tableList', 0, 'child1'], newJson);
    expect(service.keysMap).toEqual(expectedKeysMap);
  });

  it('should set path, when key not present in table-list item)', () => {
    const schema = {
      type: 'object',
      properties: {
        tableList: {
          type: 'array',
          componentType: 'table-list',
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
    MockJsonSchemaService.schemaToReturn = schema.properties.tableList;
    // build initial keys map
    const json = fromJS({
      tableList: [
        { prop1: 'value' }
      ]
    });
    service.buildKeysMap(json, schema);
    // new json after set
    const newJson = fromJS({
      tableList: [
        { prop1: 'value' },
        { prop2: 'value' }
      ]
    });
    const expectedKeysMap = {
      '': OrderedSet(['tableList']),
      '/tableList': OrderedSet(['prop1', 'prop2'])
    };
    service.syncKeysForPath(['tableList', 1], newJson);
    expect(service.keysMap).toEqual(expectedKeysMap);
  });

  it('should not set path, when nothing is missing', () => {
    const schema = {
      type: 'object',
      properties: {
        child: {
          type: 'object',
          properties: {
            grandChild: {
              type: 'string'
            }
          }
        }
      }
    };
    MockJsonSchemaService.schemaToReturn = schema.properties.child.properties.grandChild;
    // build initial keys map
    const json = fromJS({
      child: {
        grandChild: 'value'
      }
    });
    service.buildKeysMap(json, schema);
    const expectedKeysMap = service.keysMap;
    // new json after set
    const newJson = fromJS({
      child: {
        grandChild: 'newValue'
      }
    });
    service.syncKeysForPath(['child', 'grandChild'], newJson);
    expect(service.keysMap).toEqual(expectedKeysMap);
  });

  it('should not set path but built keys when nothing is missing but path is object', () => {
    const schema = {
      type: 'object',
      properties: {
        child: {
          type: 'object',
          properties: {
            grandChild1: {
              type: 'string'
            },
            grandChild2: {
              type: 'string'
            }
          }
        }
      }
    };
    MockJsonSchemaService.schemaToReturn = schema.properties.child;
    // build initial keys map
    const json = fromJS({
      child: {
        grandChild1: 'value'
      }
    });
    service.buildKeysMap(json, schema);
    const expectedKeysMap = {
      '': OrderedSet(['child']),
      '/child': OrderedSet(['grandChild2'])
    };
    // new json after set
    const newJson = fromJS({
      child: {
        grandChild2: 'value',
      }
    });
    service.syncKeysForPath(['child'], newJson);
    expect(service.keysMap).toEqual(expectedKeysMap);
  });

});
