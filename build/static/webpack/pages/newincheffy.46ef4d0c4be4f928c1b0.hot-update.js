webpackHotUpdate_N_E("pages/newincheffy",{

/***/ "./src/components/Layouts/home/NewOnCheffy.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Layouts/home/NewOnCheffy.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/food */ "./src/redux/actions/food/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\user\\Desktop\\Skyslit\\Web Projects\\Freelance\\cheffy\\src\\components\\Layouts\\home\\NewOnCheffy.jsx",
    _this = undefined;








var StarIcon = function StarIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    className: "mr-2 w-4 h-4",
    src: "/images/star.png",
    alt: "rating"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, _this);
};

_c = StarIcon;

var ClockIcon = function ClockIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    className: "mr-2 w-4 h-4",
    src: "/images/clock.png",
    alt: "time"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, _this);
};

_c2 = ClockIcon;

var TruckIcon = function TruckIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    className: "mr-2",
    src: "/images/truck.png",
    width: "20px",
    alt: "delivery"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_c3 = TruckIcon;

var NewOnCheffy = function NewOnCheffy(_ref) {
  var _new = _ref._new;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "food-grid mt-16 mb-10",
      gutter: 32,
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "font-extrabold text-5xl xs:text-4xl sm:text-4xl lg:text-5xl",
          children: "New on jhgh Cheffy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "food-grid",
      gutter: [32, 48],
      justify: "center",
      align: "top",
      children: _new && _new.map(function (data, index) {
        var _data$PlateImages$;

        return index < 4 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
          xxl: 6,
          className: "new-food-card",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/food-detail/".concat(encodeURIComponent(data.id)),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                justify: "center",
                align: "middle",
                className: "new-food-image",
                style: {
                  backgroundImage: "url(".concat((_data$PlateImages$ = data.PlateImages[0]) === null || _data$PlateImages$ === void 0 ? void 0 : _data$PlateImages$.url, ")")
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                className: "my-5",
                justify: "space-between",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                  xs: 8,
                  sm: 6,
                  md: 8,
                  lg: 8,
                  xl: 6,
                  xxl: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    align: "middle",
                    justify: "start",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StarIcon, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "4.5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                  xs: 8,
                  sm: 9,
                  md: 8,
                  lg: 8,
                  xl: 9,
                  xxl: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    align: "middle",
                    justify: "start",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClockIcon, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "15-20 min"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                  xs: 8,
                  sm: 9,
                  md: 8,
                  lg: 8,
                  xl: 9,
                  xxl: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    align: "middle",
                    justify: "end",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TruckIcon, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Delivery"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "label",
                  children: data.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, _this)
        }, data.id, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }, _this) : "";
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c4 = NewOnCheffy;
/* harmony default export */ __webpack_exports__["default"] = (NewOnCheffy);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "StarIcon");
$RefreshReg$(_c2, "ClockIcon");
$RefreshReg$(_c3, "TruckIcon");
$RefreshReg$(_c4, "NewOnCheffy");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9ob21lL05ld09uQ2hlZmZ5LmpzeCJdLCJuYW1lcyI6WyJTdGFySWNvbiIsIkNsb2NrSWNvbiIsIlRydWNrSWNvbiIsIk5ld09uQ2hlZmZ5IiwiX25ldyIsIm1hcCIsImRhdGEiLCJpbmRleCIsImVuY29kZVVSSUNvbXBvbmVudCIsImlkIiwiYmFja2dyb3VuZEltYWdlIiwiUGxhdGVJbWFnZXMiLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsc0JBQU87QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsa0JBQWxDO0FBQXFELE9BQUcsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNQSxROztBQUdOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsc0JBQU87QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsbUJBQWxDO0FBQXNELE9BQUcsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztNQUFNQSxTOztBQUdOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixPQUFHLEVBQUMsbUJBQTFCO0FBQThDLFNBQUssRUFBQyxNQUFwRDtBQUEyRCxPQUFHLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0FKRDs7TUFBTUEsUzs7QUFNTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hDLHNCQUNFO0FBQUEsNEJB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QUFoQjtBQUFtQixvQkFBRSxFQUFFLENBQXZCO0FBQTBCLG9CQUFFLEVBQUUsQ0FBOUI7QUFBaUMsb0JBQUUsRUFBRSxDQUFyQztBQUF3QyxxQkFBRyxFQUFFLENBQTdDO0FBQUEseUNBQ0UscUVBQUMsd0NBQUQ7QUFBSyx5QkFBSyxFQUFDLFFBQVg7QUFBb0IsMkJBQU8sRUFBQyxLQUE1QjtBQUFBLDRDQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGLGVBK0JFLHFFQUFDLHdDQUFEO0FBQUEsdUNBQ0U7QUFBTywyQkFBUyxFQUFDLE9BQWpCO0FBQUEsNEJBQTBCTixJQUFJLENBQUNPO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsV0FPT1AsSUFBSSxDQUFDRyxFQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssR0FrREwsRUFsREY7QUFvREQsT0FyREQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQSxrQkFERjtBQXlFRCxDQTFFRDs7TUFBTU4sVztBQTRFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3aW5jaGVmZnkuNDZlZjRkMGM0YmU0ZjkyOGMxYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBwb3B1bGFyQW5kTmV3IH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvZm9vZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IFN0YXJJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIm1yLTIgdy00IGgtNFwiIHNyYz1cIi9pbWFnZXMvc3Rhci5wbmdcIiBhbHQ9XCJyYXRpbmdcIiAvPjtcclxufTtcclxuY29uc3QgQ2xvY2tJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIm1yLTIgdy00IGgtNFwiIHNyYz1cIi9pbWFnZXMvY2xvY2sucG5nXCIgYWx0PVwidGltZVwiIC8+O1xyXG59O1xyXG5jb25zdCBUcnVja0ljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMlwiIHNyYz1cIi9pbWFnZXMvdHJ1Y2sucG5nXCIgd2lkdGg9XCIyMHB4XCIgYWx0PVwiZGVsaXZlcnlcIiAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBOZXdPbkNoZWZmeSA9ICh7IF9uZXcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vZC1ncmlkIG10LTE2IG1iLTEwXCJcclxuICAgICAgICBndXR0ZXI9ezMyfVxyXG4gICAgICAgIGp1c3RpZnk9XCJzdGFydFwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC01eGwgeHM6dGV4dC00eGwgc206dGV4dC00eGwgbGc6dGV4dC01eGxcIj5cclxuICAgICAgICAgICAgTmV3IG9uIGpoZ2ggQ2hlZmZ5XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJmb29kLWdyaWRcIiBndXR0ZXI9e1szMiwgNDhdfSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICB7X25ldyAmJlxyXG4gICAgICAgICAgX25ldy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA8IDQgPyAoXHJcbiAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgICAgICB4bD17Nn1cclxuICAgICAgICAgICAgICAgIHh4bD17Nn1cclxuICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy1mb29kLWNhcmRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZm9vZC1kZXRhaWwvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YS5pZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV3LWZvb2QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5QbGF0ZUltYWdlc1swXT8udXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17ZGF0YS5QbGF0ZUltYWdlc1swXT8udXJsfSB3aWR0aD17MzUwfSBoZWlnaHQ9ezI1MH0gbGF5b3V0PVwiZml4ZWRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZFwiICBhbHQ9XCJJbWFnZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXktNVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBzbT17Nn0gbWQ9ezh9IGxnPXs4fSB4bD17Nn0geHhsPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGp1c3RpZnk9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD40LjU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17OH0gc209ezl9IG1kPXs4fSBsZz17OH0geGw9ezl9IHh4bD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBqdXN0aWZ5PVwic3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjE1LTIwIG1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBzbT17OX0gbWQ9ezh9IGxnPXs4fSB4bD17OX0geHhsPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGp1c3RpZnk9XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJ1Y2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlbGl2ZXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+e2RhdGEubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld09uQ2hlZmZ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9