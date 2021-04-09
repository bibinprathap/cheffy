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
        className: "w-100 h-48 img-fluid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "pt-4 font-bold text-2xl",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "flex-wrap items-center text-base pt-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StarFilled"], {
          className: "pr-1 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), "".concat(rating, " (").concat(count, ")"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "flex items-center pl-6",
          dir: "ltr",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ClockCircleFilled"], {
            className: "pr-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), "$".concat(price), " - ", price_type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "flex items-center pl-6",
          dir: "ltr",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CarFilled"], {
            className: "pr-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), "Delivery"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
          strong: true,
          className: "text-black ml-4",
          children: "Thanksgiving Dinner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 82,
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
          justify: "center",
          align: "middle",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            children: ["      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
              level: 1,
              strong: true,
              className: "block text-white text-5xl",
              children: "Thanksgiving Dinner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 22
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            className: "py-4 px-5",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Text, {
              level: 1,
              strong: true,
              className: "block text-white",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 39
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "py-20 w-4/5 md:w-3/5 mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
        defaultActiveKey: "relevence",
        className: "font-bold",
        size: "large",
        direction: "rtl",
        moreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MenuOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, _this),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Filters",
          children: "Filters Tab"
        }, "filters", false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Ratings",
          children: "Ratings Tab"
        }, "ratings", false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Delivery Time",
          children: "Delivery Tab"
        }, "deliveryTime", false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Cost for Two",
          children: "Cost for two tab"
        }, "costForTwo", false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Relevence",
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
                    lineNumber: 148,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
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
                lineNumber: 166,
                columnNumber: 27
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this)]
        }, "relevence", true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9uZXctaW4tY2hlZmZ5L05ld09uQ2hlZmZ5Q29udGVudC5qc3giXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJLaXRjaGVuQ29sIiwibmFtZSIsInJhdGluZyIsImNvdW50IiwicHJpY2UiLCJwcmljZV90eXBlIiwiaW1nVVJMIiwiS2l0Y2hlbkNvbnRlbnQiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJQYXJhZ3JhcGgiLCJUZXh0IiwidXNlU3RhdGUiLCJraXRjaGVucyIsInNldEtpdGNoZW5zIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXJsIiwiYXhpb3NDbGllbnQiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd0tpdGNoZW4iLCJrbmFtZSIsImtJZCIsInB1c2giLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZpbHRlciIsInRyYW5zZm9ybSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0Q7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLE1BQStDLFFBQS9DQSxNQUErQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsRUFBQyxLQUF2QztBQUFBLDhCQUNFO0FB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cy9uZXdpbmNoZWZmeS5jZTEyZDBjZWM3MTNkODE3ZWEzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBCdXR0b24sXHJcbiAgR3JpZCxcclxuICBJbnB1dCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIFRhYnMsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBIb21lRmlsbGVkLFxyXG4gIE1lbnVPdXRsaW5lZCxcclxuICBTdGFyRmlsbGVkLFxyXG4gIENsb2NrQ2lyY2xlRmlsbGVkLFxyXG4gIENhckZpbGxlZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBJb01kQXJyb3dEcm9wZG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgYXhpb3NDbGllbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2F4aW9zLWNvbmZpZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xyXG5cclxuY29uc3QgS2l0Y2hlbkNvbCA9ICh7IG5hbWUsIHJhdGluZywgY291bnQsIHByaWNlLCBwcmljZV90eXBlLCBpbWdVUkwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdGNoZW4tY2FyZCBwYi00XCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltZ1VSTH0gY2xhc3NOYW1lPVwidy0xMDAgaC00OCBpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTQgZm9udC1ib2xkIHRleHQtMnhsXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIHB0LTJcIj5cclxuICAgICAgICAgIDxTdGFyRmlsbGVkIGNsYXNzTmFtZT1cInByLTEgdGV4dC15ZWxsb3ctNTAwXCIgLz5cclxuICAgICAgICAgIHtgJHtyYXRpbmd9ICgke2NvdW50fSlgfVxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGwtNlwiIGRpcj1cImx0clwiPlxyXG4gICAgICAgICAgICA8Q2xvY2tDaXJjbGVGaWxsZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XHJcbiAgICAgICAgICAgIHtgJCR7cHJpY2V9YH0gLSB7cHJpY2VfdHlwZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBsLTZcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICAgICAgPENhckZpbGxlZCBjbGFzc05hbWU9XCJwci0xXCIgLz5cclxuICAgICAgICAgICAgRGVsaXZlcnlcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEtpdGNoZW5Db250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgVGl0bGUsIFBhcmFncmFwaCwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuICBjb25zdCBba2l0Y2hlbnMsIHNldEtpdGNoZW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9jaGVmZnl1cy1hcGkuaGVyb2t1YXBwLmNvbS9raXRjaGVucy9cIjtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NDbGllbnQuZ2V0KHVybCk7XHJcbiAgICAgIHNldEtpdGNoZW5zKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWRcIik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0tpdGNoZW4gPSAoa25hbWUsIGtJZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coa0lkKTtcclxuICAgIHJvdXRlci5wdXNoKGAva2l0Y2hlbi8ke2tuYW1lfS8ke2tJZH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yMCBwdC0yIHBiLTQgbXgtYXV0byB3LTMvNVwiIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEhvbWVGaWxsZWQgLz5cclxuICAgICAgICAgIDxUZXh0IHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1sLTRcIj5cclxuICAgICAgICAgICAgVGhhbmtzZ2l2aW5nIERpbm5lclxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvd1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1maXhlZCBiZy1jb3ZlciBiZy1uby1yZXBlYXQgYmctY2VudGVyIHJlbGF0aXZlXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvYmFja2dyb3VuZC5qcGcpYCxcclxuICAgICAgICAgIGhlaWdodDogXCIzMHZoXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlXCIsXHJcbiAgICAgICAgICBmaWx0ZXI6IFwiYnJpZ2h0bmVzcyg1MCUpXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgID48L1Jvdz5cclxuICAgICAgPFJvd1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbFwiXHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwdmhcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIgfX1cclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICAgIDxDb2w+ICAgICAgPFRleHQgbGV2ZWw9ezF9IHN0cm9uZyBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIHRleHQtNXhsXCI+XHJcbiAgICAgICAgICAgIFRoYW5rc2dpdmluZyBEaW5uZXJcclxuICAgICAgICAgIDwvVGV4dD48L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHktNCBweC01XCI+IDxUZXh0IGxldmVsPXsxfSBzdHJvbmcgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LjwvVGV4dD48L0NvbD48L1Jvdz5cclxuICAgIFxyXG5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIwIHctNC81IG1kOnctMy81IG14LWF1dG9cIj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT17XCJyZWxldmVuY2VcIn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicnRsXCJcclxuICAgICAgICAgIG1vcmVJY29uPXs8TWVudU91dGxpbmVkIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cImZpbHRlcnNcIiB0YWI9XCJGaWx0ZXJzXCI+XHJcbiAgICAgICAgICAgIEZpbHRlcnMgVGFiXHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJyYXRpbmdzXCIgdGFiPVwiUmF0aW5nc1wiPlxyXG4gICAgICAgICAgICBSYXRpbmdzIFRhYlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUga2V5PVwiZGVsaXZlcnlUaW1lXCIgdGFiPVwiRGVsaXZlcnkgVGltZVwiPlxyXG4gICAgICAgICAgICBEZWxpdmVyeSBUYWJcclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cImNvc3RGb3JUd29cIiB0YWI9XCJDb3N0IGZvciBUd29cIj5cclxuICAgICAgICAgICAgQ29zdCBmb3IgdHdvIHRhYlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUga2V5PVwicmVsZXZlbmNlXCIgdGFiPVwiUmVsZXZlbmNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0Y2hlbi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gY2xhc3NOYW1lPVwiZmxleCBwdC00XCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgICAgICAgICB7a2l0Y2hlbnMgJiZcclxuICAgICAgICAgICAgICAgICAga2l0Y2hlbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0tpdGNoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wia2l0Y2hlblwiXVtcIm5hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wia2l0Y2hlblwiXVtcImlkXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbj17OH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEtpdGNoZW5Db2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtW1wia2l0Y2hlblwiXVtcIm5hbWVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVVJMPXtpdGVtW1wia2l0Y2hlblwiXVtcImltYWdlX3VybHNcIl1bMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtcIjQuM1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtpdGVtW1wia2l0Y2hlblwiXVtcImxpa2VzXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtW1wia2l0Y2hlblwiXVtcInByaWNlX3Blcl90aW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlX3R5cGU9e2l0ZW1bXCJraXRjaGVuXCJdW1widGltZV90eXBlXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgZGlyPVwibHRyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC0xMCBsb2FkLW1vcmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBiZy1yZWQtNTAwIHB5LTQgcHgtMTAgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgTG9hZCBNb3JlIDxJb01kQXJyb3dEcm9wZG93biBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtpdGNoZW5Db250ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9