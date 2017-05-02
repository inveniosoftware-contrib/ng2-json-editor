import { Injectable } from '@angular/core';
import { Map, List, OrderedSet, Iterable, Set, Seq } from 'immutable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';
import { ComponentTypeService } from './component-type.service';

@Injectable()
export class KeysStoreService {
  private keys$Map: { [path: string]: ReplaySubject<OrderedSet<string>> };
  private keysMap: { [path: string]: OrderedSet<string> };

  constructor(private pathUtilService: PathUtilService,
    private componentTypeService: ComponentTypeService) {

  }

  forPath(path: string): ReplaySubject<OrderedSet<string>> {
    return this.keys$Map[path];
  }

  addKey(path: string, key: string, schema: JSONSchema): string {
    this.keysMap[path] = this.keysMap[path].add(key);
    this.keys$Map[path].next(this.keysMap[path]);
    let newKeyPath = this.pathUtilService.appendToPathString(path, key);

    if (schema.properties[key].type === 'object' || this.componentTypeService.getComponentType(schema.properties[key]) === 'table-list') {
      this.buildKeysMapRecursively(Map<string, any>(), schema.properties[key], newKeyPath);
    }

    return newKeyPath;
  }

  deleteKey(path: string, key: string) {
    this.keysMap[path] = this.keysMap[path].delete(key);
    this.keys$Map[path].next(this.keysMap[path]);
    let deletedKeyPath = this.pathUtilService.appendToPathString(path, key);
    delete this.keysMap[deletedKeyPath];
    delete this.keys$Map[deletedKeyPath];
  }

  buildKeysMap(json: Map<string, any>, schema: JSONSchema) {
    this.keys$Map = {};
    this.keysMap = {};
    this.buildKeysMapRecursively(json, schema);
  }

  private buildKeysMapRecursively(mapOrList: Iterable<string | number, any>, schema: JSONSchema, path = '') {
    if (schema.type === 'object') {
      let map = mapOrList as Map<string, any>;
      let finalKeys = this.buildkeysForObject(path, map, schema);

      // recursive call
      finalKeys
        .filter(key => this.isObjectOrArray(schema.properties[key]))
        .forEach(key => {
          let nextPath = `${path}${this.pathUtilService.separator}${key}`;
          this.buildKeysMapRecursively(map.get(key), schema.properties[key], nextPath);
        });
    } else if (this.componentTypeService.getComponentType(schema) === 'table-list') {
      let list = mapOrList as List<Map<string, any>>;
      this.buildKeysForTableList(path, list, schema);
      // there is no recursive call for table list items because they aren't expected to have object or object list as property.
    } else {
      // recursive calls for each item of list if it's not a table-list
      let list = mapOrList as List<any>;
      if (this.isObjectOrArray(schema.items)) {
        // recursive call
        list.forEach((element, index) => {
          let elementPath = `${path}${this.pathUtilService.separator}${index}`;
          this.buildKeysMapRecursively(element, schema.items, elementPath);
        });
      }
    }
  }

  private buildKeysForTableList(path: string, list: List<Map<string, any>>, schema: JSONSchema) {
    // get present unique keys in all items of table-list
    let keys = Seq.Set(list
      .map(object => object.keySeq().toArray())
      .reduce((pre, cur) => pre.concat(cur), []));
    let itemSchema = schema.items;
    let finalKeys = this.schemafy(keys, itemSchema);
    this.setKeys(path, finalKeys);
  }

  private buildkeysForObject(path: string, map: Map<string, any>, schema: JSONSchema): OrderedSet<string> {
    let finalKeys = this.schemafy(map.keySeq(), schema);

    // put only seperator for the root
    let pathOrRoot = path || this.pathUtilService.separator;
    this.setKeys(pathOrRoot, finalKeys);

    return finalKeys;
  }

  /**
   * Filters keys, add alwaysShow fields and sorts by schema.
   */
  private schemafy(keys: Seq<number, string>, schema: JSONSchema): OrderedSet<string> {
    return keys
      .filter(key => this.filterBySchema(key, schema))
      .concat(schema.alwaysShow || [])
      .sort((a, b) => this.sortBySchema(a, b, schema))
      .toOrderedSet();
  }

  private sortBySchema(a: string, b: string, schema: JSONSchema): number {
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

  private filterBySchema(key: string, schema: JSONSchema): boolean {
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
