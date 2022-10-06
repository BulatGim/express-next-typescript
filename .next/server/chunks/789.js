exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2450);
/* harmony import */ var _styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4149);
/* harmony import */ var _styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






var StandCard = function StandCard(_ref) {
  var stand = _ref.stand;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_atoms_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    url: "/stand/" + stand.id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().StandCard),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
        src: "".concat("http://localhost:3000/images/" + stand.photo[0]),
        alt: stand.name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
        className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
        children: stand.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sizes),
        children: [stand.width, " X ", stand.height]
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().panel),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
          className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().panel__price),
          children: [stand.price, " \u20BD"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          className: (_styles_StandCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().panel__btn),
          children: "\u041F\u041E\u0414\u0420\u041E\u0411\u041D\u0415\u0415"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandCard);
/*
{id, name, characteristics, createdAt, deep, description, height, photo, price, updatedAt, width, catalogId}*/

/***/ }),

/***/ 4149:
/***/ ((module) => {

// Exports
module.exports = {
	"StandCard": "StandCard_StandCard__3fvSs",
	"image": "StandCard_image__N_8n2",
	"sizes": "StandCard_sizes__Mccmf",
	"title": "StandCard_title__NisR6",
	"panel": "StandCard_panel__dOsW0",
	"panel__price": "StandCard_panel__price__reRzl",
	"panel__btn": "StandCard_panel__btn__WyJ6Q"
};


/***/ })

};
;