(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IndexPage": () => (/* binding */ IndexPage),
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/styles/index.module.scss
var index_module = __webpack_require__(4949);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/atoms/CustomButton/CustomButton.tsx
var CustomButton = __webpack_require__(5919);
;// CONCATENATED MODULE: ./src/commonImgs/stoikiAboutUs0.svg
/* harmony default export */ const stoikiAboutUs0 = ({"src":"/_next/static/media/stoikiAboutUs0.d69ab75e.svg","height":420,"width":336});
;// CONCATENATED MODULE: ./src/commonImgs/stoikiAboutUs1.svg
/* harmony default export */ const stoikiAboutUs1 = ({"src":"/_next/static/media/stoikiAboutUs1.0affad6e.svg","height":446,"width":446});
;// CONCATENATED MODULE: ./src/molecules/sectionCatalog/imgs/metalProducts.svg
/* harmony default export */ const metalProducts = ({"src":"/_next/static/media/metalProducts.86becf18.svg","height":267,"width":654});
// EXTERNAL MODULE: ./src/styles/sectionCatalog.module.scss
var sectionCatalog_module = __webpack_require__(3912);
var sectionCatalog_module_default = /*#__PURE__*/__webpack_require__.n(sectionCatalog_module);
// EXTERNAL MODULE: ./src/atoms/CustomLink/CustomLink.tsx
var CustomLink = __webpack_require__(2450);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/molecules/sectionCatalog/sectionCatalog.tsx








var SectionCatalog = function SectionCatalog() {
  var catalog = (0,external_react_redux_.useSelector)(function (state) {
    return state.catalog.values;
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (sectionCatalog_module_default()).sectionCatalog,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: (sectionCatalog_module_default()).sectionCatalog__title,
      children: "\u041D\u0430\u0448\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (sectionCatalog_module_default()).catalogContainer,
      children: catalog === null || catalog === void 0 ? void 0 : catalog.map(function (item) {
        return item.name === "корпусные изделия из листового металла" ? "" : /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
          url: "/catalog/" + item.id,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (sectionCatalog_module_default()).catalogItem,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: (sectionCatalog_module_default()).catalogItem__image,
              src: "http://localhost:3000/images/" + item.photo,
              alt: item.name
            }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: (sectionCatalog_module_default()).catalogItem__title,
              children: item.name
            })]
          })
        }, item.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (sectionCatalog_module_default()).metalProducts,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (sectionCatalog_module_default()).metalProducts__title,
        children: "\u043A\u043E\u0440\u043F\u0443\u0441\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0438\u0437 \u043B\u0438\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043C\u0435\u0442\u0430\u043B\u043B\u0430"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (sectionCatalog_module_default()).metalProducts__description,
        children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F Daimax Group \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u043A\u043E\u0440\u043F\u0443\u0441\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u043B\u044E\u0431\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u0417\u0430 9 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0441\u0444\u0435\u0440\u0435, \u043C\u044B \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0438\u043B\u0438 \u0440\u044B\u043D\u043E\u043A \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u0443\u0441\u043B\u0443\u0433."
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (sectionCatalog_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u0417\u0430\u0431\u043E\u0440 \u201C\u0416\u0430\u043B\u044E\u0437\u0438\u201D"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0430\u043D\u043D\u043E \u0438\u0437 \u043C\u0435\u0442\u0430\u043B\u043B\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u0428\u0438\u0440\u043C\u044B \u0438\u0437 \u043C\u0435\u0442\u0430\u043B\u043B\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u041E\u0431\u0440\u0430\u043C\u043B\u0435\u043D\u0438\u0435 \u043B\u0438\u0444\u0442\u043E\u0432\u044B\u0445 \u043F\u043E\u0440\u0442\u0430\u043B\u043E\u0432"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u0430\u0441\u0441\u0435\u0442\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u0442\u0438\u043F\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u041A\u043E\u0440\u0437\u0438\u043D\u044B \u0434\u043B\u044F \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u041F\u043E\u0434\u0441\u0438\u0441\u0442\u0435\u043C\u0430 (\u041F-, Z-, \u0421- \u043F\u0440\u043E\u0444\u0438\u043B\u0438)"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (sectionCatalog_module_default()).content__item,
            children: "\u041A\u043E\u0440\u043F\u0443\u0441\u0430 \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u043E\u0432 \u0410\u0440\u043C\u0441\u0442\u0440\u043E\u043D\u0433"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (sectionCatalog_module_default()).content__image,
          src: metalProducts.src,
          alt: "\u043A\u043E\u0440\u043F\u0443\u0441\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0438\u0437 \u043B\u0438\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043C\u0435\u0442\u0430\u043B\u043B\u0430"
        })]
      })]
    })]
  });
};

/* harmony default export */ const sectionCatalog = (SectionCatalog);
// EXTERNAL MODULE: ./src/molecules/sectionCalculation/sectionCalculation.tsx + 3 modules
var sectionCalculation = __webpack_require__(4252);
// EXTERNAL MODULE: ./src/molecules/sectionOurClients/sectionOurClients.tsx + 4 modules
var sectionOurClients = __webpack_require__(1986);
// EXTERNAL MODULE: ./src/templates/mainContainer/mainContainer.tsx + 25 modules
var mainContainer = __webpack_require__(3273);
// EXTERNAL MODULE: ./src/organisms/StandsBlock/StandsBlock.tsx
var StandsBlock = __webpack_require__(3288);
// EXTERNAL MODULE: external "next/dist/compiled/@edge-runtime/primitives/fetch"
var fetch_ = __webpack_require__(9059);
// EXTERNAL MODULE: ./src/molecules/case/case.tsx
var case_case = __webpack_require__(2691);
// EXTERNAL MODULE: ./src/styles/sectionCases.module.scss
var sectionCases_module = __webpack_require__(4878);
var sectionCases_module_default = /*#__PURE__*/__webpack_require__.n(sectionCases_module);
;// CONCATENATED MODULE: ./src/organisms/sectionCases/sectionCases.tsx








var SectionCases = function SectionCases(_ref) {
  var _Cases$slice;

  var Cases = _ref.Cases;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (sectionCases_module_default()).SectionCases,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (sectionCases_module_default()).title,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (sectionCases_module_default()).title__item,
        children: "\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
        url: "/cases",
        children: /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
          className: (sectionCases_module_default()).title__button,
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "\u0412\u0421\u0415 \u041F\u0420\u041E\u0415\u041A\u0422\u042B"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (sectionCases_module_default()).casesContainer,
      children: Cases === null || Cases === void 0 ? void 0 : (_Cases$slice = Cases.slice(0, 3)) === null || _Cases$slice === void 0 ? void 0 : _Cases$slice.map(function (item) {
        return /*#__PURE__*/jsx_runtime_.jsx(case_case/* default */.Z, {
          someCase: item
        }, item.id);
      })
    })]
  });
};

/* harmony default export */ const sectionCases = (SectionCases);
;// CONCATENATED MODULE: ./src/pages/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















var IndexPage = function IndexPage(_ref) {
  var stands = _ref.stands,
      catalog = _ref.catalog,
      Cases = _ref.Cases;
  return /*#__PURE__*/jsx_runtime_.jsx(mainContainer/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (index_module_default()).Main,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).aboutUs,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).infoBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: (index_module_default()).infoBlock__title,
            children: "\u0422\u043E\u0440\u0433\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (index_module_default()).infoBlock__description,
            children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F Daimax Group \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0442\u043E\u0439\u043A\u0438, \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u0434\u044B \u043B\u044E\u0431\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u041A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0438 \u0432 \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0439 \u0441\u0440\u043E\u043A \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E\u0440\u043E\u0448\u043A\u043E\u0432\u043E\u0439 \u043E\u043A\u0440\u0430\u0441\u043A\u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u043F\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443 RAL, \u043B\u0430\u0437\u0435\u0440\u043D\u043E\u0439 \u0440\u0435\u0437\u043A\u0438, \u0433\u0438\u0431\u043A\u0438 \u0438 \u0441\u0432\u0430\u0440\u043A\u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0430. \u0417\u0430 9 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0441\u0444\u0435\u0440\u0435, \u043C\u044B \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0438\u043B\u0438 \u0440\u044B\u043D\u043E\u043A \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u0443\u0441\u043B\u0443\u0433."
          }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C \u0417\u0412\u041E\u041D\u041E\u041A"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).stoiki,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (index_module_default()).stoiki__first,
            src: stoikiAboutUs0.src,
            alt: "\u0421\u0442\u043E\u0439\u043A\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (index_module_default()).stoiki__second,
            src: stoikiAboutUs1.src,
            alt: "\u0421\u0442\u043E\u0439\u043A\u0430"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(StandsBlock/* default */.Z, {
        title: "\u041B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
        stands: stands || []
      }), /*#__PURE__*/jsx_runtime_.jsx(sectionCases, {
        Cases: Cases
      }), /*#__PURE__*/jsx_runtime_.jsx(sectionCatalog, {}), /*#__PURE__*/jsx_runtime_.jsx(sectionCalculation/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(sectionOurClients/* default */.Z, {})]
    })
  });
};
/* harmony default export */ const pages = (IndexPage);
function getServerSideProps() {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, stands, resp, catalog, response, Cases;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,fetch_.fetch)("".concat("http://localhost:3000/api/stands/getByCatalogId/", "2"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            stands = _context.sent;
            _context.next = 8;
            return (0,fetch_.fetch)("".concat("http://localhost:3000/api/catalog/"));

          case 8:
            resp = _context.sent;
            _context.next = 11;
            return resp.json();

          case 11:
            catalog = _context.sent;
            _context.next = 14;
            return (0,fetch_.fetch)("http://localhost:3000/api/cases/getAllCases/");

          case 14:
            response = _context.sent;
            _context.next = 17;
            return response.json();

          case 17:
            Cases = _context.sent;
            return _context.abrupt("return", {
              props: {
                stands: stands,
                catalog: catalog,
                Cases: Cases
              }
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

/***/ }),

/***/ 4949:
/***/ ((module) => {

// Exports
module.exports = {
	"Main": "styles_Main__iNeyN",
	"aboutUs": "styles_aboutUs__w0szP",
	"infoBlock__description": "styles_infoBlock__description__050s1",
	"stoiki": "styles_stoiki__lISPy",
	"stoiki__first": "styles_stoiki__first__Eadgo",
	"stoiki__second": "styles_stoiki__second__SduhH"
};


/***/ }),

/***/ 4878:
/***/ ((module) => {

// Exports
module.exports = {
	"SectionCases": "sectionCases_SectionCases__CcJBs",
	"title": "sectionCases_title__C48m1",
	"casesContainer": "sectionCases_casesContainer__dv0_M"
};


/***/ }),

/***/ 3912:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionCatalog": "sectionCatalog_sectionCatalog__t6gMW",
	"catalogContainer": "sectionCatalog_catalogContainer__c990P",
	"catalogItem": "sectionCatalog_catalogItem__8k_iH",
	"catalogItem__image": "sectionCatalog_catalogItem__image__6kiXI",
	"catalogItem__title": "sectionCatalog_catalogItem__title__d3pTa",
	"metalProducts": "sectionCatalog_metalProducts__zbiyv",
	"metalProducts__title": "sectionCatalog_metalProducts__title__xB7Rl",
	"metalProducts__description": "sectionCatalog_metalProducts__description__fLK6E",
	"content": "sectionCatalog_content__Uc2GV",
	"content__item": "sectionCatalog_content__item__SSyPL",
	"content__image": "sectionCatalog_content__image__iHOTq"
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

/***/ 9059:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@edge-runtime/primitives/fetch");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,612,273,252,789,930,986,691,288], () => (__webpack_exec__(3236)));
module.exports = __webpack_exports__;

})();