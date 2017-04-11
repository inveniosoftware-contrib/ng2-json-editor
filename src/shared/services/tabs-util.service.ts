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
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as _ from 'lodash';

import { TabsConfig, JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';

@Injectable()
export class TabsUtilService {

  private _schemaKeyToTabName: {[key: string]: string };
  private _tabSelectionSubject: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor(public pathUtilService: PathUtilService) { }

  get tabSelectionSubject(): ReplaySubject<string> {
    return this._tabSelectionSubject;
  }

  get schemaKeyToTabName(): {[key: string]: string } {
    return this._schemaKeyToTabName;
  }

  getTabNames(tabsConfig: TabsConfig): Array<string> {
    let tabNames = tabsConfig.tabs.map(tab => tab.name);
    // insert default tab name at the beginning
    return [tabsConfig.defaultTabName]
      .concat(tabNames);
  }

  getSchemaKeyToTabName(tabsConfig: TabsConfig, schema: JSONSchema): {} {
    // set tab.name for configured keys
    let keyToTabName = tabsConfig.tabs
      .map(tab => {
        let keysWithTabName = {};
        tab.properties.forEach(key => {
          keysWithTabName[key] = tab.name;
        });
        return keysWithTabName;
      }).reduce((pre, cur) => Object.assign(pre, cur));
    // set defaultTabName for all other keys in the schema
    Object.keys(schema.properties)
      .filter(key => !keyToTabName[key])
      .forEach(key => {
        keyToTabName[key] = tabsConfig.defaultTabName;
      });

    this._schemaKeyToTabName = keyToTabName;
    return keyToTabName;
  }

  // TODO: shouldn't access this
  getTabNameToSubSchema(schema: JSONSchema, keyToTabName: { [key: string]: string }): {} {
    let schemaProps = schema.properties;
    let tabNameToSchemaProps = Object.keys(schemaProps)
      .map(prop => {
        return {
          [keyToTabName[prop]]: {
            [prop]: schemaProps[prop]
          }
        };
      }).reduce((pre, cur) => _.merge(pre, cur));

    let tabNameToAlwaysShow: { [tabName: string]: Array<string> } = {};
    let alwaysShow = schema.alwaysShow;
    if (alwaysShow) {
      alwaysShow
        .forEach(key => {
          let tabName = keyToTabName[key];
          if (!tabNameToAlwaysShow[tabName]) {
            tabNameToAlwaysShow[tabName] = [];
          }
          tabNameToAlwaysShow[tabName].push(key);
        });
    }

    let tabNameToSchemaPart = {};
    Object.keys(tabNameToSchemaProps)
      .forEach(tabName => {
        tabNameToSchemaPart[tabName] = {
          type: 'object',
          alwaysShow: tabNameToAlwaysShow[tabName],
          properties: tabNameToSchemaProps[tabName]
        };
      });
    return tabNameToSchemaPart;
  }

  // TODO: maybe this could be a decorator
  selectTabIfNeeded(path: string) {
    if (this.schemaKeyToTabName) {
      let tabName = this.schemaKeyToTabName[this.pathUtilService.toPathArray(path)[0]];
      this.tabSelectionSubject.next(tabName);
    }
  }
}
