import { ShortcutConfig } from './shortcut-config';

export interface CustomShortcuts {
  /**
   * Adds a new empty row in the closest parent list.
   */
  addParent?: ShortcutConfig;

  /**
   * Adds a new empty field to the root parent list.
   */
  addToRoot?: ShortcutConfig;

  /**
   * Deletes the table row of the focused field.
   */
  delete?: ShortcutConfig;

  /**
   * Moves up the table row of the focused field.
   */
  moveUp?: ShortcutConfig;

  /**
   * Moves down the table row of the focused field.
   */
  moveDown?: ShortcutConfig;

  /**
   * Navigates up to the above/below focusable field in the table.
   */
  navigateUp?: ShortcutConfig;

  /**
   * Navigates down to the above/below focusable field in the table.
   */
  navigateDown?: ShortcutConfig;

  /**
   * Navigates right to the previous/next focusable field in the table.
   */
  navigateRight?: ShortcutConfig;

  /**
   * Navigates left to the previous/next focusable field in the table.
   */
  navigateLeft?: ShortcutConfig;

  /**
   * Copies the table row of the focused field below and lets the focused field of the new row empty.
   */
  copy?: ShortcutConfig;

  /**
   * Copies the table item of the focused field below. This functionality can copy a complex schema item in an array.
   */
  copyFromRoot?: ShortcutConfig;
}
