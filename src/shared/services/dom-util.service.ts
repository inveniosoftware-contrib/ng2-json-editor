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

@Injectable()
export class DomUtilService {

  focusAndSelectFirstInputChildById(id: string) {
    let el = document.getElementById(id);
    if (el) {
      let firstInput = el.querySelector('div.editable-field-container input, textarea') as HTMLInputElement;
      if (firstInput) {
        firstInput.focus();
        firstInput.select();
      } else {
        firstInput = el.querySelector('div.btn-group') as HTMLInputElement;
        if (firstInput) {
          // .open is used for opening the dropdownmenu
          firstInput.classList.add('open');
          firstInput = el.querySelector('div.btn-group input') as HTMLInputElement;
          firstInput.focus();
          firstInput.select();
        }
      }
    }
  }

  // TO-DO: find the next editable element in row.
  focusRightOrLeftCell(index: number, direction: number) {
    let firstInput = document.querySelector('[tabIndex=\'' + index + '\']') as HTMLElement;
    if (firstInput) {
      while (firstInput.nodeName !== 'TD') {
        firstInput = firstInput.parentElement;
      }
      let nextSibling = direction > 0 ? firstInput.nextElementSibling : firstInput.previousElementSibling;
      while (nextSibling && nextSibling.nodeName === 'TD') {
        let textElem = nextSibling.querySelector('div.editable-field-container textarea') as HTMLInputElement;
        if (textElem) {
          textElem.focus();
          textElem.select();
          break;
        }
        nextSibling = direction > 0 ? nextSibling.nextElementSibling : nextSibling.previousElementSibling;
      }
    }
  }

  flashElementById(id: string) {
    let el = document.getElementById(id);
    if (el) {
      // .flash is defined json-editor.component.scss, {border: 2px solid yellow;}
      el.classList.add('flash');
      setTimeout(() => {
        el.classList.remove('flash');
      }, 500);
    }
  }
}
