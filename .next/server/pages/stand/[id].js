(() => {
var exports = {};
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 9489:
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
// EXTERNAL MODULE: ./src/styles/StandPage.module.scss
var StandPage_module = __webpack_require__(1881);
var StandPage_module_default = /*#__PURE__*/__webpack_require__.n(StandPage_module);
;// CONCATENATED MODULE: ./src/commonImgs/chooseColorIcon.svg
/* harmony default export */ const chooseColorIcon = ({"src":"/_next/static/media/chooseColorIcon.ed8f0a0c.svg","height":30,"width":30});
// EXTERNAL MODULE: ./src/atoms/CustomButton/CustomButton.tsx
var CustomButton = __webpack_require__(5919);
;// CONCATENATED MODULE: ./src/commonImgs/nextIcon.svg
/* harmony default export */ const nextIcon = ({"src":"/_next/static/media/nextIcon.239273c9.svg","height":21,"width":13});
// EXTERNAL MODULE: ./src/templates/mainContainer/mainContainer.tsx + 25 modules
var mainContainer = __webpack_require__(3273);
// EXTERNAL MODULE: ./src/molecules/sectionCalculation/sectionCalculation.tsx + 3 modules
var sectionCalculation = __webpack_require__(4252);
// EXTERNAL MODULE: ./src/organisms/StandsBlock/StandsBlock.tsx
var StandsBlock = __webpack_require__(3288);
;// CONCATENATED MODULE: ./src/commonImgs/exclamationPoint.svg
/* harmony default export */ const exclamationPoint = ({"src":"/_next/static/media/exclamationPoint.00f26758.svg","height":18,"width":4});
// EXTERNAL MODULE: ./src/atoms/formInput/formInput.tsx
var formInput = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/styles/optPrice.module.scss
var optPrice_module = __webpack_require__(3893);
var optPrice_module_default = /*#__PURE__*/__webpack_require__.n(optPrice_module);
// EXTERNAL MODULE: ./src/hooks/useHandleChange.tsx
var useHandleChange = __webpack_require__(9725);
// EXTERNAL MODULE: ./src/hooks/useUserErrors.tsx
var useUserErrors = __webpack_require__(6278);
// EXTERNAL MODULE: ./src/hooks/useValidations.tsx
var useValidations = __webpack_require__(5044);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/layers/serviceLayer.ts
var serviceLayer = __webpack_require__(9120);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/molecules/successForm/successForm.tsx + 1 modules
var successForm = __webpack_require__(3992);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/molecules/optPrice/optPrice.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var OptPrice = function OptPrice() {
  var dispatch = (0,external_react_redux_.useDispatch)();

  var _useState = (0,external_react_.useState)({
    phone: "+7(___)___-__-__"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,external_react_.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      userError = _useState4[0],
      setUserError = _useState4[1];

  var _useState5 = (0,external_react_.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      updateState = _useState6[1];

  var forceUpdate = (0,external_react_.useCallback)(function () {
    return updateState({});
  }, []);

  var _useHandleChange = (0,useHandleChange/* useHandleChange */.n)(setValues, values),
      handleChange = _useHandleChange.handleChange,
      handleBigChange = _useHandleChange.handleBigChange;

  var _useUserErrors = (0,useUserErrors/* useUserErrors */.z)(userError, setUserError),
      hideUserError = _useUserErrors.hideUserError,
      showUserError = _useUserErrors.showUserError;

  var _useValidations = (0,useValidations/* useValidations */.M)(showUserError, hideUserError, values, handleBigChange),
      phoneInputMask = _useValidations.phoneInputMask,
      nameValidation = _useValidations.nameValidation,
      emailValidation = _useValidations.emailValidation;

  function send() {
    return _send.apply(this, arguments);
  }

  function _send() {
    _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, _yield$axios$post, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              emailValidation();
              nameValidation();
              forceUpdate();

              if (!(userError.length < 1)) {
                _context.next = 17;
                break;
              }

              _context.prev = 4;
              url = "http://localhost:3000/api/mail/form";
              _context.next = 8;
              return external_axios_default().post(url, {
                name: values.name || "",
                email: values.email || "",
                phone: values.phone || "",
                emailTitle: 'Запрос оптовой цены'
              });

            case 8:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setValues({
                phone: "+7(___)___-__-__"
              });
              dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(successForm/* default */.Z, {})));
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);
              alert(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 14]]);
    }));
    return _send.apply(this, arguments);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (optPrice_module_default()).optPrice,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (optPrice_module_default()).optPrice__head,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (optPrice_module_default()).title,
        children: "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043E\u043F\u0442\u043E\u0432\u0443\u044E \u0446\u0435\u043D\u0443"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (optPrice_module_default()).subtitle,
        children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (optPrice_module_default()).form,
      children: [/*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        value: values.name || "",
        name: "name",
        setter: handleChange,
        errors: userError,
        placeholder: "Имя"
      }), /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        value: values.phone || "",
        name: "phone",
        setter: handleChange,
        errors: userError,
        placeholder: "+7 (___)___-__-__",
        validation: phoneInputMask
      }), /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        value: values.email || "",
        name: "email",
        setter: handleChange,
        errors: userError,
        placeholder: "Email"
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
        callBack: function callBack() {
          return send();
        },
        className: (optPrice_module_default()).btnSubmit,
        children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (optPrice_module_default()).description,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (optPrice_module_default()).description__item,
        children: "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0412\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (optPrice_module_default()).description__item,
        children: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0417-152"
      })]
    })]
  });
};

/* harmony default export */ const optPrice = (OptPrice);
// EXTERNAL MODULE: ./src/styles/orderStand.module.scss
var orderStand_module = __webpack_require__(3925);
var orderStand_module_default = /*#__PURE__*/__webpack_require__.n(orderStand_module);
;// CONCATENATED MODULE: ./src/molecules/orderStand/orderStand.tsx
function orderStand_typeof(obj) { "@babel/helpers - typeof"; return orderStand_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, orderStand_typeof(obj); }

function orderStand_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ orderStand_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == orderStand_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function orderStand_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function orderStand_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { orderStand_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { orderStand_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function orderStand_slicedToArray(arr, i) { return orderStand_arrayWithHoles(arr) || orderStand_iterableToArrayLimit(arr, i) || orderStand_unsupportedIterableToArray(arr, i) || orderStand_nonIterableRest(); }

function orderStand_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function orderStand_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return orderStand_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return orderStand_arrayLikeToArray(o, minLen); }

function orderStand_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function orderStand_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function orderStand_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var OrderStand = function OrderStand(_ref) {
  var stand = _ref.stand,
      activeColor = _ref.activeColor;
  var dispatch = (0,external_react_redux_.useDispatch)();

  var _useState = (0,external_react_.useState)({
    phone: "+7(___)___-__-__"
  }),
      _useState2 = orderStand_slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,external_react_.useState)([]),
      _useState4 = orderStand_slicedToArray(_useState3, 2),
      userError = _useState4[0],
      setUserError = _useState4[1];

  var _useState5 = (0,external_react_.useState)(),
      _useState6 = orderStand_slicedToArray(_useState5, 2),
      updateState = _useState6[1];

  var forceUpdate = (0,external_react_.useCallback)(function () {
    return updateState({});
  }, []);

  var _useHandleChange = (0,useHandleChange/* useHandleChange */.n)(setValues, values),
      handleChange = _useHandleChange.handleChange,
      handleBigChange = _useHandleChange.handleBigChange;

  var _useUserErrors = (0,useUserErrors/* useUserErrors */.z)(userError, setUserError),
      hideUserError = _useUserErrors.hideUserError,
      showUserError = _useUserErrors.showUserError;

  var _useValidations = (0,useValidations/* useValidations */.M)(showUserError, hideUserError, values, handleBigChange),
      phoneInputMask = _useValidations.phoneInputMask,
      nameValidation = _useValidations.nameValidation,
      emailValidation = _useValidations.emailValidation;

  function send() {
    return _send.apply(this, arguments);
  }

  function _send() {
    _send = orderStand_asyncToGenerator( /*#__PURE__*/orderStand_regeneratorRuntime().mark(function _callee() {
      var url, _yield$axios$post, data;

      return orderStand_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              emailValidation();
              nameValidation();
              forceUpdate();

              if (!(userError.length < 1)) {
                _context.next = 17;
                break;
              }

              _context.prev = 4;
              url = "http://localhost:3000/api/mail/stand";
              _context.next = 8;
              return external_axios_default().post(url, {
                standId: stand.id,
                phone: values.phone || "",
                name: values.name || "",
                email: values.email || "",
                color: activeColor,
                emailTitle: 'Заказ торгового оборудования'
              });

            case 8:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setValues({
                phone: "+7(___)___-__-__"
              });
              dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(successForm/* default */.Z, {})));
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);
              alert(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 14]]);
    }));
    return _send.apply(this, arguments);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (orderStand_module_default()).orderStand,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (orderStand_module_default()).head,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (orderStand_module_default()).head__title,
        children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (orderStand_module_default()).head__subtitle,
        children: "\u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430"
      })]
    }), stand ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (orderStand_module_default()).card,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (orderStand_module_default()).card__img,
        src: "".concat("http://localhost:3000/images/" + stand.photo[0]),
        alt: "\u0424\u043E\u0442\u043E \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0430"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (orderStand_module_default()).characteristics,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: (orderStand_module_default()).characteristics__name,
          children: stand.name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (orderStand_module_default()).price,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\u043E\u0442"
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: (orderStand_module_default()).price__item,
            children: stand.price
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: (orderStand_module_default()).sizes,
          children: ["\u0420\u0430\u0437\u043C\u0435\u0440: ", stand.height, "x", stand.width, "x(", stand.deep, ")"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (orderStand_module_default()).color,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (orderStand_module_default()).color__title,
            children: "\u0426\u0432\u0435\u0442:"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (orderStand_module_default()).color__activeColor,
            style: {
              backgroundColor: (activeColor === null || activeColor === void 0 ? void 0 : activeColor.color) || ""
            }
          })]
        })]
      })]
    }) : "", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        value: values.name || "",
        name: "name",
        setter: handleChange,
        errors: userError,
        placeholder: "Имя"
      }), /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        value: values.phone || "",
        name: "phone",
        setter: handleChange,
        errors: userError,
        placeholder: "+7 (___)___-__-__",
        validation: phoneInputMask
      }), /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        value: values.email || "",
        name: "email",
        setter: handleChange,
        errors: userError,
        placeholder: "Email"
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
        className: (orderStand_module_default()).submitBtn,
        callBack: function callBack() {
          return send();
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (orderStand_module_default()).description,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (orderStand_module_default()).description__item,
          children: "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0412\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (orderStand_module_default()).description__item,
          children: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0417-152"
        })]
      })]
    })]
  });
};

/* harmony default export */ const orderStand = (OrderStand);
;// CONCATENATED MODULE: ./src/pages/stand/[id].tsx
function _id_typeof(obj) { "@babel/helpers - typeof"; return _id_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _id_typeof(obj); }

function _id_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _id_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _id_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _id_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _id_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { _id_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { _id_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _id_slicedToArray(arr, i) { return _id_arrayWithHoles(arr) || _id_iterableToArrayLimit(arr, i) || _id_unsupportedIterableToArray(arr, i) || _id_nonIterableRest(); }

function _id_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _id_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _id_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _id_arrayLikeToArray(o, minLen); }

function _id_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _id_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _id_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var StandPage = function StandPage(_ref) {
  var _stand$photo;

  var stands = _ref.stands,
      stand = _ref.stand;

  var _useState = (0,external_react_.useState)(0),
      _useState2 = _id_slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var dispatch = (0,external_react_redux_.useDispatch)();
  var delivery = "some text of delivery";

  var _useState3 = (0,external_react_.useState)(stand.description),
      _useState4 = _id_slicedToArray(_useState3, 2),
      activeDescription = _useState4[0],
      setActiveDescription = _useState4[1];

  var _useState5 = (0,external_react_.useState)([{
    id: 1,
    name: "Описание",
    activeDescription: stand.description
  }, {
    id: 2,
    name: "Характеристики",
    activeDescription: stand.characteristics
  }, {
    id: 3,
    name: "Доставка",
    activeDescription: delivery
  }]),
      _useState6 = _id_slicedToArray(_useState5, 1),
      activePanel = _useState6[0];

  var colors = [{
    id: 1,
    ral: "2020",
    color: "#D5D9DC"
  }, {
    id: 2,
    ral: "2020",
    color: "#128E3D"
  }, {
    id: 3,
    ral: "2020",
    color: "#FC0D1B"
  }, {
    id: 4,
    ral: "2020",
    color: "#194A87"
  }, {
    id: 5,
    ral: "2020",
    color: "#D5D9DC"
  }, {
    id: 6,
    ral: "2020",
    color: "#F6B92E"
  }];

  var _useState7 = (0,external_react_.useState)(colors[0]),
      _useState8 = _id_slicedToArray(_useState7, 2),
      activeColor = _useState8[0],
      setActiveColor = _useState8[1];

  function createMarkup() {
    return {
      __html: activeDescription
    };
  }

  function doNextSlide() {
    setActiveIndex(function (current) {
      var res = current === stand.photo.length - 1 ? 0 : current + 1;
      return res;
    });
  }

  function doPrevSlide() {
    setActiveIndex(function (current) {
      var res = current === 0 ? stand.photo.length - 1 : current - 1;
      return res;
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(mainContainer/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (StandPage_module_default()).StandPage,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (StandPage_module_default()).card,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (StandPage_module_default()).imgs,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (StandPage_module_default()).imgsContainer,
            children: stand === null || stand === void 0 ? void 0 : (_stand$photo = stand.photo) === null || _stand$photo === void 0 ? void 0 : _stand$photo.map(function (item, index) {
              return /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: index === activeIndex ? (StandPage_module_default()).imgsContainer__item + " " + (StandPage_module_default()).imgsContainer__item_active : (StandPage_module_default()).imgsContainer__item,
                onClick: function onClick() {
                  return setActiveIndex(index);
                },
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: (StandPage_module_default()).imgItem,
                  src: "".concat("http://localhost:3000/images/" + item),
                  alt: "\u0424\u043E\u0442\u043E \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0430"
                })
              }, index);
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (StandPage_module_default()).activeImg,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (StandPage_module_default()).prevBtn,
              onClick: doPrevSlide,
              children: /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: (StandPage_module_default()).prevBtn__img,
                  src: nextIcon.src,
                  alt: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: (StandPage_module_default()).activeImg__item,
              src: "".concat("http://localhost:3000/images/" + stand.photo[activeIndex]),
              alt: "\u0424\u043E\u0442\u043E \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0430"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (StandPage_module_default()).nextBtn,
              onClick: doNextSlide,
              children: /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: (StandPage_module_default()).nextBtn__img,
                  src: nextIcon.src,
                  alt: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (StandPage_module_default()).characteristics,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (StandPage_module_default()).mainPanel,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: (StandPage_module_default()).article,
              children: ["\u0410\u0440\u0442. ", stand.id]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (StandPage_module_default()).mainPanelContainer,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (StandPage_module_default()).mainPanelContainer__name,
                children: stand.name
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (StandPage_module_default()).order,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (StandPage_module_default()).price,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "\u043E\u0442"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                    className: (StandPage_module_default()).price__number,
                    children: [stand.price, "\u0420"]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: (StandPage_module_default()).optPrice,
                  onClick: function onClick() {
                    return dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(optPrice, {})));
                  },
                  children: "\u0417\u0410\u041F\u0420\u041E\u0421\u0418\u0422\u042C \u041E\u041F\u0422\u041E\u0412\u0423\u042E \u0426\u0415\u041D\u0423"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (StandPage_module_default()).content,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (StandPage_module_default()).sizes,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (StandPage_module_default()).sizes__item,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (StandPage_module_default()).title,
                  children: "\u0412\u044B\u0441\u043E\u0442\u0430"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (StandPage_module_default()).description,
                  children: [stand.height, " \u0441\u043C"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (StandPage_module_default()).sizes__item,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (StandPage_module_default()).title,
                  children: "\u0428\u0438\u0440\u0438\u043D\u0430"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (StandPage_module_default()).description,
                  children: [stand.width, " \u0441\u043C"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (StandPage_module_default()).sizes__item,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (StandPage_module_default()).title,
                  children: "\u0413\u043B\u0443\u0431\u0438\u043D\u0430"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (StandPage_module_default()).description,
                  children: [stand.deep, " \u0441\u043C"]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (StandPage_module_default()).individualSizes,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: (StandPage_module_default()).individualSizes__exclamation,
                src: exclamationPoint.src,
                alt: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: (StandPage_module_default()).individualSizes__description,
                onClick: function onClick() {
                  return dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(orderStand, {
                    stand: stand
                  })));
                },
                children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (StandPage_module_default()).colorChoose,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (StandPage_module_default()).description,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (StandPage_module_default()).colorChooseContent,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: (StandPage_module_default()).colorChooseContent__icon,
                    src: chooseColorIcon.src,
                    alt: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: (StandPage_module_default()).colorChooseContent__description,
                    children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (StandPage_module_default()).description__allColors,
                  children: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0446\u0432\u0435\u0442\u0430"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (StandPage_module_default()).colors,
                children: colors.slice(0, 5).map(function (item, index) {
                  return /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (StandPage_module_default()).colors__item,
                    style: {
                      backgroundColor: item.color
                    }
                  }, index);
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
              className: (StandPage_module_default()).orderBtn,
              callBack: function callBack() {
                return dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(orderStand, {
                  stand: stand,
                  activeColor: activeColor
                })));
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (StandPage_module_default()).description,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (StandPage_module_default()).panel,
          children: activePanel.map(function (item) {
            return /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: item.activeDescription === activeDescription ? (StandPage_module_default()).panel__item + " " + (StandPage_module_default()).panel__item_active : (StandPage_module_default()).panel__item,
              onClick: function onClick() {
                return setActiveDescription(item.activeDescription);
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (StandPage_module_default()).name,
                children: item.name
              })
            }, item.id);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (StandPage_module_default()).content,
          dangerouslySetInnerHTML: createMarkup()
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(sectionCalculation/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(StandsBlock/* default */.Z, {
      stands: stands,
      title: "Похожие товары"
    })]
  });
};

/* harmony default export */ const _id_ = (StandPage);
var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = _id_asyncToGenerator( /*#__PURE__*/_id_regeneratorRuntime().mark(function _callee(context) {
    var res, stands, resp, stand;
    return _id_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat("http://localhost:3000/api/stands/getByCatalogId/", "2"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            stands = _context.sent;
            _context.next = 8;
            return fetch("".concat("http://localhost:3000/api/stands/").concat(context.query.id));

          case 8:
            resp = _context.sent;
            _context.next = 11;
            return resp.json();

          case 11:
            stand = _context.sent;
            return _context.abrupt("return", {
              props: {
                stands: stands,
                stand: stand
              }
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 1881:
/***/ ((module) => {

// Exports
module.exports = {
	"StandPage": "StandPage_StandPage__BkQNA",
	"card": "StandPage_card__a4vX8",
	"imgs": "StandPage_imgs__iaf1F",
	"imgsContainer__item": "StandPage_imgsContainer__item__iOkEg",
	"imgsContainer__item_active": "StandPage_imgsContainer__item_active__IxoAP",
	"imgsContainer": "StandPage_imgsContainer__DJt59",
	"imgItem": "StandPage_imgItem__oV_kD",
	"activeImg": "StandPage_activeImg__hRGYo",
	"activeImg__item": "StandPage_activeImg__item__lS6jK",
	"prevBtn": "StandPage_prevBtn__wfJHz",
	"prevBtn__img": "StandPage_prevBtn__img__HTu0f",
	"nextBtn": "StandPage_nextBtn__B4QFY",
	"characteristics": "StandPage_characteristics__yFmKR",
	"mainPanel": "StandPage_mainPanel__ehvJA",
	"article": "StandPage_article__61uYB",
	"mainPanelContainer": "StandPage_mainPanelContainer__FurYX",
	"mainPanelContainer__name": "StandPage_mainPanelContainer__name__oRjin",
	"order": "StandPage_order__irBo1",
	"price": "StandPage_price__aUfFn",
	"price__number": "StandPage_price__number__6z6yZ",
	"optPrice": "StandPage_optPrice__cpMjH",
	"content": "StandPage_content__tTR7m",
	"sizes": "StandPage_sizes__V1Iy4",
	"sizes__item": "StandPage_sizes__item__35jds",
	"description": "StandPage_description__syxx1",
	"individualSizes": "StandPage_individualSizes__0WDvK",
	"individualSizes__description": "StandPage_individualSizes__description__FWme5",
	"colorChoose": "StandPage_colorChoose__Z5oGr",
	"colorChooseContent": "StandPage_colorChooseContent__sfFXE",
	"colorChooseContent__description": "StandPage_colorChooseContent__description__34LQf",
	"description__allColors": "StandPage_description__allColors__ZTsN5",
	"colors": "StandPage_colors__SBPPU",
	"colors__item": "StandPage_colors__item__9fhTA",
	"orderBtn": "StandPage_orderBtn__djosN",
	"panel": "StandPage_panel__xF66u",
	"panel__item": "StandPage_panel__item__SRQia",
	"name": "StandPage_name__dZWyK",
	"panel__item_active": "StandPage_panel__item_active__ClKnr",
	"prevSlide": "StandPage_prevSlide__5bHL3",
	"nextSlide": "StandPage_nextSlide__oF2xD"
};


/***/ }),

/***/ 3893:
/***/ ((module) => {

// Exports
module.exports = {
	"optPrice__head": "optPrice_optPrice__head__4LmV3",
	"title": "optPrice_title__LoRQi",
	"subtitle": "optPrice_subtitle__OL8Sa",
	"optPrice": "optPrice_optPrice__01Rg_",
	"form": "optPrice_form__GlXIT",
	"btnSubmit": "optPrice_btnSubmit__9_2U_",
	"description": "optPrice_description__a2Cun",
	"description__item": "optPrice_description__item__N_7Wa"
};


/***/ }),

/***/ 3925:
/***/ ((module) => {

// Exports
module.exports = {
	"orderStand": "orderStand_orderStand__ogiP7",
	"head": "orderStand_head__iWYwn",
	"head__subtitle": "orderStand_head__subtitle__kcSll",
	"card": "orderStand_card__8reC7",
	"card__img": "orderStand_card__img__N6qMm",
	"characteristics": "orderStand_characteristics__aIQ3H",
	"price": "orderStand_price___gCsS",
	"price__item": "orderStand_price__item__T4JOL",
	"sizes": "orderStand_sizes__XL73t",
	"color": "orderStand_color__5nPYD",
	"color__activeColor": "orderStand_color__activeColor__M7EIR",
	"submitBtn": "orderStand_submitBtn__vhKkb",
	"description": "orderStand_description__VNE1B",
	"description__item": "orderStand_description__item__6e5ym"
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
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,612,273,252,789,930,288], () => (__webpack_exec__(9489)));
module.exports = __webpack_exports__;

})();