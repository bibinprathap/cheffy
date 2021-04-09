module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/antd.less */ "./styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/redux/store/configureStore */ "./src/redux/store/configureStore.js");
/* harmony import */ var _src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Skyslit\\Web Projects\\Freelance\\cheffy\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //

const store = _src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_7___default()();

const Noop = ({
  children
}) => children;

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  // static async getInitialProps({ Component, ctx }) {
  //   return {
  //     pageProps: {
  //       nookies: parseNookies(ctx), // 👈
  //       ...(Component.getInitialProps
  //         ? await Component.getInitialProps(ctx)
  //         : {}),
  //     },
  //   };
  // }
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const Layout = Component.Layout || Noop;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        options: {
          clientMaxAge: 60,
          keepAlive: 5 * 60
        },
        session: pageProps.session,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
          store: store,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this)
    }, void 0, false);
  }

}

/***/ }),

/***/ "./src/redux/actions/auth/authType.js":
/*!********************************************!*\
  !*** ./src/redux/actions/auth/authType.js ***!
  \********************************************/
/*! exports provided: AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_ME_REQUEST, AUTH_ME_SUCCESS, AUTH_ME_FAILURE, AUTH_LOOUT_REQUEST, AUTH_LOOUT_SUCCESS, AUTH_LOOUT_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNUP_REQUEST", function() { return AUTH_SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNUP_SUCCESS", function() { return AUTH_SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNUP_FAILURE", function() { return AUTH_SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN_REQUEST", function() { return AUTH_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN_SUCCESS", function() { return AUTH_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN_FAILURE", function() { return AUTH_LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ME_REQUEST", function() { return AUTH_ME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ME_SUCCESS", function() { return AUTH_ME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ME_FAILURE", function() { return AUTH_ME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOOUT_REQUEST", function() { return AUTH_LOOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOOUT_SUCCESS", function() { return AUTH_LOOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOOUT_FAILURE", function() { return AUTH_LOOUT_FAILURE; });
const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST';
const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS';
const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE';
const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
const AUTH_ME_REQUEST = 'AUTH_ME_REQUEST';
const AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS';
const AUTH_ME_FAILURE = 'AUTH_ME_FAILURE';
const AUTH_LOOUT_REQUEST = 'AUTH_LOOUT_REQUEST';
const AUTH_LOOUT_SUCCESS = 'AUTH_LOOUT_SUCCESS';
const AUTH_LOOUT_FAILURE = 'AUTH_LOOUT_FAILURE';

/***/ }),

/***/ "./src/redux/actions/chef/chefType.js":
/*!********************************************!*\
  !*** ./src/redux/actions/chef/chefType.js ***!
  \********************************************/
/*! exports provided: CHEF_PLATES_REQUEST, CHEF_PLATES_SUCCESS, CHEF_PLATES_FAILURE, CHEF_ADD_PLATES_REQUEST, CHEF_ADD_PLATES_SUCCESS, CHEF_ADD_PLATES_FAILURE, CHEF_ADD_PLATES_IMAGES_REQUEST, CHEF_ADD_PLATES_IMAGES_SUCCESS, CHEF_ADD_PLATES_IMAGES_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_PLATES_REQUEST", function() { return CHEF_PLATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_PLATES_SUCCESS", function() { return CHEF_PLATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_PLATES_FAILURE", function() { return CHEF_PLATES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_ADD_PLATES_REQUEST", function() { return CHEF_ADD_PLATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_ADD_PLATES_SUCCESS", function() { return CHEF_ADD_PLATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_ADD_PLATES_FAILURE", function() { return CHEF_ADD_PLATES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_ADD_PLATES_IMAGES_REQUEST", function() { return CHEF_ADD_PLATES_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_ADD_PLATES_IMAGES_SUCCESS", function() { return CHEF_ADD_PLATES_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEF_ADD_PLATES_IMAGES_FAILURE", function() { return CHEF_ADD_PLATES_IMAGES_FAILURE; });
const CHEF_PLATES_REQUEST = 'CHEF_PLATES_REQUEST';
const CHEF_PLATES_SUCCESS = 'CHEF_PLATES_SUCCESS';
const CHEF_PLATES_FAILURE = 'CHEF_PLATES_FAILURE';
const CHEF_ADD_PLATES_REQUEST = 'CHEF_ADD_PLATES_REQUEST';
const CHEF_ADD_PLATES_SUCCESS = 'CHEF_ADD_PLATE_SUCCESS';
const CHEF_ADD_PLATES_FAILURE = 'CHEF_ADD_PLATES_FAILURE';
const CHEF_ADD_PLATES_IMAGES_REQUEST = 'CHEF_ADD_PLATES_IMAGES_REQUEST';
const CHEF_ADD_PLATES_IMAGES_SUCCESS = 'CHEF_ADD_PLATES_IMAGES_SUCCESS';
const CHEF_ADD_PLATES_IMAGES_FAILURE = 'CHEF_ADD_PLATES_IMAGES_FAILURE';

/***/ }),

/***/ "./src/redux/actions/counter/counterType.js":
/*!**************************************************!*\
  !*** ./src/redux/actions/counter/counterType.js ***!
  \**************************************************/
/*! exports provided: INCREMENT, DECREMENT, RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

/***/ }),

/***/ "./src/redux/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth/authType */ "./src/redux/actions/auth/authType.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //

const initialState = {
  isAuthenticated: false,
  isChef: false,
  userInfo: {}
}; //

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_ME_REQUEST"]:
      return state;

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_ME_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: true,
        userInfo: action.payload
      });

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_ME_FAILURE"]:
      return state;
    //

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGIN_REQUEST"]:
      return state;

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGIN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: true,
        isChef: action.payload.type === 'user' ? true : false,
        userInfo: action.payload
      });

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGIN_FAILURE"]:
      return state;
    //

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOOUT_REQUEST"]:
      return state;

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOOUT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: false
      });

    case _actions_auth_authType__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOOUT_FAILURE"]:
      return state;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_counter_counterType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/counter/counterType */ "./src/redux/actions/counter/counterType.js");



const cartCounter = (state = 0, {
  type
}) => {
  switch (type) {
    case "CART_ITEM_ADD":
      console.log("Adding.!", state + 1, state);
      console.log(window.localStorage.getItem("cartitems"));
      return state + 1;

    case "CART_ITEM_REMOVE":
      return state - 1;

    default:
      return state;
  }
};

const cartReducer = immer__WEBPACK_IMPORTED_MODULE_0___default()(cartCounter);

/***/ }),

/***/ "./src/redux/reducers/chefReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/chefReducer.js ***!
  \*******************************************/
/*! exports provided: chefReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chefReducer", function() { return chefReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_chef_chefType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/chef/chefType */ "./src/redux/actions/chef/chefType.js");

 //

const initialState = {
  plates: {
    data: []
  }
}; //

const chefRecipe = (draft = initialState, action) => {
  switch (action.type) {
    case _actions_chef_chefType__WEBPACK_IMPORTED_MODULE_1__["CHEF_PLATES_SUCCESS"]:
      draft.plates = action.payload;
      return draft;

    default:
      return draft;
  }
};

const chefReducer = immer__WEBPACK_IMPORTED_MODULE_0___default()(chefRecipe);

/***/ }),

/***/ "./src/redux/reducers/counterReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/counterReducer.js ***!
  \**********************************************/
/*! exports provided: counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_counter_counterType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/counter/counterType */ "./src/redux/actions/counter/counterType.js");



const counterRecipe = (state = 0, {
  type
}) => {
  switch (type) {
    case _actions_counter_counterType__WEBPACK_IMPORTED_MODULE_1__["INCREMENT"]:
      return state + 1;

    case _actions_counter_counterType__WEBPACK_IMPORTED_MODULE_1__["DECREMENT"]:
      return state - 1;

    case _actions_counter_counterType__WEBPACK_IMPORTED_MODULE_1__["RESET"]:
      return 0;

    default:
      return state;
  }
};

const counterReducer = immer__WEBPACK_IMPORTED_MODULE_0___default()(counterRecipe);

/***/ }),

/***/ "./src/redux/reducers/foodReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/foodReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _higherOrderReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./higherOrderReducer */ "./src/redux/reducers/higherOrderReducer.js");


const foodReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  collection: Object(_higherOrderReducer__WEBPACK_IMPORTED_MODULE_1__["createCollectionReducer"])('FOOD'),
  status: Object(_higherOrderReducer__WEBPACK_IMPORTED_MODULE_1__["createStatusReducer"])('FOOD')
});
/* harmony default export */ __webpack_exports__["default"] = (foodReducer);

/***/ }),

/***/ "./src/redux/reducers/higherOrderReducer.js":
/*!**************************************************!*\
  !*** ./src/redux/reducers/higherOrderReducer.js ***!
  \**************************************************/
/*! exports provided: createCollectionReducer, createStatusReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCollectionReducer", function() { return createCollectionReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatusReducer", function() { return createStatusReducer; });
const createCollectionReducer = type => {
  return (state = [], action) => {
    switch (action.type) {
      case `ADD_${type}_TO_COLLECTION`:
        return state.concat(action.payload);

      default:
        return state;
    }
  };
};
const createStatusReducer = type => {
  const initialState = {
    isFetching: false,
    errorFetching: false
  };
  return (state = initialState, action) => {
    switch (action.type) {
      case `SET_IS_FETCHING_${type}`:
        return Object.assign({}, state, {
          isFetching: action.isFetching
        });

      case `SET_ERROR_FETCHING_${type}`:
        return Object.assign({}, state, {
          errorFetching: action.errorFetching
        });

      default:
        return state;
    }
  };
};

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodReducer */ "./src/redux/reducers/foodReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./src/redux/reducers/authReducer.js");
/* harmony import */ var _chefReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chefReducer */ "./src/redux/reducers/chefReducer.js");
/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counterReducer */ "./src/redux/reducers/counterReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  food: _foodReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  counter: _counterReducer__WEBPACK_IMPORTED_MODULE_4__["counterReducer"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
  chef: _chefReducer__WEBPACK_IMPORTED_MODULE_3__["chefReducer"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_5__["cartReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/store/configureStore.dev.js":
/*!***********************************************!*\
  !*** ./src/redux/store/configureStore.dev.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-immutable-state-invariant */ "redux-immutable-state-invariant");
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.js");



 //import { loadingBarMiddleware } from 'react-redux-loading-bar';


const logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])({
  collapsed: true
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartitems');

    if (serializedState === null) {
      console.log("null");
      return undefined;
    }

    console.log(serializedState);
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedState = loadState();
function configureStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1___default()(), logger));
}

/***/ }),

/***/ "./src/redux/store/configureStore.js":
/*!*******************************************!*\
  !*** ./src/redux/store/configureStore.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./configureStore.dev */ "./src/redux/store/configureStore.dev.js");
}

/***/ }),

/***/ "./styles/antd.less":
/*!**************************!*\
  !*** ./styles/antd.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-immutable-state-invariant":
/*!**************************************************!*\
  !*** external "redux-immutable-state-invariant" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable-state-invariant");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aC9hdXRoVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jaGVmL2NoZWZUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvdW50ZXIvY291bnRlclR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2hlZlJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9mb29kUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaGlnaGVyT3JkZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUvY29uZmlndXJlU3RvcmUuZGV2LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1pbW11dGFibGUtc3RhdGUtaW52YXJpYW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJOb29wIiwiY2hpbGRyZW4iLCJNeUFwcCIsInByb3BzIiwiTGF5b3V0IiwiY2xpZW50TWF4QWdlIiwia2VlcEFsaXZlIiwic2Vzc2lvbiIsIkFVVEhfU0lHTlVQX1JFUVVFU1QiLCJBVVRIX1NJR05VUF9TVUNDRVNTIiwiQVVUSF9TSUdOVVBfRkFJTFVSRSIsIkFVVEhfTE9HSU5fUkVRVUVTVCIsIkFVVEhfTE9HSU5fU1VDQ0VTUyIsIkFVVEhfTE9HSU5fRkFJTFVSRSIsIkFVVEhfTUVfUkVRVUVTVCIsIkFVVEhfTUVfU1VDQ0VTUyIsIkFVVEhfTUVfRkFJTFVSRSIsIkFVVEhfTE9PVVRfUkVRVUVTVCIsIkFVVEhfTE9PVVRfU1VDQ0VTUyIsIkFVVEhfTE9PVVRfRkFJTFVSRSIsIkNIRUZfUExBVEVTX1JFUVVFU1QiLCJDSEVGX1BMQVRFU19TVUNDRVNTIiwiQ0hFRl9QTEFURVNfRkFJTFVSRSIsIkNIRUZfQUREX1BMQVRFU19SRVFVRVNUIiwiQ0hFRl9BRERfUExBVEVTX1NVQ0NFU1MiLCJDSEVGX0FERF9QTEFURVNfRkFJTFVSRSIsIkNIRUZfQUREX1BMQVRFU19JTUFHRVNfUkVRVUVTVCIsIkNIRUZfQUREX1BMQVRFU19JTUFHRVNfU1VDQ0VTUyIsIkNIRUZfQUREX1BMQVRFU19JTUFHRVNfRkFJTFVSRSIsIklOQ1JFTUVOVCIsIkRFQ1JFTUVOVCIsIlJFU0VUIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNDaGVmIiwidXNlckluZm8iLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImNhcnRDb3VudGVyIiwibG9nIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjZSIsInBsYXRlcyIsImRhdGEiLCJjaGVmUmVjaXBlIiwiZHJhZnQiLCJjaGVmUmVkdWNlciIsImNvdW50ZXJSZWNpcGUiLCJjb3VudGVyUmVkdWNlciIsImZvb2RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY29sbGVjdGlvbiIsImNyZWF0ZUNvbGxlY3Rpb25SZWR1Y2VyIiwic3RhdHVzIiwiY3JlYXRlU3RhdHVzUmVkdWNlciIsImNvbmNhdCIsImlzRmV0Y2hpbmciLCJlcnJvckZldGNoaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwicm9vdFJlZHVjZXIiLCJmb29kIiwiY291bnRlciIsImF1dGgiLCJjaGVmIiwiY2FydCIsImxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsImNvbGxhcHNlZCIsImxvYWRTdGF0ZSIsInNlcmlhbGl6ZWRTdGF0ZSIsInVuZGVmaW5lZCIsIkpTT04iLCJwYXJzZSIsImUiLCJwZXJzaXN0ZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJyZWR1eEltbXV0YWJsZVN0YXRlSW52YXJpYW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNUM7O0FBQ0E7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7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Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvYW50ZC5sZXNzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vc3JjL3JlZHV4L3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuLy9cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG5jb25zdCBOb29wID0gKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblx0Ly8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuXHQvLyAgIHJldHVybiB7XHJcblx0Ly8gICAgIHBhZ2VQcm9wczoge1xyXG5cdC8vICAgICAgIG5vb2tpZXM6IHBhcnNlTm9va2llcyhjdHgpLCAvLyDwn5GIXHJcblx0Ly8gICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcclxuXHQvLyAgICAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcblx0Ly8gICAgICAgICA6IHt9KSxcclxuXHQvLyAgICAgfSxcclxuXHQvLyAgIH07XHJcblx0Ly8gfVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBMYXlvdXQgPSBDb21wb25lbnQuTGF5b3V0IHx8IE5vb3A7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxQcm92aWRlclxyXG5cdFx0XHRcdFx0b3B0aW9ucz17e1xyXG5cdFx0XHRcdFx0XHRjbGllbnRNYXhBZ2U6IDYwLFxyXG5cdFx0XHRcdFx0XHRrZWVwQWxpdmU6IDUgKiA2MCxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8UlByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcblx0XHRcdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0xheW91dD5cclxuXHRcdFx0XHRcdDwvUlByb3ZpZGVyPlxyXG5cdFx0XHRcdDwvUHJvdmlkZXI+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEFVVEhfU0lHTlVQX1JFUVVFU1QgPSAnQVVUSF9TSUdOVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX1NJR05VUF9TVUNDRVNTID0gJ0FVVEhfU0lHTlVQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9TSUdOVVBfRkFJTFVSRSA9ICdBVVRIX1NJR05VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX0xPR0lOX1JFUVVFU1QgPSAnQVVUSF9MT0dJTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfTE9HSU5fU1VDQ0VTUyA9ICdBVVRIX0xPR0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9MT0dJTl9GQUlMVVJFID0gJ0FVVEhfTE9HSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9NRV9SRVFVRVNUID0gJ0FVVEhfTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX01FX1NVQ0NFU1MgPSAnQVVUSF9NRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfTUVfRkFJTFVSRSA9ICdBVVRIX01FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhfTE9PVVRfUkVRVUVTVCA9ICdBVVRIX0xPT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9MT09VVF9TVUNDRVNTID0gJ0FVVEhfTE9PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX0xPT1VUX0ZBSUxVUkUgPSAnQVVUSF9MT09VVF9GQUlMVVJFJzsiLCJleHBvcnQgY29uc3QgQ0hFRl9QTEFURVNfUkVRVUVTVCA9ICdDSEVGX1BMQVRFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIRUZfUExBVEVTX1NVQ0NFU1MgPSAnQ0hFRl9QTEFURVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEVGX1BMQVRFU19GQUlMVVJFID0gJ0NIRUZfUExBVEVTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIRUZfQUREX1BMQVRFU19SRVFVRVNUID0gJ0NIRUZfQUREX1BMQVRFU19SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEVGX0FERF9QTEFURVNfU1VDQ0VTUyA9ICdDSEVGX0FERF9QTEFURV9TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEVGX0FERF9QTEFURVNfRkFJTFVSRSA9ICdDSEVGX0FERF9QTEFURVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hFRl9BRERfUExBVEVTX0lNQUdFU19SRVFVRVNUID0gJ0NIRUZfQUREX1BMQVRFU19JTUFHRVNfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hFRl9BRERfUExBVEVTX0lNQUdFU19TVUNDRVNTID0gJ0NIRUZfQUREX1BMQVRFU19JTUFHRVNfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hFRl9BRERfUExBVEVTX0lNQUdFU19GQUlMVVJFID0gJ0NIRUZfQUREX1BMQVRFU19JTUFHRVNfRkFJTFVSRSc7XHJcbiIsImV4cG9ydCBjb25zdCBJTkNSRU1FTlQgPSAnSU5DUkVNRU5UJ1xyXG5leHBvcnQgY29uc3QgREVDUkVNRU5UID0gJ0RFQ1JFTUVOVCdcclxuZXhwb3J0IGNvbnN0IFJFU0VUID0gJ1JFU0VUJyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hdXRoL2F1dGhUeXBlJztcclxuLy9cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLCBpc0NoZWY6IGZhbHNlLCB1c2VySW5mbzoge30gfTtcclxuLy9cclxuZXhwb3J0IGNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIHR5cGVzLkFVVEhfTUVfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0Y2FzZSB0eXBlcy5BVVRIX01FX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG5cdFx0XHRcdHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgdHlwZXMuQVVUSF9NRV9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHQvL1xyXG5cdFx0Y2FzZSB0eXBlcy5BVVRIX0xPR0lOX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdGNhc2UgdHlwZXMuQVVUSF9MT0dJTl9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuXHRcdFx0XHRpc0NoZWY6IGFjdGlvbi5wYXlsb2FkLnR5cGUgPT09ICd1c2VyJyA/IHRydWUgOiBmYWxzZSxcclxuXHRcdFx0XHR1c2VySW5mbzogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIHR5cGVzLkFVVEhfTE9HSU5fRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0Ly9cclxuXHRcdGNhc2UgdHlwZXMuQVVUSF9MT09VVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHRjYXNlIHR5cGVzLkFVVEhfTE9PVVRfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSB0eXBlcy5BVVRIX0xPT1VUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vYWN0aW9ucy9jb3VudGVyL2NvdW50ZXJUeXBlXCI7XHJcblxyXG5jb25zdCBjYXJ0Q291bnRlciA9IChzdGF0ZSA9IDAsIHsgdHlwZSB9KSA9PiB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFwiQ0FSVF9JVEVNX0FERFwiOlxyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGluZy4hXCIsc3RhdGUrMSxzdGF0ZSlcclxuICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydGl0ZW1zXCIpKVxyXG4gICAgICByZXR1cm4gc3RhdGUrMTtcclxuICAgIGNhc2UgXCJDQVJUX0lURU1fUkVNT1ZFXCI6XHJcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRSZWR1Y2VyID0gcHJvZHVjZShjYXJ0Q291bnRlcik7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9jaGVmL2NoZWZUeXBlJztcclxuLy9cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBwbGF0ZXM6IHsgZGF0YTogW10gfSB9O1xyXG4vL1xyXG5jb25zdCBjaGVmUmVjaXBlID0gKGRyYWZ0ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIHR5cGVzLkNIRUZfUExBVEVTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnBsYXRlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRyZXR1cm4gZHJhZnQ7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gZHJhZnQ7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWZSZWR1Y2VyID0gcHJvZHVjZShjaGVmUmVjaXBlKTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXIvY291bnRlclR5cGVcIjtcclxuXHJcbmNvbnN0IGNvdW50ZXJSZWNpcGUgPSAoc3RhdGUgPSAwLCB7IHR5cGUgfSkgPT4ge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5JTkNSRU1FTlQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XHJcbiAgICBjYXNlIHR5cGVzLkRFQ1JFTUVOVDpcclxuICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcclxuICAgIGNhc2UgdHlwZXMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudGVyUmVkdWNlciA9IHByb2R1Y2UoY291bnRlclJlY2lwZSk7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtcclxuXHRjcmVhdGVDb2xsZWN0aW9uUmVkdWNlcixcclxuXHRjcmVhdGVTdGF0dXNSZWR1Y2VyLFxyXG59IGZyb20gJy4vaGlnaGVyT3JkZXJSZWR1Y2VyJztcclxuXHJcbmNvbnN0IGZvb2RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRjb2xsZWN0aW9uOiBjcmVhdGVDb2xsZWN0aW9uUmVkdWNlcignRk9PRCcpLFxyXG5cdHN0YXR1czogY3JlYXRlU3RhdHVzUmVkdWNlcignRk9PRCcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb2RSZWR1Y2VyO1xyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlQ29sbGVjdGlvblJlZHVjZXIgPSAodHlwZSkgPT4ge1xyXG5cdHJldHVybiAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgYEFERF8ke3R5cGV9X1RPX0NPTExFQ1RJT05gOlxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0YXR1c1JlZHVjZXIgPSAodHlwZSkgPT4ge1xyXG5cdGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRcdGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3JGZXRjaGluZzogZmFsc2UsXHJcblx0fTtcclxuXHRyZXR1cm4gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBgU0VUX0lTX0ZFVENISU5HXyR7dHlwZX1gOlxyXG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdFx0aXNGZXRjaGluZzogYWN0aW9uLmlzRmV0Y2hpbmcsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGNhc2UgYFNFVF9FUlJPUl9GRVRDSElOR18ke3R5cGV9YDpcclxuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHRcdGVycm9yRmV0Y2hpbmc6IGFjdGlvbi5lcnJvckZldGNoaW5nLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBmb29kUmVkdWNlciBmcm9tICcuL2Zvb2RSZWR1Y2VyJztcclxuaW1wb3J0IHsgYXV0aFJlZHVjZXIgfSBmcm9tICcuL2F1dGhSZWR1Y2VyJztcclxuaW1wb3J0IHsgY2hlZlJlZHVjZXIgfSBmcm9tICcuL2NoZWZSZWR1Y2VyJztcclxuaW1wb3J0IHsgY291bnRlclJlZHVjZXIgfSBmcm9tICcuL2NvdW50ZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgY2FydFJlZHVjZXIgfSBmcm9tIFwiLi9jYXJ0UmVkdWNlclwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdGZvb2Q6IGZvb2RSZWR1Y2VyLFxyXG5cdGNvdW50ZXI6IGNvdW50ZXJSZWR1Y2VyLFxyXG5cdGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG5cdGNoZWY6IGNoZWZSZWR1Y2VyLFxyXG5cdGNhcnQ6Y2FydFJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCByZWR1eEltbXV0YWJsZVN0YXRlSW52YXJpYW50IGZyb20gJ3JlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG4vL2ltcG9ydCB7IGxvYWRpbmdCYXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3QtcmVkdXgtbG9hZGluZy1iYXInO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xyXG5cdGNvbGxhcHNlZDogdHJ1ZSxcclxufSk7XHJcbmNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcclxuXHR0cnkge1xyXG5cdCAgY29uc3Qgc2VyaWFsaXplZFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRpdGVtcycpO1xyXG5cdCAgaWYoc2VyaWFsaXplZFN0YXRlID09PSBudWxsKSB7XHJcblx0XHQgIGNvbnNvbGUubG9nKFwibnVsbFwiKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHQgIH1cclxuXHQgIGNvbnNvbGUubG9nKHNlcmlhbGl6ZWRTdGF0ZSlcclxuXHQgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRTdGF0ZSk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHR9XHJcbiAgfTtcclxuXHJcbmNvbnN0IHBlcnNpc3RlZFN0YXRlID0gbG9hZFN0YXRlKClcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcblx0cmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcmVkdXhJbW11dGFibGVTdGF0ZUludmFyaWFudCgpLCBsb2dnZXIpKTtcclxufVxyXG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb25maWd1cmVTdG9yZS5wcm9kJyk7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbmZpZ3VyZVN0b3JlLmRldicpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=