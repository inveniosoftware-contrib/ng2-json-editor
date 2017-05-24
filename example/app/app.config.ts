import { Injectable } from '@angular/core';

import { JsonEditorConfig } from '../../dist';

@Injectable()
export class AppConfig {
  jsonEditorConfig: JsonEditorConfig = {
    schemaOptions: {
      '': {
        alwaysShow: ['deleted']
      },
      '/deleted': {
        toggleColor: '#e74c3c'
      },
      '/citeable': {
        toggleColor: '#3498db'
      },
      '/core': {
        toggleColor: '#27ae60'
      },
      '/authors/items': {
        order: ['full_name', 'affiliations'],
        alwaysShow: ['credit_roles']
      },
      '/authors/items/properties/ids': {
        disabled: true
      },
      '/references': {
        sortable: true,
        longListNavigatorConfig: {
          findSingle: (value, expression) => {
            return value.getIn(['reference', 'number']) === parseInt(expression, 10);
          },
          findMultiple: (value, expression) => {
            return JSON.stringify(value).search(expression) > -1;
          },
          itemsPerPage: 20,
          maxVisiblePageCount: 5
        },
        viewTemplateConfig: {
          itemTemplateName: 'referenceTemplate',
          showEditForm: (value) => {
            return !(value.hasIn(['record', '$ref']));
          }
        }
      },
      '/arxiv_eprints/items/properties/value': {
        linkBuilder: (value: any) => {
          return `http://arxiv.org/abs/${value}`;
        },
      },
      '/abstracts/items/properties/source': {
        columnWidth: 20
      },
      '/titles/items/properties/title': {
        latexPreview: true
      },
      '/abstracts/items/properties/value': {
        latexPreview: true
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
    menuMaxDepth: 1,
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
            'collaboration',
            'accelerator_experiments',
            'authors',
            'corporate_author'
          ]
        }
      ]
    },
    previews: [
      {
        name: 'pdf',
        type: 'html',
        urlPath: '/urls/0/value'
      }
    ]
  };
}
