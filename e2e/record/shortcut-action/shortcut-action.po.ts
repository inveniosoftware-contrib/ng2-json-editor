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

import { element, by, ElementFinder } from 'protractor';
import { Ng2JsonEditorPage } from '../../app.po';

export class ShortcutActionPage extends Ng2JsonEditorPage {

  getNumberOfChildRowsbyId(id: string) {
    let tableElem = element(by.id(id));
    return tableElem.all(by.css('tr[id*=\'' + id + '\']')).count();
  }

  getNumberOfChildTablesbyId(id: string) {
    let tableElem = element(by.id(id));
    return tableElem.all(by.css('table[id*=\'' + id + '\']')).count();
  }

  getChildOfElementByCss(elem: ElementFinder, css: string) {
    return elem.element(by.css(css));
  }

  getNumberOfTextareaElementsById(id: string) {
    let elem = element(by.id(id));
    return elem.all(by.css('textarea')).count();
  }

  getNumberOfInputElementsById(id: string) {
    let elem = element(by.id(id));
    return elem.all(by.css('input')).count();
  }
}
