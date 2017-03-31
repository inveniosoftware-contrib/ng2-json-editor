export interface PreviewConfig {
  /**
   * Name of the tab which preview is displayed.
   */
  name: string;

  /**
   * Type of the preview, such as 'html'.
   */
  type: string;

  /**
   * Preview url.
   */
  url?: string;

  /**
   * Dot separated path to preview url in the record.
   *
   * - config is ignored if the path is `undefined` in the record.
   */
  urlPath?: string;

  /**
   * Function that takes record and returns preview url.
   *
   * - config is ignored if it returns `undefined`.
   */
  getUrl?: (json: Object) => string;
}
