import { HttpHeader } from './http-header';
import { RefAnchorAttributes } from './ref-anchor-attributes';

export interface RefConfig {
  /**
   * Name of the template where you can access the data which is fetched from `$ref` url.
   *
   * - `@Input() templates` for `<json-editor>` must have an entry where key is this and value is a `TemplateRef`
   * - template parameter: `response: Object` is json body, `response.$error` is used to propagate http error during fetching `$ref`
   */
  templateName?: string;

  /**
   * Flag to indicate if template should be rendered on request or on page load, a preview button is inserted if set true.
   */
  lazy?: boolean;

  /**
   * Array of headers which will be used for http request that fetches the data in `$ref`
   */
  headers?: Array<HttpHeader>;

  /**
   * Function to be called to set display and href of the anchor element that opens the $ref link on the new tab
   * instead of the full link display text and the link itself. It is used if template is not configured for $ref field.
   */
  anchorBuilder?: (url?: string) => RefAnchorAttributes;
}
