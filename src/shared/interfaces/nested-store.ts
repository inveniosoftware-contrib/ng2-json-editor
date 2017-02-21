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

  /**
   * Removes the value in path, in global store value.
   */
  removeIn(path: Array<any>): any;

  /**
   * Adds the value to the path, in global store value.
   *
   * Inserts the value to the given path if the path is to an array index. (-1 for appending)
   * calls `setIn` otherwise.
   */
  addIn(path: Array<any>, value: any);
}
