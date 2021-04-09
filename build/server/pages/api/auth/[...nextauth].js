module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    id: 'cheffyCredentials',
    name: 'CheffyCredentials',
    authorize: async credentials => {
      try {
        // console.log("credentials :", credentials);
        if (credentials.apiToken) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(credentials);
        } else {
          throw new Error('apiToken token is not define');
        }
      } catch (error) {
        console.log('error', error);
        return Promise.resolve(null); //   const errorCode = error.response?.data.message[0].messages[0].id;
        //   const errorMessage =
        //     error.response?.data.message[0].messages[0].message;
        //   console.log("errorCode : ", errorCode);
        //   console.log("errorMessage : ", errorMessage);
        //   return Promise.reject(
        //     `/auth/signin?form=${credentials.formType}&errorCode=${errorCode}&errorMessage=${errorMessage}`
        //   );
      }
    }
  })],
  session: {
    jwt: true
  },
  jwt: {// secret: process.env.JWT_SECRET
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      // console.log("signIn user", user);
      // console.log("signIn account", account);
      // console.log("signIn profile", profile);
      user.role = await user.role;
      user.userId = await user.id;
      return true;
    },
    redirect: async (url, baseUrl) => {
      // console.log('url', url);
      // console.log('baseUrl', baseUrl);
      return url.startsWith(baseUrl) ? Promise.resolve(url) : Promise.resolve(baseUrl);
    },
    session: async (session, user) => {
      // console.log("session", session);
      // console.log("session user", user);
      if (user.apiToken) {
        session.apiToken = user.apiToken;
        session.role = user.role;
        session.userId = user.userId;
      }

      return session;
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      // console.log("jwt token", token);
      // console.log("jwt user 222222", user);
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.apiToken = user.apiToken;
        token.role = user.role;
        token.userId = user.id;
      }

      return token;
    }
  },
  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},
  //   pages: {
  //     signIn: '/login'
  //   },
  // Enable debug messages in the console if you are having problems
  debug: true
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJpZCIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImFwaVRva2VuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlc3Npb24iLCJqd3QiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJyb2xlIiwidXNlcklkIiwicmVkaXJlY3QiLCJ1cmwiLCJiYXNlVXJsIiwic3RhcnRzV2l0aCIsInRva2VuIiwiaXNOZXdVc2VyIiwiaXNTaWduSW4iLCJldmVudHMiLCJkZWJ1ZyIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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SixJQUFJLENBQUNmLEVBQXBCO0FBQ0E7O0FBQ0QsYUFBT3dCLEtBQVA7QUFDQTtBQWxDUyxHQXBDSTtBQXlFZjtBQUNBO0FBQ0FHLFFBQU0sRUFBRSxFQTNFTztBQTRFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxPQUFLLEVBQUU7QUFoRlEsQ0FBaEI7QUFtRmUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjQyxnREFBUSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBV2xDLE9BQVgsQ0FBckMsRTs7Ozs7Ozs7Ozs7QUN6RkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiKTtcbiIsImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZWFjaCBvcHRpb24gKGFuZCBhIGZ1bGwgbGlzdCBvZiBvcHRpb25zKSBnbyB0b1xyXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcblx0Ly8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vcHJvdmlkZXJzXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xyXG5cdFx0XHRpZDogJ2NoZWZmeUNyZWRlbnRpYWxzJyxcclxuXHRcdFx0bmFtZTogJ0NoZWZmeUNyZWRlbnRpYWxzJyxcclxuXHRcdFx0YXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJjcmVkZW50aWFscyA6XCIsIGNyZWRlbnRpYWxzKTtcclxuXHRcdFx0XHRcdGlmIChjcmVkZW50aWFscy5hcGlUb2tlbikge1xyXG5cdFx0XHRcdFx0XHQvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1RcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShjcmVkZW50aWFscyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2FwaVRva2VuIHRva2VuIGlzIG5vdCBkZWZpbmUnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuXHRcdFx0XHRcdC8vICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IucmVzcG9uc2U/LmRhdGEubWVzc2FnZVswXS5tZXNzYWdlc1swXS5pZDtcclxuXHRcdFx0XHRcdC8vICAgY29uc3QgZXJyb3JNZXNzYWdlID1cclxuXHRcdFx0XHRcdC8vICAgICBlcnJvci5yZXNwb25zZT8uZGF0YS5tZXNzYWdlWzBdLm1lc3NhZ2VzWzBdLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKFwiZXJyb3JDb2RlIDogXCIsIGVycm9yQ29kZSk7XHJcblx0XHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKFwiZXJyb3JNZXNzYWdlIDogXCIsIGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHQvLyAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuXHRcdFx0XHRcdC8vICAgICBgL2F1dGgvc2lnbmluP2Zvcm09JHtjcmVkZW50aWFscy5mb3JtVHlwZX0mZXJyb3JDb2RlPSR7ZXJyb3JDb2RlfSZlcnJvck1lc3NhZ2U9JHtlcnJvck1lc3NhZ2V9YFxyXG5cdFx0XHRcdFx0Ly8gICApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdF0sXHJcblx0c2Vzc2lvbjoge1xyXG5cdFx0and0OiB0cnVlLFxyXG5cdH0sXHJcblx0and0OiB7XHJcblx0XHQvLyBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcclxuXHR9LFxyXG5cdGNhbGxiYWNrczoge1xyXG5cdFx0c2lnbkluOiBhc3luYyAodXNlciwgYWNjb3VudCwgcHJvZmlsZSkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcInNpZ25JbiB1c2VyXCIsIHVzZXIpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcInNpZ25JbiBhY2NvdW50XCIsIGFjY291bnQpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcInNpZ25JbiBwcm9maWxlXCIsIHByb2ZpbGUpO1xyXG5cdFx0XHR1c2VyLnJvbGUgPSBhd2FpdCB1c2VyLnJvbGU7XHJcblx0XHRcdHVzZXIudXNlcklkID0gYXdhaXQgdXNlci5pZDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cdFx0cmVkaXJlY3Q6IGFzeW5jICh1cmwsIGJhc2VVcmwpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3VybCcsIHVybCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdiYXNlVXJsJywgYmFzZVVybCk7XHJcblx0XHRcdHJldHVybiB1cmwuc3RhcnRzV2l0aChiYXNlVXJsKSA/IFByb21pc2UucmVzb2x2ZSh1cmwpIDogUHJvbWlzZS5yZXNvbHZlKGJhc2VVcmwpO1xyXG5cdFx0fSxcclxuXHRcdHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwic2Vzc2lvblwiLCBzZXNzaW9uKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJzZXNzaW9uIHVzZXJcIiwgdXNlcik7XHJcblx0XHRcdGlmICh1c2VyLmFwaVRva2VuKSB7XHJcblx0XHRcdFx0c2Vzc2lvbi5hcGlUb2tlbiA9IHVzZXIuYXBpVG9rZW47XHJcblx0XHRcdFx0c2Vzc2lvbi5yb2xlID0gdXNlci5yb2xlO1xyXG5cdFx0XHRcdHNlc3Npb24udXNlcklkID0gdXNlci51c2VySWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHNlc3Npb247XHJcblx0XHR9LFxyXG5cdFx0and0OiBhc3luYyAodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImp3dCB0b2tlblwiLCB0b2tlbik7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiand0IHVzZXIgMjIyMjIyXCIsIHVzZXIpO1xyXG5cdFx0XHRjb25zdCBpc1NpZ25JbiA9IHVzZXIgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdGlmIChpc1NpZ25Jbikge1xyXG5cdFx0XHRcdHRva2VuLmFwaVRva2VuID0gdXNlci5hcGlUb2tlbjtcclxuXHRcdFx0XHR0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xyXG5cdFx0XHRcdHRva2VuLnVzZXJJZCA9IHVzZXIuaWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRva2VuO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHQvLyBFdmVudHMgYXJlIHVzZWZ1bCBmb3IgbG9nZ2luZ1xyXG5cdC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL2V2ZW50c1xyXG5cdGV2ZW50czoge30sXHJcblx0Ly8gICBwYWdlczoge1xyXG5cdC8vICAgICBzaWduSW46ICcvbG9naW4nXHJcblx0Ly8gICB9LFxyXG5cdC8vIEVuYWJsZSBkZWJ1ZyBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBpZiB5b3UgYXJlIGhhdmluZyBwcm9ibGVtc1xyXG5cdGRlYnVnOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=