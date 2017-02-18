export interface PathCache {
  /**
   * Field path in string format as a key and field path in array format as a value
   */
  [relativeJsonPointer: string]: Array<string>;
}
