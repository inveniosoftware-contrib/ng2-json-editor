/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2017 CERN.
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

import { Ng2JsonEditorPage } from '../app.po';
import * as _ from 'lodash';
import { ElementFinder, by, protractor } from 'protractor';

export class RecordTypesPage extends Ng2JsonEditorPage {

  static VALUE_SEPARATOR = '__';

  getChildOfElementByCss(elem: ElementFinder, css: string) {
    return elem.element(by.css(css));
  }

  getElementValueByElement(element: ElementFinder) {
    let deferred = protractor.promise.defer();
    element.getTagName()
    .then(tag => {
      switch (tag) {
        case 'a':
          deferred.fulfill(element.getText());
          break;
        case 'input':
          element.getAttribute('type')
          .then(type => {
            if (type === 'checkbox') {
              deferred.fulfill(element.getAttribute('checked'));
            } else if (type === 'number') {
                deferred.fulfill(element.getAttribute('value'));
            }else {
              deferred.fulfill(element.getAttribute('placeholder'));
            }
          });
          break;
        default:
          deferred.fulfill(element.getAttribute('value'));
      }
    });
    return deferred.promise;
  }

  getPathForRecordType(recordType: string) {
    return `../../example/assets/mock-data/${recordType}.json`;
  }

  getRandomIdPathFromObject(record: Object) {
    let idPath =  this.generateRandomIdPath(record);
    return {
      path: idPath.slice(0, idPath.lastIndexOf(RecordTypesPage.VALUE_SEPARATOR) - 1),
      value: idPath.slice(idPath.lastIndexOf(RecordTypesPage.VALUE_SEPARATOR) + RecordTypesPage.VALUE_SEPARATOR.length)
    };
  }

  generateRandomIdPath(item: Object) {
    if (_.isArray(item) && !_.isEmpty(item)) {
      let index = this.pickRandomIndex(item);
      let elem = item[index];
      return `${index}.${this.generateRandomIdPath(elem)}`;
    }else if (_.isObject(item) && !_.isEmpty(item)) {
      let keys = Object.keys(item);
      let index = this.pickRandomIndex(keys);
      let elem = item[keys[index]];
      return keys[index] !== '$ref' ? `${keys[index]}.${this.generateRandomIdPath(elem)}` : this.generateRandomIdPath(elem);
    }else {
      // VALUE_SEPARATOR before last item to identify the value because the . is included in some values and is confusing
      return `${RecordTypesPage.VALUE_SEPARATOR}${item}`;
    }
  }

  private pickRandomIndex(list: Array<any>) {
    let randomIndex = Math.floor(Math.random() * list.length);
    return randomIndex;
  }

  castFalseToNull(value: string) {
    if (value === 'false') {
      value = null;
    }
    return value;
  }
}
