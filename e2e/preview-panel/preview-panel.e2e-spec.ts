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
import { browser, protractor } from 'protractor';
import { element, by, ElementFinder } from 'protractor';

describe('Preview panel', function() {
  let page: Ng2JsonEditorPage;

  beforeEach(() => {
    page = new Ng2JsonEditorPage();
    page.navigateTo('/');
  });

  it(`should expand/collapse preview window`, () => {
    let previewToggleButton = element(by.id('btn-preview-toggle'));
    let middleColumn = element(by.id('left-main-container'));
    let rightColumn = element(by.id('right-main-container'));

    expect(previewToggleButton.getText()).toEqual('Hide Preview');

    let middleColumnWidthBefore = middleColumn.getCssValue('width');
    let rightColumnWidthBefore = rightColumn.getCssValue('width');

    previewToggleButton.click();

    let middleColumnWidthAfter = middleColumn.getCssValue('width');
    let rightColumnWidthAfter = rightColumn.getCssValue('width');

    protractor.promise.all(
      [
        middleColumnWidthBefore,
        middleColumnWidthAfter,
        rightColumnWidthBefore,
        rightColumnWidthAfter
      ]
    )
    .then((
      [mcBefore, mcAfter, rcBefore, rcAfter]
    ) => {
        expect(parseInt(mcAfter, 10) > parseInt(mcBefore, 10)).toBeTruthy();
        expect(parseInt(rcAfter, 10) < parseInt(rcBefore, 10)).toBeTruthy();
      }
    );

    expect(previewToggleButton.getText()).toEqual('Show Preview');
  });

});
