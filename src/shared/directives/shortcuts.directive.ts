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

import {
  ElementRef,
  Directive,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

import 'mousetrap';

import { ShortcutActionService } from '../services';
import { Shortcut, CustomShortcutKeys } from '../interfaces';

@Directive({
  selector: '[shortcuts]'
})
export class ShortcutsDirective implements OnInit, OnDestroy, OnChanges {
  // custom shortcut keys
  @Input() shortcuts: CustomShortcutKeys;

  // actions with default shortcut keys
  private _shortcuts: {[actionName: string]: Shortcut} = {
    add: {
      key: 'alt+a',
      action: this.shortcutActionService.generateShortcutAction('addAction')
    },
    addToRoot: {
      key: 'mod+shift+a',
      action: this.shortcutActionService.generateShortcutAction('addToRootAction')
    },
    addBelowToRoot: {
      key: 'mod+shift+b',
      action: this.shortcutActionService.generateShortcutAction('addBelowToRootAction')
    },
    moveUp: {
      key: 'mod+shift+up',
      action: this.shortcutActionService.generateShortcutAction('moveUpAction')
    },
    moveDown: {
      key: 'mod+shift+down',
      action: this.shortcutActionService.generateShortcutAction('moveDownAction')
    },
    moveUpRoot: {
      key: 'mod+alt+up',
      action: this.shortcutActionService.generateShortcutAction('moveUpRootAction')
    },
    moveDownRoot: {
      key: 'mod+alt+down',
      action: this.shortcutActionService.generateShortcutAction('moveDownRootAction')
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
    },
    undo: {
      key: 'mod+alt+z',
      action: this.shortcutActionService.generateShortcutAction('undoAction')
    }
  };
  private mousetrap: MousetrapInstance;

  constructor(private el: ElementRef,
    private shortcutActionService: ShortcutActionService) {
    this.mousetrap = new Mousetrap(this.el.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    const customShortcutKeysChange = changes['shortcuts'];
    if (customShortcutKeysChange && this.shortcuts) {
      Object.keys(this._shortcuts).forEach(actionName => {
        if (this.shortcuts[actionName]) {
          this._shortcuts[actionName].key = this.shortcuts[actionName];
        }
      });
    }
  }

  ngOnInit(): void {
    Object.keys(this._shortcuts).forEach(method => {
      const action = this._shortcuts[method].action;
      this.mousetrap.bind(this._shortcuts[method].key, action);
    });
  }

  ngOnDestroy(): void {
    this.mousetrap.unbind(Object.keys(this._shortcuts));
  }
}
