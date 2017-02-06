import { HttpHeader } from './http-header';

export interface RefConfig {
  /**
   * Html template where you can access json that is pointed by $ref by using `context`
   *
   * Example: '<div>aValue: {{(context | async)?.aValue}}<div>'
   *
   * - Async pipe must be used since the Observable passed as context.
   * - Other angular2 common pipes can be used such as lowercase, json etc.
   * - The error during http request can be accessed, via `context.error`
   */
  template: string;

  /**
   * Flag to indicate if template should be rendered on request or on page load, a preview button is inserted if set true.
   */
  lazy: boolean;

  /**
   * Array of headers which will be used for http request that fetches the data in `$ref`
   */
  headers?: Array<HttpHeader>;
}
