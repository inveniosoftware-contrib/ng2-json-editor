import { JsonStoreService, KeysStoreService } from '../services';

export interface AutocompletionConfig {
  /**
   * Remote source url that returns the autocompletion results.
   *
   * - Query string is appended to url, that's why it should end like .../foo?bar=.
   */
  url?: string;

  /**
   * Json pointer to array of autocompletion results in response from the url.
   *
   */
  path?: string;

  /**
   * Source array that will be used to autocomplete locally.
   *
   * - Can not be set if `url` is set.
   */
  source?: Array<object | string>;

  /**
   * Function to be called when a completion results is selected.
   */
  onCompletionSelect?: (path: Array<any>, selection: string | object, jsonStore: JsonStoreService, keysStore: KeysStoreService) => void;

  /**
   * Maximum number of items to be displayed as autocompletion result in dropdown.
   */
  size: number;

  /**
   * Json pointer of the field in autocompletion result objects, used to be displayed and outputted
   *
   * - default: `''` if `source` is set (means that autocompletion results is array of string)
   * - default: `'text'` if `url` is set (means that autcompletion results is array of objects with `text` property)
   */
  optionField?: string;

  /**
   * Template name for each autocompletion result.
   *
   * - `@Input() templates` for `<json-editor>` must have an entry where key is this and value is a `TemplateRef`
   * - template parameter: `item`: [[AutocompletionResult]]
   */
  itemTemplateName?: string;
}
