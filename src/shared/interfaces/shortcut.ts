import { ShortcutActionFunction } from './shortcut-action-function';

export interface Shortcut {
  /**
   * Keystroke example: 'ctrl+t'
   */
  key: string;

  /**
   * Function to be executed during keystore
   */
  action: ShortcutActionFunction;
}
