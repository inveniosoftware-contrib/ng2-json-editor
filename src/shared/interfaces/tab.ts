export interface Tab {
  /**
   * Name of the tab.
   */
  name: string;

  /**
   * Name of top level properties in json that should be in the tab.
   */
  properties: Array<string>;
}
