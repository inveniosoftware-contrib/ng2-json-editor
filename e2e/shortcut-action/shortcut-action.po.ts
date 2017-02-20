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

import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { Ng2JsonEditorPage, WDPromise } from '../app.po';


export class ShortcutActionPage extends Ng2JsonEditorPage {

  getNumberOfChildRowsbyId(id: string): WDPromise<number> {
    let tableElem = element(by.id(id));
    return tableElem.all(by.css('tr[id*=\'' + id + '\']')).count();
  }

  getNumberOfChildTablesbyId(id: string): WDPromise<number> {
    let tableElem = element(by.id(id));
    return tableElem.all(by.css('table[id*=\'' + id + '\']')).count();
  }

  getChildOfElementByCss(elem: ElementFinder, css: string): ElementFinder {
    return elem.element(by.css(css));
  }

  getChildrenOfElementByCss(elem: ElementFinder, css: string): ElementArrayFinder {
    return elem.all((by.css(css)));
  }

  getNumberOfContentEditableElementsById(id: string): WDPromise<number> {
    let elem = element(by.id(id));
    return elem.all(by.css('div[contenteditable=true]')).count();
  }

  getNumberOfInputElementsById(id: string): WDPromise<number> {
    let elem = element(by.id(id));
    return elem.all(by.css('input')).count();
  }

  getValuesOfChildrenById(id: string): WDPromise<Array<string>> {
    let elems = this.getChildrenOfElementByCss(this.getElementById(id), 'div[contenteditable=true], input');
    return elems
      .map(elem => {
        return elem.getTagName()
          .then(tagName => {
            if (tagName === 'input') {
              return elem.getAttribute('value');
            } else {
              return elem.getText();
            }
          });
      });
   }
}
