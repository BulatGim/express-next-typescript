(() => {
var exports = {};
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 4137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9619);
/* harmony import */ var _styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _molecules_StandCard_StandCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2789);
/* harmony import */ var _molecules_sectionCalculation_sectionCalculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4252);
/* harmony import */ var _molecules_sectionOurClients_sectionOurClients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1986);
/* harmony import */ var _organisms_sorting_sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3773);
/* harmony import */ var _hooks_useElementOnScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7579);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_mainContainer_mainContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3273);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var CatalogPageSearchString = function CatalogPageSearchString(_ref) {
  var stands = _ref.stands;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(stands),
      _useState2 = _slicedToArray(_useState, 2),
      catalogStand = _useState2[0],
      setCatalogStands = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      sorting = _useState4[0],
      setSorting = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    id: 1,
    name: "Не выбрано",
    isActive: true,
    sorting: ""
  }, {
    id: 2,
    name: "По цене (возрастанию)",
    isActive: false,
    sorting: "lowerPrice"
  }, {
    id: 3,
    name: "По цене (убыванию)",
    isActive: false,
    sorting: "biggerPrice"
  }]),
      _useState8 = _slicedToArray(_useState7, 2),
      points = _useState8[0],
      setPoints = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isChooseActive = _useState10[0],
      setIsChooseActive = _useState10[1];

  var _useElementOnScreen = (0,_hooks_useElementOnScreen__WEBPACK_IMPORTED_MODULE_5__/* .useElementOnScreen */ .W)({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }),
      _useElementOnScreen2 = _slicedToArray(_useElementOnScreen, 2),
      containerRef = _useElementOnScreen2[0],
      isVisible = _useElementOnScreen2[1];

  var loadMoreStands = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$axios$get, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat("http://localhost:3000/api/stands/getSearchQuery", "?searchString=").concat(router.query.searchQuery, "&page=").concat(page, "&sort=").concat(sorting));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setPage(function (prevState) {
                return prevState + 1;
              });
              setCatalogStands(function (prevState) {
                return [].concat(_toConsumableArray(prevState), _toConsumableArray(data));
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadMoreStands() {
      return _ref2.apply(this, arguments);
    };
  }();

  var sortByParams = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$axios$get2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setPage(2);
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat("http://localhost:3000/api/stands/getSearchQuery", "?searchString=").concat(router.query.searchQuery, "&page=1&sort=").concat(sorting));

            case 3:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              setCatalogStands(data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function sortByParams() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isVisible) {
      loadMoreStands();
    }
  }, [isVisible]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sortByParams();
  }, [sorting]);

  function newSearchQuery() {
    return _newSearchQuery.apply(this, arguments);
  }

  function _newSearchQuery() {
    _newSearchQuery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var url, _yield$axios$get3, data;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = "http://localhost:3000/api/stands/getSearchQuery";
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat(url, "?searchString=").concat(router.query.searchQuery));

            case 3:
              _yield$axios$get3 = _context3.sent;
              data = _yield$axios$get3.data;
              setCatalogStands(data);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _newSearchQuery.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    newSearchQuery();
  }, [router.query.searchQuery]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_templates_mainContainer_mainContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: (_styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().SearchPage),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: (_styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().SearchPage__container),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: (_styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h2", {
            className: (_styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content__title),
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043F\u043E"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_organisms_sorting_sorting__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            setSorting: setSorting,
            setSortingPoints: setPoints,
            sortingPoints: points,
            isSortingActive: isChooseActive,
            setIsSortingActive: setIsChooseActive
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: (_styles_SearchPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().standsContainer),
            children: catalogStand === null || catalogStand === void 0 ? void 0 : catalogStand.map(function (item) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_molecules_StandCard_StandCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                stand: item
              }, item.id);
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        ref: containerRef
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_molecules_sectionCalculation_sectionCalculation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_molecules_sectionOurClients_sectionOurClients__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
    })
  });
};

var getServerSideProps = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(context) {
    var url, res, stands;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = "http://localhost:3000/api/stands/getSearchQuery";
            _context4.next = 3;
            return fetch("".concat(url, "?searchString=").concat(context.query.searchQuery));

          case 3:
            res = _context4.sent;
            _context4.next = 6;
            return res.json();

          case 6:
            stands = _context4.sent;
            return _context4.abrupt("return", {
              props: {
                stands: stands
              }
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getServerSideProps(_x) {
    return _ref4.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPageSearchString);

/***/ }),

/***/ 9619:
/***/ ((module) => {

// Exports
module.exports = {
	"SearchPage__container": "SearchPage_SearchPage__container__Z6cUm",
	"content__title": "SearchPage_content__title__R8Q0G",
	"content": "SearchPage_content__Ezk3f",
	"standsContainer": "SearchPage_standsContainer__AZC8h",
	"sorting__title": "SearchPage_sorting__title__elYGm",
	"sorting": "SearchPage_sorting__wu8GM",
	"customSelect": "SearchPage_customSelect__XjH0B",
	"selected": "SearchPage_selected__IaKpr",
	"container": "SearchPage_container__A6VGM",
	"selectItem": "SearchPage_selectItem__lSMly"
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
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,612,273,252,789,986,114], () => (__webpack_exec__(4137)));
module.exports = __webpack_exports__;

})();