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
   */
  urlPath?: string;

  /**
   * Function that takes record and returns preview url.
   */
  getUrl?: (json: Object) => string;
}
