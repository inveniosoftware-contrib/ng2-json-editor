/**
 * - If both findSingle and findMultiple are defined in configuration, at first findSingle is executed for all items,
 * if there is no result found then findMultiple is executed.
 */
export interface LongListNavigatorConfig {
  /**
   * The first item for which function returns true is displayed as search result.
   */
  findSingle?: (item: any, expression: string) => boolean;

  /**
   * All items for which function returns true are displayed as search results.
   */
  findMultiple?: (item: any, expression: string) => boolean;

  /**
   * Number of items are displayed per page.
   */
  itemsPerPage: number;

  /**
   * Number of pages that are displayed in pagination view.
   */
  maxVisiblePageCount: number;

  /**
   * Template name to put extra element/components into empty place of navigator header.
   */
  headerItemTemplateName?: string;
}
