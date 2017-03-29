import { HttpHeader } from './http-header';

export interface RefConfig {
  /**
   * Name of the template where you can access the data which is fetched from `$ref` url.
   *
   * - `@Input() templates` for `<json-editor>` must have an entry where key is this and value is a `TemplateRef`
   * - template parameter: `response: Object` is json body, `response.error` is used to propagate http error during fetchin `$ref`
   */
  templateName: string;

  /**
   * Flag to indicate if template should be rendered on request or on page load, a preview button is inserted if set true.
   */
  lazy: boolean;

  /**
   * Array of headers which will be used for http request that fetches the data in `$ref`
   */
  headers?: Array<HttpHeader>;
}
