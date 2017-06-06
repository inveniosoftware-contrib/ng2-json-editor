import { ShortcutConfig } from './shortcut-config';

export interface CustomShortcuts {
  /**
   * Adds a new empty row in the closest parent list.
   *
   * Default value: `alt+a`
   */
  add?: ShortcutConfig;

  /**
   * Adds a new empty field to the root parent list.
   *
   * Default value: `mod+shift+a`
   */
  addToRoot?: ShortcutConfig;

  /**
   * Adds a new empty field to the root parent list under the current field.
   *
   * Default value: `mod+shift+b`
   */
  addBelowToRoot?: ShortcutConfig;

  /**
   * Deletes the table row of the focused field.
   *
   * Default value: `mod+backspace`
   */
  delete?: ShortcutConfig;

  /**
   * Moves up the table row of the focused field.
   *
   * Default value: `mod+shift+up`
   */
  moveUp?: ShortcutConfig;

  /**
   * Moves down the table row of the focused field.
   *
   * Default value: `mod+shift+down`
   */
  moveDown?: ShortcutConfig;

  /**
   * Navigates up to the above/below focusable field in the table.
   *
   * Default value: `mod+up`
   */
  navigateUp?: ShortcutConfig;

  /**
   * Navigates down to the above/below focusable field in the table.
   *
   * Default value: `mod+down`
   */
  navigateDown?: ShortcutConfig;

  /**
   * Navigates right to the previous/next focusable field in the table.
   *
   * Default value: `mod+right`
   */
  navigateRight?: ShortcutConfig;

  /**
   * Navigates left to the previous/next focusable field in the table.
   *
   * Default value: `mod+left`
   */
  navigateLeft?: ShortcutConfig;

  /**
   * Copies the table row of the focused field below and lets the focused field of the new row empty.
   *
   * Default value: `alt+c`
   */
  copy?: ShortcutConfig;

  /**
   * Copies the table item of the focused field below. This functionality can copy a complex schema item in an array.
   *
   * Default value: `mod+alt+r`
   */
  copyFromRoot?: ShortcutConfig;

  /**
   * Undo an important change such as deleting a field
   *
   * Default value: `mod+alt+z`
   */
  undo?: ShortcutConfig;
}
