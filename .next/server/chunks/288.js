exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 3288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderSomeItems_SliderSomeItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _molecules_StandCard_StandCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2789);
/* harmony import */ var _styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1222);
/* harmony import */ var _styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







var StandsBlock = function StandsBlock(_ref) {
  var title = _ref.title,
      stands = _ref.stands;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_4___default().standsBlock),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
      className: (_styles_standBlock_module_scss__WEBPACK_IMPORTED_MODULE_4___default().standsBlock__title),
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SliderSomeItems_SliderSomeItems__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      isCrumbs: true,
      slidesAmount: 4,
      arrayItems: stands.map(function (item) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_molecules_StandCard_StandCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          stand: item
        });
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandsBlock);

/***/ }),

/***/ 1222:
/***/ ((module) => {

// Exports
module.exports = {
	"standsBlock": "standBlock_standsBlock__CcqR_",
	"standsBlock__title": "standBlock_standsBlock__title__mWGbA"
};


/***/ })

};
;