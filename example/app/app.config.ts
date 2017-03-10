import { Injectable } from '@angular/core';

import { JsonEditorConfig } from '../../dist';

@Injectable()
export class AppConfig {
  jsonEditorConfig: JsonEditorConfig = {
    schemaOptions: {
      '/authors/items': {
        order: ['full_name', 'affiliations'],
        alwaysShow: ['contributor_roles']
      },
      '/authors/items/properties/contributor_roles/items': {
        order: ['value', 'schema'],
        alwaysShow: ['value', 'schema']
      },
      '/authors/items/properties/ids': {
        disabled: true
      },
      '/references': {
        longListNavigatorConfig: {
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
      '/arxiv_eprints/items/properties/value': {
        linkBuilder: (value: any) => {
          return `http://arxiv.org/abs/${value}`;
        },
      },
      '/abstracts/items/properties/source': {
        columnWidth: 20
      }
    },
    shortcuts: {
      navigateLeft: {
        key: 'mod+left'
      },
      navigateRight: {
        key: 'mod+right'
      }
    },
    enableAdminModeSwitch: true,
    tabsConfig: {
      defaultTabName: 'Main',
      tabs: [
        {
          name: 'References',
          properties: ['references']
        },
        {
          name: 'Authors',
          properties: [
            'collaborations',
            'accelerator_experiments',
            'authors',
            'corporate_author'
          ]
        }
      ]
    }
  };
}
