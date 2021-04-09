webpackHotUpdate_N_E("pages/newincheffy",{

/***/ "./src/components/Layouts/new-in-cheffy/NewOnCheffy.jsx":
/*!**************************************************************!*\
  !*** ./src/components/Layouts/new-in-cheffy/NewOnCheffy.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _redux_actions_food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/food */ "./src/redux/actions/food/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Skyslit\\Web Projects\\Freelance\\cheffy\\src\\components\\Layouts\\new-in-cheffy\\NewOnCheffy.jsx";






function Category(props) {
  var _this = this;

  //const router = useRouter();
  ///const [categoriesArray, setCategoriesArray] = useState([]);
  // async function getCategories() {
  //   const categories = await props.dispatch(foodCategories());
  //   setCategoriesArray({ data: categories.data });
  //   console.log(categoriesArray);
  // }
  // useEffect(() => {
  //   getCategories();
  // }, []);
  var categoriesArray = props.categoriesArray;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-auto mt-10",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "mt-20 d-flex justify-center align-center relative",
      style: {
        minHeight: "317px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/images/Rectangle5.png",
        alt: "",
        className: "top-0 bottom-0 h-3/5 md:h-4/5 md:my-auto my-auto",
        style: {
          position: "absolute",
          minWidth: "100%",
          zIndex: -1,
          filter: "brightness(50%)"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "cheffy-label text-white",
        style: {
          fontSize: 48
        },
        children: "Thanksgiving Dinner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-3/5 p-6 md:p-16",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-5 flex justify-end",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-space-between mr-19",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sort-button ml-3 d-flex align-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mr-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/sort.png",
                width: "20px",
                alt: "plus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), " ", "Sort"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sort-button ml-3 d-flex align-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mr-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/dietry.png",
                width: "20px",
                alt: "plus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), "Dietry"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sort-button ml-3 d-flex align-center mr-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mr-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/dollor.png",
                width: "20px",
                alt: "plus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), " ", "Price Range"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-5 flex md:flex-row flex-col md:justify-end justify-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sort-button md:ml-3 d-flex align-center md:mb-0 mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/sort.png",
              width: "20px",
              alt: "plus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), " ", "Sort"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sort-button md:ml-3 d-flex align-center md:mb-0 mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/dietry.png",
              width: "20px",
              alt: "plus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), "Dietry"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sort-button md:ml-3 d-flex align-center mb-4 md:mb-0 md:mr-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/dollor.png",
              width: "20px",
              alt: "plus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), " ", "Price Range"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "margin-top-50 ml-5 align-items-center",
        children: categoriesArray.data && categoriesArray.data.map(function (category, i) {
          return i < 8 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            className: "margin-bottom-40 position-relative",
            style: {
              height: 240
            },
            md: 12,
            xs: 24,
            xl: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "category-border",
              style: {
                backgroundImage: "url(".concat(category.url, ")"),
                borderRadius: 10,
                height: "100%",
                filter: "brightness(50%)"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/category/".concat(encodeURIComponent(category["id"]), "/plates"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "div-width text-white flex align-center justify-center category-border",
                style: {
                  position: "absolute",
                  top: 0,
                  height: "100%",
                  borderRadius: 10
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "category-item-label",
                  children: category.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 19
            }, _this)]
          }, category.id, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this) : "";
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "ltr",
        className: "flex items-center justify-center pt-10 load-more",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white flex items-center bg-red-500 py-4 px-10 text-lg",
          children: ["Load More ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdArrowDropdown"], {
            className: "text-3xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9uZXctaW4tY2hlZmZ5L05ld09uQ2hlZmZ5LmpzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsInByb3BzIiwiY2F0ZWdvcmllc0FycmF5IiwibWluSGVpZ2h0IiwicG9zaXRpb24iLCJtaW5XaWR0aCIsInpJbmRleCIsImZpbHRlciIsImZvbnRTaXplIiwiZGF0YSIsIm1hcCIsImNhdGVnb3J5IiwiaSIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsInVybCIsImJvcmRlclJhZGl1cyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvcCIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdkI7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFidUIsTUFjZkMsZUFkZSxHQWNLRCxLQWRMLENBY2ZDLGVBZGU7QUFldkIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLG1EQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGlCQUFTLEVBQUU7QUFETixPQUZUO0FBQUEsOEJBTUU7QUFDRSxXQUFHLEVBQUMsd0JBRE47QUFFRSxXQUFHLEVBQUMsRUFGTjtBQUdFLGlCQUFTLEVBQUMsa0RBSFo7QUFJRSxhQUFLLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxVQURMO0FBRUxDLGtCQUFRLEVBQUUsTUFGTDtBQUdMQyxnQkFBTSxFQUFFLENBQUMsQ0FISjtBQUlMQyxnQkFBTSxFQUFFO0FBSkg7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFpQkU7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQXdDLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FB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a0RBRlo7QUFBQSwrQkFJRTtBQUFHLG1CQUFTLEVBQUMsNERBQWI7QUFBQSxnREFDWSxxRUFBQyxnRUFBRDtBQUFtQixxQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1SUQ7O0tBdEpRcEIsUTtBQTZKTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3aW5jaGVmZnkuNDJmNTM5NDE0OGE5YzViYzM1NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgSW9NZEFycm93RHJvcGRvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgZm9vZENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9mb29kXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeShwcm9wcykge1xyXG4gIC8vY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vL2NvbnN0IFtjYXRlZ29yaWVzQXJyYXksIHNldENhdGVnb3JpZXNBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgLy8gICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgcHJvcHMuZGlzcGF0Y2goZm9vZENhdGVnb3JpZXMoKSk7XHJcbiAgLy8gICBzZXRDYXRlZ29yaWVzQXJyYXkoeyBkYXRhOiBjYXRlZ29yaWVzLmRhdGEgfSk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzQXJyYXkpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGdldENhdGVnb3JpZXMoKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgY29uc3QgeyBjYXRlZ29yaWVzQXJyYXkgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtYXV0byBtdC0xMFwiPlxyXG4gICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMjAgZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciByZWxhdGl2ZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1pbkhlaWdodDogXCIzMTdweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL1JlY3RhbmdsZTUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtMCBib3R0b20tMCBoLTMvNSBtZDpoLTQvNSBtZDpteS1hdXRvIG15LWF1dG9cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IFwiYnJpZ2h0bmVzcyg1MCUpXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNoZWZmeS1sYWJlbCB0ZXh0LXdoaXRlXCIgc3R5bGU9e3sgZm9udFNpemU6IDQ4IH19PlxyXG4gICAgICAgICAgVGhhbmtzZ2l2aW5nIERpbm5lclxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMvNSBwLTYgbWQ6cC0xNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNSBmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbXItMTlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvbiBtbC0zIGQtZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29ydC5wbmdcIiB3aWR0aD1cIjIwcHhcIiBhbHQ9XCJwbHVzXCIgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgIFNvcnRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1idXR0b24gbWwtMyBkLWZsZXggYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2RpZXRyeS5wbmdcIiB3aWR0aD1cIjIwcHhcIiBhbHQ9XCJwbHVzXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIERpZXRyeVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvbiBtbC0zIGQtZmxleCBhbGlnbi1jZW50ZXIgbXItM1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb2xsb3IucG5nXCIgd2lkdGg9XCIyMHB4XCIgYWx0PVwicGx1c1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICBQcmljZSBSYW5nZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBtZDpqdXN0aWZ5LWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvbiBtZDptbC0zIGQtZmxleCBhbGlnbi1jZW50ZXIgbWQ6bWItMCBtYi00XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29ydC5wbmdcIiB3aWR0aD1cIjIwcHhcIiBhbHQ9XCJwbHVzXCIgLz5cclxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICBTb3J0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvbiBtZDptbC0zIGQtZmxleCBhbGlnbi1jZW50ZXIgbWQ6bWItMCBtYi00XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZGlldHJ5LnBuZ1wiIHdpZHRoPVwiMjBweFwiIGFsdD1cInBsdXNcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIERpZXRyeVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1idXR0b24gbWQ6bWwtMyBkLWZsZXggYWxpZ24tY2VudGVyIG1iLTQgbWQ6bWItMCBtZDptci0zXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZG9sbG9yLnBuZ1wiIHdpZHRoPVwiMjBweFwiIGFsdD1cInBsdXNcIiAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgIFByaWNlIFJhbmdlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1hcmdpbi10b3AtNTAgbWwtNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzQXJyYXkuZGF0YSAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzQXJyYXkuZGF0YS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGkgPCA4ID8gKFxyXG4gICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW4tYm90dG9tLTQwIHBvc2l0aW9uLXJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNDAgfX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cclxuICAgICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgICAgIHhsPXs2fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcnktYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2F0ZWdvcnkudXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYnJpZ2h0bmVzcyg1MCUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGVmZnktZGVzY3JpcHRpb24gZGl2LXdpZHRoIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3Rhci5wbmdcIiB3aWR0aD1cIjIwcHhcIiBhbHQ9XCJwbHVzXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD40LjUgb2YgMjMwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNhdGVnb3J5W1wiaWRcIl0pfS9wbGF0ZXNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2LXdpZHRoIHRleHQtd2hpdGUgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgY2F0ZWdvcnktYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhdGVnb3J5LWl0ZW0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGVmZnktZGVzY3JpcHRpb24gZGl2LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+MTUtMjAgbWluIC4gRGVsaXZlcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkaXI9XCJsdHJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtMTAgbG9hZC1tb3JlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGJnLXJlZC01MDAgcHktNCBweC0xMCB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgIExvYWQgTW9yZSA8SW9NZEFycm93RHJvcGRvd24gY2xhc3NOYW1lPVwidGV4dC0zeGxcIiAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=