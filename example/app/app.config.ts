import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export const EXAMPLE_CONFIG: AppConfig = {
  schemaOptions: {
    'titles.items.properties.title': {
      x_editor_hidden: true
    },
    'authors.items.properties.ids': {
      x_editor_disabled: true
    },
    'references': {
      x_editor_long_list_navigator: {
        findSingle: (value, expression) => {
          return value.getIn(['reference', 'number']) === parseInt(expression, 10);
        },
        findMultiple: (value, expression) => {
          return JSON.stringify(value).search(expression) > -1;
        },
        itemsPerPage: 5,
        maxVisiblePageCount: 5
      }
    },
    'license': {
      x_editor_disabled: true
    },
    'arxiv_eprints.items.properties.value': {
      x_editor_link_builder: (value: any) => {
        return `http://arxiv.org/abs/${value}`;
      },
    },
    'abstracts.items.properties.source': {
      x_editor_column_width: 20
    },
    'collections.items.properties.primary': {
      x_editor_disabled: true
    }
  },
  shortcuts: {
    'navigateLeft': {
      key: 'mod+left'
    },
    'navigateRight': {
      key: 'mod+right'
    }
  },
  enableAdminModeSwitch: true
};
