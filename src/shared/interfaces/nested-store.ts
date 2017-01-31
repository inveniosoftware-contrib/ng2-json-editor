/**
 * - `getIn` and `setIn` returns and takes `immutable.js`'s `List` and `Map` instead of `Array` and `Object`.
 */
export interface NestedStore {
  /**
   * Gets the value in path from global store value.
   */
  getIn(path: Array<any>): any;

  /**
   * Set the value in path, in global store value.
   */
  setIn(path: Array<any>, value: any);
}
