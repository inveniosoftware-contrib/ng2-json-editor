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

import { TestBed, inject } from '@angular/core/testing';

import { ShortcutService } from './shortcut.service';
import { ShortcutActionService } from './shortcut-action.service';
import { AppGlobalsService } from './app-globals.service';
import { EmptyValueService } from './empty-value.service';
import { JsonStoreService } from './json-store.service';
import { JsonSchemaService } from './json-schema.service';
import { PathUtilService } from './path-util.service';
import { DomUtilService } from './dom-util.service';
import { KeysStoreService } from './keys-store.service';
import { TabsUtilService } from './tabs-util.service';
import { ErrorMapUtilService } from './error-map-util.service';
import { ListPageChangerService } from './list-page-changer.service';

describe('ShortcutService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShortcutActionService,
        ShortcutService,
        EmptyValueService,
        JsonStoreService,
        JsonSchemaService,
        PathUtilService,
        DomUtilService,
        TabsUtilService,
        KeysStoreService,
        AppGlobalsService,
        ErrorMapUtilService,
        ListPageChangerService
      ]
    });
  });

  it('should merge shortcuts with config correctly', inject([ShortcutService], (shortcutService: ShortcutService) => {
    let config = {
      shortcuts: {
        'navigateLeft': {
          key: 'left'
        }
      }
    };
    let expectedShortcutKeyAfterMergingWithConfig = 'left';

    shortcutService.getShortcutsWithConfig(config.shortcuts);

    let shortcutKeyAfterMergingWithConfig = shortcutService.shortcuts.navigateLeft.key;

    expect(shortcutKeyAfterMergingWithConfig).toEqual(expectedShortcutKeyAfterMergingWithConfig);
  }));
});
