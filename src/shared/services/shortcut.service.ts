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

import { ShortcutActionService } from './shortcut-action.service';
import { CustomShortcuts } from '../interfaces/custom-shortcuts';

@Injectable()
export class ShortcutService {

  shortcuts = {
    add: {
      key: 'alt+a',
      action: this.shortcutActionService.generateShortcutAction('addAction')
    },
    addToRoot: {
      key: 'mod+shift+a',
      action: this.shortcutActionService.generateShortcutAction('addToRootAction')
    },
    moveUp: {
      key: 'mod+shift+up',
      action: this.shortcutActionService.generateShortcutAction('moveUpAction')
    },
    moveDown: {
      key: 'mod+shift+down',
      action: this.shortcutActionService.generateShortcutAction('moveDownAction')
    },
    delete: {
      key: 'mod+backspace',
      action: this.shortcutActionService.generateShortcutAction('deleteAction')
    },
    navigateUp: {
      key: 'mod+up',
      action: this.shortcutActionService.generateShortcutAction('navigateUpAction')
    },
    navigateDown: {
      key: 'mod+down',
      action: this.shortcutActionService.generateShortcutAction('navigateDownAction')
    },
    navigateLeft: {
      key: 'mod+left',
      action: this.shortcutActionService.generateShortcutAction('navigateLeftAction')
    },
    navigateRight: {
      key: 'mod+right',
      action: this.shortcutActionService.generateShortcutAction('navigateRightAction')
    },
    copy: {
      key: 'alt+c',
      action: this.shortcutActionService.generateShortcutAction('copyAction')
    },
    copyFromRoot: {
      key: 'mod+alt+r',
      action: this.shortcutActionService.generateShortcutAction('copyFromRootAction')
    }
  };

  constructor(public shortcutActionService: ShortcutActionService) { }

  getShortcutsWithConfig(customShortcuts?: CustomShortcuts): Object {
    if (customShortcuts) {
      Object.keys(this.shortcuts).forEach(method => {
        if (customShortcuts[method]) {
          this.shortcuts[method]['key'] = customShortcuts[method]['key'];
        }
      });
    }
    return this.shortcuts;
  }
}
