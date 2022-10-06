exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 4252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sectionCalculation)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/atoms/formInput/formInput.tsx
var formInput = __webpack_require__(1650);
;// CONCATENATED MODULE: ./src/molecules/sectionCalculation/imgs/uploadImg.svg
/* harmony default export */ const uploadImg = ({"src":"/_next/static/media/uploadImg.f07f6713.svg","height":16,"width":16});
// EXTERNAL MODULE: ./src/atoms/CustomButton/CustomButton.tsx
var CustomButton = __webpack_require__(5919);
;// CONCATENATED MODULE: ./src/molecules/sectionCalculation/imgs/decorationLeft.svg
/* harmony default export */ const decorationLeft = ({"src":"/_next/static/media/decorationLeft.7ddc9c4e.svg","height":1178,"width":315});
;// CONCATENATED MODULE: ./src/molecules/sectionCalculation/imgs/decorationRight.svg
/* harmony default export */ const decorationRight = ({"src":"/_next/static/media/decorationRight.8ab7c371.svg","height":1178,"width":315});
// EXTERNAL MODULE: ./src/styles/sectionCalculation.module.scss
var sectionCalculation_module = __webpack_require__(5833);
var sectionCalculation_module_default = /*#__PURE__*/__webpack_require__.n(sectionCalculation_module);
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
// EXTERNAL MODULE: ./src/molecules/successForm/successForm.tsx + 1 modules
var successForm = __webpack_require__(3992);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/molecules/sectionCalculation/sectionCalculation.tsx
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



















var SectionCalculation = function SectionCalculation() {
  var dispatch = (0,external_react_redux_.useDispatch)();

  var _useState = (0,external_react_.useState)({
    phone: "+7(___)___-__-__"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,external_react_.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0,external_react_.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      userError = _useState6[0],
      setUserError = _useState6[1];

  var _useState7 = (0,external_react_.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      updateState = _useState8[1];

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

  var handleOnChange = function handleOnChange(e) {
    setFile(e.target.files[0]);
  };

  function send(_x) {
    return _send.apply(this, arguments);
  }

  function _send() {
    _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var url, formData, _yield$axios$post, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              emailValidation();
              nameValidation();
              forceUpdate();

              if (!(userError.length < 1)) {
                _context.next = 25;
                break;
              }

              _context.prev = 5;
              url = "http://localhost:3000/api/mail/form";
              formData = new FormData();
              formData.append("file", file || uploadImg);
              formData.append("name", values.name || "Без имени");
              formData.append("phone", values.phone || "Без телефона");
              formData.append("email", values.email || "Без email");
              formData.append("comment", values.comment || "Без комментария");
              formData.append("emailTitle", "Расчет стоимости индивидуального заказа");
              _context.next = 16;
              return external_axios_default().post(url, formData);

            case 16:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setValues({
                phone: "+7(___)___-__-__"
              });
              dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(successForm/* default */.Z, {})));
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](5);
              alert(_context.t0);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 22]]);
    }));
    return _send.apply(this, arguments);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (sectionCalculation_module_default()).sectionCalculation,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (sectionCalculation_module_default()).decoration,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (sectionCalculation_module_default()).decoration__item + " " + (sectionCalculation_module_default()).decoration__item_left,
        src: decorationLeft.src,
        alt: "\u0414\u0435\u043A\u043E\u0440\u0430\u0446\u0438\u044F"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (sectionCalculation_module_default()).decoration__item + " " + (sectionCalculation_module_default()).decoration__item_right,
        src: decorationRight.src,
        alt: "\u0414\u0435\u043A\u043E\u0440\u0430\u0446\u0438\u044F"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (sectionCalculation_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (sectionCalculation_module_default()).description,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: (sectionCalculation_module_default()).description__title,
          children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (sectionCalculation_module_default()).description__item,
          children: "\u041C\u044B \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0434\u0430\u0435\u043C, \u0430 \u0432\u043D\u0438\u043A\u0430\u0435\u043C \u0432 \u0441\u0443\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0435\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0412\u0430\u0448\u0438\u0445 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u0430."
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sectionCalculation_module_default()).form,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: function onSubmit(e) {
            return send(e);
          },
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
          }), /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
            value: values.comment || "",
            name: "comment",
            setter: handleChange,
            errors: userError,
            placeholder: "Комментарий"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (sectionCalculation_module_default()).attachment,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              className: (sectionCalculation_module_default()).attachment__label,
              htmlFor: "File",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (sectionCalculation_module_default()).attachmentIcon,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: (sectionCalculation_module_default()).attachmentIcon__content,
                  src: uploadImg.src,
                  alt: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (sectionCalculation_module_default()).attachmentDescription,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (sectionCalculation_module_default()).attachmentDescription__content,
                  children: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                onChange: function onChange(e) {
                  return handleOnChange(e);
                },
                className: (sectionCalculation_module_default()).attachment__inputFile,
                id: "File",
                type: "file"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (sectionCalculation_module_default()).attachment__description,
              children: "\u0414\u043E 20 \u0444\u0430\u0439\u043B\u043E\u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0430: jpg, png, heic, pdf, ai, cdr, doc, xls, docx, xlsx. \u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10MB"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
            type: "submit",
            className: (sectionCalculation_module_default()).btnSubmit,
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (sectionCalculation_module_default()).form__warning,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0412\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0417-152"
            })]
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const sectionCalculation = (SectionCalculation);

/***/ }),

/***/ 5833:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionCalculation": "sectionCalculation_sectionCalculation__pmYf6",
	"decoration__item": "sectionCalculation_decoration__item__L7pXX",
	"decoration__item_left": "sectionCalculation_decoration__item_left__RmX59",
	"decoration__item_right": "sectionCalculation_decoration__item_right__1JfiN",
	"content": "sectionCalculation_content__7VogR",
	"description": "sectionCalculation_description__yzaEV",
	"description__title": "sectionCalculation_description__title__ilLIu",
	"description__item": "sectionCalculation_description__item__hBQnp",
	"form": "sectionCalculation_form__cL8yk",
	"attachment": "sectionCalculation_attachment__3DUKb",
	"attachment__label": "sectionCalculation_attachment__label__62sUc",
	"attachmentIcon": "sectionCalculation_attachmentIcon__lw4fE",
	"attachmentIcon__content": "sectionCalculation_attachmentIcon__content___6lOF",
	"attachmentDescription": "sectionCalculation_attachmentDescription__7Woa_",
	"attachmentDescription__content": "sectionCalculation_attachmentDescription__content__oOkkD",
	"attachment__inputFile": "sectionCalculation_attachment__inputFile__Mbqhc",
	"attachment__description": "sectionCalculation_attachment__description__2Rufv",
	"btnSubmit": "sectionCalculation_btnSubmit__hAW7c",
	"form__warning": "sectionCalculation_form__warning__FRyQM",
	"decoration": "sectionCalculation_decoration__BchGH"
};


/***/ })

};
;