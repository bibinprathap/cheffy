webpackHotUpdate_N_E("pages/newincheffy",{

/***/ "./src/components/Layouts/new-in-cheffy/NewOnCheffyContent.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/Layouts/new-in-cheffy/NewOnCheffyContent.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _utils_axios_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/axios-config */ "./src/utils/axios-config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\user\\Desktop\\Skyslit\\Web Projects\\Freelance\\cheffy\\src\\components\\Layouts\\new-in-cheffy\\NewOnCheffyContent.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"].TabPane;

var KitchenCol = function KitchenCol(_ref) {
  var name = _ref.name,
      rating = _ref.rating,
      count = _ref.count,
      price = _ref.price,
      price_type = _ref.price_type,
      imgURL = _ref.imgURL;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "kitchen-card pb-4",
      dir: "ltr",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: imgURL,
        className: "w-100 h-36"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "pt-2 font-normal text-lg",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "flex items-center text-base pt-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StarFilled"], {
          className: "pr-1 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), "".concat(rating, " (").concat(count, ")"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "flex items-center pl-6",
          dir: "ltr",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ClockCircleFilled"], {
            className: "pr-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), "$".concat(price), " - ", price_type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = KitchenCol;

var KitchenContent = function KitchenContent() {
  _s();

  var Title = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title,
      Paragraph = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Paragraph,
      Text = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      kitchens = _useState[0],
      setKitchens = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = "https://cheffyus-api.herokuapp.com/kitchens/";
            _context.next = 4;
            return _utils_axios_config__WEBPACK_IMPORTED_MODULE_7__["default"].get(url);

          case 4:
            res = _context.sent;
            setKitchens(res);
            console.log("Added");
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  })), []);

  var showKitchen = function showKitchen(kname, kId) {
    console.log(kId);
    router.push("/kitchen/".concat(kname, "/").concat(kId));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "mt-20 pt-2 pb-4 mx-auto w-3/5",
      align: "middle",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        span: 24,
        className: "flex justify-start items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeFilled"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
          strong: true,
          className: "text-black ml-4",
          children: "Thanksgiving Dinner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "w-full bg-fixed bg-cover bg-no-repeat bg-center relative",
      style: {
        backgroundImage: "url(/images/background.jpg)",
        height: "30vh",
        backgroundSize: "100%",
        filter: "brightness(50%)"
      },
      justify: "center",
      align: "middle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "absolute w-full",
      style: {
        height: "30vh",
        transform: "translateY(-100%)"
      },
      justify: "center",
      align: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
          level: 1,
          strong: true,
          className: "block text-white text-5xl",
          children: "Thanksgiving Dinner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
          level: 1,
          strong: true,
          className: "block text-white text-5xl",
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "py-20 w-4/5 md:w-3/5 mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
        defaultActiveKey: "relavence",
        className: "font-bold",
        size: "large",
        direction: "rtl",
        moreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MenuOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Filters",
          children: "Filters Tab"
        }, "filters", false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Ratings",
          children: "Ratings Tab"
        }, "ratings", false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Relavence",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "kitchen-item ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
              gutter: [16, 16],
              className: "flex pt-4",
              dir: "ltr",
              children: kitchens && kitchens.map(function (item, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                  onClick: function onClick() {
                    return showKitchen(item["kitchen"]["name"], item["kitchen"]["id"]);
                  },
                  className: "cursor-pointer",
                  span: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(KitchenCol, {
                    name: item["kitchen"]["name"],
                    imgURL: item["kitchen"]["image_urls"][0],
                    rating: "4.3",
                    count: item["kitchen"]["likes"],
                    price: item["kitchen"]["price_per_time"],
                    price_type: item["kitchen"]["time_type"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            dir: "ltr",
            className: "flex items-center justify-center pt-10 load-more",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "text-white flex items-center bg-red-500 py-4 px-10 text-lg",
              children: ["Load More ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdArrowDropdown"], {
                className: "text-3xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 27
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)]
        }, "relavence", true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(KitchenContent, "DcbURo+rzZLnKO6JZHpBiI7Aw9o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c2 = KitchenContent;
/* harmony default export */ __webpack_exports__["default"] = (KitchenContent);

var _c, _c2;

$RefreshReg$(_c, "KitchenCol");
$RefreshReg$(_c2, "KitchenContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9uZXctaW4tY2hlZmZ5L05ld09uQ2hlZmZ5Q29udGVudC5qc3giXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJLaXRjaGVuQ29sIiwibmFtZSIsInJhdGluZyIsImNvdW50IiwicHJpY2UiLCJwcmljZV90eXBlIiwiaW1nVVJMIiwiS2l0Y2hlbkNvbnRlbnQiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJQYXJhZ3JhcGgiLCJUZXh0IiwidXNlU3RhdGUiLCJraXRjaGVucyIsInNldEtpdGNoZW5zIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXJsIiwiYXhpb3NDbGllbnQiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd0tpdGNoZW4iLCJrbmFtZSIsImtJZCIsInB1c2giLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZpbHRlciIsInRyYW5zZm9ybSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0Q7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLE1BQStDLFFBQS9DQSxNQUErQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsRUFBQyxLQUF2QztBQUFBLDhCQUNFO0FB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RTtBQUNFLGVBQUcsRUFBQyxLQUROO0FBRUUscUJBQVMsRUFBQyxrREFGWjtBQUFBLG1DQUlFO0FBQUcsdUJBQVMsRUFBQyw0REFBYjtBQUFBLG9EQUNZLHFFQUFDLGdFQUFEO0FBQW1CLHlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCRjtBQUFBLFdBQWEsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDRjtBQUFBLGtCQURGO0FBOEZELENBbkhEOztHQUFNM0IsYztVQUdXUyxxRDs7O01BSFhULGM7QUFxSFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld2luY2hlZmZ5LmM4MjEzN2Y1NzYwZjAzYWM2NjQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgQ2FyZCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEJ1dHRvbixcclxuICBHcmlkLFxyXG4gIElucHV0LFxyXG4gIFNwYWNlLFxyXG4gIERpdmlkZXIsXHJcbiAgVGFicyxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVGaWxsZWQsXHJcbiAgTWVudU91dGxpbmVkLFxyXG4gIFN0YXJGaWxsZWQsXHJcbiAgQ2xvY2tDaXJjbGVGaWxsZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IElvTWRBcnJvd0Ryb3Bkb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBheGlvc0NsaWVudCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYXhpb3MtY29uZmlnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcblxyXG5jb25zdCBLaXRjaGVuQ29sID0gKHsgbmFtZSwgcmF0aW5nLCBjb3VudCwgcHJpY2UsIHByaWNlX3R5cGUsIGltZ1VSTCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0Y2hlbi1jYXJkIHBiLTRcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICA8aW1nIHNyYz17aW1nVVJMfSBjbGFzc05hbWU9XCJ3LTEwMCBoLTM2XCIgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yIGZvbnQtbm9ybWFsIHRleHQtbGdcIj57bmFtZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIHB0LTJcIj5cclxuICAgICAgICAgIDxTdGFyRmlsbGVkIGNsYXNzTmFtZT1cInByLTEgdGV4dC15ZWxsb3ctNTAwXCIgLz5cclxuICAgICAgICAgIHtgJHtyYXRpbmd9ICgke2NvdW50fSlgfVxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGwtNlwiIGRpcj1cImx0clwiPlxyXG4gICAgICAgICAgICA8Q2xvY2tDaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XHJcbiAgICAgICAgICAgIHtgJCR7cHJpY2V9YH0gLSB7cHJpY2VfdHlwZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEtpdGNoZW5Db250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgVGl0bGUsIFBhcmFncmFwaCwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuICBjb25zdCBba2l0Y2hlbnMsIHNldEtpdGNoZW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9jaGVmZnl1cy1hcGkuaGVyb2t1YXBwLmNvbS9raXRjaGVucy9cIjtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NDbGllbnQuZ2V0KHVybCk7XHJcbiAgICAgIHNldEtpdGNoZW5zKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWRcIik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0tpdGNoZW4gPSAoa25hbWUsIGtJZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coa0lkKTtcclxuICAgIHJvdXRlci5wdXNoKGAva2l0Y2hlbi8ke2tuYW1lfS8ke2tJZH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yMCBwdC0yIHBiLTQgbXgtYXV0byB3LTMvNVwiIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEhvbWVGaWxsZWQgLz5cclxuICAgICAgICAgIDxUZXh0IHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1sLTRcIj5cclxuICAgICAgICAgICAgVGhhbmtzZ2l2aW5nIERpbm5lclxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvd1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1maXhlZCBiZy1jb3ZlciBiZy1uby1yZXBlYXQgYmctY2VudGVyIHJlbGF0aXZlXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvYmFja2dyb3VuZC5qcGcpYCxcclxuICAgICAgICAgIGhlaWdodDogXCIzMHZoXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlXCIsXHJcbiAgICAgICAgICBmaWx0ZXI6IFwiYnJpZ2h0bmVzcyg1MCUpXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgID48L1Jvdz5cclxuICAgICAgPFJvd1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbFwiXHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwdmhcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIgfX1cclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPFRleHQgbGV2ZWw9ezF9IHN0cm9uZyBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIHRleHQtNXhsXCI+XHJcbiAgICAgICAgICAgIFRoYW5rc2dpdmluZyBEaW5uZXJcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgIDxUZXh0IGxldmVsPXsxfSBzdHJvbmcgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSB0ZXh0LTV4bFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LjwvVGV4dD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIwIHctNC81IG1kOnctMy81IG14LWF1dG9cIj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT17XCJyZWxhdmVuY2VcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicnRsXCJcclxuICAgICAgICAgIG1vcmVJY29uPXs8TWVudU91dGxpbmVkIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cImZpbHRlcnNcIiB0YWI9XCJGaWx0ZXJzXCI+XHJcbiAgICAgICAgICAgIEZpbHRlcnMgVGFiXHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJyYXRpbmdzXCIgdGFiPVwiUmF0aW5nc1wiPlxyXG4gICAgICAgICAgICBSYXRpbmdzIFRhYlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUga2V5PVwicmVsYXZlbmNlXCIgdGFiPVwiUmVsYXZlbmNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0Y2hlbi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gY2xhc3NOYW1lPVwiZmxleCBwdC00XCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgICAgICAgICB7a2l0Y2hlbnMgJiZcclxuICAgICAgICAgICAgICAgICAga2l0Y2hlbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0tpdGNoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wia2l0Y2hlblwiXVtcIm5hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wia2l0Y2hlblwiXVtcImlkXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbj17OH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEtpdGNoZW5Db2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtW1wia2l0Y2hlblwiXVtcIm5hbWVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVVJMPXtpdGVtW1wia2l0Y2hlblwiXVtcImltYWdlX3VybHNcIl1bMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtcIjQuM1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtpdGVtW1wia2l0Y2hlblwiXVtcImxpa2VzXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtW1wia2l0Y2hlblwiXVtcInByaWNlX3Blcl90aW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlX3R5cGU9e2l0ZW1bXCJraXRjaGVuXCJdW1widGltZV90eXBlXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZGlyPVwibHRyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC0xMCBsb2FkLW1vcmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBiZy1yZWQtNTAwIHB5LTQgcHgtMTAgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgTG9hZCBNb3JlIDxJb01kQXJyb3dEcm9wZG93biBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtpdGNoZW5Db250ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9