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

import { Set } from 'immutable';

import { FilterHiddenFieldsPipe } from './filter-hidden-fields.pipe';

describe('FilterHiddenFieldsPipe', () => {
  let pipe: FilterHiddenFieldsPipe;

  beforeEach(() => {
    pipe = new FilterHiddenFieldsPipe();
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

    let expected = Set(['key2']);

    expect(pipe.transform(keys, schema, false)).toEqual(expected);
  });

  it('should return hidden keys if adminMode is set', () => {
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

    let expected = Set(['key1', 'key2']);

    expect(pipe.transform(keys, schema, true)).toEqual(expected);
  });

});
