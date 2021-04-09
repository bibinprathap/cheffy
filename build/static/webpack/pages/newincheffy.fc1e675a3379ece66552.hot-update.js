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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: ["      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
              level: 1,
              strong: true,
              className: "block text-white text-5xl",
              children: "Thanksgiving Dinner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 22
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
              level: 1,
              strong: true,
              className: "block text-white",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "py-20 w-4/5 md:w-3/5 mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
        defaultActiveKey: "relavence",
        className: "font-bold",
        size: "large",
        direction: "rtl",
        moreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MenuOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, _this),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Filters",
          children: "Filters Tab"
        }, "filters", false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Ratings",
          children: "Ratings Tab"
        }, "ratings", false, {
          fileName: _jsxFileName,
          lineNumber: 117,
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
                    lineNumber: 136,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
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
                lineNumber: 154,
                columnNumber: 27
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)]
        }, "relavence", true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9uZXctaW4tY2hlZmZ5L05ld09uQ2hlZmZ5Q29udGVudC5qc3giXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJLaXRjaGVuQ29sIiwibmFtZSIsInJhdGluZyIsImNvdW50IiwicHJpY2UiLCJwcmljZV90eXBlIiwiaW1nVVJMIiwiS2l0Y2hlbkNvbnRlbnQiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJQYXJhZ3JhcGgiLCJUZXh0IiwidXNlU3RhdGUiLCJraXRjaGVucyIsInNldEtpdGNoZW5zIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXJsIiwiYXhpb3NDbGllbnQiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd0tpdGNoZW4iLCJrbmFtZSIsImtJZCIsInB1c2giLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZpbHRlciIsInRyYW5zZm9ybSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0Q7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLE1BQStDLFFBQS9DQSxNQUErQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsRUFBQyxLQUF2QztBQUFBLDhCQUNFO0FB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QUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBcUJELGVBdEJEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUE2QkU7QUFDRSxlQUFHLEVBQUMsS0FETjtBQUVFLHFCQUFTLEVBQUMsa0RBRlo7QUFBQSxtQ0FJRTtBQUFHLHVCQUFTLEVBQUMsNERBQWI7QUFBQSxvREFDWSxxRUFBQyxnRUFBRDtBQUFtQix5QkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3QkY7QUFBQSxXQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0Y7QUFBQSxrQkFERjtBQStGRCxDQXBIRDs7R0FBTTNCLGM7VUFHV1MscUQ7OztNQUhYVCxjO0FBc0hTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdpbmNoZWZmeS5mYzFlNjc1YTMzNzllY2U2NjU1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBCdXR0b24sXHJcbiAgR3JpZCxcclxuICBJbnB1dCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIFRhYnMsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBIb21lRmlsbGVkLFxyXG4gIE1lbnVPdXRsaW5lZCxcclxuICBTdGFyRmlsbGVkLFxyXG4gIENsb2NrQ2lyY2xlRmlsbGVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBJb01kQXJyb3dEcm9wZG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgYXhpb3NDbGllbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2F4aW9zLWNvbmZpZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xyXG5cclxuY29uc3QgS2l0Y2hlbkNvbCA9ICh7IG5hbWUsIHJhdGluZywgY291bnQsIHByaWNlLCBwcmljZV90eXBlLCBpbWdVUkwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdGNoZW4tY2FyZCBwYi00XCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltZ1VSTH0gY2xhc3NOYW1lPVwidy0xMDAgaC0zNlwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMiBmb250LW5vcm1hbCB0ZXh0LWxnXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtYmFzZSBwdC0yXCI+XHJcbiAgICAgICAgICA8U3RhckZpbGxlZCBjbGFzc05hbWU9XCJwci0xIHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICB7YCR7cmF0aW5nfSAoJHtjb3VudH0pYH1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBsLTZcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICAgICAgPENsb2NrQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxyXG4gICAgICAgICAgICB7YCQke3ByaWNlfWB9IC0ge3ByaWNlX3R5cGV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBLaXRjaGVuQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCB7IFRpdGxlLCBQYXJhZ3JhcGgsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcbiAgY29uc3QgW2tpdGNoZW5zLCBzZXRLaXRjaGVuc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vY2hlZmZ5dXMtYXBpLmhlcm9rdWFwcC5jb20va2l0Y2hlbnMvXCI7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zQ2xpZW50LmdldCh1cmwpO1xyXG4gICAgICBzZXRLaXRjaGVucyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dLaXRjaGVuID0gKGtuYW1lLCBrSWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGtJZCk7XHJcbiAgICByb3V0ZXIucHVzaChgL2tpdGNoZW4vJHtrbmFtZX0vJHtrSWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMjAgcHQtMiBwYi00IG14LWF1dG8gdy0zLzVcIiBhbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxIb21lRmlsbGVkIC8+XHJcbiAgICAgICAgICA8VGV4dCBzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtbC00XCI+XHJcbiAgICAgICAgICAgIFRoYW5rc2dpdmluZyBEaW5uZXJcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZml4ZWQgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLWNlbnRlciByZWxhdGl2ZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1hZ2VzL2JhY2tncm91bmQuanBnKWAsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgZmlsdGVyOiBcImJyaWdodG5lc3MoNTAlKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+PC9Sb3c+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGxcIlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMHZoXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiIH19XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbD4gICAgICA8VGV4dCBsZXZlbD17MX0gc3Ryb25nIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgdGV4dC01eGxcIj5cclxuICAgICAgICAgICAgVGhhbmtzZ2l2aW5nIERpbm5lclxyXG4gICAgICAgICAgPC9UZXh0PjwvQ29sPlxyXG4gICAgICAgICAgPENvbD4gPFRleHQgbGV2ZWw9ezF9IHN0cm9uZyBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuPC9UZXh0PjwvQ29sPjwvUm93PlxyXG4gICAgXHJcblxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMjAgdy00LzUgbWQ6dy0zLzUgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXtcInJlbGF2ZW5jZVwifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCJcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJydGxcIlxyXG4gICAgICAgICAgbW9yZUljb249ezxNZW51T3V0bGluZWQgLz59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYlBhbmUga2V5PVwiZmlsdGVyc1wiIHRhYj1cIkZpbHRlcnNcIj5cclxuICAgICAgICAgICAgRmlsdGVycyBUYWJcclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cInJhdGluZ3NcIiB0YWI9XCJSYXRpbmdzXCI+XHJcbiAgICAgICAgICAgIFJhdGluZ3MgVGFiXHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJyZWxhdmVuY2VcIiB0YWI9XCJSZWxhdmVuY2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJraXRjaGVuLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSBjbGFzc05hbWU9XCJmbGV4IHB0LTRcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICAgICAgICAgIHtraXRjaGVucyAmJlxyXG4gICAgICAgICAgICAgICAgICBraXRjaGVucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93S2l0Y2hlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJraXRjaGVuXCJdW1wibmFtZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJraXRjaGVuXCJdW1wiaWRcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8S2l0Y2hlbkNvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW1bXCJraXRjaGVuXCJdW1wibmFtZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVUkw9e2l0ZW1bXCJraXRjaGVuXCJdW1wiaW1hZ2VfdXJsc1wiXVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e1wiNC4zXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e2l0ZW1bXCJraXRjaGVuXCJdW1wibGlrZXNcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW1bXCJraXRjaGVuXCJdW1wicHJpY2VfcGVyX3RpbWVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfdHlwZT17aXRlbVtcImtpdGNoZW5cIl1bXCJ0aW1lX3R5cGVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBkaXI9XCJsdHJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTEwIGxvYWQtbW9yZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGJnLXJlZC01MDAgcHktNCBweC0xMCB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICBMb2FkIE1vcmUgPElvTWRBcnJvd0Ryb3Bkb3duIGNsYXNzTmFtZT1cInRleHQtM3hsXCIgLz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2l0Y2hlbkNvbnRlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=