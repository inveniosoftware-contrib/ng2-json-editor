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
    'add': {
      'key': 'mod+a',
      'action' : this.shortcutActionService.generateShortcutAction('addParentAction')
    },
    'add_root': {
      'key': 'mod+shift+a',
      'action': this.shortcutActionService.generateShortcutAction('addRootAction')
    },
    'move_up': {
      'key': 'mod+up',
      'action' : this.shortcutActionService.generateShortcutAction('moveUpAction')
    },
    'move_down': {
      'key': 'mod+down',
      'action': this.shortcutActionService.generateShortcutAction('moveDownAction')
    },
    'delete': {
      'key': 'mod+del',
      'action': this.shortcutActionService.generateShortcutAction('deleteAction')
    },
    'undo_delete': {
      'key': 'mod+shift+del',
      'action': this.shortcutActionService.generateShortcutAction('undoDeleteAction')
    },
    'arrow_up': {
      'key': 'up',
      'action': this.shortcutActionService.generateShortcutAction('navigateUpAction')
    },
    'arrow_down': {
      'key': 'down',
      'action': this.shortcutActionService.generateShortcutAction('navigateDownAction')
    },
    'arrow_left': {
      'key': 'left',
      'action': this.shortcutActionService.generateShortcutAction('navigateLeftAction')
    },
    'arrow_right': {
      'key': 'right',
      'action': this.shortcutActionService.generateShortcutAction('navigateRightAction')
    },
    'copy_row': {
      'key': 'ctrl+c',
      'action': this.shortcutActionService.generateShortcutAction('copyRowAction')
    },
    'copy_item': {
      'key': 'ctrl+shift+c',
      'action': this.shortcutActionService.generateShortcutAction('copyItemAction')
    }
  };

  constructor(public tabIndexService: TabIndexService,
              public shortcutActionService: ShortcutActionService) { }

  getShortcuts(config: EditorConfig) {
    return this.enrichShortcutsWithConfig(config);
  }

  enrichShortcutsWithConfig(config: EditorConfig): Object {
    let shotcutsFromConfig = config['shortcuts'];
    if (shotcutsFromConfig) {
      Object.keys(this.shortcuts).map(method => {
        if (shotcutsFromConfig[method]) {
          this.shortcuts[method]['key'] = shotcutsFromConfig[method]['key'];
        }
      });
    }
    return this.shortcuts;
  }
}
