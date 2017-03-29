import { NestedStore } from './nested-store';
import { AutocompletionResult } from './autocompletion-result';

export interface AutocompletionConfig {
  /**
   * Remote source url that returns the autocompletion results.
   *
   * - Query string is appended to url, that's why it should end like .../foo?bar=.
   */
  url?: string;

  /**
   * Path to array of autocompletion results in response from the url, separated by dot `.`.
   *
   * - Must point to array of objects which have a property called `text`.
   */
  path?: string;

  /**
   * Source array that will be used to autocomplete locally.
   */
  source?: Array<string>;

  /**
   * Function to be called when a completion results is selected.
   */
  onCompletionSelect?: (path: Array<any>, result: AutocompletionResult, store: NestedStore) => void;

  /**
   * Maximum number of items to be displayed as autocompletion result in dropdown.
   */
  size: number;

  /**
   * Template name for each autocompletion result.
   *
   * - `@Input() templates` for `<json-editor>` must have an entry where key is this and value is a `TemplateRef`
   * - template parameter: `item`: [[AutocompletionResult]]
   */
  itemTemplateName?: string;
}
