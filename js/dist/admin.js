module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_registerWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/registerWidget */ "./src/common/registerWidget.js");

app.initializers.add('miniflar/top-like-givers-widget', function () {
  Object(_common_registerWidget__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
});

/***/ }),

/***/ "./src/common/components/TopLikeGiversWidget.js":
/*!******************************************************!*\
  !*** ./src/common/components/TopLikeGiversWidget.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopLikeGiversWidget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/components/Widget */ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_4__);






var TopLikeGiversWidget = /*#__PURE__*/function (_Widget) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TopLikeGiversWidget, _Widget);

  function TopLikeGiversWidget() {
    return _Widget.apply(this, arguments) || this;
  }

  var _proto = TopLikeGiversWidget.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this$attrs$state, _this$attrs$state$use, _this$attrs$state2, _this$attrs$state2$is, _this$attrs$state3, _this$attrs$state3$ha;

    _Widget.prototype.oninit.call(this, vnode);

    this.monthlyCounts = app.forum.attribute('miniflar-top-like-givers-widget.data');
    (_this$attrs$state$use = (_this$attrs$state = this.attrs.state).users) != null ? _this$attrs$state$use : _this$attrs$state.users = [];
    (_this$attrs$state2$is = (_this$attrs$state2 = this.attrs.state).isLoading) != null ? _this$attrs$state2$is : _this$attrs$state2.isLoading = false;
    (_this$attrs$state3$ha = (_this$attrs$state3 = this.attrs.state).hasLoaded) != null ? _this$attrs$state3$ha : _this$attrs$state3.hasLoaded = false;
  };

  _proto.oncreate = function oncreate(vnode) {
    _Widget.prototype.oncreate.call(this, vnode);

    if (!this.attrs.state.hasLoaded) {
      this.load();
    }
  };

  _proto.className = function className() {
    return 'MiniFLAR-TopLikeGiversWidget';
  };

  _proto.icon = function icon() {
    return 'fas fa-thumbs-up';
  };

  _proto.title = function title() {
    return app.translator.trans('miniflar-top-like-givers-widget.forum.widget.title');
  };

  _proto.description = function description() {
    return '';
  };

  _proto.content = function content() {
    var _this = this;

    if (this.attrs.state.isLoading) {
      return m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1___default.a, null);
    }

    var users = this.attrs.state.users.sort(function (a, b) {
      return _this.monthlyCounts[b.id()] - _this.monthlyCounts[a.id()];
    });
    return m("div", {
      className: "MiniFLAR-TopLikeGiversWidget-users"
    }, users.map(function (user) {
      return m("div", {
        className: "MiniFLAR-TopLikeGiversWidget-users-item"
      }, m("div", {
        className: "MiniFLAR-TopLikeGiversWidget-users-item-avatar"
      }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user)), m("div", {
        className: "MiniFLAR-TopLikeGiversWidget-users-item-content"
      }, m("div", {
        className: "MiniFLAR-TopLikeGiversWidget-users-item-name"
      }, user.displayName()), m("div", {
        className: "MiniFLAR-TopLikeGiversWidget-users-item-value"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-thumbs-up'), " ", _this.monthlyCounts[user.id()])));
    }));
  };

  _proto.load = function load() {
    var _this2 = this;

    this.attrs.state.isLoading = true;
    app.store.find('users', {
      filter: {
        top_like_givers: true
      }
    }).then(function (users) {
      _this2.attrs.state.users = users;
      _this2.attrs.state.isLoading = false;
      _this2.attrs.state.hasLoaded = true;
      m.redraw();
    });
  };

  return TopLikeGiversWidget;
}(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/common/registerWidget.js":
/*!**************************************!*\
  !*** ./src/common/registerWidget.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets */ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopLikeGiversWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TopLikeGiversWidget */ "./src/common/components/TopLikeGiversWidget.js");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  new flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default.a().add({
    key: 'topLikeGivers',
    component: _components_TopLikeGiversWidget__WEBPACK_IMPORTED_MODULE_1__["default"],
    isDisabled: function isDisabled() {
      var monthlyCounts = app.forum.attribute('miniflar-top-like-givers-widget.data');
      return !app.forum.attribute('canSearchUsers') || !monthlyCounts || !Object.keys(monthlyCounts).length;
    },
    isUnique: true,
    placement: 'end',
    position: 3
  }).extend(app, 'miniflar-top-like-givers-widget');
});

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget":
/*!*****************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget']" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets":
/*!**************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets']" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map