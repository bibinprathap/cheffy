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
        className: "flex items-center text-base pt-2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9uZXctaW4tY2hlZmZ5L05ld09uQ2hlZmZ5Q29udGVudC5qc3giXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJLaXRjaGVuQ29sIiwibmFtZSIsInJhdGluZyIsImNvdW50IiwicHJpY2UiLCJwcmljZV90eXBlIiwiaW1nVVJMIiwiS2l0Y2hlbkNvbnRlbnQiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJQYXJhZ3JhcGgiLCJUZXh0IiwidXNlU3RhdGUiLCJraXRjaGVucyIsInNldEtpdGNoZW5zIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXJsIiwiYXhpb3NDbGllbnQiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd0tpdGNoZW4iLCJrbmFtZSIsImtJZCIsInB1c2giLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZpbHRlciIsInRyYW5zZm9ybSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0Q7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLE1BQStDLFFBQS9DQSxNQUErQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsRUFBQyxLQUF2QztBQUFBLDhCQUNFO0FB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cy9uZXdpbmNoZWZmeS4xZmQ5Zjk3ODUyY2NiMjU3M2U2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBCdXR0b24sXHJcbiAgR3JpZCxcclxuICBJbnB1dCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIFRhYnMsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBIb21lRmlsbGVkLFxyXG4gIE1lbnVPdXRsaW5lZCxcclxuICBTdGFyRmlsbGVkLFxyXG4gIENsb2NrQ2lyY2xlRmlsbGVkLFxyXG4gIENhckZpbGxlZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBJb01kQXJyb3dEcm9wZG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgYXhpb3NDbGllbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2F4aW9zLWNvbmZpZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xyXG5cclxuY29uc3QgS2l0Y2hlbkNvbCA9ICh7IG5hbWUsIHJhdGluZywgY291bnQsIHByaWNlLCBwcmljZV90eXBlLCBpbWdVUkwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdGNoZW4tY2FyZCBwYi00XCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltZ1VSTH0gY2xhc3NOYW1lPVwidy0xMDAgaC00OCBpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTQgZm9udC1ib2xkIHRleHQtMnhsXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtYmFzZSBwdC0yXCI+XHJcbiAgICAgICAgICA8U3RhckZpbGxlZCBjbGFzc05hbWU9XCJwci0xIHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICB7YCR7cmF0aW5nfSAoJHtjb3VudH0pYH1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBsLTZcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICAgICAgPENsb2NrQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxyXG4gICAgICAgICAgICB7YCQke3ByaWNlfWB9IC0ge3ByaWNlX3R5cGV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwbC02XCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgICAgIDxDYXJGaWxsZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XHJcbiAgICAgICAgICAgIERlbGl2ZXJ5XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBLaXRjaGVuQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCB7IFRpdGxlLCBQYXJhZ3JhcGgsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcbiAgY29uc3QgW2tpdGNoZW5zLCBzZXRLaXRjaGVuc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vY2hlZmZ5dXMtYXBpLmhlcm9rdWFwcC5jb20va2l0Y2hlbnMvXCI7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zQ2xpZW50LmdldCh1cmwpO1xyXG4gICAgICBzZXRLaXRjaGVucyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dLaXRjaGVuID0gKGtuYW1lLCBrSWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGtJZCk7XHJcbiAgICByb3V0ZXIucHVzaChgL2tpdGNoZW4vJHtrbmFtZX0vJHtrSWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMjAgcHQtMiBwYi00IG14LWF1dG8gdy0zLzVcIiBhbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxIb21lRmlsbGVkIC8+XHJcbiAgICAgICAgICA8VGV4dCBzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtbC00XCI+XHJcbiAgICAgICAgICAgIFRoYW5rc2dpdmluZyBEaW5uZXJcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZml4ZWQgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLWNlbnRlciByZWxhdGl2ZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1hZ2VzL2JhY2tncm91bmQuanBnKWAsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgZmlsdGVyOiBcImJyaWdodG5lc3MoNTAlKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+PC9Sb3c+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGxcIlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMHZoXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiIH19XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICA8Q29sPiAgICAgIDxUZXh0IGxldmVsPXsxfSBzdHJvbmcgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSB0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgICBUaGFua3NnaXZpbmcgRGlubmVyXHJcbiAgICAgICAgICA8L1RleHQ+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInB5LTQgcHgtNVwiPiA8VGV4dCBsZXZlbD17MX0gc3Ryb25nIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGVcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC48L1RleHQ+PC9Db2w+PC9Sb3c+XHJcbiAgICBcclxuXHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yMCB3LTQvNSBtZDp3LTMvNSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9e1wicmVsZXZlbmNlXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGRcIlxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJ0bFwiXHJcbiAgICAgICAgICBtb3JlSWNvbj17PE1lbnVPdXRsaW5lZCAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJmaWx0ZXJzXCIgdGFiPVwiRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICBGaWx0ZXJzIFRhYlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUga2V5PVwicmF0aW5nc1wiIHRhYj1cIlJhdGluZ3NcIj5cclxuICAgICAgICAgICAgUmF0aW5ncyBUYWJcclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cImRlbGl2ZXJ5VGltZVwiIHRhYj1cIkRlbGl2ZXJ5IFRpbWVcIj5cclxuICAgICAgICAgICAgRGVsaXZlcnkgVGFiXHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJjb3N0Rm9yVHdvXCIgdGFiPVwiQ29zdCBmb3IgVHdvXCI+XHJcbiAgICAgICAgICAgIENvc3QgZm9yIHR3byB0YWJcclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cInJlbGV2ZW5jZVwiIHRhYj1cIlJlbGV2ZW5jZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdGNoZW4taXRlbSBcIj5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IGNsYXNzTmFtZT1cImZsZXggcHQtNFwiIGRpcj1cImx0clwiPlxyXG4gICAgICAgICAgICAgICAge2tpdGNoZW5zICYmXHJcbiAgICAgICAgICAgICAgICAgIGtpdGNoZW5zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dLaXRjaGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcImtpdGNoZW5cIl1bXCJuYW1lXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcImtpdGNoZW5cIl1bXCJpZFwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW49ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxLaXRjaGVuQ29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbVtcImtpdGNoZW5cIl1bXCJuYW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VSTD17aXRlbVtcImtpdGNoZW5cIl1bXCJpbWFnZV91cmxzXCJdWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17XCI0LjNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17aXRlbVtcImtpdGNoZW5cIl1bXCJsaWtlc1wiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbVtcImtpdGNoZW5cIl1bXCJwcmljZV9wZXJfdGltZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZV90eXBlPXtpdGVtW1wia2l0Y2hlblwiXVtcInRpbWVfdHlwZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGRpcj1cImx0clwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtMTAgbG9hZC1tb3JlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgYmctcmVkLTUwMCBweS00IHB4LTEwIHRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgIExvYWQgTW9yZSA8SW9NZEFycm93RHJvcGRvd24gY2xhc3NOYW1lPVwidGV4dC0zeGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLaXRjaGVuQ29udGVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==