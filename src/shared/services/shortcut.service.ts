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


import { Injectable } from '@angular/core';
import { TabIndexService } from './tab-index.service';
import { ShortcutActionService } from './shortcut-action.service';

@Injectable()
export class ShortcutService {

  shortcuts = {
    'addParent': {
      'key': 'mod+a',
      'action' : this.shortcutActionService.generateShortcutAction('addParentAction')
    },
    'addRoot': {
      'key': 'mod+shift+a',
      'action': this.shortcutActionService.generateShortcutAction('addRootAction')
    },
    'moveUp': {
      'key': 'mod+up',
      'action' : this.shortcutActionService.generateShortcutAction('moveUpAction')
    },
    'moveDown': {
      'key': 'mod+down',
      'action': this.shortcutActionService.generateShortcutAction('moveDownAction')
    },
    'delete': {
      'key': 'mod+del',
      'action': this.shortcutActionService.generateShortcutAction('deleteAction')
    },
    'navigateUp': {
      'key': 'up',
      'action': this.shortcutActionService.generateShortcutAction('navigateUpAction')
    },
    'navigateDown': {
      'key': 'down',
      'action': this.shortcutActionService.generateShortcutAction('navigateDownAction')
    },
    'navigateLeft': {
      'key': 'left',
      'action': this.shortcutActionService.generateShortcutAction('navigateLeftAction')
    },
    'navigateRight': {
      'key': 'right',
      'action': this.shortcutActionService.generateShortcutAction('navigateRightAction')
    },
    'copyRow': {
      'key': 'ctrl+c',
      'action': this.shortcutActionService.generateShortcutAction('copyRowAction')
    },
    'copyItem': {
      'key': 'ctrl+shift+c',
      'action': this.shortcutActionService.generateShortcutAction('copyItemAction')
    }
  };

  constructor(public tabIndexService: TabIndexService,
              public shortcutActionService: ShortcutActionService) { }

  getShortcuts(config: Object) {
    return this.mergeShortcutsWithConfig(config);
  }

  mergeShortcutsWithConfig(shortcutsFromConfig: Object): Object {
    if (shortcutsFromConfig) {
      Object.keys(this.shortcuts).map(method => {
        if (shortcutsFromConfig[method]) {
          this.shortcuts[method]['key'] = shortcutsFromConfig[method]['key'];
        }
      });
    }
    return this.shortcuts;
  }
}
