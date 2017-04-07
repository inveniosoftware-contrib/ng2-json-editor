webpackJsonp([0,3],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__ = __webpack_require__(669);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__["a"]; });



/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyValueService; });
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


var EmptyValueService = (function () {
    function EmptyValueService() {
    }
    EmptyValueService.prototype.generateEmptyValue = function (schema) {
        var emptyValue = this.generateEmptyValueRecursively(schema);
        if (typeof emptyValue === 'object') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(emptyValue);
        }
        else {
            return emptyValue;
        }
    };
    EmptyValueService.prototype.generateEmptyValueRecursively = function (schema) {
        var _this = this;
        if (schema['type'] === 'object') {
            var emptyObject_1 = {};
            Object.keys(schema['properties'])
                .filter(function (prop) {
                var required = schema['required'] || [];
                return required.indexOf(prop) > -1;
            }).forEach(function (prop) {
                var propSchema = schema['properties'][prop];
                emptyObject_1[prop] = _this.generateEmptyValueRecursively(propSchema);
            });
            return emptyObject_1;
        }
        if (schema['type'] === 'array') {
            var emptyArray = [];
            var arrayElementSchema = schema['items'];
            emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
            return emptyArray;
        }
        return EmptyValueService.defaultValueLookup[schema['type']];
    };
    return EmptyValueService;
}());

EmptyValueService.defaultValueLookup = {
    'string': '',
    'boolean': false
};
EmptyValueService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
EmptyValueService.ctorParameters = function () { return []; };


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 134;


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = (function () {
    function AppConfig() {
        this.jsonEditorConfig = {
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
                        findSingle: function (value, expression) {
                            return value.getIn(['reference', 'number']) === parseInt(expression, 10);
                        },
                        findMultiple: function (value, expression) {
                            return JSON.stringify(value).search(expression) > -1;
                        },
                        itemsPerPage: 5,
                        maxVisiblePageCount: 5
                    }
                },
                '/arxiv_eprints/items/properties/value': {
                    linkBuilder: function (value) {
                        return "http://arxiv.org/abs/" + value;
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
    return AppConfig;
}());
AppConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AppConfig);

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.config.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 136;


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_always_show_toggles_pipe__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__different_keys_pipe__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_by_expression_pipe__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_and_sort_by_schema_pipe__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sanitize_url_pipe__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__self_or_empty_pipe__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__underscore_to_space_pipe__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__set_first_element_path_pipe__ = __webpack_require__(715);
/* unused harmony reexport AddAlwaysShowFieldsPipe */
/* unused harmony reexport AddAlwaysShowTogglesPipe */
/* unused harmony reexport DifferentKeysPipe */
/* unused harmony reexport FilterByExpressionPipe */
/* unused harmony reexport FilterAndSortBySchemaPipe */
/* unused harmony reexport SanitizeUrlPipe */
/* unused harmony reexport SelfOrEmptyPipe */
/* unused harmony reexport UnderscoreToSpacePipe */
/* unused harmony reexport SetFirstElementPathPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_PIPES; });










var SHARED_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__["a" /* AddAlwaysShowFieldsPipe */],
    __WEBPACK_IMPORTED_MODULE_1__add_always_show_toggles_pipe__["a" /* AddAlwaysShowTogglesPipe */],
    __WEBPACK_IMPORTED_MODULE_2__different_keys_pipe__["a" /* DifferentKeysPipe */],
    __WEBPACK_IMPORTED_MODULE_3__filter_by_expression_pipe__["a" /* FilterByExpressionPipe */],
    __WEBPACK_IMPORTED_MODULE_4__filter_and_sort_by_schema_pipe__["a" /* FilterAndSortBySchemaPipe */],
    __WEBPACK_IMPORTED_MODULE_5__sanitize_url_pipe__["a" /* SanitizeUrlPipe */],
    __WEBPACK_IMPORTED_MODULE_6__self_or_empty_pipe__["a" /* SelfOrEmptyPipe */],
    __WEBPACK_IMPORTED_MODULE_7__underscore_to_space_pipe__["a" /* UnderscoreToSpacePipe */],
    __WEBPACK_IMPORTED_MODULE_8__set_first_element_path_pipe__["a" /* SetFirstElementPathPipe */]
];


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTypeService; });
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

var ComponentTypeService = (function () {
    function ComponentTypeService() {
    }
    /**
     * It returns the editor specific type of given schema
     * In other words, which component to use for given schema.
     *
     * Possible values:
     *  - string, number, boolean, object, enum
     *  - primitive-list, table-list, complex-list
     *  - disabled, autocomplete
     *
     * @param {Object} schema
     * @return {string}
     */
    ComponentTypeService.prototype.getComponentType = function (schema) {
        if (!schema) {
            throw new Error('schema is undefined');
        }
        if (schema['onValueChange']) {
            return 'value-change-watcher';
        }
        var schemaType = schema['type'];
        if (!schemaType) {
            if (Object.keys(schema).length === 0) {
                return 'raw';
            }
        }
        else if (schemaType === 'string') {
            if (schema['autocompletionConfig']) {
                return 'autocomplete';
            }
            else if (schema['enum']) {
                return 'enum';
            }
        }
        else if (schemaType === 'object') {
            if (schema['properties']['$ref']) {
                return 'ref';
            }
        }
        else if (schemaType === 'array') {
            var itemSchema_1 = schema['items'];
            if (itemSchema_1['type'] === 'object') {
                // complex-array: if it's an object array
                // where at least one property of this object is also an object array.
                // so object array in an object array. Array<{property: Array<{...}>...}>
                var isComplexArray = Object.keys(itemSchema_1['properties'])
                    .some(function (prop) {
                    var propSchema = itemSchema_1['properties'][prop];
                    return propSchema['items'] && (propSchema['items']['type'] === 'object');
                });
                if (isComplexArray) {
                    return 'complex-list';
                }
                else {
                    return 'table-list';
                }
            }
            else {
                // if schema.items.type is not object!
                return 'primitive-list';
            }
        }
        // execution reaches here if schemaType is either
        // 'number', 'integer', 'string' or something else which is currently not supported
        return schemaType;
    };
    return ComponentTypeService;
}());

ComponentTypeService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
ComponentTypeService.ctorParameters = function () { return []; };


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomUtilService; });
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

var DomUtilService = (function () {
    function DomUtilService() {
        this.editableSelector = '.value-container input, div[contenteditable=true]';
    }
    DomUtilService.prototype.focusAndSelectFirstEditableChildById = function (id) {
        var el = document.getElementById(id);
        if (el) {
            var firstInput = el.querySelector(this.editableSelector);
            if (firstInput) {
                firstInput.focus();
                this.selectAllContent(firstInput);
            }
            else {
                // if element doesn't have any input, open add-field-dropdown if it exists.
                firstInput = el.querySelector('div.btn-group');
                if (firstInput) {
                    var dropDownButton = el.querySelector('div.btn-group button');
                    if (dropDownButton) {
                        dropDownButton.click();
                    }
                }
            }
        }
    };
    DomUtilService.prototype.focusFirstInputChildByElement = function (el) {
        var firstInput = el.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    };
    DomUtilService.prototype.focusRightOrLeftParentCell = function (id, direction) {
        var el = document.getElementById(id);
        if (el && el.tabIndex) {
            var elementParentCell = el.parentElement;
            while (elementParentCell.nodeName !== 'TD') {
                elementParentCell = elementParentCell.parentElement;
            }
            var nextSibling = direction > 0 ? elementParentCell.nextElementSibling : elementParentCell.previousElementSibling;
            while (nextSibling && nextSibling.nodeName === 'TD') {
                var inputElement = nextSibling.querySelector("input[tabindex='1'], div[contenteditable=true][tabindex='1']");
                if (inputElement) {
                    inputElement.focus();
                    this.selectAllContent(inputElement);
                    break;
                }
                nextSibling = direction > 0 ? nextSibling.nextElementSibling : nextSibling.previousElementSibling;
            }
        }
    };
    DomUtilService.prototype.flashElementById = function (id) {
        var el = document.getElementById(id);
        if (el) {
            // .flash is defined json-editor.component.scss, {border: 2px solid yellow;}
            el.classList.add('flash');
            setTimeout(function () {
                el.classList.remove('flash');
            }, 500);
        }
    };
    DomUtilService.prototype.blurFirstEditableChildById = function (id) {
        var el = document.getElementById(id);
        var firstInput = el.querySelector(this.editableSelector);
        if (firstInput) {
            firstInput.blur();
        }
    };
    DomUtilService.prototype.selectAllContent = function (el) {
        if (el instanceof HTMLInputElement) {
            el.select();
        }
        else {
            // select all content for contenteditable element.
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };
    return DomUtilService;
}());

DomUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
DomUtilService.ctorParameters = function () { return []; };


/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonSchemaService; });
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

var JsonSchemaService = (function () {
    function JsonSchemaService() {
    }
    JsonSchemaService.prototype.setSchema = function (schema) {
        this.schema = schema;
    };
    /**
     *
     * @param {Array<any>} path - Path of an element
     * @returns {Object} - Returns the schema extracted from this path
     */
    JsonSchemaService.prototype.getSchemaFromPath = function (path) {
        var schema = this.schema['properties'];
        var _path = path.filter(function (value) {
            return isNaN(value);
        });
        var pathSize = _path.length;
        for (var i = 0; i <= pathSize - 1; i++) {
            schema = schema[_path[i]];
            if (schema['type']) {
                if (schema['type'] === 'array' && !(i === (pathSize - 1))) {
                    schema = schema['items']['properties'] || schema['items'];
                }
                if (schema['type'] === 'object' && !(i === (pathSize - 1))) {
                    schema = schema['properties'];
                }
            }
        }
        return schema;
    };
    return JsonSchemaService;
}());

JsonSchemaService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
JsonSchemaService.ctorParameters = function () { return []; };


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonStoreService; });



var JsonStoreService = (function () {
    function JsonStoreService() {
        this._jsonChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.historyLimit = 5;
        this.history = Array();
    }
    JsonStoreService.prototype.setIn = function (path, value) {
        // immutablejs setIn creates Map for keys that don't exist in path
        // therefore List() should be set manually for some of those keys.
        for (var i = 0; i < path.length - 1; i++) {
            var pathToIndex = path.slice(0, i + 1);
            // create a list for a key if the next key is a number.
            if (!this.json.hasIn(pathToIndex) && typeof path[i + 1] === 'number') {
                this.json = this.json.setIn(pathToIndex, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])());
            }
        }
        this.json = this.json.setIn(path, value);
        this._jsonChange.next(this.json);
    };
    JsonStoreService.prototype.getIn = function (path) {
        return this.json.getIn(path);
    };
    JsonStoreService.prototype.removeIn = function (path) {
        this.json = this.json.removeIn(path);
        this._jsonChange.next(this.json);
    };
    JsonStoreService.prototype.setJson = function (json) {
        this.json = json;
    };
    JsonStoreService.prototype.addJsonToHistory = function () {
        this.history.push(this.json);
        if (this.history.length > this.historyLimit) {
            this.history.shift();
        }
    };
    JsonStoreService.prototype.rollbackJsonFromHistory = function () {
        var rollbackJson = this.history.pop();
        if (rollbackJson) {
            this.json = rollbackJson;
            this.jsonChange.next(this.json);
        }
    };
    Object.defineProperty(JsonStoreService.prototype, "jsonChange", {
        get: function () {
            return this._jsonChange;
        },
        enumerable: true,
        configurable: true
    });
    return JsonStoreService;
}());

JsonStoreService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
JsonStoreService.ctorParameters = function () { return []; };


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_util_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonUtilService; });
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


var JsonUtilService = (function () {
    function JsonUtilService(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    /**
     * Returns value of the property located in dot separated path of json.
     */
    JsonUtilService.prototype.getValueInPath = function (json, path) {
        var pathElements = this.pathUtilService.toPathArray(path);
        var value = json;
        pathElements.forEach(function (pathElement) {
            value = value[pathElement];
            if (!value) {
                throw new Error("\"" + pathElement + "\" of given path not defined in given json");
            }
        });
        return value;
    };
    return JsonUtilService;
}());

JsonUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
JsonUtilService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__path_util_service__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_store_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_schema_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_util_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__path_util_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutActionService; });
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







var ShortcutActionService = (function () {
    function ShortcutActionService(emptyValueService, domUtilService, jsonStoreService, jsonSchemaService, pathUtilService) {
        this.emptyValueService = emptyValueService;
        this.domUtilService = domUtilService;
        this.jsonStoreService = jsonStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
    }
    ShortcutActionService.prototype.addToRootAction = function (path) {
        this.add(path, true);
    };
    ShortcutActionService.prototype.addAction = function (path) {
        this.add(path, false);
    };
    ShortcutActionService.prototype.add = function (path, root) {
        var _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
        this.addNewElementInArray(_path, this.jsonSchemaService.getSchemaFromPath(_path));
    };
    /**
     * @param {Array<any>} path - Path of the array parent that the element is about to be inserted
     * @param {Object} schema - Schema of the element that is about to be inserted
     */
    ShortcutActionService.prototype.addNewElementInArray = function (path, schema) {
        var _this = this;
        var itemSchema = schema['items'];
        var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        var values = this.jsonStoreService.getIn(path) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_immutable__["List"])();
        this.jsonStoreService.setIn(path, values.push(emptyValue));
        path.push(values.size);
        setTimeout(function () {
            _this.focusElementInPath(_this.pathUtilService.toPathString(path));
        });
    };
    ShortcutActionService.prototype.moveUpAction = function (path) {
        this.move(path, -1);
    };
    ShortcutActionService.prototype.moveDownAction = function (path) {
        this.move(path, 1);
    };
    /**
     * @param {Array<any>} path - Path of the element that is moved
     * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
     */
    ShortcutActionService.prototype.move = function (path, direction) {
        var _this = this;
        this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
        var index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, false);
        path[path.length - 2] = this.moveElement(index, direction, this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
        var pathString = this.pathUtilService.toPathString(path);
        setTimeout(function () {
            _this.focusElementInPath(pathString);
        });
    };
    /**
     * @param {number} index - Index of the element that is moved
     * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
     * @returns {number} - Returns the new index of the moved element
     */
    ShortcutActionService.prototype.moveElement = function (index, direction, path) {
        var values = this.jsonStoreService.getIn(path);
        var newIndex = ((index + direction) < values.size &&
            (index + direction) >= 0) ? index + direction : values.size - Math.abs((index + direction));
        var temp = values.get(index);
        values = values
            .set(index, values.get(newIndex))
            .set(newIndex, temp);
        this.jsonStoreService.setIn(path, values);
        return newIndex;
    };
    ShortcutActionService.prototype.deleteAction = function (path) {
        // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
        this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
        this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false), this.pathUtilService.getElementIndexInForwardOrReversePath(path, false));
    };
    /**
     * @param {Array<any>} path - Path of the element's array parent
     * @param {number} index - Index of the element that is deleted from array parent path
     */
    ShortcutActionService.prototype.deleteElement = function (path, index) {
        var values = this.jsonStoreService.getIn(path);
        this.jsonStoreService.setIn(path, values.remove(index));
    };
    ShortcutActionService.prototype.navigateUpAction = function (path) {
        this.navigateUpDown(path, -1);
    };
    ShortcutActionService.prototype.navigateDownAction = function (path) {
        this.navigateUpDown(path, 1);
    };
    /**
     * @param {Array<any>} path - Path of the element that is focused
     * @param {number} direction - Navigation direction. -1 for UP, +1 for DOWN
     */
    ShortcutActionService.prototype.navigateUpDown = function (path, direction) {
        var values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
        if (__WEBPACK_IMPORTED_MODULE_6_immutable__["List"].isList(values)) {
            var elemIndexInPath = this.pathUtilService.getElementIndexInForwardOrReversePath(path, true);
            if ((elemIndexInPath + direction) < values.size && (elemIndexInPath + direction) >= 0) {
                path[path.length - 2] = elemIndexInPath + direction;
            }
            else {
                path[path.length - 2] = values.size - Math.abs((elemIndexInPath + direction));
            }
            var pathString = this.pathUtilService.toPathString(path);
            this.domUtilService.focusAndSelectFirstEditableChildById(pathString);
        }
    };
    ShortcutActionService.prototype.navigateLeftAction = function (path) {
        this.navigateRightLeft(path, -1);
    };
    ShortcutActionService.prototype.navigateRightAction = function (path) {
        this.navigateRightLeft(path, 1);
    };
    /**
     * @param {Array<any>} path - Path of the element that is focused
     * @param {number} direction - Navigation direction. -1 for LEFT, +1 for RIGHT
     */
    ShortcutActionService.prototype.navigateRightLeft = function (path, direction) {
        var pathString = this.pathUtilService.toPathString(path);
        this.domUtilService.focusRightOrLeftParentCell(pathString, direction);
    };
    /**
     * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
     * @param {Array<any>} path - Path
     */
    ShortcutActionService.prototype.copyAction = function (path) {
        this.copyRowOrSchemaBelow(path, false);
    };
    /**
     * Copies the root parent element below(eg creates a new author in authors list)
     * when you edit an author's field)
     * @param {Array<any>} path - Path
     */
    ShortcutActionService.prototype.copyFromRootAction = function (path) {
        this.copyRowOrSchemaBelow(path, true);
    };
    /**
     * @param {Array<any>} originalPath - Path of the element that is copied
     * @param {boolean} root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
     * for usage as in `copyAction`
     */
    ShortcutActionService.prototype.copyRowOrSchemaBelow = function (originalPath, root) {
        var _this = this;
        var arrayParentPath = this.pathUtilService.getNearestOrRootArrayParentInPath(originalPath, root);
        if (this.jsonSchemaService.getSchemaFromPath(arrayParentPath)['items'].hasOwnProperty('properties')) {
            var elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
            var valuesList = this.jsonStoreService.getIn(arrayParentPath) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_immutable__["List"])();
            var newValue = valuesList.get(elemIndex);
            var newPath = arrayParentPath.concat(elemIndex + 1);
            var newPathString_1 = this.pathUtilService.toPathString(newPath);
            if (!root) {
                newValue = newValue.set(originalPath[originalPath.length - 1]);
                newPathString_1 = "" + newPathString_1 + this.pathUtilService.separator + originalPath[originalPath.length - 1];
            }
            this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
            setTimeout(function () {
                _this.focusElementInPath(newPathString_1);
            });
        }
    };
    ShortcutActionService.prototype.focusElementInPath = function (path) {
        this.domUtilService.flashElementById(path);
        this.domUtilService.focusAndSelectFirstEditableChildById(path);
    };
    ShortcutActionService.prototype.generateShortcutAction = function (action) {
        var _this = this;
        return function (event) {
            event.preventDefault();
            var eventTarget = event.target;
            _this[action](_this.pathUtilService.toPathArray(eventTarget.getAttribute('data-path')));
            return false;
        };
    };
    return ShortcutActionService;
}());

ShortcutActionService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
ShortcutActionService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__empty_value_service__["a" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__dom_util_service__["a" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__json_store_service__["a" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__json_schema_service__["a" /* JsonSchemaService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__path_util_service__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(397);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(http, config) {
        var _this = this;
        this.http = http;
        this.config = config;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].zip(this.http.get('./assets/mock-data/record.json'), this.http.get('./assets/mock-data/schema.json'), function (recordRes, schemaRes) {
            return {
                record: recordRes.json(),
                schema: schemaRes.json()
            };
        }).subscribe(function (data) {
            _this.record = data.record; // set ./assets/mock-data/record.json
            _this.schema = data.schema; // set ./assets/mock-data/schema.json
        });
    }
    AppComponent.prototype.onRecordChange = function (record) {
        this.record = record;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        // tslint:disable-next-line
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
        styles: [__webpack_require__(582)],
        template: "\n    <json-editor *ngIf=\"record && schema\" \n      [config]=\"config.jsonEditorConfig\"\n      [record]=\"record\"\n      (onRecordChange)=\"onRecordChange($event)\"\n      [schema]=\"schema\">\n    </json-editor>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dist__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__dist__["a" /* JsonEditorModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(396);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/index.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/environment.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/polyfills.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 187,
	"./af.js": 187,
	"./ar": 194,
	"./ar-dz": 188,
	"./ar-dz.js": 188,
	"./ar-kw": 189,
	"./ar-kw.js": 189,
	"./ar-ly": 190,
	"./ar-ly.js": 190,
	"./ar-ma": 191,
	"./ar-ma.js": 191,
	"./ar-sa": 192,
	"./ar-sa.js": 192,
	"./ar-tn": 193,
	"./ar-tn.js": 193,
	"./ar.js": 194,
	"./az": 195,
	"./az.js": 195,
	"./be": 196,
	"./be.js": 196,
	"./bg": 197,
	"./bg.js": 197,
	"./bn": 198,
	"./bn.js": 198,
	"./bo": 199,
	"./bo.js": 199,
	"./br": 200,
	"./br.js": 200,
	"./bs": 201,
	"./bs.js": 201,
	"./ca": 202,
	"./ca.js": 202,
	"./cs": 203,
	"./cs.js": 203,
	"./cv": 204,
	"./cv.js": 204,
	"./cy": 205,
	"./cy.js": 205,
	"./da": 206,
	"./da.js": 206,
	"./de": 209,
	"./de-at": 207,
	"./de-at.js": 207,
	"./de-ch": 208,
	"./de-ch.js": 208,
	"./de.js": 209,
	"./dv": 210,
	"./dv.js": 210,
	"./el": 211,
	"./el.js": 211,
	"./en-au": 212,
	"./en-au.js": 212,
	"./en-ca": 213,
	"./en-ca.js": 213,
	"./en-gb": 214,
	"./en-gb.js": 214,
	"./en-ie": 215,
	"./en-ie.js": 215,
	"./en-nz": 216,
	"./en-nz.js": 216,
	"./eo": 217,
	"./eo.js": 217,
	"./es": 219,
	"./es-do": 218,
	"./es-do.js": 218,
	"./es.js": 219,
	"./et": 220,
	"./et.js": 220,
	"./eu": 221,
	"./eu.js": 221,
	"./fa": 222,
	"./fa.js": 222,
	"./fi": 223,
	"./fi.js": 223,
	"./fo": 224,
	"./fo.js": 224,
	"./fr": 227,
	"./fr-ca": 225,
	"./fr-ca.js": 225,
	"./fr-ch": 226,
	"./fr-ch.js": 226,
	"./fr.js": 227,
	"./fy": 228,
	"./fy.js": 228,
	"./gd": 229,
	"./gd.js": 229,
	"./gl": 230,
	"./gl.js": 230,
	"./gom-latn": 231,
	"./gom-latn.js": 231,
	"./he": 232,
	"./he.js": 232,
	"./hi": 233,
	"./hi.js": 233,
	"./hr": 234,
	"./hr.js": 234,
	"./hu": 235,
	"./hu.js": 235,
	"./hy-am": 236,
	"./hy-am.js": 236,
	"./id": 237,
	"./id.js": 237,
	"./is": 238,
	"./is.js": 238,
	"./it": 239,
	"./it.js": 239,
	"./ja": 240,
	"./ja.js": 240,
	"./jv": 241,
	"./jv.js": 241,
	"./ka": 242,
	"./ka.js": 242,
	"./kk": 243,
	"./kk.js": 243,
	"./km": 244,
	"./km.js": 244,
	"./kn": 245,
	"./kn.js": 245,
	"./ko": 246,
	"./ko.js": 246,
	"./ky": 247,
	"./ky.js": 247,
	"./lb": 248,
	"./lb.js": 248,
	"./lo": 249,
	"./lo.js": 249,
	"./lt": 250,
	"./lt.js": 250,
	"./lv": 251,
	"./lv.js": 251,
	"./me": 252,
	"./me.js": 252,
	"./mi": 253,
	"./mi.js": 253,
	"./mk": 254,
	"./mk.js": 254,
	"./ml": 255,
	"./ml.js": 255,
	"./mr": 256,
	"./mr.js": 256,
	"./ms": 258,
	"./ms-my": 257,
	"./ms-my.js": 257,
	"./ms.js": 258,
	"./my": 259,
	"./my.js": 259,
	"./nb": 260,
	"./nb.js": 260,
	"./ne": 261,
	"./ne.js": 261,
	"./nl": 263,
	"./nl-be": 262,
	"./nl-be.js": 262,
	"./nl.js": 263,
	"./nn": 264,
	"./nn.js": 264,
	"./pa-in": 265,
	"./pa-in.js": 265,
	"./pl": 266,
	"./pl.js": 266,
	"./pt": 268,
	"./pt-br": 267,
	"./pt-br.js": 267,
	"./pt.js": 268,
	"./ro": 269,
	"./ro.js": 269,
	"./ru": 270,
	"./ru.js": 270,
	"./sd": 271,
	"./sd.js": 271,
	"./se": 272,
	"./se.js": 272,
	"./si": 273,
	"./si.js": 273,
	"./sk": 274,
	"./sk.js": 274,
	"./sl": 275,
	"./sl.js": 275,
	"./sq": 276,
	"./sq.js": 276,
	"./sr": 278,
	"./sr-cyrl": 277,
	"./sr-cyrl.js": 277,
	"./sr.js": 278,
	"./ss": 279,
	"./ss.js": 279,
	"./sv": 280,
	"./sv.js": 280,
	"./sw": 281,
	"./sw.js": 281,
	"./ta": 282,
	"./ta.js": 282,
	"./te": 283,
	"./te.js": 283,
	"./tet": 284,
	"./tet.js": 284,
	"./th": 285,
	"./th.js": 285,
	"./tl-ph": 286,
	"./tl-ph.js": 286,
	"./tlh": 287,
	"./tlh.js": 287,
	"./tr": 288,
	"./tr.js": 288,
	"./tzl": 289,
	"./tzl.js": 289,
	"./tzm": 291,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 291,
	"./uk": 292,
	"./uk.js": 292,
	"./ur": 293,
	"./ur.js": 293,
	"./uz": 295,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 295,
	"./vi": 296,
	"./vi.js": 296,
	"./x-pseudo": 297,
	"./x-pseudo.js": 297,
	"./yo": 298,
	"./yo.js": 298,
	"./zh-cn": 299,
	"./zh-cn.js": 299,
	"./zh-hk": 300,
	"./zh-hk.js": 300,
	"./zh-tw": 301,
	"./zh-tw.js": 301
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 592;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__ = __webpack_require__(670);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__["a"]; });



/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(687);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of ng2-json-editor module.
 */



/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractFieldComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
var AbstractFieldComponent = (function (_super) {
    __extends(AbstractFieldComponent, _super);
    function AbstractFieldComponent(appGlobalsService, pathUtilService) {
        var _this = _super.call(this) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.pathUtilService = pathUtilService;
        _this.errors = [];
        return _this;
    }
    AbstractFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorsSubscription = this.appGlobalsService
            .globalErrorsSubject
            .subscribe(function (globalErrors) {
            _this.errors = globalErrors[_this.pathString] || [];
        });
    };
    AbstractFieldComponent.prototype.ngOnDestroy = function () {
        if (this.errorsSubscription) {
            this.errorsSubscription.unsubscribe();
        }
    };
    Object.defineProperty(AbstractFieldComponent.prototype, "errorNgClass", {
        get: function () {
            return {
                error: this.errors.length > 0
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFieldComponent.prototype, "isErrorTooltipEnabled", {
        get: function () {
            return this.errors && this.errors.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFieldComponent.prototype, "pathString", {
        get: function () {
            return this.pathUtilService.toPathString(this.path);
        },
        enumerable: true,
        configurable: true
    });
    return AbstractFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_tracker__["a" /* AbstractTrackerComponent */]));



/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractListFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract component to share code of common operations of all array fields
 *
 * Instance properties declared here only to resolve syntax errors.
 * Hence they need to be declared in children extending components (with decarators if necessary)
 */
var AbstractListFieldComponent = (function (_super) {
    __extends(AbstractListFieldComponent, _super);
    function AbstractListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, pathUtilService) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.pathCache = {};
        return _this;
    }
    /**
     * @param {number} index - Index of the element that is moved
     * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
     */
    AbstractListFieldComponent.prototype.moveElement = function (index, direction) {
        var newIndex = index + direction;
        // Do nothing if the last moved down or the first moved up.
        if (newIndex < 0 || newIndex >= this.values.size) {
            return;
        }
        var temp = this.values.get(index);
        this.values = this.values
            .set(index, this.values.get(newIndex))
            .set(newIndex, temp);
        this.jsonStoreService.setIn(this.path, this.values);
    };
    /**
     * @param {number} index - Index of the element to be deleted
     */
    AbstractListFieldComponent.prototype.deleteElement = function (index) {
        this.jsonStoreService.setIn(this.path, this.values.remove(index));
        this.values = this.jsonStoreService.getIn(this.path);
        var elementPathString = this.getElementPathString(index);
    };
    AbstractListFieldComponent.prototype.getElementPathString = function (index) {
        return "" + this.pathString + this.pathUtilService.separator + index;
    };
    AbstractListFieldComponent.prototype.getElementPath = function (index) {
        var valuePathString = this.getElementPathString(index);
        if (!this.pathCache[valuePathString]) {
            this.pathCache[valuePathString] = this.path.concat(index);
        }
        return this.pathCache[valuePathString];
    };
    return AbstractListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_field__["a" /* AbstractFieldComponent */]));



/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractTrackerComponent; });
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
var AbstractTrackerComponent = (function () {
    function AbstractTrackerComponent() {
    }
    AbstractTrackerComponent.prototype.trackByElement = function (index, element) {
        return element;
    };
    AbstractTrackerComponent.prototype.trackByIndex = function (index, element) {
        return index;
    };
    return AbstractTrackerComponent;
}());



/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFieldDropdownComponent; });
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


var AddFieldDropdownComponent = (function () {
    function AddFieldDropdownComponent(elementRef, domUtilService, emptyValueService, pathUtilService) {
        this.elementRef = elementRef;
        this.domUtilService = domUtilService;
        this.emptyValueService = emptyValueService;
        this.pathUtilService = pathUtilService;
        this.onFieldAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.expression = '';
    }
    Object.defineProperty(AddFieldDropdownComponent.prototype, "disabled", {
        get: function () {
            return Object.keys(this.schema).length === this.fields.size;
        },
        enumerable: true,
        configurable: true
    });
    AddFieldDropdownComponent.prototype.onDropdownShown = function () {
        var _this = this;
        setTimeout(function () {
            return _this.domUtilService.focusFirstInputChildByElement(_this.elementRef.nativeElement);
        });
    };
    AddFieldDropdownComponent.prototype.onFieldSelect = function (field) {
        var _this = this;
        this.onFieldAdd.emit(field);
        var newFieldPathString = "" + this.pathString + this.pathUtilService.separator + field;
        setTimeout(function () { return _this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString); });
    };
    return AddFieldDropdownComponent;
}());

AddFieldDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'add-field-dropdown',
                styles: [".btn-add-field-dropdown { padding: 0 5px 0 0; font-size: 21px; opacity: 0.4; border: 0; background: transparent; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; color: darkslategray; margin-bottom: 2px; float: right; } .btn-add-field-dropdown:hover { color: blue; opacity: 0.6; } .dropdown-filter-container { padding-left: 3px; padding-right: 3px; } .dropdown-filter-container input { width: 100%; } .add-field-dropdown-container { width: 100%; } "],
                template: "<div *ngIf=\"!disabled\" class=\"btn-group add-field-dropdown-container\" dropdown keyboardNav=\"true\" (onShown)=\"onDropdownShown()\"> <button id=\"simple-btn-keyboard-nav\" type=\"button\" class=\"btn-add-field-dropdown\" dropdownToggle><ng-content></ng-content> <span class=\"caret\"></span></button> <ul class=\"dropdown-menu\" *dropdownMenu aria-labelledby=\"simple-btn-keyboard-nav\"> <li class=\"dropdown-filter-container\"> <input [(ngModel)]=\"expression\" placeholder=\"filter\" (click)=\"$event.stopPropagation()\"> </li> <li class=\"divider dropdown-divider\"></li> <li *ngFor=\"let key of schema | differentKeys:fields | filterByExpression:expression\"> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onFieldSelect(key)\">{{key}}</a> </li> </ul> </div>"
            },] },
];
/** @nocollapse */
AddFieldDropdownComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["m" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* PathUtilService */], },
]; };
AddFieldDropdownComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'fields': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'onFieldAdd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__ = __webpack_require__(671);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__["a"]; });



/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewElementButtonComponent; });



var AddNewElementButtonComponent = (function () {
    function AddNewElementButtonComponent(domUtilService, emptyValueService, jsonStoreService, pathUtilService) {
        this.domUtilService = domUtilService;
        this.emptyValueService = emptyValueService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
    }
    AddNewElementButtonComponent.prototype.addNewElement = function () {
        var _this = this;
        var itemSchema = this.schema['items'];
        var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        var values = this.jsonStoreService.getIn(this.path) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
        this.jsonStoreService.setIn(this.path, values.push(emptyValue));
        // focus on the new added element
        var newElementPath = this.path.concat(values.size);
        var newElementPathString = this.pathUtilService.toPathString(newElementPath);
        setTimeout(function () {
            _this.domUtilService.focusAndSelectFirstEditableChildById(newElementPathString);
        });
    };
    return AddNewElementButtonComponent;
}());

AddNewElementButtonComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'add-new-element-button',
                styles: ["div.button-container { display: inline-block; } .btn-new-field { font-size: 13px; font-weight: bold; text-shadow: 0 1px 0 #fff; opacity: 0.5; background: transparent; border: 0; bottom: -5px; left: -5px; padding: 0px; } .btn-new-field:hover { color: green; opacity: 0.6; } "],
                template: "<div class=\"button-container\"> <button type=\"button\" class=\"btn-new-field\" (click)=\"addNewElement()\">Add new</button> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
AddNewElementButtonComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["m" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
AddNewElementButtonComponent.propDecorators = {
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__ = __webpack_require__(673);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__["a"]; });



/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnyTypeFieldComponent; });
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


/**
 * AnyFieldComponent
 *
 * This is a dummy component that has no logic, just passes @Input to its child and
 * propagates its child's output to its parent.
 *
 * IMPORTANT:
 * On the other hand it has smart template which has logic to decide which type of
 * component to use according to schema.
 */
var AnyTypeFieldComponent = (function () {
    function AnyTypeFieldComponent(componentTypeService, appGlobalsService) {
        this.componentTypeService = componentTypeService;
        this.appGlobalsService = appGlobalsService;
    }
    Object.defineProperty(AnyTypeFieldComponent.prototype, "componentType", {
        get: function () {
            return this.componentTypeService.getComponentType(this.schema);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnyTypeFieldComponent.prototype, "isDisabled", {
        get: function () {
            return this.schema && this.schema['disabled'] && !this.appGlobalsService.adminMode;
        },
        enumerable: true,
        configurable: true
    });
    return AnyTypeFieldComponent;
}());

AnyTypeFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'any-type-field',
                styles: [""],
                template: "<div [ngClass]=\"{disableCursorClass: isDisabled}\"> <div [ngSwitch]=\"componentType\" [ngClass]=\"{disableEventsClass: isDisabled}\"> <div *ngSwitchCase=\"'table-list'\"> <table-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></table-list-field> </div> <div *ngSwitchCase=\"'complex-list'\"> <complex-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></complex-list-field> </div> <div *ngSwitchCase=\"'primitive-list'\"> <primitive-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></primitive-list-field> </div> <div *ngSwitchCase=\"'object'\"> <object-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></object-field> </div> <div *ngSwitchCase=\"'ref'\"> <ref-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></ref-field> </div> <div *ngSwitchCase=\"'value-change-watcher'\"> <value-change-watcher [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></value-change-watcher> </div> <div *ngSwitchDefault> <primitive-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></primitive-field> </div> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
AnyTypeFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* ComponentTypeService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AppGlobalsService */], },
]; };
AnyTypeFieldComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__ = __webpack_require__(675);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__["a"]; });



/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteInputComponent; });
/*
 * This file is part of INSPIRE.
 * Copyright (C) 2016 CERN.
 *
 * INSPIRE is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/




var AutocompleteInputComponent = (function () {
    function AutocompleteInputComponent(remoteAutocompletionService, jsonStoreService, appGlobalsService) {
        this.remoteAutocompletionService = remoteAutocompletionService;
        this.jsonStoreService = jsonStoreService;
        this.appGlobalsService = appGlobalsService;
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onKeypress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    AutocompleteInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if url option set then use remote autocompletion service
        if (this.autocompletionConfig.url) {
            this.typeaheadOptionField = 'text';
            this.dataSource = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                if (_this.value && _this.value.length > 0) {
                    observer.next(_this.value);
                }
            }).mergeMap(function (token) {
                return _this.remoteAutocompletionService.getAutocompletionResults(_this.autocompletionConfig, token);
            });
        }
        else {
            this.dataSource = this.autocompletionConfig.source;
        }
    };
    Object.defineProperty(AutocompleteInputComponent.prototype, "customItemTemplate", {
        get: function () {
            return this.appGlobalsService.templates[this.autocompletionConfig.itemTemplateName];
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteInputComponent.prototype.onModelChange = function (value) {
        this.value = value;
        this.onValueChange.emit(value);
    };
    AutocompleteInputComponent.prototype.onCompletionSelect = function (completionItem) {
        var onCompletionSelect = this.autocompletionConfig.onCompletionSelect;
        // if callback set and it is remote autocompletion source
        if (onCompletionSelect && this.typeaheadOptionField) {
            // .slice() is used to pass by value instead of reference
            onCompletionSelect(this.path.slice(), completionItem, this.jsonStoreService);
        }
    };
    return AutocompleteInputComponent;
}());

AutocompleteInputComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'autocomplete-input',
                styles: [""],
                template: "<div class=\"autocomplete-container\"> <input attr.data-path=\"{{pathString}}\" [ngModel]=\"value\" (ngModelChange)=\"onModelChange($event)\" (keypress)=\"onKeypress.emit($event)\" (blur)=\"onBlur.emit()\" [typeahead]=\"dataSource\" [typeaheadOptionsLimit]=\"autocompletionConfig.size\" [typeaheadOptionField]=\"typeaheadOptionField\" [typeaheadItemTemplate]=\"customItemTemplate\" (typeaheadOnSelect)=\"onCompletionSelect($event.item)\" [typeaheadWaitMs]=\"200\" [tabindex]=\"tabIndex\" placeholder=\"{{placeholder}}\"> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
AutocompleteInputComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["r" /* RemoteAutocompletionService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* AppGlobalsService */], },
]; };
AutocompleteInputComponent.propDecorators = {
    'autocompletionConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'onValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'onKeypress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__ = __webpack_require__(677);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__["a"]; });



/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexListFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ComplexListFieldComponent = (function (_super) {
    __extends(ComplexListFieldComponent, _super);
    function ComplexListFieldComponent(appGlobalsService, jsonStoreService, domUtilService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, jsonStoreService, pathUtilService) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.domUtilService = domUtilService;
        _this.pathUtilService = pathUtilService;
        _this.currentFound = 0;
        _this.currentPage = 1;
        return _this;
    }
    ComplexListFieldComponent.prototype.ngOnInit = function () {
        this.navigator = this.schema['longListNavigatorConfig'];
        if (this.navigator) {
            this.paginatedIndices = this.getIndicesForPage(this.currentPage);
        }
        else {
            // set all indices as paginated indices if pagination is not enabled.
            this.paginatedIndices = this.values.keySeq().toArray();
        }
    };
    ComplexListFieldComponent.prototype.ngOnChanges = function (changes) {
        var valuesChange = changes['values'];
        if (valuesChange && !valuesChange.isFirstChange()) {
            var preSize = valuesChange.previousValue.size;
            var curSize = valuesChange.currentValue.size;
            if (curSize !== preSize) {
                if (this.navigator) {
                    var lastPage = this.getPageForIndex(curSize - 1);
                    // change the page if a new element is added and it's not on the last page
                    if (curSize > preSize && this.currentPage !== lastPage) {
                        this.currentPage = lastPage;
                    }
                    else {
                        this.paginatedIndices = this.getIndicesForPage(this.currentPage);
                    }
                }
                else {
                    this.paginatedIndices = this.values.keySeq().toArray();
                }
            }
        }
    };
    ComplexListFieldComponent.prototype.onFindClick = function () {
        var _this = this;
        // clear for new search
        this.foundIndices = [];
        this.currentFound = 0;
        // search to look for the first match
        if (this.navigator.findSingle) {
            var foundIndex = this.values
                .findIndex(function (value) { return _this.navigator.findSingle(value, _this.findExpression); });
            if (foundIndex > -1) {
                this.foundIndices.push(foundIndex);
            }
        }
        // search to look for all matches
        if (this.foundIndices.length === 0 && this.navigator.findMultiple) {
            this.values
                .forEach(function (value, index) {
                if (_this.navigator.findMultiple(value, _this.findExpression)) {
                    _this.foundIndices.push(index);
                }
            });
        }
        // navigate to first search result if found any
        if (this.foundIndices.length > 0) {
            this.navigateToItem(this.foundIndices[0]);
            this.shouldDisplayFoundNavigation = true;
        }
        else {
            this.shouldDisplayFoundNavigation = false;
        }
    };
    ComplexListFieldComponent.prototype.onFindInputKeypress = function (key) {
        if (key === 'Enter') {
            this.onFindClick();
        }
    };
    ComplexListFieldComponent.prototype.onFoundNavigate = function (direction) {
        // No bound checks, since the buttons are disabled in these cases.
        this.currentFound += direction;
        this.navigateToItem(this.foundIndices[this.currentFound]);
    };
    ComplexListFieldComponent.prototype.navigateToItem = function (index) {
        var _this = this;
        this.currentPage = this.getPageForIndex(index);
        var itemPath = this.path.concat(index);
        var itemId = this.pathUtilService.toPathString(itemPath);
        setTimeout(function () { return _this.domUtilService.focusAndSelectFirstEditableChildById(itemId); });
    };
    ComplexListFieldComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
        this.paginatedIndices = this.getIndicesForPage(page);
    };
    ComplexListFieldComponent.prototype.getIndicesForPage = function (page) {
        var start = (page - 1) * this.navigator.itemsPerPage;
        var indices = Array.apply(0, Array(this.navigator.itemsPerPage))
            .map(function (el, index) { return start + index; });
        // check if the indices includes some numbers that are out of values index range.
        var lastIndexDiff = indices[indices.length - 1] - (this.values.size - 1);
        if (lastIndexDiff > 0) {
            indices.splice(indices.length - lastIndexDiff);
        }
        return indices;
    };
    ComplexListFieldComponent.prototype.getPageForIndex = function (index) {
        return Math.floor((index / this.navigator.itemsPerPage) + 1);
    };
    return ComplexListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));

ComplexListFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'complex-list-field',
                styles: [".complex-list-field-wrapper { margin: 5px 15px 15px 15px; padding: 5px; box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25); } .navigator-container { width: 100%; } .navigator-item-right { float: right; padding-right: 13px !important; } .navigator-item-right label { position: relative; top: -19px; } .navigator-item-left { padding-left: 13px !important; } .transparent { background: transparent; } .borderless { border: none; } .find-button { color: darkslategray; opacity: 0.83; } .find-button .fa-search { opacity: 0.83; } "],
                template: "<div [id]=\"pathString\"> <!-- Navigator --> <table *ngIf=\"navigator\" class=\"navigator-container\"> <tr> <td class=\"form-group navigator-item-left\"> <div class=\"input-group input-group-sm\"> <span class=\"input-group-btn\"> <button type=\"button\" class=\"btn btn-default find-button\" (click)=\"onFindClick()\"> <i class=\"fa fa-search\" aria-hidden=\"true\"></i> </button> </span> <input type=\"search\" class=\"form-control\" [(ngModel)]=\"findExpression\" (keypress)=\"onFindInputKeypress($event.key)\" placeholder=\"Find\" /> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound <= 0\" (click)=\"onFoundNavigate(-1)\">❮</button> </span> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound >= foundIndices.length - 1\" (click)=\"onFoundNavigate(1)\">❯</button> </span> <span *ngIf=\"foundIndices\" [ngSwitch]=\"foundIndices.length\" class=\"input-group-addon transparent borderless\"> <span *ngSwitchCase=\"0\"> Nothing found </span> <span *ngSwitchDefault> {{currentFound + 1}} of {{foundIndices.length}} </span> </span> </div> </td> <td class=\"navigator-item-right\"> <label> {{paginatedIndices[0] + 1}}-{{paginatedIndices[paginatedIndices.length - 1] + 1}} of {{values.size}} {{path[path.length - 1]}} </label> <br> <pagination [totalItems]=\"values.size\" [ngModel]=\"currentPage\" [maxSize]=\"navigator.maxVisiblePageCount\" [itemsPerPage]=\"navigator.itemsPerPage\" class=\"pagination-sm pagination-top\" [boundaryLinks]=\"true\" [rotate]=\"false\" [firstText]=\"'❮❮'\" [previousText]=\"'❮'\" [nextText]=\"'❯'\" [lastText]=\"'❯❯'\" (pageChanged)=\"onPageChange($event.page)\"></pagination> </td> </tr> </table> <!-- Elements --> <div *ngFor=\"let pIndex of paginatedIndices; let i = index; trackBy:trackByIndex\"> <div class=\"complex-list-field-wrapper\"> <object-field [value]=\"values.get(pIndex)\" [schema]=\"schema.items\" [path]=\"getElementPath(pIndex)\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\"></list-action-group> </object-field> </div> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ComplexListFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["m" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
ComplexListFieldComponent.propDecorators = {
    'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__ = __webpack_require__(679);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__["a"]; });



/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorPreviewerComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EditorPreviewerComponent = (function (_super) {
    __extends(EditorPreviewerComponent, _super);
    function EditorPreviewerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPreviewerComponent.prototype.openUrlInNewTab = function (url) {
        window.open(url);
    };
    return EditorPreviewerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));

EditorPreviewerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'editor-previewer',
                styles: ["div.preview-container { width: 100%; overflow-y: auto; height: 90vh; } span.preview-link { color: #337ab7; cursor: pointer; } span.preview-link:hover { color: cornflowerblue; } "],
                template: "<div> <tabset> <tab *ngFor=\"let preview of previews trackBy:trackByElement\" [heading]=\"preview.name\"> <div [ngSwitch]=\"preview.type\"> <div *ngSwitchCase=\"'html'\" class=\"preview-container\"> <ng-template tabHeading> <span class=\"preview-link\" (click)=\"openUrlInNewTab(preview.url)\"> <i class=\"fa fa-external-link\"></i> </span> </ng-template> <html-view [url]=\"preview.url\"></html-view> </div> </div> </tab> </tabset> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
EditorPreviewerComponent.ctorParameters = function () { return []; };
EditorPreviewerComponent.propDecorators = {
    'previews': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__ = __webpack_require__(681);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__["a"]; });



/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceComponent; });
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



var FindReplaceComponent = (function () {
    function FindReplaceComponent(domSanitizer, findReplaceAllService, jsonStoreService, modalService) {
        this.domSanitizer = domSanitizer;
        this.findReplaceAllService = findReplaceAllService;
        this.jsonStoreService = jsonStoreService;
        this.modalService = modalService;
    }
    FindReplaceComponent.prototype.onKeypress = function (key) {
        var _this = this;
        if (key === 'Enter') {
            var value = this.jsonStoreService.getIn(this.path);
            var result = this.findReplaceAllService
                .findReplaceInImmutable(value, this.schema, this.find, this.replace, this.matchWhole);
            this.replaced = result.replaced;
            var stringyfiedDiffHtml = JSON.stringify(result.diffHtml, undefined, 2);
            this.modalService.displayModal({
                title: 'After Replace',
                bodyHtml: this.domSanitizer.bypassSecurityTrustHtml("<pre class=\"max-height-70-vh\"><code>" + stringyfiedDiffHtml + "</code></pre>"),
                type: 'confirm',
                onConfirm: function () {
                    _this.modalService.closeCurrentModal();
                    _this.jsonStoreService.setIn(_this.path, _this.replaced);
                }
            });
        }
    };
    return FindReplaceComponent;
}());

FindReplaceComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'find-replace',
                styles: [".find-replace-container { margin: 4px 3px 3px 2px; } .find-replace-container input { font-size: 13px; } .top-container-item { margin-bottom: 3px; } label { font-size: 12px; font-weight: 400; } .horizontal-padding, .find-replace-container div { padding-right: 20px; padding-left: 20px; } .match-whole-container input[type=checkbox] { width: 100%; } "],
                template: "<div class=\"find-replace-container\"> <div class=\"top-container-item\"> <input placeholder=\"Find\" [(ngModel)]=\"find\" (keypress)=\"onKeypress($event.key)\" /> </div> <div> <input placeholder=\"Replace\" [(ngModel)]=\"replace\" (keypress)=\"onKeypress($event.key)\" /> </div> <div class=\"match-whole-container\"> <input type=\"checkbox\" [(ngModel)]=\"matchWhole\" (keypress)=\"onKeypress($event.key)\" tooltip=\"Match Whole\"/> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
FindReplaceComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["q" /* FindReplaceAllService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["p" /* ModalService */], },
]; };
FindReplaceComponent.propDecorators = {
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_replace_component__ = __webpack_require__(683);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__find_replace_component__["a"]; });



/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlViewComponent; });
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

var HtmlViewComponent = (function () {
    function HtmlViewComponent() {
    }
    return HtmlViewComponent;
}());

HtmlViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'html-view',
                styles: ["iframe { height: 100%; width: 100%; } "],
                template: "<iframe [src]=\"url | sanitizeUrl\"></iframe>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
HtmlViewComponent.ctorParameters = function () { return []; };
HtmlViewComponent.propDecorators = {
    'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_view_component__ = __webpack_require__(685);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__html_view_component__["a"]; });



/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json_editor_module__ = __webpack_require__(689);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__json_editor_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pipes__ = __webpack_require__(382);
/* unused harmony namespace reexport */
// export everything in order to be AoT compatible





/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_tracker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonEditorComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var JsonEditorComponent = (function (_super) {
    __extends(JsonEditorComponent, _super);
    function JsonEditorComponent(http, appGlobalsService, jsonStoreService, jsonUtilService, jsonSchemaService, recordFixerService, schemaFixerService, shortcutsService, tabsUtilService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.jsonUtilService = jsonUtilService;
        _this.jsonSchemaService = jsonSchemaService;
        _this.recordFixerService = recordFixerService;
        _this.schemaFixerService = schemaFixerService;
        _this.shortcutsService = shortcutsService;
        _this.tabsUtilService = tabsUtilService;
        _this.errorMap = {};
        _this.templates = {};
        _this.onRecordChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        _this.pathCache = {};
        return _this;
    }
    JsonEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!(this.schema && this.record)) {
            throw new Error("[schema] or [record] is undefined \n        if you are fetching them async then please consider using:\n          <json-editor *ngIf=\"mySchema && myRecord\" ...> </json-editor>\n        in order to wait for them to be fetched before initializing json-editor\n      ");
        }
        else if (!this.config) {
            this.config = {};
            console.warn("[config] is undefined, make sure that is intended.");
        }
        this.schema = this.schemaFixerService.fixSchema(this.schema, this.config.schemaOptions);
        this.record = this.recordFixerService.fixRecord(this.record, this.schema);
        this.extractPreviews();
        // set errors that is used by other components
        this.appGlobalsService.globalErrors = this.errorMap;
        this.appGlobalsService.templates = this.templates;
        // use fromJS to convert input to immutable then pass it to the store
        this._record = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])(this.record);
        this.jsonStoreService.setJson(this._record);
        // listen for all changes on json
        this.jsonStoreService.jsonChange
            .skipWhile(function (json) { return json === _this._record; })
            .subscribe(function (json) {
            _this._record = json;
            if (_this.config.tabsConfig) {
                // update tab groups!
                _this.tabNameToSubRecordMap = _this.tabsUtilService.getTabNameToSubRecordMap(json, _this.keyToTabName);
            }
            // emit the change as plain JS object
            _this.onRecordChange.emit(json.toJS());
        });
        this.jsonSchemaService.setSchema(this.schema);
        // setup variables need for tab grouping.
        if (this.config.tabsConfig) {
            this.keyToTabName = this.tabsUtilService.getKeyToTabName(this.config.tabsConfig, this.schema);
            this.tabNameToSubRecordMap = this.tabsUtilService.getTabNameToSubRecordMap(this._record, this.keyToTabName);
            this.tabNameToSubSchema = this.tabsUtilService.getTabNameToSubSchema(this.schema, this.keyToTabName);
            this.tabNames = this.tabNameToSubRecordMap.keySeq().toArray();
        }
    };
    /**
     * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
     */
    JsonEditorComponent.prototype.extractPreviews = function () {
        var _this = this;
        if (!this.isPreviewerDisabled) {
            // if url is not set directly, populate it
            this.previews = [];
            this.config.previews
                .forEach(function (previewConfig) {
                var url;
                if (previewConfig.url) {
                    url = previewConfig.url;
                }
                else if (previewConfig.getUrl) {
                    url = previewConfig.getUrl(_this.record);
                }
                else if (previewConfig.urlPath) {
                    try {
                        url = _this.jsonUtilService.getValueInPath(_this.record, previewConfig.urlPath);
                    }
                    catch (error) {
                        console.warn("Path " + previewConfig.urlPath + " in preview config is not present in the input record");
                    }
                }
                else {
                    throw new Error('Either url, urlPath or getUrl should be set for a preview');
                }
                if (url) {
                    _this.previews.push({
                        name: previewConfig.name,
                        type: previewConfig.type,
                        url: url
                    });
                }
            });
        }
    };
    Object.defineProperty(JsonEditorComponent.prototype, "shortcuts", {
        get: function () {
            return this.shortcutsService.getShortcutsWithConfig(this.config.shortcuts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonEditorComponent.prototype, "isPreviewerDisabled", {
        get: function () {
            return this.config.previews === undefined || this.config.previews.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonEditorComponent.prototype, "rightContainerColMdClass", {
        get: function () {
            return this.isPreviewerHidden ? 'col-md-1' : 'col-md-4';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonEditorComponent.prototype, "leftContainerColMdClass", {
        get: function () {
            if (!this.isPreviewerDisabled) {
                return this.isPreviewerHidden ? 'col-md-11 nav-tabs-col-md-9-8' : 'col-md-8 nav-tabs-col-md-9';
            }
            else {
                return 'col-md-12 nav-tabs-col-md-10';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonEditorComponent.prototype, "activeTabName", {
        set: function (tabName) {
            this.appGlobalsService.activeTabName = tabName;
        },
        enumerable: true,
        configurable: true
    });
    return JsonEditorComponent;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_tracker__["a" /* AbstractTrackerComponent */]));

JsonEditorComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'json-editor',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
                styles: ["body, html { height: 100%; } .editor-container { height: 100%; margin-right: 0px; margin-left: 0px; } .editor-container .row { margin-left: 0px; margin-right: 0px; } table { margin-bottom: 0px !important; } .main-container { height: 100%; overflow: auto; } .left.main-container { padding: 0px; overflow: hidden; } .left.main-container .tab-content, .left.main-container .tab-pane { height: 100%; } .left.main-container .nav-tabs { float: right; padding-left: 1px; } .menu-container { background-color: #1D2D3D; height: 100%; overflow: auto; } .menu-container div.dropdown { width: 100%; } .menu-container ul.dropdown-menu { right: 0px; } .menu-container button.btn-add-field-dropdown { background: white; padding: 5px; opacity: 0.9; line-height: normal; font-size: 16px; width: 100%; } .menu-container button.btn-add-field-dropdown:hover { opacity: 1; color: black; } bs-dropdown-container { position: inherit !important; } #editor { font-size: 13px; border: 2px solid #a5adb5; } #editor .field-wrapper { border-bottom: 2px solid #a5adb5; } #editor td { background-color: #f9f9f9; border: none; padding: 0; } #editor td > * { vertical-align: middle; } #editor th { font-weight: 400; padding: 1px 0px 1px 3px; } #editor td.label-holder { width: 1%; white-space: nowrap; padding-right: 5px; } #editor td.error { background-color: #f2968d !important; } #editor tbody { border: none; } .editor-btn-delete { font-size: 16px; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; opacity: 0.2; background: transparent; border: 0; padding: 0 0 3px 3px; } .editor-btn-delete:hover { color: red; opacity: 0.6; } .editor-btn-delete.editor-btn-delete-text { font-size: 13px; opacity: 0.5; padding: 0px; } .editor-btn-move-down { padding-bottom: 0; } .editor-btn-move-up, .editor-btn-move-down { padding: 0; font-size: 11px; border: 0; background: transparent; opacity: 0.2; } .editor-btn-move-up:hover, .editor-btn-move-down:hover { opacity: 0.6; } ul.pagination-top { margin: -16px 0px 0px 0px; } td.button-holder, th.button-holder { width: 46px; } div.error { background: #f2968d; } label { color: #c1c1c1; } .flash { border: 2px solid yellow; } table.editable-inner-table { table-layout: fixed; } table.editable-inner-table label { display: inline; font-weight: initial; padding-left: 5px; } table.editable-inner-table .dropdown-menu { left: inherit; right: 0px; min-width: 100px; } .disableCursorClass { cursor: not-allowed; } .disableEventsClass { pointer-events: none; } .disableEventsClass input, .disableEventsClass button, .disableEventsClass div[contenteditable=true], .disableEventsClass a, .disableEventsClass i, .disableEventsClass span { opacity: .5; } .title-dropdown-item button { width: 100%; text-align: left; padding-left: 20px !important; padding-right: 20px !important; } .title-dropdown-item:hover { background: #f5f5f5; } .match-whole-container .tooltip.top .tooltip-arrow { border-top-color: transparent; } .match-whole-container .tooltip { width: 90%; } .value-container { background-color: #edf6fd !important; } button.btn-toggle { float: right; margin-top: 5px; margin-right: 5px; } .autocomplete-container .dropdown { position: relative !important; top: 0px !important; left: 0px !important; } .col-md-override-2-2 { width: 18.181818% !important; } .col-md-override-9-8 { width: 81.81818% !important; } .nav-tabs-col-md-9-8 .nav-tabs { width: 81.81818%; } .nav-tabs-col-md-9 .nav-tabs { width: 75%; } .nav-tabs-col-md-10 .nav-tabs { width: 83.33333%; } .list-action-group-container { text-align: right; } .list-action-group-container button { font-size: 21px !important; } .list-action-group-container i { font-size: 15px !important; } .max-height-90-vh { max-height: 90vh; } .max-height-70-vh { max-height: 70vh; } "],
                template: "<div class=\"row editor-container\"> <div id=\"left-main-container\" class=\"left main-container\" [ngClass]=\"leftContainerColMdClass\" [shortcuts]=\"shortcuts\"> <tabset *ngIf=\"config.tabsConfig\"> <tab *ngFor=\"let tabName of tabNames; trackBy:trackByElement\" [heading]=\"tabName\" (select)=\"activeTabName = tabName\"> <sub-record [value]=\"tabNameToSubRecordMap.get(tabName)\" [tabName]=\"tabName\" [schema]=\"tabNameToSubSchema[tabName]\" [enableAdminModeSwitch]=\"config.enableAdminModeSwitch\" [isPreviewerHidden]=\"isPreviewerHidden\" [isPreviewerDisabled]=\"isPreviewerDisabled\"></sub-record> </tab> </tabset> <sub-record *ngIf=\"!config.tabsConfig\" [value]=\"_record\" [schema]=\"schema\" [enableAdminModeSwitch]=\"config.enableAdminModeSwitch\" [isPreviewerHidden]=\"isPreviewerHidden\" [isPreviewerDisabled]=\"isPreviewerDisabled\"></sub-record> </div> <div id=\"right-main-container\" *ngIf=\"!isPreviewerDisabled\" [ngClass]=\"rightContainerColMdClass\" class=\"right main-container\"> <button id=\"btn-preview-toggle\" type=\"button\" class=\"btn btn-default btn-toggle\" (click)=\"isPreviewerHidden = !isPreviewerHidden\">{{isPreviewerHidden ? \"Show Preview\" : \"Hide Preview\"}}</button> <editor-previewer [hidden]=\"isPreviewerHidden\" [previews]=\"previews\"> </editor-previewer> </div> </div> <!-- Modal View controlled by ModalService --> <modal-view> </modal-view>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
JsonEditorComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["f" /* JsonUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["g" /* JsonSchemaService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["h" /* RecordFixerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["i" /* SchemaFixerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["j" /* ShortcutService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["k" /* TabsUtilService */], },
]; };
JsonEditorComponent.propDecorators = {
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'errorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'templates': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'onRecordChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slide_toggle__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_field_dropdown__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_new_element_button__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__any_type_field__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autocomplete_input__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__complex_list_field__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editor_previewer__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sub_record__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__find_replace__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__html_view__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__json_editor_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_view__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__object_field__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__value_change_watcher__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__primitive_list_field__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__primitive_field__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ref_field__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__table_list_field__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__table_item_field__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__title_dropdown__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tree_menu__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__searchable_dropdown__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__list_action_group__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared__ = __webpack_require__(707);
/* unused harmony reexport AddFieldDropdownComponent */
/* unused harmony reexport AddNewElementButtonComponent */
/* unused harmony reexport AnyTypeFieldComponent */
/* unused harmony reexport AutocompleteInputComponent */
/* unused harmony reexport ComplexListFieldComponent */
/* unused harmony reexport ObjectFieldComponent */
/* unused harmony reexport ValueChangeWatcherComponent */
/* unused harmony reexport EditorPreviewerComponent */
/* unused harmony reexport FindReplaceComponent */
/* unused harmony reexport ModalViewComponent */
/* unused harmony reexport PrimitiveListFieldComponent */
/* unused harmony reexport PrimitiveFieldComponent */
/* unused harmony reexport RefFieldComponent */
/* unused harmony reexport SearchableDropdownComponent */
/* unused harmony reexport ListActionGroupComponent */
/* unused harmony reexport TableListFieldComponent */
/* unused harmony reexport TableItemFieldComponent */
/* unused harmony reexport TitleDropdownComponent */
/* unused harmony reexport TreeMenuItemComponent */
/* unused harmony reexport TreeMenuComponent */
/* unused harmony reexport JsonEditorComponent */
/* unused harmony reexport SubRecordComponent */
/* unused harmony reexport HtmlViewComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonEditorModule; });
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




// TODO: investigate if all modules or only used ones are in the bundle of the example app.

























var JsonEditorModule = (function () {
    function JsonEditorModule() {
    }
    return JsonEditorModule;
}());

JsonEditorModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                declarations: __WEBPACK_IMPORTED_MODULE_28__shared__["a" /* SHARED_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_28__shared__["b" /* SHARED_DIRECTIVES */], [
                    __WEBPACK_IMPORTED_MODULE_6__add_field_dropdown__["a" /* AddFieldDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_7__add_new_element_button__["a" /* AddNewElementButtonComponent */],
                    __WEBPACK_IMPORTED_MODULE_8__any_type_field__["a" /* AnyTypeFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_9__autocomplete_input__["a" /* AutocompleteInputComponent */],
                    __WEBPACK_IMPORTED_MODULE_10__complex_list_field__["a" /* ComplexListFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__object_field__["a" /* ObjectFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_18__value_change_watcher__["a" /* ValueChangeWatcherComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__editor_previewer__["a" /* EditorPreviewerComponent */],
                    __WEBPACK_IMPORTED_MODULE_13__find_replace__["a" /* FindReplaceComponent */],
                    __WEBPACK_IMPORTED_MODULE_16__modal_view__["a" /* ModalViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_19__primitive_list_field__["a" /* PrimitiveListFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_20__primitive_field__["a" /* PrimitiveFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_21__ref_field__["a" /* RefFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_26__searchable_dropdown__["a" /* SearchableDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_27__list_action_group__["a" /* ListActionGroupComponent */],
                    __WEBPACK_IMPORTED_MODULE_22__table_list_field__["a" /* TableListFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_23__table_item_field__["a" /* TableItemFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_24__title_dropdown__["a" /* TitleDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_25__tree_menu__["a" /* TreeMenuItemComponent */],
                    __WEBPACK_IMPORTED_MODULE_25__tree_menu__["b" /* TreeMenuComponent */],
                    __WEBPACK_IMPORTED_MODULE_15__json_editor_component__["a" /* JsonEditorComponent */],
                    __WEBPACK_IMPORTED_MODULE_12__sub_record__["a" /* SubRecordComponent */],
                    __WEBPACK_IMPORTED_MODULE_14__html_view__["a" /* HtmlViewComponent */]
                ]),
                exports: [__WEBPACK_IMPORTED_MODULE_15__json_editor_component__["a" /* JsonEditorComponent */]],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_5_ng2_slide_toggle__["a" /* SlideToggleModule */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                    __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
                ],
                providers: __WEBPACK_IMPORTED_MODULE_28__shared__["c" /* SHARED_SERVICES */]
            },] },
];
/** @nocollapse */
JsonEditorModule.ctorParameters = function () { return []; };



/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_action_group_component__ = __webpack_require__(691);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_action_group_component__["a"]; });



/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListActionGroupComponent; });
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

var ListActionGroupComponent = (function () {
    function ListActionGroupComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    return ListActionGroupComponent;
}());

ListActionGroupComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'list-action-group',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
                styles: [""],
                template: "<div> <button type=\"button\" class=\"editor-btn-delete\" (click)=\"onDelete.emit()\"> &times; </button> <button type=\"button\" class=\"editor-btn-move-up\" (click)=\"onMove.emit(-1)\"> <i class=\"fa fa-chevron-up\"></i> </button> <button type=\"button\" class=\"editor-btn-move-down\" (click)=\"onMove.emit(1)\"> <i class=\"fa fa-chevron-down\"></i> </button> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ListActionGroupComponent.ctorParameters = function () { return []; };
ListActionGroupComponent.propDecorators = {
    'onDelete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'onMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_view_component__ = __webpack_require__(693);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_view_component__["a"]; });



/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalViewComponent; });
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


var ModalViewComponent = (function () {
    // TODO: unsubcribe on destroy
    function ModalViewComponent(modalService, cd) {
        var _this = this;
        this.modalService = modalService;
        this.cd = cd;
        this.modalService
            .display$.subscribe(function (display) {
            display ? _this.modal.show() : _this.modal.hide();
        });
        this.modalService
            .options$.subscribe(function (options) {
            _this.options = options;
            _this.cd.markForCheck();
        });
    }
    ModalViewComponent.prototype.onShow = function () {
        if (this.options && this.options.onShow) {
            this.options.onShow();
        }
    };
    return ModalViewComponent;
}());

ModalViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'modal-view',
                styles: [""],
                template: "<div class=\"modal fade\" (onShown)=\"onShow()\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" [config]=\"{ backdrop: false }\"> <div class=\"modal-dialog modal-lg\"> <div *ngIf=\"options\" class=\"modal-content max-height-90-vh\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" (click)=\"modal.hide()\">&times;</button> <h4 class=\"modal-title\">{{options.title}}</h4> </div> <div class=\"modal-body\"> <div [innerHTML]=\"options.bodyHtml\"></div> <div [ngSwitch]=\"options.type\"> <div *ngSwitchCase=\"'confirm'\"> <button class=\"btn btn-default\" (click)=\"options.onConfirm();\"> Confirm <i class=\"fa fa-check\"></i> </button> </div> </div> </div> </div> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ModalViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["p" /* ModalService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
ModalViewComponent.propDecorators = {
    'modal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */], args: ['modal',] },],
};


/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_field_component__ = __webpack_require__(695);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__object_field_component__["a"]; });



/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ObjectFieldComponent = (function (_super) {
    __extends(ObjectFieldComponent, _super);
    function ObjectFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, pathUtilService) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.pathCache = {};
        return _this;
    }
    ObjectFieldComponent.prototype.ngOnChanges = function (changes) {
        var valueChange = changes['value'];
        if (valueChange) {
            // should be cached somewhere like keysByPath if this causes performance issues.
            this.keys = this.value.keySeq().toSet();
        }
    };
    ObjectFieldComponent.prototype.deleteField = function (name) {
        // remove it from the record
        this.value = this.value.remove(name);
        this.jsonStoreService.setIn(this.path, this.value);
        // remove the key too, so that it will not be displayed as empty
        this.keys = this.keys.remove(name);
    };
    ObjectFieldComponent.prototype.getFieldPath = function (name) {
        if (!this.pathCache[name]) {
            this.pathCache[name] = this.path.concat(name);
        }
        return this.pathCache[name];
    };
    ObjectFieldComponent.prototype.onFieldAdd = function (field) {
        this.keys = this.keys.add(field);
    };
    return ObjectFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));

ObjectFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'object-field',
                styles: ["table.table { background-color: #f9f9f9; } "],
                template: "<table [id]=\"pathString\" class=\"table\"> <tr *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\"> <!-- SUB FIELD TITLE MENU --> <td class=\"label-holder\"> <div> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.properties[key].disabled\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getFieldPath(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> </title-dropdown> </div> </td> <!-- SUB FIELD COMPONENT --> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=schema.properties[key] [path]=\"getFieldPath(key)\"></any-type-field> </td> </tr> <!-- ADD SUB FIELD FROM SCHEMA DROPDOWN --> <tr> <td class=\"button-holder\"> <add-field-dropdown [fields]=\"keys\" [pathString]=\"pathString\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.properties\">+</add-field-dropdown> </td> <td class=\"button-holder list-action-group-container\"> <!-- list-action-group (up/down and delete buttons), Set only if it's an element of an list (complex-list) --> <ng-content></ng-content> </td> </tr> </table>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ObjectFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
ObjectFieldComponent.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__ = __webpack_require__(697);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__["a"]; });



/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimitiveFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PrimitiveFieldComponent = (function (_super) {
    __extends(PrimitiveFieldComponent, _super);
    function PrimitiveFieldComponent(schemaValidationService, componentTypeService, appGlobalsService, jsonStoreService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, pathUtilService) || this;
        _this.schemaValidationService = schemaValidationService;
        _this.componentTypeService = componentTypeService;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        return _this;
    }
    Object.defineProperty(PrimitiveFieldComponent.prototype, "valueType", {
        get: function () {
            return this.componentTypeService.getComponentType(this.schema);
        },
        enumerable: true,
        configurable: true
    });
    PrimitiveFieldComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.schema = this.schema || {};
    };
    PrimitiveFieldComponent.prototype.commitValueChange = function () {
        // Validation
        var errors = this.schemaValidationService.validateValue(this.value, this.schema);
        if (!errors.length) {
            this.jsonStoreService.setIn(this.path, this.value);
        }
        this.errors = errors;
    };
    PrimitiveFieldComponent.prototype.onKeypress = function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            this.commitValueChange();
            event.preventDefault();
        }
    };
    PrimitiveFieldComponent.prototype.onAutocompleteInputValueChange = function (value) {
        this.value = value;
    };
    PrimitiveFieldComponent.prototype.onSearchableDropdownSelect = function (value) {
        this.value = value;
        this.commitValueChange();
    };
    Object.defineProperty(PrimitiveFieldComponent.prototype, "tabIndex", {
        get: function () {
            return this.schema['disabled'] ? -1 : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveFieldComponent.prototype, "tooltipPosition", {
        get: function () {
            var tooltipPlacement = 'top';
            if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
                tooltipPlacement = 'bottom';
            }
            return tooltipPlacement;
        },
        enumerable: true,
        configurable: true
    });
    return PrimitiveFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));

PrimitiveFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'primitive-field',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
                styles: ["td.value-container div[contenteditable=true], td.value-container input { vertical-align: middle; width: 50%; padding: 0 0 0 3px; transition: all 0.5s ease; resize: none; border: none; background-color: transparent; display: inline-block; width: 100%; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; } table.primitive-field-container { width: 100%; } td.link-button-container { width: 22px; } td.value-container { width: 100%; } td.value-container:hover { background-color: #ffa !important; } a.no-decoration { text-decoration: none; } [contenteditable=true] { min-height: 18px; word-break: break-word; } [contenteditable=true]:empty:before { content: attr(placeholder); color: darkgray; display: block; /* For Firefox */ } .tooltip-left-align { margin-left: 12px; padding: 0px; } "],
                template: "<div [ngSwitch]=\"valueType\" [id]=\"pathString\"> <table class=\"primitive-field-container\"> <tr> <ng-template #errorsTooltipTemplate> <ul class=\"tooltip-left-align\"> <li *ngFor=\"let error of errors\" > {{error.message}} </li> </ul> </ng-template> <td class=\"value-container\" [ngClass]=\"errorNgClass\" [tooltip]=\"errorsTooltipTemplate\" [isDisabled]=\"!isErrorTooltipEnabled\" placement=\"{{tooltipPosition}}\" container=\"body\"> <div *ngSwitchCase=\"'string'\"> <div contenteditable=\"true\" attr.data-path=\"{{pathString}}\" [tabindex]=\"tabIndex\" [(contentModel)]=\"value\" (blur)=\"commitValueChange()\" (keypress)=\"onKeypress($event)\" attr.placeholder=\"{{schema.title}}\"></div> </div> <div *ngSwitchCase=\"'enum'\"> <searchable-dropdown [pathString]=\"pathString\" [value]=\"value\" [placeholder]=\"schema.title\" [items]=\"schema.enum\" [shortcutMap]=\"schema.enumShorcutMap\" (onSelect)=\"onSearchableDropdownSelect($event)\" [tabIndex]=\"tabIndex\"></searchable-dropdown> </div> <div *ngSwitchCase=\"'autocomplete'\"> <autocomplete-input [pathString]=\"pathString\" [value]=\"value\" [path]=\"path\" [autocompletionConfig]=\"schema.autocompletionConfig\" (onBlur)=\"commitValueChange()\" (onKeypress)=\"onKeypress($event)\" (onValueChange)=\"onAutocompleteInputValueChange($event)\" [placeholder]=\"schema.title\" [tabIndex]=\"tabIndex\"></autocomplete-input> </div> <div *ngSwitchCase=\"'integer'\"> <input type=\"number\" [(ngModel)]=\"value\" [tabindex]=\"tabIndex\" attr.data-path=\"{{pathString}}\" (blur)=\"commitValueChange()\" (keypress)=\"onKeypress($event)\" placeholder=\"{{schema.title}}\"> </div> <div *ngSwitchCase=\"'boolean'\"> <input type=\"checkbox\" [(ngModel)]=\"value\" (ngModelChange)=\"commitValueChange()\" placeholder=\"{{schema.title}}\"> </div> <div *ngSwitchDefault> ## Not recognized type: {{valueType}} </div> </td> <td class=\"link-button-container\"> <a *ngIf=\"schema.linkBuilder\" class=\"no-decoration\" target=\"_blank\" [href]=\"schema.linkBuilder(value)\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> <a *ngIf=\"!schema.linkBuilder && schema.format === 'url'\" class=\"no-decoration\" target=\"_blank\" [href]=\"value\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> </td> </tr> </table> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
PrimitiveFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["n" /* SchemaValidationService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["o" /* ComponentTypeService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
PrimitiveFieldComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__ = __webpack_require__(699);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__["a"]; });



/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimitiveListFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PrimitiveListFieldComponent = (function (_super) {
    __extends(PrimitiveListFieldComponent, _super);
    function PrimitiveListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, jsonStoreService, pathUtilService) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        return _this;
    }
    return PrimitiveListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));

PrimitiveListFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'primitive-list-field',
                styles: ["td { padding: 0px !important; } "],
                template: "<div [id]=\"pathString\"> <div class=\"wide\"> <table class=\"table\"> <tr *ngFor=\"let value of values | selfOrEmpty:schema; let i = index; trackBy:trackByElement\"> <td> <primitive-field [value]=\"value\" [schema]=\"schema.items\" [path]=\"getElementPath(i)\"></primitive-field> </td> <td *ngIf=\"values.size > 0\" class=\"button-holder\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\"></list-action-group> </td> </tr> </table> </div> </div> ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
PrimitiveListFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
PrimitiveListFieldComponent.propDecorators = {
    'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_globals_service__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_util_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_value_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_replace_all_service__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__json_store_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__json_util_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__json_schema_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__path_util_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_service__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__record_fixer_service__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__schema_fixer_service__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schema_validation_service__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shortcut_action_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shortcut_service__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__window_href_service__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tabs_util_service__ = __webpack_require__(725);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_globals_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__dom_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__empty_value_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_5__find_replace_all_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__json_store_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__json_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__json_schema_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__path_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_10__modal_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__record_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_12__schema_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__schema_validation_service__["a"]; });
/* unused harmony reexport ShortcutActionService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_15__shortcut_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_16__window_href_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_17__tabs_util_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHARED_SERVICES; });



















var SHARED_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__app_globals_service__["a" /* AppGlobalsService */],
    __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__["a" /* RemoteAutocompletionService */],
    __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a" /* ComponentTypeService */],
    __WEBPACK_IMPORTED_MODULE_3__dom_util_service__["a" /* DomUtilService */],
    __WEBPACK_IMPORTED_MODULE_4__empty_value_service__["a" /* EmptyValueService */],
    __WEBPACK_IMPORTED_MODULE_5__find_replace_all_service__["a" /* FindReplaceAllService */],
    __WEBPACK_IMPORTED_MODULE_6__json_store_service__["a" /* JsonStoreService */],
    __WEBPACK_IMPORTED_MODULE_7__json_util_service__["a" /* JsonUtilService */],
    __WEBPACK_IMPORTED_MODULE_8__json_schema_service__["a" /* JsonSchemaService */],
    __WEBPACK_IMPORTED_MODULE_9__path_util_service__["a" /* PathUtilService */],
    __WEBPACK_IMPORTED_MODULE_10__modal_service__["a" /* ModalService */],
    __WEBPACK_IMPORTED_MODULE_11__record_fixer_service__["a" /* RecordFixerService */],
    __WEBPACK_IMPORTED_MODULE_12__schema_fixer_service__["a" /* SchemaFixerService */],
    __WEBPACK_IMPORTED_MODULE_13__schema_validation_service__["a" /* SchemaValidationService */],
    __WEBPACK_IMPORTED_MODULE_14__shortcut_action_service__["a" /* ShortcutActionService */],
    __WEBPACK_IMPORTED_MODULE_15__shortcut_service__["a" /* ShortcutService */],
    __WEBPACK_IMPORTED_MODULE_16__window_href_service__["a" /* WindowHrefService */],
    __WEBPACK_IMPORTED_MODULE_17__tabs_util_service__["a" /* TabsUtilService */]
];


/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref_field_component__ = __webpack_require__(701);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ref_field_component__["a"]; });



/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefFieldComponent; });
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





var RefFieldComponent = (function () {
    function RefFieldComponent(http, changeDetectorRef, appGlobalsService, pathUtilService) {
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.isPreviewButtonHidden = false;
    }
    RefFieldComponent.prototype.ngOnChanges = function (changes) {
        if (this.refConfig) {
            var valueChange = changes['value'];
            var schemaChange = changes['schema'];
            // instead of ngOnInit because requestOptions has to be set before fetching
            if (schemaChange && schemaChange.isFirstChange()) {
                this.requestOptions = this.createRequestOptionsWithConfig();
            }
            if (valueChange) {
                if (this.refConfig.lazy) {
                    this.isPreviewButtonHidden = false;
                }
                else {
                    this.fetchRef();
                }
            }
        }
    };
    RefFieldComponent.prototype.onPreviewClick = function () {
        this.isPreviewButtonHidden = true;
        this.fetchRef();
    };
    Object.defineProperty(RefFieldComponent.prototype, "pathString", {
        get: function () {
            return this.pathUtilService.toPathString(this.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefFieldComponent.prototype, "customTemplate", {
        get: function () {
            return this.appGlobalsService.templates[this.refConfig.templateName];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefFieldComponent.prototype, "refConfig", {
        get: function () {
            return this.schema['refFieldConfig'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefFieldComponent.prototype, "ref", {
        get: function () {
            return this.value.get('$ref');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefFieldComponent.prototype, "shouldDisplayTemplate", {
        get: function () {
            return this.isPreviewButtonHidden || !this.refConfig.lazy;
        },
        enumerable: true,
        configurable: true
    });
    RefFieldComponent.prototype.fetchRef = function () {
        var _this = this;
        this.refData = undefined;
        this.http
            .get(this.ref, this.requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ error: error });
        }).subscribe(function (data) {
            _this.refData = data;
            _this.changeDetectorRef.markForCheck();
        });
    };
    RefFieldComponent.prototype.createRequestOptionsWithConfig = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        if (this.refConfig.headers) {
            this.refConfig.headers
                .forEach(function (header) { return headers.append(header.name, header.value); });
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return RefFieldComponent;
}());

RefFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'ref-field',
                styles: ["button.btn-preview-template { background: transparent; border: 0; width: 100%; height: 100%; } .align-center { width: 100%; text-align: center; } "],
                template: "<div [id]=\"pathString\"> <div *ngIf=\"refConfig\"> <button class=\"btn-preview-template\" *ngIf=\"!shouldDisplayTemplate\" (click)=\"onPreviewClick($event)\"><i class=\"fa fa-eye\"></i></button> <div *ngIf=\"shouldDisplayTemplate\"> <ng-template *ngIf=\"refData\" [ngTemplateOutlet]=\"customTemplate\" [ngTemplateOutletContext]=\"{response: refData}\"></ng-template> <i *ngIf=\"!refData\" class=\"fa fa-spinner fa-spin align-center\"></i> </div> </div> <div *ngIf=\"!refConfig\"> <a target=\"_blank\" [href]=\"ref\">{{ref}}</a> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
RefFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["b" /* PathUtilService */], },
]; };
RefFieldComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__ = __webpack_require__(703);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__["a"]; });



/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchableDropdownComponent; });
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

var SearchableDropdownComponent = (function () {
    function SearchableDropdownComponent() {
        this.expression = '';
        this.status = { isOpen: false };
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    SearchableDropdownComponent.prototype.ngOnInit = function () {
        this.placeholder = this.value || this.placeholder || '';
    };
    Object.defineProperty(SearchableDropdownComponent.prototype, "expressionOrValue", {
        get: function () {
            return this.status.isOpen ? this.expression : this.value;
        },
        set: function (expressionOrValue) {
            if (this.status.isOpen) {
                this.expression = expressionOrValue;
            }
            else {
                this.value = expressionOrValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    SearchableDropdownComponent.prototype.onItemClick = function (item) {
        this.value = item;
        this.onSelect.emit(item);
    };
    SearchableDropdownComponent.prototype.onKeypress = function (key) {
        if (key === 'Enter') {
            if (this.shortcutMap && this.shortcutMap[this.expression]) {
                this.onItemClick(this.shortcutMap[this.expression]);
            }
            this.status.isOpen = false;
        }
    };
    SearchableDropdownComponent.prototype.onFocus = function (event) {
        /**
         * Open dropdown manually only if it was focused by `TAB`.
         * Setting it manually all the time breaks auto-toggle by click.
         * event.relatedTarget is set when the FocusEvent caused by `TAB`.
         */
        if (event.relatedTarget) {
            this.status.isOpen = true;
        }
    };
    return SearchableDropdownComponent;
}());

SearchableDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'searchable-dropdown',
                styles: ["div.btn-group { width: 100%; } .dropdown-menu { left: 0px !important; } .toggle-container { width: 100%; } .toggle-container input { width: 93%; } .toggle-container i { width: 5%; height: 100%; text-align: right; } .dropdown-toggle { box-shadow: none !important; } "],
                template: "<div class=\"btn-group\" dropdown keyboardNav=\"true\" [isOpen]=\"status.isOpen\" (onShown)=\"status.isOpen = true\" (onHidden)=\"status.isOpen = false\"> <div class=\"toggle-container\" dropdownToggle> <input #inputToggle attr.data-path=\"{{pathString}}\" [placeholder]=\"placeholder\" [(ngModel)]=\"expressionOrValue\" (keypress)=\"onKeypress($event.key)\" [tabindex]=\"tabIndex\" (focus)=\"onFocus($event)\"> <i class=\"fa fa-caret-down\" (click)=\"inputToggle.focus()\"></i> </div> <ul class=\"dropdown-menu\" *dropdownMenu role=\"menu\"> <li *ngFor=\"let item of items | filterByExpression:expression\" role=\"menuitem\"> <!-- href is needed for keyboard navigation --> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onItemClick(item)\">{{item}}</a> </li> </ul> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
SearchableDropdownComponent.ctorParameters = function () { return []; };
SearchableDropdownComponent.propDecorators = {
    'items': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'shortcutMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentModelDirective; });

var ContentModelDirective = (function () {
    function ContentModelDirective(elementRef) {
        this.elementRef = elementRef;
        this.contentModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    ContentModelDirective.prototype.ngOnChanges = function (changes) {
        if (changes['contentModel']) {
            this.refresh();
        }
    };
    ContentModelDirective.prototype.onBlur = function () {
        this.emitContentModelChange();
    };
    ContentModelDirective.prototype.onKeypress = function (event) {
        if (event.key === 'Enter') {
            this.emitContentModelChange();
        }
    };
    ContentModelDirective.prototype.emitContentModelChange = function () {
        var value = this.elementRef.nativeElement.innerText;
        this.contentModelChange.emit(value);
    };
    ContentModelDirective.prototype.refresh = function () {
        this.elementRef.nativeElement.innerText = this.contentModel;
    };
    return ContentModelDirective;
}());

ContentModelDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */], args: [{
                selector: '[contentModel]'
            },] },
];
/** @nocollapse */
ContentModelDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */], },
]; };
ContentModelDirective.propDecorators = {
    'contentModel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'contentModelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */], args: ['blur',] },],
    'onKeypress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */], args: ['keypress', ['$event'],] },],
};


/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcuts_directive__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_model_directive__ = __webpack_require__(704);
/* unused harmony reexport ShortcutsDirective */
/* unused harmony reexport ContentModelDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_DIRECTIVES; });



var SHARED_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__shortcuts_directive__["a" /* ShortcutsDirective */],
    __WEBPACK_IMPORTED_MODULE_1__content_model_directive__["a" /* ContentModelDirective */]
];


/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mousetrap__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mousetrap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutsDirective; });
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


var ShortcutsDirective = (function () {
    function ShortcutsDirective(el) {
        this.el = el;
        this.mousetrap = new Mousetrap(this.el.nativeElement);
    }
    ShortcutsDirective.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(this.shortcuts).forEach(function (method) {
            var callbackFunc = _this.shortcuts[method]['action'];
            _this.mousetrap.bind(_this.shortcuts[method]['key'], callbackFunc);
        });
    };
    ShortcutsDirective.prototype.ngOnDestroy = function () {
        this.mousetrap.unbind(Object.keys(this.shortcuts));
    };
    return ShortcutsDirective;
}());

ShortcutsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */], args: [{
                selector: '[shortcuts]'
            },] },
];
/** @nocollapse */
ShortcutsDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */], },
]; };
ShortcutsDirective.propDecorators = {
    'shortcuts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(705);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pipes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });






/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlwaysShowFieldsPipe; });
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

var AddAlwaysShowFieldsPipe = (function () {
    function AddAlwaysShowFieldsPipe() {
    }
    AddAlwaysShowFieldsPipe.prototype.transform = function (fields, schema) {
        var alwaysShowFields = schema['alwaysShow'] || [];
        alwaysShowFields = alwaysShowFields.filter(function (field) {
            var isToggle = schema['properties'][field]['toggleColor'];
            return !isToggle;
        });
        return fields.union(alwaysShowFields);
    };
    return AddAlwaysShowFieldsPipe;
}());

AddAlwaysShowFieldsPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'addAlwaysShowFields'
            },] },
];
/** @nocollapse */
AddAlwaysShowFieldsPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlwaysShowTogglesPipe; });
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

var AddAlwaysShowTogglesPipe = (function () {
    function AddAlwaysShowTogglesPipe() {
    }
    AddAlwaysShowTogglesPipe.prototype.transform = function (fields, schema) {
        var alwaysShowFields = schema['alwaysShow'] || [];
        var alwaysShowToggles = alwaysShowFields.filter(function (field) {
            var isToggle = schema['properties'][field]['toggleColor'];
            return isToggle;
        });
        return fields.union(alwaysShowToggles);
    };
    return AddAlwaysShowTogglesPipe;
}());

AddAlwaysShowTogglesPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'addAlwaysShowToggles'
            },] },
];
/** @nocollapse */
AddAlwaysShowTogglesPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DifferentKeysPipe; });
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


/**
 * It returns array of keys which aren't present in given object
 */
var DifferentKeysPipe = (function () {
    function DifferentKeysPipe() {
    }
    DifferentKeysPipe.prototype.transform = function (object, keys) {
        return __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].fromKeys(object).subtract(keys);
    };
    return DifferentKeysPipe;
}());

DifferentKeysPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'differentKeys'
            },] },
];
/** @nocollapse */
DifferentKeysPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterAndSortBySchemaPipe; });
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


var FilterAndSortBySchemaPipe = (function () {
    function FilterAndSortBySchemaPipe(appGlobalsService) {
        this.appGlobalsService = appGlobalsService;
    }
    /**
     * It filters out `hidden` fields and sorts keys by `priority`
     *
     * @param {Set<string>} keys
     * @param {Object} schema - the `schema` that has object schema which contains each key in `keys`
     * @return {OrderedSet<string>} - filtered and sorted keys
     */
    FilterAndSortBySchemaPipe.prototype.transform = function (keys, schema) {
        var _this = this;
        var schemaProps = schema['properties'];
        if (!keys) {
            return undefined;
        }
        return keys
            .filter(function (key) {
            if (!schemaProps[key]) {
                throw new Error("\"" + key + "\" is not specified as property in \n" + JSON.stringify(schemaProps, undefined, 2));
            }
            return !schemaProps[key]['hidden'] || _this.appGlobalsService.adminMode;
        }).sort(function (a, b) {
            // Sort by priority, larger is the first.
            var pa = schemaProps[a]['priority'] || 0;
            var pb = schemaProps[b]['priority'] || 0;
            if (pa > pb) {
                return -1;
            }
            if (pa < pb) {
                return 1;
            }
            // Sort alphabetically.
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    };
    return FilterAndSortBySchemaPipe;
}());

FilterAndSortBySchemaPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'filterAndSortBySchema',
            },] },
];
/** @nocollapse */
FilterAndSortBySchemaPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AppGlobalsService */], },
]; };


/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByExpressionPipe; });
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

var FilterByExpressionPipe = (function () {
    function FilterByExpressionPipe() {
    }
    FilterByExpressionPipe.prototype.transform = function (array, prefix) {
        var pattern = new RegExp(prefix, 'i');
        return array.filter(function (value) { return value.match(pattern); });
    };
    return FilterByExpressionPipe;
}());

FilterByExpressionPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'filterByExpression',
            },] },
];
/** @nocollapse */
FilterByExpressionPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeUrlPipe; });
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


var SanitizeUrlPipe = (function () {
    function SanitizeUrlPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    /**
     * Transforms url to safe url that can be used for `<script src>` or `<iframe src>`
     *
     * @param {string} url
     * @return {SafeResourceUrl}
     */
    SanitizeUrlPipe.prototype.transform = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SanitizeUrlPipe;
}());

SanitizeUrlPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'sanitizeUrl',
            },] },
];
/** @nocollapse */
SanitizeUrlPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
]; };


/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfOrEmptyPipe; });
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



var SelfOrEmptyPipe = (function () {
    function SelfOrEmptyPipe(emptyValueService) {
        this.emptyValueService = emptyValueService;
    }
    /**
     * Transforms a value to empty value if it is undefined,
     * returns self if it is already defined
     *
     * @param {any} value
     * @param {Object} schema
     * @return {any} - empty value if given value is undefined or value itself.
     */
    SelfOrEmptyPipe.prototype.transform = function (value, schema) {
        if (value) {
            if (__WEBPACK_IMPORTED_MODULE_2_immutable__["List"].isList(value) && value.size === 0) {
                return this.emptyValueService.generateEmptyValue(schema);
            }
            return value;
        }
        return this.emptyValueService.generateEmptyValue(schema);
    };
    return SelfOrEmptyPipe;
}());

SelfOrEmptyPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'selfOrEmpty',
            },] },
];
/** @nocollapse */
SelfOrEmptyPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["c" /* EmptyValueService */], },
]; };


/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetFirstElementPathPipe; });
/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2017 CERN.
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


var SetFirstElementPathPipe = (function () {
    function SetFirstElementPathPipe(appGlobalsService, pathUtilService) {
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
    }
    SetFirstElementPathPipe.prototype.transform = function (fields, tabName) {
        this.appGlobalsService.tabNameToFirstTopLevelElement[tabName] = "" + this.pathUtilService.separator + fields.first();
        return fields;
    };
    return SetFirstElementPathPipe;
}());

SetFirstElementPathPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'setFirstElementPath'
            },] },
];
/** @nocollapse */
SetFirstElementPathPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["b" /* PathUtilService */], },
]; };


/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderscoreToSpacePipe; });
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

var UnderscoreToSpacePipe = (function () {
    function UnderscoreToSpacePipe() {
    }
    UnderscoreToSpacePipe.prototype.transform = function (text) {
        return text.replace(/\_/g, ' ');
    };
    return UnderscoreToSpacePipe;
}());

UnderscoreToSpacePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'underscoreToSpace',
            },] },
];
/** @nocollapse */
UnderscoreToSpacePipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGlobalsService; });
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


var AppGlobalsService = (function () {
    function AppGlobalsService() {
        this._globalErrorsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.adminMode = false;
        this.activeTabName = 'Main';
        this.tabNameToFirstTopLevelElement = {};
    }
    Object.defineProperty(AppGlobalsService.prototype, "globalErrors", {
        set: function (errors) {
            this._globalErrorsSubject.next(errors);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "globalErrorsSubject", {
        get: function () {
            return this._globalErrorsSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "firstElementPathForCurrentTab", {
        get: function () {
            return this.tabNameToFirstTopLevelElement[this.activeTabName];
        },
        enumerable: true,
        configurable: true
    });
    return AppGlobalsService;
}());

AppGlobalsService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
AppGlobalsService.ctorParameters = function () { return []; };


/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceAllService; });


var FindReplaceAllService = (function () {
    function FindReplaceAllService() {
    }
    // TODO: fix compiler errors when type of immutable `List<any> | Map<string, any>`
    /**
     * Does deep replace when it finds the occurance in an immutable List and Map
     * uses schema to skip disabled properties
     *
     * @param {List<any> | Map<string, any} immutable
     * @param {Object} schema
     * @param {string} find
     * @param {replace} replace
     * @param {boolean} matchWhole - looks for whole match to a string property of immutable
     * @param {Array<any> | Object} diffHtml - TODO: describe
     */
    FindReplaceAllService.prototype.findReplaceInImmutable = function (immutable, schema, find, replace, matchWhole, diffHtml) {
        var _this = this;
        if (matchWhole === void 0) { matchWhole = false; }
        var immutableAsMutable = immutable.asMutable();
        var isList = __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(immutable);
        // create empty array or object for the immutable to store diff
        diffHtml = isList ? [] : {};
        immutableAsMutable.forEach(function (value, key) {
            var innerSchema = isList ? schema['items'] : schema['properties'][key];
            // ignore disabled and ref fields
            if (innerSchema['disabled'] || innerSchema['hidden'] || key === '$ref') {
                return;
                // TODO: is `schema['type'] === 'string'` better?
            }
            else if (typeof value === 'string') {
                // assign value to diff as initial, if nothing has changed it will remain same
                var diff = value;
                // create html diff for each possible change
                var singleDiffHtml = "<strong style='color: green;'>" + replace + "</strong><del><em style='color: red;'>" + find + "</em></del>";
                if (!matchWhole) {
                    var regExp = new RegExp(find, 'g');
                    var replaced = value.replace(regExp, replace);
                    immutableAsMutable.set(key, replaced);
                    // create diff for multiple changes in value
                    diff = diff.replace(regExp, singleDiffHtml);
                }
                else if (value === find) {
                    immutableAsMutable.set(key, replace);
                    diff = singleDiffHtml;
                }
                diffHtml[key] = diff;
                // TODO: is `schema['type'] === 'object' || schema['type'] === 'array'` better?
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(value) || __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(value)) {
                // create empty array or object for the value in diffHtml
                var result = _this.
                    findReplaceInImmutable(immutableAsMutable.get(key), innerSchema, find, replace, matchWhole, diffHtml[key]);
                diffHtml[key] = result.diffHtml;
                immutableAsMutable.set(key, result.replaced);
            }
        });
        return { replaced: immutableAsMutable.asImmutable(), diffHtml: diffHtml };
    };
    return FindReplaceAllService;
}());

FindReplaceAllService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
FindReplaceAllService.ctorParameters = function () { return []; };


/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
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


var ModalService = (function () {
    function ModalService() {
        this.options$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.display$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
    }
    ModalService.prototype.displayModal = function (options) {
        this.options$.next(options);
        this.display$.next(true);
    };
    ModalService.prototype.closeCurrentModal = function () {
        this.display$.next(false);
    };
    return ModalService;
}());

ModalService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
ModalService.ctorParameters = function () { return []; };


/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordFixerService; });
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



var RecordFixerService = (function () {
    function RecordFixerService(emptyValueService, componentTypeService) {
        this.emptyValueService = emptyValueService;
        this.componentTypeService = componentTypeService;
    }
    /**
     * Fixes given record according to given schema, in other words
     * changes it to match the format expected the by te json-editor
     *
     * @param {Object} rawRecord - json record to be fixed
     * @param {Object} schema - extended schema of rawRecord
     * @return {Object} - fixed record
     */
    RecordFixerService.prototype.fixRecord = function (rawRecord, schema) {
        var _this = this;
        var record = Object.assign({}, rawRecord);
        Object.keys(record).forEach(function (field) {
            if (!schema['properties'][field]) {
                // Delete if field is not in schema!
                _this.deleteField(record, field);
            }
            else {
                // Fix the field and all children.
                _this.fix(field, record, schema['properties'][field]);
            }
        });
        return record;
    };
    /**
     * Visits all parts of record recursivly, along with the subschema of the part
     * and apply required fixes.
     *
     * NOTE: the reason that parent and key are passed instead of the direct value
     * is to be able do some operations that needs the parent such as `delete`.
     *
     * TODO: add special case for arrays because fixes are the same for
     * all elements.
     *
     * @param key {string | number} - field name or element index
     * @param parent {Object | Array<any>} - parent of the field/element
     * @param schema - schema of visited field/element
     */
    RecordFixerService.prototype.fix = function (key, parent, schema) {
        var _this = this;
        if (schema['hidden']) {
            return;
        }
        // Fixes for each type/condition, can be added below.
        var value = parent[key];
        // Recursive calls
        if (schema['type'] === 'object') {
            if (!schema['properties']) {
                throw new Error("\"" + key + "\"'s schema has \"type\": \"object\" but doesn't specify \"properties\"");
            }
            else if (!(value instanceof Object)) {
                throw new Error("\"" + key + "\" in " + JSON.stringify(value, null, 2) + " is specified as \"object\" by schema but it is not an object in json");
            }
            // Looping over record to filter out fields that are not in schema.
            Object.keys(value).forEach(function (prop) {
                if (!schema['properties'][prop]) {
                    // we don't like fields without schema!
                    _this.deleteField(value, prop);
                }
                else {
                    _this.fix(prop, value, schema['properties'][prop]);
                }
            });
        }
        else if (schema['type'] === 'array') {
            if (!schema['items']) {
                throw new Error("\"" + key + "\"'s schema has \"type\": \"array\" but doesn't specify \"items\"");
            }
            else if (!Array.isArray(value)) {
                throw new Error("\"" + key + "\" in " + JSON.stringify(value, null, 2) + " is specified as \"array\" by schema but it is not an array in json");
            }
            value.forEach(function (element, index) {
                _this.fix(index, value, schema['items']);
            });
        }
    };
    /**
     * Deletes given field from the given object.
     * Used for deleting fields that aren't on the schema.
     *
     * TODO: replace this with only `delete` when logging is not necessary!
     */
    RecordFixerService.prototype.deleteField = function (object, field) {
        delete object[field];
        console.warn("\"" + field + "\" is removed from input json since it's not in the schema");
    };
    return RecordFixerService;
}());

RecordFixerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
RecordFixerService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__empty_value_service__["a" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a" /* ComponentTypeService */], },
]; };


/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_util_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteAutocompletionService; });
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



var RemoteAutocompletionService = (function () {
    function RemoteAutocompletionService(http, pathUtilService) {
        this.http = http;
        this.pathUtilService = pathUtilService;
    }
    RemoteAutocompletionService.prototype.getAutocompletionResults = function (options, token) {
        var _this = this;
        return this.http.get("" + options.url + token)
            .map(function (res) { return _this.mapResponseToResults(res, options.path); });
    };
    RemoteAutocompletionService.prototype.mapResponseToResults = function (response, resultsPath) {
        var pathElements = this.pathUtilService.toPathArray(resultsPath);
        var responseJson = response.json();
        pathElements.forEach(function (pathElement) {
            responseJson = responseJson[pathElement];
        });
        var results = responseJson;
        return results;
    };
    return RemoteAutocompletionService;
}());

RemoteAutocompletionService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
RemoteAutocompletionService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__path_util_service__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_util_service__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFixerService; });
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



var SchemaFixerService = (function () {
    function SchemaFixerService(jsonUtilService) {
        this.jsonUtilService = jsonUtilService;
    }
    /**
     * Fixes schema to be in a format that expected by json-editor
     *
     * @param {Object} schema - json schema
     * @param {Object} config - schema specific options
     * @return {Object} - fixed schema
     */
    SchemaFixerService.prototype.fixSchema = function (schema, config) {
        if (config) {
            this.enrichSchemaWithConfig(schema, config);
        }
        schema = this.fixRecursively(schema);
        return schema;
    };
    /**
     * Enriches given schema with given configuration objects
     * puts config into correct places in schema.
     *
     * @param {Object} schema - json schema
     * @param {Object} config - schema specific options
     */
    SchemaFixerService.prototype.enrichSchemaWithConfig = function (schema, config) {
        var _this = this;
        Object.keys(config).forEach(function (field) {
            try {
                var schemaField = void 0;
                if (field === '') {
                    // enrich root schema when the config path is empty
                    schemaField = schema;
                }
                else {
                    schemaField = _this.jsonUtilService.getValueInPath(schema['properties'], field);
                }
                Object.assign(schemaField, config[field]);
            }
            catch (error) {
                console.warn("Config for \"" + field + "\" path is ignored, since it does not exist in schema");
            }
        });
    };
    /**
     * Applies all fixes to schema recursively
     */
    SchemaFixerService.prototype.fixRecursively = function (schema) {
        var _this = this;
        if (schema['anyOf']) {
            schema = this.fixAnyOf(schema);
        }
        else if (schema['allOf']) {
            schema = this.fixAllOf(schema);
        }
        if (schema['order']) {
            schema = this.fixOrder(schema);
        }
        if (schema['disabled']) {
            schema = this.fixDisabled(schema);
        }
        if (schema['alwaysShow']) {
            schema = this.fixAlwaysShow(schema);
        }
        // schema fixes must be done above
        // recursively call for deeper parts of schema
        if (schema['properties']) {
            Object.keys(schema['properties'])
                .forEach(function (prop) {
                schema['properties'][prop] = _this.fixRecursively(schema['properties'][prop]);
            });
        }
        else if (schema['items']) {
            schema['items'] = this.fixRecursively(schema['items']);
        }
        return schema;
    };
    /**
     * Fixes disabled config to assign the disabled attribute
     * to array items or object properties
     */
    SchemaFixerService.prototype.fixDisabled = function (schema) {
        if (schema['items']) {
            schema['items']['disabled'] = true;
        }
        else if (schema['properties']) {
            Object.keys(schema['properties'])
                .forEach(function (prop) {
                schema['properties'][prop]['disabled'] = true;
            });
        }
        return schema;
    };
    /**
     * Fixes order config to assign the right priority to properties
     */
    SchemaFixerService.prototype.fixOrder = function (schema) {
        var order = schema['order'];
        order.forEach(function (orderKey, index) {
            var priority = order.length - index;
            if (orderKey in schema['properties']) {
                schema['properties'][orderKey]['priority'] = priority;
            }
            else {
                console.warn(orderKey + " defined in order config does not exist in schema.");
            }
        });
        return schema;
    };
    /**
     * Fixes anyOf schemas with exactly same property structure
     * it merges all enum fields in anyOf elements
     */
    SchemaFixerService.prototype.fixAnyOf = function (schema) {
        var anyOf = schema['anyOf'];
        // find existence count of all enum properties in anyOf elements
        // the reason of this, a field could be enum type for some and not for some other anyOf element
        var enumPropCount = {};
        anyOf.forEach(function (anyOfElement) {
            Object.keys(anyOfElement['properties'])
                .filter(function (prop) { return anyOfElement['properties'][prop]['enum']; })
                .forEach(function (prop) {
                if (!enumPropCount[prop]) {
                    enumPropCount[prop] = 0;
                }
                enumPropCount[prop]++;
            });
        });
        // combine all enum arrays in anyOf elements
        var enums = {};
        Object.keys(enumPropCount)
            .forEach(function (prop) {
            anyOf.forEach(function (anyOfElement) {
                if (!enums[prop]) {
                    enums[prop] = [];
                }
                var enumValues = anyOfElement['properties'][prop]['enum'];
                // check if current field is enum for current anyOf element
                if (enumValues) {
                    enums[prop] = enums[prop].concat(enumValues);
                }
            });
        });
        var fixedSchema = anyOf[0];
        // shallow cleaning of format and pattern
        Object.keys(fixedSchema['properties'])
            .forEach(function (prop) {
            delete fixedSchema['properties'][prop]['format'];
            delete fixedSchema['properties'][prop]['pattern'];
        });
        Object.keys(enumPropCount)
            .forEach(function (prop) {
            var uniqueEnumValues = Array.from(new Set(enums[prop]));
            // if a field enum for all anyOf elements
            if (enumPropCount[prop] === anyOf.length) {
                // merge all enum values into one
                fixedSchema['properties'][prop]['enum'] = uniqueEnumValues;
                // if a field enum for some of anyOf elements
            }
            else {
                // create a autocomplete config so that it will allow any values
                // but autocomplete from enum values from where the field is defined as enum
                delete fixedSchema['properties'][prop]['enum'];
                fixedSchema['properties'][prop]['autocompletionConfig'] = {
                    source: uniqueEnumValues
                };
            }
        });
        // copy disabled attribute inside fixedSchema because it
        // is outside anyOf element and is ignored
        if (schema['disabled']) {
            fixedSchema['disabled'] = true;
        }
        return fixedSchema;
    };
    SchemaFixerService.prototype.fixAllOf = function (schema) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"].apply(__WEBPACK_IMPORTED_MODULE_1_lodash__, [{}].concat(schema['allOf']));
    };
    /**
     * Removes alwayShow fields that aren't in the schema.properties
     * and warns on console.
     */
    SchemaFixerService.prototype.fixAlwaysShow = function (schema) {
        var alwaysShow = schema['alwaysShow'];
        schema['alwaysShow'] = alwaysShow.filter(function (key) {
            if (schema['properties'][key]) {
                return true;
            }
            else {
                console.warn(key + " is configured as alwaysShow but it is not in " + JSON.stringify(Object.keys(schema['properties'])));
            }
        });
        return schema;
    };
    return SchemaFixerService;
}());

SchemaFixerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
SchemaFixerService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__json_util_service__["a" /* JsonUtilService */], },
]; };


/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ajv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaValidationService; });
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


var SchemaValidationService = (function () {
    function SchemaValidationService() {
        this.ajv = new __WEBPACK_IMPORTED_MODULE_1_ajv__({ allErrors: true });
        // https://gist.github.com/dperini/729294
        this.reWebUrl = new RegExp('^' +
            // protocol identifier
            '(?:(?:https?|ftp)://)' +
            // user:pass authentication
            '(?:\\S+(?::\\S*)?@)?' +
            '(?:' +
            // IP address exclusion
            // private & local networks
            '(?!(?:10)(?:\\.\\d{1,3}){3})' +
            '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
            '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
            '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
            '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
            '|' +
            'localhost' +
            '|' +
            // host name
            '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
            // domain name
            '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
            // TLD identifier
            '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
            // TLD may end with dot
            '\\.?' +
            ')' +
            // port number
            '(?::\\d{2,5})?' +
            // resource path
            '(?:[/?#]\\S*)?' +
            '$', 'i');
        // ajv didn't support format:url, so was added using web url regex for validation
        this.ajv.addFormat('url', this.reWebUrl);
    }
    /**
     * Validates a specific value against schema
     *
     * Uses: ajv package for json-schema validation
     *
     */
    SchemaValidationService.prototype.validateValue = function (value, schema) {
        var schemaValidationErrors = [];
        if (!this.ajv.validate(schema, value)) {
            this.ajv.errors.forEach(function (error) {
                schemaValidationErrors.push({
                    message: error.message
                });
            });
        }
        return schemaValidationErrors;
    };
    return SchemaValidationService;
}());

SchemaValidationService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
SchemaValidationService.ctorParameters = function () { return []; };


/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut_action_service__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutService; });
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


var ShortcutService = (function () {
    function ShortcutService(shortcutActionService) {
        this.shortcutActionService = shortcutActionService;
        this.shortcuts = {
            add: {
                key: 'alt+a',
                action: this.shortcutActionService.generateShortcutAction('addAction')
            },
            addToRoot: {
                key: 'mod+shift+a',
                action: this.shortcutActionService.generateShortcutAction('addToRootAction')
            },
            moveUp: {
                key: 'mod+shift+up',
                action: this.shortcutActionService.generateShortcutAction('moveUpAction')
            },
            moveDown: {
                key: 'mod+shift+down',
                action: this.shortcutActionService.generateShortcutAction('moveDownAction')
            },
            delete: {
                key: 'mod+backspace',
                action: this.shortcutActionService.generateShortcutAction('deleteAction')
            },
            navigateUp: {
                key: 'mod+up',
                action: this.shortcutActionService.generateShortcutAction('navigateUpAction')
            },
            navigateDown: {
                key: 'mod+down',
                action: this.shortcutActionService.generateShortcutAction('navigateDownAction')
            },
            navigateLeft: {
                key: 'mod+left',
                action: this.shortcutActionService.generateShortcutAction('navigateLeftAction')
            },
            navigateRight: {
                key: 'mod+right',
                action: this.shortcutActionService.generateShortcutAction('navigateRightAction')
            },
            copy: {
                key: 'alt+c',
                action: this.shortcutActionService.generateShortcutAction('copyAction')
            },
            copyFromRoot: {
                key: 'mod+alt+r',
                action: this.shortcutActionService.generateShortcutAction('copyFromRootAction')
            }
        };
    }
    ShortcutService.prototype.getShortcutsWithConfig = function (customShortcuts) {
        var _this = this;
        if (customShortcuts) {
            Object.keys(this.shortcuts).forEach(function (method) {
                if (customShortcuts[method]) {
                    _this.shortcuts[method]['key'] = customShortcuts[method]['key'];
                }
            });
        }
        return this.shortcuts;
    };
    return ShortcutService;
}());

ShortcutService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
ShortcutService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shortcut_action_service__["a" /* ShortcutActionService */], },
]; };


/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsUtilService; });
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


var TabsUtilService = (function () {
    function TabsUtilService() {
    }
    // FIXME: return type
    TabsUtilService.prototype.getTabNameToSubRecordMap = function (record, keyToTabName) {
        return record
            .groupBy(function (value, key) { return keyToTabName[key]; });
    };
    TabsUtilService.prototype.getKeyToTabName = function (tabsConfig, schema) {
        // set tab.name for configured keys
        var keyToTabName = tabsConfig.tabs
            .map(function (tab) {
            var keysWithTabName = {};
            tab.properties.forEach(function (key) {
                keysWithTabName[key] = tab.name;
            });
            return keysWithTabName;
        }).reduce(function (pre, cur) { return Object.assign(pre, cur); });
        // set defaultTabName for all other keys in the schema
        Object.keys(schema['properties'])
            .filter(function (key) { return !keyToTabName[key]; })
            .forEach(function (key) {
            keyToTabName[key] = tabsConfig.defaultTabName;
        });
        return keyToTabName;
    };
    // TODO: shouldn't acces this
    TabsUtilService.prototype.getTabNameToSubSchema = function (schema, keyToTabName) {
        var schemaProps = schema['properties'];
        var tabNameToSchemaProps = Object.keys(schemaProps)
            .map(function (prop) {
            return _a = {},
                _a[keyToTabName[prop]] = (_b = {},
                    _b[prop] = schemaProps[prop],
                    _b),
                _a;
            var _a, _b;
        }).reduce(function (pre, cur) { return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](pre, cur); });
        var tabNameToAlwaysShow = {};
        var alwaysShow = schema['alwaysShow'];
        if (alwaysShow) {
            alwaysShow
                .forEach(function (key) {
                var tabName = keyToTabName[key];
                if (!tabNameToAlwaysShow[tabName]) {
                    tabNameToAlwaysShow[tabName] = [];
                }
                tabNameToAlwaysShow[tabName].push(key);
            });
        }
        var tabNameToSchemaPart = {};
        Object.keys(tabNameToSchemaProps)
            .forEach(function (tabName) {
            tabNameToSchemaPart[tabName] = {
                type: 'object',
                alwaysShow: tabNameToAlwaysShow[tabName],
                properties: tabNameToSchemaProps[tabName]
            };
        });
        return tabNameToSchemaPart;
    };
    return TabsUtilService;
}());

TabsUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
TabsUtilService.ctorParameters = function () { return []; };


/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowHrefService; });
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

var WindowHrefService = (function () {
    function WindowHrefService() {
    }
    WindowHrefService.prototype.getHrefWithoutHash = function () {
        // check if it is already cached
        if (!WindowHrefService.hrefWithoutHash) {
            var href = window.location.href;
            // check if there is an hash in href
            var lastHashIndex = href.lastIndexOf('#');
            if (lastHashIndex > 0) {
                // remove hash.
                WindowHrefService.hrefWithoutHash = href.substring(0, lastHashIndex);
            }
            else {
                WindowHrefService.hrefWithoutHash = href;
            }
        }
        // return cached value
        return WindowHrefService.hrefWithoutHash;
    };
    WindowHrefService.prototype.appendHash = function (hash) {
        window.location.href = this.getHrefWithoutHash() + "#" + hash;
    };
    return WindowHrefService;
}());

// initial value is set to avoid ngc error.
WindowHrefService.hrefWithoutHash = '';
WindowHrefService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
WindowHrefService.ctorParameters = function () { return []; };


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub_record_component__ = __webpack_require__(728);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sub_record_component__["a"]; });



/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubRecordComponent; });
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


var SubRecordComponent = (function () {
    function SubRecordComponent(jsonStoreService, appGlobalsService) {
        this.jsonStoreService = jsonStoreService;
        this.appGlobalsService = appGlobalsService;
        this.tabName = '';
        this.pathCache = {};
    }
    SubRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allKeys = this.value.keySeq().toSet();
        this.keysByType = this.allKeys
            .groupBy(function (key) { return _this.isToggle(key) ? 'toggles' : 'others'; })
            .toObject();
    };
    // delete only work for others, not toggles (UPDATE: config comment if this changes)
    SubRecordComponent.prototype.deleteField = function (field) {
        this.jsonStoreService.removeIn(this.getPathForField(field));
        this.keysByType.others = this.keysByType.others.remove(field);
    };
    SubRecordComponent.prototype.getPathForField = function (field) {
        if (!this.pathCache[field]) {
            this.pathCache[field] = [field];
        }
        return this.pathCache[field];
    };
    SubRecordComponent.prototype.onFieldAdd = function (field) {
        if (this.isToggle(field)) {
            this.keysByType.toggles = this.keysByType.toggles.add(field);
        }
        else {
            this.keysByType.others = this.keysByType.others.add(field);
        }
    };
    SubRecordComponent.prototype.onToggleValueChange = function (field, value) {
        this.jsonStoreService.setIn(this.getPathForField(field), value);
    };
    Object.defineProperty(SubRecordComponent.prototype, "rightContainerColMdClass", {
        get: function () {
            if (this.isPreviewerDisabled) {
                return 'col-md-10';
            }
            else {
                return this.isPreviewerHidden ? 'col-md-9 col-md-override-9-8' : 'col-md-9';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubRecordComponent.prototype, "leftContainerColMdClass", {
        get: function () {
            if (this.isPreviewerDisabled) {
                return 'col-md-2';
            }
            return this.isPreviewerHidden ? 'col-md-3 col-md-override-2-2' : 'col-md-3';
        },
        enumerable: true,
        configurable: true
    });
    SubRecordComponent.prototype.isToggle = function (field) {
        return this.schema['properties'][field]['toggleColor'] !== undefined;
    };
    return SubRecordComponent;
}());

SubRecordComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'sub-record',
                styles: ["div.admin-mode { padding-top: 8px; width: 100%; } label.admin-mode { color: #e0dfdf; font-size: 13px; font-weight: normal; width: 90%; padding-left: 4px; } .record-fields-container { height: 100%; overflow: auto; padding-right: 0px; padding-left: 0px; padding-bottom: 41px; } .row { height: 100%; } tr.align-right td:first-child { width: 100%; } tr.align-right td:first-child slide-toggle { float: right; } "],
                template: "<div class=\"row\"> <div class=\"left menu-container\" [ngClass]=\"leftContainerColMdClass\"> <tree-menu [record]=\"value\" [schema]=\"schema\"></tree-menu> <add-field-dropdown [fields]=\"allKeys\" [pathString]=\"''\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.properties\">Add field</add-field-dropdown> <div *ngIf=\"enableAdminModeSwitch\" class=\"admin-mode\" tooltip=\"Allows editing all fields (use with care)\"> <input id=\"admin-mode-checkbox\" type=\"checkbox\" [(ngModel)]=\"appGlobalsService.adminMode\" /> <label class=\"admin-mode\" for=\"admin-mode-checkbox\">Enable Admin Mode</label> </div> </div> <div class=\"right record-fields-container\" [ngClass]=\"rightContainerColMdClass\"> <table id=\"editor\" class=\"table\"> <div class=\"field-wrapper\"> <tr *ngIf=\"keysByType.toggles\" class=\"align-right\"> <td *ngFor=\"let key of keysByType.toggles | addAlwaysShowToggles:schema| filterAndSortBySchema:schema; trackBy:trackByElement\"> <slide-toggle [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" (valueChange)=\"onToggleValueChange(key, $event)\" [onText]=\"key\" [offText]=\"key\" [onColor]=\"schema.properties[key].toggleColor\"></slide-toggle> </td> </tr> </div> <div class=\"field-wrapper\" *ngFor=\"let key of keysByType.others | addAlwaysShowFields:schema | filterAndSortBySchema:schema | setFirstElementPath:tabName; trackBy:trackByElement\"> <tr> <td class=\"label-holder\"> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.properties[key].disabled\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getPathForField(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> <li class=\"divider\"></li> <li class=\"title-dropdown-item\" (click)=\"$event.stopPropagation()\"> <find-replace [path]=\"getPathForField(key)\" [schema]=\"schema.properties[key]\"></find-replace> </li> </title-dropdown> </td> </tr> <tr> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getPathForField(key)\"></any-type-field> </td> </tr> </div> </table> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
SubRecordComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AppGlobalsService */], },
]; };
SubRecordComponent.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'enableAdminModeSwitch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'isPreviewerHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'isPreviewerDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'tabName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_item_field_component__ = __webpack_require__(730);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_item_field_component__["a"]; });



/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableItemFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TableItemFieldComponent = (function (_super) {
    __extends(TableItemFieldComponent, _super);
    function TableItemFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, pathUtilService) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.pathCache = {};
        return _this;
    }
    TableItemFieldComponent.prototype.getFieldPath = function (name) {
        if (!this.pathCache[name]) {
            this.pathCache[name] = this.path.concat(name);
        }
        return this.pathCache[name];
    };
    return TableItemFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));

TableItemFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                // Defined as attribute selector not to break table > tr > td html structure
                // tslint:disable-next-line
                selector: '[table-item-field]',
                styles: ["td { padding: 0 !important; vertical-align: top !important; } "],
                template: "<td *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\" [style.width]=\"schema.properties[key].columnWidth + '%'\"> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getFieldPath(key)\"> </any-type-field> <add-new-element-button *ngIf=\"schema.properties[key].type === 'array'\" [path]=\"getFieldPath(key)\" [schema]=\"schema.properties[key]\"> </add-new-element-button> </td> <!-- td element with list-action-group (up/down and delete buttons) --> <ng-content></ng-content>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TableItemFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
TableItemFieldComponent.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'keys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__ = __webpack_require__(732);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__["a"]; });



/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_list_field__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListFieldComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TableListFieldComponent = (function (_super) {
    __extends(TableListFieldComponent, _super);
    function TableListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        var _this = _super.call(this, appGlobalsService, jsonStoreService, pathUtilService) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        return _this;
    }
    TableListFieldComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // all unique keys that are present in at least single element
        this.keys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])(this.values
            .map(function (object) { return object.keySeq().toArray(); })
            .reduce(function (pre, cur) { return pre.concat(cur); }, []));
    };
    TableListFieldComponent.prototype.onFieldAdd = function (field) {
        this.keys = this.keys.add(field);
    };
    return TableListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_list_field__["a" /* AbstractListFieldComponent */]));

TableListFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'table-list-field',
                styles: ["table.editable-inner-table { border: none; } table.editable-inner-table thead > tr > th { vertical-align: middle; border: none; color: #c1c1c1; } "],
                template: "<div [id]=\"pathString\"> <div> <table class=\"table editable-inner-table\"> <thead class=\"thead-inverse\"> <tr> <th *ngFor=\"let key of keys | addAlwaysShowFields:schema.items | filterAndSortBySchema:schema.items; trackBy:trackByElement\" [style.width]=\"schema.items.properties[key].columnWidth + '%'\"> {{key | underscoreToSpace}} </th> <th class=\"button-holder\"> <add-field-dropdown *ngIf=\"values.size > 0\" [fields]=\"keys\" [pathString]=\"getElementPathString(0)\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.items.properties\">+</add-field-dropdown> </th> </tr> </thead> <tr *ngFor=\"let value of values; let i = index; trackBy:trackByIndex\" table-item-field [id]=\"getElementPathString(i)\" [value]=\"value\" [schema]=\"schema.items\" [path]=\"getElementPath(i)\" [keys]=\"keys\"> <td *ngIf=\"values.size > 0\" class=\"button-holder\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\"></list-action-group> </td> </tr> </table> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TableListFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* PathUtilService */], },
]; };
TableListFieldComponent.propDecorators = {
    'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__ = __webpack_require__(734);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__["a"]; });



/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleDropdownComponent; });
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

var TitleDropdownComponent = (function () {
    function TitleDropdownComponent() {
    }
    return TitleDropdownComponent;
}());

TitleDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'title-dropdown',
                styles: [".title-dropdown-toggle { font-size: 13px; background: transparent; border: none; padding: 0px 3px 0px 3px; color: #c1c1c1; font-weight: bold; } .title-dropdown-toggle:focus { outline: 0; } .title-dropdown-toggle:hover { color: #6b6b6b; } .dropdown-menu { min-width: 120px; } "],
                template: "<div dropdown [isDisabled]=\"isDisabled\"> <button class=\"btn title-dropdown-toggle\" dropdownToggle> {{title}} <span class=\"caret\"></span> </button> <ul class=\"dropdown-menu\" *dropdownMenu> <ng-content></ng-content> </ul> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TitleDropdownComponent.ctorParameters = function () { return []; };
TitleDropdownComponent.propDecorators = {
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__ = __webpack_require__(736);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__["a"]; });





/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeMenuItemComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TreeMenuItemComponent = (function (_super) {
    __extends(TreeMenuItemComponent, _super);
    function TreeMenuItemComponent(windowHrefService, domUtilService, pathUtilService) {
        var _this = _super.call(this) || this;
        _this.windowHrefService = windowHrefService;
        _this.domUtilService = domUtilService;
        _this.pathUtilService = pathUtilService;
        _this.isCollapsed = true;
        return _this;
    }
    TreeMenuItemComponent.prototype.ngOnInit = function () {
        this.href = this.windowHrefService.getHrefWithoutHash() + "#" + this.path;
    };
    TreeMenuItemComponent.prototype.ngOnChanges = function (changes) {
        var valueChange = changes['value'];
        if (valueChange && this.schema['type'] === 'object') {
            var currentValue = valueChange.currentValue;
            this.keys = currentValue.keySeq().toSet();
        }
    };
    TreeMenuItemComponent.prototype.toggle = function (event) {
        // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        this.domUtilService.focusAndSelectFirstEditableChildById(this.path);
        this.domUtilService.flashElementById(this.path);
    };
    TreeMenuItemComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    Object.defineProperty(TreeMenuItemComponent.prototype, "isCollapsable", {
        get: function () {
            var schemaType = this.schema['type'];
            return (schemaType === 'object' || schemaType === 'array');
        },
        enumerable: true,
        configurable: true
    });
    TreeMenuItemComponent.prototype.getChildPath = function (indexOrKey) {
        return "" + this.path + this.pathUtilService.separator + indexOrKey;
    };
    return TreeMenuItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));

TreeMenuItemComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'tree-menu-item',
                styles: ["a { color: #e0dfdf; } "],
                template: "<div> <a [href]=\"href\" (click)=\"toggle($event)\">{{label}}</a> <a *ngIf=\"isCollapsable\" [hidden]=\"isCollapsed\" (click)=\"collapse()\"> [x]</a> <div [ngSwitch]=\"schema.type\" [hidden]=\"isCollapsed\"> <ul> <div *ngSwitchCase=\"'object'\"> <li *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\"> <tree-menu-item [label]=\"key\" [value]=\"value.get(key)\" [schema]=\"schema.properties[key]\" [path]=\"getChildPath(key)\"></tree-menu-item> </li> </div> <div *ngSwitchCase=\"'array'\"> <li *ngFor=\"let element of value; let i = index; trackBy:trackByElement\"> <tree-menu-item [label]=\"i\" [value]=\"element\" [schema]=\"schema.items\" [path]=\"getChildPath(i)\"></tree-menu-item> </li> </div> </ul> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TreeMenuItemComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* WindowHrefService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["m" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
TreeMenuItemComponent.propDecorators = {
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeMenuComponent; });
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TreeMenuComponent = (function (_super) {
    __extends(TreeMenuComponent, _super);
    function TreeMenuComponent(windowHrefService, domUtilService, pathUtilService) {
        var _this = _super.call(this) || this;
        _this.windowHrefService = windowHrefService;
        _this.domUtilService = domUtilService;
        _this.pathUtilService = pathUtilService;
        _this.prefixOrPath = '';
        return _this;
    }
    TreeMenuComponent.prototype.ngOnChanges = function (changes) {
        var recordChange = changes['record'];
        if (recordChange) {
            var currentRecord = recordChange.currentValue;
            this.keys = currentRecord.keySeq().toSet();
        }
    };
    TreeMenuComponent.prototype.filter = function (key) {
        return key.startsWith(this.prefixOrPath);
    };
    TreeMenuComponent.prototype.onKeypress = function (key) {
        if (key === 'Enter') {
            this.windowHrefService.appendHash(this.prefixOrPath);
            this.domUtilService.focusAndSelectFirstEditableChildById(this.prefixOrPath);
            this.domUtilService.flashElementById(this.prefixOrPath);
        }
    };
    TreeMenuComponent.prototype.getChildPath = function (key) {
        return "" + this.pathUtilService.separator + key;
    };
    return TreeMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));

TreeMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'tree-menu',
                styles: ["div.tree-menu-container { padding: 8px 0; overflow-x: hidden; overflow-y: auto; text-align: center; } input.wide { width: 100%; padding: 2px; text-align: center; } ul.menu-item-container { list-style: none; text-align: left; padding-top: 8px; } "],
                template: "<div> <div class=\"tree-menu-container\"> <input class=\"wide\" type=\"text\" [(ngModel)]=\"prefixOrPath\" (keypress)=\"onKeypress($event.key)\" placeholder=\"Search or go\"> <ul class=\"menu-item-container\"> <li *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\" [hidden]=\"!filter(key)\"> <tree-menu-item [label]=\"key\" [value]=\"record.get(key)\" [schema]=\"schema.properties[key]\" [path]=\"getChildPath(key)\"></tree-menu-item> </li> </ul> </div> </div> ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TreeMenuComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* WindowHrefService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["m" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
]; };
TreeMenuComponent.propDecorators = {
    'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_change_watcher_component__ = __webpack_require__(739);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__value_change_watcher_component__["a"]; });



/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueChangeWatcherComponent; });
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


/**
 * This component has dummy html but a logic to change the value of another part
 * in top level json when its value changed. It's inserted in component tree
 * just before the actual field, so that it can detect its change and
 * run the call-back function
 */
var ValueChangeWatcherComponent = (function () {
    function ValueChangeWatcherComponent(changeDetectionRef, jsonStoreService) {
        this.changeDetectionRef = changeDetectionRef;
        this.jsonStoreService = jsonStoreService;
    }
    ValueChangeWatcherComponent.prototype.ngOnInit = function () {
        this.onValueChange = this.schema['onValueChange'];
        // remove this config so that it will not be detected as value-change-watcher again
        // by ComponentTypeService, but its actual type
        this.schema = Object.assign({}, this.schema);
        delete this.schema['onValueChange'];
    };
    ValueChangeWatcherComponent.prototype.ngOnChanges = function (changes) {
        var valueChange = changes['value'];
        if (valueChange && !valueChange.isFirstChange()) {
            // this.path.slice is used to pass by value not by reference, because the function might modify the path
            this.onValueChange(this.path.slice(), valueChange.currentValue, this.jsonStoreService);
            // force to detect changes since onValueChange might change some other parts of top level json
            this.changeDetectionRef.detectChanges();
        }
    };
    return ValueChangeWatcherComponent;
}());

ValueChangeWatcherComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'value-change-watcher',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
                template: "<any-type-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></any-type-field>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ValueChangeWatcherComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* JsonStoreService */], },
]; };
ValueChangeWatcherComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__ = __webpack_require__(668);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__["a"]; });



/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathUtilService; });
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

var PathUtilService = (function () {
    function PathUtilService() {
    }
    Object.defineProperty(PathUtilService.prototype, "separator", {
        get: function () {
            return '/';
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param {Array<any>} path - Element's path
     * @param {boolean} root - Find nearest or root parent array. True for root and false for nearest array parent
     * @returns {Array<any>} - Returns the path to the array parent
     */
    PathUtilService.prototype.getNearestOrRootArrayParentInPath = function (path, root) {
        var _path = [];
        var pathLength = path.length;
        for (var index = 0; index < pathLength; index++) {
            _path = root ? path.slice(0, index + 1) : path.slice(0, path.length - index);
            if (typeof _path[_path.length - 1] === 'number') {
                // transform ['arrayParent',0] => ['arrayParent']
                _path.pop();
                break;
            }
        }
        return _path;
    };
    PathUtilService.prototype.getElementIndexInForwardOrReversePath = function (path, directPathSearch) {
        return this.findIndexFromPath(path.slice(), directPathSearch);
    };
    /**
     *
     * @param {Array<any>} path - The path of an element
     * @param {boolean} directPathSearch - Flag for define direct or reverse searching in path. Set to true for searching in direct
     * or false for searching in reverse path
     * @returns {number} - Returns found index in path or -1 if not found
     */
    PathUtilService.prototype.findIndexFromPath = function (path, directPathSearch) {
        path = directPathSearch ? path : path.reverse();
        for (var index in path) {
            if (!isNaN(path[index])) {
                return path[index];
            }
        }
        return -1;
    };
    /**
     * Converts path array `/` separated path string.
     * Example: from ['foo', 'bar', 0] to '/foo/bar/0'
     */
    PathUtilService.prototype.toPathString = function (path) {
        return "" + this.separator + path.join(this.separator);
    };
    /**
     * Converts `/` separated path string to path array.
     * Example from '/foo/bar/0' to ['foo', 'bar', 0]
     */
    PathUtilService.prototype.toPathArray = function (pathString) {
        return pathString.split(this.separator)
            .slice(1) // remove the empty
            .map(function (key) { return isNaN(parseInt(key, 10)) ? key : parseInt(key, 10); });
    };
    return PathUtilService;
}());

PathUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
PathUtilService.ctorParameters = function () { return []; };


/***/ })

},[749]);
//# sourceMappingURL=main.bundle.js.map