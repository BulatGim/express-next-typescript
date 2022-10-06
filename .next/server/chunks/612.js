exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 5919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_customButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9637);
/* harmony import */ var _styles_customButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_customButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var CustomButton = function CustomButton(_ref) {
  var className = _ref.className,
      type = _ref.type,
      callBack = _ref.callBack,
      color = _ref.color,
      children = _ref.children;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
    className: color === "white" ? (_styles_customButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().whiteButton) : (_styles_customButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().blueButton) + " " + className,
    type: type ? type : undefined,
    onClick: function onClick() {
      return callBack ? callBack() : "";
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomButton);

/***/ }),

/***/ 2450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CustomLink_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3530);
/* harmony import */ var _styles_CustomLink_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CustomLink_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





var CustomLink = function CustomLink(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: url,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      className: (_styles_CustomLink_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CustomLink),
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);

/***/ }),

/***/ 3530:
/***/ ((module) => {

// Exports
module.exports = {
	"CustomLink": "CustomLink_CustomLink__3oSjF"
};


/***/ }),

/***/ 9637:
/***/ ((module) => {

// Exports
module.exports = {
	"blueButton": "customButton_blueButton__bkU8m",
	"whiteButton": "customButton_whiteButton__AGAIj"
};


/***/ })

};
;