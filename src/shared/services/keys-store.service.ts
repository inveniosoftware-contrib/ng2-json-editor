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
import { Subject } from 'rxjs/Subject';

import { JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';
import { JsonSchemaService } from './json-schema.service';
import { AppGlobalsService } from './app-globals.service';

@Injectable()
export class KeysStoreService {
  private keys$Map: { [path: string]: ReplaySubject<OrderedSet<string>> };
  public keysMap: { [path: string]: OrderedSet<string> };
  public onKeysChange = new Subject<{ path: string, keys: OrderedSet<string> }>();

  constructor(private appGlobalsService: AppGlobalsService,
    private pathUtilService: PathUtilService,
    private jsonSchemaService: JsonSchemaService) { }

  forPath(path: string): ReplaySubject<OrderedSet<string>> {
    return this.keys$Map[path];
  }

  /**
   * Adds a key to the specified path.
   *
   * @param path path to add the key to
   * @param key key to be added
   * @param schema schema that belongs to path (schema.items for table-list)
   */
  addKey(path: string, key: string, schema: JSONSchema, value?: any): string {

    // FIXME: could do O(logn) insert instead of O(nlogn) since the set is already sorted.
    this.keysMap[path] = this.keysMap[path]
      .add(key)
      .sort((a, b) => this.compareByPriority(a, b, schema)) as OrderedSet<string>;
    this.keys$Map[path].next(this.keysMap[path]);
    this.onKeysChange.next({ path, keys: this.keysMap[path] });
    const newKeyPath = `${path}${this.pathUtilService.separator}${key}`;

    const keySchema = schema.properties[key];
    if (keySchema.type === 'object' || keySchema.componentType === 'table-list') {
      this.buildKeysMapRecursivelyForPath(value || Map<string, any>(), newKeyPath, keySchema);
    }

    return newKeyPath;
  }


  deletePath(path: Array<any>) {
    const lastKey = path[path.length - 1];
    const parentPath = this.pathUtilService.toPathString(path.slice(0, -1));
    // don't invoke deleteKey if parentPath is primitive-list
    if (this.keysMap[parentPath]) {
      this.deleteKey(parentPath, lastKey);
    }
  }
  /**
   * Sync keys in store for the given path or its parent, grand parent etc. if necessary
   *
   * @param path path to the (re)set field
   * @param json whole json
   */
  syncKeysForPath(path: Array<any>, json: Map<string, any>) {
    // search from leaf to root, to find the first path with entry in keys map
    for (let i = path.length - 1; i >= 0; i--) {
      const currentPath = path.slice(0, i);
      const currentPathString = this.pathUtilService.toPathString(currentPath);
      if (this.keysMap[currentPathString]) {
        // path[i] is key that should be added to currentPat
        const key = path[i];
        // if currentPath has the key
        if (this.keysMap[currentPathString].has(key)) {
          // just build the store keys map for that /current/path/key if it is object or array
          const keyPath = currentPath.concat(key);
          const keySchema = this.jsonSchemaService.forPathArray(keyPath);
          if (keySchema.type === 'object' || keySchema.type === 'array') {
            this.buildKeysMapRecursivelyForPath(json.getIn(keyPath), keyPath, keySchema);
          }
          // if currentPath doesn't have the key
        } else {
          const currentSchema = this.jsonSchemaService.forPathArray(currentPath);
          // if currentPath is to a table list
          if (currentSchema.componentType === 'table-list') {
            // have to rebuild keys map for it because key is here an index we don't know what to add
            this.buildKeysMapRecursivelyForPath(json.getIn(currentPath), currentPath, currentSchema);
            // if not to a table list.
          } else {
            // just add the key which will build keys map for /current/path/key as well if needed
            this.addKey(currentPathString, key, currentSchema, json.getIn(currentPath.concat(path[i])));
          }
        }
        // break when a entry found for a path in keys map
        break;
      }
    }
  }

  deleteKey(parentPath: string, key: string) {
    // remove deleted one from parent
    this.keysMap[parentPath] = this.keysMap[parentPath].delete(key);
    this.keys$Map[parentPath].next(this.keysMap[parentPath]);
    this.onKeysChange.next({ path: parentPath, keys: this.keysMap[parentPath] });
    // delete keys for deleted one
    const deletedKeyPath = `${parentPath}${this.pathUtilService.separator}${key}`;
    delete this.keysMap[deletedKeyPath];
    delete this.keys$Map[deletedKeyPath];
    // delete keys for all children of the deleted one
    const deletedKeyPathChildPrefix = deletedKeyPath + this.pathUtilService.separator;
    Object.keys(this.keysMap)
      .filter(path => path.startsWith(deletedKeyPathChildPrefix))
      .forEach(childPath => {
        delete this.keysMap[childPath];
        delete this.keys$Map[childPath];
      });
  }

  /**
   * Swaps keys of given two indices in object list recursively
   */
  swapListElementKeys(listPath: Array<any>, index1: number, index2: number) {
    const listSchema = this.jsonSchemaService.forPathArray(listPath);
    if (listSchema.componentType !== 'complex-list') { return; }

    const listPathString = this.pathUtilService.toPathString(listPath);
    const ps1 = `${listPathString}${this.pathUtilService.separator}${index1}`;
    const ps2 = `${listPathString}${this.pathUtilService.separator}${index2}`;
    const keys1 = this.keysMap[ps1];
    this.setKeys(ps1, this.keysMap[ps2]);
    this.setKeys(ps2, keys1);
    // swap children as well
    const ps1ChildPrefix = ps1 + this.pathUtilService.separator;
    const ps2ChildPrefix = ps2 + this.pathUtilService.separator;
    const childrenSwaps: Array<{ from: string, to: string, keys: OrderedSet<string> }> = [];
    Object.keys(this.keysMap)
      .forEach(path => {
        if (path.startsWith(ps1ChildPrefix)) {
          const toPath = path.replace(ps1ChildPrefix, ps2ChildPrefix);
          childrenSwaps.push({ from: path, to: toPath, keys: this.keysMap[path] });
        } else if (path.startsWith(ps2ChildPrefix)) {
          const toPath = path.replace(ps2ChildPrefix, ps1ChildPrefix);
          childrenSwaps.push({ from: path, to: toPath, keys: this.keysMap[path] });
        }
      });
    childrenSwaps
      .forEach(swap => {
        this.setKeys(swap.to, swap.keys);
        this.onKeysChange.next({ path: swap.to, keys: this.keysMap[swap.to] });
      });
    childrenSwaps
      .filter(swap => !childrenSwaps.some(otherSwap => swap.from === otherSwap.to))
      .forEach(swap => {
        delete this.keysMap[swap.from];
        delete this.keys$Map[swap.from];
      });
  }


  buildKeysMap(json: Map<string, any>, schema: JSONSchema) {
    this.keys$Map = {};
    this.keysMap = {};
    this.buildKeysMapRecursivelyForPath(json, '', schema);
  }

  buildKeysMapRecursivelyForPath(mapOrList: Iterable<string | number, any>, path: string | Array<any>, schema?: JSONSchema) {
    // TODO: remove this and unify typing when #330 is fixed
    const pathString = Array.isArray(path) ? this.pathUtilService.toPathString(path) : path;

    if (!schema) {
      schema = this.jsonSchemaService.forPathString(pathString);
    }

    if (schema.type === 'object') {
      const map = mapOrList as Map<string, any> || Map<string, any>();
      const finalKeys = this.buildkeysForObject(pathString, map, schema);

      // recursive call
      finalKeys
        .filter(key => this.isObjectOrArray(schema.properties[key]))
        .forEach(key => {
          const nextPath = `${pathString}${this.pathUtilService.separator}${key}`;
          this.buildKeysMapRecursivelyForPath(map.get(key), nextPath, schema.properties[key]);
        });
    } else if (schema.componentType === 'table-list') {
      const list = mapOrList as List<Map<string, any>> || List<Map<string, any>>();
      this.buildKeysForTableList(pathString, list, schema);
      // there is no recursive call for table list items because they aren't expected to have object or object list as property.
    } else if (schema.componentType === 'complex-list') {
      const list = mapOrList as List<Map<string, any>> || List<Map<string, any>>();
      list.forEach((element, index) => {
        const elementPath = `${pathString}${this.pathUtilService.separator}${index}`;
        this.buildKeysMapRecursivelyForPath(element, elementPath, schema.items);
      });
    }
  }

  // default value for `list`, if this is called for alwaysShow in which case `list` would be undefined
  private buildKeysForTableList(path: string, list = List<Map<string, any>>(), schema: JSONSchema) {
    // get present unique keys in all items of table-list
    const keys = Seq.Set(list
      .map(object => object.keySeq().toArray())
      .reduce((pre, cur) => pre.concat(cur), []));
    const itemSchema = schema.items;
    const finalKeys = this.schemafy(keys, itemSchema);
    this.setKeys(path, finalKeys);
  }

  // default value for `map`, if this is called for alwaysShow in which case `map` would be undefined
  private buildkeysForObject(path: string, map = Map<string, any>(), schema: JSONSchema): OrderedSet<string> {
    const finalKeys = this.schemafy(map.keySeq(), schema);
    this.setKeys(path, finalKeys);
    return finalKeys;
  }

  /**
   * Filters keys, add alwaysShow fields and sorts by schema.
   */
  private schemafy(keys: Seq<number, string>, schema: JSONSchema): OrderedSet<string> {
    return keys
      .filter(key => this.isNotHidden(key, schema) || this.appGlobalsService.adminMode)
      .concat(schema.required || [])
      .concat(schema.alwaysShow || [])
      .sort((a, b) => this.compareByPriority(a, b, schema))
      .toOrderedSet();
  }

  private compareByPriority(a: string, b: string, schema: JSONSchema): number {
    // Sort by priority, larger is the first.
    const pa = schema.properties[a].priority || 0;
    const pb = schema.properties[b].priority || 0;

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
