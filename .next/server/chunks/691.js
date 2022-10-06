exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 2691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _atoms_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2450);
/* harmony import */ var _styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5886);
/* harmony import */ var _styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






var Case = function Case(props) {
  var someCase = props.someCase;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: (_styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Case),
    style: {
      background: "url(".concat("http://localhost:3000/images/" + someCase.mainPhoto, ") center/cover no-repeat")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3___default().caseContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
        className: (_styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3___default().caseContainer__title),
        children: someCase.company
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3___default().caseContainer__description),
        children: someCase.stand
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_atoms_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        url: "/cases/".concat(someCase.id),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          className: (_styles_case_module_scss__WEBPACK_IMPORTED_MODULE_3___default().caseContainer__link),
          children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Case);

/***/ }),

/***/ 5886:
/***/ ((module) => {

// Exports
module.exports = {
	"Case": "case_Case__W2Hrz",
	"caseContainer": "case_caseContainer__qGLSN",
	"caseContainer__title": "case_caseContainer__title__eVtXp",
	"caseContainer__description": "case_caseContainer__description__JXVqc",
	"caseContainer__link": "case_caseContainer__link__5_Ruf"
};


/***/ })

};
;