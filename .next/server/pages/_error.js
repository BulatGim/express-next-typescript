(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 4689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: ./src/atoms/CustomButton/CustomButton.tsx
var CustomButton = __webpack_require__(5919);
// EXTERNAL MODULE: ./src/styles/ErrorPage.module.scss
var ErrorPage_module = __webpack_require__(9422);
var ErrorPage_module_default = /*#__PURE__*/__webpack_require__.n(ErrorPage_module);
;// CONCATENATED MODULE: ./src/commonImgs/Error0.png
/* harmony default export */ const Error0 = ({"src":"/_next/static/media/Error0.03f1c47c.png","height":445,"width":511,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA20lEQVR42mMAgcNTC1lA9J1LJxj3T8xNPja9RAPEPzKtmIWhK0SdCcQ5O7dCZ3dv1vr5pSH/t3RmzGCAgf9PdzD9//+fcUtH2ooV1ZH/a6PsfvWke/7Y0Jo88disciOGw9OKD2xqT/rWkuT2f3pB4O/mBJf/a5vjf+/oSf+/f3LBAoblLekr5pZHfF/dlPB3Qrbf380dqX/mlYf/X1ob839nf84aBhB4tHWi0fL6uL+N8c7/Z5WE3ikId7FrTvFunlkZq8Lwf08xI0hRX27QwmlFIU/KYtyCGJAAAPNhY1swnWSxAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/commonImgs/Error1.png
/* harmony default export */ const Error1 = ({"src":"/_next/static/media/Error1.a254c08c.png","height":637,"width":440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/Ad7i8wDb3f+oHx4AQ/r7/9j9/QJy8vP0ywEAAP8PlJ3rtRwa7TsFBfwA8fL8glpS8YIBWm//GhoQ1a8OCdE2CAb5AAUFEX5NWVCJAXKC/yUE/tasEw7WLggG+QAICQ6DQU1NhwF5ifoy9/LZqBYP1iUIB/cABwkPmhkhKX0Bqbb6Pc/M2qYQC9kcBAHwAAwNDqlES0ZyAZWi6qzi4edTEgvYAAYF+gACBRLyERETrwGgpeBO2d3+RwkN/VMVE+/+BP34tSAcCcCSWlZIuPdCkAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/commonImgs/Error2.png
/* harmony default export */ const Error2 = ({"src":"/_next/static/media/Error2.52eff5b9.png","height":410,"width":930,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAZUlEQVR42i2KPQ5AQBBG5xjiIk6gww1E6JxGIhESiY5CaESjcKjd7EztFYqX71ecmsDr1RIXdPbBdlSgxh+CKRgvTg0FaEuXkjtyL4z3z0BRMZacFvIJj1DGMBJydIIVH0Hmg20fZIZqWG75gLQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/commonImgs/Error3.png
/* harmony default export */ const Error3 = ({"src":"/_next/static/media/Error3.b3986b6e.png","height":55,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKElEQVR4nGPU0taO/eJewsazf+Yxhu9vuBiYWNkZ/v//wcDA8AeI2QG/bgqy1lJrRgAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./src/atoms/CustomLink/CustomLink.tsx
var CustomLink = __webpack_require__(2450);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_error.tsx











var Error = function Error(_ref) {
  var statusCode = _ref.statusCode;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ErrorPage_module_default()).ErrorPage,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (ErrorPage_module_default()).ErrorPage__image + " " + (ErrorPage_module_default()).ErrorPage__image_boxes,
      src: Error0.src,
      alt: "\u0424\u043E\u0442\u043E"
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (ErrorPage_module_default()).ErrorPage__image + " " + (ErrorPage_module_default()).ErrorPage__image_stand,
      src: Error1.src,
      alt: "\u0424\u043E\u0442\u043E"
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (ErrorPage_module_default()).ErrorPage__image + " " + (ErrorPage_module_default()).ErrorPage__image_error,
      src: Error2.src,
      alt: "\u0424\u043E\u0442\u043E"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ErrorPage_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (ErrorPage_module_default()).logo,
        src: Error3.src,
        alt: "\u041B\u041E\u0413\u041E"
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (ErrorPage_module_default()).content__title,
        children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (ErrorPage_module_default()).content__text,
        children: "\u041F\u043E\u0445\u043E\u0436\u0435, \u043D\u0443\u0436\u043D\u0430\u044F \u0432\u0430\u043C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0442\u0435\u0440\u044F\u043B\u0430\u0441\u044C."
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u041C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043C\u0441\u044F \u0441 \u044D\u0442\u0438\u043C \u043D\u0435\u0434\u043E\u0440\u0430\u0437\u0443\u043C\u0435\u043D\u0438\u0435\u043C!"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (ErrorPage_module_default()).content__text,
        children: "\u0410 \u043F\u043E\u043A\u0430 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u043B\u0438 \u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ErrorPage_module_default()).btnsPanel,
        children: [/*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
          url: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
            className: (ErrorPage_module_default()).btnsPanel__item,
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
          url: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
            color: "white",
            className: (ErrorPage_module_default()).btnsPanel__item,
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
            })
          })
        })]
      })]
    })]
  });
};

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ const _error = (Error);

/***/ }),

/***/ 9422:
/***/ ((module) => {

// Exports
module.exports = {
	"ErrorPage": "ErrorPage_ErrorPage__XC15v",
	"ErrorPage__image": "ErrorPage_ErrorPage__image__ralid",
	"ErrorPage__image_boxes": "ErrorPage_ErrorPage__image_boxes___YWbP",
	"ErrorPage__image_error": "ErrorPage_ErrorPage__image_error__FPuyr",
	"ErrorPage__image_stand": "ErrorPage_ErrorPage__image_stand__8hobt",
	"content": "ErrorPage_content__pQRgL",
	"content__title": "ErrorPage_content__title__MNfd9",
	"content__text": "ErrorPage_content__text__rxMrr",
	"btnsPanel": "ErrorPage_btnsPanel__P_TB1",
	"btnsPanel__item": "ErrorPage_btnsPanel__item__O5wO0"
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,612], () => (__webpack_exec__(4689)));
module.exports = __webpack_exports__;

})();