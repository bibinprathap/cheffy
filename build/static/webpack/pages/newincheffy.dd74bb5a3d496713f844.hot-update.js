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
        className: "w-100 h-48"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "pt-2 font-bold text-xl",
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
              lineNumber: 97,
              columnNumber: 22
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
              lineNumber: 100,
              columnNumber: 39
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
        defaultActiveKey: "relevence",
        className: "font-bold",
        size: "large",
        direction: "rtl",
        moreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MenuOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, _this),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Filters",
          children: "Filters Tab"
        }, "filters", false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Ratings",
          children: "Ratings Tab"
        }, "ratings", false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Delivery Time",
          children: "Delivery Tab"
        }, "deliveryTime", false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabPane, {
          tab: "Cost for Two",
          children: "Cost for two tab"
        }, "costForTwo", false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
                    lineNumber: 143,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
                lineNumber: 161,
                columnNumber: 27
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this)]
        }, "relevence", true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9uZXctaW4tY2hlZmZ5L05ld09uQ2hlZmZ5Q29udGVudC5qc3giXSwibmFtZXMiOlsiVGFiUGFuZSIsIlRhYnMiLCJLaXRjaGVuQ29sIiwibmFtZSIsInJhdGluZyIsImNvdW50IiwicHJpY2UiLCJwcmljZV90eXBlIiwiaW1nVVJMIiwiS2l0Y2hlbkNvbnRlbnQiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJQYXJhZ3JhcGgiLCJUZXh0IiwidXNlU3RhdGUiLCJraXRjaGVucyIsInNldEtpdGNoZW5zIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXJsIiwiYXhpb3NDbGllbnQiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd0tpdGNoZW4iLCJrbmFtZSIsImtJZCIsInB1c2giLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZpbHRlciIsInRyYW5zZm9ybSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0Q7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLE1BQStDLFFBQS9DQSxNQUErQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsRUFBQyxLQUF2QztBQUFBLDhCQUNFO0FB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LFNBQUQsQ0FBSixDQUFnQixZQUFoQixFQUE4QixDQUE5QixDQUZWO0FBR0UsMEJBQU0sRUFBRSxLQUhWO0FBSUUseUJBQUssRUFBRUEsSUFBSSxDQUFDLFNBQUQsQ0FBSixDQUFnQixPQUFoQixDQUpUO0FBS0UseUJBQUssRUFBRUEsSUFBSSxDQUFDLFNBQUQsQ0FBSixDQUFnQixnQkFBaEIsQ0FMVDtBQU1FLDhCQUFVLEVBQUVBLElBQUksQ0FBQyxTQUFELENBQUosQ0FBZ0IsV0FBaEI7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQXFCRCxlQXRCRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBNkJFO0FBQ0UsZUFBRyxFQUFDLEtBRE47QUFFRSxxQkFBUyxFQUFDLGtEQUZaO0FBQUEsbUNBSUU7QUFBRyx1QkFBUyxFQUFDLDREQUFiO0FBQUEsb0RBQ1kscUVBQUMsZ0VBQUQ7QUFBbUIseUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JGO0FBQUEsV0FBYSxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDRjtBQUFBLGtCQURGO0FBc0dELENBM0hEOztHQUFNM0IsYztVQUdXUyxxRDs7O01BSFhULGM7QUE2SFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld2luY2hlZmZ5LmRkNzRiYjVhM2Q0OTY3MTNmODQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgQ2FyZCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEJ1dHRvbixcclxuICBHcmlkLFxyXG4gIElucHV0LFxyXG4gIFNwYWNlLFxyXG4gIERpdmlkZXIsXHJcbiAgVGFicyxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVGaWxsZWQsXHJcbiAgTWVudU91dGxpbmVkLFxyXG4gIFN0YXJGaWxsZWQsXHJcbiAgQ2xvY2tDaXJjbGVGaWxsZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IElvTWRBcnJvd0Ryb3Bkb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBheGlvc0NsaWVudCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYXhpb3MtY29uZmlnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcblxyXG5jb25zdCBLaXRjaGVuQ29sID0gKHsgbmFtZSwgcmF0aW5nLCBjb3VudCwgcHJpY2UsIHByaWNlX3R5cGUsIGltZ1VSTCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2l0Y2hlbi1jYXJkIHBiLTRcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICA8aW1nIHNyYz17aW1nVVJMfSBjbGFzc05hbWU9XCJ3LTEwMCBoLTQ4XCIgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yIGZvbnQtYm9sZCB0ZXh0LXhsXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtYmFzZSBwdC0yXCI+XHJcbiAgICAgICAgICA8U3RhckZpbGxlZCBjbGFzc05hbWU9XCJwci0xIHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICB7YCR7cmF0aW5nfSAoJHtjb3VudH0pYH1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBsLTZcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICAgICAgPENsb2NrQ2lyY2xlRmlsbGVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxyXG4gICAgICAgICAgICB7YCQke3ByaWNlfWB9IC0ge3ByaWNlX3R5cGV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBLaXRjaGVuQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCB7IFRpdGxlLCBQYXJhZ3JhcGgsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcbiAgY29uc3QgW2tpdGNoZW5zLCBzZXRLaXRjaGVuc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vY2hlZmZ5dXMtYXBpLmhlcm9rdWFwcC5jb20va2l0Y2hlbnMvXCI7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zQ2xpZW50LmdldCh1cmwpO1xyXG4gICAgICBzZXRLaXRjaGVucyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dLaXRjaGVuID0gKGtuYW1lLCBrSWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGtJZCk7XHJcbiAgICByb3V0ZXIucHVzaChgL2tpdGNoZW4vJHtrbmFtZX0vJHtrSWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMjAgcHQtMiBwYi00IG14LWF1dG8gdy0zLzVcIiBhbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxIb21lRmlsbGVkIC8+XHJcbiAgICAgICAgICA8VGV4dCBzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtbC00XCI+XHJcbiAgICAgICAgICAgIFRoYW5rc2dpdmluZyBEaW5uZXJcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZml4ZWQgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLWNlbnRlciByZWxhdGl2ZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1hZ2VzL2JhY2tncm91bmQuanBnKWAsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgZmlsdGVyOiBcImJyaWdodG5lc3MoNTAlKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+PC9Sb3c+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGxcIlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMHZoXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiIH19XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICA8Q29sPiAgICAgIDxUZXh0IGxldmVsPXsxfSBzdHJvbmcgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSB0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgICBUaGFua3NnaXZpbmcgRGlubmVyXHJcbiAgICAgICAgICA8L1RleHQ+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInB5LTQgcHgtNVwiPiA8VGV4dCBsZXZlbD17MX0gc3Ryb25nIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGVcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC48L1RleHQ+PC9Db2w+PC9Sb3c+XHJcbiAgICBcclxuXHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yMCB3LTQvNSBtZDp3LTMvNSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9e1wicmVsZXZlbmNlXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGRcIlxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJ0bFwiXHJcbiAgICAgICAgICBtb3JlSWNvbj17PE1lbnVPdXRsaW5lZCAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJmaWx0ZXJzXCIgdGFiPVwiRmlsdGVyc1wiPlxyXG4gICAgICAgICAgICBGaWx0ZXJzIFRhYlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUga2V5PVwicmF0aW5nc1wiIHRhYj1cIlJhdGluZ3NcIj5cclxuICAgICAgICAgICAgUmF0aW5ncyBUYWJcclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cImRlbGl2ZXJ5VGltZVwiIHRhYj1cIkRlbGl2ZXJ5IFRpbWVcIj5cclxuICAgICAgICAgICAgRGVsaXZlcnkgVGFiXHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSBrZXk9XCJjb3N0Rm9yVHdvXCIgdGFiPVwiQ29zdCBmb3IgVHdvXCI+XHJcbiAgICAgICAgICAgIENvc3QgZm9yIHR3byB0YWJcclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lIGtleT1cInJlbGV2ZW5jZVwiIHRhYj1cIlJlbGV2ZW5jZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtpdGNoZW4taXRlbSBcIj5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IGNsYXNzTmFtZT1cImZsZXggcHQtNFwiIGRpcj1cImx0clwiPlxyXG4gICAgICAgICAgICAgICAge2tpdGNoZW5zICYmXHJcbiAgICAgICAgICAgICAgICAgIGtpdGNoZW5zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dLaXRjaGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcImtpdGNoZW5cIl1bXCJuYW1lXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcImtpdGNoZW5cIl1bXCJpZFwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW49ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxLaXRjaGVuQ29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbVtcImtpdGNoZW5cIl1bXCJuYW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VSTD17aXRlbVtcImtpdGNoZW5cIl1bXCJpbWFnZV91cmxzXCJdWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17XCI0LjNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17aXRlbVtcImtpdGNoZW5cIl1bXCJsaWtlc1wiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbVtcImtpdGNoZW5cIl1bXCJwcmljZV9wZXJfdGltZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZV90eXBlPXtpdGVtW1wia2l0Y2hlblwiXVtcInRpbWVfdHlwZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGRpcj1cImx0clwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtMTAgbG9hZC1tb3JlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgYmctcmVkLTUwMCBweS00IHB4LTEwIHRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgIExvYWQgTW9yZSA8SW9NZEFycm93RHJvcGRvd24gY2xhc3NOYW1lPVwidGV4dC0zeGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLaXRjaGVuQ29udGVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==