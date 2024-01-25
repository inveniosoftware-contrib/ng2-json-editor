/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2018 CERN.
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

import { JSONSchema } from '../interfaces';

@Injectable()
export class CompareKeysBySchemaService {

  /**
   * @param key1 the first key
   * @param key2 the second key
   * @param schema schema of the parent object
   */
  compare(key1: string, key2: string, schema: JSONSchema): number {
    // Sort by priority, larger is the first.
    const priorty1 = schema.properties[key1].priority || 0;
    const priority2 = schema.properties[key2].priority || 0;

    if (priorty1 > priority2) { return -1; }
    if (priorty1 < priority2) { return 1; }

    // Sort alphabetically.
    if (key1 < key2) { return -1; }
    if (key1 > key2) { return 1; }
    return 0;
  }
}
