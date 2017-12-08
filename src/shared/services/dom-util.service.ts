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
import { ListPageChangerService } from './list-page-changer.service';

@Injectable()
export class DomUtilService {

  private readonly editableSelector = '.value-container input, div[contenteditable=true], .switch-input, searchable-dropdown span.value';
  // highlight class is defined in json-editor.component.scss
  private readonly highlightClass = 'highlight';
  private highlightedElement: HTMLElement;

  constructor(private tabsUtilService: TabsUtilService,
    private listPageChangerService: ListPageChangerService) { }

  focusAndSelectFirstEditableChildById(id: string, highlight = false) {
    this.tabsUtilService.selectTabIfNeeded(id);
    this.listPageChangerService.changePage(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const firstEditable = el.querySelector(this.editableSelector) as HTMLElement;
        if (firstEditable) {
          if (firstEditable.classList.contains('hidden')) {
            // has latex preview, click to disable to preview
            (firstEditable.nextElementSibling as HTMLElement).click();
            setTimeout(() => {
              this.focusAndSelectContent(firstEditable, highlight);
            });
          } else {
            this.focusAndSelectContent(firstEditable, highlight);
          }
        } else {
          // if element doesn't have any input, open add-field-dropdown if it exists.
          this.openDropdown(el);
        }
      }
    });
  }

  private focusAndSelectContent(el: HTMLElement, highlight: boolean) {
    el.focus();
    this.selectAllContent(el);
    if (highlight) {
      el.classList.add(this.highlightClass);
      this.highlightedElement = el;
    }
  }

  focusFirstInputChildByElement(el: HTMLElement) {
    const firstInput = el.querySelector('input') as HTMLElement;
    if (firstInput) {
      firstInput.focus();
    }
  }

  focusRightOrLeftParentCell(id: string, direction: number) {
    const el = document.getElementById(id);
    if (el && el.tabIndex) {
      let elementParentCell = el.parentElement;
      while (elementParentCell.nodeName !== 'TD') {
        elementParentCell = elementParentCell.parentElement;
      }
      let nextSibling = direction > 0 ? elementParentCell.nextElementSibling : elementParentCell.previousElementSibling;
      while (nextSibling && nextSibling.nodeName === 'TD') {
        const inputElement = nextSibling.querySelector(`input[tabindex='1'], div[contenteditable=true][tabindex='1']`) as HTMLElement;
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
    const el = document.getElementById(id);
    const firstEditable = el.querySelector(this.editableSelector) as HTMLElement;
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

  focusPatchElementById(id: string) {
    this.tabsUtilService.selectTabIfNeeded(id);
    this.listPageChangerService.changePage(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      const mergeButton = el.querySelector('.btn-merge') as HTMLButtonElement;
      if (mergeButton) {
        mergeButton.focus();
        mergeButton.click();
      } else {
        const patchActionsContainer = el.querySelector('.patch-actions-container') as HTMLElement;
        if (patchActionsContainer) {
          patchActionsContainer.focus();
        }
      }
    });
  }

  private selectAllContent(el: HTMLElement) {
    if (el instanceof HTMLInputElement) {
      el.select();
    } else {
      // select all content for contenteditable element.
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  private openDropdown(el: HTMLElement) {
    const dropdown = el.querySelector('div.btn-group');
    if (dropdown) {
      const dropDownButton = dropdown.querySelector('button') as HTMLButtonElement;
      if (dropDownButton) {
        dropDownButton.click();
      }
    }
  }

}
