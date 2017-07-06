webpackJsonp([0,3],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__ = __webpack_require__(718);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__["a"]; });



/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_map_util_service__ = __webpack_require__(413);
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
    function AppGlobalsService(errorMapUtilService) {
        this.errorMapUtilService = errorMapUtilService;
        this._externalCategorizedErrorsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this._internalCategorizedErrorsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this._externalErrorCountersSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this._internalErrorCountersSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.internalErrorMap = {};
        this._adminMode = false;
        this._adminMode$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.activeTabName = '';
        this.tabNameToFirstTopLevelElement = {};
        this.internalCategorizedErrorMap = { Errors: {}, Warnings: {} };
        this.externalCategorizedErrorMap = { Errors: {}, Warnings: {} };
    }
    Object.defineProperty(AppGlobalsService.prototype, "adminMode$", {
        get: function () {
            return this._adminMode$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "adminMode", {
        get: function () {
            return this._adminMode;
        },
        set: function (adminMode) {
            this._adminMode = adminMode;
            this._adminMode$.next(this._adminMode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "externalCategorizedErrorsSubject", {
        get: function () {
            return this._externalCategorizedErrorsSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "externalErrorCountersSubject", {
        get: function () {
            return this._externalErrorCountersSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "internalCategorizedErrorsSubject", {
        get: function () {
            return this._internalCategorizedErrorsSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "internalErrorCountersSubject", {
        get: function () {
            return this._internalErrorCountersSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppGlobalsService.prototype, "externalErrors", {
        set: function (errors) {
            var _a = this.errorMapUtilService.categorizeErrorMap(errors), categorizedErrorMap = _a.categorizedErrorMap, errorCounter = _a.errorCounter, warningCounter = _a.warningCounter;
            this.externalCategorizedErrorMap = categorizedErrorMap;
            this.externalCategorizedErrorsSubject.next(this.externalCategorizedErrorMap);
            this.externalErrorCountersSubject.next({
                errors: errorCounter,
                warnings: warningCounter
            });
        },
        enumerable: true,
        configurable: true
    });
    AppGlobalsService.prototype.extendInternalErrors = function (path, errors) {
        this.internalErrorMap[path] = errors;
        var _a = this.errorMapUtilService.categorizeErrorMap(this.internalErrorMap), categorizedErrorMap = _a.categorizedErrorMap, errorCounter = _a.errorCounter, warningCounter = _a.warningCounter;
        this.internalCategorizedErrorMap = categorizedErrorMap;
        this.internalCategorizedErrorsSubject.next(this.internalCategorizedErrorMap);
        this.internalErrorCountersSubject.next({
            errors: errorCounter,
            warnings: warningCounter
        });
    };
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
AppGlobalsService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__error_map_util_service__["a" /* ErrorMapUtilService */], },
]; };


/***/ }),

/***/ 141:
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
        var schemaType = schema.type;
        if (!schemaType) {
            if (Object.keys(schema).length === 0) {
                return 'raw';
            }
        }
        else if (schemaType === 'string') {
            if (schema.autocompletionConfig) {
                return 'autocomplete';
            }
            else if (schema.enum) {
                return 'enum';
            }
        }
        else if (schemaType === 'object') {
            if (schema.properties['$ref']) {
                return 'ref';
            }
        }
        else if (schemaType === 'array') {
            var itemSchema_1 = schema.items;
            if (itemSchema_1.type === 'object') {
                // complex-array: if it's an object array
                // if its elements have at least a property with object (not ref-field)
                // or a non-primitive array.
                var isComplexArray = Object.keys(itemSchema_1.properties)
                    .some(function (prop) {
                    var propSchema = itemSchema_1.properties[prop];
                    return (propSchema.type === 'object' && !propSchema.properties['$ref']) ||
                        (propSchema.type === 'array' && (propSchema.items.type === 'object' || propSchema.items.type === 'array'));
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

/***/ 142:
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
        if (schema.type === 'object') {
            var emptyObject_1 = {};
            Object.keys(schema.properties)
                .filter(function (prop) {
                var required = schema.required || [];
                return required.indexOf(prop) > -1;
            }).forEach(function (prop) {
                var propSchema = schema.properties[prop];
                emptyObject_1[prop] = _this.generateEmptyValueRecursively(propSchema);
            });
            return emptyObject_1;
        }
        if (schema.type === 'array') {
            var emptyArray = [];
            var arrayElementSchema = schema.items;
            emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
            return emptyArray;
        }
        return EmptyValueService.defaultValueLookup[schema.type];
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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_util_service__ = __webpack_require__(39);
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
    function JsonSchemaService(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    JsonSchemaService.prototype.setSchema = function (schema) {
        this.schema = schema;
    };
    /**
     * Returns the schema extracted from this path
     */
    JsonSchemaService.prototype.forPathArray = function (path) {
        return path
            .reduce(function (schema, pathEl) {
            if (isNaN(pathEl)) {
                return schema.properties[pathEl];
            }
            else {
                return schema.items;
            }
        }, this.schema);
    };
    /**
     * Returns the schema extracted from the json-pointer string
     */
    JsonSchemaService.prototype.forPathString = function (path) {
        var pathArray = this.pathUtilService.toPathArray(path);
        return this.forPathArray(pathArray);
    };
    return JsonSchemaService;
}());

JsonSchemaService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
JsonSchemaService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__path_util_service__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
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
                '/$schema': {
                    hidden: true
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
                        findSingle: function (value, expression) {
                            return value.getIn(['reference', 'number']) === parseInt(expression, 10);
                        },
                        findMultiple: function (value, expression) {
                            return JSON.stringify(value).search(expression) > -1;
                        },
                        itemsPerPage: 20,
                        maxVisiblePageCount: 5
                    },
                    viewTemplateConfig: {
                        itemTemplateName: 'referenceTemplate',
                        showEditForm: function (value) {
                            return !(value.hasIn(['record', '$ref']));
                        }
                    }
                },
                '/arxiv_eprints/items/properties/value': {
                    linkBuilder: function (value) {
                        return "http://arxiv.org/abs/" + value;
                    },
                },
                '/abstracts/items/properties/source': {
                    columnWidth: 20
                },
                '/publication_info/items/properties/conference_record': {
                    refFieldConfig: {
                        anchorBuilder: function (url) {
                            var parts = url.split('/');
                            var type = parts[parts.length - 2].slice(0, -1);
                            var display = "View " + type;
                            var href = url.replace(/\/api\//, '/');
                            return { href: href, display: display };
                        }
                    }
                },
                '/titles/items/properties/title': {
                    latexPreviewEnabled: true
                },
                '/abstracts/items/properties/value': {
                    latexPreviewEnabled: true
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
            customFormatValidation: {
                date: {
                    formatChecker: function (value) {
                        var formats = [
                            /^\d{4}$/,
                            /^\d{4}-\d{2}$/,
                            /^\d{4}-\d{2}-\d{2}$/
                        ];
                        return formats
                            .some(function (format) {
                            if (value.match(format)) {
                                return Date.parse(value) !== NaN;
                            }
                            return false;
                        });
                    }
                },
                'date-time': {
                    formatChecker: function (value) {
                        var regex = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i;
                        if (value.match(regex)) {
                            return true;
                        }
                        ;
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
    }
    return AppConfig;
}());
AppConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AppConfig);

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.config.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 39:
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


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sized_stack__ = __webpack_require__(758);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sized_stack__["a"]; });



/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__different_keys_pipe__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_by_expression_pipe__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_hidden_fields_pipe__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanitize_url_pipe__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__self_or_empty_pipe__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__underscore_to_space_pipe__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__set_first_element_path_pipe__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort_alphabetically_pipe__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__keys_pipe__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__last_path_element_pipe__ = __webpack_require__(768);
/* unused harmony reexport AddAlwaysShowFieldsPipe */
/* unused harmony reexport DifferentKeysPipe */
/* unused harmony reexport FilterByExpressionPipe */
/* unused harmony reexport FilterHiddenFieldsPipe */
/* unused harmony reexport SanitizeUrlPipe */
/* unused harmony reexport SelfOrEmptyPipe */
/* unused harmony reexport UnderscoreToSpacePipe */
/* unused harmony reexport SetFirstElementPathPipe */
/* unused harmony reexport SortAlphabeticallyPipe */
/* unused harmony reexport KeysPipe */
/* unused harmony reexport LastPathElementPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_PIPES; });












var SHARED_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__["a" /* AddAlwaysShowFieldsPipe */],
    __WEBPACK_IMPORTED_MODULE_1__different_keys_pipe__["a" /* DifferentKeysPipe */],
    __WEBPACK_IMPORTED_MODULE_2__filter_by_expression_pipe__["a" /* FilterByExpressionPipe */],
    __WEBPACK_IMPORTED_MODULE_3__filter_hidden_fields_pipe__["a" /* FilterHiddenFieldsPipe */],
    __WEBPACK_IMPORTED_MODULE_4__sanitize_url_pipe__["a" /* SanitizeUrlPipe */],
    __WEBPACK_IMPORTED_MODULE_5__self_or_empty_pipe__["a" /* SelfOrEmptyPipe */],
    __WEBPACK_IMPORTED_MODULE_6__underscore_to_space_pipe__["a" /* UnderscoreToSpacePipe */],
    __WEBPACK_IMPORTED_MODULE_7__set_first_element_path_pipe__["a" /* SetFirstElementPathPipe */],
    __WEBPACK_IMPORTED_MODULE_8__sort_alphabetically_pipe__["a" /* SortAlphabeticallyPipe */],
    __WEBPACK_IMPORTED_MODULE_9__keys_pipe__["a" /* KeysPipe */],
    __WEBPACK_IMPORTED_MODULE_10__last_path_element_pipe__["a" /* LastPathElementPipe */]
];


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_util_service__ = __webpack_require__(418);
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
    function DomUtilService(tabsUtilService) {
        this.tabsUtilService = tabsUtilService;
        this.editableSelector = '.value-container input, div[contenteditable=true], .switch-input';
        // highlight class is defined in json-editor.component.scss
        this.highlightClass = 'highlight';
    }
    DomUtilService.prototype.focusAndSelectFirstEditableChildById = function (id, highlight) {
        var _this = this;
        if (highlight === void 0) { highlight = false; }
        this.tabsUtilService.selectTabIfNeeded(id);
        setTimeout(function () {
            var el = document.getElementById(id);
            if (el) {
                var firstEditable = el.querySelector(_this.editableSelector);
                if (firstEditable) {
                    firstEditable.focus();
                    _this.selectAllContent(firstEditable);
                    if (highlight) {
                        firstEditable.classList.add(_this.highlightClass);
                        _this.highlightedElement = firstEditable;
                    }
                }
                else {
                    // if element doesn't have any input, open add-field-dropdown if it exists.
                    _this.openDropdown(el);
                }
            }
        });
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
    DomUtilService.prototype.blurFirstEditableChildById = function (id) {
        var el = document.getElementById(id);
        var firstEditable = el.querySelector(this.editableSelector);
        if (firstEditable) {
            firstEditable.blur();
        }
    };
    DomUtilService.prototype.clearHighlight = function () {
        if (this.highlightedElement) {
            this.highlightedElement.classList.remove(this.highlightClass);
            this.highlightedElement = undefined;
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
    DomUtilService.prototype.openDropdown = function (el) {
        var dropdown = el.querySelector('div.btn-group');
        if (dropdown) {
            var dropDownButton = dropdown.querySelector('button');
            if (dropDownButton) {
                dropDownButton.click();
            }
        }
    };
    return DomUtilService;
}());

DomUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
DomUtilService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__tabs_util_service__["a" /* TabsUtilService */], },
]; };


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMapUtilService; });
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

var ErrorMapUtilService = (function () {
    function ErrorMapUtilService() {
    }
    ErrorMapUtilService.prototype.categorizeErrorMap = function (errorMap) {
        var categorizedErrorMap = { Errors: {}, Warnings: {} };
        var errorCounter = 0;
        var warningCounter = 0;
        Object.keys(errorMap)
            .forEach(function (key) {
            var validationErrors = errorMap[key];
            validationErrors.forEach(function (error) {
                if (error.type === 'Error') {
                    categorizedErrorMap.Errors[key] ? categorizedErrorMap.Errors[key].push(error)
                        : categorizedErrorMap.Errors[key] = [error];
                    errorCounter++;
                }
                else {
                    categorizedErrorMap.Warnings[key] ? categorizedErrorMap.Warnings[key].push(error)
                        : categorizedErrorMap.Warnings[key] = [error];
                    warningCounter++;
                }
            });
        });
        return { categorizedErrorMap: categorizedErrorMap, errorCounter: errorCounter, warningCounter: warningCounter };
    };
    return ErrorMapUtilService;
}());

ErrorMapUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
ErrorMapUtilService.ctorParameters = function () { return []; };


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path_util_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonStoreService; });





var JsonStoreService = (function () {
    function JsonStoreService(pathUtilService) {
        this.pathUtilService = pathUtilService;
        this._jsonChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        // list of reverse patches for important changes
        this.history = new __WEBPACK_IMPORTED_MODULE_4__classes__["a" /* SizedStack */](5);
    }
    JsonStoreService.prototype.setIn = function (path, value) {
        // if value is undefined or empty string
        if (!value) {
            this.removeIn(path);
            return;
        }
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
        this.history.push({
            path: this.pathUtilService.toPathString(path),
            op: 'add',
            value: this.json.getIn(path)
        });
        this.json = this.json.removeIn(path);
        this._jsonChange.next(this.json);
    };
    JsonStoreService.prototype.addIn = function (path, value) {
        var lastPathElement = path[path.length - 1];
        var isInsert = typeof lastPathElement === 'number' || lastPathElement === '-';
        if (isInsert) {
            var pathWithoutIndex = path.slice(0, path.length - 1);
            var list = this.getIn(pathWithoutIndex);
            list = lastPathElement === '-' ? list.push(value) : list.insert(lastPathElement, value);
            this.setIn(pathWithoutIndex, list);
        }
        else {
            this.setIn(path, value);
        }
    };
    JsonStoreService.prototype.setJson = function (json) {
        this.json = json;
    };
    JsonStoreService.prototype.applyPatch = function (patch) {
        var path = this.pathUtilService.toPathArray(patch.path);
        switch (patch.op) {
            case 'replace':
                this.setIn(path, patch.value);
                break;
            case 'remove':
                this.removeIn(path);
                break;
            case 'add':
                this.addIn(path, patch.value);
                break;
            default:
                console.warn(patch.op + " is not supported!");
        }
    };
    JsonStoreService.prototype.rollbackLastChange = function () {
        var lastChangeReversePatch = this.history.pop();
        if (lastChangeReversePatch) {
            this.applyPatch(lastChangeReversePatch);
            return lastChangeReversePatch.path;
        }
        else {
            return undefined;
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
JsonStoreService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__path_util_service__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_util_service__ = __webpack_require__(39);
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path_util_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_schema_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_globals_service__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysStoreService; });
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






var KeysStoreService = (function () {
    function KeysStoreService(appGlobalsService, pathUtilService, jsonSchemaService) {
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.onKeysChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
    }
    KeysStoreService.prototype.forPath = function (path) {
        return this.keys$Map[path];
    };
    /**
     * Adds a key to the specified path.
     * @param path path to add the key to
     * @param key key to be added
     * @param schema OBJECT schema that belongs to path (schema.items for table-list)
     */
    KeysStoreService.prototype.addKey = function (path, key, schema) {
        var _this = this;
        // FIXME: could do O(logn) insert instead of O(nlogn) since the set is already sorted.
        this.keysMap[path] = this.keysMap[path]
            .add(key)
            .sort(function (a, b) { return _this.compareByPriority(a, b, schema); });
        this.keys$Map[path].next(this.keysMap[path]);
        this.onKeysChange.next({ path: path, keys: this.keysMap[path] });
        var newKeyPath = "" + path + this.pathUtilService.separator + key;
        var keySchema = schema.properties[key];
        if (keySchema.type === 'object' || keySchema.componentType === 'table-list') {
            this.buildKeysMapRecursivelyForPath(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])(), newKeyPath, keySchema);
        }
        return newKeyPath;
    };
    KeysStoreService.prototype.deleteKey = function (path, key) {
        this.keysMap[path] = this.keysMap[path].delete(key);
        this.keys$Map[path].next(this.keysMap[path]);
        this.onKeysChange.next({ path: path, keys: this.keysMap[path] });
        var deletedKeyPath = "" + path + this.pathUtilService.separator + key;
        delete this.keysMap[deletedKeyPath];
        delete this.keys$Map[deletedKeyPath];
    };
    KeysStoreService.prototype.buildKeysMap = function (json, schema) {
        this.keys$Map = {};
        this.keysMap = {};
        this.buildKeysMapRecursivelyForPath(json, '', schema);
    };
    KeysStoreService.prototype.buildKeysMapRecursivelyForPath = function (mapOrList, path, schema) {
        var _this = this;
        // TODO: remove this and unify typing when #330 is fixed
        var pathString = Array.isArray(path) ? this.pathUtilService.toPathString(path) : path;
        if (!schema) {
            schema = this.jsonSchemaService.forPathString(pathString);
        }
        if (schema.type === 'object') {
            var map_1 = mapOrList;
            var finalKeys = this.buildkeysForObject(pathString, map_1, schema);
            // recursive call
            finalKeys
                .filter(function (key) { return _this.isObjectOrArray(schema.properties[key]); })
                .forEach(function (key) {
                var nextPath = "" + pathString + _this.pathUtilService.separator + key;
                _this.buildKeysMapRecursivelyForPath(map_1.get(key), nextPath, schema.properties[key]);
            });
        }
        else if (schema.componentType === 'table-list') {
            var list = mapOrList;
            this.buildKeysForTableList(pathString, list, schema);
            // there is no recursive call for table list items because they aren't expected to have object or object list as property.
        }
        else {
            // recursive calls for each item of list if it's not a table-list
            var list = mapOrList;
            if (this.isObjectOrArray(schema.items)) {
                // recursive call
                list.forEach(function (element, index) {
                    var elementPath = "" + pathString + _this.pathUtilService.separator + index;
                    _this.buildKeysMapRecursivelyForPath(element, elementPath, schema.items);
                });
            }
        }
    };
    // default value for `list`, if this is called for alwaysShow in which case `list` would be undefined
    KeysStoreService.prototype.buildKeysForTableList = function (path, list, schema) {
        if (list === void 0) { list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])(); }
        // get present unique keys in all items of table-list
        var keys = __WEBPACK_IMPORTED_MODULE_1_immutable__["Seq"].Set(list
            .map(function (object) { return object.keySeq().toArray(); })
            .reduce(function (pre, cur) { return pre.concat(cur); }, []));
        var itemSchema = schema.items;
        var finalKeys = this.schemafy(keys, itemSchema);
        this.setKeys(path, finalKeys);
    };
    // default value for `map`, if this is called for alwaysShow in which case `map` would be undefined
    KeysStoreService.prototype.buildkeysForObject = function (path, map, schema) {
        if (map === void 0) { map = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])(); }
        var finalKeys = this.schemafy(map.keySeq(), schema);
        this.setKeys(path, finalKeys);
        return finalKeys;
    };
    /**
     * Filters keys, add alwaysShow fields and sorts by schema.
     */
    KeysStoreService.prototype.schemafy = function (keys, schema) {
        var _this = this;
        return keys
            .filter(function (key) { return _this.isNotHidden(key, schema) || _this.appGlobalsService.adminMode; })
            .concat(schema.alwaysShow || [])
            .sort(function (a, b) { return _this.compareByPriority(a, b, schema); })
            .toOrderedSet();
    };
    KeysStoreService.prototype.compareByPriority = function (a, b, schema) {
        // Sort by priority, larger is the first.
        var pa = schema.properties[a].priority || 0;
        var pb = schema.properties[b].priority || 0;
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
    };
    KeysStoreService.prototype.isNotHidden = function (key, schema) {
        if (!schema.properties[key]) {
            throw new Error("\"" + key + "\" is not specified as property in \n" + JSON.stringify(schema.properties, undefined, 2));
        }
        return !schema.properties[key].hidden;
    };
    KeysStoreService.prototype.isObjectOrArray = function (schema) {
        return schema.type === 'object' || schema.type === 'array';
    };
    KeysStoreService.prototype.setKeys = function (path, keys) {
        this.keysMap[path] = keys;
        if (!this.keys$Map[path]) {
            this.keys$Map[path] = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        }
        this.keys$Map[path].next(keys);
    };
    return KeysStoreService;
}());

KeysStoreService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
KeysStoreService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_5__app_globals_service__["a" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__path_util_service__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__json_schema_service__["a" /* JsonSchemaService */], },
]; };


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_value_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_store_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_schema_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_util_service__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path_util_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys_store_service__ = __webpack_require__(416);
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
    function ShortcutActionService(emptyValueService, domUtilService, jsonStoreService, jsonSchemaService, pathUtilService, keysStoreService) {
        this.emptyValueService = emptyValueService;
        this.domUtilService = domUtilService;
        this.jsonStoreService = jsonStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
    }
    ShortcutActionService.prototype.addToRootAction = function (path) {
        this.add(path, true);
    };
    ShortcutActionService.prototype.addAction = function (path) {
        this.add(path, false);
    };
    ShortcutActionService.prototype.add = function (path, root) {
        var _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
        this.addNewElementInArray(_path, this.jsonSchemaService.forPathArray(_path));
    };
    /**
     * @param path - Path of the array parent that the element is about to be inserted
     * @param schema - Schema of the element that is about to be inserted
     */
    ShortcutActionService.prototype.addNewElementInArray = function (path, schema) {
        var _this = this;
        var itemSchema = schema.items;
        var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        var values = this.jsonStoreService.getIn(path) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
        this.jsonStoreService.setIn(path, values.push(emptyValue));
        path.push(values.size);
        setTimeout(function () {
            _this.focusElementInPath(_this.pathUtilService.toPathString(path));
        });
    };
    ShortcutActionService.prototype.addBelowToRootAction = function (path) {
        var _this = this;
        var rootPath = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
        var schema = this.jsonSchemaService.forPathArray(rootPath);
        var itemSchema = schema.items;
        var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        var values = this.jsonStoreService.getIn(rootPath) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
        this.jsonStoreService.setIn(rootPath, values.insert(path[1] + 1, emptyValue));
        rootPath.push(path[1] + 1);
        setTimeout(function () {
            _this.focusElementInPath(_this.pathUtilService.toPathString(rootPath));
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
        if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(values)) {
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
        if (this.jsonSchemaService.forPathArray(arrayParentPath)['items'].hasOwnProperty('properties')) {
            var elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
            var valuesList = this.jsonStoreService.getIn(arrayParentPath) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
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
    ShortcutActionService.prototype.undoAction = function () {
        var rolledBackPath = this.jsonStoreService.rollbackLastChange();
        if (rolledBackPath) {
            var parentPath = this.pathUtilService.toPathArray(rolledBackPath).slice(0, -1);
            this.keysStoreService.buildKeysMap(this.jsonStoreService.getIn(parentPath), this.jsonSchemaService.forPathArray(parentPath));
        }
    };
    ShortcutActionService.prototype.focusElementInPath = function (path) {
        this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
    };
    ShortcutActionService.prototype.generateShortcutAction = function (action) {
        var _this = this;
        return function (event) {
            event.preventDefault();
            var eventTarget = event.target;
            var pathString = eventTarget.getAttribute('data-path');
            if (pathString) {
                _this[action](_this.pathUtilService.toPathArray(pathString));
            }
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
    { type: __WEBPACK_IMPORTED_MODULE_2__empty_value_service__["a" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__dom_util_service__["a" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__json_store_service__["a" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__json_schema_service__["a" /* JsonSchemaService */], },
    { type: __WEBPACK_IMPORTED_MODULE_6__path_util_service__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_7__keys_store_service__["a" /* KeysStoreService */], },
]; };


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_util_service__ = __webpack_require__(39);
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
    function TabsUtilService(pathUtilService) {
        this.pathUtilService = pathUtilService;
        this._activeTabName$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
    }
    Object.defineProperty(TabsUtilService.prototype, "activeTabName$", {
        get: function () {
            return this._activeTabName$;
        },
        enumerable: true,
        configurable: true
    });
    TabsUtilService.prototype.getTabNames = function (tabsConfig) {
        var tabNames = tabsConfig.tabs.map(function (tab) { return tab.name; });
        // insert default tab name at the beginning
        return [tabsConfig.defaultTabName]
            .concat(tabNames);
    };
    TabsUtilService.prototype.getSchemaKeyToTabName = function (tabsConfig, schema) {
        if (!this.schemaKeyToTabName) {
            // set tab.name for configured keys
            var keyToTabName_1 = tabsConfig.tabs
                .map(function (tab) {
                var keysWithTabName = {};
                tab.properties.forEach(function (key) {
                    keysWithTabName[key] = tab.name;
                });
                return keysWithTabName;
            }).reduce(function (pre, cur) { return Object.assign(pre, cur); });
            // set defaultTabName for all other keys in the schema
            Object.keys(schema.properties)
                .filter(function (key) { return !keyToTabName_1[key]; })
                .forEach(function (key) {
                keyToTabName_1[key] = tabsConfig.defaultTabName;
            });
            this.schemaKeyToTabName = keyToTabName_1;
        }
        return this.schemaKeyToTabName;
    };
    // TODO: maybe this could be a decorator
    TabsUtilService.prototype.selectTabIfNeeded = function (path) {
        if (this.schemaKeyToTabName) {
            var tabName = this.schemaKeyToTabName[this.pathUtilService.toPathArray(path)[0]];
            this.activeTabName$.next(tabName);
        }
    };
    return TabsUtilService;
}());

TabsUtilService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
TabsUtilService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__path_util_service__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(428);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(146);
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
        styles: [__webpack_require__(614)],
        template: __webpack_require__(672)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dist__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(146);
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

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/index.js.map

/***/ }),

/***/ 429:
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/polyfills.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__ = __webpack_require__(719);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__["a"]; });



/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_globals_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_util_service__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_value_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_replace_all_service__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__json_store_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__json_util_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__json_schema_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__keys_store_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__path_util_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_service__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shortcut_action_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shortcut_service__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__window_href_service__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tabs_util_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_map_util_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__katex_service__ = __webpack_require__(775);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_globals_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__dom_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__empty_value_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_5__find_replace_all_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__json_store_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__json_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__json_schema_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__keys_store_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__path_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_11__modal_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__["a"]; });
/* unused harmony reexport ShortcutActionService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_16__shortcut_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_17__window_href_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_18__tabs_util_service__["a"]; });
/* unused harmony reexport ErrorMapUtilService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_20__katex_service__["a"]; });
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
    __WEBPACK_IMPORTED_MODULE_9__keys_store_service__["a" /* KeysStoreService */],
    __WEBPACK_IMPORTED_MODULE_8__json_schema_service__["a" /* JsonSchemaService */],
    __WEBPACK_IMPORTED_MODULE_10__path_util_service__["a" /* PathUtilService */],
    __WEBPACK_IMPORTED_MODULE_11__modal_service__["a" /* ModalService */],
    __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__["a" /* RecordFixerService */],
    __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__["a" /* SchemaFixerService */],
    __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__["a" /* SchemaValidationService */],
    __WEBPACK_IMPORTED_MODULE_15__shortcut_action_service__["a" /* ShortcutActionService */],
    __WEBPACK_IMPORTED_MODULE_16__shortcut_service__["a" /* ShortcutService */],
    __WEBPACK_IMPORTED_MODULE_17__window_href_service__["a" /* WindowHrefService */],
    __WEBPACK_IMPORTED_MODULE_18__tabs_util_service__["a" /* TabsUtilService */],
    __WEBPACK_IMPORTED_MODULE_19__error_map_util_service__["a" /* ErrorMapUtilService */],
    __WEBPACK_IMPORTED_MODULE_20__katex_service__["a" /* KatexService */]
];


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, ".fa-check-circle.success {\n  color: green; }\n\n.fa-exclamation-triangle.warning {\n  color: orange; }\n\n.reference-template-container {\n  background-color: white;\n  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3;\n  padding: 5px;\n  margin-bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 222,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 222,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 237,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 237,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 247,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es.js": 247,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 255,
	"./fr-ca": 253,
	"./fr-ca.js": 253,
	"./fr-ch": 254,
	"./fr-ch.js": 254,
	"./fr.js": 255,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./he": 260,
	"./he.js": 260,
	"./hi": 261,
	"./hi.js": 261,
	"./hr": 262,
	"./hr.js": 262,
	"./hu": 263,
	"./hu.js": 263,
	"./hy-am": 264,
	"./hy-am.js": 264,
	"./id": 265,
	"./id.js": 265,
	"./is": 266,
	"./is.js": 266,
	"./it": 267,
	"./it.js": 267,
	"./ja": 268,
	"./ja.js": 268,
	"./jv": 269,
	"./jv.js": 269,
	"./ka": 270,
	"./ka.js": 270,
	"./kk": 271,
	"./kk.js": 271,
	"./km": 272,
	"./km.js": 272,
	"./kn": 273,
	"./kn.js": 273,
	"./ko": 274,
	"./ko.js": 274,
	"./ky": 275,
	"./ky.js": 275,
	"./lb": 276,
	"./lb.js": 276,
	"./lo": 277,
	"./lo.js": 277,
	"./lt": 278,
	"./lt.js": 278,
	"./lv": 279,
	"./lv.js": 279,
	"./me": 280,
	"./me.js": 280,
	"./mi": 281,
	"./mi.js": 281,
	"./mk": 282,
	"./mk.js": 282,
	"./ml": 283,
	"./ml.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 286,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 291,
	"./nl-be": 290,
	"./nl-be.js": 290,
	"./nl.js": 291,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 296,
	"./pt-br": 295,
	"./pt-br.js": 295,
	"./pt.js": 296,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 306,
	"./sr-cyrl": 305,
	"./sr-cyrl.js": 305,
	"./sr.js": 306,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./th": 313,
	"./th.js": 313,
	"./tl-ph": 314,
	"./tl-ph.js": 314,
	"./tlh": 315,
	"./tlh.js": 315,
	"./tr": 316,
	"./tr.js": 316,
	"./tzl": 317,
	"./tzl.js": 317,
	"./tzm": 319,
	"./tzm-latn": 318,
	"./tzm-latn.js": 318,
	"./tzm.js": 319,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 323,
	"./uz-latn": 322,
	"./uz-latn.js": 322,
	"./uz.js": 323,
	"./vi": 324,
	"./vi.js": 324,
	"./x-pseudo": 325,
	"./x-pseudo.js": 325,
	"./yo": 326,
	"./yo.js": 326,
	"./zh-cn": 327,
	"./zh-cn.js": 327,
	"./zh-hk": 328,
	"./zh-hk.js": 328,
	"./zh-tw": 329,
	"./zh-tw.js": 329
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
webpackContext.id = 640;


/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<ng-template let-item=\"item\" #referenceTemplate>\n  <div class=\"reference-template-container\" [ngSwitch]=\"item.hasIn(['record', '$ref'])\">\n    <span *ngSwitchCase=\"true\">\n      <i class=\"fa fa-check-circle success\" aria-hidden=\"true\"></i>\n      <a href=\"{{item.getIn(['record', '$ref'])}}\" target=\"_blank\">{{item.getIn(['reference', 'misc', 0])}}</a>\n    </span>\n    <span *ngSwitchDefault>\n      <i class=\"fa fa-exclamation-triangle warning\" aria-hidden=\"true\"></i>\n      {{item.getIn(['reference', 'misc', 0])}}\n    </span>\n  </div>\n</ng-template>\n<json-editor *ngIf=\"record && schema\"\n  [config]=\"config.jsonEditorConfig\"\n  [record]=\"record\"\n  (onRecordChange)=\"onRecordChange($event)\"\n  [schema]=\"schema\"\n  [templates]=\"{referenceTemplate: referenceTemplate}\">\n</json-editor>"

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(741);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of ng2-json-editor module.
 */



/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractFieldComponent; });
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
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
var AbstractFieldComponent = (function (_super) {
    __extends(AbstractFieldComponent, _super);
    function AbstractFieldComponent(appGlobalsService, pathUtilService, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.pathUtilService = pathUtilService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.pathCache = {};
        _this.externalErrors = [];
        return _this;
    }
    AbstractFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.externalCategorizedErrorSubscription = this.appGlobalsService.externalCategorizedErrorsSubject
            .subscribe(function (externalCategorizedErrorMap) {
            _this.externalErrors = externalCategorizedErrorMap.Errors[_this.pathString] || [];
            _this.changeDetectorRef.markForCheck();
        });
    };
    /**
     * Gets path for child, returns from `pathCache` if it is a hit
     * in order not to re-render child component due to reference change its path.
     *
     * @param key - index or field name for child
     */
    AbstractFieldComponent.prototype.getPathForChild = function (key) {
        if (!this.pathCache[key] || this.pathCache[key][this.path.length - 1] !== this.path[this.path.length - 1]) {
            this.pathCache[key] = this.path.concat(key);
        }
        return this.pathCache[key];
    };
    Object.defineProperty(AbstractFieldComponent.prototype, "pathString", {
        get: function () {
            return this.pathUtilService.toPathString(this.path);
        },
        enumerable: true,
        configurable: true
    });
    AbstractFieldComponent.prototype.hasErrors = function () {
        return this.externalErrors.length > 0;
    };
    AbstractFieldComponent.prototype.ngOnDestroy = function () {
        this.externalCategorizedErrorSubscription.unsubscribe();
    };
    return AbstractFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_tracker__["a" /* AbstractTrackerComponent */]));



/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractListFieldComponent; });
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
    function AbstractListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        var _this = _super.call(this, appGlobalsService, pathUtilService, changeDetectorRef) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.changeDetectorRef = changeDetectorRef;
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
        var elementPath = this.path.concat(index);
        this.jsonStoreService.removeIn(elementPath);
        this.values = this.jsonStoreService.getIn(this.path);
    };
    AbstractListFieldComponent.prototype.getPathForChildString = function (index) {
        return "" + this.pathString + this.pathUtilService.separator + index;
    };
    Object.defineProperty(AbstractListFieldComponent.prototype, "sortableClass", {
        get: function () {
            return this.schema.sortable ? 'sortable' : '';
        },
        enumerable: true,
        configurable: true
    });
    return AbstractListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_field__["a" /* AbstractFieldComponent */]));



/***/ }),

/***/ 719:
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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(6);
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
    function AddFieldDropdownComponent(elementRef, domUtilService, emptyValueService, pathUtilService, keysStoreService) {
        this.elementRef = elementRef;
        this.domUtilService = domUtilService;
        this.emptyValueService = emptyValueService;
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
        this.expression = '';
    }
    Object.defineProperty(AddFieldDropdownComponent.prototype, "disabled", {
        get: function () {
            return Object.keys(this.schema.properties).length === this.fields.size;
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
        var newFieldPathString = this.keysStoreService.addKey(this.pathString, field, this.schema);
        this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString);
        this.expression = '';
    };
    return AddFieldDropdownComponent;
}());

AddFieldDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'add-field-dropdown',
                styles: [".btn-add-field-dropdown { padding: 0 3px; font-size: 11px; opacity: 0.4; border: 0; background: transparent; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; color: darkslategray; margin-bottom: 2px; float: left; } .btn-add-field-dropdown:hover { color: blue; opacity: 0.6; } .dropdown-filter-container { padding: 0 3px; } .dropdown-filter-container input { width: 100%; } "],
                template: "<div *ngIf=\"!disabled\" class=\"btn-group add-field-dropdown-container\" dropdown keyboardNav=\"true\" (onShown)=\"onDropdownShown()\"> <button type=\"button\" class=\"btn-add-field-dropdown\" dropdownToggle> <ng-content></ng-content> <i class=\"fa fa-caret-down\"></i> </button> <ul class=\"dropdown-menu\" *dropdownMenu> <li class=\"dropdown-filter-container\"> <input [(ngModel)]=\"expression\" placeholder=\"filter\" (click)=\"$event.stopPropagation()\"> </li> <li class=\"divider dropdown-divider\"></li> <li *ngFor=\"let key of schema.properties | differentKeys:fields | filterByExpression:expression\"> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onFieldSelect(key)\">{{key}}</a> </li> </ul> </div>"
            },] },
];
/** @nocollapse */
AddFieldDropdownComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["i" /* KeysStoreService */], },
]; };
AddFieldDropdownComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'fields': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNestedFieldDropdownComponent; });
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



var AddNestedFieldDropdownComponent = (function () {
    function AddNestedFieldDropdownComponent(keysStoreService, jsonSchemaService, pathUtilService, domUtilService) {
        this.keysStoreService = keysStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
        this.domUtilService = domUtilService;
        this.nestedKeysMap = {};
    }
    AddNestedFieldDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nestedKeysMap[this.pathString] = this.keysStoreService.keysMap[this.pathString];
        var nestedPathPrefix = this.pathString + this.pathUtilService.separator;
        Object.keys(this.keysStoreService.keysMap)
            .filter(function (path) { return path.startsWith(nestedPathPrefix); })
            .forEach(function (path) {
            _this.nestedKeysMap[path] = _this.keysStoreService.keysMap[path];
        });
        this.keysStoreService.onKeysChange
            .filter(function (change) { return change.path.startsWith(_this.pathString); })
            .subscribe(function (change) { _this.nestedKeysMap[change.path] = change.keys; });
    };
    /**
     * Return keys that could be added for the given path.
     *
     * @return schema key - hidden keys - existing keys
     */
    AddNestedFieldDropdownComponent.prototype.addableKeysForPath = function (path) {
        var keys = this.nestedKeysMap[path];
        var schema = this.jsonSchemaService.forPathString(path);
        // || schema.items.properties is to handle the keys when the path belongs to table-list.
        var schemaProps = schema.properties || schema.items.properties;
        var schemaKeys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])(Object.keys(schemaProps)
            .filter(function (key) { return !schemaProps[key].hidden; }));
        var addableKeys = schemaKeys.subtract(keys);
        return addableKeys.size > 0 ? addableKeys : undefined;
    };
    AddNestedFieldDropdownComponent.prototype.onFieldSelect = function (path, key) {
        var schema = this.jsonSchemaService.forPathString(path);
        if (schema.componentType === 'table-list') {
            schema = schema.items;
        }
        var newKeyPath = this.keysStoreService.addKey(path, key, schema);
        if (this.keysStoreService.keysMap[newKeyPath]) {
            this.nestedKeysMap[newKeyPath] = this.keysStoreService.keysMap[newKeyPath];
        }
        this.domUtilService.focusAndSelectFirstEditableChildById(newKeyPath);
    };
    return AddNestedFieldDropdownComponent;
}());

AddNestedFieldDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'add-nested-field-dropdown',
                styles: [".btn-add-field-dropdown { padding: 0 3px; font-size: 11px; opacity: 0.4; border: 0; background: transparent; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; color: darkslategray; margin-bottom: 2px; float: left; } .btn-add-field-dropdown:hover { color: blue; opacity: 0.6; } .dropdown-filter-container { padding: 0 3px; } .dropdown-filter-container input { width: 100%; } ",
                    ".dropdown-header.title { font-size: 13.5px; font-weight: bold; padding-left: 10px; } .dropdown-divider { margin: 4px 0; } .dropdown-menu li > .dropdown-item { display: block; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.42857; color: #333333; white-space: nowrap; } .dropdown-menu li > .dropdown-item:hover { text-decoration: none; color: #262626; background-color: #f5f5f5; } "],
                template: "<div class=\"btn-group add-field-dropdown-container\" dropdown keyboardNav=\"true\"> <button type=\"button\" class=\"btn-add-field-dropdown\" dropdownToggle> <i class=\"fa fa-plus\"></i> <i class=\"fa fa-caret-down\"></i> </button> <ul class=\"dropdown-menu\" *dropdownMenu> <div *ngFor=\"let path of nestedKeysMap | keys; first as isFirst\"> <div *ngIf=\"addableKeysForPath(path); let addableKeys\"> <li *ngIf=\"!isFirst\" class=\"divider dropdown-divider\"></li> <li *ngIf=\"!isFirst\" class=\"dropdown-header title\">{{path | lastPathElement}}</li> <li *ngFor=\"let key of addableKeys\"> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onFieldSelect(path, key)\">{{key}}</a> </li> </div> </div> </ul> </div>"
            },] },
];
/** @nocollapse */
AddNestedFieldDropdownComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["i" /* KeysStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["k" /* JsonSchemaService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* DomUtilService */], },
]; };
AddNestedFieldDropdownComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__ = __webpack_require__(720);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_nested_field_dropdown_component__ = __webpack_require__(721);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__add_nested_field_dropdown_component__["a"]; });




/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
        var itemSchema = this.schema.items;
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
                styles: ["div.button-container { display: inline-block; width: 100%; } .btn-new-field { font-size: 13px; font-weight: bold; text-shadow: 0 1px 0 #fff; opacity: 0.5; background: transparent; border: 0; bottom: -5px; left: -5px; padding: 0px; } .btn-new-field:hover { color: green; opacity: 0.6; } "],
                template: "<div class=\"button-container\"> <button type=\"button\" class=\"btn-new-field\" (click)=\"addNewElement()\">Add new</button> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
AddNewElementButtonComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* EmptyValueService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
]; };
AddNewElementButtonComponent.propDecorators = {
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__ = __webpack_require__(723);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__["a"]; });



/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AnyTypeFieldComponent() {
    }
    return AnyTypeFieldComponent;
}());

AnyTypeFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'any-type-field',
                styles: [""],
                template: "<div [ngSwitch]=\"schema.componentType\"> <div *ngSwitchCase=\"'table-list'\"> <table-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></table-list-field> </div> <div *ngSwitchCase=\"'complex-list'\"> <complex-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></complex-list-field> </div> <div *ngSwitchCase=\"'primitive-list'\"> <primitive-list-field [values]=\"value\" [schema]=\"schema\" [path]=\"path\"></primitive-list-field> </div> <div *ngSwitchCase=\"'object'\"> <object-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></object-field> </div> <div *ngSwitchCase=\"'ref'\"> <ref-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></ref-field> </div> <div *ngSwitchDefault> <primitive-field [value]=\"value\" [schema]=\"schema\" [path]=\"path\"></primitive-field> </div> </div> ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
AnyTypeFieldComponent.ctorParameters = function () { return []; };
AnyTypeFieldComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__ = __webpack_require__(725);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__["a"]; });



/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(6);
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
    function AutocompleteInputComponent(remoteAutocompletionService, jsonStoreService, keysStoreService, appGlobalsService) {
        this.remoteAutocompletionService = remoteAutocompletionService;
        this.jsonStoreService = jsonStoreService;
        this.keysStoreService = keysStoreService;
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
            onCompletionSelect(this.path.slice(), completionItem, this.jsonStoreService, this.keysStoreService);
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
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["t" /* RemoteAutocompletionService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["i" /* KeysStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* AppGlobalsService */], },
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

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__ = __webpack_require__(727);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__["a"]; });



/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function ComplexListFieldComponent(appGlobalsService, jsonStoreService, domUtilService, pathUtilService, changeDetectorRef) {
        var _this = _super.call(this, appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.domUtilService = domUtilService;
        _this.pathUtilService = pathUtilService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.currentFound = 0;
        _this.currentPage = 1;
        return _this;
    }
    ComplexListFieldComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.navigator = this.schema.longListNavigatorConfig;
        this.paginatedItems = this.getItemsForPage(this.currentPage);
    };
    ComplexListFieldComponent.prototype.ngOnChanges = function (changes) {
        var valuesChange = changes['values'];
        if (valuesChange && !valuesChange.isFirstChange()) {
            var preSize = valuesChange.previousValue.size;
            var curSize = valuesChange.currentValue.size;
            if (curSize !== preSize) {
                if (this.navigator) {
                    // check if element added in the end by comparing the last elements
                    var elementAddedToEnd = valuesChange.previousValue.equals(valuesChange.currentValue.pop());
                    var lastPage = this.getPageForIndex(curSize - 1);
                    // change the page if a new element is added in the end and it's not on the last page
                    if (curSize > preSize && this.currentPage !== lastPage && elementAddedToEnd) {
                        this.currentPage = lastPage;
                    }
                }
                this.paginatedItems = this.getItemsForPage(this.currentPage);
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
        this.paginatedItems = this.getItemsForPage(page);
    };
    ComplexListFieldComponent.prototype.getItemsForPage = function (page) {
        var _this = this;
        var indices = this.getIndicesToDisplay(page);
        return indices.map(function (index) {
            var showEditForm = _this.schema.viewTemplateConfig ? _this.schema.viewTemplateConfig.showEditForm : undefined;
            var isEditFormVisible = !showEditForm || showEditForm(_this.values.get(index));
            return { index: index, isEditFormVisible: isEditFormVisible };
        });
    };
    ComplexListFieldComponent.prototype.getPageForIndex = function (index) {
        return Math.floor((index / this.navigator.itemsPerPage) + 1);
    };
    Object.defineProperty(ComplexListFieldComponent.prototype, "customTemplate", {
        get: function () {
            return this.appGlobalsService.templates[this.schema.viewTemplateConfig.itemTemplateName];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexListFieldComponent.prototype, "shouldDisplayTemplate", {
        get: function () {
            return this.schema.viewTemplateConfig !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    ComplexListFieldComponent.prototype.getIndicesToDisplay = function (page) {
        var indices;
        if (this.navigator) {
            var start_1 = (page - 1) * this.navigator.itemsPerPage;
            indices = Array.apply(0, Array(this.navigator.itemsPerPage))
                .map(function (el, index) { return start_1 + index; });
            // check if the indices includes some numbers that are out of values index range.
            var lastIndexDiff = indices[indices.length - 1] - (this.values.size - 1);
            if (lastIndexDiff > 0) {
                indices.splice(indices.length - lastIndexDiff);
            }
        }
        else {
            indices = this.values.keySeq().toArray();
        }
        return indices;
    };
    return ComplexListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));

ComplexListFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'complex-list-field',
                styles: [".complex-list-field-wrapper { margin: 5px 15px 15px 15px; padding: 5px; box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25); } .navigator-container { width: 100%; } .navigator-item-right { float: right; padding-right: 13px !important; } .navigator-item-right label { position: relative; top: -19px; } .navigator-item-left { padding-left: 13px !important; } .transparent { background: transparent; } .borderless { border: none; } .find-button { color: darkslategray; opacity: 0.83; } .find-button .fa-search { opacity: 0.83; } .element-button-container { padding-top: 8px; } .element-button-container .left, .element-button-container .right { padding: 0px; } .element-button-container .right { text-align: right; } "],
                template: "<div [id]=\"pathString\"> <!-- Navigator --> <table *ngIf=\"navigator\" class=\"navigator-container\"> <tr> <td class=\"form-group navigator-item-left\"> <div class=\"input-group input-group-sm\"> <span class=\"input-group-btn\"> <button type=\"button\" class=\"btn btn-default find-button\" (click)=\"onFindClick()\"> <i class=\"fa fa-search\" aria-hidden=\"true\"></i> </button> </span> <input type=\"search\" class=\"form-control\" [(ngModel)]=\"findExpression\" (keypress)=\"onFindInputKeypress($event.key)\" placeholder=\"Find\" /> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound <= 0\" (click)=\"onFoundNavigate(-1)\">❮</button> </span> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound >= foundIndices.length - 1\" (click)=\"onFoundNavigate(1)\">❯</button> </span> <span *ngIf=\"foundIndices\" [ngSwitch]=\"foundIndices.length\" class=\"input-group-addon transparent borderless\"> <span *ngSwitchCase=\"0\"> Nothing found </span> <span *ngSwitchDefault> {{currentFound + 1}} of {{foundIndices.length}} </span> </span> </div> </td> <td class=\"navigator-item-right\"> <label> {{paginatedItems[0].index + 1}}-{{paginatedItems[paginatedItems.length - 1].index + 1}} of {{values.size}} {{path[path.length - 1]}} </label> <br> <pagination [totalItems]=\"values.size\" [ngModel]=\"currentPage\" [maxSize]=\"navigator.maxVisiblePageCount\" [itemsPerPage]=\"navigator.itemsPerPage\" class=\"pagination-sm pagination-top\" [boundaryLinks]=\"true\" [rotate]=\"false\" [firstText]=\"'❮❮'\" [previousText]=\"'❮'\" [nextText]=\"'❯'\" [lastText]=\"'❯❯'\" (pageChanged)=\"onPageChange($event.page)\"></pagination> </td> </tr> </table> <!-- Elements --> <div *ngFor=\"let item of paginatedItems; trackBy:trackByIndex\"> <div class=\"complex-list-field-wrapper\"> <span *ngIf=\"shouldDisplayTemplate && values.get(item.index).keySeq().size != 0\"> <ng-template [ngTemplateOutlet]=\"customTemplate\" [ngTemplateOutletContext]=\"{item: values.get(item.index)}\"></ng-template> <a href=\"javascript:void(0)\" (click)=\"item.isEditFormVisible = !item.isEditFormVisible\"> {{item.isEditFormVisible ? 'Hide Fields' : 'Show Fields'}} </a> </span> <span *ngIf=\"item.isEditFormVisible\"> <object-field [value]=\"values.get(item.index)\" [schema]=\"schema.items\" [path]=\"getPathForChild(item.index)\"> </object-field> <div class=\"row element-button-container\"> <div class=\"col-md-6 left\"> <add-nested-field-dropdown [pathString]=\"pathString + '/' + item.index\" [schema]=\"schema.items\"></add-nested-field-dropdown> </div> <div class=\"col-md-6 right\"> <list-action-group (onMove)=\"moveElement(item.index, $event)\" (onDelete)=\"deleteElement(item.index)\" [canMove]=\"schema.sortable\"></list-action-group> </div> </div> </span> </div> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ComplexListFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
ComplexListFieldComponent.propDecorators = {
    'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__ = __webpack_require__(729);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__["a"]; });



/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(46);
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
                styles: ["div.preview-container { width: 100%; height: 95vh; overflow-y: auto; } span.preview-link { color: #337ab7; cursor: pointer; } span.preview-link:hover { color: cornflowerblue; } "],
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

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__ = __webpack_require__(731);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__["a"]; });



/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPanelItemComponent; });
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


var ErrorPanelItemComponent = (function () {
    function ErrorPanelItemComponent(domUtilService, pathUtilService) {
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
    }
    ErrorPanelItemComponent.prototype.isJsonPointerPath = function (key) {
        return key.startsWith(this.pathUtilService.separator);
    };
    ErrorPanelItemComponent.prototype.keys = function (errorMap) {
        return Object.keys(errorMap);
    };
    ErrorPanelItemComponent.prototype.focusPath = function (event, path) {
        event.preventDefault();
        this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
    };
    return ErrorPanelItemComponent;
}());

ErrorPanelItemComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'error-panel-item',
                styles: ["i.fa-exclamation-triangle { color: #FFDD00; } i.fa-times { color: #D14024; } a:hover { background-color: #faebcc; text-decoration: underline; } a.list-group-item { cursor: pointer; color: #0074D9; } "],
                template: "<ul class=\"list-group\" *ngFor=\"let key of keys(errorMap)\"> <div [ngSwitch]=\"isJsonPointerPath(key)\" *ngFor=\"let error of errorMap[key]\"> <div *ngSwitchCase=\"true\" class=\"list-group\"> <a (click)=\"focusPath($event, key)\" class=\"list-group-item\"> <i *ngIf=\"heading === 'Errors'\" class=\"fa fa-times\" aria-hidden=\"true\"></i> <i *ngIf=\"heading === 'Warnings'\" class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{error.message}} </a> </div> <div *ngSwitchDefault> <li class=\"list-group-item\"> <i *ngIf=\"heading === 'Errors'\" class=\"fa fa-times\" aria-hidden=\"true\"></i> <i *ngIf=\"heading === 'Warnings'\" class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{error.message}} </li> </div> </div> </ul>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ErrorPanelItemComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* PathUtilService */], },
]; };
ErrorPanelItemComponent.propDecorators = {
    'errorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_panel_item_component__ = __webpack_require__(733);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__error_panel_item_component__["a"]; });



/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPanelComponent; });
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



var ErrorPanelComponent = (function (_super) {
    __extends(ErrorPanelComponent, _super);
    function ErrorPanelComponent(appGlobalsService, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.isOpen = false;
        _this.activeTab = '';
        _this.externalErrorMap = { Errors: {}, Warnings: {} };
        _this.internalErrorMap = { Errors: {}, Warnings: {} };
        _this.onCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        _this.tabs = [
            { title: 'Errors', customClass: 'error-tab-class' },
            { title: 'Warnings', customClass: 'warning-tab-class' }
        ];
        _this.externalErrorCount = 0;
        _this.internalErrorCount = 0;
        _this.externalWarningCount = 0;
        _this.internalWarningCount = 0;
        return _this;
    }
    ErrorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.externalCategorizedErrorSubscription = this.appGlobalsService.externalCategorizedErrorsSubject
            .subscribe(function (categorizedErrorMap) {
            _this.externalErrorMap = categorizedErrorMap;
            _this.changeDetectorRef.markForCheck();
        });
        this.externalErrorCounterSubscription = this.appGlobalsService.externalErrorCountersSubject
            .subscribe(function (errorCounters) {
            _this.externalErrorCount = errorCounters.errors;
            _this.externalWarningCount = errorCounters.warnings;
            if (!_this.checkForErrors) {
                _this.isOpen = false;
                _this.onCollapse.emit(false);
            }
            _this.changeDetectorRef.markForCheck();
        });
        this.internalCategorizedErrorSubscription = this.appGlobalsService.internalCategorizedErrorsSubject
            .subscribe(function (categorizedErrorMap) {
            _this.internalErrorMap = categorizedErrorMap;
            _this.changeDetectorRef.markForCheck();
        });
        this.internalErrorCounterSubscription = this.appGlobalsService.internalErrorCountersSubject
            .subscribe(function (errorCounters) {
            _this.internalErrorCount = errorCounters.errors;
            _this.internalWarningCount = errorCounters.warnings;
            if (!_this.checkForErrors) {
                _this.isOpen = false;
                _this.onCollapse.emit(false);
            }
            _this.changeDetectorRef.markForCheck();
        });
    };
    Object.defineProperty(ErrorPanelComponent.prototype, "checkForErrors", {
        get: function () {
            return this.externalErrorCount || this.externalWarningCount
                || this.internalErrorCount || this.internalWarningCount;
        },
        enumerable: true,
        configurable: true
    });
    ErrorPanelComponent.prototype.isTabActive = function (tabTitle) {
        return this.activeTab === tabTitle;
    };
    ErrorPanelComponent.prototype.closePanel = function () {
        this.onCollapse.emit(false);
    };
    ErrorPanelComponent.prototype.isTabEnabled = function (tabTitle) {
        if (tabTitle === 'Warnings') {
            return this.externalWarningCount || this.internalWarningCount;
        }
        return this.externalErrorCount || this.internalErrorCount;
    };
    ErrorPanelComponent.prototype.ngOnDestroy = function () {
        this.externalCategorizedErrorSubscription.unsubscribe();
        this.internalCategorizedErrorSubscription.unsubscribe();
        this.externalErrorCounterSubscription.unsubscribe();
        this.internalErrorCounterSubscription.unsubscribe();
    };
    return ErrorPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));

ErrorPanelComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'error-panel',
                styles: [".error-tab-class { color: #D14024; } .warning-tab-class { color: #FFDD00; } "],
                template: "<div *ngIf=\"isOpen\" [ngClass]=\"{'error-panel-container': isOpen}\"> <tabset> <tab *ngFor=\"let tab of tabs\" [active]=\"isTabActive(tab.title)\" [disabled]=\"!isTabEnabled(tab.title)\"> <ng-template tabHeading> <div *ngIf=\"tab.title === 'Errors' then errorBlock else warningBlock\"></div> <ng-template #errorBlock> <span [ngClass]=\"tab.customClass\"> <i class=\"fa fa-times\" aria-hidden=\"true\"></i> </span> <span [ngClass]=\"'error-link'\">{{tab.title}} <span class=\"badge\">{{internalErrorCount + externalErrorCount}}</span> </span> </ng-template> <ng-template #warningBlock> <span [ngClass]=\"tab.customClass\"> <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> </span> <span [ngClass]=\"'warning-link'\">{{tab.title}} <span class=\"badge\">{{internalWarningCount + externalWarningCount}}</span> </span> </ng-template> </ng-template> <div [ngClass]=\"'error-panel-item-container'\"> <error-panel-item [heading]=\"tab.title\" [errorMap]=\"externalErrorMap[tab.title]\"></error-panel-item> <error-panel-item [heading]=\"tab.title\" [errorMap]=\"internalErrorMap[tab.title]\"></error-panel-item> </div> </tab> <tab (select)=\"closePanel()\" [customClass]=\"'tab-align-right'\"> <ng-template tabHeading> <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i> </ng-template> </tab> </tabset> </div> ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ErrorPanelComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
ErrorPanelComponent.propDecorators = {
    'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'activeTab': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'externalErrorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'internalErrorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'onCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_panel_component__ = __webpack_require__(735);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__error_panel_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_panel_item__ = __webpack_require__(734);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__error_panel_item__["a"]; });




/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function FindReplaceComponent(changeDetectionRef, domSanitizer, findReplaceAllService, jsonStoreService, modalService) {
        this.changeDetectionRef = changeDetectionRef;
        this.domSanitizer = domSanitizer;
        this.findReplaceAllService = findReplaceAllService;
        this.jsonStoreService = jsonStoreService;
        this.modalService = modalService;
    }
    FindReplaceComponent.prototype.onKeypress = function (key) {
        if (key === 'Enter') {
            this.findAndReplace();
        }
    };
    FindReplaceComponent.prototype.findAndReplace = function () {
        var _this = this;
        if (!(this.find && this.replace)) {
            return;
        }
        var value = this.jsonStoreService.getIn(this.path);
        var result = this.findReplaceAllService
            .findReplaceInImmutable(value, this.schema, this.find, this.replace, this.exactPhrase);
        this.replaced = result.replaced;
        var stringyfiedDiffHtml = JSON.stringify(result.diffHtml, undefined, 2);
        this.modalService.displayModal({
            title: 'After Replace',
            bodyHtml: this.domSanitizer.bypassSecurityTrustHtml("<pre class=\"max-height-70-vh\"><code>" + stringyfiedDiffHtml + "</code></pre>"),
            type: 'confirm',
            onConfirm: function () {
                _this.modalService.closeCurrentModal();
                _this.jsonStoreService.setIn(_this.path, _this.replaced);
                _this.cleanParameters();
            }
        });
    };
    FindReplaceComponent.prototype.cleanParameters = function () {
        this.find = '';
        this.replace = '';
        this.exactPhrase = false;
        this.changeDetectionRef.markForCheck();
    };
    return FindReplaceComponent;
}());

FindReplaceComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'find-replace',
                styles: [".find-replace-container { margin: 4px 3px 3px 2px; } .find-replace-container input { font-size: 13px; } .top-container-item { margin-bottom: 3px; } .bottom-container-item { margin-top: 5px; } .bottom-container-item i { font-size: 20px; float: right; padding-right: 2px; } label { font-size: 12px; font-weight: 400; color: #7e7e7e; } .horizontal-padding, .find-replace-container div { padding-right: 20px; padding-left: 20px; } "],
                template: "<div class=\"find-replace-container\"> <div class=\"top-container-item\"> <input placeholder=\"Find\" [(ngModel)]=\"find\" (keypress)=\"onKeypress($event.key)\" /> </div> <div> <input placeholder=\"Replace\" [(ngModel)]=\"replace\" (keypress)=\"onKeypress($event.key)\" /> </div> <div class=\"bottom-container-item\"> <label> Exact phrase <input type=\"checkbox\" [(ngModel)]=\"exactPhrase\" (keypress)=\"onKeypress($event.key)\"/> </label> <i class=\"fa fa-arrow-circle-right\" (click)=\"findAndReplace()\"></i> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
FindReplaceComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["s" /* FindReplaceAllService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["r" /* ModalService */], },
]; };
FindReplaceComponent.propDecorators = {
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_replace_component__ = __webpack_require__(737);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__find_replace_component__["a"]; });



/***/ }),

/***/ 739:
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
                styles: [".fit-parent { height: 100%; width: 100%; } "],
                template: "<object class=\"fit-parent\" [data]=\"url | sanitizeUrl\"></object>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
HtmlViewComponent.ctorParameters = function () { return []; };
HtmlViewComponent.propDecorators = {
    'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_view_component__ = __webpack_require__(739);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__html_view_component__["a"]; });



/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json_editor_module__ = __webpack_require__(743);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__json_editor_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pipes__ = __webpack_require__(411);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_classes__ = __webpack_require__(410);
/* unused harmony namespace reexport */
// export everything in order to be AoT compatible






/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_tracker__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__(6);
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
    function JsonEditorComponent(http, appGlobalsService, jsonStoreService, jsonUtilService, jsonSchemaService, keysStoreService, recordFixerService, schemaFixerService, shortcutsService, tabsUtilService, pathUtilService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.jsonUtilService = jsonUtilService;
        _this.jsonSchemaService = jsonSchemaService;
        _this.keysStoreService = keysStoreService;
        _this.recordFixerService = recordFixerService;
        _this.schemaFixerService = schemaFixerService;
        _this.shortcutsService = shortcutsService;
        _this.tabsUtilService = tabsUtilService;
        _this.pathUtilService = pathUtilService;
        _this.templates = {};
        _this.onRecordChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        _this._errorMap = {};
        _this.isErrorPanelOpen = false;
        _this.errorPanelActiveTab = '';
        return _this;
    }
    Object.defineProperty(JsonEditorComponent.prototype, "errorMap", {
        get: function () {
            return this._errorMap;
        },
        set: function (errors) {
            this._errorMap = errors;
            this.appGlobalsService.externalErrors = this.errorMap;
        },
        enumerable: true,
        configurable: true
    });
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
        // set config to make it globally accessible all over the app
        this.appGlobalsService.config = this.config;
        // set errors that is used by other components
        this.appGlobalsService.externalErrors = this.errorMap;
        this.appGlobalsService.templates = this.templates;
        this.appGlobalsService.adminMode$.subscribe(function (adminMode) {
            _this.keysStoreService.buildKeysMap(_this._record, _this.schema);
        });
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
        // construct enhanced sorted filtered keys map for objects in the record
        this.keysStoreService.buildKeysMap(this._record, this.schema);
        // setup variables need for tab grouping.
        if (this.config.tabsConfig) {
            this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
            this.tabsUtilService.activeTabName$.subscribe(function (tabName) { _this.appGlobalsService.activeTabName = tabName; });
            this.appGlobalsService.activeTabName = this.config.tabsConfig.defaultTabName;
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
    Object.defineProperty(JsonEditorComponent.prototype, "keys$", {
        get: function () {
            return this.keysStoreService.forPath(this.pathString);
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(JsonEditorComponent.prototype, "middleContainerColMdClass", {
        get: function () {
            if (this.isPreviewerDisabled) {
                return 'col-md-10';
            }
            return this.isPreviewerHidden ? 'col-md-9' : 'col-md-6';
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
    Object.defineProperty(JsonEditorComponent.prototype, "pathString", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    JsonEditorComponent.prototype.isActiveTab = function (tabName) {
        return this.appGlobalsService.activeTabName === tabName;
    };
    Object.defineProperty(JsonEditorComponent.prototype, "shorterEditorContainerClass", {
        get: function () {
            return this.isErrorPanelOpen ? 'shorter-editor-container' : '';
        },
        enumerable: true,
        configurable: true
    });
    JsonEditorComponent.prototype.openErrorPanel = function (errorPanelTabName) {
        this.isErrorPanelOpen = true;
        this.errorPanelActiveTab = errorPanelTabName;
    };
    return JsonEditorComponent;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_tracker__["a" /* AbstractTrackerComponent */]));

JsonEditorComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'json-editor',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
                styles: ["body, html { height: 100%; background-color: #ecf0f1; } .editor-container { height: 100%; margin-right: 0px; margin-left: 0px; } .editor-container .row { margin-left: 0px; margin-right: 0px; } .shorter-editor-container { height: 75%; } #ng2-json-editor { /* Styles for tabset */ } #ng2-json-editor .hidden { display: none; } #ng2-json-editor th { font-weight: 400; padding: 1px 0px 1px 6px; background-color: #ecf0f1; color: #8e8e8e; font-weight: bold; } #ng2-json-editor th .dropdown-filter-container { font-weight: initial; } #ng2-json-editor td { background-color: #f9f9f9; border: none; padding: 0; } #ng2-json-editor td > * { vertical-align: middle; } #ng2-json-editor td.label-holder { width: 1%; white-space: nowrap; padding: 3px; background-color: #dae8ef; border-top: 1px solid #bdc3c7; } #ng2-json-editor td.label-holder button { color: #595959; } #ng2-json-editor tr.error td, #ng2-json-editor td.error { color: white; background-color: #e74c3c !important; transition: all .4s; } #ng2-json-editor tbody { border: none; } #ng2-json-editor .error-panel-container { height: 25%; overflow: hidden; } #ng2-json-editor .error-panel-container .tab-content { height: 90%; overflow: auto; } #ng2-json-editor .error-panel-container .nav-tabs > .tab-align-right { float: right; } #ng2-json-editor .error-link { color: #D14024; } #ng2-json-editor .error-link .badge { background-color: #a94442; } #ng2-json-editor ::-webkit-validation-bubble-heading .warning-link { color: #FFDD00; } #ng2-json-editor ::-webkit-validation-bubble-heading .warning-link .badge { background-color: #8a6d3b; } #ng2-json-editor table { margin-bottom: 0px !important; } #ng2-json-editor .main-container { font-size: 13px; border-left: 1px solid #a5adb5; height: 100%; overflow: auto; } #ng2-json-editor .main-container .tab-container > .nav-tabs { font-size: 14px; } #ng2-json-editor .add-field-dropdown-container { width: 100%; } #ng2-json-editor .middle.main-container { padding: 0px; } #ng2-json-editor .menu-container { background-color: #1D2D3D; height: 100%; overflow: auto; } #ng2-json-editor .menu-container div.dropdown { width: 100%; } #ng2-json-editor .menu-container ul.dropdown-menu { right: 0px; padding-bottom: 15px; } #ng2-json-editor .menu-container button.btn-add-field-dropdown { background: white; padding: 5px; opacity: 0.9; line-height: normal; font-size: 16px; width: 100%; } #ng2-json-editor .menu-container button.btn-add-field-dropdown:hover { opacity: 1; color: black; } #ng2-json-editor bs-dropdown-container { position: inherit !important; } #ng2-json-editor .editor-btn-delete { font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; opacity: 0.2; background: transparent; border: 0; padding: 0 0 3px 3px; } #ng2-json-editor .editor-btn-delete:hover { color: red; opacity: 0.6; } #ng2-json-editor .editor-btn-delete.editor-btn-delete-text { font-size: 13px; opacity: 0.5; padding: 0px; } #ng2-json-editor .editor-btn-move-down { padding-bottom: 0; } #ng2-json-editor .editor-btn-move-up, #ng2-json-editor .editor-btn-move-down { padding: 0; font-size: 11px; border: 0; background: transparent; opacity: 0.2; } #ng2-json-editor .editor-btn-move-up:hover, #ng2-json-editor .editor-btn-move-down:hover { opacity: 0.6; } #ng2-json-editor ul.pagination-top { margin: -16px 0px 0px 0px; } #ng2-json-editor td.button-holder, #ng2-json-editor th.button-holder { width: 40.33px; text-align: center; vertical-align: middle; } #ng2-json-editor td.button-holder.sortable, #ng2-json-editor th.button-holder.sortable { width: 46px; } #ng2-json-editor th.button-holder .add-field-dropdown-container { width: 100%; } #ng2-json-editor th.button-holder .btn-add-field-dropdown { width: 100%; } #ng2-json-editor label { color: #c1c1c1; } #ng2-json-editor .highlight { border: 2px solid yellow !important; } #ng2-json-editor table.editable-inner-table { table-layout: fixed; } #ng2-json-editor table.editable-inner-table > tbody > tr { border-bottom: 1px solid white !important; } #ng2-json-editor table.editable-inner-table add-new-element-button .button-container { padding-left: 6px; } #ng2-json-editor table.editable-inner-table label { display: inline; font-weight: initial; padding-left: 5px; } #ng2-json-editor table.editable-inner-table .dropdown-menu { left: inherit; right: 0px; min-width: 100px; } #ng2-json-editor .title-dropdown-item button { width: 100%; text-align: left; padding-left: 20px !important; padding-right: 20px !important; } #ng2-json-editor .title-dropdown-item:hover { background: #f5f5f5; } #ng2-json-editor .tooltip.top .tooltip-arrow { border-top-color: transparent; } #ng2-json-editor .tooltip { width: 90%; } #ng2-json-editor button.btn-toggle { float: right; margin-top: 5px; margin-right: 5px; } #ng2-json-editor .autocomplete-container .dropdown { position: relative !important; top: 0px !important; left: 0px !important; } #ng2-json-editor .max-height-90-vh { max-height: 90vh; } #ng2-json-editor .max-height-70-vh { max-height: 70vh; } #ng2-json-editor div.admin-mode { padding-top: 8px; width: 100%; } #ng2-json-editor label.admin-mode { color: #e0dfdf; font-size: 13px; font-weight: normal; width: 90%; padding-left: 4px; } #ng2-json-editor hr { margin-top: 5px; margin-bottom: 5px; border-top: 1px solid #757575; } #ng2-json-editor .btn { border-radius: 0; } #ng2-json-editor .btn.btn-success { background-color: #16a085; border-color: #16a085; color: white; } #ng2-json-editor .btn.btn-success:hover, #ng2-json-editor .btn.btn-success:active, #ng2-json-editor .btn.btn-success:focus { background-color: #19b698 !important; color: white; } #ng2-json-editor .btn .fa { margin-right: 5px; } #ng2-json-editor .nav { margin-bottom: 3px; } #ng2-json-editor .nav-tabs > li.active > a, #ng2-json-editor .nav-tabs > li.active > a:hover, #ng2-json-editor .nav-tabs > li.active > a:focus { border-top: 1px solid #2c3e50; background-color: white; } #ng2-json-editor .nav-tabs > li > a:hover { border-top: 1px solid #2c3e50; border-bottom: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; transition: all .4s; } #ng2-json-editor .nav.nav-tabs { border-bottom: 5px solid white; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24); } #ng2-json-editor .nav-tabs > li > a { margin-right: 0px; border-radius: 0px; border-right: 1px solid #e0e2e2; } complex-list-field add-field-dropdown { display: none; } "],
                template: "<div id=\"ng2-json-editor\" class=\"row editor-container\" [ngClass]=\"shorterEditorContainerClass\"> <div class=\"col-md-2 menu-container\"> <tree-menu [record]=\"_record\" [schema]=\"schema\"></tree-menu> <add-field-dropdown [fields]=\"keys$ | async\" [pathString]=\"pathString\" [schema]=\"schema\">Add field</add-field-dropdown> <hr> <div *ngIf=\"config.enableAdminModeSwitch\" class=\"admin-mode\" tooltip=\"Allows editing all fields (use with care)\"> <input id=\"admin-mode-checkbox\" type=\"checkbox\" [(ngModel)]=\"appGlobalsService.adminMode\" /> <label class=\"admin-mode\" for=\"admin-mode-checkbox\">Enable Admin Mode</label> </div> <hr> <validation-badges (onBadgeClick)=\"openErrorPanel($event)\"></validation-badges> </div> <div id=\"middle-main-container\" class=\"middle main-container\" [ngClass]=\"middleContainerColMdClass\" [shortcuts]=\"shortcuts\"> <tabset *ngIf=\"config.tabsConfig\"> <tab *ngFor=\"let tabName of tabNames; trackBy:trackByElement\" [heading]=\"tabName\" (select)=\"activeTabName = tabName\" [active]=\"isActiveTab(tabName)\"> <sub-record [value]=\"_record\" [tabName]=\"tabName\" [schema]=\"schema\" [keys]=\"keys$ | async\" [pathString]=\"pathString\"></sub-record> </tab> </tabset> <sub-record *ngIf=\"!config.tabsConfig\" [value]=\"_record\" [schema]=\"schema\" [keys]=\"keys$ | async\" [pathString]=\"pathString\"></sub-record> </div> <div id=\"right-main-container\" *ngIf=\"!isPreviewerDisabled\" [ngClass]=\"rightContainerColMdClass\" class=\"main-container\"> <button id=\"btn-preview-toggle\" type=\"button\" class=\"btn btn-default btn-toggle\" (click)=\"isPreviewerHidden = !isPreviewerHidden\">{{isPreviewerHidden ? \"Show Preview\" : \"Hide Preview\"}}</button> <editor-previewer [hidden]=\"isPreviewerHidden\" [previews]=\"previews\"> </editor-previewer> </div> </div> <error-panel [activeTab]=\"errorPanelActiveTab\" [isOpen]=\"isErrorPanelOpen\" (onCollapse)=\"isErrorPanelOpen = $event\"></error-panel> <!-- Modal View controlled by ModalService --> <modal-view> </modal-view>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
JsonEditorComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["j" /* JsonUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["k" /* JsonSchemaService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["i" /* KeysStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["l" /* RecordFixerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["m" /* SchemaFixerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["n" /* ShortcutService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["h" /* TabsUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__shared_services__["a" /* PathUtilService */], },
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

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slide_toggle__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_field_dropdown__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_new_element_button__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__any_type_field__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autocomplete_input__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__complex_list_field__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editor_previewer__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sub_record__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validation_badges__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__find_replace__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__html_view__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__json_editor_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_view__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__object_field__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__primitive_list_field__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__primitive_field__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ref_field__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__table_list_field__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__table_item_field__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__title_dropdown__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__string_input__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tree_menu__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__searchable_dropdown__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__list_action_group__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__error_panel__ = __webpack_require__(736);
/* unused harmony reexport AddFieldDropdownComponent */
/* unused harmony reexport AddNestedFieldDropdownComponent */
/* unused harmony reexport AddNewElementButtonComponent */
/* unused harmony reexport AnyTypeFieldComponent */
/* unused harmony reexport AutocompleteInputComponent */
/* unused harmony reexport ComplexListFieldComponent */
/* unused harmony reexport ObjectFieldComponent */
/* unused harmony reexport EditorPreviewerComponent */
/* unused harmony reexport ErrorPanelComponent */
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
/* unused harmony reexport ValidationBadgesComponent */
/* unused harmony reexport ErrorPanelItemComponent */
/* unused harmony reexport StringInputComponent */
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
                declarations: __WEBPACK_IMPORTED_MODULE_29__shared__["a" /* SHARED_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_29__shared__["b" /* SHARED_DIRECTIVES */], [
                    __WEBPACK_IMPORTED_MODULE_6__add_field_dropdown__["a" /* AddFieldDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_6__add_field_dropdown__["b" /* AddNestedFieldDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_7__add_new_element_button__["a" /* AddNewElementButtonComponent */],
                    __WEBPACK_IMPORTED_MODULE_8__any_type_field__["a" /* AnyTypeFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_9__autocomplete_input__["a" /* AutocompleteInputComponent */],
                    __WEBPACK_IMPORTED_MODULE_10__complex_list_field__["a" /* ComplexListFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_18__object_field__["a" /* ObjectFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__editor_previewer__["a" /* EditorPreviewerComponent */],
                    __WEBPACK_IMPORTED_MODULE_14__find_replace__["a" /* FindReplaceComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__modal_view__["a" /* ModalViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_19__primitive_list_field__["a" /* PrimitiveListFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_20__primitive_field__["a" /* PrimitiveFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_21__ref_field__["a" /* RefFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_27__searchable_dropdown__["a" /* SearchableDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_28__list_action_group__["a" /* ListActionGroupComponent */],
                    __WEBPACK_IMPORTED_MODULE_22__table_list_field__["a" /* TableListFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_23__table_item_field__["a" /* TableItemFieldComponent */],
                    __WEBPACK_IMPORTED_MODULE_24__title_dropdown__["a" /* TitleDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_26__tree_menu__["a" /* TreeMenuItemComponent */],
                    __WEBPACK_IMPORTED_MODULE_26__tree_menu__["b" /* TreeMenuComponent */],
                    __WEBPACK_IMPORTED_MODULE_16__json_editor_component__["a" /* JsonEditorComponent */],
                    __WEBPACK_IMPORTED_MODULE_12__sub_record__["a" /* SubRecordComponent */],
                    __WEBPACK_IMPORTED_MODULE_15__html_view__["a" /* HtmlViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_13__validation_badges__["a" /* ValidationBadgesComponent */],
                    __WEBPACK_IMPORTED_MODULE_30__error_panel__["a" /* ErrorPanelComponent */],
                    __WEBPACK_IMPORTED_MODULE_30__error_panel__["b" /* ErrorPanelItemComponent */],
                    __WEBPACK_IMPORTED_MODULE_25__string_input__["a" /* StringInputComponent */]
                ]),
                exports: [__WEBPACK_IMPORTED_MODULE_16__json_editor_component__["a" /* JsonEditorComponent */]],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_5_ng2_slide_toggle__["a" /* SlideToggleModule */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                    __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
                ],
                providers: __WEBPACK_IMPORTED_MODULE_29__shared__["c" /* SHARED_SERVICES */]
            },] },
];
/** @nocollapse */
JsonEditorModule.ctorParameters = function () { return []; };



/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_action_group_component__ = __webpack_require__(745);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_action_group_component__["a"]; });



/***/ }),

/***/ 745:
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
                template: "<div> <button type=\"button\" class=\"editor-btn-delete\" (click)=\"onDelete.emit()\"> <i class=\"fa fa-times\"></i> </button> <button *ngIf=\"canMove\" type=\"button\" class=\"editor-btn-move-up\" (click)=\"onMove.emit(-1)\"> <i class=\"fa fa-chevron-up\"></i> </button> <button *ngIf=\"canMove\" type=\"button\" class=\"editor-btn-move-down\" (click)=\"onMove.emit(1)\"> <i class=\"fa fa-chevron-down\"></i> </button> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ListActionGroupComponent.ctorParameters = function () { return []; };
ListActionGroupComponent.propDecorators = {
    'canMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'onDelete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'onMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_view_component__ = __webpack_require__(747);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_view_component__["a"]; });



/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(6);
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
    function ModalViewComponent(modalService, changeDetectorRef) {
        var _this = this;
        this.modalService = modalService;
        this.changeDetectorRef = changeDetectorRef;
        this.modalService
            .display$.subscribe(function (display) {
            display ? _this.modal.show() : _this.modal.hide();
        });
        this.modalService
            .options$.subscribe(function (options) {
            _this.options = options;
            _this.changeDetectorRef.markForCheck();
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
                template: "<div class=\"modal fade\" (onShown)=\"onShow()\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" [config]=\"{ backdrop: false }\"> <div class=\"modal-dialog modal-lg\"> <div *ngIf=\"options\" class=\"modal-content max-height-90-vh\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" (click)=\"modal.hide()\">&times;</button> <h4 class=\"modal-title\">{{options.title}}</h4> </div> <div class=\"modal-body\"> <div [innerHTML]=\"options.bodyHtml\"></div> <div [ngSwitch]=\"options.type\"> <div *ngSwitchCase=\"'confirm'\"> <button class=\"btn btn-success\" (click)=\"options.onConfirm();\"> <i class=\"fa fa-check\"></i> Confirm </button> </div> </div> </div> </div> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ModalViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["r" /* ModalService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
ModalViewComponent.propDecorators = {
    'modal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */], args: ['modal',] },],
};


/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_field_component__ = __webpack_require__(749);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__object_field_component__["a"]; });



/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function ObjectFieldComponent(appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef, keysStoreService) {
        var _this = _super.call(this, appGlobalsService, pathUtilService, changeDetectorRef) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.keysStoreService = keysStoreService;
        return _this;
    }
    Object.defineProperty(ObjectFieldComponent.prototype, "keys$", {
        get: function () {
            return this.keysStoreService.forPath(this.pathString);
        },
        enumerable: true,
        configurable: true
    });
    ObjectFieldComponent.prototype.deleteField = function (name) {
        var fieldPath = this.path.concat(name);
        this.jsonStoreService.removeIn(fieldPath);
        this.keysStoreService.deleteKey(this.pathString, name);
    };
    ObjectFieldComponent.prototype.isDisabled = function (key) {
        return this.schema.properties[key].disabled && !this.appGlobalsService.adminMode;
    };
    return ObjectFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));

ObjectFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'object-field',
                styles: ["table.table { background-color: #f9f9f9; } "],
                template: "<table [id]=\"pathString\" class=\"table\"> <tr *ngFor=\"let key of keys$ | async; trackBy:trackByElement\"> <!-- SUB FIELD TITLE MENU --> <td class=\"label-holder\"> <div> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"isDisabled(key)\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getPathForChild(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> </title-dropdown> </div> </td> <!-- SUB FIELD COMPONENT --> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=schema.properties[key] [path]=\"getPathForChild(key)\"></any-type-field> </td> </tr> <!-- ADD SUB FIELD FROM SCHEMA DROPDOWN --> <tr> <td class=\"button-holder\"> <add-field-dropdown [fields]=\"keys$ | async\" [pathString]=\"pathString\" [schema]=\"schema\"> <i class=\"fa fa-plus\"></i> </add-field-dropdown> </td> </tr> </table>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
ObjectFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["i" /* KeysStoreService */], },
]; };
ObjectFieldComponent.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__ = __webpack_require__(751);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__["a"]; });



/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function PrimitiveFieldComponent(schemaValidationService, componentTypeService, appGlobalsService, jsonStoreService, keysStoreService, pathUtilService, domUtilService, changeDetectorRef) {
        var _this = _super.call(this, appGlobalsService, pathUtilService, changeDetectorRef) || this;
        _this.schemaValidationService = schemaValidationService;
        _this.componentTypeService = componentTypeService;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.keysStoreService = keysStoreService;
        _this.pathUtilService = pathUtilService;
        _this.domUtilService = domUtilService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.internalErrors = [];
        _this.appGlobalsService.adminMode$.subscribe(function (adminMode) {
            _this.changeDetectorRef.markForCheck();
        });
        return _this;
    }
    PrimitiveFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.lastCommitedValue = this.value;
        this.internalCategorizedErrorSubscription = this.appGlobalsService
            .internalCategorizedErrorsSubject
            .subscribe(function (internalCategorizedErrorMap) {
            _this.internalErrors = internalCategorizedErrorMap.Errors[_this.pathString] || [];
        });
        this.validate();
    };
    PrimitiveFieldComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.internalErrors.length > 0) {
            this.appGlobalsService.extendInternalErrors(this.pathString, []);
        }
        this.internalCategorizedErrorSubscription.unsubscribe();
    };
    PrimitiveFieldComponent.prototype.commitValueChange = function () {
        this.validate();
        this.lastCommitedValue = this.value;
        this.jsonStoreService.setIn(this.path, this.value);
        if (this.schema.onValueChange) {
            this.schema.onValueChange(this.path, this.value, this.jsonStoreService, this.keysStoreService);
        }
    };
    PrimitiveFieldComponent.prototype.onBlur = function () {
        this.domUtilService.clearHighlight();
        if (this.value !== this.lastCommitedValue) {
            this.commitValueChange();
        }
    };
    PrimitiveFieldComponent.prototype.onKeypress = function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            document.activeElement.blur();
        }
    };
    PrimitiveFieldComponent.prototype.onValueChange = function (value) {
        this.value = value;
    };
    PrimitiveFieldComponent.prototype.onSearchableDropdownSelect = function (value) {
        this.value = value;
        this.commitValueChange();
    };
    Object.defineProperty(PrimitiveFieldComponent.prototype, "tabIndex", {
        get: function () {
            return this.schema.disabled ? -1 : 1;
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
    Object.defineProperty(PrimitiveFieldComponent.prototype, "disabled", {
        get: function () {
            return this.schema.disabled && !this.appGlobalsService.adminMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveFieldComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled ? 'disabled' : '';
        },
        enumerable: true,
        configurable: true
    });
    PrimitiveFieldComponent.prototype.hasErrors = function () {
        return _super.prototype.hasErrors.call(this) || this.internalErrors.length > 0;
    };
    PrimitiveFieldComponent.prototype.validate = function () {
        // don't validate if value is empty
        if (this.value) {
            this.internalErrors = this.schemaValidationService.validateValue(this.value, this.schema);
            this.appGlobalsService.extendInternalErrors(this.pathString, this.internalErrors);
        }
    };
    return PrimitiveFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));

PrimitiveFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'primitive-field',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
                styles: ["td.value-container div[contenteditable=true], td.value-container input { vertical-align: middle; transition: all 0.5s ease; border: none; background-color: transparent; display: inline-block; width: 100%; } table.primitive-field-container { width: 100%; } td.link-button-container { width: 22px; } td.value-container { width: 100%; padding: 3px 3px 3px 6px !important; } td.value-container:hover { background-color: #ffa !important; } a.no-decoration { text-decoration: none; } [contenteditable=true] { min-height: 18px; word-break: break-word; } [contenteditable=true]:empty:before { content: attr(placeholder); color: darkgray; display: block; /* For Firefox */ } .tooltip-left-align { margin-left: 12px; padding: 0px; } .disabled { cursor: not-allowed; } .disabled div { pointer-events: none; } .disabled div input, .disabled div button, .disabled div a, .disabled div i, .disabled div string-input > div { opacity: .5; } "],
                template: "<div [ngSwitch]=\"schema.componentType\" [id]=\"pathString\"> <table class=\"primitive-field-container\"> <tr [ngClass]=\"{error: hasErrors()}\"> <ng-template #errorsTooltipTemplate> <ul class=\"tooltip-left-align\"> <li *ngFor=\"let error of internalErrors\"> {{error.message}} </li> <li *ngFor=\"let error of externalErrors\"> {{error.message}} </li> </ul> </ng-template> <td class=\"value-container\" [ngClass]=\"disabledClass\" [tooltip]=\"errorsTooltipTemplate\" [isDisabled]=\"!hasErrors()\" placement=\"{{tooltipPosition}}\" container=\"body\"> <div *ngSwitchCase=\"'string'\"> <string-input [pathString]=\"pathString\" [value]=\"value\" (valueChange)=\"onValueChange($event)\" [disabled]=\"disabled\" [tabIndex]=\"tabIndex\" [latexPreviewEnabled]=\"schema.latexPreviewEnabled\" [placeholder]=\"schema.title\" (blur)=\"onBlur()\" (onKeypress)=\"onKeypress($event)\"> </string-input> </div> <div *ngSwitchCase=\"'enum'\"> <searchable-dropdown [pathString]=\"pathString\" [value]=\"value\" [placeholder]=\"schema.title\" [items]=\"schema.enum\" [shortcutMap]=\"schema.enumShorcutMap\" (onSelect)=\"onSearchableDropdownSelect($event)\" [tabIndex]=\"tabIndex\" (onBlur)=\"domUtilService.clearHighlight()\"></searchable-dropdown> </div> <div *ngSwitchCase=\"'autocomplete'\"> <autocomplete-input [pathString]=\"pathString\" [value]=\"value\" [path]=\"path\" [autocompletionConfig]=\"schema.autocompletionConfig\" (onBlur)=\"onBlur()\" (onKeypress)=\"onKeypress($event)\" (onValueChange)=\"onValueChange($event)\" [placeholder]=\"schema.title\" [tabIndex]=\"tabIndex\"></autocomplete-input> </div> <div *ngSwitchCase=\"'integer'\"> <input type=\"number\" [(ngModel)]=\"value\" [tabindex]=\"tabIndex\" [attr.data-path]=\"pathString\" (blur)=\"onBlur()\" (keypress)=\"onKeypress($event)\" [placeholder]=\"schema.title\"> </div> <div *ngSwitchCase=\"'boolean'\"> <input type=\"checkbox\" [(ngModel)]=\"value\" (ngModelChange)=\"onBlur()\" [placeholder]=\"schema.title\"> </div> <div *ngSwitchDefault> ## Not recognized type: {{valueType}} </div> </td> <td class=\"link-button-container\"> <a *ngIf=\"schema.linkBuilder\" class=\"no-decoration\" target=\"_blank\" [href]=\"schema.linkBuilder(value)\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> <a *ngIf=\"!schema.linkBuilder && schema.format === 'url'\" class=\"no-decoration\" target=\"_blank\" [href]=\"value\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> </td> </tr> </table> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
PrimitiveFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["p" /* SchemaValidationService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["q" /* ComponentTypeService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["i" /* KeysStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
PrimitiveFieldComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__ = __webpack_require__(753);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__["a"]; });



/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function PrimitiveListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        var _this = _super.call(this, appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    return PrimitiveListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));

PrimitiveListFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'primitive-list-field',
                styles: ["td { padding: 0px !important; } "],
                template: "<div [id]=\"pathString\"> <div class=\"wide\"> <table class=\"table\"> <tr *ngFor=\"let value of values | selfOrEmpty:schema; let i = index; trackBy:trackByIndex\"> <td> <primitive-field [value]=\"value\" [schema]=\"schema.items\" [path]=\"getPathForChild(i)\"></primitive-field> </td> <td *ngIf=\"values.size > 0\" class=\"button-holder\" [ngClass]=\"sortableClass\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\" [canMove]=\"schema.sortable\"></list-action-group> </td> </tr> </table> </div> </div> ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
PrimitiveListFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
PrimitiveListFieldComponent.propDecorators = {
    'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref_field_component__ = __webpack_require__(755);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ref_field_component__["a"]; });



/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__(6);
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
            if (valueChange && this.refConfig && this.refConfig.anchorBuilder && this.ref) {
                this.anchorAttributes = this.refConfig.anchorBuilder(this.ref);
            }
            // instead of ngOnInit because requestOptions has to be set before fetching
            if (schemaChange && schemaChange.isFirstChange()) {
                this.requestOptions = this.createRequestOptionsWithConfig();
            }
            if (valueChange && this.isTemplateEnabled) {
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
            return this.schema.refFieldConfig;
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
    Object.defineProperty(RefFieldComponent.prototype, "anchorHref", {
        get: function () {
            return this.anchorAttributes ? this.anchorAttributes.href : this.ref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefFieldComponent.prototype, "anchorDisplay", {
        get: function () {
            return this.anchorAttributes ? this.anchorAttributes.display : this.ref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefFieldComponent.prototype, "isTemplateEnabled", {
        get: function () {
            return this.refConfig !== undefined && this.refConfig.templateName !== undefined;
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
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ $error: error });
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
                styles: ["button.btn-preview-template { background: transparent; border: 0; width: 100%; height: 100%; } .align-center { width: 100%; text-align: center; } .break-word { word-break: break-word; } "],
                template: "<div [id]=\"pathString\"> <div *ngIf=\"ref\"> <div *ngIf=\"isTemplateEnabled\"> <button class=\"btn-preview-template\" *ngIf=\"!shouldDisplayTemplate\" (click)=\"onPreviewClick($event)\"><i class=\"fa fa-eye\"></i></button> <div *ngIf=\"shouldDisplayTemplate\"> <ng-template *ngIf=\"refData\" [ngTemplateOutlet]=\"customTemplate\" [ngTemplateOutletContext]=\"{response: refData}\"></ng-template> <i *ngIf=\"!refData\" class=\"fa fa-spinner fa-spin align-center\"></i> </div> </div> <div *ngIf=\"!isTemplateEnabled\"> <a target=\"_blank\" class=\"break-word\" [href]=\"anchorHref\">{{anchorDisplay}}</a> </div> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
RefFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["a" /* PathUtilService */], },
]; };
RefFieldComponent.propDecorators = {
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__ = __webpack_require__(757);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__["a"]; });



/***/ }),

/***/ 757:
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
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
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
        // only necessary to force closing when selected is item equals to value
        // in which case dropdown doesn't close automatically for some reason
        this.status.isOpen = false;
    };
    SearchableDropdownComponent.prototype.onKeypress = function (key) {
        if (key === 'Enter') {
            if (this.shortcutMap && this.shortcutMap[this.expression]) {
                this.onItemClick(this.shortcutMap[this.expression]);
            }
            this.status.isOpen = false;
        }
    };
    SearchableDropdownComponent.prototype.onInputFocus = function (event) {
        this.status.isOpen = true;
    };
    SearchableDropdownComponent.prototype.onInputBlur = function (event) {
        // this avoids closing dropdown when an item is selected
        // so that onItemClick() can be executed properly before closing.
        var relatedTarget = event.relatedTarget;
        if (!relatedTarget || relatedTarget.className !== 'dropdown-item') {
            this.status.isOpen = false;
        }
        this.onBlur.emit();
    };
    return SearchableDropdownComponent;
}());

SearchableDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'searchable-dropdown',
                styles: ["div.btn-group { width: 100%; } .dropdown-menu { left: 0px !important; } .toggle-container { width: 100%; } .toggle-container input { width: 93%; } .toggle-container i { width: 5%; height: 100%; text-align: right; } .dropdown-toggle { box-shadow: none !important; } "],
                template: "<div class=\"btn-group\" dropdown keyboardNav=\"true\" [isOpen]=\"status.isOpen\" (onShown)=\"status.isOpen = true\" (onHidden)=\"status.isOpen = false\"> <!-- there is no dropdownToggle since it is handled manually see: onInputFocus and onInputBlur in ts --> <div class=\"toggle-container\"> <input #inputToggle attr.data-path=\"{{pathString}}\" [placeholder]=\"placeholder\" [(ngModel)]=\"expressionOrValue\" (keypress)=\"onKeypress($event.key)\" [tabindex]=\"tabIndex\" (blur)=\"onInputBlur($event)\" (focus)=\"onInputFocus($event)\"> <i class=\"fa fa-caret-down\" (click)=\"inputToggle.focus()\"></i> </div> <ul class=\"dropdown-menu\" *dropdownMenu role=\"menu\"> <li *ngFor=\"let item of items | filterByExpression:expression\" role=\"menuitem\"> <!-- href is needed for keyboard navigation --> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onItemClick(item)\">{{item}}</a> </li> </ul> </div>",
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
    'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizedStack; });
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
var SizedStack = (function () {
    function SizedStack(size) {
        this.values = new Array();
        this.size = size;
    }
    SizedStack.prototype.push = function (value) {
        this.values.push(value);
        if (this.values.length > this.size) {
            this.values.shift();
        }
    };
    SizedStack.prototype.pop = function () {
        return this.values.pop();
    };
    return SizedStack;
}());



/***/ }),

/***/ 759:
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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcuts_directive__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_model_directive__ = __webpack_require__(759);
/* unused harmony reexport ShortcutsDirective */
/* unused harmony reexport ContentModelDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_DIRECTIVES; });



var SHARED_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__shortcuts_directive__["a" /* ShortcutsDirective */],
    __WEBPACK_IMPORTED_MODULE_1__content_model_directive__["a" /* ContentModelDirective */]
];


/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mousetrap__ = __webpack_require__(641);
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

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(760);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pipes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });






/***/ }),

/***/ 763:
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
        var alwaysShowFields = schema.alwaysShow || [];
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

/***/ 764:
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

/***/ 765:
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

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterHiddenFieldsPipe; });
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

var FilterHiddenFieldsPipe = (function () {
    function FilterHiddenFieldsPipe() {
    }
    /**
     * It filters out `hidden` fields
     *
     * @param keys
     * @param schema - the `schema` that has object schema which contains each key in `keys`
     * @return - filtered keys
     */
    FilterHiddenFieldsPipe.prototype.transform = function (keys, schema, adminMode) {
        var schemaProps = schema.properties;
        if (!keys) {
            return undefined;
        }
        return keys
            .filter(function (key) {
            if (!schemaProps[key]) {
                throw new Error("\"" + key + "\" is not specified as property in \n" + JSON.stringify(schemaProps, undefined, 2));
            }
            return !schemaProps[key].hidden || adminMode;
        });
    };
    return FilterHiddenFieldsPipe;
}());

FilterHiddenFieldsPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'filterHiddenFields',
            },] },
];
/** @nocollapse */
FilterHiddenFieldsPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
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

var KeysPipe = (function () {
    function KeysPipe() {
    }
    /**
     * Transforms object to array of its keys (Object.keys replacement for templates)
     */
    KeysPipe.prototype.transform = function (object) {
        return Object.keys(object);
    };
    return KeysPipe;
}());

KeysPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'keys',
                pure: false
            },] },
];
/** @nocollapse */
KeysPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastPathElementPipe; });
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
 * Returs last part of json-pointer string
 * Example: for '/foo/bar/0/thing', returs 'thing'
 */
var LastPathElementPipe = (function () {
    function LastPathElementPipe(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    LastPathElementPipe.prototype.transform = function (path) {
        var elements = path.split(this.pathUtilService.separator);
        return elements[elements.length - 1];
    };
    return LastPathElementPipe;
}());

LastPathElementPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'lastPathElement'
            },] },
];
/** @nocollapse */
LastPathElementPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
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

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(6);
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
     * @return - empty value if given value is undefined or value itself.
     */
    SelfOrEmptyPipe.prototype.transform = function (value, schema) {
        return value ? value : this.emptyValueService.generateEmptyValue(schema);
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

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(6);
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
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* PathUtilService */], },
]; };


/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortAlphabeticallyPipe; });
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

var SortAlphabeticallyPipe = (function () {
    function SortAlphabeticallyPipe() {
    }
    SortAlphabeticallyPipe.prototype.transform = function (set) {
        return set.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    };
    return SortAlphabeticallyPipe;
}());

SortAlphabeticallyPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                name: 'sortAlphabetically',
            },] },
];
/** @nocollapse */
SortAlphabeticallyPipe.ctorParameters = function () { return []; };


/***/ }),

/***/ 773:
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

/***/ 774:
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
    FindReplaceAllService.prototype.findReplaceInImmutable = function (immutable, schema, find, replace, exact, diffHtml) {
        var _this = this;
        if (exact === void 0) { exact = false; }
        var immutableAsMutable = immutable.asMutable();
        var isList = __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(immutable);
        // create empty array or object for the immutable to store diff
        diffHtml = isList ? [] : {};
        immutableAsMutable.forEach(function (value, key) {
            var innerSchema = isList ? schema.items : schema.properties[key];
            // ignore disabled and ref fields
            if (innerSchema.disabled || innerSchema.hidden || key === '$ref') {
                return;
                // TODO: is `schema.type === 'string'` better?
            }
            else if (typeof value === 'string') {
                // assign value to diff as initial, if nothing has changed it will remain same
                var diff = value;
                // create html diff for each possible change
                var singleDiffHtml = "<strong style='color: green;'>" + replace + "</strong><del><em style='color: red;'>" + find + "</em></del>";
                if (!exact) {
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
                // TODO: is `schema.type === 'object' || schema.type === 'array'` better?
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(value) || __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(value)) {
                // create empty array or object for the value in diffHtml
                var result = _this.
                    findReplaceInImmutable(immutableAsMutable.get(key), innerSchema, find, replace, exact, diffHtml[key]);
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

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_katex__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_katex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_katex__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KatexService; });


var KatexService = (function () {
    function KatexService() {
        this.delimiters = [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            // FIXME check if we need the ones below
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
        ];
    }
    /**
    *
    * Receives text that can contain LaTeX formulas. The formulas will be
    * identified using `this.delimiters` and rendered inside the passed
    * HTMLElement
    *
    * NOTE: The HTMLElement is expected to have a single child and this
    * will be replaced by the HTML with formatted LaTeX
    *
    * @param {string} text - text to be formatted with LaTeX
    * @param {HTMLElement} el - the HTMLElement where the LaTeX should be rendered
    */
    KatexService.prototype.renderMathInText = function (text, el) {
        var data = this.splitWithDelimiters(text, this.delimiters);
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < data.length; i++) {
            if (data[i].type === 'text') {
                fragment.appendChild(document.createTextNode(data[i].data));
            }
            else {
                var span = document.createElement('span');
                var math = data[i].data;
                try {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_katex__["render"])(math, span, {
                        displayMode: data[i].display,
                    });
                }
                catch (e) {
                    if (!(e instanceof __WEBPACK_IMPORTED_MODULE_1_katex__["ParseError"])) {
                        throw e;
                    }
                    console.error("KaTeX auto-render: Failed to parse " + data[i].data + " with " + e);
                    fragment.appendChild(document.createTextNode(data[i].rawData));
                    continue;
                }
                fragment.appendChild(span);
            }
        }
        // clear
        el.innerHTML = '';
        el.appendChild(fragment);
    };
    KatexService.prototype.findEndOfMath = function (delimiter, text, startIndex) {
        // Adapted from
        // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
        var index = startIndex;
        var braceLevel = 0;
        var delimLength = delimiter.length;
        while (index < text.length) {
            var character = text[index];
            if (braceLevel <= 0 &&
                text.slice(index, index + delimLength) === delimiter) {
                return index;
            }
            else if (character === '\\') {
                index++;
            }
            else if (character === '{') {
                braceLevel++;
            }
            else if (character === '}') {
                braceLevel--;
            }
            index++;
        }
        return -1;
    };
    ;
    KatexService.prototype.splitAtDelimiters = function (startData, leftDelim, rightDelim, display) {
        var finalData = [];
        for (var i = 0; i < startData.length; i++) {
            if (startData[i].type === 'text') {
                var text = startData[i].data;
                var lookingForLeft = true;
                var currIndex = 0;
                var nextIndex = void 0;
                nextIndex = text.indexOf(leftDelim);
                if (nextIndex !== -1) {
                    currIndex = nextIndex;
                    finalData.push({
                        type: 'text',
                        data: text.slice(0, currIndex),
                    });
                    lookingForLeft = false;
                }
                while (true) {
                    if (lookingForLeft) {
                        nextIndex = text.indexOf(leftDelim, currIndex);
                        if (nextIndex === -1) {
                            break;
                        }
                        finalData.push({
                            type: 'text',
                            data: text.slice(currIndex, nextIndex),
                        });
                        currIndex = nextIndex;
                    }
                    else {
                        nextIndex = this.findEndOfMath(rightDelim, text, currIndex + leftDelim.length);
                        if (nextIndex === -1) {
                            break;
                        }
                        finalData.push({
                            type: 'math',
                            data: text.slice(currIndex + leftDelim.length, nextIndex),
                            rawData: text.slice(currIndex, nextIndex + rightDelim.length),
                            display: display,
                        });
                        currIndex = nextIndex + rightDelim.length;
                    }
                    lookingForLeft = !lookingForLeft;
                }
                finalData.push({
                    type: 'text',
                    data: text.slice(currIndex),
                });
            }
            else {
                finalData.push(startData[i]);
            }
        }
        return finalData;
    };
    KatexService.prototype.splitWithDelimiters = function (text, delimiters) {
        var data = [{ type: 'text', data: text }];
        for (var i = 0; i < delimiters.length; i++) {
            var delimiter = delimiters[i];
            data = this.splitAtDelimiters(data, delimiter.left, delimiter.right, delimiter.display || false);
        }
        return data;
    };
    return KatexService;
}());

KatexService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
KatexService.ctorParameters = function () { return []; };


/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(69);
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

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(141);
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
            if (!schema.properties[field]) {
                // Delete if field is not in schema!
                _this.deleteField(record, field);
            }
            else {
                // Fix the field and all children.
                _this.fix(field, record, schema.properties[field]);
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
     * @param key - field name or element index
     * @param parent - parent of the field/element
     * @param schema - schema of visited field/element
     */
    RecordFixerService.prototype.fix = function (key, parent, schema) {
        var _this = this;
        if (schema.hidden) {
            return;
        }
        // Fixes for each type/condition, can be added below.
        var value = parent[key];
        // Recursive calls
        if (schema.type === 'object') {
            if (!schema.properties) {
                throw new Error("\"" + key + "\"'s schema has \"type\": \"object\" but doesn't specify \"properties\"");
            }
            else if (!(value instanceof Object)) {
                throw new Error("\"" + key + "\" in " + JSON.stringify(value, null, 2) + " is specified as \"object\" by schema but it is not an object in json");
            }
            // Looping over record to filter out fields that are not in schema.
            Object.keys(value).forEach(function (prop) {
                if (!schema.properties[prop]) {
                    // we don't like fields without schema!
                    _this.deleteField(value, prop);
                }
                else {
                    _this.fix(prop, value, schema.properties[prop]);
                }
            });
        }
        else if (schema.type === 'array') {
            if (!schema.items) {
                throw new Error("\"" + key + "\"'s schema has \"type\": \"array\" but doesn't specify \"items\"");
            }
            else if (!Array.isArray(value)) {
                throw new Error("\"" + key + "\" in " + JSON.stringify(value, null, 2) + " is specified as \"array\" by schema but it is not an array in json");
            }
            value.forEach(function (element, index) {
                _this.fix(index, value, schema.items);
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

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_util_service__ = __webpack_require__(39);
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

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_util_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_type_service__ = __webpack_require__(141);
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
    function SchemaFixerService(jsonUtilService, componentTypeService) {
        this.jsonUtilService = jsonUtilService;
        this.componentTypeService = componentTypeService;
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
                    schemaField = _this.jsonUtilService.getValueInPath(schema.properties, field);
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
        if (schema.anyOf) {
            schema = this.fixAnyOf(schema);
        }
        else if (schema.allOf) {
            schema = this.fixAllOf(schema);
        }
        if (schema.order) {
            schema = this.fixOrder(schema);
        }
        if (schema.disabled) {
            schema = this.fixDisabled(schema);
        }
        if (schema.alwaysShow) {
            schema = this.fixAlwaysShow(schema);
        }
        // schema fixes must be done above
        // recursively call for deeper parts of schema
        if (schema.properties) {
            Object.keys(schema.properties)
                .forEach(function (prop) {
                schema.properties[prop] = _this.fixRecursively(schema.properties[prop]);
            });
        }
        else if (schema.items) {
            schema.items = this.fixRecursively(schema.items);
        }
        // fixes that needs above fixes to be done deeply for the current schema
        schema.componentType = this.componentTypeService.getComponentType(schema);
        return schema;
    };
    /**
     * Fixes disabled config to assign the disabled attribute
     * to array items or object properties
     */
    SchemaFixerService.prototype.fixDisabled = function (schema) {
        if (schema.items) {
            schema.items.disabled = true;
        }
        else if (schema.properties) {
            Object.keys(schema.properties)
                .forEach(function (prop) {
                schema.properties[prop].disabled = true;
            });
        }
        return schema;
    };
    /**
     * Fixes order config to assign the right priority to properties
     */
    SchemaFixerService.prototype.fixOrder = function (schema) {
        var order = schema.order;
        order.forEach(function (orderKey, index) {
            var priority = order.length - index;
            if (orderKey in schema.properties) {
                schema.properties[orderKey].priority = priority;
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
        var anyOf = schema.anyOf;
        // find existence count of all enum properties in anyOf elements
        // the reason of this, a field could be enum type for some and not for some other anyOf element
        var enumPropCount = {};
        anyOf.forEach(function (anyOfElement) {
            Object.keys(anyOfElement.properties)
                .filter(function (prop) { return anyOfElement.properties[prop].enum; })
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
                var enumValues = anyOfElement.properties[prop].enum;
                // check if current field is enum for current anyOf element
                if (enumValues) {
                    enums[prop] = enums[prop].concat(enumValues);
                }
            });
        });
        var fixedSchema = anyOf[0];
        // shallow cleaning of format and pattern
        Object.keys(fixedSchema.properties)
            .forEach(function (prop) {
            delete fixedSchema.properties[prop].format;
            delete fixedSchema.properties[prop].pattern;
        });
        Object.keys(enumPropCount)
            .forEach(function (prop) {
            var uniqueEnumValues = Array.from(new Set(enums[prop]));
            // if a field enum for all anyOf elements
            if (enumPropCount[prop] === anyOf.length) {
                // merge all enum values into one
                fixedSchema.properties[prop].enum = uniqueEnumValues;
                // if a field enum for some of anyOf elements
            }
            else {
                // create a autocomplete config so that it will allow any values
                // but autocomplete from enum values from where the field is defined as enum
                delete fixedSchema.properties[prop].enum;
                fixedSchema.properties[prop].autocompletionConfig = {
                    source: uniqueEnumValues,
                    size: 7
                };
            }
        });
        // copy disabled attribute inside fixedSchema because it
        // is outside anyOf element and is ignored
        if (schema.disabled) {
            fixedSchema.disabled = true;
        }
        return fixedSchema;
    };
    SchemaFixerService.prototype.fixAllOf = function (schema) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"].apply(__WEBPACK_IMPORTED_MODULE_1_lodash__, [{}].concat(schema.allOf));
    };
    /**
     * Removes alwayShow fields that aren't in the schema.properties
     * and warns on console.
     */
    SchemaFixerService.prototype.fixAlwaysShow = function (schema) {
        var alwaysShow = schema.alwaysShow;
        schema.alwaysShow = alwaysShow.filter(function (key) {
            if (schema.properties[key]) {
                return true;
            }
            else {
                console.warn(key + " is configured as alwaysShow but it is not in " + JSON.stringify(Object.keys(schema.properties)));
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
    { type: __WEBPACK_IMPORTED_MODULE_3__component_type_service__["a" /* ComponentTypeService */], },
]; };


/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ajv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals_service__ = __webpack_require__(140);
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
    function SchemaValidationService(appGlobalsService) {
        var _this = this;
        this.appGlobalsService = appGlobalsService;
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
        //  ajv didn't support format:url, so was added using web url regex for validation
        this.ajv.addFormat('url', this.reWebUrl);
        if (this.appGlobalsService.config && this.appGlobalsService.config.customFormatValidation) {
            var customFormats_1 = this.appGlobalsService.config.customFormatValidation;
            Object.keys(customFormats_1).forEach(function (key) {
                _this.ajv.addFormat(key, customFormats_1[key].formatChecker);
            });
        }
    }
    /**
     * Validates a specific value against schema
     *
     * Uses: ajv package for json-schema validation
     *
     */
    SchemaValidationService.prototype.validateValue = function (value, schema) {
        var validationErrors = [];
        if (!this.ajv.validate(schema, value)) {
            this.ajv.errors.forEach(function (error) {
                validationErrors.push({
                    message: error.message,
                    type: 'Error'
                });
            });
        }
        return validationErrors;
    };
    return SchemaValidationService;
}());

SchemaValidationService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
SchemaValidationService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__app_globals_service__["a" /* AppGlobalsService */], },
]; };


/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut_action_service__ = __webpack_require__(417);
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
            addBelowToRoot: {
                key: 'mod+shift+b',
                action: this.shortcutActionService.generateShortcutAction('addBelowToRootAction')
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
            },
            undo: {
                key: 'mod+alt+z',
                action: this.shortcutActionService.generateShortcutAction('undoAction')
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

/***/ 782:
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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_input_component__ = __webpack_require__(784);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__string_input_component__["a"]; });



/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringInputComponent; });
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


var StringInputComponent = (function () {
    function StringInputComponent(domUtilService, katexService) {
        this.domUtilService = domUtilService;
        this.katexService = katexService;
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onKeypress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    StringInputComponent.prototype.ngOnChanges = function (changes) {
        var valueChange = changes['value'];
        if (valueChange) {
            this.contentModel = this.value;
            if (this.latexPreviewEnabled && !valueChange.firstChange) {
                this.renderLatex();
            }
        }
    };
    StringInputComponent.prototype.ngOnInit = function () {
        if (this.shouldShowLatexPreview) {
            this.latexPreviewShown = true;
        }
    };
    StringInputComponent.prototype.ngAfterViewInit = function () {
        // render latex preview on init, if it's enabled and value is not empty
        if (this.shouldShowLatexPreview) {
            this.renderLatex();
        }
    };
    StringInputComponent.prototype.onBlur = function () {
        if (this.shouldShowLatexPreview) {
            this.latexPreviewShown = true;
            this.value = this.contentModel;
        }
        this.blur.emit();
    };
    StringInputComponent.prototype.renderLatex = function () {
        this.katexService.renderMathInText(this.value, this.latexPreviewEl.nativeElement);
    };
    StringInputComponent.prototype.hideLatexPreview = function (contentEditableDiv) {
        this.latexPreviewShown = false;
        setTimeout(function () { return contentEditableDiv.focus(); });
    };
    StringInputComponent.prototype.contentModelChange = function (value) {
        this.contentModel = value;
        this.valueChange.emit(value);
    };
    Object.defineProperty(StringInputComponent.prototype, "shouldShowLatexPreview", {
        get: function () {
            return this.latexPreviewEnabled && Boolean(this.value);
        },
        enumerable: true,
        configurable: true
    });
    return StringInputComponent;
}());

StringInputComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'string-input',
                styles: [""],
                template: "<div [class.hidden]=\"latexPreviewShown\" [attr.contenteditable]=\"!disabled\" [attr.data-path]=\"pathString\" [tabindex]=\"tabIndex\" [contentModel]=\"contentModel\" (contentModelChange)=\"contentModelChange($event)\" (blur)=\"onBlur()\" (keypress)=\"onKeypress.emit($event)\" attr.placeholder=\"{{placeholder || '⁣\u2063'}}\" #contentEditable></div> <div [class.hidden]=\"!latexPreviewEnabled || !latexPreviewShown\" (click)=\"hideLatexPreview(contentEditable)\" (blur)=\"hideLatexPreview(contentEditable)\" #latexPreview></div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
StringInputComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["f" /* KatexService */], },
]; };
StringInputComponent.propDecorators = {
    'latexPreviewEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */], args: ['latexPreview',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'latexPreviewEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'blur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'onKeypress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
    'valueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub_record_component__ = __webpack_require__(786);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sub_record_component__["a"]; });



/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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



var SubRecordComponent = (function (_super) {
    __extends(SubRecordComponent, _super);
    function SubRecordComponent(jsonStoreService, appGlobalsService, tabsUtilService, keysStoreService) {
        var _this = _super.call(this) || this;
        _this.jsonStoreService = jsonStoreService;
        _this.appGlobalsService = appGlobalsService;
        _this.tabsUtilService = tabsUtilService;
        _this.keysStoreService = keysStoreService;
        _this.pathCache = {};
        return _this;
    }
    SubRecordComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['keys']) {
            var keys = void 0;
            if (this.tabName) {
                var keyToTabName_1 = this.tabsUtilService.getSchemaKeyToTabName(this.appGlobalsService.config.tabsConfig, this.schema);
                keys = this.keys
                    .filter(function (key) { return keyToTabName_1[key] === _this.tabName; });
            }
            else {
                keys = this.keys;
            }
            this.keysByType = keys
                .groupBy(function (key) { return _this.isToggle(key) ? 'toggles' : 'others'; })
                .toObject();
        }
    };
    // delete only work for others, not toggles (UPDATE: config comment if this changes)
    SubRecordComponent.prototype.deleteField = function (field) {
        this.jsonStoreService.removeIn(this.getPathForChild(field));
        this.keysStoreService.deleteKey(this.pathString, field);
    };
    SubRecordComponent.prototype.getPathForChild = function (key) {
        if (!this.pathCache[key]) {
            this.pathCache[key] = [key];
        }
        return this.pathCache[key];
    };
    SubRecordComponent.prototype.onToggleValueChange = function (field, value) {
        this.jsonStoreService.setIn(this.getPathForChild(field), value);
    };
    SubRecordComponent.prototype.isToggle = function (field) {
        return this.schema.properties[field].toggleColor !== undefined;
    };
    SubRecordComponent.prototype.isDisabled = function (key) {
        return this.schema.properties[key].disabled && !this.appGlobalsService.adminMode;
    };
    return SubRecordComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));

SubRecordComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'sub-record',
                styles: ["tr.align-right td:first-child { width: 100%; } tr.align-right td:first-child slide-toggle { float: right; } "],
                template: "<div class=\"record-fields-container\"> <table class=\"table\"> <div class=\"field-wrapper\"> <tr *ngIf=\"keysByType.toggles\" class=\"align-right\"> <td *ngFor=\"let key of keysByType.toggles; trackBy:trackByElement\"> <slide-toggle [id]=\"'/' + key\" [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" (valueChange)=\"onToggleValueChange(key, $event)\" [onText]=\"key\" [offText]=\"key\" [onColor]=\"schema.properties[key].toggleColor\"></slide-toggle> </td> </tr> </div> <div *ngIf=\"keysByType.others\"> <div class=\"field-wrapper\" *ngFor=\"let key of keysByType.others | setFirstElementPath:tabName; trackBy:trackByElement\"> <tr> <td class=\"label-holder\"> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"isDisabled(key)\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getPathForChild(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> <li class=\"divider\"></li> <li class=\"title-dropdown-item\" (click)=\"$event.stopPropagation()\"> <find-replace [path]=\"getPathForChild(key)\" [schema]=\"schema.properties[key]\"></find-replace> </li> </title-dropdown> </td> </tr> <tr> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getPathForChild(key)\"></any-type-field> </td> </tr> </div> </div> </table> </div> ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
SubRecordComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["h" /* TabsUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["i" /* KeysStoreService */], },
]; };
SubRecordComponent.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'tabName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'keys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_item_field_component__ = __webpack_require__(788);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_item_field_component__["a"]; });



/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function TableItemFieldComponent(appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        var _this = _super.call(this, appGlobalsService, pathUtilService, changeDetectorRef) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    return TableItemFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));

TableItemFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                // Defined as attribute selector not to break table > tr > td html structure
                // tslint:disable-next-line
                selector: '[table-item-field]',
                styles: [""],
                template: "<td *ngFor=\"let key of keys; trackBy:trackByElement\" [style.width]=\"schema.properties[key].columnWidth + '%'\"> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getPathForChild(key)\"> </any-type-field> <add-new-element-button *ngIf=\"schema.properties[key].type === 'array'\" [path]=\"getPathForChild(key)\" [schema]=\"schema.properties[key]\"> </add-new-element-button> </td> <!-- td element with list-action-group (up/down and delete buttons) --> <ng-content></ng-content>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TableItemFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
TableItemFieldComponent.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'keys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__ = __webpack_require__(790);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__["a"]; });



/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function TableListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService, keysStoreService, changeDetectorRef) {
        var _this = _super.call(this, appGlobalsService, jsonStoreService, pathUtilService, changeDetectorRef) || this;
        _this.appGlobalsService = appGlobalsService;
        _this.jsonStoreService = jsonStoreService;
        _this.pathUtilService = pathUtilService;
        _this.keysStoreService = keysStoreService;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    Object.defineProperty(TableListFieldComponent.prototype, "keys$", {
        get: function () {
            return this.keysStoreService.forPath(this.pathString);
        },
        enumerable: true,
        configurable: true
    });
    return TableListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));

TableListFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'table-list-field',
                styles: ["table.editable-inner-table { border: none; } table.editable-inner-table thead > tr > th { vertical-align: middle; border: none; color: #c1c1c1; } "],
                template: "<div [id]=\"pathString\"> <div> <table class=\"table editable-inner-table\"> <thead class=\"thead-inverse\"> <tr> <th *ngFor=\"let key of keys$ | async; trackBy:trackByElement\" [style.width]=\"schema.items.properties[key].columnWidth + '%'\"> {{key | underscoreToSpace}} </th> <th class=\"button-holder\" [ngClass]=\"sortableClass\"> <add-field-dropdown *ngIf=\"values.size > 0\" [fields]=\"keys$ | async\" [pathString]=\"pathString\" [schema]=\"schema.items\"> <i class=\"fa fa-plus\"></i> </add-field-dropdown> </th> </tr> </thead> <tr *ngFor=\"let value of values; let i = index; trackBy:trackByIndex\" table-item-field [id]=\"getPathForChildString(i)\" [value]=\"value\" [schema]=\"schema.items\" [path]=\"getPathForChild(i)\" [keys]=\"keys$ | async\"> <td *ngIf=\"values.size > 0\" class=\"button-holder\" [ngClass]=\"sortableClass\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\" [canMove]=\"schema.sortable\"></list-action-group> </td> </tr> </table> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TableListFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* JsonStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["i" /* KeysStoreService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
TableListFieldComponent.propDecorators = {
    'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__ = __webpack_require__(792);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__["a"]; });



/***/ }),

/***/ 792:
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

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__ = __webpack_require__(794);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__["a"]; });





/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function TreeMenuItemComponent(windowHrefService, domUtilService, pathUtilService, appGlobalsService) {
        var _this = _super.call(this) || this;
        _this.windowHrefService = windowHrefService;
        _this.domUtilService = domUtilService;
        _this.pathUtilService = pathUtilService;
        _this.appGlobalsService = appGlobalsService;
        _this.isCollapsed = true;
        return _this;
    }
    TreeMenuItemComponent.prototype.ngOnInit = function () {
        this.href = this.windowHrefService.getHrefWithoutHash() + "#" + this.path;
    };
    TreeMenuItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes['value'] && this.schema.type === 'object') {
            this.keys = this.value.keySeq().toSet();
        }
    };
    TreeMenuItemComponent.prototype.toggle = function (event) {
        // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        this.domUtilService.focusAndSelectFirstEditableChildById(this.path, true);
    };
    TreeMenuItemComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    Object.defineProperty(TreeMenuItemComponent.prototype, "isCollapsable", {
        get: function () {
            var schemaType = this.schema.type;
            return this.isNotLeaf && (schemaType === 'object' || schemaType === 'array');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeMenuItemComponent.prototype, "maxDepth", {
        get: function () {
            return this.appGlobalsService.config.menuMaxDepth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeMenuItemComponent.prototype, "isNotLeaf", {
        get: function () {
            return this.maxDepth === undefined || this.depth < this.maxDepth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeMenuItemComponent.prototype, "adminMode$", {
        get: function () {
            return this.appGlobalsService.adminMode$;
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
                template: "<div> <a [href]=\"href\" (click)=\"toggle($event)\">{{label}}</a> <a *ngIf=\"isCollapsable\" [hidden]=\"isCollapsed\" (click)=\"collapse()\"> [x]</a> <div *ngIf=\"isNotLeaf\" [ngSwitch]=\"schema.type\" [hidden]=\"isCollapsed\"> <ul> <div *ngSwitchCase=\"'object'\"> <li *ngFor=\"let key of keys | filterHiddenFields:schema:(adminMode$ | async) | addAlwaysShowFields:schema | sortAlphabetically; trackBy:trackByElement\"> <tree-menu-item [label]=\"key\" [value]=\"value.get(key)\" [schema]=\"schema.properties[key]\" [path]=\"getChildPath(key)\" [depth]=\"depth + 1\"></tree-menu-item> </li> </div> <div *ngSwitchCase=\"'array'\"> <li *ngFor=\"let element of value; let i = index; trackBy:trackByElement\"> <tree-menu-item [label]=\"i\" [value]=\"element\" [schema]=\"schema.items\" [path]=\"getChildPath(i)\" [depth]=\"depth + 1\"></tree-menu-item> </li> </div> </ul> </div> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TreeMenuItemComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["o" /* WindowHrefService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
]; };
TreeMenuItemComponent.propDecorators = {
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'depth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(6);
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
    function TreeMenuComponent(domUtilService, pathUtilService, appGlobalsService) {
        var _this = _super.call(this) || this;
        _this.domUtilService = domUtilService;
        _this.pathUtilService = pathUtilService;
        _this.appGlobalsService = appGlobalsService;
        _this.prefixOrPath = '';
        return _this;
    }
    TreeMenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes['record']) {
            this.keys = this.record.keySeq().toSet();
        }
    };
    TreeMenuComponent.prototype.getChildPath = function (key) {
        return "" + this.pathUtilService.separator + key;
    };
    Object.defineProperty(TreeMenuComponent.prototype, "adminMode$", {
        get: function () {
            return this.appGlobalsService.adminMode$;
        },
        enumerable: true,
        configurable: true
    });
    return TreeMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));

TreeMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'tree-menu',
                styles: ["div.tree-menu-container { padding: 8px 0; overflow-x: hidden; overflow-y: auto; text-align: center; } ul.menu-item-container { list-style: none; text-align: left; padding-top: 8px; } ul.menu-item-container li { margin-bottom: 2px; } "],
                template: "<div class=\"tree-menu-container\"> <ul class=\"menu-item-container\"> <li *ngFor=\"let key of keys | filterHiddenFields:schema:(adminMode$ | async) | addAlwaysShowFields:schema | sortAlphabetically; trackBy:trackByElement\"> <tree-menu-item [label]=\"key\" [value]=\"record.get(key)\" [schema]=\"schema.properties[key]\" [path]=\"getChildPath(key)\" [depth]=\"1\"></tree-menu-item> </li> </ul> </div>",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
TreeMenuComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* DomUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* PathUtilService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* AppGlobalsService */], },
]; };
TreeMenuComponent.propDecorators = {
    'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
};


/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_badges_component__ = __webpack_require__(797);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__validation_badges_component__["a"]; });



/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationBadgesComponent; });
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


var ValidationBadgesComponent = (function () {
    function ValidationBadgesComponent(appGlobalsService, changeDetectorRef) {
        this.appGlobalsService = appGlobalsService;
        this.changeDetectorRef = changeDetectorRef;
        this.onBadgeClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.globalErrorCount = 0;
        this.internalErrorCount = 0;
        this.globalWarningCount = 0;
        this.internalWarningCount = 0;
    }
    ValidationBadgesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.externalErrorCounterSubscription = this.appGlobalsService.externalErrorCountersSubject
            .subscribe(function (errorCounters) {
            _this.globalErrorCount = errorCounters.errors;
            _this.globalWarningCount = errorCounters.warnings;
            _this.changeDetectorRef.markForCheck();
        });
        this.internalErrorCounterSubscription = this.appGlobalsService.internalErrorCountersSubject
            .subscribe(function (errorCounters) {
            _this.internalErrorCount = errorCounters.errors;
            _this.internalWarningCount = errorCounters.warnings;
            _this.changeDetectorRef.markForCheck();
        });
    };
    ValidationBadgesComponent.prototype._onBadgeClick = function (event, badgeName) {
        event.preventDefault();
        this.onBadgeClick.emit(badgeName);
    };
    ValidationBadgesComponent.prototype.ngOnDestroy = function () {
        this.externalErrorCounterSubscription.unsubscribe();
        this.internalErrorCounterSubscription.unsubscribe();
    };
    return ValidationBadgesComponent;
}());

ValidationBadgesComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */], args: [{
                selector: 'validation-badges',
                styles: [""],
                template: "<a href='#' *ngIf=\"internalErrorCount + globalErrorCount > 0\" [ngClass]=\"'error-link'\" (click)=\"_onBadgeClick($event, 'Errors')\"> Errors <span class=\"badge\">{{internalErrorCount + globalErrorCount}}</span> </a> <a href='#' *ngIf=\"internalWarningCount + globalWarningCount > 0\" [ngClass]=\"'warning-link'\" (click)=\"_onBadgeClick($event, 'Warnings')\"> Warnings <span class=\"badge\">{{internalWarningCount + globalWarningCount}}</span> </a> "
            },] },
];
/** @nocollapse */
ValidationBadgesComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* AppGlobalsService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */], },
]; };
ValidationBadgesComponent.propDecorators = {
    'onBadgeClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */] },],
};


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(419);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__ = __webpack_require__(717);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__["a"]; });



/***/ })

},[855]);
//# sourceMappingURL=main.bundle.js.map