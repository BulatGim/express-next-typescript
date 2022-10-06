(() => {
var exports = {};
exports.id = 804;
exports.ids = [804];
exports.modules = {

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/templates/mainContainer/mainContainer.tsx + 25 modules
var mainContainer = __webpack_require__(3273);
// EXTERNAL MODULE: ./src/styles/casePage.module.scss
var casePage_module = __webpack_require__(3441);
var casePage_module_default = /*#__PURE__*/__webpack_require__.n(casePage_module);
// EXTERNAL MODULE: ./src/styles/stageNumber.module.scss
var stageNumber_module = __webpack_require__(1651);
var stageNumber_module_default = /*#__PURE__*/__webpack_require__.n(stageNumber_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/atoms/stageNumber/stageNumber.tsx




var StageNumber = function StageNumber(_ref) {
  var number = _ref.number;
  return /*#__PURE__*/jsx_runtime_.jsx("h2", {
    className: (stageNumber_module_default()).stageNumber,
    children: number
  });
};

/* harmony default export */ const stageNumber = (StageNumber);
;// CONCATENATED MODULE: ./src/pages/cases/[id].tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var CasePage = function CasePage(props) {
  var Case = props.Case;
  var company = Case.company,
      client = Case.client,
      sphere = Case.sphere,
      region = Case.region,
      stand = Case.stand,
      done = Case.done,
      mainPhoto = Case.mainPhoto,
      task = Case.task,
      solution = Case.solution,
      stage1 = Case.stage1,
      stage2 = Case.stage2,
      stage3 = Case.stage3,
      caseResult = Case.caseResult;
  console.log(Case);
  return /*#__PURE__*/jsx_runtime_.jsx(mainContainer/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (casePage_module_default()).casePage,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (casePage_module_default()).title,
        children: company
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (casePage_module_default()).head,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (casePage_module_default()).description,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (casePage_module_default()).titles,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).titles__item,
              children: "\u041A\u043B\u0438\u0435\u043D\u0442"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).titles__item,
              children: "\u0421\u0444\u0435\u0440\u0430"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).titles__item,
              children: "\u0420\u0435\u0433\u0438\u043E\u043D"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).titles__item,
              children: "\u0422\u0438\u043F"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).titles__item,
              children: "\u0421\u0434\u0430\u043D\u043E"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (casePage_module_default()).content,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).content__item,
              children: client
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).content__item,
              children: sphere
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).content__item,
              children: region
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).content__item,
              children: stand
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (casePage_module_default()).content__item,
              children: done
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (casePage_module_default()).head__mainPhoto,
          src: "http://localhost:3000/images/" + mainPhoto,
          alt: stand
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (casePage_module_default()).caseDescription,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: (casePage_module_default()).caseDescription__title,
          children: "\u0417\u0410\u0414\u0410\u0427\u0410"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (casePage_module_default()).caseDescription__content,
          children: task
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (casePage_module_default()).caseDescription,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: (casePage_module_default()).caseDescription__title,
          children: "\u0420\u0415\u0428\u0415\u041D\u0418\u0415"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (casePage_module_default()).caseDescription__content,
          children: solution
        })]
      }), [stage1, stage2, stage3].map(function (item, index) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (casePage_module_default()).stage,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (casePage_module_default()).stageTitle,
            children: [/*#__PURE__*/jsx_runtime_.jsx(stageNumber, {
              number: index + 1
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: (casePage_module_default()).stageTitle__stage,
              children: [index + 1, " \u042D\u0422\u0410\u041F"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (casePage_module_default()).stage__content,
            children: item
          })]
        });
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (casePage_module_default()).caseDescription,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: (casePage_module_default()).caseDescription__title,
          children: "\u0420\u0415\u0417\u0423\u041B\u042C\u0422\u0410\u0422"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (casePage_module_default()).caseDescription__content,
          children: caseResult.resultText
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (casePage_module_default()).img,
          src: "http://localhost:3000/images/" + caseResult.photo[0],
          alt: caseResult.resultText
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (casePage_module_default()).img,
          src: "http://localhost:3000/images/" + caseResult.photo[1],
          alt: caseResult.resultText
        })]
      })]
    })
  });
};

/* harmony default export */ const _id_ = (CasePage);
var getServerSideProps = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
    var url, res, Case;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "http://localhost:3000/api/cases/getOneCase/";
            _context.next = 3;
            return fetch(url + context.query.id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            Case = _context.sent;
            return _context.abrupt("return", {
              props: {
                Case: Case
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 3441:
/***/ ((module) => {

// Exports
module.exports = {
	"casePage": "casePage_casePage__griWL",
	"title": "casePage_title__Zlc0l",
	"head": "casePage_head__PmfUh",
	"description": "casePage_description__mWCRN",
	"titles": "casePage_titles__PAk84",
	"titles__item": "casePage_titles__item__nN_7Q",
	"content": "casePage_content__35sXx",
	"content__item": "casePage_content__item__nuB_M",
	"head__mainPhoto": "casePage_head__mainPhoto__zrKeX",
	"caseDescription": "casePage_caseDescription__V0K5Z",
	"caseDescription__content": "casePage_caseDescription__content__xaJ4x",
	"stage": "casePage_stage__0FtWi",
	"stageTitle": "casePage_stageTitle__UXG9x",
	"stageTitle__stage": "casePage_stageTitle__stage__UBMaK",
	"stage__content": "casePage_stage__content__FTQOR",
	"img": "casePage_img__dbXI6"
};


/***/ }),

/***/ 1651:
/***/ ((module) => {

// Exports
module.exports = {
	"stageNumber": "stageNumber_stageNumber__jKUDc"
};


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 5429:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,612,273], () => (__webpack_exec__(8231)));
module.exports = __webpack_exports__;

})();