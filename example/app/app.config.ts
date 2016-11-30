import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export const EXAMPLE_CONFIG: AppConfig = {
  schemaOptions: {
    'titles.items.properties.title': {
      x_editor_hidden: true
    },
    'references': {
      x_editor_long_list_navigator: {
        findSingle: (value, expression) => {
          return value.getIn(['reference', 'number']) === parseInt(expression, 10);
        },
        findMultiple: (value, expression) => {
          return value.getIn(['reference', 'publication_info', 'year']) > parseInt(expression, 10);
        },
        itemsPerPage: 3
      }
    }
  }
};
