// ALWAYS access config through `environment`, DO NOT import from here

import { JsonEditorConfig } from '../../dist';

export const e2eConfig: JsonEditorConfig = {
  schemaOptions: {
    alwaysShow: ['deleted'],
    properties: {
      $schema: {
        hidden: true
      },
      deleted: {
        toggleColor: '#e74c3c'
      },
      citeable: {
        toggleColor: '#3498db'
      },
      core: {
        toggleColor: '#27ae60'
      },
      authors: {
        items: {
          order: ['full_name', 'affiliations'],
          alwaysShow: ['credit_roles'],
          properties: {
            ids: {
              disabled: true
            }
          }
        }
      },
      references: {
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
      arxiv_eprints: {
        items: {
          properties: {
            value: {
              linkBuilder: (value: any) => {
                return `http://arxiv.org/abs/${value}`;
              }
            }
          }
        }
      },
      abstracts: {
        items: {
          properties: {
            source: {
              columnWidth: 20
            },
            value: {
              latexPreviewEnabled: true
            }
          }
        }
      },
      publication_info: {
        items: {
          properties: {
            conference_record: {
              refFieldConfig: {
                anchorBuilder: (url) => {
                  const parts = url.split('/');
                  const type = parts[parts.length - 2].slice(0, -1);
                  const display = `View ${type}`;
                  const href = url.replace(/\/api\//, '/');
                  return { href, display };
                }
              }
            }
          }
        }
      },
      titles: {
        items: {
          properties: {
            title: {
              latexPreviewEnabled: true
            }
          }
        }
      },
      imprints: {
        items: {
          properties: {
            date: {
              errorMessage: {
                format: 'This is not a date!'
              }
            }
          }
        }
      }
    }
  },
  shortcuts: {
    navigateRight: 'mod+shift+right'
  },
  customFormatValidation: {
    date: {
      formatChecker: (value) => {
        const formats = [
          /^\d{4}$/,
          /^\d{4}-\d{2}$/,
          /^\d{4}-\d{2}-\d{2}$/
        ];
        return formats
          .some(format => {
            if (value.match(format)) {
              return Date.parse(value) !== NaN;
            }
            return false;
          });
      }
    },
    'date-time': {
      formatChecker: (value) => {
        const regex = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i;
        if (value.match(regex)) {
          return true;
        };
        return false;
      }
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
