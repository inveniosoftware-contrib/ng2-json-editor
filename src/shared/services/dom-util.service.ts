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

import { TabsUtilService } from './tabs-util.service';

@Injectable()
export class DomUtilService {

  private editableSelector = '.value-container input, div[contenteditable=true], .switch-input';
  // highlight class is defined in json-editor.component.scss
  private highlightClass = 'highlight';
  private highlightedElement: HTMLElement;

  constructor(public tabsUtilService: TabsUtilService) { }

  focusAndSelectFirstEditableChildById(id: string, highlight = false) {
    this.tabsUtilService.selectTabIfNeeded(id);
    setTimeout(() => {
      let el = document.getElementById(id);
      if (el) {
        let firstEditable = el.querySelector(this.editableSelector) as HTMLElement;
        if (firstEditable) {
          firstEditable.focus();
          this.selectAllContent(firstEditable);
          if (highlight) {
            firstEditable.classList.add(this.highlightClass);
            this.highlightedElement = firstEditable;
          }
        } else {
          // if element doesn't have any input, open add-field-dropdown if it exists.
          this.openDropdown(el);
        }
      }
    });
  }

  focusFirstInputChildByElement(el: HTMLElement) {
    let firstInput = el.querySelector('input') as HTMLElement;
    if (firstInput) {
      firstInput.focus();
    }
  }

  focusRightOrLeftParentCell(id: string, direction: number) {
    let el = document.getElementById(id);
    if (el && el.tabIndex) {
      let elementParentCell = el.parentElement;
      while (elementParentCell.nodeName !== 'TD') {
        elementParentCell = elementParentCell.parentElement;
      }
      let nextSibling = direction > 0 ? elementParentCell.nextElementSibling : elementParentCell.previousElementSibling;
      while (nextSibling && nextSibling.nodeName === 'TD') {
        let inputElement = nextSibling.querySelector(`input[tabindex='1'], div[contenteditable=true][tabindex='1']`) as HTMLElement;
        if (inputElement) {
          inputElement.focus();
          this.selectAllContent(inputElement);
          break;
        }
        nextSibling = direction > 0 ? nextSibling.nextElementSibling : nextSibling.previousElementSibling;
      }
    }
  }

  blurFirstEditableChildById(id: string) {
    let el = document.getElementById(id);
    let firstEditable = el.querySelector(this.editableSelector) as HTMLElement;
    if (firstEditable) {
      firstEditable.blur();
    }
  }

  clearHighlight() {
    if (this.highlightedElement) {
      this.highlightedElement.classList.remove(this.highlightClass);
      this.highlightedElement = undefined;
    }
  }

  focusAndToggleMergePopoverById(id: string) {
    this.tabsUtilService.selectTabIfNeeded(id);
    setTimeout(() => {
      let el = document.getElementById(id);
      let mergeButton = el.querySelector('.btn-merge') as HTMLButtonElement;
      if (mergeButton) {
        mergeButton.focus();
        mergeButton.click();
      }
    });
  }

  private selectAllContent(el: HTMLElement) {
    if (el instanceof HTMLInputElement) {
      el.select();
    } else {
      // select all content for contenteditable element.
      let range = document.createRange();
      range.selectNodeContents(el);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  private openDropdown(el: HTMLElement) {
    let dropdown = el.querySelector('div.btn-group');
    if (dropdown) {
      let dropDownButton = dropdown.querySelector('button') as HTMLButtonElement;
      if (dropDownButton) {
        dropDownButton.click();
      }
    }
  }

}
