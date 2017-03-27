webpackJsonp([0,3],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_globals_service__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_util_service__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamic_template_loader_service__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empty_value_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_replace_all_service__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__json_store_service__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__json_util_service__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__json_schema_service__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__path_util_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_service__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shortcut_action_service__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shortcut_service__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__window_href_service__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tabs_util_service__ = __webpack_require__(1022);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_globals_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_1__remote_autocompletion_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__component_type_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__dom_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__dynamic_template_loader_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__empty_value_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_6__find_replace_all_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__json_store_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__json_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__json_schema_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__path_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_11__modal_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_12__record_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_13__schema_fixer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__schema_validation_service__["a"]; });
/* unused harmony reexport ShortcutActionService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_16__shortcut_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_17__window_href_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_18__tabs_util_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHARED_SERVICES; });




















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
    __WEBPACK_IMPORTED_MODULE_17__window_href_service__["a" /* WindowHrefService */],
    __WEBPACK_IMPORTED_MODULE_18__tabs_util_service__["a" /* TabsUtilService */]
];


/***/ }),

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcuts_directive__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_model_directive__ = __webpack_require__(999);
/* unused harmony reexport ShortcutsDirective */
/* unused harmony reexport ContentModelDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_DIRECTIVES; });



var SHARED_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__shortcuts_directive__["a" /* ShortcutsDirective */],
    __WEBPACK_IMPORTED_MODULE_1__content_model_directive__["a" /* ContentModelDirective */]
];


/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mousetrap__ = __webpack_require__(888);
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

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(1000);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pipes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });






/***/ }),

/***/ 1003:
/***/ (function(module, exports) {



/***/ }),

/***/ 1004:
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

/***/ 1005:
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
    AddAlwaysShowTogglesPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */], args: [{
                    name: 'addAlwaysShowToggles'
                },] },
    ];
    /** @nocollapse */
    AddAlwaysShowTogglesPipe.ctorParameters = function () { return []; };
    return AddAlwaysShowTogglesPipe;
}());


/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(50);
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

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
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
        { type: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AppGlobalsService */], },
    ]; };
    return FilterAndSortBySchemaPipe;
}());


/***/ }),

/***/ 1008:
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

/***/ 1009:
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

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(50);
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
        { type: __WEBPACK_IMPORTED_MODULE_1__services__["c" /* EmptyValueService */], },
    ]; };
    return SelfOrEmptyPipe;
}());


/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(10);
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
    return SetFirstElementPathPipe;
}());


/***/ }),

/***/ 1012:
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

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(267);
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
    AppGlobalsService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    AppGlobalsService.ctorParameters = function () { return []; };
    return AppGlobalsService;
}());


/***/ }),

/***/ 1014:
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

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(50);
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

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(267);
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

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_type_service__ = __webpack_require__(578);
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

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_util_service__ = __webpack_require__(170);
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

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_util_service__ = __webpack_require__(582);
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

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv__ = __webpack_require__(696);
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
    SchemaValidationService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    SchemaValidationService.ctorParameters = function () { return []; };
    return SchemaValidationService;
}());


/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortcut_action_service__ = __webpack_require__(583);
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

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(407);
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
            return (_a = {},
                _a[keyToTabName[prop]] = (_b = {},
                    _b[prop] = schemaProps[prop],
                    _b
                ),
                _a
            );
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
    TabsUtilService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    TabsUtilService.ctorParameters = function () { return []; };
    return TabsUtilService;
}());


/***/ }),

/***/ 1023:
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

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub_record_component__ = __webpack_require__(1025);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sub_record_component__["a"]; });



/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(10);
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
    SubRecordComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'sub-record',
                    styles: ["div.admin-mode { padding-top: 8px; width: 100%; } label.admin-mode { color: #e0dfdf; font-size: 13px; font-weight: normal; width: 90%; padding-left: 4px; } .record-fields-container { height: 100%; overflow: auto; padding-right: 0px; padding-left: 0px; padding-bottom: 41px; } .row { height: 100%; } tr.align-right td:first-child { width: 100%; } tr.align-right td:first-child slide-toggle { float: right; } "],
                    template: "<div class=\"row\"> <div class=\"left menu-container\" [ngClass]=\"leftContainerColMdClass\"> <tree-menu [record]=\"value\" [schema]=\"schema\"></tree-menu> <add-field-dropdown [fields]=\"allKeys\" [pathString]=\"''\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.properties\">Add field</add-field-dropdown> <div *ngIf=\"enableAdminModeSwitch\" class=\"admin-mode\" tooltip=\"Allows editing all fields (use with care)\"> <input id=\"admin-mode-checkbox\" type=\"checkbox\" [(ngModel)]=\"appGlobalsService.adminMode\" /> <label class=\"admin-mode\" for=\"admin-mode-checkbox\">Enable Admin Mode</label> </div> </div> <div class=\"right record-fields-container\" [ngClass]=\"rightContainerColMdClass\"> <table id=\"editor\" class=\"table\"> <div class=\"field-wrapper\"> <tr *ngIf=\"keysByType.toggles\" class=\"align-right\"> <td *ngFor=\"let key of keysByType.toggles | addAlwaysShowToggles:schema| filterAndSortBySchema:schema; trackBy:trackByElement\"> <slide-toggle [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" (valueChange)=\"onToggleValueChange(key, $event)\" [onText]=\"key\" [offText]=\"key\" [onColor]=\"schema.properties[key].toggleColor\"></slide-toggle> </td> </tr> </div> <div class=\"field-wrapper\" *ngFor=\"let key of keysByType.others | addAlwaysShowFields:schema | filterAndSortBySchema:schema | setFirstElementPath:tabName; trackBy:trackByElement\"> <tr> <td class=\"label-holder\"> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.properties[key].disabled\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getPathForField(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> <li class=\"divider\"></li> <li class=\"title-dropdown-item\"> <find-replace [path]=\"getPathForField(key)\" [schema]=\"schema.properties[key]\"></find-replace> </li> </title-dropdown> </td> </tr> <tr> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getPathForField(key)\"></any-type-field> </td> </tr> </div> </table> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    SubRecordComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AppGlobalsService */], },
    ]; };
    SubRecordComponent.propDecorators = {
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'enableAdminModeSwitch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'isPreviewerHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'isPreviewerDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'tabName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return SubRecordComponent;
}());


/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_item_field_component__ = __webpack_require__(1027);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_item_field_component__["a"]; });



/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var TableItemFieldComponent = (function (_super) {
    __extends(TableItemFieldComponent, _super);
    function TableItemFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.pathCache = {};
    }
    TableItemFieldComponent.prototype.getFieldPath = function (name) {
        if (!this.pathCache[name]) {
            this.pathCache[name] = this.path.concat(name);
        }
        return this.pathCache[name];
    };
    TableItemFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    // Defined as attribute selector not to break table > tr > td html structure
                    // tslint:disable-next-line
                    selector: '[table-item-field]',
                    styles: ["td { padding: 0 !important; vertical-align: top !important; } "],
                    template: "<td *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\" [style.width]=\"schema.properties[key].columnWidth + '%'\"> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=\"schema.properties[key]\" [path]=\"getFieldPath(key)\"> </any-type-field> <add-new-element-button *ngIf=\"schema.properties[key].type === 'array'\" [path]=\"getFieldPath(key)\" [schema]=\"schema.properties[key]\"> </add-new-element-button> </td> <!-- td element with list-action-group (up/down and delete buttons) --> <ng-content></ng-content>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TableItemFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
    ]; };
    TableItemFieldComponent.propDecorators = {
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'keys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TableItemFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));


/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__ = __webpack_require__(1029);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_list_field_component__["a"]; });



/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_list_field__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(10);
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
                    styles: ["table.editable-inner-table { border: none; } table.editable-inner-table thead > tr > th { vertical-align: middle; border: none; color: #c1c1c1; } "],
                    template: "<div [id]=\"pathString\"> <div> <table class=\"table editable-inner-table\"> <thead class=\"thead-inverse\"> <tr> <th *ngFor=\"let key of keys | addAlwaysShowFields:schema.items | filterAndSortBySchema:schema.items; trackBy:trackByElement\" [style.width]=\"schema.items.properties[key].columnWidth + '%'\"> {{key | underscoreToSpace}} </th> <th class=\"button-holder\"> <add-field-dropdown *ngIf=\"values.size > 0\" [fields]=\"keys\" [pathString]=\"getElementPathString(0)\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.items.properties\">+</add-field-dropdown> </th> </tr> </thead> <tr *ngFor=\"let value of values; let i = index; trackBy:trackByIndex\" table-item-field [id]=\"getElementPathString(i)\" [value]=\"value\" [schema]=\"schema.items\" [path]=\"getElementPath(i)\" [keys]=\"keys\"> <td *ngIf=\"values.size > 0\" class=\"button-holder\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\"></list-action-group> </td> </tr> </table> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TableListFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* PathUtilService */], },
    ]; };
    TableListFieldComponent.propDecorators = {
        'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TableListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_list_field__["a" /* AbstractListFieldComponent */]));


/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__ = __webpack_require__(1031);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_dropdown_component__["a"]; });



/***/ }),

/***/ 1031:
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__ = __webpack_require__(1033);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__tree_menu_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tree_menu_item_component__["a"]; });





/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TreeMenuItemComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* WindowHrefService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["m" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
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

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    TreeMenuComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["l" /* WindowHrefService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["m" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
    ]; };
    TreeMenuComponent.propDecorators = {
        'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return TreeMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_tracker__["a" /* AbstractTrackerComponent */]));


/***/ }),

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_change_watcher_component__ = __webpack_require__(1036);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__value_change_watcher_component__["a"]; });



/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ValueChangeWatcherComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* JsonStoreService */], },
    ]; };
    ValueChangeWatcherComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ValueChangeWatcherComponent;
}());


/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(584);


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__ = __webpack_require__(965);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_tracker_component__["a"]; });



/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__ = __webpack_require__(963);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_field_component__["a"]; });



/***/ }),

/***/ 170:
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

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__ = __webpack_require__(964);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstract_list_field_component__["a"]; });



/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(50);
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

/***/ 275:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 275;


/***/ }),

/***/ 356:
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
    AppConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppConfig);
    return AppConfig;
}());
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.config.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 357;


/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_always_show_fields_pipe__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_always_show_toggles_pipe__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__different_keys_pipe__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_by_expression_pipe__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_and_sort_by_schema_pipe__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sanitize_url_pipe__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__self_or_empty_pipe__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__underscore_to_space_pipe__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__set_first_element_path_pipe__ = __webpack_require__(1011);
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

/***/ 578:
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

/***/ 579:
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
        this.inputSelector = '.value-container input, div[contenteditable=true]';
    }
    DomUtilService.prototype.focusAndSelectFirstInputChildById = function (id) {
        var el = document.getElementById(id);
        if (el) {
            var firstInput = el.querySelector(this.inputSelector);
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
    DomUtilService.prototype.blurFirstInputChildById = function (id) {
        var el = document.getElementById(id);
        var firstInput = el.querySelector(this.inputSelector);
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
    DomUtilService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    DomUtilService.ctorParameters = function () { return []; };
    return DomUtilService;
}());


/***/ }),

/***/ 580:
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

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(267);
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
    JsonStoreService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    JsonStoreService.ctorParameters = function () { return []; };
    return JsonStoreService;
}());


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_util_service__ = __webpack_require__(170);
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

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_value_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_store_service__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_schema_service__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_util_service__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__path_util_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_immutable__ = __webpack_require__(50);
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

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(693);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/main.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(356);
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
            styles: [__webpack_require__(923)],
            template: "\n    <json-editor *ngIf=\"record && schema\" \n      [config]=\"config.jsonEditorConfig\"\n      [record]=\"record\"\n      (onRecordChange)=\"onRecordChange($event)\"\n      [schema]=\"schema\">\n    </json-editor>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/app.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dist__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(356);
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

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(692);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/index.js.map

/***/ }),

/***/ 694:
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

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/travis/build/inveniosoftware-contrib/ng2-json-editor/example/polyfills.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 698;


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 408,
	"./af.js": 408,
	"./ar": 414,
	"./ar-dz": 409,
	"./ar-dz.js": 409,
	"./ar-ly": 410,
	"./ar-ly.js": 410,
	"./ar-ma": 411,
	"./ar-ma.js": 411,
	"./ar-sa": 412,
	"./ar-sa.js": 412,
	"./ar-tn": 413,
	"./ar-tn.js": 413,
	"./ar.js": 414,
	"./az": 415,
	"./az.js": 415,
	"./be": 416,
	"./be.js": 416,
	"./bg": 417,
	"./bg.js": 417,
	"./bn": 418,
	"./bn.js": 418,
	"./bo": 419,
	"./bo.js": 419,
	"./br": 420,
	"./br.js": 420,
	"./bs": 421,
	"./bs.js": 421,
	"./ca": 422,
	"./ca.js": 422,
	"./cs": 423,
	"./cs.js": 423,
	"./cv": 424,
	"./cv.js": 424,
	"./cy": 425,
	"./cy.js": 425,
	"./da": 426,
	"./da.js": 426,
	"./de": 428,
	"./de-at": 427,
	"./de-at.js": 427,
	"./de.js": 428,
	"./dv": 429,
	"./dv.js": 429,
	"./el": 430,
	"./el.js": 430,
	"./en-au": 431,
	"./en-au.js": 431,
	"./en-ca": 432,
	"./en-ca.js": 432,
	"./en-gb": 433,
	"./en-gb.js": 433,
	"./en-ie": 434,
	"./en-ie.js": 434,
	"./en-nz": 435,
	"./en-nz.js": 435,
	"./eo": 436,
	"./eo.js": 436,
	"./es": 438,
	"./es-do": 437,
	"./es-do.js": 437,
	"./es.js": 438,
	"./et": 439,
	"./et.js": 439,
	"./eu": 440,
	"./eu.js": 440,
	"./fa": 441,
	"./fa.js": 441,
	"./fi": 442,
	"./fi.js": 442,
	"./fo": 443,
	"./fo.js": 443,
	"./fr": 446,
	"./fr-ca": 444,
	"./fr-ca.js": 444,
	"./fr-ch": 445,
	"./fr-ch.js": 445,
	"./fr.js": 446,
	"./fy": 447,
	"./fy.js": 447,
	"./gd": 448,
	"./gd.js": 448,
	"./gl": 449,
	"./gl.js": 449,
	"./he": 450,
	"./he.js": 450,
	"./hi": 451,
	"./hi.js": 451,
	"./hr": 452,
	"./hr.js": 452,
	"./hu": 453,
	"./hu.js": 453,
	"./hy-am": 454,
	"./hy-am.js": 454,
	"./id": 455,
	"./id.js": 455,
	"./is": 456,
	"./is.js": 456,
	"./it": 457,
	"./it.js": 457,
	"./ja": 458,
	"./ja.js": 458,
	"./jv": 459,
	"./jv.js": 459,
	"./ka": 460,
	"./ka.js": 460,
	"./kk": 461,
	"./kk.js": 461,
	"./km": 462,
	"./km.js": 462,
	"./ko": 463,
	"./ko.js": 463,
	"./ky": 464,
	"./ky.js": 464,
	"./lb": 465,
	"./lb.js": 465,
	"./lo": 466,
	"./lo.js": 466,
	"./lt": 467,
	"./lt.js": 467,
	"./lv": 468,
	"./lv.js": 468,
	"./me": 469,
	"./me.js": 469,
	"./mi": 470,
	"./mi.js": 470,
	"./mk": 471,
	"./mk.js": 471,
	"./ml": 472,
	"./ml.js": 472,
	"./mr": 473,
	"./mr.js": 473,
	"./ms": 475,
	"./ms-my": 474,
	"./ms-my.js": 474,
	"./ms.js": 475,
	"./my": 476,
	"./my.js": 476,
	"./nb": 477,
	"./nb.js": 477,
	"./ne": 478,
	"./ne.js": 478,
	"./nl": 480,
	"./nl-be": 479,
	"./nl-be.js": 479,
	"./nl.js": 480,
	"./nn": 481,
	"./nn.js": 481,
	"./pa-in": 482,
	"./pa-in.js": 482,
	"./pl": 483,
	"./pl.js": 483,
	"./pt": 485,
	"./pt-br": 484,
	"./pt-br.js": 484,
	"./pt.js": 485,
	"./ro": 486,
	"./ro.js": 486,
	"./ru": 487,
	"./ru.js": 487,
	"./se": 488,
	"./se.js": 488,
	"./si": 489,
	"./si.js": 489,
	"./sk": 490,
	"./sk.js": 490,
	"./sl": 491,
	"./sl.js": 491,
	"./sq": 492,
	"./sq.js": 492,
	"./sr": 494,
	"./sr-cyrl": 493,
	"./sr-cyrl.js": 493,
	"./sr.js": 494,
	"./ss": 495,
	"./ss.js": 495,
	"./sv": 496,
	"./sv.js": 496,
	"./sw": 497,
	"./sw.js": 497,
	"./ta": 498,
	"./ta.js": 498,
	"./te": 499,
	"./te.js": 499,
	"./tet": 500,
	"./tet.js": 500,
	"./th": 501,
	"./th.js": 501,
	"./tl-ph": 502,
	"./tl-ph.js": 502,
	"./tlh": 503,
	"./tlh.js": 503,
	"./tr": 504,
	"./tr.js": 504,
	"./tzl": 505,
	"./tzl.js": 505,
	"./tzm": 507,
	"./tzm-latn": 506,
	"./tzm-latn.js": 506,
	"./tzm.js": 507,
	"./uk": 508,
	"./uk.js": 508,
	"./uz": 509,
	"./uz.js": 509,
	"./vi": 510,
	"./vi.js": 510,
	"./x-pseudo": 511,
	"./x-pseudo.js": 511,
	"./yo": 512,
	"./yo.js": 512,
	"./zh-cn": 513,
	"./zh-cn.js": 513,
	"./zh-hk": 514,
	"./zh-hk.js": 514,
	"./zh-tw": 515,
	"./zh-tw.js": 515
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
webpackContext.id = 887;


/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(982);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_index__, "JsonEditorModule")) __webpack_require__.d(__webpack_exports__, "JsonEditorModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["JsonEditorModule"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of ng2-json-editor module.
 */



/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_tracker__ = __webpack_require__(116);
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

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_field__ = __webpack_require__(169);
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

/***/ 965:
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

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(10);
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
                    styles: [".btn-add-field-dropdown { padding: 0 5px 0 0; font-size: 21px; opacity: 0.4; border: 0; background: transparent; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; color: darkslategray; margin-bottom: 2px; float: right; } .btn-add-field-dropdown:hover { color: blue; opacity: 0.6; } .dropdown-filter-container { padding-left: 3px; padding-right: 3px; } .dropdown-filter-container input { width: 100%; } .add-field-dropdown-container { width: 100%; } "],
                    template: "<div *ngIf=\"!disabled\" class=\"btn-group add-field-dropdown-container\" dropdown keyboardNav=\"true\" (onToggle)=\"focusElementIfOpen($event, expressionInput)\"> <button id=\"simple-btn-keyboard-nav\" type=\"button\" class=\"btn-add-field-dropdown\" dropdownToggle><ng-content></ng-content> <span class=\"caret\"></span></button> <ul class=\"dropdown-menu\" dropdownMenu aria-labelledby=\"simple-btn-keyboard-nav\"> <li class=\"dropdown-filter-container\"> <input #expressionInput [(ngModel)]=\"expression\" placeholder=\"filter\"> </li> <li class=\"divider dropdown-divider\"></li> <li *ngFor=\"let key of schema | differentKeys:fields | filterByExpression:expression\"> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onFieldSelect(key)\">{{key}}</a> </li> </ul> </div>"
                },] },
    ];
    /** @nocollapse */
    AddFieldDropdownComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["m" /* DomUtilService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* EmptyValueService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* PathUtilService */], },
    ]; };
    AddFieldDropdownComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'fields': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onFieldAdd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    };
    return AddFieldDropdownComponent;
}());


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__ = __webpack_require__(966);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_field_dropdown_component__["a"]; });



/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return AddNewElementButtonComponent;
}());


/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__ = __webpack_require__(968);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_new_element_button_component__["a"]; });



/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    AnyTypeFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["p" /* ComponentTypeService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AppGlobalsService */], },
    ]; };
    AnyTypeFieldComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return AnyTypeFieldComponent;
}());


/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__ = __webpack_require__(970);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__any_type_field_component__["a"]; });



/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    AutocompleteInputComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["s" /* RemoteAutocompletionService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* JsonStoreService */], },
    ]; };
    AutocompleteInputComponent.propDecorators = {
        'autocompletionConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'pathString': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'tabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'onKeypress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    };
    return AutocompleteInputComponent;
}());


/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__ = __webpack_require__(972);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__autocomplete_input_component__["a"]; });



/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
        setTimeout(function () { return _this.domUtilService.focusAndSelectFirstInputChildById(itemId); });
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
    ComplexListFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'complex-list-field',
                    styles: [".complex-list-field-wrapper { margin: 5px 15px 15px 15px; padding: 5px; box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25); } .navigator-container { width: 100%; } .navigator-item-right { float: right; padding-right: 13px !important; } .navigator-item-right label { position: relative; top: -19px; } .navigator-item-left { padding-left: 13px !important; } .transparent { background: transparent; } .borderless { border: none; } .find-button { color: darkslategray; opacity: 0.83; } .find-button .fa-search { opacity: 0.83; } "],
                    template: "<div [id]=\"pathString\"> <!-- Navigator --> <table *ngIf=\"navigator\" class=\"navigator-container\"> <tr> <td class=\"form-group navigator-item-left\"> <div class=\"input-group input-group-sm\"> <span class=\"input-group-btn\"> <button type=\"button\" class=\"btn btn-default find-button\" (click)=\"onFindClick()\"> <i class=\"fa fa-search\" aria-hidden=\"true\"></i> </button> </span> <input type=\"search\" class=\"form-control\" [(ngModel)]=\"findExpression\" (keypress)=\"onFindInputKeypress($event.key)\" placeholder=\"Find\" /> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound <= 0\" (click)=\"onFoundNavigate(-1)\">❮</button> </span> <span class=\"input-group-btn\" *ngIf=\"shouldDisplayFoundNavigation\"> <button type=\"button\" class=\"btn btn-default\" [disabled]=\"currentFound >= foundIndices.length - 1\" (click)=\"onFoundNavigate(1)\">❯</button> </span> <span *ngIf=\"foundIndices\" [ngSwitch]=\"foundIndices.length\" class=\"input-group-addon transparent borderless\"> <span *ngSwitchCase=\"0\"> Nothing found </span> <span *ngSwitchDefault> {{currentFound + 1}} of {{foundIndices.length}} </span> </span> </div> </td> <td class=\"navigator-item-right\"> <label> {{paginatedIndices[0] + 1}}-{{paginatedIndices[paginatedIndices.length - 1] + 1}} of {{values.size}} {{path[path.length - 1]}} </label> <br> <pagination [totalItems]=\"values.size\" [ngModel]=\"currentPage\" [maxSize]=\"navigator.maxVisiblePageCount\" [itemsPerPage]=\"navigator.itemsPerPage\" class=\"pagination-sm pagination-top\" [boundaryLinks]=\"true\" [rotate]=\"false\" [firstText]=\"'❮❮'\" [previousText]=\"'❮'\" [nextText]=\"'❯'\" [lastText]=\"'❯❯'\" (pageChanged)=\"onPageChange($event.page)\"></pagination> </td> </tr> </table> <!-- Elements --> <div *ngFor=\"let pIndex of paginatedIndices; let i = index; trackBy:trackByIndex\"> <div class=\"complex-list-field-wrapper\"> <object-field [value]=\"values.get(pIndex)\" [schema]=\"schema.items\" [path]=\"getElementPath(pIndex)\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\"></list-action-group> </object-field> </div> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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
        'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ComplexListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));


/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__ = __webpack_require__(974);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__complex_list_field_component__["a"]; });



/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_tracker__ = __webpack_require__(116);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__ = __webpack_require__(976);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__editor_previewer_component__["a"]; });



/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
    FindReplaceComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'find-replace',
                    styles: [".find-replace-container { margin: 4px 3px 3px 2px; } .find-replace-container input { font-size: 13px; } .top-container-item { margin-bottom: 3px; } label { font-size: 12px; font-weight: 400; } .horizontal-padding, .find-replace-container div { padding-right: 20px; padding-left: 20px; } .match-whole-container input[type=checkbox] { width: 100%; } "],
                    template: "<div class=\"find-replace-container\"> <div class=\"top-container-item\"> <input placeholder=\"Find\" [(ngModel)]=\"find\" (keypress)=\"onKeypress($event.key)\" /> </div> <div> <input placeholder=\"Replace\" [(ngModel)]=\"replace\" (keypress)=\"onKeypress($event.key)\" /> </div> <div class=\"match-whole-container\"> <input type=\"checkbox\" [(ngModel)]=\"matchWhole\" (keypress)=\"onKeypress($event.key)\" tooltip=\"Match Whole\"/> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    FindReplaceComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["r" /* FindReplaceAllService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["q" /* ModalService */], },
    ]; };
    FindReplaceComponent.propDecorators = {
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return FindReplaceComponent;
}());


/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_replace_component__ = __webpack_require__(978);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__find_replace_component__["a"]; });



/***/ }),

/***/ 980:
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_view_component__ = __webpack_require__(980);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__html_view_component__["a"]; });



/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json_editor_module__ = __webpack_require__(984);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "JsonEditorModule", function() { return __WEBPACK_IMPORTED_MODULE_0__json_editor_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_interfaces__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pipes__ = __webpack_require__(577);
/* unused harmony namespace reexport */
// export everything in order to be AoT compatible






/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_tracker__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__(10);
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
    function JsonEditorComponent(http, appGlobalsService, jsonStoreService, jsonUtilService, jsonSchemaService, recordFixerService, schemaFixerService, shortcutsService, tabsUtilService) {
        _super.call(this);
        this.http = http;
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.jsonUtilService = jsonUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.recordFixerService = recordFixerService;
        this.schemaFixerService = schemaFixerService;
        this.shortcutsService = shortcutsService;
        this.tabsUtilService = tabsUtilService;
        this.errorMap = {};
        this.onRecordChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
    JsonEditorComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'json-editor',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
                    styles: ["body, html { height: 100%; } .editor-container { height: 100%; margin-right: 0px; margin-left: 0px; } .editor-container .row { margin-left: 0px; margin-right: 0px; } table { margin-bottom: 0px !important; } .main-container { height: 100%; overflow: auto; } .left.main-container { padding: 0px; overflow: hidden; } .left.main-container .tab-content, .left.main-container .tab-pane { height: 100%; } .left.main-container .nav-tabs { float: right; padding-left: 1px; } .menu-container { background-color: #1D2D3D; height: 100%; overflow: auto; } .menu-container div.dropdown { width: 100%; } .menu-container ul.dropdown-menu { right: 0px; } .menu-container button.btn-add-field-dropdown { background: white; padding: 5px; opacity: 0.9; line-height: normal; font-size: 16px; width: 100%; } .menu-container button.btn-add-field-dropdown:hover { opacity: 1; color: black; } #editor { font-size: 13px; border: 2px solid #a5adb5; } #editor .field-wrapper { border-bottom: 2px solid #a5adb5; } #editor td { background-color: #f9f9f9; border: none; padding: 0; } #editor td > * { vertical-align: middle; } #editor th { font-weight: 400; padding: 1px 0px 1px 3px; } #editor td.label-holder { width: 1%; white-space: nowrap; padding-right: 5px; } #editor td.error { background-color: #f2968d !important; } #editor tbody { border: none; } .editor-btn-delete { font-size: 16px; font-weight: bold; line-height: 1; text-shadow: 0 1px 0 #fff; opacity: 0.2; background: transparent; border: 0; padding: 0 0 3px 3px; } .editor-btn-delete:hover { color: red; opacity: 0.6; } .editor-btn-delete.editor-btn-delete-text { font-size: 13px; opacity: 0.5; padding: 0px; } .editor-btn-move-down { padding-bottom: 0; } .editor-btn-move-up, .editor-btn-move-down { padding: 0; font-size: 11px; border: 0; background: transparent; opacity: 0.2; } .editor-btn-move-up:hover, .editor-btn-move-down:hover { opacity: 0.6; } ul.pagination-top { margin: -16px 0px 0px 0px; } td.button-holder, th.button-holder { width: 46px; } div.error { background: #f2968d; } label { color: #c1c1c1; } .flash { border: 2px solid yellow; } table.editable-inner-table { table-layout: fixed; } table.editable-inner-table label { display: inline; font-weight: initial; padding-left: 5px; } table.editable-inner-table .dropdown-menu { left: inherit; right: 0px; min-width: 100px; } .disableCursorClass { cursor: not-allowed; } .disableEventsClass { pointer-events: none; } .disableEventsClass input, .disableEventsClass button, .disableEventsClass div[contenteditable=true], .disableEventsClass a, .disableEventsClass i, .disableEventsClass span { opacity: .5; } .title-dropdown-item button { width: 100%; text-align: left; padding-left: 20px !important; padding-right: 20px !important; } .title-dropdown-item:hover { background: #f5f5f5; } .match-whole-container .tooltip.top .tooltip-arrow { border-top-color: transparent; } .match-whole-container .tooltip { width: 90%; } .value-container { background-color: #edf6fd !important; } button.btn-toggle { float: right; margin-top: 5px; margin-right: 5px; } .autocomplete-container .dropdown { position: relative !important; top: 0px !important; left: 0px !important; } .col-md-override-2-2 { width: 18.181818% !important; } .col-md-override-9-8 { width: 81.81818% !important; } .nav-tabs-col-md-9-8 .nav-tabs { width: 81.81818%; } .nav-tabs-col-md-9 .nav-tabs { width: 75%; } .nav-tabs-col-md-10 .nav-tabs { width: 83.33333%; } .list-action-group-container { text-align: right; } .list-action-group-container button { font-size: 21px !important; } .list-action-group-container i { font-size: 15px !important; } .max-height-90-vh { max-height: 90vh; } .max-height-70-vh { max-height: 70vh; } "],
                    template: "<div class=\"row editor-container\"> <div id=\"left-main-container\" class=\"left main-container\" [ngClass]=\"leftContainerColMdClass\" [shortcuts]=\"shortcuts\"> <tabset *ngIf=\"config.tabsConfig\"> <tab *ngFor=\"let tabName of tabNames; trackBy:trackByElement\" [heading]=\"tabName\" (select)=\"activeTabName = tabName\"> <sub-record [value]=\"tabNameToSubRecordMap.get(tabName)\" [tabName]=\"tabName\" [schema]=\"tabNameToSubSchema[tabName]\" [enableAdminModeSwitch]=\"config.enableAdminModeSwitch\" [isPreviewerHidden]=\"isPreviewerHidden\" [isPreviewerDisabled]=\"isPreviewerDisabled\"></sub-record> </tab> </tabset> <sub-record *ngIf=\"!config.tabsConfig\" [value]=\"_record\" [schema]=\"schema\" [enableAdminModeSwitch]=\"config.enableAdminModeSwitch\" [isPreviewerHidden]=\"isPreviewerHidden\" [isPreviewerDisabled]=\"isPreviewerDisabled\"></sub-record> </div> <div id=\"right-main-container\" *ngIf=\"!isPreviewerDisabled\" [ngClass]=\"rightContainerColMdClass\" class=\"right main-container\"> <button id=\"btn-preview-toggle\" type=\"button\" class=\"btn btn-default btn-toggle\" (click)=\"isPreviewerHidden = !isPreviewerHidden\">{{isPreviewerHidden ? \"Show Preview\" : \"Hide Preview\"}}</button> <editor-previewer [hidden]=\"isPreviewerHidden\" [previews]=\"previews\"> </editor-previewer> </div> </div> <!-- Modal View controlled by ModalService --> <modal-view> </modal-view>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'record': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'errorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'onRecordChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    };
    return JsonEditorComponent;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_tracker__["a" /* AbstractTrackerComponent */]));


/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slide_toggle__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_field_dropdown__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_new_element_button__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__any_type_field__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autocomplete_input__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__complex_list_field__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editor_previewer__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sub_record__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__find_replace__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__html_view__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__json_editor_component__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_view__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__object_field__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__value_change_watcher__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__primitive_list_field__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__primitive_field__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ref_field__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__table_list_field__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__table_item_field__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__title_dropdown__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tree_menu__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__searchable_dropdown__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__list_action_group__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared__ = __webpack_require__(1002);
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





























var JsonEditorModule = (function () {
    function JsonEditorModule() {
    }
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
                        __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["Ng2BootstrapModule"].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_5_ng2_slide_toggle__["a" /* SlideToggleModule */],
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
                    ],
                    providers: __WEBPACK_IMPORTED_MODULE_28__shared__["c" /* SHARED_SERVICES */]
                },] },
    ];
    /** @nocollapse */
    JsonEditorModule.ctorParameters = function () { return []; };
    return JsonEditorModule;
}());



/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_action_group_component__ = __webpack_require__(986);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_action_group_component__["a"]; });



/***/ }),

/***/ 986:
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
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ListActionGroupComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'list-action-group',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
                    styles: [""],
                    template: "<div> <button type=\"button\" class=\"editor-btn-delete\" (click)=\"onDelete.emit()\"> &times; </button> <button type=\"button\" class=\"editor-btn-move-up\" (click)=\"onMove.emit(-1)\"> <i class=\"fa fa-chevron-up\"></i> </button> <button type=\"button\" class=\"editor-btn-move-down\" (click)=\"onMove.emit(1)\"> <i class=\"fa fa-chevron-down\"></i> </button> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ListActionGroupComponent.ctorParameters = function () { return []; };
    ListActionGroupComponent.propDecorators = {
        'onDelete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'onMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    };
    return ListActionGroupComponent;
}());


/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_view_component__ = __webpack_require__(988);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_view_component__["a"]; });



/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(10);
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
                    template: "<div class=\"modal fade\" (onShown)=\"onShow()\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" [config]=\"{ backdrop: false }\"> <div class=\"modal-dialog modal-lg\"> <div *ngIf=\"options\" class=\"modal-content max-height-90-vh\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" (click)=\"modal.hide()\">&times;</button> <h4 class=\"modal-title\">{{options.title}}</h4> </div> <div class=\"modal-body\"> <div [innerHTML]=\"options.bodyHtml\"></div> <div [ngSwitch]=\"options.type\"> <div *ngSwitchCase=\"'confirm'\"> <button class=\"btn btn-default\" (click)=\"options.onConfirm();\"> Confirm <i class=\"fa fa-check\"></i> </button> </div> </div> </div> </div> </div> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ModalViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__shared_services__["q" /* ModalService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
    ]; };
    ModalViewComponent.propDecorators = {
        'modal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */], args: ['modal',] },],
    };
    return ModalViewComponent;
}());


/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_field_component__ = __webpack_require__(990);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__object_field_component__["a"]; });



/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
    ObjectFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'object-field',
                    styles: ["table.table { background-color: #f9f9f9; } "],
                    template: "<table [id]=\"pathString\" class=\"table\"> <tr *ngFor=\"let key of keys | addAlwaysShowFields:schema | filterAndSortBySchema:schema; trackBy:trackByElement\"> <!-- SUB FIELD TITLE MENU --> <td class=\"label-holder\"> <div> <title-dropdown [title]=\"key | underscoreToSpace\" [isDisabled]=\"schema.properties[key].disabled\"> <li *ngIf=\"schema.properties[key].type === 'array'\" class=\"title-dropdown-item\"> <add-new-element-button [path]=\"getFieldPath(key)\" [schema]=\"schema.properties[key]\"></add-new-element-button> </li> <li class=\"title-dropdown-item\"> <button type=\"button\" class=\"editor-btn-delete editor-btn-delete-text\" (click)=\"deleteField(key)\">Delete</button> </li> </title-dropdown> </div> </td> <!-- SUB FIELD COMPONENT --> <td> <any-type-field [value]=\"value.get(key) | selfOrEmpty:schema.properties[key]\" [schema]=schema.properties[key] [path]=\"getFieldPath(key)\"></any-type-field> </td> </tr> <!-- ADD SUB FIELD FROM SCHEMA DROPDOWN --> <tr> <td class=\"button-holder\"> <add-field-dropdown [fields]=\"keys\" [pathString]=\"pathString\" (onFieldAdd)=\"onFieldAdd($event)\" [schema]=\"schema.properties\">+</add-field-dropdown> </td> <td class=\"button-holder list-action-group-container\"> <!-- list-action-group (up/down and delete buttons), Set only if it's an element of an list (complex-list) --> <ng-content></ng-content> </td> </tr> </table>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    ObjectFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
    ]; };
    ObjectFieldComponent.propDecorators = {
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return ObjectFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));


/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__ = __webpack_require__(992);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_field_component__["a"]; });



/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_field__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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
    PrimitiveFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'primitive-field',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewEncapsulation */].None,
                    styles: ["td.value-container div[contenteditable=true], td.value-container input { vertical-align: middle; width: 50%; padding: 0 0 0 3px; transition: all 0.5s ease; resize: none; border: none; background-color: transparent; display: inline-block; width: 100%; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; } table.primitive-field-container { width: 100%; } td.link-button-container { width: 22px; } td.value-container { width: 100%; } td.value-container:hover { background-color: #ffa !important; } a.no-decoration { text-decoration: none; } [contenteditable=true] { min-height: 18px; word-break: break-word; } [contenteditable=true]:empty:before { content: attr(placeholder); color: darkgray; display: block; /* For Firefox */ } .tooltip-left-align { margin-left: 12px; padding: 0px; } "],
                    template: "<div [ngSwitch]=\"valueType\" [id]=\"pathString\"> <table class=\"primitive-field-container\"> <tr> <template #errorsTooltipTemplate> <ul class=\"tooltip-left-align\"> <li *ngFor=\"let error of errors\" > {{error.message}} </li> </ul> </template> <td class=\"value-container\" [ngClass]=\"errorNgClass\" [tooltip]=\"errorsTooltipTemplate\" [isDisabled]=\"!isErrorTooltipEnabled\" placement=\"{{tooltipPosition}}\" container=\"body\"> <div *ngSwitchCase=\"'string'\"> <div contenteditable=\"true\" attr.data-path=\"{{pathString}}\" [tabindex]=\"tabIndex\" [(contentModel)]=\"value\" (blur)=\"commitValueChange()\" (keypress)=\"onKeypress($event)\" attr.placeholder=\"{{schema.title}}\"></div> </div> <div *ngSwitchCase=\"'enum'\"> <searchable-dropdown [pathString]=\"pathString\" [value]=\"value\" [placeholder]=\"schema.title\" [items]=\"schema.enum\" [shortcutMap]=\"schema.enumShorcutMap\" (onSelect)=\"onSearchableDropdownSelect($event)\" [tabIndex]=\"tabIndex\"></searchable-dropdown> </div> <div *ngSwitchCase=\"'autocomplete'\"> <autocomplete-input [pathString]=\"pathString\" [value]=\"value\" [path]=\"path\" [autocompletionConfig]=\"schema.autocompletionConfig\" (onBlur)=\"commitValueChange()\" (onKeypress)=\"onKeypress($event)\" (onValueChange)=\"onAutocompleteInputValueChange($event)\" [placeholder]=\"schema.title\" [tabIndex]=\"tabIndex\"></autocomplete-input> </div> <div *ngSwitchCase=\"'integer'\"> <input type=\"number\" [(ngModel)]=\"value\" [tabindex]=\"tabIndex\" attr.data-path=\"{{pathString}}\" (blur)=\"commitValueChange()\" (keypress)=\"onKeypress($event)\" placeholder=\"{{schema.title}}\"> </div> <div *ngSwitchCase=\"'boolean'\"> <input type=\"checkbox\" [(ngModel)]=\"value\" (ngModelChange)=\"commitValueChange()\" placeholder=\"{{schema.title}}\"> </div> <div *ngSwitchDefault> ## Not recognized type: {{valueType}} </div> </td> <td class=\"link-button-container\"> <a *ngIf=\"schema.linkBuilder\" class=\"no-decoration\" target=\"_blank\" [href]=\"schema.linkBuilder(value)\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> <a *ngIf=\"!schema.linkBuilder && schema.format === 'url'\" class=\"no-decoration\" target=\"_blank\" [href]=\"value\"> <i class=\"fa fa-link\" aria-hidden=\"true\"></i> </a> </td> </tr> </table> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    PrimitiveFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["o" /* SchemaValidationService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["p" /* ComponentTypeService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
    ]; };
    PrimitiveFieldComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return PrimitiveFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_field__["a" /* AbstractFieldComponent */]));


/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__ = __webpack_require__(994);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__primitive_list_field_component__["a"]; });



/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_list_field__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(10);
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



var PrimitiveListFieldComponent = (function (_super) {
    __extends(PrimitiveListFieldComponent, _super);
    function PrimitiveListFieldComponent(appGlobalsService, jsonStoreService, pathUtilService) {
        _super.call(this, appGlobalsService, jsonStoreService, pathUtilService);
        this.appGlobalsService = appGlobalsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
    }
    PrimitiveListFieldComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */], args: [{
                    selector: 'primitive-list-field',
                    styles: ["td { padding: 0px !important; } "],
                    template: "<div [id]=\"pathString\"> <div class=\"wide\"> <table class=\"table\"> <tr *ngFor=\"let value of values | selfOrEmpty:schema; let i = index; trackBy:trackByElement\"> <td> <primitive-field [value]=\"value\" [schema]=\"schema.items\" [path]=\"getElementPath(i)\"></primitive-field> </td> <td *ngIf=\"values.size > 0\" class=\"button-holder\"> <list-action-group (onMove)=\"moveElement(i, $event)\" (onDelete)=\"deleteElement(i)\"></list-action-group> </td> </tr> </table> </div> </div> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    PrimitiveListFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AppGlobalsService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* JsonStoreService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* PathUtilService */], },
    ]; };
    PrimitiveListFieldComponent.propDecorators = {
        'values': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return PrimitiveListFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_list_field__["a" /* AbstractListFieldComponent */]));


/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref_field_component__ = __webpack_require__(996);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ref_field_component__["a"]; });



/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__(10);
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
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    RefFieldComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["n" /* DynamicTemplateLoaderService */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__shared_services__["b" /* PathUtilService */], },
    ]; };
    RefFieldComponent.propDecorators = {
        'schema': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
    };
    return RefFieldComponent;
}());


/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__ = __webpack_require__(998);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__searchable_dropdown_component__["a"]; });



/***/ }),

/***/ 998:
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
                    styles: ["div.btn-group { width: 100%; } .dropdown-menu { left: 0px !important; } .toggle-container { width: 100%; } .toggle-container input { width: 93%; } .toggle-container i { width: 5%; height: 100%; text-align: right; } .dropdown-toggle { box-shadow: none !important; } "],
                    template: "<div class=\"btn-group\" dropdown keyboardNav=\"true\" [(isOpen)]=\"status.isOpen\"> <div class=\"toggle-container\"> <input #inputToggle attr.data-path=\"{{pathString}}\" [placeholder]=\"placeholder\" [(ngModel)]=\"expressionOrValue\" (keypress)=\"onKeypress($event.key)\" [tabindex]=\"tabIndex\" (focus)=\"onFocus($event)\" dropdownToggle> <i class=\"fa fa-caret-down\" (click)=\"inputToggle.focus()\" dropdownToggle></i> </div> <ul class=\"dropdown-menu\" dropdownMenu role=\"menu\"> <li *ngFor=\"let item of items | filterByExpression:expression\" role=\"menuitem\"> <!-- href is needed for keyboard navigation --> <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onItemClick(item)\">{{item}}</a> </li> </ul> </div>",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ChangeDetectionStrategy */].OnPush
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
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    };
    return SearchableDropdownComponent;
}());


/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentModelDirective; });

var ContentModelDirective = (function () {
    function ContentModelDirective(elementRef) {
        this.elementRef = elementRef;
        this.contentModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
    ContentModelDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Directive */], args: [{
                    selector: '[contentModel]'
                },] },
    ];
    /** @nocollapse */
    ContentModelDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    ]; };
    ContentModelDirective.propDecorators = {
        'contentModel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */] },],
        'contentModelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* HostListener */], args: ['blur',] },],
        'onKeypress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* HostListener */], args: ['keypress', ['$event'],] },],
    };
    return ContentModelDirective;
}());


/***/ })

},[1046]);
//# sourceMappingURL=main.bundle.map