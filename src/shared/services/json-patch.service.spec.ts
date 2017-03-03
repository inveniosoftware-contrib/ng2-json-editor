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

import { JsonPatchService } from './json-patch.service';
import { JsonStoreService } from './json-store.service';
import { PathUtilService } from './path-util.service';


describe('JsonPatchService', () => {
  let service: JsonPatchService;

  beforeEach(() => {
    service = new JsonPatchService(new JsonStoreService(), new PathUtilService());
  });

  it('should group patches by path when array of patches is set', () => {
    let patches = [
      {
        path: '/foo/bar',
        op: 'dummy1'
      },
      {
        path: '/foo/bar',
        op: 'dummy2',
      },
      {
        path: '/another/thing',
        op: 'dummy1'
      }
    ];
    let patchesByPath = {
      '/foo/bar': [
        {
          path: '/foo/bar',
          op: 'dummy1'
        },
        {
          path: '/foo/bar',
          op: 'dummy2',
        }
      ],
      '/another/thing': [
        {
          path: '/another/thing',
          op: 'dummy1'
        }
      ]
    };
    spyOn(service.patchesByPath$, 'next');
    service.setJsonPatches(patches);
    expect(service.patchesByPath$.next).toHaveBeenCalledWith(patchesByPath);
  });

  it('should remove "-" and index from add patch path when patches are set', () => {
    let patches = [
      {
        path: '/foo/bar',
        op: 'dummy1',
      },
      {
        path: '/foo/bar/1235',
        op: 'add',
        value: 'val12345'
      },
      {
        path: '/foo/bar/-',
        op: 'add',
        value: 'val-'
      },
      {
        path: '/foo/bar/notNumber',
        op: 'add',
        value: 'valnotNumber'
      },
      {
        path: '/another/thing',
        op: 'dummy1'
      }
    ];
    let patchesByPath = {
      '/foo/bar': [
        {
          path: '/foo/bar',
          op: 'dummy1'
        },

        {
          path: '/foo/bar',
          op: 'add',
          value: 'val12345',
          index: 1235
        },
        {
          path: '/foo/bar',
          op: 'add',
          value: 'val-',
          index: -1
        }
      ],
      '/foo/bar/notNumber': [
        {
          path: '/foo/bar/notNumber',
          op: 'add',
          value: 'valnotNumber'
        }
      ],
      '/another/thing': [
        {
          path: '/another/thing',
          op: 'dummy1'
        }
      ]
    };
    spyOn(service.patchesByPath$, 'next');
    service.setJsonPatches(patches);
    expect(service.patchesByPath$.next).toHaveBeenCalledWith(patchesByPath);
  });

});
