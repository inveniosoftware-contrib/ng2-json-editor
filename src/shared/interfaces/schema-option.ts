import { AutocompletionConfig } from './autocompletion-config';
import { LongListNavigatorConfig } from './long-list-navigator-config';
import { ViewTemplateConfig } from './view-template-config';
import { RefConfig } from './ref-config';
import { OnValueChangeFunction } from './on-value-change-function';
import { CustomErrorMessages } from './custom-error-messages';

export interface SchemaOption {
  /**
   * Define the width that a field must acquire in a table.
   *
   * - This is only applicable when the parent field is a table.
   */
  columnWidth?: number;

  /**
   * Flag to disable fields that should be displayed in the UI, but aren't supposed to be edited.
   */
  disabled?: boolean;

  /**
   * Flag to hide fields in the json from the editor's UI.
   */
  hidden?: boolean;

  /**
   * Array of properties of __an__ object that are going to be shown in UI, even if they aren't present in the record.
   */
  alwaysShow?: Array<string>;

  /**
   * Properties of __any__ object that matches this, are going to be shown in UI, even if they aren't present in the record.
   *
   * - It is applied recursively for all oject children of the object that's is set.
   */
  alwaysShowRegExp?: RegExp;

  /**
   * Indicator to be used for sorting all fields on the UI. Larger priority fields appears up-most/left-most on the UI.
   *
   * - It is `0` by default.
   * - It can be negative.
   */
  priority?: number;

  /**
   * Shortcut map for enum fields, to map shorthand values to enum values.
   *
   * - When a key from the the map is typed in enum field then `enter` is pressed enum field value will be set value of that key.
   */
  enumShortcutMap?: { [key: string]: string };

  /**
   * Original enum item value to its display value
   *
   * - This map could also configure subset of enum values, unconfigured ones will have same display as original value.
   */
  enumDisplayValueMap?: { [key: string]: string };

  /**
   * Configuration for objects properties that has `$ref` string as a property which points to another json.
   */
  refFieldConfig?: RefConfig;

  /**
   * Function that will be called when the value of configured property is changed
   *
   * - Works only for primitive values
   */
  onValueChange?: OnValueChangeFunction;

  /**
   * Configuration to enable navigator with search and paging ability for complex array properties.
   */
  longListNavigatorConfig?: LongListNavigatorConfig;

  /**
   * The function that returns a url string which will be pointed by a small link button at the right side of input element.
   *
   * @param value value of the configured property
   */
  linkBuilder?: (value: any) => string;

  /**
   * Configuration to autocomplete a field from remote or local source.
   *
   * - Either url and path (for remote) or source (for local) must be set.
   */
  autocompletionConfig?: AutocompletionConfig;

  /**
   * Array of keys that indicates the order in which they should be displayed in the UI.
   */
  order?: Array<string>;

  /**
   * Toggle color for boolean, it will be displayed as a toggle on top if this is set.
   *
   * - It works only for top-level properties.
   * - Toggle cannot be deleted once it is added.
   */
  toggleColor?: string;

  /**
   * Flag to enable up/down buttons for elements of array.
   *
   * - It is `false` by default.
   */
  sortable?: boolean;

  /**
   * Configuration for custom templates in complex list fields.
   */
  viewTemplateConfig?: ViewTemplateConfig;

  /**
   * Flag to enable LaTeX preview in a field.
   */
  latexPreviewEnabled?: boolean;

  /**
   * Custom error messages for schema validation
   */
  errorMessage?: string | CustomErrorMessages;

  /**
   * Names of templates to be put as extra custom items to title dropdown.
   */
  titleDropdownItemTemplateNames?: Array<string>;
}
