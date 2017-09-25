/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

import { FindReplaceAllService } from './find-replace-all.service';

import { fromJS } from 'immutable';

describe('FindReplaceAllService', () => {
  let service: FindReplaceAllService;

  beforeEach(() => {
    service = new FindReplaceAllService();
  });

  it('should find and replace all in nested map', () => {
    const map = fromJS({
      foo: {
        bar: {
          a: 'valueA',
          b: 'valueB'
        }
      }
    });

    const schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'object',
          properties: {
            bar: {
              type: 'object',
              properties: {
                a: {
                  type: 'string'
                },
                b: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    };

    const expected = fromJS({
      foo: {
        bar: {
          a: 'replacementA',
          b: 'replacementB'
        }
      }
    });

    const replacedMap = service.findReplaceInImmutable(map, schema, 'value', 'replacement').replaced;

    expect(replacedMap.equals(expected)).toBeTruthy();
  });

  it('should return correct diffHtml for nested map', () => {
    const map = fromJS({
      foo: {
        bar: {
          a: 'valueA',
          b: 'valueB',
          c: 'nothingToReplace'
        }
      }
    });

    const schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'object',
          properties: {
            bar: {
              type: 'object',
              properties: {
                a: {
                  type: 'string'
                },
                b: {
                  type: 'string'
                },
                c: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    };

    const expected = {
      foo: {
        bar: {
          a: `<strong style='color: green;'>replacement</strong><del><em style='color: red;'>value</em></del>A`,
          b: `<strong style='color: green;'>replacement</strong><del><em style='color: red;'>value</em></del>B`,
          c: 'nothingToReplace'
        }
      }
    };

    const diffHtml = service.findReplaceInImmutable(map, schema, 'value', 'replacement').diffHtml;

    expect(diffHtml).toEqual(expected);
  });

  it('should return correct diffHtml and replaced for nested map with list property', () => {
    const map = fromJS({
      foo:
      [
        {
          a: 'value1A',
        },
        {
          a: 'value2A',
        },
        {
          a: 'nothingToReplace'
        }
      ]
    });

    const schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              a: {
                type: 'string'
              }
            }
          }
        }
      }
    };

    const expectedReplaced = fromJS({
      foo:
      [
        {
          a: 'replacement1A',
        },
        {
          a: 'replacement2A',
        },
        {
          a: 'nothingToReplace'
        }
      ]
    });

    const expectedDiffHtml = {
      foo: [
        {
          a: `<strong style='color: green;'>replacement</strong><del><em style='color: red;'>value</em></del>1A`
        },
        {
          a: `<strong style='color: green;'>replacement</strong><del><em style='color: red;'>value</em></del>2A`
        },
        {
          a: 'nothingToReplace'
        }
      ]
    };

    const result = service.findReplaceInImmutable(map, schema, 'value', 'replacement');

    expect(result.diffHtml).toEqual(expectedDiffHtml);
    expect(result.replaced.equals(expectedReplaced)).toBeTruthy();
  });

  it('should find and replace all occurrences in a field', () => {
    const map = fromJS({
      foo: {
        bar: 'value:value'
      }
    });

    const schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'object',
          properties: {
            bar: {
              type: 'string'
            }
          }
        }
      }
    };

    const expected = fromJS({
      foo: {
        bar: 'replacement:replacement'
      }
    });

    const replacedMap = service.findReplaceInImmutable(map, schema, 'value', 'replacement').replaced;

    expect(replacedMap.equals(expected)).toBeTruthy();
  });

  it('should replace only if exact match when matchWhole is set', () => {
    const map = fromJS({
      foo: {
        bar: {
          prop: 'value',
          anotherProp: 'another value',
          propAnother: 'value another'
        }
      }
    });

    const schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'object',
          properties: {
            bar: {
              type: 'object',
              properties: {
                prop: {
                  type: 'string'
                },
                anotherProp: {
                  type: 'string'
                },
                propAnother: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    };

    const expected = fromJS({
      foo: {
        bar: {
          prop: 'replacement',
          anotherProp: 'another value',
          propAnother: 'value another'
        }
      }
    });

    const replacedMap = service.findReplaceInImmutable(map, schema, 'value', 'replacement', true).replaced;

    expect(replacedMap.equals(expected)).toBeTruthy();
  });

  it('should find and replace in list of maps but skip disabled string field', () => {
    const list = fromJS([
      {
        foo: {
          bar: {
            a: 'valueA1',
            b: 'valueB1'
          }
        }
      },
      {
        foo: {
          bar: {
            a: 'valueA2',
            b: 'valueB2'
          }
        }
      },
    ]);

    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          foo: {
            type: 'object',
            properties: {
              bar: {
                type: 'object',
                properties: {
                  a: {
                    type: 'string'
                  },
                  b: {
                    type: 'string',
                    disabled: true
                  }
                }
              }
            }
          }
        }
      }
    };

    const expected = fromJS([
      {
        foo: {
          bar: {
            a: 'replacementA1',
            b: 'valueB1'
          }
        }
      },
      {
        foo: {
          bar: {
            a: 'replacementA2',
            b: 'valueB2'
          }
        }
      },
    ]);

    const replacedList = service.findReplaceInImmutable(list, schema, 'value', 'replacement').replaced;

    expect(replacedList.equals(expected)).toBeTruthy();
  });

  it('should find and replace in list of maps but skip disabled list and map field', () => {
    const list = fromJS([
      {
        foo: {
          bar: {
            a: 'valueA1',
            b: 'valueB1',
            c: ['1valueC1', '2valueC1'],
            d: [
              { da: 'valueDA1' }
            ],
            e: {
              ea: 'valueEA1'
            }
          }
        }
      },
      {
        foo: {
          bar: {
            a: 'valueA2',
            b: 'valueB2',
            c: ['1valueC2', '2valueC2'],
            d: [
              { da: 'valueDA2' }
            ],
            e: {
              ea: 'valueEA2'
            }
          }
        }
      }
    ]);

    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          foo: {
            type: 'object',
            properties: {
              bar: {
                type: 'object',
                properties: {
                  a: {
                    type: 'string'
                  },
                  b: {
                    type: 'string',
                  },
                  c: {
                    disabled: true,
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  d: {
                    disabled: true,
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        da: {
                          type: 'string'
                        }
                      }
                    }
                  },
                  e: {
                    disabled: true,
                    type: 'object',
                    properties: {
                      ea: {
                        type: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    const expected = fromJS([
      {
        foo: {
          bar: {
            a: 'replacementA1',
            b: 'replacementB1',
            c: ['1valueC1', '2valueC1'],
            d: [
              {
                da: 'valueDA1'
              }
            ],
            e: {
              ea: 'valueEA1'
            }
          }
        }
      },
      {
        foo: {
          bar: {
            a: 'replacementA2',
            b: 'replacementB2',
            c: ['1valueC2', '2valueC2'],
            d: [
              {
                da: 'valueDA2'
              }
            ],
            e: {
              ea: 'valueEA2'
            }
          }
        }
      }
    ]);

    const replacedList = service.findReplaceInImmutable(list, schema, 'value', 'replacement').replaced;

    expect(replacedList.equals(expected)).toBeTruthy();
  });

  it('should skip $ref fields', () => {
    const list = fromJS([
      {
        record: {
          $ref: 'value1'
        }
      },
      {
        record: {
          $ref: 'value2'
        }
      },
    ]);

    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          record: {
            type: 'object',
            properties: {
              $ref: {
                type: 'string'
              }
            }
          }
        }
      }
    };

    const expected = fromJS([
      {
        record: {
          $ref: 'value1'
        }
      },
      {
        record: {
          $ref: 'value2'
        }
      },
    ]);

    const replacedList = service.findReplaceInImmutable(list, schema, 'value', 'replacement').replaced;

    expect(replacedList.equals(expected)).toBeTruthy();
  });

  it('should skip hidden fields', () => {
    const map = fromJS({
      hiddenProp: 'valueHidden',
      notHiddenProp: 'valueNotHidden'
    });

    const schema = {
      type: 'object',
      properties: {
        hiddenProp: {
          type: 'string',
          hidden: true
        },
        notHiddenProp: {
          type: 'string'
        }
      }
    };

    const expected = fromJS({
      hiddenProp: 'valueHidden',
      notHiddenProp: 'replacementNotHidden'
    });

    const replacedList = service.findReplaceInImmutable(map, schema, 'value', 'replacement').replaced;

    expect(replacedList.equals(expected)).toBeTruthy();
  });

});
