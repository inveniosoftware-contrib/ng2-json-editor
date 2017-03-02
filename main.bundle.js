webpackJsonp([0,3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__ = __webpack_require__(914);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__["a"]; });



/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_globals_service__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_util_service__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamic_template_loader_service__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empty_value_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_replace_all_service__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__json_store_service__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__json_util_service__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__json_schema_service__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__path_util_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_service__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shortcut_action_service__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shortcut_service__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__window_href_service__ = __webpack_require__(967);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_globals_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__dom_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__dynamic_template_loader_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__empty_value_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_6__find_replace_all_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__json_store_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__json_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__json_schema_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10__path_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_11__modal_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__["a"]; });
/* unused harmony reexport ShortcutActionService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_16__shortcut_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_17__window_href_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHARED_SERVICES; });



















var SHARED_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__app_globals_service__["a" /* AppGlobalsService */],
    __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__["a" /* RemoteAutocompletionService */],
    __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a" /* ComponentTypeService */],
    __WEBPACK_IMPORTED_MODULE_3__dom_util_service__["a" /* DomUtilService */],
    __WEBPACK_IMPORTED_MODULE_4__dynamic_template_loader_service__["a" /* DynamicTemplateLoaderService */],
    __WEBPACK_IMPORTED_MODULE_5__empty_value_service__["a" /* EmptyValueService */],
    __WEBPACK_IMPORTED_MODULE_6__find_replace_all_service__["a" /* FindReplaceAllService */],
    __WEBPACK_IMPORTED_MODULE_7__json_store_service__["a" /* JsonStoreService */],
    __WEBPACK_IMPORTED_MODULE_8__json_util_service__["a" /* JsonUtilService */],
    __WEBPACK_IMPORTED_MODULE_9__json_schema_service__["a" /* JsonSchemaService */],
    __WEBPACK_IMPORTED_MODULE_10__path_util_service__["a" /* PathUtilService */],
    __WEBPACK_IMPORTED_MODULE_11__modal_service__["a" /* ModalService */],
    __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__["a" /* RecordFixerService */],
    __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__["a" /* SchemaFixerService */],
    __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__["a" /* SchemaValidationService */],
    __WEBPACK_IMPORTED_MODULE_15__shortcut_action_service__["a" /* ShortcutActionService */],
    __WEBPACK_IMPORTED_MODULE_16__shortcut_service__["a" /* ShortcutService */],
    __WEBPACK_IMPORTED_MODULE_17__window_href_service__["a" /* WindowHrefService */]
];


/***/ }),

/***/ 168:
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
    PathUtilService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    PathUtilService.ctorParameters = function () { return []; };
    return PathUtilService;
}());


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__ = __webpack_require__(912);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__["a"]; });



/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__ = __webpack_require__(913);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__["a"]; });



/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
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
    EmptyValueService.defaultValueLookup = {
        'string': '',
        'boolean': false
    };
    EmptyValueService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    EmptyValueService.ctorParameters = function () { return []; };
    return EmptyValueService;
}());


/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 274;


/***/ }),

/***/ 355:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppConfig = (function () {
    function AppConfig() {
        this.jsonEditorConfig = {
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
            enableAdminModeSwitch: true
        };
    }
    AppConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppConfig);
    return AppConfig;
}());
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.config.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__different_keys_pipe__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_by_expression_pipe__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_and_sort_by_schema_pipe__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanitize_url_pipe__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__self_or_empty_pipe__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__underscore_to_space_pipe__ = __webpack_require__(957);
/* unused harmony reexport AddAlwaysShowFieldsPipe */
/* unused harmony reexport DifferentKeysPipe */
/* unused harmony reexport FilterByExpressionPipe */
/* unused harmony reexport FilterAndSortBySchemaPipe */
/* unused harmony reexport SanitizeUrlPipe */
/* unused harmony reexport SelfOrEmptyPipe */
/* unused harmony reexport UnderscoreToSpacePipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_PIPES; });








var SHARED_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__["a" /* AddAlwaysShowFieldsPipe */],
    __WEBPACK_IMPORTED_MODULE_1__different_keys_pipe__["a" /* DifferentKeysPipe */],
    __WEBPACK_IMPORTED_MODULE_2__filter_by_expression_pipe__["a" /* FilterByExpressionPipe */],
    __WEBPACK_IMPORTED_MODULE_3__filter_and_sort_by_schema_pipe__["a" /* FilterAndSortBySchemaPipe */],
    __WEBPACK_IMPORTED_MODULE_4__sanitize_url_pipe__["a" /* SanitizeUrlPipe */],
    __WEBPACK_IMPORTED_MODULE_5__self_or_empty_pipe__["a" /* SelfOrEmptyPipe */],
    __WEBPACK_IMPORTED_MODULE_6__underscore_to_space_pipe__["a" /* UnderscoreToSpacePipe */]
];


/***/ }),

/***/ 564:
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
    ComponentTypeService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    ComponentTypeService.ctorParameters = function () { return []; };
    return ComponentTypeService;
}());


/***/ }),

/***/ 565:
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
    }
    DomUtilService.prototype.focusAndSelectFirstInputChildById = function (id) {
        var el = document.getElementById(id);
        if (el) {
            var firstInput = el.querySelector('input, textarea');
            if (firstInput) {
                firstInput.focus();
                firstInput.select();
            }
            else {
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
    DomUtilService.prototype.focusRightOrLeftParentCell = function (id, direction) {
        var el = document.getElementById(id);
        if (el && el.tabIndex) {
            var elementParentCell = el.parentElement;
            while (elementParentCell.nodeName !== 'TD') {
                elementParentCell = elementParentCell.parentElement;
            }
            var nextSibling = direction > 0 ? elementParentCell.nextElementSibling : elementParentCell.previousElementSibling;
            while (nextSibling && nextSibling.nodeName === 'TD') {
                var inputElement = nextSibling.querySelector("input[tabindex='1'],textarea[tabindex='1']");
                if (inputElement) {
                    inputElement.focus();
                    inputElement.select();
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
    DomUtilService.prototype.blurFirstInputChildById = function (id) {
        var el = document.getElementById(id);
        var firstInput = el.querySelector('input, textarea');
        if (firstInput) {
            firstInput.blur();
        }
    };
    DomUtilService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    DomUtilService.ctorParameters = function () { return []; };
    return DomUtilService;
}());


/***/ }),

/***/ 566:
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
    JsonSchemaService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    JsonSchemaService.ctorParameters = function () { return []; };
    return JsonSchemaService;
}());


/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(264);
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
    JsonStoreService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    JsonStoreService.ctorParameters = function () { return []; };
    return JsonStoreService;
}());


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_util_service__ = __webpack_require__(168);
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
    JsonUtilService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    JsonUtilService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__path_util_service__["a" /* PathUtilService */], },
    ]; };
    return JsonUtilService;
}());


/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_store_service__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_schema_service__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_util_service__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__path_util_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_immutable__ = __webpack_require__(44);
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
        this.domUtilService.blurFirstInputChildById(this.pathUtilService.toPathString(path));
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
        this.domUtilService.blurFirstInputChildById(this.pathUtilService.toPathString(path));
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
            this.domUtilService.focusAndSelectFirstInputChildById(pathString);
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
        this.domUtilService.focusAndSelectFirstInputChildById(path);
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
    return ShortcutActionService;
}());


/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(680);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/main.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(355);
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
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(870)],
            template: "\n    <json-editor *ngIf=\"record && schema\" \n      [config]=\"config.jsonEditorConfig\"\n      [record]=\"record\"\n      (onRecordChange)=\"onRecordChange($event)\"\n      [schema]=\"schema\">\n    </json-editor>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dist__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(355);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__dist__["JsonEditorModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(679);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/index.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/environment.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/polyfills.js.map

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 394,
	"./af.js": 394,
	"./ar": 400,
	"./ar-dz": 395,
	"./ar-dz.js": 395,
	"./ar-ly": 396,
	"./ar-ly.js": 396,
	"./ar-ma": 397,
	"./ar-ma.js": 397,
	"./ar-sa": 398,
	"./ar-sa.js": 398,
	"./ar-tn": 399,
	"./ar-tn.js": 399,
	"./ar.js": 400,
	"./az": 401,
	"./az.js": 401,
	"./be": 402,
	"./be.js": 402,
	"./bg": 403,
	"./bg.js": 403,
	"./bn": 404,
	"./bn.js": 404,
	"./bo": 405,
	"./bo.js": 405,
	"./br": 406,
	"./br.js": 406,
	"./bs": 407,
	"./bs.js": 407,
	"./ca": 408,
	"./ca.js": 408,
	"./cs": 409,
	"./cs.js": 409,
	"./cv": 410,
	"./cv.js": 410,
	"./cy": 411,
	"./cy.js": 411,
	"./da": 412,
	"./da.js": 412,
	"./de": 414,
	"./de-at": 413,
	"./de-at.js": 413,
	"./de.js": 414,
	"./dv": 415,
	"./dv.js": 415,
	"./el": 416,
	"./el.js": 416,
	"./en-au": 417,
	"./en-au.js": 417,
	"./en-ca": 418,
	"./en-ca.js": 418,
	"./en-gb": 419,
	"./en-gb.js": 419,
	"./en-ie": 420,
	"./en-ie.js": 420,
	"./en-nz": 421,
	"./en-nz.js": 421,
	"./eo": 422,
	"./eo.js": 422,
	"./es": 424,
	"./es-do": 423,
	"./es-do.js": 423,
	"./es.js": 424,
	"./et": 425,
	"./et.js": 425,
	"./eu": 426,
	"./eu.js": 426,
	"./fa": 427,
	"./fa.js": 427,
	"./fi": 428,
	"./fi.js": 428,
	"./fo": 429,
	"./fo.js": 429,
	"./fr": 432,
	"./fr-ca": 430,
	"./fr-ca.js": 430,
	"./fr-ch": 431,
	"./fr-ch.js": 431,
	"./fr.js": 432,
	"./fy": 433,
	"./fy.js": 433,
	"./gd": 434,
	"./gd.js": 434,
	"./gl": 435,
	"./gl.js": 435,
	"./he": 436,
	"./he.js": 436,
	"./hi": 437,
	"./hi.js": 437,
	"./hr": 438,
	"./hr.js": 438,
	"./hu": 439,
	"./hu.js": 439,
	"./hy-am": 440,
	"./hy-am.js": 440,
	"./id": 441,
	"./id.js": 441,
	"./is": 442,
	"./is.js": 442,
	"./it": 443,
	"./it.js": 443,
	"./ja": 444,
	"./ja.js": 444,
	"./jv": 445,
	"./jv.js": 445,
	"./ka": 446,
	"./ka.js": 446,
	"./kk": 447,
	"./kk.js": 447,
	"./km": 448,
	"./km.js": 448,
	"./ko": 449,
	"./ko.js": 449,
	"./ky": 450,
	"./ky.js": 450,
	"./lb": 451,
	"./lb.js": 451,
	"./lo": 452,
	"./lo.js": 452,
	"./lt": 453,
	"./lt.js": 453,
	"./lv": 454,
	"./lv.js": 454,
	"./me": 455,
	"./me.js": 455,
	"./mi": 456,
	"./mi.js": 456,
	"./mk": 457,
	"./mk.js": 457,
	"./ml": 458,
	"./ml.js": 458,
	"./mr": 459,
	"./mr.js": 459,
	"./ms": 461,
	"./ms-my": 460,
	"./ms-my.js": 460,
	"./ms.js": 461,
	"./my": 462,
	"./my.js": 462,
	"./nb": 463,
	"./nb.js": 463,
	"./ne": 464,
	"./ne.js": 464,
	"./nl": 466,
	"./nl-be": 465,
	"./nl-be.js": 465,
	"./nl.js": 466,
	"./nn": 467,
	"./nn.js": 467,
	"./pa-in": 468,
	"./pa-in.js": 468,
	"./pl": 469,
	"./pl.js": 469,
	"./pt": 471,
	"./pt-br": 470,
	"./pt-br.js": 470,
	"./pt.js": 471,
	"./ro": 472,
	"./ro.js": 472,
	"./ru": 473,
	"./ru.js": 473,
	"./se": 474,
	"./se.js": 474,
	"./si": 475,
	"./si.js": 475,
	"./sk": 476,
	"./sk.js": 476,
	"./sl": 477,
	"./sl.js": 477,
	"./sq": 478,
	"./sq.js": 478,
	"./sr": 480,
	"./sr-cyrl": 479,
	"./sr-cyrl.js": 479,
	"./sr.js": 480,
	"./ss": 481,
	"./ss.js": 481,
	"./sv": 482,
	"./sv.js": 482,
	"./sw": 483,
	"./sw.js": 483,
	"./ta": 484,
	"./ta.js": 484,
	"./te": 485,
	"./te.js": 485,
	"./tet": 486,
	"./tet.js": 486,
	"./th": 487,
	"./th.js": 487,
	"./tl-ph": 488,
	"./tl-ph.js": 488,
	"./tlh": 489,
	"./tlh.js": 489,
	"./tr": 490,
	"./tr.js": 490,
	"./tzl": 491,
	"./tzl.js": 491,
	"./tzm": 493,
	"./tzm-latn": 492,
	"./tzm-latn.js": 492,
	"./tzm.js": 493,
	"./uk": 494,
	"./uk.js": 494,
	"./uz": 495,
	"./uz.js": 495,
	"./vi": 496,
	"./vi.js": 496,
	"./x-pseudo": 497,
	"./x-pseudo.js": 497,
	"./yo": 498,
	"./yo.js": 498,
	"./zh-cn": 499,
	"./zh-cn.js": 499,
	"./zh-hk": 500,
	"./zh-hk.js": 500,
	"./zh-tw": 501,
	"./zh-tw.js": 501
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
webpackContext.id = 841;


/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(931);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_index__, "JsonEditorModule")) __webpack_require__.d(__webpack_exports__, "JsonEditorModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["JsonEditorModule"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of ng2-json-editor module.
 */



/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractFieldComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

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
        _super.call(this);
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.errors = [];
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

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field__ = __webpack_require__(270);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Abstract component to share code of common operations of all array fields
 *
 * Instance properties declared here only to resolve syntax errors.
 * Hence they need to be declared in children extending components (with decarators if necessary)
 */
var AbstractListFieldComponent = (function (_super) {
    __extends(AbstractListFieldComponent, _super);
    function AbstractListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.pathCache = {};
    }
    /**
     * @param {number} index - Index of the element that is moved
     * @param {number} direction - Movement direction. -1 for UP, +1 for DOWN
     */
    AbstractListFieldComponent.prototype.moveElement = function (index, direction) {
        var newIndex = index + direction;
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
    /**
     * Returns path of the property of an element at index.
     */
    AbstractListFieldComponent.prototype.getValuePath = function (index, property) {
        var valuePathString = "" + this.getElementPathString(index) + this.pathUtilService.separator + property;
        if (!this.pathCache[valuePathString]) {
            this.pathCache[valuePathString] = this.path.concat(index, property);
        }
        return this.pathCache[valuePathString];
    };
    AbstractListFieldComponent.prototype.getElementPathString = function (index) {
        return "" + this.pathString + this.pathUtilService.separator + index;
    };
    return AbstractListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_field__["a" /* AbstractFieldComponent */]));


/***/ }),

/***/ 914:
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

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(13);
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
    function AddFieldDropdownComponent(domUtilService, emptyValueService, pathUtilService) {
        this.domUtilService = domUtilService;
        this.emptyValueService = emptyValueService;
        this.pathUtilService = pathUtilService;
        this.onFieldAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.expression = '';
    }
    Object.defineProperty(AddFieldDropdownComponent.prototype, "disabled", {
        get: function () {
            return Object.keys(this.schema).length === this.fields.size;
        },
        enumerable: true,
        configurable: true
    });
    AddFieldDropdownComponent.prototype.focusElementIfOpen = function (isDropdownOpen, el) {
        if (isDropdownOpen) {
            // focus doesn't work without setTimeout, since dropdown is closed when this is called.
            setTimeout(function () { return el.focus(); });
        }
    };
    AddFieldDropdownComponent.prototype.onFieldSelect = function (field) {
        var _this = this;
        this.onFieldAdd.emit(field);
        var newFieldPathString = "" + this.pathString + this.pathUtilService.separator + field;
        setTimeout(function () { return _this.domUtilService.focusAndSelectFirstInputChildById(newFieldPathString); });
    };
    AddFieldDropdownComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'add-field-dropdown',
                    styles: [".btn-add-field-dropdown { padding: 0; font-size: 21px; opacity: 0.4; border: 0; background: transparent; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; color: darkslategray; margin-bottom: 2px; } .btn-add-field-dropdown:hover { color: blue; opacity: 0.6; } .dropdown-filter-container { padding-left: 3px; padding-right: 3px; } .dropdown-filter-container input { width: 100%; } "],
                    template: "<div *ngIf=\"!disabled\" class=\"btn-group\" dropdown keyboardNav=\"true\" (onToggle)=\"focusElementIfOpen($event, expressionInput)\"> <button id=\"simple-btn-keyboard-nav\" type=\"button\" class=\"btn-add-field-dropdown\" dropdownToggle><ng-content></ng-content> <span class=\"caret\"></span></button> <ul class=\"dropdown-menu\" dropdownMenu aria-labelledby=\"simple-btn-keyboard-nav\"> <li class=\"dropdown-filter-container\"> <input #expressionInput [(ngModel)]=\"expression\" placeholder=\"filter\"> </li> <li class=\"divider dropdown-divider\"></li> <li *ngFor=\"let key of schema | differentKeys:fields | filterByExpression:expression\"> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onFieldSelect(key)\">{{key}}</a> </li> </ul> </div>"
                },] },
    ];
    /** @nocollapse */
    AddFieldDropdownComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["k" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* EmptyValueService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["l" /* PathUtilService */], },
    ]; };
    AddFieldDropdownComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'fields': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onFieldAdd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */] },],
    };
    return AddFieldDropdownComponent;
}());


/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__ = __webpack_require__(915);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__["a"]; });



/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
            _this.domUtilService.focusAndSelectFirstInputChildById(newElementPathString);
        });
    };
    AddNewElementButtonComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'add-new-element-button',
                    styles: ["div.button-container { display: inline-block; } .btn-new-field { font-size: 13px; font-weight: bold; text-shadow: 0 1px 0 #fff; opacity: 0.5; background: transparent; border: 0; bottom: -5px; left: -5px; padding: 0px; } .btn-new-field:hover { color: green; opacity: 0.6; } "],
                    template: "<div class=\"button-container\"> <button type=\"button\" class=\"btn-new-field\" (click)=\"addNewElement()\">Add new</button> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    AddNewElementButtonComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["k" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* EmptyValueService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* PathUtilService */], },
    ]; };
    AddNewElementButtonComponent.propDecorators = {
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return AddNewElementButtonComponent;
}());


/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__ = __webpack_require__(917);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__["a"]; });



/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(13);
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
    AnyTypeFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'any-type-field',
                    styles: [""],
                    template: "<div [ngClass]=\"{disableCursorClass: isDisabled}\"> <div [ngSwitch]=\"componentType\" [ngClass]=\"{disableEventsClass: isDisabled}\"> <div *ngSwitchCase=\"'table-list'\"> <table-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></table-list-field> </div> <div *ngSwitchCase=\"'complex-list'\"> <complex-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></complex-list-field> </div> <div *ngSwitchCase=\"'primitive-list'\"> <primitive-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></primitive-list-field> </div> <div *ngSwitchCase=\"'object'\"> <object-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></object-field> </div> <div *ngSwitchCase=\"'ref'\"> <ref-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></ref-field> </div> <div *ngSwitchCase=\"'value-change-watcher'\"> <value-change-watcher [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></value-change-watcher> </div> <div *ngSwitchDefault> <primitive-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></primitive-field> </div> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    AnyTypeFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* ComponentTypeService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* AppGlobalsService */], },
    ]; };
    AnyTypeFieldComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return AnyTypeFieldComponent;
}());


/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__ = __webpack_require__(919);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__["a"]; });



/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(13);
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
    function AutocompleteInputComponent(remoteAutocompletionService, jsonStoreService) {
        this.remoteAutocompletionService = remoteAutocompletionService;
        this.jsonStoreService = jsonStoreService;
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onKeypress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    AutocompleteInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if url option set then use remote autocompletion service
        if (this.autocompletionConfig.url) {
            this.typeaheadOptionField = 'text';
            this.dataSource = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // Runs on every
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
    AutocompleteInputComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'autocomplete-input',
                    styles: [""],
                    template: "<div class=\"autocomplete-container\"> <input attr.data-path=\"{{pathString}}\" [ngModel]=\"value\" (ngModelChange)=\"onModelChange($event)\" (keypress)=\"onKeypress.emit($event)\" (blur)=\"onBlur.emit()\" [typeahead]=\"dataSource\" [typeaheadOptionsLimit]=\"autocompletionConfig.size\" [typeaheadOptionField]=\"typeaheadOptionField\" (typeaheadOnSelect)=\"onCompletionSelect($event.item)\" [typeaheadWaitMs]=\"200\" [tabindex]=\"tabIndex\" placeholder=\"{{placeholder}}\"> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    AutocompleteInputComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["r" /* RemoteAutocompletionService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* JsonStoreService */], },
    ]; };
    AutocompleteInputComponent.propDecorators = {
        'autocompletionConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */] },],
        'onKeypress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */] },],
    };
    return AutocompleteInputComponent;
}());


/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__ = __webpack_require__(921);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__["a"]; });



/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_list_field__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var ComplexListFieldComponent = (function (_super) {
    __extends(ComplexListFieldComponent, _super);
    function ComplexListFieldComponent(appGlobalsService, jsonStoreService, domUtilService, pathUtilService) {
        _super.call(this, appGlobalsService, jsonStoreService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.currentFound = 0;
        this.currentPage = 1;
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
        this.keys = this.getKeysForCurrentPage();
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
            this.keys = this.getKeysForCurrentPage();
        }
    };
    ComplexListFieldComponent.prototype.onFieldAdd = function (index, field) {
        this.keys = this.keys
            .update(index, function (value) { return value.add(field); });
    };
    ComplexListFieldComponent.prototype.deleteField = function (index, field) {
        this.values = this.values.removeIn([index, field]);
        this.jsonStoreService.setIn(this.path, this.values);
        // remove it from keys too, so that it will not be displayed as empty
        this.keys = this.keys
            .update(index, function (value) { return value.remove(field); });
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
        setTimeout(function () { return _this.domUtilService.focusAndSelectFirstInputChildById(itemId); });
    };
    ComplexListFieldComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
        this.paginatedIndices = this.getIndicesForPage(page);
        this.keys = this.getKeysForCurrentPage();
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
    ComplexListFieldComponent.prototype.getKeysForCurrentPage = function () {
        var _this = this;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])(this.paginatedIndices
            .map(function (pIndex) { return _this.values.get(pIndex).keySeq().toSet(); }));
    };
    ComplexListFieldComponent.prototype.getPageForIndex = function (index) {
        return Math.floor((index / this.navigator.itemsPerPage) + 1);
    };
    ComplexListFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'complex-list-field',
                    styles: [".complex-list-field-wrapper { margin: 5px 15px 15px 15px; padding: 5px; box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25); } .button-holder-complex-list-actions { text-align: right; } .navigator-container { width: 100%; } .navigator-item-right { float: right; padding-right: 13px !important; } .navigator-item-right label { position: relative; top: -19px; } .navigator-item-left { padding-left: 13px !important; } .transparent { background: transparent; } .borderless { border: none; } .find-button { color: darkslategray; opacity: 0.83; } .find-button .fa-search { opacity: 0.83; } "],
                    template: "<div [id]=\"pathString\"> <!-- Navigator --> <table *ngIf=\"navigator\" class=\"navigator-container\"> <tr> <td class=\"form-group navigator-item-left\"> <div class=\"input-group input-group-sm\"> <span class=\"input-group-btn\"> <button type=\"button\" class=\"btn btn-default find-button\" (click)=\"onFindClick()\"> <i class=\"fa fa-search\" aria-hidden=\"true\"></i> </button> </span> <input type=\"search\" class=\"form-control\" [(ngModel)]=\"findExpression\" (keypress)=\"onFindInputKeypress($event.key)\" placeholder=\"Find\" /> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound <= 0\" (click)=\"onFoundNavigate(-1)\">❮</button> </span> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound >= foundIndices.length - 1\" (click)=\"onFoundNavigate(1)\">❯</button> </span> <span *ngIf=\"foundIndices\" [ngSwitch]=\"foundIndices.length\" class=\"input-group-addon transparent borderless\"> <span *ngSwitchCase=\"0\"> Nothing found </span> <span *ngSwitchDefault> {{currentFound + 1}} of {{foundIndices.length}} </span> </span> </div> </td> <td class=\"navigator-item-right\"> <label> {{paginatedIndices[0] + 1}}-{{paginatedIndices[paginatedIndices.length - 1] + 1}} of {{values.size}} {{path[path.length - 1]}} </label> <br> <pagination [totalItems]=\"values.size\" [ngModel]=\"currentPage\" [maxSize]=\"navigator.maxVisiblePageCount\" [itemsPerPage]=\"navigator.itemsPerPage\" class=\"pagination-sm pagination-top\" [boundaryLinks]=\"true\" [rotate]=\"false\" [firstText]=\"'❮❮'\" [previousText]=\"'❮'\" [nextText]=\"'❯'\" [lastText]=\"'❯❯'\" (pageChanged)=\"onPageChange($event.page)\"></pagination> </td> </tr> </table> <div *ngFor=\"let pIndex of paginatedIndices; let i = index; trackBy:trackByElement\"> <div class=\"complex-list-field-wrapper\"> <table class=\"table\" [id]=\"getElementPathString(pIndex)\"> <tr *ngFor=\"let key of keys.get(i) | addAlwaysShowFields:schema.items | filterAndSortBySchema:schema.items; trackBy:trackByElement\"> <td class=\"label-holder\"> <div> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.items.properties[key].disabled\"> <li *ngIf=\"schema.items.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getValuePath(pIndex, key)\" [schema]=\"schema.items.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(pIndex, key)\">Delete</button> </li> </title-dropdown> </div> </td> <td> <any-type-field [value]=\"values.get(pIndex).get(key) | selfOrEmpty:schema.items.properties[key]\" [schema]=\"schema.items.properties[key]\" [path]=\"getValuePath(pIndex, key)\"></any-type-field> </td> </tr> <!-- ADD-FIELD-FROM-SCHEMA, UP/DOWN and DELETE buttons for each row group --> <tr *ngIf=\"values.size > 0\"> <td class=\"button-holder\"> <add-field-dropdown [fields]=\"keys.get(i)\" [pathString]=\"getElementPathString(pIndex)\" (onFieldAdd)=\"onFieldAdd(i, $event)\" [schema]=\"schema.items.properties\">+</add-field-dropdown> </td> <td class=\"button-holder button-holder-complex-list-actions\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-complex\" (click)=\"deleteElement(pIndex)\">&times;</button> <button *ngIf=\"pIndex > 0\" type=\"button\" class=\"editor-btn-move-up editor-btn-move-up-complex\" (click)=\"moveElement(pIndex, -1)\"> <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i> </button> <button *ngIf=\"pIndex < (values.size - 1)\" class=\"editor-btn-move-down editor-btn-move-down-complex\" type=\"button\" (click)=\"moveElement(pIndex, 1)\"> <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> </button> </td> </tr> </table> </div> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ComplexListFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["k" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["l" /* PathUtilService */], },
    ]; };
    ComplexListFieldComponent.propDecorators = {
        'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ComplexListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_list_field__["a" /* AbstractListFieldComponent */]));


/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__ = __webpack_require__(923);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__["a"]; });



/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(115);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var EditorPreviewerComponent = (function (_super) {
    __extends(EditorPreviewerComponent, _super);
    function EditorPreviewerComponent() {
        _super.apply(this, arguments);
    }
    EditorPreviewerComponent.prototype.openUrlInNewTab = function (url) {
        window.open(url);
    };
    EditorPreviewerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'editor-previewer',
                    styles: ["div.preview-container { width: 100%; overflow-y: auto; height: 90vh; } span.preview-link { color: #337ab7; cursor: pointer; } span.preview-link:hover { color: cornflowerblue; } "],
                    template: "<div> <tabset> <tab *ngFor=\"let preview of previews trackBy:trackByElement\" [heading]=\"preview.name\"> <div [ngSwitch]=\"preview.type\"> <div *ngSwitchCase=\"'html'\" class=\"preview-container\"> <template tabHeading> <span class=\"preview-link\" (click)=\"openUrlInNewTab(preview.url)\"> <i class=\"fa fa-external-link\"></i> </span> </template> <html-view [url]=\"preview.url\"></html-view> </div> </div> </tab> </tabset> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    EditorPreviewerComponent.ctorParameters = function () { return []; };
    EditorPreviewerComponent.propDecorators = {
        'previews': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return EditorPreviewerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));


/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__ = __webpack_require__(925);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__["a"]; });



/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
                bodyHtml: this.domSanitizer.bypassSecurityTrustHtml("<pre><code>" + stringyfiedDiffHtml + "</code></pre>"),
                type: 'confirm',
                onConfirm: function () {
                    _this.modalService.closeCurrentModal();
                    _this.jsonStoreService.setIn(_this.path, _this.replaced);
                }
            });
        }
    };
    FindReplaceComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'find-replace',
                    styles: [".find-replace-container { margin: 4px 3px 3px 2px; } .find-replace-container input { font-size: 13px; } .top-container-item { margin-bottom: 3px; } label { font-size: 12px; font-weight: 400; } .horizontal-padding, .find-replace-container div { padding-right: 20px; padding-left: 20px; } .match-whole-container input[type=checkbox] { width: 100%; } "],
                    template: "<div class=\"find-replace-container\"> <div class=\"top-container-item\"> <input placeholder=\"Find\" [(ngModel)]=\"find\" (keypress)=\"onKeypress($event.key)\" /> </div> <div> <input placeholder=\"Replace\" [(ngModel)]=\"replace\" (keypress)=\"onKeypress($event.key)\" /> </div> <div class=\"match-whole-container\"> <input type=\"checkbox\" [(ngModel)]=\"matchWhole\" (keypress)=\"onKeypress($event.key)\" tooltip=\"Match Whole\"/> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    FindReplaceComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["q" /* FindReplaceAllService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["p" /* ModalService */], },
    ]; };
    FindReplaceComponent.propDecorators = {
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return FindReplaceComponent;
}());


/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_replace_component__ = __webpack_require__(927);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__find_replace_component__["a"]; });



/***/ }),

/***/ 929:
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
    HtmlViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'html-view',
                    styles: ["iframe { height: 100%; width: 100%; } "],
                    template: "<iframe [src]=\"url | sanitizeUrl\"></iframe>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    HtmlViewComponent.ctorParameters = function () { return []; };
    HtmlViewComponent.propDecorators = {
        'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return HtmlViewComponent;
}());


/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_view_component__ = __webpack_require__(929);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__html_view_component__["a"]; });



/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json_editor_module__ = __webpack_require__(933);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "JsonEditorModule", function() { return __WEBPACK_IMPORTED_MODULE_0__json_editor_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_interfaces__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pipes__ = __webpack_require__(563);
/* unused harmony namespace reexport */
// export everything in order to be AoT compatible






/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_tracker__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






var JsonEditorComponent = (function (_super) {
    __extends(JsonEditorComponent, _super);
    function JsonEditorComponent(http, appGlobalsService, jsonStoreService, jsonUtilService, jsonSchemaService, recordFixerService, schemaFixerService, shortcutsService) {
        _super.call(this);
        this.http = http;
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.jsonUtilService = jsonUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.recordFixerService = recordFixerService;
        this.schemaFixerService = schemaFixerService;
        this.shortcutsService = shortcutsService;
        this.errorMap = {};
        this.onRecordChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.previews = [];
        this.pathCache = {};
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
        // get names of top-level fields
        this.keys = __WEBPACK_IMPORTED_MODULE_2_immutable__["Set"].fromKeys(this.record);
        // use fromJS to convert input to immutable then pass it to the store
        this._record = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])(this.record);
        this.jsonStoreService.setJson(this._record);
        // listen for all changes on json
        this.jsonStoreService.jsonChange
            .skipWhile(function (json) { return json === _this._record; })
            .subscribe(function (json) {
            _this._record = json;
            // emit the change as plain JS object
            _this.onRecordChange.emit(json.toJS());
        });
        this.jsonSchemaService.setSchema(this.schema);
    };
    /**
     * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
     */
    JsonEditorComponent.prototype.extractPreviews = function () {
        var _this = this;
        var previewConfigs = this.config.previews;
        if (previewConfigs) {
            // if url is not set directly, populate it
            previewConfigs
                .forEach(function (previewConfig) {
                var url;
                if (previewConfig.url) {
                    url = previewConfig.url;
                }
                else if (previewConfig.getUrl) {
                    url = previewConfig.getUrl(_this.record);
                }
                else if (previewConfig.urlPath) {
                    url = _this.jsonUtilService.getValueInPath(_this.record, previewConfig.urlPath);
                }
                else {
                    throw new Error('Either url, urlPath or getUrl should be set for a preview');
                }
                _this.previews.push({
                    name: previewConfig.name,
                    type: previewConfig.type,
                    url: url
                });
            });
        }
    };
    JsonEditorComponent.prototype.deleteField = function (field) {
        var record = this._record.remove(field);
        this.jsonStoreService.setIn([], record);
        this.keys = this.keys.remove(field);
    };
    JsonEditorComponent.prototype.getPathForField = function (field) {
        if (!this.pathCache[field]) {
            this.pathCache[field] = [field];
        }
        return this.pathCache[field];
    };
    JsonEditorComponent.prototype.onFieldAdd = function (field) {
        this.keys = this.keys.add(field);
    };
    Object.defineProperty(JsonEditorComponent.prototype, "shortcuts", {
        get: function () {
            return this.shortcutsService.getShortcutsWithConfig(this.config.shortcuts);
        },
        enumerable: true,
        configurable: true
    });
    JsonEditorComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'json-editor',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
                    styles: ["body, html { height: 100%; } @media (min-width: 768px) { .left { background-color: #1D2D3D; height: 100%; overflow: auto; } .middle { height: 100%; overflow: auto; } .right { height: 100%; overflow: auto; padding-right: 0px; padding-left: 0px; } } .editor-container { height: 100%; margin-right: 0px; margin-left: 0px; } table { margin-bottom: 0px !important; } #editor { font-size: 13px; border: 2px solid #a5adb5; } #editor .field-wrapper { border-bottom: 2px solid #a5adb5; } #editor td { background-color: #f9f9f9; border: none; padding: 0; } #editor td > * { vertical-align: middle; } #editor th { font-weight: 400; padding: 1px 0px 1px 3px; } #editor td.label-holder { width: 1%; white-space: nowrap; padding-right: 5px; } #editor tbody { border: none; } .editor-btn-delete { font-size: 16px; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; opacity: 0.2; background: transparent; border: 0; padding: 0 0 3px 3px; } .editor-btn-delete:hover { color: red; opacity: 0.6; } .editor-btn-delete.editor-btn-delete-text { font-size: 13px; opacity: 0.5; padding: 0px; } .editor-btn-delete.editor-btn-delete-complex { font-size: 21px; } .editor-btn-move-down { padding-bottom: 0; } .editor-btn-move-up-complex, .editor-btn-move-down-complex { font-size: 14px !important; vertical-align: bottom !important; padding-bottom: 2px !important; } .editor-btn-move-up, .editor-btn-move-down { padding: 0; font-size: 11px; border: 0; background: transparent; opacity: 0.2; } .editor-btn-move-up:hover, .editor-btn-move-down:hover { opacity: 0.6; } ul.pagination-top { margin: -16px 0px 0px 0px; } td.button-holder, th.button-holder { width: 46px; } div.error { background: #f2968d; } div.editor-table-container { float: left; width: 60%; height: 100vh; overflow-y: auto; padding-right: 8px; } div.right-side-container { float: right; width: 40%; height: 100vh; padding-left: 8px; border-left: 2px solid lightgray; } label { color: #c1c1c1; } .flash { border: 2px solid yellow; } table.editable-inner-table label { display: inline; font-weight: initial; padding-left: 5px; } table.editable-inner-table .dropdown-menu { left: inherit; right: 0px; min-width: 100px; } .left div.dropdown { width: 100%; } .left ul.dropdown-menu { right: 0px; } .left button.btn-add-field-dropdown { background: white; padding: 5px; opacity: 0.9; line-height: normal; font-size: 16px; width: 100%; } .left button.btn-add-field-dropdown:hover { opacity: 1; color: black; } label.admin-mode { color: #e0dfdf; font-size: 13px; font-weight: normal; width: 90%; padding-left: 4px; } div.admin-mode { padding-top: 8px; width: 100%; } .disableCursorClass { cursor: not-allowed; } .disableEventsClass { pointer-events: none; } .disableEventsClass input, .disableEventsClass button, .disableEventsClass textarea, .disableEventsClass a, .disableEventsClass i, .disableEventsClass span { opacity: .5; } .title-dropdown-item button { width: 100%; text-align: left; padding-left: 20px !important; padding-right: 20px !important; } .title-dropdown-item:hover { background: #f5f5f5; } .match-whole-container .tooltip.top .tooltip-arrow { border-top-color: transparent; } .match-whole-container .tooltip { width: 90%; } .value-container { background-color: #edf6fd !important; } .narrowColumn4 { width: 8.33333% !important; } .widerColumn6 { width: 75% !important; } button.btn-toggle { float: right; margin-top: 5px; margin-right: 5px; } .autocomplete-container .dropdown { position: relative !important; top: 0px !important; left: 0px !important; } "],
                    template: "<div class=\"row editor-container\"> <div id=\"editor-left-column\" class=\"col-md-2 left\"> <tree-menu [record]=\"_record\" [schema]=\"schema\"></tree-menu> <add-field-dropdown [fields]=\"keys\" [pathString]=\"''\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.properties\">Add field</add-field-dropdown> <div *ngIf=\"config.enableAdminModeSwitch\" class=\"admin-mode\" tooltip=\"Allows editing all fields (use with care)\"> <input id=\"admin-mode-checkbox\" type=\"checkbox\" [(ngModel)]=\"appGlobalsService.adminMode\" /> <label class=\"admin-mode\" for=\"admin-mode-checkbox\">Enable Admin Mode</label> </div> </div> <div id=\"editor-middle-column\" [ngClass]=\"{widerColumn6: isPreviewerHidden}\" class=\"col-md-6 middle\" [shortcuts]=\"shortcuts\"> <table id=\"editor\" class=\"table\"> <div class=\"field-wrapper\" *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\"> <tr> <td class=\"label-holder\"> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.properties[key].disabled\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getPathForField(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> <li class=\"divider\"></li> <li class=\"title-dropdown-item\"> <find-replace [path]=\"getPathForField(key)\" [schema]=\"schema.properties[key]\"></find-replace> </li> </title-dropdown> </td> </tr> <tr> <td> <any-type-field [value]=\"_record.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getPathForField(key)\"></any-type-field> </td> </tr> </div> </table> </div> <div id=\"editor-right-column\" [ngClass]=\"{narrowColumn4: isPreviewerHidden}\" class=\"col-md-4 right\"> <button id=\"btn-preview-toggle\" type=\"button\" class=\"btn btn-default btn-toggle\" (click)=\"isPreviewerHidden = !isPreviewerHidden\">{{isPreviewerHidden ? \"Show Preview\" : \"Hide Preview\"}}</button> <editor-previewer [hidden]=\"isPreviewerHidden\" [previews]=\"previews\"> </editor-previewer> </div> </div> <!-- Modal View controlled by ModalService --> <modal-view> </modal-view> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    JsonEditorComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["e" /* JsonUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["f" /* JsonSchemaService */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["g" /* RecordFixerService */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["h" /* SchemaFixerService */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["i" /* ShortcutService */], },
    ]; };
    JsonEditorComponent.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'errorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onRecordChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */] },],
    };
    return JsonEditorComponent;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_tracker__["a" /* AbstractTrackerComponent */]));


/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_field_dropdown__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_new_element_button__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__any_type_field__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__autocomplete_input__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__complex_list_field__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editor_previewer__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__find_replace__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__html_view__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__json_editor_component__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal_view__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__object_field__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__value_change_watcher__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__primitive_list_field__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__primitive_field__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ref_field__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__table_list_field__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__title_dropdown__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tree_menu__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__searchable_dropdown__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared__ = __webpack_require__(949);
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
/* unused harmony reexport TableListFieldComponent */
/* unused harmony reexport TitleDropdownComponent */
/* unused harmony reexport TreeMenuItemComponent */
/* unused harmony reexport TreeMenuComponent */
/* unused harmony reexport JsonEditorComponent */
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

























var JsonEditorModule = (function () {
    function JsonEditorModule() {
    }
    JsonEditorModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                    declarations: __WEBPACK_IMPORTED_MODULE_24__shared__["a" /* SHARED_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_24__shared__["b" /* SHARED_DIRECTIVES */], [
                        __WEBPACK_IMPORTED_MODULE_5__add_field_dropdown__["a" /* AddFieldDropdownComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__add_new_element_button__["a" /* AddNewElementButtonComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__any_type_field__["a" /* AnyTypeFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__autocomplete_input__["a" /* AutocompleteInputComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__complex_list_field__["a" /* ComplexListFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__object_field__["a" /* ObjectFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__value_change_watcher__["a" /* ValueChangeWatcherComponent */],
                        __WEBPACK_IMPORTED_MODULE_10__editor_previewer__["a" /* EditorPreviewerComponent */],
                        __WEBPACK_IMPORTED_MODULE_11__find_replace__["a" /* FindReplaceComponent */],
                        __WEBPACK_IMPORTED_MODULE_14__modal_view__["a" /* ModalViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__primitive_list_field__["a" /* PrimitiveListFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_18__primitive_field__["a" /* PrimitiveFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_19__ref_field__["a" /* RefFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_23__searchable_dropdown__["a" /* SearchableDropdownComponent */],
                        __WEBPACK_IMPORTED_MODULE_20__table_list_field__["a" /* TableListFieldComponent */],
                        __WEBPACK_IMPORTED_MODULE_21__title_dropdown__["a" /* TitleDropdownComponent */],
                        __WEBPACK_IMPORTED_MODULE_22__tree_menu__["a" /* TreeMenuItemComponent */],
                        __WEBPACK_IMPORTED_MODULE_22__tree_menu__["b" /* TreeMenuComponent */],
                        __WEBPACK_IMPORTED_MODULE_13__json_editor_component__["a" /* JsonEditorComponent */],
                        __WEBPACK_IMPORTED_MODULE_12__html_view__["a" /* HtmlViewComponent */]
                    ]),
                    exports: [__WEBPACK_IMPORTED_MODULE_13__json_editor_component__["a" /* JsonEditorComponent */]],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["Ng2BootstrapModule"].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
                    ],
                    providers: __WEBPACK_IMPORTED_MODULE_24__shared__["c" /* SHARED_SERVICES */]
                },] },
    ];
    /** @nocollapse */
    JsonEditorModule.ctorParameters = function () { return []; };
    return JsonEditorModule;
}());



/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_view_component__ = __webpack_require__(935);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_view_component__["a"]; });



/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(13);
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
    ModalViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'modal-view',
                    styles: [""],
                    template: "<div class=\"modal fade\" (onShown)=\"onShow()\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" [config]=\"{ backdrop: false }\"> <div class=\"modal-dialog modal-lg\"> <div *ngIf=\"options\" class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" (click)=\"modal.hide()\">&times;</button> <h4 class=\"modal-title\">{{options.title}}</h4> </div> <div class=\"modal-body\"> <div [innerHTML]=\"options.bodyHtml\"></div> <div [ngSwitch]=\"options.type\"> <div *ngSwitchCase=\"'confirm'\"> <button class=\"btn btn-default\" (click)=\"options.onConfirm();\"> Confirm <i class=\"fa fa-check\"></i> </button> </div> </div> </div> </div> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ModalViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["p" /* ModalService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
    ]; };
    ModalViewComponent.propDecorators = {
        'modal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */], args: ['modal',] },],
    };
    return ModalViewComponent;
}());


/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_field_component__ = __webpack_require__(937);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__object_field_component__["a"]; });



/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var ObjectFieldComponent = (function (_super) {
    __extends(ObjectFieldComponent, _super);
    function ObjectFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.pathCache = {};
    }
    ObjectFieldComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.keys = this.value.keySeq().toSet();
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
    ObjectFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'object-field',
                    styles: ["table.table { background-color: #f9f9f9; } "],
                    template: "<div [id]=\"pathString\"> <table class=\"table\"> <tr *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\"> <!-- SUB FIELD TITLE MENU --> <td> <div> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.properties[key].disabled\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getFieldPath(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> </title-dropdown> </div> </td> <!-- SUB FIELD COMPONENT --> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=schema.properties[key] [path]=\"getFieldPath(key)\"></any-type-field> </td> </tr> <!-- ADD SUB FIELD FROM SCHEMA DROPDOWN --> <tr> <td class=\"button-holder\"> <add-field-dropdown [fields]=\"keys\" [pathString]=\"pathString\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.properties\">+</add-field-dropdown> </td> </tr> </table> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ObjectFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* PathUtilService */], },
    ]; };
    ObjectFieldComponent.propDecorators = {
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ObjectFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));


/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__ = __webpack_require__(939);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__["a"]; });



/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var PrimitiveFieldComponent = (function (_super) {
    __extends(PrimitiveFieldComponent, _super);
    function PrimitiveFieldComponent(schemaValidationService, componentTypeService, appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, pathUtilService);
        this.schemaValidationService = schemaValidationService;
        this.componentTypeService = componentTypeService;
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
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
        if (this.schema['type'] === 'string' && this.schema['enum'] === undefined) {
            try {
                this.schemaValidationService.validateStringValue(this.value.toString(), this.schema);
            }
            catch (error) {
                console.error(error);
            }
        }
        // TODO: should we make the change even if it is not validated
        this.jsonStoreService.setIn(this.path, this.value);
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
    PrimitiveFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'primitive-field',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
                    styles: ["td.value-container textarea, td.value-container input { vertical-align: middle; width: 50%; padding: 0 0 0 3px; transition: all 0.5s ease; resize: none; border: none; background-color: transparent; display: inline-block; width: 100%; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; } table.primitive-field-container { width: 100%; } td.link-button-container { width: 22px; } td.value-container { width: 100%; } td.value-container:hover { background-color: #ffa !important; } a.no-decoration { text-decoration: none; } "],
                    template: "<div [ngSwitch]=\"valueType\" [id]=\"pathString\"> <table class=\"primitive-field-container\"> <tr> <template #errorsTooltipTemplate> <ul> <li *ngFor=\"let error of errors\"> {{error.message}} </li> </ul> </template> <td class=\"value-container\" [ngClass]=\"errorNgClass\" [tooltip]=\"errorsTooltipTemplate\" [isDisabled]=\"!isErrorTooltipEnabled\"> <div *ngSwitchCase=\"'string'\"> <textarea rows=\"1\" textareaAutofit  attr.data-path=\"{{pathString}}\" [tabindex]=\"tabIndex\" [(ngModel)]=\"value\" (blur)=\"commitValueChange()\" (keypress)=\"onKeypress($event)\" placeholder=\"{{schema.title}}\"></textarea> </div> <div *ngSwitchCase=\"'enum'\"> <searchable-dropdown [pathString]=\"pathString\" [value]=\"value\" [placeholder]=\"schema.title\" [items]=\"schema.enum\" [shortcutMap]=\"schema.enumShorcutMap\" (onSelect)=\"onSearchableDropdownSelect($event)\" [tabIndex]=\"tabIndex\"></searchable-dropdown> </div> <div *ngSwitchCase=\"'autocomplete'\"> <autocomplete-input [pathString]=\"pathString\" [value]=\"value\" [path]=\"path\" [autocompletionConfig]=\"schema.autocompletionConfig\" (onBlur)=\"commitValueChange()\" (onKeypress)=\"onKeypress($event)\" (onValueChange)=\"onAutocompleteInputValueChange($event)\" [placeholder]=\"schema.title\" [tabIndex]=\"tabIndex\"></autocomplete-input> </div> <div *ngSwitchCase=\"'integer'\"> <input type=\"number\" [(ngModel)]=\"value\" [tabindex]=\"tabIndex\" attr.data-path=\"{{pathString}}\" (blur)=\"commitValueChange()\" (keypress)=\"onKeypress($event)\" placeholder=\"{{schema.title}}\"> </div> <div *ngSwitchCase=\"'boolean'\"> <input type=\"checkbox\" [(ngModel)]=\"value\" (ngModelChange)=\"commitValueChange()\" placeholder=\"{{schema.title}}\"> </div> <div *ngSwitchDefault> ## Not recognized type: {{valueType}} </div> </td> <td class=\"link-button-container\"> <a *ngIf=\"schema.linkBuilder\" class=\"no-decoration\" target=\"_blank\" [href]=\"schema.linkBuilder(value)\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> <a *ngIf=\"!schema.linkBuilder && schema.format === 'url'\" class=\"no-decoration\" target=\"_blank\" [href]=\"value\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> </td> </tr> </table> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    PrimitiveFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["n" /* SchemaValidationService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["o" /* ComponentTypeService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* PathUtilService */], },
    ]; };
    PrimitiveFieldComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return PrimitiveFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));


/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__ = __webpack_require__(941);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__["a"]; });



/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



// FIXME: this doesn't have all stuff of AbstractListFieldComponent. Maybe, it shouldn't extend it.
var PrimitiveListFieldComponent = (function (_super) {
    __extends(PrimitiveListFieldComponent, _super);
    function PrimitiveListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, jsonStoreService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
    }
    /**
     * Returns path of an element at index.
     * @override
     */
    PrimitiveListFieldComponent.prototype.getValuePath = function (index) {
        var valuePathString = this.getElementPathString(index);
        if (!this.pathCache[valuePathString]) {
            this.pathCache[valuePathString] = this.path.concat(index);
        }
        return this.pathCache[valuePathString];
    };
    PrimitiveListFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'primitive-list-field',
                    styles: ["td { padding: 0px !important; } "],
                    template: "<div [id]=\"pathString\"> <div class=\"wide\"> <table class=\"table\"> <tr *ngFor=\"let value of values | selfOrEmpty:schema; let i = index; trackBy:trackByElement\"> <td> <primitive-field [value]=\"value\" [schema]=\"schema.items\" [path]=\"getValuePath(i)\"></primitive-field> </td> <!-- UP/DOWN and DELETE buttons for each row --> <td *ngIf=\"values.size > 0\" class=\"button-holder\"> <button type=\"button\" class=\"editor-btn-delete\" (click)=\"deleteElement(i)\"> &times; </button> <button *ngIf=\"i > 0\" type=\"button\" class=\"editor-btn-move-up\" (click)=\"moveElement(i, -1)\"> <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i> </button> <button *ngIf=\"i < (values.size - 1)\" type=\"button\" class=\"editor-btn-move-down\" (click)=\"moveElement(i, 1)\"> <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> </button> </td> </tr> </table> </div> </div> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    PrimitiveListFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* PathUtilService */], },
    ]; };
    PrimitiveListFieldComponent.propDecorators = {
        'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return PrimitiveListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));


/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref_field_component__ = __webpack_require__(943);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ref_field_component__["a"]; });



/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__(13);
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
    function RefFieldComponent(viewContainer, http, dynamicTemplateLoaderService, pathUtilService) {
        this.viewContainer = viewContainer;
        this.http = http;
        this.dynamicTemplateLoaderService = dynamicTemplateLoaderService;
        this.pathUtilService = pathUtilService;
        this.shouldDisplayWithTemplate = false;
        this.isPreviewButtonHidden = false;
    }
    RefFieldComponent.prototype.ngOnChanges = function (changes) {
        var valueChange = changes['value'];
        // ngOnInit but needs to run before loading dynamic template
        if (valueChange && valueChange.isFirstChange()) {
            var config = this.schema['refConfig'];
            if (config) {
                this.isLazy = config['lazy'];
                this.customTemplate = config['template'];
                this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                    headers: this.createHeadersWithConfig(config)
                });
            }
        }
        // load template if necessary
        this.shouldDisplayWithTemplate = Boolean(this.customTemplate && this.value.get('$ref'));
        if (valueChange && valueChange.currentValue !== valueChange.previousValue && this.shouldDisplayWithTemplate) {
            this.loadTemplateWithRef(false);
        }
        // clear the dynamic template when new $ref is empty or undefined
        if (!this.shouldDisplayWithTemplate && this.dynamicTemplateComponentRef) {
            this.dynamicTemplateComponentRef.instance.context = undefined;
        }
    };
    RefFieldComponent.prototype.onPreviewClick = function () {
        this.loadTemplateWithRef(true);
        this.isPreviewButtonHidden = true;
    };
    Object.defineProperty(RefFieldComponent.prototype, "pathString", {
        get: function () {
            return this.pathUtilService.toPathString(this.path);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Displays the template
     *
     * if the template hasn't loaded, loads the template asyncw with current $ref in this.value
     * then assigns the loaded to this.dynamicTemplateComponentRef
     *
     * if the template has already loaded, refreshes its context value with the data that
     * is fetched from current $ref in this.value
     *
     * Note: if called by onPreviewClick, hides the preview button.
     *
     *
     * @param {boolean} force - should be set to load the template when it is lazy.
     */
    RefFieldComponent.prototype.loadTemplateWithRef = function (force) {
        var _this = this;
        var ref = this.value.get('$ref');
        this.refData$ = this.http
            .get(ref, this.requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.warn(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ error: error });
        });
        if (!this.isLazy || force) {
            if (!this.dynamicTemplateComponentRef) {
                this.dynamicTemplateLoaderService.loadTemplate(this.customTemplate, this.refData$, this.viewContainer)
                    .then(function (componentRef) {
                    _this.dynamicTemplateComponentRef = componentRef;
                });
            }
            else {
                this.dynamicTemplateComponentRef.instance.context = this.refData$;
            }
        }
        else {
            this.isPreviewButtonHidden = false;
            if (this.dynamicTemplateComponentRef) {
                this.dynamicTemplateComponentRef.instance.context = undefined;
            }
        }
    };
    RefFieldComponent.prototype.createHeadersWithConfig = function (config) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        config.headers
            .forEach(function (header) { return headers.append(header.name, header.value); });
        return headers;
    };
    RefFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'ref-field',
                    styles: ["button.btn-preview-template { background: transparent; border: 0; width: 100%; height: 100%; } "],
                    template: "<div [id]=\"pathString\" [ngSwitch]=\"shouldDisplayWithTemplate\" > <div *ngSwitchCase=\"true\"> <button class=\"btn-preview-template\" *ngIf=\"isLazy && !isPreviewButtonHidden\" (click)=\"onPreviewClick($event)\">👁</button> </div> <div *ngSwitchDefault> <a target=\"_blank\" [href]=\"value.get('$ref')\">{{value.get('$ref')}}</a> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    RefFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["m" /* DynamicTemplateLoaderService */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["l" /* PathUtilService */], },
    ]; };
    RefFieldComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return RefFieldComponent;
}());


/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__ = __webpack_require__(945);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__["a"]; });



/***/ }),

/***/ 945:
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
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
    SearchableDropdownComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'searchable-dropdown',
                    styles: ["div.btn-group { width: 100%; } .dropdown-menu { left: 0px !important; } .toggle-container { width: 100%; } .toggle-container input { width: 93%; } .toggle-container i { width: 5%; height: 100%; } .dropdown-toggle { box-shadow: none !important; } "],
                    template: "<div class=\"btn-group\" dropdown keyboardNav=\"true\" [(isOpen)]=\"status.isOpen\"> <div class=\"toggle-container\"> <input #inputToggle attr.data-path=\"{{pathString}}\" [placeholder]=\"placeholder\" [(ngModel)]=\"expressionOrValue\" (keypress)=\"onKeypress($event.key)\" [tabindex]=\"tabIndex\" (focus)=\"onFocus($event)\" dropdownToggle> <i class=\"fa fa-caret-down\" (click)=\"inputToggle.focus()\" dropdownToggle></i> </div> <ul class=\"dropdown-menu\" dropdownMenu role=\"menu\"> <li *ngFor=\"let item of items | filterByExpression:expression\" role=\"menuitem\"> <!-- href is needed for keyboard navigation --> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onItemClick(item)\">{{item}}</a> </li> </ul> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    SearchableDropdownComponent.ctorParameters = function () { return []; };
    SearchableDropdownComponent.propDecorators = {
        'items': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'shortcutMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */] },],
    };
    return SearchableDropdownComponent;
}());


/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textarea_autofit_directive__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcuts_directive__ = __webpack_require__(947);
/* unused harmony reexport TextareaAutofitDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_DIRECTIVES; });



var SHARED_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__textarea_autofit_directive__["a" /* TextareaAutofitDirective */],
    __WEBPACK_IMPORTED_MODULE_1__shortcuts_directive__["a" /* ShortcutsDirective */]
];


/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mousetrap__ = __webpack_require__(842);
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
    ShortcutsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Directive */], args: [{
                    selector: '[shortcuts]'
                },] },
    ];
    /** @nocollapse */
    ShortcutsDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    ]; };
    ShortcutsDirective.propDecorators = {
        'shortcuts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ShortcutsDirective;
}());


/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaAutofitDirective; });
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





var TextareaAutofitDirective = (function () {
    function TextareaAutofitDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setElementStyle(this.el.nativeElement, 'overflow', 'hidden');
        this.registerObservables();
    }
    TextareaAutofitDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.resizeElementToFitContent();
        });
    };
    ;
    TextareaAutofitDirective.prototype.ngOnDestroy = function () {
        if (this.windowResizeSub) {
            this.windowResizeSub.unsubscribe();
        }
        if (this.inputChangeSub) {
            this.inputChangeSub.unsubscribe();
        }
    };
    TextareaAutofitDirective.prototype.registerObservables = function () {
        var _this = this;
        this.windowResizeSub = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
            .debounceTime(100)
            .subscribe(function (event) {
            _this.resizeElementToFitContent();
        });
        this.inputChangeSub = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.el.nativeElement, 'input')
            .throttleTime(200)
            .subscribe(function (event) {
            _this.resizeElementToFitContent();
        });
    };
    TextareaAutofitDirective.prototype.resizeElementToFitContent = function () {
        // Set element's height:auto every time to be able to override it.
        this.renderer.setElementStyle(this.el.nativeElement, 'height', 'auto');
        this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
    };
    TextareaAutofitDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Directive */], args: [{
                    selector: '[textareaAutofit]'
                },] },
    ];
    /** @nocollapse */
    TextareaAutofitDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Renderer */], },
    ]; };
    return TextareaAutofitDirective;
}());


/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(946);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pipes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });






/***/ }),

/***/ 950:
/***/ (function(module, exports) {



/***/ }),

/***/ 951:
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
        return fields.union(alwaysShowFields);
    };
    AddAlwaysShowFieldsPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'addAlwaysShowFields'
                },] },
    ];
    /** @nocollapse */
    AddAlwaysShowFieldsPipe.ctorParameters = function () { return []; };
    return AddAlwaysShowFieldsPipe;
}());


/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
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
    DifferentKeysPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'differentKeys'
                },] },
    ];
    /** @nocollapse */
    DifferentKeysPipe.ctorParameters = function () { return []; };
    return DifferentKeysPipe;
}());


/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(13);
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
    FilterAndSortBySchemaPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'filterAndSortBySchema',
                },] },
    ];
    /** @nocollapse */
    FilterAndSortBySchemaPipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AppGlobalsService */], },
    ]; };
    return FilterAndSortBySchemaPipe;
}());


/***/ }),

/***/ 954:
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
    FilterByExpressionPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'filterByExpression',
                },] },
    ];
    /** @nocollapse */
    FilterByExpressionPipe.ctorParameters = function () { return []; };
    return FilterByExpressionPipe;
}());


/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(107);
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
    SanitizeUrlPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'sanitizeUrl',
                },] },
    ];
    /** @nocollapse */
    SanitizeUrlPipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
    ]; };
    return SanitizeUrlPipe;
}());


/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(44);
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
    SelfOrEmptyPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'selfOrEmpty',
                },] },
    ];
    /** @nocollapse */
    SelfOrEmptyPipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* EmptyValueService */], },
    ]; };
    return SelfOrEmptyPipe;
}());


/***/ }),

/***/ 957:
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
    UnderscoreToSpacePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'underscoreToSpace',
                },] },
    ];
    /** @nocollapse */
    UnderscoreToSpacePipe.ctorParameters = function () { return []; };
    return UnderscoreToSpacePipe;
}());


/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(264);
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
    AppGlobalsService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    AppGlobalsService.ctorParameters = function () { return []; };
    return AppGlobalsService;
}());


/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicTemplateLoaderService; });


var DynamicTemplateLoaderService = (function () {
    function DynamicTemplateLoaderService(compiler) {
        this.compiler = compiler;
        // cache for component factories for templates
        this.cache = new Map();
    }
    /**
     * Creates a dummy component with given template and context
     * and inserts it in given view container.
     *
     * @param {string} template - html template string
     * @param {any} context - context data which is referenced in `template` as `context`
     * @param {ViewContainerRef} viewContainer - view container where the template will inserted
     */
    DynamicTemplateLoaderService.prototype.loadTemplate = function (template, context, viewContainer) {
        var _this = this;
        // check if factory for dummy component is created before for the template
        if (this.cache.has(template)) {
            return new Promise(function (resolve) {
                var component = viewContainer.createComponent(_this.cache.get(template));
                component.instance.context = context;
                resolve(component);
            });
        }
        // dummy component with given template
        var DynamicTemplateComponent = (function () {
            function DynamicTemplateComponent() {
            }
            DynamicTemplateComponent.decorators = [
                { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{ template: template },] },
            ];
            /** @nocollapse */
            DynamicTemplateComponent.ctorParameters = function () { return []; };
            DynamicTemplateComponent.propDecorators = {
                'context': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
            };
            return DynamicTemplateComponent;
        }());
        // dummy module that wraps dummy component and CommonModule (for core pipes such as async)
        var DynamicTemplateModule = (function () {
            function DynamicTemplateModule() {
            }
            DynamicTemplateModule.decorators = [
                { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                            declarations: [DynamicTemplateComponent],
                            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]]
                        },] },
            ];
            /** @nocollapse */
            DynamicTemplateModule.ctorParameters = function () { return []; };
            return DynamicTemplateModule;
        }());
        // compile the module in runtime which will create the factory for dummy component
        return this.compiler.compileModuleAndAllComponentsAsync(DynamicTemplateModule)
            .then(function (module) { return module.componentFactories
            .find(function (factory) { return factory.componentType === DynamicTemplateComponent; }); })
            .then(function (factory) {
            _this.cache.set(template, factory);
            var component = viewContainer.createComponent(factory);
            component.instance.context = context;
            component.changeDetectorRef.markForCheck();
            return component;
        });
    };
    DynamicTemplateLoaderService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    DynamicTemplateLoaderService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Compiler */], },
    ]; };
    return DynamicTemplateLoaderService;
}());


/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
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
    FindReplaceAllService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    FindReplaceAllService.ctorParameters = function () { return []; };
    return FindReplaceAllService;
}());


/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(264);
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
    ModalService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return []; };
    return ModalService;
}());


/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(564);
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
                throw new Error("\"" + key + "\" is specified as \"array\" by schema but it is not an array in input json");
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
    RecordFixerService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    RecordFixerService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__empty_value_service__["a" /* EmptyValueService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a" /* ComponentTypeService */], },
    ]; };
    return RecordFixerService;
}());


/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_util_service__ = __webpack_require__(168);
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
    RemoteAutocompletionService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    RemoteAutocompletionService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__path_util_service__["a" /* PathUtilService */], },
    ]; };
    return RemoteAutocompletionService;
}());


/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_util_service__ = __webpack_require__(568);
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
    SchemaFixerService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    SchemaFixerService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__json_util_service__["a" /* JsonUtilService */], },
    ]; };
    return SchemaFixerService;
}());


/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    /**
     * Validate string value against schema
     *
     * @throws {Error} if value can not be validated
     *
     * Checks: pattern
     *
     */
    SchemaValidationService.prototype.validateStringValue = function (value, schema) {
        var pattern = schema['pattern'];
        if (pattern && !value.match(pattern)) {
            throw Error("Does not match with pattern: " + pattern);
        }
    };
    /**
     * Validate array value against schema
     *
     * @throws {Error} if array can not be validated
     *
     * Checks: uniqueItems
     *
     */
    SchemaValidationService.prototype.validateArray = function (array, schema) {
        if (schema['uniqueItems']) {
            var hasUniqueItems = (new Set(array)).size === array.length;
            if (hasUniqueItems) {
                throw Error("All items must be unique");
            }
        }
    };
    SchemaValidationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    SchemaValidationService.ctorParameters = function () { return []; };
    return SchemaValidationService;
}());


/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut_action_service__ = __webpack_require__(569);
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
    ShortcutService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    ShortcutService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shortcut_action_service__["a" /* ShortcutActionService */], },
    ]; };
    return ShortcutService;
}());


/***/ }),

/***/ 967:
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
    WindowHrefService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    WindowHrefService.ctorParameters = function () { return []; };
    return WindowHrefService;
}());


/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__ = __webpack_require__(969);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__["a"]; });



/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_list_field__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var TableListFieldComponent = (function (_super) {
    __extends(TableListFieldComponent, _super);
    function TableListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, jsonStoreService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
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
    TableListFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'table-list-field',
                    styles: ["table.editable-inner-table { border: none; } table.editable-inner-table thead > tr > th { vertical-align: middle; border: none; color: #c1c1c1; } table.editable-inner-table div.list-holder { padding: 3px; } table.editable-inner-table td { padding: 0 !important; vertical-align: top !important; } table.editable-inner-table label { display: inline !important; font-weight: initial !important; } "],
                    template: "<div [id]=\"pathString\"> <div> <table class=\"table editable-inner-table\"> <thead class=\"thead-inverse\"> <tr> <th *ngFor=\"let key of keys | addAlwaysShowFields:schema.items | filterAndSortBySchema:schema.items; trackBy:trackByElement\"> {{key | underscoreToSpace}} </th> <th class=\"button-holder\"> <add-field-dropdown *ngIf=\"values.size > 0\" [fields]=\"keys\" [pathString]=\"getElementPathString(0)\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.items.properties\">+</add-field-dropdown> </th> </tr> </thead> <tr *ngFor=\"let row of values; let i = index; trackBy:trackByIndex\" [id]=\"getElementPathString(i)\"> <!-- Element value --> <td *ngFor=\"let key of keys | addAlwaysShowFields:schema.items | filterAndSortBySchema:schema.items; trackBy:trackByElement\" [style.width]=\"schema.items.properties[key].columnWidth + '%'\"> <any-type-field [value]=\"row.get(key) | selfOrEmpty:schema.items.properties[key]\" [schema]=\"schema.items.properties[key]\" [path]=\"getValuePath(i, key)\"></any-type-field> <add-new-element-button *ngIf=\"schema.items.properties[key].type === 'array'\" [path]=\"getValuePath(i, key)\" [schema]=\"schema.items.properties[key]\"></add-new-element-button> </td> <!-- UP/DOWN and DELETE buttons for each row --> <td *ngIf=\"values.size > 0\" class=\"button-holder\"> <button type=\"button\" class=\"editor-btn-delete\" (click)=\"deleteElement(i)\"> &times; </button> <button *ngIf=\"i > 0\" type=\"button\" class=\"editor-btn-move-up\" (click)=\"moveElement(i, -1)\"> <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i> </button> <button *ngIf=\"i < (values.size - 1)\" type=\"button\" class=\"editor-btn-move-down\" (click)=\"moveElement(i, 1)\"> <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i> </button> </td> </tr> <tr> </tr> </table> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TableListFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["l" /* PathUtilService */], },
    ]; };
    TableListFieldComponent.propDecorators = {
        'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TableListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_list_field__["a" /* AbstractListFieldComponent */]));


/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__ = __webpack_require__(971);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__["a"]; });



/***/ }),

/***/ 971:
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
    TitleDropdownComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'title-dropdown',
                    styles: [".title-dropdown-toggle { font-size: 13px; background: transparent; border: none; padding: 0px 3px 0px 3px; color: #c1c1c1; font-weight: bold; } .title-dropdown-toggle:focus { outline: 0; } .title-dropdown-toggle:hover { color: #6b6b6b; } .dropdown-menu { min-width: 120px; } "],
                    template: "<div dropdown> <button class=\"btn title-dropdown-toggle\" [isDisabled]=\"isDisabled\" dropdownToggle> {{title}} <span class=\"caret\"></span> </button> <ul class=\"dropdown-menu\" dropdownMenu> <ng-content></ng-content> </ul> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TitleDropdownComponent.ctorParameters = function () { return []; };
    TitleDropdownComponent.propDecorators = {
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TitleDropdownComponent;
}());


/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__ = __webpack_require__(973);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__["a"]; });





/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var TreeMenuItemComponent = (function (_super) {
    __extends(TreeMenuItemComponent, _super);
    function TreeMenuItemComponent(windowHrefService, domUtilService, pathUtilService) {
        _super.call(this);
        this.windowHrefService = windowHrefService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.isCollapsed = true;
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
        this.domUtilService.focusAndSelectFirstInputChildById(this.path);
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
    TreeMenuItemComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'tree-menu-item',
                    styles: ["a { color: #e0dfdf; } "],
                    template: "<div> <a [href]=\"href\" (click)=\"toggle($event)\">{{label}}</a> <a *ngIf=\"isCollapsable\" [hidden]=\"isCollapsed\" (click)=\"collapse()\"> [x]</a> <div [ngSwitch]=\"schema.type\" [hidden]=\"isCollapsed\"> <ul> <div *ngSwitchCase=\"'object'\"> <li *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\"> <tree-menu-item [label]=\"key\" [value]=\"value.get(key)\" [schema]=\"schema.properties[key]\" [path]=\"getChildPath(key)\"></tree-menu-item> </li> </div> <div *ngSwitchCase=\"'array'\"> <li *ngFor=\"let element of value; let i = index; trackBy:trackByElement\"> <tree-menu-item [label]=\"i\" [value]=\"element\" [schema]=\"schema.items\" [path]=\"getChildPath(i)\"></tree-menu-item> </li> </div> </ul> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TreeMenuItemComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["j" /* WindowHrefService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["k" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* PathUtilService */], },
    ]; };
    TreeMenuItemComponent.propDecorators = {
        'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TreeMenuItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));


/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(13);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var TreeMenuComponent = (function (_super) {
    __extends(TreeMenuComponent, _super);
    function TreeMenuComponent(windowHrefService, domUtilService, pathUtilService) {
        _super.call(this);
        this.windowHrefService = windowHrefService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.prefixOrPath = '';
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
            this.domUtilService.focusAndSelectFirstInputChildById(this.prefixOrPath);
            this.domUtilService.flashElementById(this.prefixOrPath);
        }
    };
    TreeMenuComponent.prototype.getChildPath = function (key) {
        return "" + this.pathUtilService.separator + key;
    };
    TreeMenuComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'tree-menu',
                    styles: ["div.tree-menu-container { padding: 8px 0; overflow-x: hidden; overflow-y: auto; text-align: center; } input.wide { width: 100%; padding: 2px; text-align: center; } ul.menu-item-container { list-style: none; text-align: left; padding-top: 8px; } "],
                    template: "<div> <div class=\"tree-menu-container\"> <input class=\"wide\" type=\"text\" [(ngModel)]=\"prefixOrPath\" (keypress)=\"onKeypress($event.key)\" placeholder=\"Search or go\"> <ul class=\"menu-item-container\"> <li *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\" [hidden]=\"!filter(key)\"> <tree-menu-item [label]=\"key\" [value]=\"record.get(key)\" [schema]=\"schema.properties[key]\" [path]=\"getChildPath(key)\"></tree-menu-item> </li> </ul> </div> </div> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TreeMenuComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["j" /* WindowHrefService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["k" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* PathUtilService */], },
    ]; };
    TreeMenuComponent.propDecorators = {
        'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TreeMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));


/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_change_watcher_component__ = __webpack_require__(976);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__value_change_watcher_component__["a"]; });



/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(13);
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
    ValueChangeWatcherComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'value-change-watcher',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
                    template: "<any-type-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></any-type-field>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ValueChangeWatcherComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["d" /* JsonStoreService */], },
    ]; };
    ValueChangeWatcherComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ValueChangeWatcherComponent;
}());


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(571);


/***/ })

},[984]);
//# sourceMappingURL=main.bundle.map