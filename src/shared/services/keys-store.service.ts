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
import { Map, List, OrderedSet, Iterable, Set, Seq } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';
import { JsonSchemaService } from './json-schema.service';
import { AppGlobalsService } from './app-globals.service';

@Injectable()
export class KeysStoreService {
  private keys$Map: { [path: string]: ReplaySubject<OrderedSet<string>> };
  public keysMap: { [path: string]: OrderedSet<string> };
  public onKeysChange = new ReplaySubject<{ path: string, keys: OrderedSet<string> }>(1);

  constructor(private appGlobalsService: AppGlobalsService,
    private pathUtilService: PathUtilService,
    private jsonSchemaService: JsonSchemaService) { }

  forPath(path: string): ReplaySubject<OrderedSet<string>> {
    return this.keys$Map[path];
  }

  /**
   * Adds a key to the specified path.
   * @param path path to add the key to
   * @param key key to be added
   * @param schema OBJECT schema that belongs to path (schema.items for table-list)
   */
  addKey(path: string, key: string, schema: JSONSchema): string {

    // FIXME: could do O(logn) insert instead of O(nlogn) since the set is already sorted.
    this.keysMap[path] = this.keysMap[path]
      .add(key)
      .sort((a, b) => this.compareByPriority(a, b, schema)) as OrderedSet<string>;
    this.keys$Map[path].next(this.keysMap[path]);
    this.onKeysChange.next({ path, keys: this.keysMap[path] });
    let newKeyPath = `${path}${this.pathUtilService.separator}${key}`;

    let keySchema = schema.properties[key];
    if (keySchema.type === 'object' || keySchema.componentType === 'table-list') {
      this.buildKeysMapRecursivelyForPath(Map<string, any>(), newKeyPath, keySchema);
    }

    return newKeyPath;
  }


  deletePath(path: Array<any>) {
    let lastKey = path[path.length - 1];
    let parentPath = this.pathUtilService.toPathString(path.slice(0, -1));
    // don't invoke deleteKey if parentPath is primitive-list
    if (this.keysMap[parentPath]) {
      this.deleteKey(parentPath, lastKey);
    }
  }

  deleteKey(parentPath: string, key: string) {
    // remove deleted one from parent
    this.keysMap[parentPath] = this.keysMap[parentPath].delete(key);
    this.keys$Map[parentPath].next(this.keysMap[parentPath]);
    this.onKeysChange.next({ path: parentPath, keys: this.keysMap[parentPath] });
    // delete keys for deleted one
    let deletedKeyPath = `${parentPath}${this.pathUtilService.separator}${key}`;
    delete this.keysMap[deletedKeyPath];
    delete this.keys$Map[deletedKeyPath];
    // delete keys for all children of the deleted one
    let deletedKeyPathChildPrefix = deletedKeyPath + this.pathUtilService.separator;
    Object.keys(this.keysMap)
      .filter(path => path.startsWith(deletedKeyPathChildPrefix))
      .forEach(childPath => {
        delete this.keysMap[childPath];
        delete this.keys$Map[childPath];
      });
  }


  buildKeysMap(json: Map<string, any>, schema: JSONSchema) {
    this.keys$Map = {};
    this.keysMap = {};
    this.buildKeysMapRecursivelyForPath(json, '', schema);
  }

  buildKeysMapRecursivelyForPath(mapOrList: Iterable<string | number, any>, path: string | Array<any>, schema?: JSONSchema) {
    // TODO: remove this and unify typing when #330 is fixed
    let pathString = Array.isArray(path) ? this.pathUtilService.toPathString(path) : path;

    if (!schema) {
      schema = this.jsonSchemaService.forPathString(pathString);
    }

    if (schema.type === 'object') {
      let map = mapOrList as Map<string, any>;
      let finalKeys = this.buildkeysForObject(pathString, map, schema);

      // recursive call
      finalKeys
        .filter(key => this.isObjectOrArray(schema.properties[key]))
        .forEach(key => {
          let nextPath = `${pathString}${this.pathUtilService.separator}${key}`;
          this.buildKeysMapRecursivelyForPath(map.get(key), nextPath, schema.properties[key]);
        });
    } else if (schema.componentType === 'table-list') {
      let list = mapOrList as List<Map<string, any>>;
      this.buildKeysForTableList(pathString, list, schema);
      // there is no recursive call for table list items because they aren't expected to have object or object list as property.
    } else {
      // recursive calls for each item of list if it's not a table-list
      let list = mapOrList as List<any>;
      if (this.isObjectOrArray(schema.items)) {
        // recursive call
        list.forEach((element, index) => {
          let elementPath = `${pathString}${this.pathUtilService.separator}${index}`;
          this.buildKeysMapRecursivelyForPath(element, elementPath, schema.items);
        });
      }
    }
  }

  // default value for `list`, if this is called for alwaysShow in which case `list` would be undefined
  private buildKeysForTableList(path: string, list = List<Map<string, any>>(), schema: JSONSchema) {
    // get present unique keys in all items of table-list
    let keys = Seq.Set(list
      .map(object => object.keySeq().toArray())
      .reduce((pre, cur) => pre.concat(cur), []));
    let itemSchema = schema.items;
    let finalKeys = this.schemafy(keys, itemSchema);
    this.setKeys(path, finalKeys);
  }

  // default value for `map`, if this is called for alwaysShow in which case `map` would be undefined
  private buildkeysForObject(path: string, map = Map<string, any>(), schema: JSONSchema): OrderedSet<string> {
    let finalKeys = this.schemafy(map.keySeq(), schema);
    this.setKeys(path, finalKeys);
    return finalKeys;
  }

  /**
   * Filters keys, add alwaysShow fields and sorts by schema.
   */
  private schemafy(keys: Seq<number, string>, schema: JSONSchema): OrderedSet<string> {
    return keys
      .filter(key => this.isNotHidden(key, schema) || this.appGlobalsService.adminMode)
      .concat(schema.alwaysShow || [])
      .sort((a, b) => this.compareByPriority(a, b, schema))
      .toOrderedSet();
  }

  private compareByPriority(a: string, b: string, schema: JSONSchema): number {
    // Sort by priority, larger is the first.
    let pa = schema.properties[a].priority || 0;
    let pb = schema.properties[b].priority || 0;

    if (pa > pb) { return -1; }
    if (pa < pb) { return 1; }

    // Sort alphabetically.
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  }

  private isNotHidden(key: string, schema: JSONSchema): boolean {
    if (!schema.properties[key]) {
      throw new Error(`"${key}" is not specified as property in \n${JSON.stringify(schema.properties, undefined, 2)}`);
    }
    return !schema.properties[key].hidden;
  }

  private isObjectOrArray(schema: JSONSchema): boolean {
    return schema.type === 'object' || schema.type === 'array';
  }

  private setKeys(path: string, keys: OrderedSet<string>) {
    this.keysMap[path] = keys;
    if (!this.keys$Map[path]) {
      this.keys$Map[path] = new ReplaySubject(1);
    }
    this.keys$Map[path].next(keys);
  }
}
