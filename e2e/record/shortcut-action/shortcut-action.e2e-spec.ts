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

import { ShortcutActionPage } from './shortcut-action.po';
import { browser, protractor } from 'protractor';

describe('ShortcutAction', function() {
  let page: ShortcutActionPage;
  let mod;

  beforeEach(() => {
    page = new ShortcutActionPage();
    page.navigateTo('/');
    browser.driver.executeScript(function(){
      return (window.navigator && window.navigator.platform.indexOf('Mac')) >= 0 ? 'Mac' : 'Linux/Windows';
    }).then(info => {
        mod = info === 'Mac' ? protractor.Key.COMMAND : protractor.Key.CONTROL;
      });
  });

  it(`should add a new row under authors.0.affiliations table using 'alt+a' shortcut`, () => {
    page.getNumberOfChildRowsbyId('authors.0.affiliations')
      .then(tableRowsNum => {
        let inputElem = page.getChildOfElementByCss(page.getElementById('authors.0.affiliations.0.value'), 'textarea');
        inputElem.sendKeys(protractor.Key.chord(protractor.Key.ALT, 'a'));
        let newTableRowsNum = page.getNumberOfChildRowsbyId('authors.0.affiliations');
        expect(newTableRowsNum).toEqual(tableRowsNum + 1);
      });
  });

  it(`should add a new row under authors table using 'mod+shift+a' shortcut`, () => {
    page.getNumberOfChildTablesbyId('authors')
      .then(tableRowsNum => {
        let inputElem = page.getChildOfElementByCss(page.getElementById('authors.0.affiliations.0.value'), 'textarea');
        inputElem.sendKeys(protractor.Key.chord(mod, protractor.Key.SHIFT, 'a'));
        let newTableRowsNum = page.getNumberOfChildTablesbyId('authors');
        expect(newTableRowsNum).toEqual(tableRowsNum + 1);
      });
  });

  it(`should move row up using 'mod+shift+up' shortcut`, () => {
    let inputElem = page.getChildOfElementByCss(page.getElementById('accelerator_experiments.1.experiment'), 'textarea');
    let inputElemValue = inputElem.getAttribute('value');
    inputElem.sendKeys(protractor.Key.chord(mod, protractor.Key.SHIFT, protractor.Key.UP));
    let movedUpInputElem = page.getChildOfElementByCss(page.getElementById('accelerator_experiments.0.experiment'), 'textarea');
    expect(movedUpInputElem.getAttribute('value')).toEqual(inputElemValue);
  });

  it(`should move row down using 'mod+shift+down' shortcut`, () => {
    let inputElem = page.getChildOfElementByCss(page.getElementById('accelerator_experiments.0.experiment'), 'textarea');
    let inputElemValue = inputElem.getAttribute('value');
    inputElem.sendKeys(protractor.Key.chord(mod, protractor.Key.SHIFT, protractor.Key.DOWN));
    let movedDownInputElem = page.getChildOfElementByCss(page.getElementById('accelerator_experiments.1.experiment'), 'textarea');
    expect(movedDownInputElem.getAttribute('value')).toEqual(inputElemValue);
  });

  it(`should delete the current row in table  using 'mod+backspace' shortcut`, () => {
    let elem = page.getChildOfElementByCss(page.getElementById('keywords.0.keyword'), 'textarea');
    let elemBeforeDeletionThatWillBeShifted = page.getChildOfElementByCss(page.getElementById('keywords.1.keyword'), 'textarea')
      .getAttribute('value');
    let elemValue = elem.getAttribute('value');
    elem.sendKeys(protractor.Key.chord(mod, protractor.Key.BACK_SPACE));
    let elemAfterDeletionAndThatWasShifted = page.getChildOfElementByCss(page.getElementById('keywords.0.keyword'), 'textarea');
    expect(elemAfterDeletionAndThatWasShifted.getAttribute('value')).not.toEqual(elemValue);
    expect(elemAfterDeletionAndThatWasShifted.getAttribute('value')).toEqual(elemBeforeDeletionThatWillBeShifted);
  });

  it(`should copy new row under keywords.0 table using 'alt+c' shortcut. 
    The copied cell under the focused one must be empty and the remaining cells must be exactly copied.`, () => {
    let firstColInputElem = page.getChildOfElementByCss(page.getElementById('keywords.0.classification_scheme'), 'textarea');
    let secondColInputElemValue = page.getChildOfElementByCss(page.getElementById('keywords.0.keyword'), 'textarea')
      .getAttribute('value');
    firstColInputElem.sendKeys(protractor.Key.chord(protractor.Key.ALT, 'c'));
    let firstColAfterCopyInputElemValue = page
      .getChildOfElementByCss(page.getElementById('keywords.1.classification_scheme'), 'textarea')
      .getAttribute('value');
    let secondColAfterCopyInputElemValue = page.getChildOfElementByCss(page.getElementById('keywords.1.keyword'), 'textarea')
      .getAttribute('value');
    expect(firstColAfterCopyInputElemValue).toEqual('');
    expect(secondColAfterCopyInputElemValue).toEqual(secondColInputElemValue);
  });

  it(`should copy new row under references table using 'mod+alt+r' shortcut.
    It must copy the exact value of the root element eg Copy the whole author under the focused one.`, () => {
    let inputElem = page.getChildOfElementByCss(page.getElementById('authors.0.affiliations.0.value'), 'textarea');
    let numberOfTextareaElementsBeforeCopy = page.getNumberOfTextareaElementsById('authors.0');
    let numberOfInputElementsBeforeCopy = page.getNumberOfInputElementsById('authors.0');
    inputElem.sendKeys(protractor.Key.chord(mod, protractor.Key.ALT, 'r'));
    let afterCopyInputElemValue = page.getChildOfElementByCss(page.getElementById('authors.1.affiliations.0.value'), 'textarea')
      .getAttribute('value');
    expect(inputElem.getAttribute('value')).toEqual(afterCopyInputElemValue);
    let numberOfTextareaElementsAfterCopy = page.getNumberOfTextareaElementsById('authors.1');
    let numberOfInputElementsAfterCopy = page.getNumberOfInputElementsById('authors.1');
    expect(numberOfTextareaElementsBeforeCopy).toEqual(numberOfTextareaElementsAfterCopy);
    expect(numberOfInputElementsBeforeCopy).toEqual(numberOfInputElementsAfterCopy);
  });
});
