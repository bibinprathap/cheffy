webpackHotUpdate_N_E("pages/newincheffy",{

/***/ "./pages/newincheffy/index.jsx":
/*!*************************************!*\
  !*** ./pages/newincheffy/index.jsx ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_Layouts_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Layouts/Header/HomeHeader */ "./src/components/Layouts/Header/HomeHeader.jsx");
/* harmony import */ var _src_components_Layouts_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Layouts/home */ "./src/components/Layouts/home/index.js");
/* harmony import */ var _src_components_Layouts_category_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Layouts/category/Category */ "./src/components/Layouts/category/Category.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Skyslit\\Web Projects\\Freelance\\cheffy\\pages\\newincheffy\\index.jsx",
    _s = $RefreshSig$();








function Index(props) {
  _s();

  var categoriesArray = props.categoriesArray;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cheffy - New In Cheffy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Layouts_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Layouts_home__WEBPACK_IMPORTED_MODULE_4__["FoodFooter"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Index, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = Index;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3aW5jaGVmZnkvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjYXRlZ29yaWVzQXJyYXkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsTUFDWkMsZUFEWSxHQUNRRCxLQURSLENBQ1pDLGVBRFk7QUFFcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVFFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQWZRSixLO1VBRVVJLHVEOzs7S0FGVkosSzs7QUEwQk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld2luY2hlZmZ5LjhhOWIxYjNjYWRkOTdiZjEwYzY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBGb29kSGVhZGVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0hlYWRlci9Ib21lSGVhZGVyXCI7XHJcbmltcG9ydCB7IEZvb2RGb290ZXIgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9ob21lXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9jYXRlZ29yeS9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGNoZWZmQXBpIH0gZnJvbSAnLi4vLi4vc3JjL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2F0ZWdvcmllc0FycmF5IH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIENoZWZmeSAtIE5ldyBJbiBDaGVmZnlcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxGb29kSGVhZGVyIC8+XHJcbiAgICAgXHJcbiAgICAgIDxGb29kRm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIC8vd2UgYXJlICBjYWNoZSB0aGlzIGFwaSByZXNwb25jZSBmb3IgMS8yNCBob3VyIFxyXG4gIC8vaW4gdGhlIG5vZGUgc2VydmVyIGZvciBhdm9pZGluZyB0aGUgcmVwZWF0ZWQgYXBpIGNhbGwgYW5kIGltcHJvdmluZyB0aGVyIHBlcmZvcm1lbmNlIFxyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBjaGVmZkFwaS5nZXRmb29kQ2F0ZWdvcmllcygpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXRlZ29yaWVzQXJyYXk6IHsgZGF0YTogY2F0ZWdvcmllcy5kYXRhIH0sXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==