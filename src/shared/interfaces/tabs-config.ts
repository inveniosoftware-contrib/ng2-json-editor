import { Tab } from './tab';

export interface TabsConfig {
  /**
   * Name for default tab which opens at start and includes
   * every other property which isn't configured in `tabs`.
   */
  defaultTabName: string;

  /**
   * List of custom tabs.
   */
  tabs: Array<Tab>;
}
