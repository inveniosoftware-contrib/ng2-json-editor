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

import { RecordTypesPage } from './record-types.po';

describe('Record-Types App', function() {
  let page: RecordTypesPage;
  let record: Object;
  let records = [
    'authors',
    'conferences',
    'experiments',
    'hep',
    'institutions',
    'jobs',
    'journals'
  ];

  beforeEach(() => {
    page = new RecordTypesPage();
  });

  it('should match the value of a random path in each record with the value of the same path in UI.', () => {
    for (let index = 0; index < records.length; index++) {
      let recordType = records[index];
      record = require(page.getPathForRecordType(recordType));
      page.navigateTo(`/${recordType}`);
      let {path, value} = page.getRandomIdPathFromObject(record);
      let element = page.getChildOfElementByCss(page.getElementById(path), `textarea, input, a`);

      // convert false value to null to be compatible with protractor.getAttibute('checked') method
      // as it returns null if checkbox is not checked.
      expect(page.getElementValueByElement(element)).toEqual(page.castFalseToNull(value));
    }
  });
});
