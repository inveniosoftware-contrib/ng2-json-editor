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

import { Map, Set, fromJS } from 'immutable';

import { TabsUtilService } from './tabs-util.service';
import { PathUtilService } from './path-util.service';

describe('TabsUtilService', () => {

  let service: TabsUtilService;

  beforeEach(() => {
    service = new TabsUtilService(new PathUtilService());
  });

  it('should return tabName to sub schema', () => {
    let schema = {
      type: 'object',
      alwaysShow: [
        'tab1AlwaysShow1',
        'tab1AlwaysShow2',
        'tab2AlwaysShow1'
      ],
      properties: {
        tab1AlwaysShow1: {
          type: 'string'
        },
        tab1AlwaysShow2: {
          type: 'string'
        },
        tab2AlwaysShow1: {
          type: 'string'
        },
        key1Tab1: {
          type: 'string'
        },
        key2Tab1: {
          type: 'string'
        },
        key1Tab2: {
          type: 'string'
        }
      }
    };
    let keyToTabName = {
      key1Tab1: 'Tab1',
      key2Tab1: 'Tab1',
      key1Tab2: 'Tab2',
      tab1AlwaysShow1: 'Tab1',
      tab1AlwaysShow2: 'Tab1',
      tab2AlwaysShow1: 'Tab2'
    };
    let expected = {
      Tab1: {
        type: 'object',
        alwaysShow: [
          'tab1AlwaysShow1',
          'tab1AlwaysShow2',
        ],
        properties: {
          tab1AlwaysShow1: {
            type: 'string'
          },
          tab1AlwaysShow2: {
            type: 'string'
          },
          key1Tab1: {
            type: 'string'
          },
          key2Tab1: {
            type: 'string'
          }
        }
      },
      Tab2: {
        type: 'object',
        alwaysShow: [
          'tab2AlwaysShow1',
        ],
        properties: {
          tab2AlwaysShow1: {
            type: 'string'
          },
          key1Tab2: {
            type: 'string'
          }
        }
      }
    };
    let result = service.getTabNameToSubSchema(schema, keyToTabName);
    expect(result).toEqual(expected);
  });

  it('should return key to tabName', () => {
    let config = {
      defaultTabName: 'Default',
      tabs: [
        {
          name: 'Tab1',
          properties: [
            'key1Tab1',
            'key2Tab1'
          ]
        },
        {
          name: 'Tab2',
          properties: [
            'key1Tab2'
          ]
        }
      ]
    };
    let schema = {
      type: 'object',
      properties: {
        key1Default: {
          type: 'string'
        },
        key2Default: {
          type: 'string'
        },
        key1Tab1: {
          type: 'string'
        },
        key2Tab1: {
          type: 'string'
        },
        key1Tab2: {
          type: 'string'
        }
      }
    };
    let expected = {
      key1Tab1: 'Tab1',
      key2Tab1: 'Tab1',
      key1Tab2: 'Tab2',
      key1Default: 'Default',
      key2Default: 'Default'
    };
    let result = service.getSchemaKeyToTabName(config, schema);
    expect(result).toEqual(expected);
  });

  it('should return tabName to keys', () => {
    let keys = Set(['authors', 'references', 'imprints', 'keywords']);
    let schemaKeyToTabName = {
      authors: 'Authors',
      references: 'References',
      imprints: 'Main',
      keywords: 'Main'
    };
    let tabNames = ['Main', 'References', 'Authors'];
    let expected = {
      Main: Set(['imprints', 'keywords']),
      Authors: Set(['authors']),
      References: Set(['references'])
    };
    let result = service.getTabNameToKeys(keys, schemaKeyToTabName, tabNames);
    expect(result).toEqual(expected);
  });

  it('should return tabName to keys adding empty sets', () => {
    let keys = Set(['authors', 'imprints', 'keywords']);
    let schemaKeyToTabName = {
      authors: 'Authors',
      references: 'References',
      imprints: 'Main',
      keywords: 'Main'
    };
    let tabNames = ['Main', 'References', 'Authors'];
    let expected = {
      Main: Set(['imprints', 'keywords']),
      Authors: Set(['authors']),
      References: Set()
    };
    let result = service.getTabNameToKeys(keys, schemaKeyToTabName, tabNames);
    expect(result).toEqual(expected);
  });

});
