import { PreviewConfig } from './preview-config';
import { SchemaOption } from './schema-option';
import { CustomShortcuts } from './custom-shortcuts';

export interface JsonEditorConfig {
  /**
   * If set, displays the switch that can enable admin mode where any field can be edited.
   * 
   * - It is `false` by default.
   */
  enableAdminModeSwitch?: boolean;

  /**
   * Configurations for properties defined in the schema.
   * 
   * Example: 
   * ```
   * {
   *  'anArray.items.properties.anElementProp': { ...SchemaOption... },
   *  'anObject.properties.aProp' : { ...SchemaOption... },
   *  'anObject.properties.anotherProp' : { ...SchemaOption... },
   *  'anotherObject': { ...SchemaOption... },
   *  ...
   * }
   * ```
   */
  schemaOptions?: { [dotSeparatedPath: string]: SchemaOption };
  /**
   * Configuration for previews to be displayed in previewer (on the right side).
   */
  previews?: Array<PreviewConfig>;

  /**
   * Configuration for the shortcuts.
   */
  shortcuts?: CustomShortcuts;
}
