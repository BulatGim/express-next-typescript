exports.id = 664;
exports.ids = [664];
exports.modules = {

/***/ 932:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _asyncToGenerator;
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 227:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addBasePath = addBasePath;

var _addPathPrefix = __webpack_require__(1751);

var _normalizeTrailingSlash = __webpack_require__(4969);

var basePath =  false || '';

function addBasePath(path, required) {
  if (false) {}

  return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7995:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addLocale = void 0;

var _normalizeTrailingSlash = __webpack_require__(4969);

var addLocale = function addLocale(path) {
  if (false) { var _len, args, _key, _require; }

  return path;
};

exports.addLocale = addLocale;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7565:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.detectDomainLocale = void 0;

var detectDomainLocale = function detectDomainLocale() {
  if (false) { var _require; }
};

exports.detectDomainLocale = detectDomainLocale;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4019:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
var basePath = (/* unused pure expression or super */ null && ( false || ''));

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var finalLocale, proto, domain, target, detectDomainLocale, normalizeLocalePath; } else {
    return false;
  }
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 8771:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasBasePath = hasBasePath;

var _pathHasPrefix = __webpack_require__(4567);

var basePath =  false || '';

function hasBasePath(path) {
  return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 7942:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(6689));

var _router = __webpack_require__(4957);

var _addLocale = __webpack_require__(7995);

var _routerContext = __webpack_require__(4964);

var _appRouterContext = __webpack_require__(3280);

var _useIntersection = __webpack_require__(639);

var _getDomainLocale = __webpack_require__(4019);

var _addBasePath = __webpack_require__(227); // @ts-ignore useTransition exist


var hasUseTransition = typeof _react["default"].useTransition !== 'undefined';
var prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (false) {}
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, soft, shallow, scroll, locale, startTransition) {
  var nodeName = e.currentTarget.nodeName; // anchors inside an svg have a lowercase nodeName

  var isAnchorNodeName = nodeName.toUpperCase() === 'A';

  if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault();

  var navigate = function navigate() {
    // If the router is an AppRouterInstance, then it'll have `softPush` and
    // `softReplace`.
    if ('softPush' in router && 'softReplace' in router) {
      // If we're doing a soft navigation, use the soft variants of
      // replace/push.
      var method = soft ? replace ? 'softReplace' : 'softPush' : replace ? 'replace' : 'push';
      router[method](href);
    } else {
      router[replace ? 'replace' : 'push'](href, as, {
        shallow: shallow,
        locale: locale,
        scroll: scroll
      });
    }
  };

  if (startTransition) {
    startTransition(navigate);
  } else {
    navigate();
  }
}

var Link = /*#__PURE__*/_react["default"].forwardRef(function LinkComponent(props, forwardedRef) {
  if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }

  var children;

  var hrefProp = props.href,
      asProp = props.as,
      childrenProp = props.children,
      prefetchProp = props.prefetch,
      passHref = props.passHref,
      replace = props.replace,
      soft = props.soft,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale,
      _onClick = props.onClick,
      _onMouseEnter = props.onMouseEnter,
      _onTouchStart = props.onTouchStart,
      _props$legacyBehavior = props.legacyBehavior,
      legacyBehavior = _props$legacyBehavior === void 0 ? Boolean(false) !== true : _props$legacyBehavior,
      restProps = _object_without_properties_loose(props, ["href", "as", "children", "prefetch", "passHref", "replace", "soft", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);

  children = childrenProp;

  if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  }

  var p = prefetchProp !== false;

  var _ref = hasUseTransition ? // There is no difference between renders in this case, only between using React 18 vs 17.
  // @ts-ignore useTransition exists
  // eslint-disable-next-line react-hooks/rules-of-hooks
  _react["default"].useTransition() : [],
      _ref2 = _slicedToArray(_ref, 2),

  /* isPending */
  startTransition = _ref2[1];

  var router = _react["default"].useContext(_routerContext.RouterContext); // TODO-APP: type error. Remove `as any`


  var appRouter = _react["default"].useContext(_appRouterContext.AppRouterContext);

  if (appRouter) {
    router = appRouter;
  }

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _resolveHref = (0, _router).resolveHref(router, hrefProp, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    return {
      href: resolvedHref,
      as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
    };
  }, [router, hrefProp, asProp]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var previousHref = _react["default"].useRef(href);

  var previousAs = _react["default"].useRef(as); // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (legacyBehavior) {
    if (false) {} else {
      child = _react["default"].Children.only(children);
    }
  }

  var childRef = legacyBehavior ? child && _typeof(child) === 'object' && child.ref : forwardedRef;

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 3),
      setIntersectionRef = _useIntersection3[0],
      isVisible = _useIntersection3[1],
      resetVisible = _useIntersection3[2];

  var setRef = _react["default"].useCallback(function (el) {
    // Before the link getting observed, check if visible state need to be reset
    if (previousAs.current !== as || previousHref.current !== href) {
      resetVisible();
      previousAs.current = as;
      previousHref.current = href;
    }

    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (_typeof(childRef) === 'object') {
        childRef.current = el;
      }
    }
  }, [as, childRef, href, resetVisible, setIntersectionRef]);

  _react["default"].useEffect(function () {
    var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (false) {}

      if (!legacyBehavior && typeof _onClick === 'function') {
        _onClick(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, soft, shallow, scroll, locale, appRouter ? startTransition : undefined);
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      if (!legacyBehavior && typeof _onMouseEnter === 'function') {
        _onMouseEnter(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      if ((0, _router).isLocalURL(href)) {
        prefetch(router, href, as, {
          priority: true
        });
      }
    },
    onTouchStart: function onTouchStart(e) {
      if (!legacyBehavior && typeof _onTouchStart === 'function') {
        _onTouchStart(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
        child.props.onTouchStart(e);
      }

      if ((0, _router).isLocalURL(href)) {
        prefetch(router, href, as, {
          priority: true
        });
      }
    }
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user

  if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
    childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return legacyBehavior ? /*#__PURE__*/_react["default"].cloneElement(child, childProps) : /*#__PURE__*/_react["default"].createElement("a", Object.assign({}, restProps, childProps), children);
});

var _default = Link;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4969:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizePathTrailingSlash = void 0;

var _removeTrailingSlash = __webpack_require__(3297);

var _parsePath = __webpack_require__(8854);

var normalizePathTrailingSlash = function normalizePathTrailingSlash(path) {
  if (!path.startsWith('/')) {
    return path;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname,
      query = _parsePath2.query,
      hash = _parsePath2.hash;

  if (false) {}

  return "".concat((0, _removeTrailingSlash).removeTrailingSlash(pathname)).concat(query).concat(hash);
};

exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 5678:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeBasePath = removeBasePath;

var _hasBasePath = __webpack_require__(8771);

var basePath =  false || '';

function removeBasePath(path) {
  if (false) {}

  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 9781:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeLocale = removeLocale;

var _parsePath = __webpack_require__(8854);

function removeLocale(path, locale) {
  if (false) { var localeLower, pathLower, _parsePath2, pathname; }

  return path;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4989:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(9565));

var _trustedTypes = __webpack_require__(5740);

var _requestIdleCallback = __webpack_require__(6286); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator() // eslint-disable-next-line no-sequences
  .then(function (value) {
    return resolver(value), value;
  })["catch"](function (err) {
    map["delete"](key);
    throw err;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    var selector = "\n      link[rel=\"prefetch\"][href^=\"".concat(href, "\"],\n      link[rel=\"preload\"][href^=\"").concat(href, "\"],\n      script[src^=\"").concat(href, "\"]");

    if (document.querySelector(selector)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


var devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (false) {}

    if (true) {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return setTimeout(function () {
          if (!cancelled) {
            reject(err);
          }
        }, ms);
      });
    }
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) { var scriptUrl; }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }).map(function (v) {
        return (0, _trustedTypes).__unsafeCreateTrustedScriptURL(v);
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    // With HMR we might need to "reload" scripts when they are
    // disposed and readded. Executing scripts twice has no functional
    // differences
    if (true) {
      var prom = loadedScripts.get(src.toString());

      if (prom) {
        return prom;
      } // Skip executing script if it's already in the DOM:


      if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
        return Promise.resolve();
      }

      loadedScripts.set(src.toString(), prom = appendScript(src));
      return prom;
    } else {}
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      (execute ? Promise.resolve().then(function () {
        return execute();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }) : Promise.resolve(undefined)).then(function (input) {
        var old = entrypoints.get(route);

        if (old && 'resolve' in old) {
          if (input) {
            entrypoints.set(route, input);
            old.resolve(input);
          }
        } else {
          if (input) {
            entrypoints.set(route, input);
          } else {
            entrypoints["delete"](route);
          } // when this entrypoint has been resolved before
          // the route is outdated and we want to invalidate
          // this cache entry


          routes["delete"](route);
        }
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        var devBuildPromiseResolve;

        if (false) {}

        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        })["finally"](function () {
          return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script.toString(), 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback).requestIdleCallback(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 5740:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */

var policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */

function getPolicy() {
  if (typeof policy === 'undefined' && false) { var ref; }

  return policy;
}

function __unsafeCreateTrustedScriptURL(url) {
  var ref;
  return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 639:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(6689);

var _requestIdleCallback = __webpack_require__(6286);

var hasIntersectionObserver = typeof IntersectionObserver === 'function';

function useIntersection(_ref) {
  var rootRef = _ref.rootRef,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react).useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      element = _useState4[0],
      setElement = _useState4[1];

  (0, _react).useEffect(function () {
    if (hasIntersectionObserver) {
      if (unobserve.current) {
        unobserve.current();
        unobserve.current = undefined;
      }

      if (isDisabled || visible) return;

      if (element && element.tagName) {
        unobserve.current = observe(element, function (isVisible) {
          return isVisible && setVisible(isVisible);
        }, {
          root: rootRef == null ? void 0 : rootRef.current,
          rootMargin: rootMargin
        });
      }

      return function () {
        unobserve.current == null ? void 0 : unobserve.current();
        unobserve.current = undefined;
      };
    } else {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [element, isDisabled, rootMargin, rootRef, visible]);
  var resetVisible = (0, _react).useCallback(function () {
    setVisible(false);
  }, []);
  return [setElement, visible, resetVisible];
}

var observers = new Map();
var idList = [];

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
      var index = idList.findIndex(function (obj) {
        return obj.root === id.root && obj.margin === id.margin;
      });

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

function createObserver(options) {
  var id = {
    root: options.root || null,
    margin: options.rootMargin || ''
  };
  var existing = idList.find(function (obj) {
    return obj.root === id.root && obj.margin === id.margin;
  });
  var instance;

  if (existing) {
    instance = observers.get(existing);

    if (instance) {
      return instance;
    }
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  instance = {
    id: id,
    observer: observer,
    elements: elements
  };
  idList.push(id);
  observers.set(id, instance);
  return instance;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;

var _async_to_generator = (__webpack_require__(932)/* ["default"] */ .Z);

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _normalizeTrailingSlash = __webpack_require__(4969);

var _removeTrailingSlash = __webpack_require__(3297);

var _routeLoader = __webpack_require__(4989);

var _script = __webpack_require__(2189);

var _isError = _interop_require_wildcard(__webpack_require__(676));

var _denormalizePagePath = __webpack_require__(4406);

var _normalizeLocalePath = __webpack_require__(4014);

var _mitt = _interop_require_default(__webpack_require__(8020));

var _utils = __webpack_require__(9232);

var _isDynamic = __webpack_require__(1428);

var _parseRelativeUrl = __webpack_require__(1292);

var _querystring = __webpack_require__(979);

var _resolveRewrites = _interop_require_default(__webpack_require__(6052));

var _routeMatcher = __webpack_require__(4226);

var _routeRegex = __webpack_require__(5052);

var _formatUrl = __webpack_require__(3938);

var _detectDomainLocale = __webpack_require__(7565);

var _parsePath = __webpack_require__(8854);

var _addLocale = __webpack_require__(7995);

var _removeLocale = __webpack_require__(9781);

var _removeBasePath = __webpack_require__(5678);

var _addBasePath = __webpack_require__(227);

var _hasBasePath = __webpack_require__(8771);

var _getNextPathnameInfo = __webpack_require__(5789);

var _formatNextPathnameInfo = __webpack_require__(299);

var _compareStates = __webpack_require__(6220);

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (!(0, _utils).isAbsoluteUrl(url)) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils).getLocationOrigin();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omit(object, keys) {
  var omitted = {};
  Object.keys(object).forEach(function (key) {
    if (!keys.includes(key)) {
      omitted[key] = object[key];
    }
  });
  return omitted;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _formatUrl).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  var urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  var urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
  var urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error("Invalid href passed to next/router: ".concat(urlAsString, ", repeated forward-slashes (//) or backslashes \\ are not valid in the href"));
    var normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _formatUrl).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omit(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_1) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils).getLocationOrigin();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}

var manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts, options) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin',
    method: options.method || 'GET',
    headers: Object.assign({}, options.headers, {
      'x-nextjs-data': '1'
    })
  }).then(function (response) {
    return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
  });
}

var backgroundCache = {};

function fetchNextData(_ref) {
  var dataHref = _ref.dataHref,
      inflightCache = _ref.inflightCache,
      isPrefetch = _ref.isPrefetch,
      hasMiddleware = _ref.hasMiddleware,
      isServerRender = _ref.isServerRender,
      parseJSON = _ref.parseJSON,
      persistCache = _ref.persistCache,
      isBackground = _ref.isBackground,
      unstable_skipClientCache = _ref.unstable_skipClientCache;

  var _URL = new URL(dataHref, window.location.href),
      cacheKey = _URL.href;

  var ref1;

  var getData = function getData(params) {
    return fetchRetry(dataHref, isServerRender ? 3 : 1, {
      headers: isPrefetch ? {
        purpose: 'prefetch'
      } : {},
      method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : 'GET'
    }).then(function (response) {
      if (response.ok && (params == null ? void 0 : params.method) === 'HEAD') {
        return {
          dataHref: dataHref,
          response: response,
          text: '',
          json: {}
        };
      }

      return response.text().then(function (text) {
        if (!response.ok) {
          /**
          * When the data response is a redirect because of a middleware
          * we do not consider it an error. The headers must bring the
          * mapped location.
          * TODO: Change the status code in the handler.
          */
          if (hasMiddleware && [301, 302, 307, 308].includes(response.status)) {
            return {
              dataHref: dataHref,
              response: response,
              text: text,
              json: {}
            };
          }

          if (!hasMiddleware && response.status === 404) {
            var ref;

            if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
              return {
                dataHref: dataHref,
                json: {
                  notFound: SSG_DATA_NOT_FOUND
                },
                response: response,
                text: text
              };
            }
          }

          var error = new Error("Failed to load static props");
          /**
          * We should only trigger a server-side transition if this was
          * caused on a client-side transition. Otherwise, we'd get into
          * an infinite loop.
          */

          if (!isServerRender) {
            (0, _routeLoader).markAssetError(error);
          }

          throw error;
        }

        return {
          dataHref: dataHref,
          json: parseJSON ? tryToParseAsJSON(text) : null,
          response: response,
          text: text
        };
      });
    }).then(function (data) {
      if (!persistCache || false || data.response.headers.get('x-middleware-cache') === 'no-cache') {
        delete inflightCache[cacheKey];
      }

      return data;
    })["catch"](function (err) {
      delete inflightCache[cacheKey];
      throw err;
    });
  }; // when skipping client cache we wait to update
  // inflight cache until successful data response
  // this allows racing click event with fetching newer data
  // without blocking navigation when stale data is available


  if (unstable_skipClientCache && persistCache) {
    return getData({}).then(function (data) {
      inflightCache[cacheKey] = Promise.resolve(data);
      return data;
    });
  }

  if (inflightCache[cacheKey] !== undefined) {
    return inflightCache[cacheKey];
  }

  return inflightCache[cacheKey] = getData(isBackground ? {
    method: 'HEAD'
  } : {});
}

function tryToParseAsJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

function createKey() {
  return Math.random().toString(36).slice(2, 10);
}

function handleHardNavigation(_ref2) {
  var url = _ref2.url,
      router = _ref2.router;

  // ensure we don't trigger a hard navigation to the same
  // URL as this can end up with an infinite refresh
  if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
    throw new Error("Invariant: attempted to hard navigate to the same URL ".concat(url, " ").concat(location.href));
  }

  window.location.href = url;
}

var getCancelledHandler = function getCancelledHandler(_ref3) {
  var route = _ref3.route,
      router = _ref3.router;
  var cancelled = false;

  var cancel = router.clc = function () {
    cancelled = true;
  };

  var handleCancelled = function handleCancelled() {
    if (cancelled) {
      var error = new Error("Abort fetching component for route: \"".concat(route, "\""));
      error.cancelled = true;
      throw error;
    }

    if (cancel === router.clc) {
      router.clc = null;
    }
  };

  return handleCancelled;
};

var Router = /*#__PURE__*/function () {
  function Router(pathname1, query1, as1, _ref4) {
    var _this2 = this;

    var initialProps = _ref4.initialProps,
        pageLoader = _ref4.pageLoader,
        App = _ref4.App,
        wrapApp = _ref4.wrapApp,
        Component = _ref4.Component,
        err = _ref4.err,
        subscription = _ref4.subscription,
        isFallback = _ref4.isFallback,
        locale = _ref4.locale,
        locales = _ref4.locales,
        defaultLocale = _ref4.defaultLocale,
        domainLocales = _ref4.domainLocales,
        isPreview = _ref4.isPreview,
        isRsc = _ref4.isRsc;

    _classCallCheck(this, Router);

    // Server Data Cache
    this.sdc = {};
    this.isFirstPopStateEvent = true;
    this._key = createKey();

    this.onPopState = function (e) {
      var isFirstPopStateEvent = _this2.isFirstPopStateEvent;
      _this2.isFirstPopStateEvent = false;
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this2.pathname,
            query = _this2.query;

        _this2.changeState('replaceState', (0, _formatUrl).formatWithValidation({
          pathname: (0, _addBasePath).addBasePath(_pathname),
          query: query
        }), (0, _utils).getURL());

        return;
      } // __NA is used to identify if the history entry can be handled by the app-router.


      if (state.__NA) {
        window.location.reload();
        return;
      }

      if (!state.__N) {
        return;
      } // Safari fires popstateevent when reopening the browser.


      if (isFirstPopStateEvent && _this2.locale === state.options.locale && state.as === _this2.asPath) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          key = state.key;

      if (false) { var v; }

      _this2._key = key;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(url),
          pathname = _parseRelativeUrl2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this2.isSsr && as === (0, _addBasePath).addBasePath(_this2.asPath) && pathname === (0, _addBasePath).addBasePath(_this2.pathname)) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this2._bps && !_this2._bps(state)) {
        return;
      }

      _this2.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this2._shallow,
        locale: options.locale || _this2.defaultLocale,
        // @ts-ignore internal value not exposed on types
        _h: 0
      }), forcedScroll);
    }; // represents the current component key


    var route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP,
        __N_RSC: !!isRsc
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.basePath =  false || '';
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isLocaleDomain = false;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);

    if (false) {}

    this.state = {
      route: route,
      pathname: pathname1,
      query: query1,
      asPath: autoExportDynamic ? pathname1 : as1,
      isPreview: !!isPreview,
      locale:  false ? 0 : undefined,
      isFallback: isFallback
    };
    this._initialMatchesMiddlewarePromise = Promise.resolve(false);

    if (false) { var asPath, options; }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, url, as, options, forcedScroll) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var isQueryUpdating, shouldResolveHref, nextState, readyStateChange, isSsr, prevLocale, parsedAs, localePathResult, didNavigate, ref, detectedDomain, asNoBasePath, _options$shallow, shallow, _options$scroll, scroll, routeProps, cleanedAs, localeChange, parsed, pathname, query, pages, rewrites, _yield$Promise$all, _yield$Promise$all2, resolvedAs, isMiddlewareMatch, rewritesResult, route, routeMatch, asPathname, routeRegex, shouldInterpolate, interpolatedAs, missingParams, ref2, ref3, routeInfo, prefixedAs, rewriteAs, localeResult, _routeRegex2, curRouteMatch, _routeInfo, error, props, __N_SSG, __N_SSP, component, scripts, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, _route, isValidShallowRoute, _scroll, shouldScroll, resetScroll, upcomingRouterState, upcomingScrollState, canSkipUpdating, hashRegex;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                handleHardNavigation({
                  url: url,
                  router: _this
                });
                return _context.abrupt("return", false);

              case 3:
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.
                isQueryUpdating = options._h;
                shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
                nextState = _extends({}, _this.state); // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated
                // or a navigation has occurred

                readyStateChange = _this.isReady !== true;
                _this.isReady = true;
                isSsr = _this.isSsr;

                if (!isQueryUpdating) {
                  _this.isSsr = false;
                } // if a route transition is already in progress before
                // the query updating is triggered ignore query updating


                if (!(isQueryUpdating && _this.clc)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", false);

              case 12:
                prevLocale = nextState.locale;

                if (true) {
                  _context.next = 25;
                  break;
                }

                nextState.locale = options.locale === false ? _this.defaultLocale : options.locale || nextState.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = nextState.locale;
                }

                parsedAs = (0, _parseRelativeUrl).parseRelativeUrl((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);

                if (localePathResult.detectedLocale) {
                  nextState.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = (0, _addBasePath).addBasePath(parsedAs.pathname);
                  as = (0, _formatUrl).formatWithValidation(parsedAs);
                  url = (0, _addBasePath).addBasePath((0, _normalizeLocalePath).normalizeLocalePath((0, _hasBasePath).hasBasePath(url) ? (0, _removeBasePath).removeBasePath(url) : url, _this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = (0, _detectDomainLocale).detectDomainLocale(_this.domainLocales, undefined, nextState.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 25;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 25:
                // marking route changes as a navigation start entry
                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll;
                routeProps = {
                  shallow: shallow
                };

                if (_this._inFlightRoute && _this.clc) {
                  if (!isSsr) {
                    Router.events.emit('routeChangeError', buildCancellationError(), _this._inFlightRoute, routeProps);
                  }

                  _this.clc();

                  _this.clc = null;
                }

                as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
                cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
                _this._inFlightRoute = as;
                localeChange = prevLocale !== nextState.locale; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!(!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange)) {
                  _context.next = 49;
                  break;
                }

                nextState.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                _this.changeState(method, url, as, _extends({}, options, {
                  scroll: false
                }));

                if (scroll) {
                  _this.scrollToHash(cleanedAs);
                }

                _context.prev = 38;
                _context.next = 41;
                return _this.set(nextState, _this.components[nextState.route], null);

              case 41:
                _context.next = 47;
                break;

              case 43:
                _context.prev = 43;
                _context.t0 = _context["catch"](38);

                if ((0, _isError)["default"](_context.t0) && _context.t0.cancelled) {
                  Router.events.emit('routeChangeError', _context.t0, cleanedAs, routeProps);
                }

                throw _context.t0;

              case 47:
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 49:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 51;
                _context.next = 54;
                return Promise.all([_this.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest(), _this.pageLoader.getMiddleware()]);

              case 54:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                pages = _yield$Promise$all2[0];
                rewrites = _yield$Promise$all2[1].__rewrites;
                _context.next = 64;
                break;

              case 60:
                _context.prev = 60;
                _context.t1 = _context["catch"](51);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context.abrupt("return", false);

              case 64:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname; // we don't attempt resolve asPath when we need to execute
                // middleware as the resolving will occur server-side

                _context.next = 69;
                return matchesMiddleware({
                  asPath: as,
                  locale: nextState.locale,
                  router: _this
                });

              case 69:
                isMiddlewareMatch = _context.sent;

                if (options.shallow && isMiddlewareMatch) {
                  pathname = _this.pathname;
                }

                if (!(shouldResolveHref && pathname !== '/_error')) {
                  _context.next = 84;
                  break;
                }

                options._shouldResolveHref = true;

                if (true) {
                  _context.next = 82;
                  break;
                }

                rewritesResult = (0, _resolveRewrites)["default"]((0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, _this.locales);

                if (!rewritesResult.externalDest) {
                  _context.next = 78;
                  break;
                }

                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context.abrupt("return", true);

              case 78:
                if (!isMiddlewareMatch) {
                  resolvedAs = rewritesResult.asPath;
                }

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = (0, _addBasePath).addBasePath(pathname);

                  if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                  }
                }

                _context.next = 84;
                break;

              case 82:
                parsed.pathname = resolveDynamicRoute(pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = (0, _addBasePath).addBasePath(pathname);

                  if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                  }
                }

              case 84:
                if (isLocalURL(as)) {
                  _context.next = 89;
                  break;
                }

                if (true) {
                  _context.next = 87;
                  break;
                }

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 87:
                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context.abrupt("return", false);

              case 89:
                resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
                route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
                routeMatch = false;

                if (!(0, _isDynamic).isDynamicRoute(route)) {
                  _context.next = 107;
                  break;
                }

                parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                asPathname = parsedAs.pathname;
                routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 106;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0 && !isMiddlewareMatch)) {
                  _context.next = 104;
                  break;
                }

                if (false) {}

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 104:
                _context.next = 107;
                break;

              case 106:
                if (shouldInterpolate) {
                  as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omit(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 107:
                if (!isQueryUpdating) {
                  Router.events.emit('routeChangeStart', as, routeProps);
                }

                _context.prev = 108;
                _context.next = 111;
                return _this.getRouteInfo({
                  route: route,
                  pathname: pathname,
                  query: query,
                  as: as,
                  resolvedAs: resolvedAs,
                  routeProps: routeProps,
                  locale: nextState.locale,
                  isPreview: nextState.isPreview,
                  hasMiddleware: isMiddlewareMatch
                });

              case 111:
                routeInfo = _context.sent;

                if ('route' in routeInfo && isMiddlewareMatch) {
                  pathname = routeInfo.route || route;
                  route = pathname;

                  if (!routeProps.shallow) {
                    query = Object.assign({}, routeInfo.query || {}, query);
                  }

                  if (routeMatch && pathname !== parsed.pathname) {
                    Object.keys(routeMatch).forEach(function (key) {
                      if (routeMatch && query[key] === routeMatch[key]) {
                        delete query[key];
                      }
                    });
                  }

                  if ((0, _isDynamic).isDynamicRoute(pathname)) {
                    prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                    rewriteAs = prefixedAs;

                    if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                      rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                    }

                    if (false) {}

                    _routeRegex2 = (0, _routeRegex).getRouteRegex(pathname);
                    curRouteMatch = (0, _routeMatcher).getRouteMatcher(_routeRegex2)(rewriteAs);

                    if (curRouteMatch) {
                      Object.assign(query, curRouteMatch);
                    }
                  }
                } // If the routeInfo brings a redirect we simply apply it.


                if (!('type' in routeInfo)) {
                  _context.next = 120;
                  break;
                }

                if (!(routeInfo.type === 'redirect-internal')) {
                  _context.next = 118;
                  break;
                }

                return _context.abrupt("return", _this.change(method, routeInfo.newUrl, routeInfo.newAs, options));

              case 118:
                handleHardNavigation({
                  url: routeInfo.destination,
                  router: _this
                });
                return _context.abrupt("return", new Promise(function () {}));

              case 120:
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP;
                component = routeInfo.Component;

                if (component && component.unstable_scriptLoader) {
                  scripts = [].concat(component.unstable_scriptLoader());
                  scripts.forEach(function (script) {
                    (0, _script).handleClientScriptLoad(script.props);
                  });
                } // handle redirect on client-transition


                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 150;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 134;
                  break;
                }

                // Use the destination from redirect without adding locale
                options.locale = false;
                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!(destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false)) {
                  _context.next = 132;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                _prepareUrlAs3 = prepareUrlAs(_this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", _this.change(method, newUrl, newAs, options));

              case 132:
                handleHardNavigation({
                  url: destination,
                  router: _this
                });
                return _context.abrupt("return", new Promise(function () {}));

              case 134:
                nextState.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 150;
                  break;
                }

                _context.prev = 136;
                _context.next = 139;
                return _this.fetchComponent('/404');

              case 139:
                notFoundRoute = '/404';
                _context.next = 145;
                break;

              case 142:
                _context.prev = 142;
                _context.t2 = _context["catch"](136);
                notFoundRoute = '/_error';

              case 145:
                _context.next = 147;
                return _this.getRouteInfo({
                  route: notFoundRoute,
                  pathname: notFoundRoute,
                  query: query,
                  as: as,
                  resolvedAs: resolvedAs,
                  routeProps: {
                    shallow: false
                  },
                  locale: nextState.locale,
                  isPreview: nextState.isPreview
                });

              case 147:
                routeInfo = _context.sent;

                if (!('type' in routeInfo)) {
                  _context.next = 150;
                  break;
                }

                throw new Error("Unexpected middleware effect on /404");

              case 150:
                Router.events.emit('beforeHistoryChange', as, routeProps);

                _this.changeState(method, url, as, options);

                if (isQueryUpdating && pathname === '/_error' && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                }

                // shallow routing is only allowed for same page URL changes.
                isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
                shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
                resetScroll = shouldScroll ? {
                  x: 0,
                  y: 0
                } : null; // the new state that the router gonna set

                upcomingRouterState = _extends({}, nextState, {
                  route: route,
                  pathname: pathname,
                  query: query,
                  asPath: cleanedAs,
                  isFallback: false
                });
                upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll; // for query updates we can skip it if the state is unchanged and we don't
                // need to scroll
                // https://github.com/vercel/next.js/issues/37139

                canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);

                if (canSkipUpdating) {
                  _context.next = 169;
                  break;
                }

                _context.next = 162;
                return _this.set(upcomingRouterState, routeInfo, upcomingScrollState)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 162:
                if (!error) {
                  _context.next = 165;
                  break;
                }

                if (!isQueryUpdating) {
                  Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                }

                throw error;

              case 165:
                if (false) {}

                if (!isQueryUpdating) {
                  Router.events.emit('routeChangeComplete', as, routeProps);
                } // A hash mark # is the optional last part of a URL


                hashRegex = /#.+$/;

                if (shouldScroll && hashRegex.test(as)) {
                  _this.scrollToHash(as);
                }

              case 169:
                return _context.abrupt("return", true);

              case 172:
                _context.prev = 172;
                _context.t3 = _context["catch"](108);

                if (!((0, _isError)["default"](_context.t3) && _context.t3.cancelled)) {
                  _context.next = 176;
                  break;
                }

                return _context.abrupt("return", false);

              case 176:
                throw _context.t3;

              case 177:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[38, 43], [51, 60], [108, 172], [136, 142]]);
      }))();
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || (0, _utils).getURL() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          key: this._key = method !== 'pushState' ? this._key : createKey()
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var props, _yield$_this$fetchCom, Component, styleSheets, routeInfo;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.error(err);

                if (!err.cancelled) {
                  _context2.next = 3;
                  break;
                }

                throw err;

              case 3:
                if (!((0, _routeLoader).isAssetError(err) || loadErrorFail)) {
                  _context2.next = 7;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                handleHardNavigation({
                  url: as,
                  router: _this
                }); // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 7:
                _context2.prev = 7;
                _context2.next = 10;
                return _this.fetchComponent('/_error');

              case 10:
                _yield$_this$fetchCom = _context2.sent;
                Component = _yield$_this$fetchCom.page;
                styleSheets = _yield$_this$fetchCom.styleSheets;
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 25;
                  break;
                }

                _context2.prev = 15;
                _context2.next = 18;
                return _this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 18:
                routeInfo.props = _context2.sent;
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](15);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 25:
                return _context2.abrupt("return", routeInfo);

              case 28:
                _context2.prev = 28;
                _context2.t1 = _context2["catch"](7);
                return _context2.abrupt("return", _this.handleRouteInfoError((0, _isError)["default"](_context2.t1) ? _context2.t1 : new Error(_context2.t1 + ''), pathname, query, as, routeProps, true));

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 28], [15, 21]]);
      }))();
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(_ref5) {
      var requestedRoute = _ref5.route,
          pathname = _ref5.pathname,
          query = _ref5.query,
          as = _ref5.as,
          resolvedAs = _ref5.resolvedAs,
          routeProps = _ref5.routeProps,
          locale = _ref5.locale,
          hasMiddleware = _ref5.hasMiddleware,
          isPreview = _ref5.isPreview,
          unstable_skipClientCache = _ref5.unstable_skipClientCache;

      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var route, ref, ref4, ref5, handleCancelled, existingInfo, cachedRouteInfo, fetchNextDataParams, data, routeInfo, _require, isValidElementType, useStreamedFlightData, shouldFetchData, _yield$_this$_getData, props, cacheKey, flightInfo;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                /**
                * This `route` binding can change if there's a rewrite
                * so we keep a reference to the original requested route
                * so we can store the cache for it and avoid re-requesting every time
                * for shallow routing purposes.
                */
                route = requestedRoute;
                _context4.prev = 1;
                handleCancelled = getCancelledHandler({
                  route: route,
                  router: _this
                });
                existingInfo = _this.components[route];

                if (!(routeProps.shallow && existingInfo && _this.route === route)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", existingInfo);

              case 6:
                if (hasMiddleware) {
                  existingInfo = undefined;
                }

                cachedRouteInfo = existingInfo && !('initial' in existingInfo) && true ? existingInfo : undefined;
                fetchNextDataParams = {
                  dataHref: _this.pageLoader.getDataHref({
                    href: (0, _formatUrl).formatWithValidation({
                      pathname: pathname,
                      query: query
                    }),
                    skipInterpolation: true,
                    asPath: resolvedAs,
                    locale: locale
                  }),
                  hasMiddleware: true,
                  isServerRender: _this.isSsr,
                  parseJSON: true,
                  inflightCache: _this.sdc,
                  persistCache: !isPreview,
                  isPrefetch: false,
                  unstable_skipClientCache: unstable_skipClientCache
                };
                _context4.next = 11;
                return withMiddlewareEffects({
                  fetchData: function fetchData() {
                    return fetchNextData(fetchNextDataParams);
                  },
                  asPath: resolvedAs,
                  locale: locale,
                  router: _this
                });

              case 11:
                data = _context4.sent;
                handleCancelled();

                if (!((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === 'redirect-internal' || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === 'redirect-external')) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt("return", data.effect);

              case 15:
                if (!((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === 'rewrite')) {
                  _context4.next = 23;
                  break;
                }

                route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
                pathname = data.effect.resolvedHref;
                query = _extends({}, query, data.effect.parsedAs.query);
                resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname); // Check again the cache with the new destination.

                existingInfo = _this.components[route];

                if (!(routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware)) {
                  _context4.next = 23;
                  break;
                }

                return _context4.abrupt("return", _extends({}, existingInfo, {
                  route: route
                }));

              case 23:
                if (!(route === '/api' || route.startsWith('/api/'))) {
                  _context4.next = 26;
                  break;
                }

                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return _context4.abrupt("return", new Promise(function () {}));

              case 26:
                _context4.t0 = cachedRouteInfo;

                if (_context4.t0) {
                  _context4.next = 31;
                  break;
                }

                _context4.next = 30;
                return _this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                    __N_RSC: !!res.mod.__next_rsc__
                  };
                });

              case 30:
                _context4.t0 = _context4.sent;

              case 31:
                routeInfo = _context4.t0;

                if (true) {
                  _context4.next = 36;
                  break;
                }

                _require = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/dist/compiled/react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require.isValidElementType;

                if (isValidElementType(routeInfo.Component)) {
                  _context4.next = 36;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 36:
                /**
                * For server components, non-SSR pages will have statically optimized
                * flight data in a production build. So only development and SSR pages
                * will always have the real-time generated and streamed flight data.
                */
                useStreamedFlightData = routeInfo.__N_RSC && ( false || routeInfo.__N_SSP);
                shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP || routeInfo.__N_RSC;
                _context4.next = 40;
                return _this._getData(_async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var _ref6, json;

                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(shouldFetchData && !useStreamedFlightData)) {
                            _context3.next = 11;
                            break;
                          }

                          if (!(data == null ? void 0 : data.json)) {
                            _context3.next = 5;
                            break;
                          }

                          _context3.t0 = data;
                          _context3.next = 8;
                          break;

                        case 5:
                          _context3.next = 7;
                          return fetchNextData({
                            dataHref: _this.pageLoader.getDataHref({
                              href: (0, _formatUrl).formatWithValidation({
                                pathname: pathname,
                                query: query
                              }),
                              asPath: resolvedAs,
                              locale: locale
                            }),
                            isServerRender: _this.isSsr,
                            parseJSON: true,
                            inflightCache: _this.sdc,
                            persistCache: !isPreview,
                            isPrefetch: false,
                            unstable_skipClientCache: unstable_skipClientCache
                          });

                        case 7:
                          _context3.t0 = _context3.sent;

                        case 8:
                          _ref6 = _context3.t0;
                          json = _ref6.json;
                          return _context3.abrupt("return", {
                            props: json || {}
                          });

                        case 11:
                          _context3.t1 = {};
                          _context3.next = 14;
                          return _this.getInitialProps(routeInfo.Component, // we provide AppTree later so this needs to be `any`
                          {
                            pathname: pathname,
                            query: query,
                            asPath: as,
                            locale: locale,
                            locales: _this.locales,
                            defaultLocale: _this.defaultLocale
                          });

                        case 14:
                          _context3.t2 = _context3.sent;
                          return _context3.abrupt("return", {
                            headers: _context3.t1,
                            props: _context3.t2
                          });

                        case 16:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));

              case 40:
                _yield$_this$_getData = _context4.sent;
                props = _yield$_this$_getData.props;

                // Only bust the data cache for SSP routes although
                // middleware can skip cache per request with
                // x-middleware-cache: no-cache as well
                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
                  cacheKey = new URL(fetchNextDataParams.dataHref, window.location.href).href;
                  delete _this.sdc[cacheKey];
                } // we kick off a HEAD request in the background
                // when a non-prefetch request is made to signal revalidation


                if (!_this.isPreview && routeInfo.__N_SSG && true) {
                  fetchNextData(Object.assign({}, fetchNextDataParams, {
                    isBackground: true,
                    persistCache: false,
                    inflightCache: backgroundCache
                  }))["catch"](function () {});
                }

                if (!routeInfo.__N_RSC) {
                  _context4.next = 54;
                  break;
                }

                if (!useStreamedFlightData) {
                  _context4.next = 51;
                  break;
                }

                _context4.next = 48;
                return _this._getData(function () {
                  return _this._getFlightData((0, _formatUrl).formatWithValidation({
                    query: _extends({}, query, {
                      __flight__: '1'
                    }),
                    pathname: (0, _isDynamic).isDynamicRoute(route) ? interpolateAs(pathname, (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs).pathname, query).result : pathname
                  }));
                });

              case 48:
                _context4.t1 = _context4.sent.data;
                _context4.next = 52;
                break;

              case 51:
                _context4.t1 = props.__flight__;

              case 52:
                _context4.t2 = _context4.t1;
                flightInfo = {
                  __flight__: _context4.t2
                };

              case 54:
                props.pageProps = Object.assign({}, props.pageProps, flightInfo);
                routeInfo.props = props;
                routeInfo.route = route;
                routeInfo.query = query;
                routeInfo.resolvedAs = resolvedAs;
                _this.components[route] = routeInfo;
                return _context4.abrupt("return", routeInfo);

              case 63:
                _context4.prev = 63;
                _context4.t3 = _context4["catch"](1);
                return _context4.abrupt("return", _this.handleRouteInfoError((0, _isError).getProperError(_context4.t3), pathname, query, as, routeProps));

              case 66:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 63]]);
      }))();
    }
  }, {
    key: "set",
    value: function set(state, data, resetScroll) {
      this.state = state;
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          _as$split4$ = _as$split4[1],
          hash = _as$split4$ === void 0 ? '' : _as$split4$; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // Decode hash to make non-latin anchor works.


      var rawHash = decodeURIComponent(hash); // First we check if the element by id is found

      var idEl = document.getElementById(rawHash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(rawHash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var parsed, pathname, query, parsedAs, localePathResult, pages, resolvedAs, locale, isMiddlewareMatch, rewrites, _yield$getClientBuild, rewritesResult, data, route;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname = parsed.pathname, query = parsed.query;

                if (false) {}

                _context5.next = 5;
                return _this.pageLoader.getPageList();

              case 5:
                pages = _context5.sent;
                resolvedAs = asPath;
                locale = typeof options.locale !== 'undefined' ? options.locale || undefined : _this.locale;
                _context5.next = 10;
                return matchesMiddleware({
                  asPath: asPath,
                  locale: locale,
                  router: _this
                });

              case 10:
                isMiddlewareMatch = _context5.sent;

                if (true) {
                  _context5.next = 21;
                  break;
                }

                _context5.next = 14;
                return (0, _routeLoader).getClientBuildManifest();

              case 14:
                _yield$getClientBuild = _context5.sent;
                rewrites = _yield$getClientBuild.__rewrites;
                rewritesResult = (0, _resolveRewrites)["default"]((0, _addBasePath).addBasePath((0, _addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, _this.locales);

                if (!rewritesResult.externalDest) {
                  _context5.next = 19;
                  break;
                }

                return _context5.abrupt("return");

              case 19:
                resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;

                  if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                  }
                }

              case 21:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                  pathname = parsed.pathname;
                  parsed.pathname = pathname;
                  Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});

                  if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                  }
                } // Prefetch is not supported in development mode because it would trigger on-demand-entries


                if (true) {
                  _context5.next = 25;
                  break;
                }

                return _context5.abrupt("return");

              case 25:
                _context5.next = 27;
                return withMiddlewareEffects({
                  fetchData: function fetchData() {
                    return fetchNextData({
                      dataHref: _this.pageLoader.getDataHref({
                        href: (0, _formatUrl).formatWithValidation({
                          pathname: pathname,
                          query: query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale: locale
                      }),
                      hasMiddleware: true,
                      isServerRender: _this.isSsr,
                      parseJSON: true,
                      inflightCache: _this.sdc,
                      persistCache: !_this.isPreview,
                      isPrefetch: true
                    });
                  },
                  asPath: asPath,
                  locale: locale,
                  router: _this
                });

              case 27:
                data = _context5.sent;

                /**
                * If there was a rewrite we apply the effects of the rewrite on the
                * current parameters for the prefetch.
                */
                if ((data == null ? void 0 : data.effect.type) === 'rewrite') {
                  parsed.pathname = data.effect.resolvedHref;
                  pathname = data.effect.resolvedHref;
                  query = _extends({}, query, data.effect.parsedAs.query);
                  resolvedAs = data.effect.parsedAs.pathname;
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
                /**
                * If there is a redirect to an external destination then we don't have
                * to prefetch content as it will be unused.
                */


                if (!((data == null ? void 0 : data.effect.type) === 'redirect-external')) {
                  _context5.next = 31;
                  break;
                }

                return _context5.abrupt("return");

              case 31:
                route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
                _context5.next = 34;
                return Promise.all([_this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? fetchNextData({
                    dataHref: (data == null ? void 0 : data.dataHref) || _this.pageLoader.getDataHref({
                      href: url,
                      asPath: resolvedAs,
                      locale: locale
                    }),
                    isServerRender: false,
                    parseJSON: true,
                    inflightCache: _this.sdc,
                    persistCache: !_this.isPreview,
                    isPrefetch: true,
                    unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                  }).then(function () {
                    return false;
                  }) : false;
                }), _this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 34:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var _this = this;

      return _async_to_generator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var handleCancelled, componentResult;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                handleCancelled = getCancelledHandler({
                  route: route,
                  router: _this
                });
                _context6.prev = 1;
                _context6.next = 4;
                return _this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context6.sent;
                handleCancelled();
                return _context6.abrupt("return", componentResult);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);
                handleCancelled();
                throw _context6.t0;

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 9]]);
      }))();
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this3 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this3.clc) {
          _this3.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getFlightData",
    value: function _getFlightData(dataHref) {
      // Do not cache RSC flight response since it's not a static resource
      return fetchNextData({
        dataHref: dataHref,
        isServerRender: true,
        parseJSON: false,
        inflightCache: this.sdc,
        persistCache: false,
        isPrefetch: false
      }).then(function (_ref7) {
        var text = _ref7.text;
        return {
          data: text
        };
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils).loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "route",
    get: function get() {
      return this.state.route;
    }
  }, {
    key: "pathname",
    get: function get() {
      return this.state.pathname;
    }
  }, {
    key: "query",
    get: function get() {
      return this.state.query;
    }
  }, {
    key: "asPath",
    get: function get() {
      return this.state.asPath;
    }
  }, {
    key: "locale",
    get: function get() {
      return this.state.locale;
    }
  }, {
    key: "isFallback",
    get: function get() {
      return this.state.isFallback;
    }
  }, {
    key: "isPreview",
    get: function get() {
      return this.state.isPreview;
    }
  }]);

  return Router;
}();

Router.events = (0, _mitt)["default"]();

function matchesMiddleware(options) {
  return Promise.resolve(options.router.pageLoader.getMiddleware()).then(function (middleware) {
    var _parsePath2 = (0, _parsePath).parsePath(options.asPath),
        asPathname = _parsePath2.pathname;

    var cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
    var regex = middleware == null ? void 0 : middleware.location;
    return !!regex && new RegExp(regex).test((0, _addLocale).addLocale(cleanedAs, options.locale));
  });
}

function withMiddlewareEffects(options) {
  return matchesMiddleware(options).then(function (matches) {
    if (matches && options.fetchData) {
      return options.fetchData().then(function (data) {
        return getMiddlewareData(data.dataHref, data.response, options).then(function (effect) {
          return {
            dataHref: data.dataHref,
            json: data.json,
            response: data.response,
            text: data.text,
            effect: effect
          };
        });
      })["catch"](function (_err) {
        /**
        * TODO: Revisit this in the future.
        * For now we will not consider middleware data errors to be fatal.
        * maybe we should revisit in the future.
        */
        return null;
      });
    }

    return null;
  });
}

function getMiddlewareData(source, response, options) {
  var nextConfig = {
    basePath: options.router.basePath,
    i18n: {
      locales: options.router.locales
    },
    trailingSlash: Boolean(false)
  };
  var rewriteHeader = response.headers.get('x-nextjs-rewrite');
  var rewriteTarget = rewriteHeader || response.headers.get('x-nextjs-matched-path');
  var matchedPath = response.headers.get('x-matched-path');

  if (matchedPath && !rewriteTarget && !matchedPath.includes('__next_data_catchall') && !matchedPath.includes('/_error') && !matchedPath.includes('/404')) {
    // leverage x-matched-path to detect next.config.js rewrites
    rewriteTarget = matchedPath;
  }

  if (rewriteTarget) {
    if (rewriteTarget.startsWith('/')) {
      var parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
      var pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
        nextConfig: nextConfig,
        parseData: true
      });
      var fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
      return Promise.all([options.router.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest()]).then(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            pages = _ref9[0],
            rewrites = _ref9[1].__rewrites;

        var as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);

        if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
          var parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
            parseData: true
          });
          as = (0, _addBasePath).addBasePath(parsedSource.pathname);
          parsedRewriteTarget.pathname = as;
        }

        if (false) { var result; } else if (!pages.includes(fsPathname)) {
          var resolvedPathname = resolveDynamicRoute(fsPathname, pages);

          if (resolvedPathname !== fsPathname) {
            fsPathname = resolvedPathname;
          }
        }

        var resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;

        if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
          var matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
          Object.assign(parsedRewriteTarget.query, matches || {});
        }

        return {
          type: 'rewrite',
          parsedAs: parsedRewriteTarget,
          resolvedHref: resolvedHref
        };
      });
    }

    var src = (0, _parsePath).parsePath(source);
    var pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
      nextConfig: nextConfig,
      parseData: true
    }), {
      defaultLocale: options.router.defaultLocale,
      buildId: ''
    }));
    return Promise.resolve({
      type: 'redirect-external',
      destination: "".concat(pathname).concat(src.query).concat(src.hash)
    });
  }

  var redirectTarget = response.headers.get('x-nextjs-redirect');

  if (redirectTarget) {
    if (redirectTarget.startsWith('/')) {
      var _src = (0, _parsePath).parsePath(redirectTarget);

      var _pathname2 = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(_src.pathname, {
        nextConfig: nextConfig,
        parseData: true
      }), {
        defaultLocale: options.router.defaultLocale,
        buildId: ''
      }));

      return Promise.resolve({
        type: 'redirect-internal',
        newAs: "".concat(_pathname2).concat(_src.query).concat(_src.hash),
        newUrl: "".concat(_pathname2).concat(_src.query).concat(_src.hash)
      });
    }

    return Promise.resolve({
      type: 'redirect-external',
      destination: redirectTarget
    });
  }

  return Promise.resolve({
    type: 'next'
  });
}

exports["default"] = Router;

/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7942)


/***/ })

};
;