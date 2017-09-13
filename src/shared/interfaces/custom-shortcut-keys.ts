
export interface CustomShortcutKeys {
  /**
   * Adds a new empty row in the closest parent list.
   *
   * Default value: `alt+a`
   */
  add?: string;

  /**
   * Adds a new empty field to the root parent list.
   *
   * Default value: `mod+shift+a`
   */
  addToRoot?: string;

  /**
   * Adds a new empty field to the root parent list under the current field.
   *
   * Default value: `mod+shift+b`
   */
  addBelowToRoot?: string;

  /**
   * Deletes the table row of the focused field.
   *
   * Default value: `mod+backspace`
   */
  delete?: string;

  /**
   * Moves up the table row of the focused field.
   *
   * Default value: `mod+shift+up`
   */
  moveUp?: string;

  /**
   * Moves down the table row of the focused field.
   *
   * Default value: `mod+shift+down`
   */
  moveDown?: string;

  /**
   * Moves up the most outer focused array item.
   *
   * Default value: `mod+alt+up`
   */
  moveUpRoot?: string;

  /**
   * Moves down the most outer focused array item.
   *
   * Default value: `mod+alt+down`
   */
  moveDownRoot?: string;

  /**
   * Navigates up to the above/below focusable field in the table.
   *
   * Default value: `mod+up`
   */
  navigateUp?: string;

  /**
   * Navigates down to the above/below focusable field in the table.
   *
   * Default value: `mod+down`
   */
  navigateDown?: string;

  /**
   * Navigates right to the previous/next focusable field in the table.
   *
   * Default value: `mod+right`
   */
  navigateRight?: string;

  /**
   * Navigates left to the previous/next focusable field in the table.
   *
   * Default value: `mod+left`
   */
  navigateLeft?: string;

  /**
   * Copies the table row of the focused field below and lets the focused field of the new row empty.
   *
   * Default value: `alt+c`
   */
  copy?: string;

  /**
   * Copies the table item of the focused field below. This functionality can copy a complex schema item in an array.
   *
   * Default value: `mod+alt+r`
   */
  copyFromRoot?: string;

  /**
   * Undo an important change such as deleting a field
   *
   * Default value: `mod+alt+z`
   */
  undo?: string;
}
