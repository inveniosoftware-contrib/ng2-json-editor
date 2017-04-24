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

import { Set, OrderedSet } from 'immutable';

import { FilterAndSortBySchemaPipe } from './filter-and-sort-by-schema.pipe';
import { AppGlobalsService } from '../services';

describe('FilterAndSortBySchemaPipe', () => {
  let pipe: FilterAndSortBySchemaPipe;

  beforeEach(() => {
    pipe = new FilterAndSortBySchemaPipe(new AppGlobalsService());
  });

  it('should sort by priority, larger first', () => {
    let schema = {
      properties: {
        key1: {
          priority: 10
        },
        key2: {
          priority: 100
        }
      }
    };
    let keys = Set(['key1', 'key2']);

    let expected = OrderedSet(['key2', 'key1']);

    expect(pipe.transform(keys, schema)).toEqual(expected);
  });

  it('should sort alphabetically if priority not set', () => {
    let schema = {
      properties: {
        key1: {},
        key2: {}
      }
    };
    let keys = Set(['key2', 'key1']);

    let expected = OrderedSet(['key1', 'key2']);

    expect(pipe.transform(keys, schema)).toEqual(expected);
  });

  it('should sort by priority, larger first then alphabetically if it is not set for some',
    () => {
      let schema = {
        properties: {
          key1: {
            priority: 10
          },
          key2: {
            priority: 100
          },
          key3: {},
          key4: {}
        }
      };
      let keys = Set(['key1', 'key2', 'key3', 'key4']);

      let expected = OrderedSet(['key2', 'key1', 'key3', 'key4']);

      expect(pipe.transform(keys, schema)).toEqual(expected);
    });

  it('should sort by priority, positive larger first, then alphabetically, then negative',
    () => {
      let schema = {
        properties: {
          key1: {
            priority: -100
          },
          key2: {
            priority: -10
          },
          key3: {},
          key4: {
            priority: 10
          },
          key5: {}
        }
      };
      let keys = Set(['key5', 'key1', 'key2', 'key4', 'key3']);

      let expected = OrderedSet(['key4', 'key3', 'key5', 'key2', 'key1']);

      expect(pipe.transform(keys, schema)).toEqual(expected);
    });

  it('should not return hidden keys', () => {
    let schema = {
      properties: {
        key1: {
          hidden: true
        },
        key2: {
        }
      }
    };
    let keys = Set(['key1', 'key2']);

    let expected = OrderedSet(['key2']);

    expect(pipe.transform(keys, schema)).toEqual(expected);
  });

  it('should return hidden keys if adminMode is set', () => {
    pipe.appGlobalsService.adminMode = true;
    let schema = {
      properties: {
        key1: {
          hidden: true
        },
        key2: {
        }
      }
    };
    let keys = Set(['key1', 'key2']);

    let expected = OrderedSet(['key1', 'key2']);

    expect(pipe.transform(keys, schema)).toEqual(expected);
  });

});
