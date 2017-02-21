export interface JsonPatch {
  op: string;
  path: string;
  from?: string;
  value?: any;
  /**
   * Addition to original json-patch used internally.
   *
   * Since the path for add operation trim to the parent array
   * The index is needed be kept to be used during for insertAt.
   */
  index?: number;
}
