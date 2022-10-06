exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 1650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6437);
/* harmony import */ var _styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var FormInput = function FormInput(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      messageError = _useState2[0],
      setMessageError = _useState2[1];

  var placeholder = props.placeholder,
      errors = props.errors,
      name = props.name,
      setter = props.setter,
      value = props.value,
      validation = props.validation,
      className = props.className;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    showError();
  }, [props]);

  function showError() {
    if (!messageError) {
      if (!errors) {
        return;
      }

      var arr = errors;
      arr.map(function (item) {
        if (item.formInput === name) {
          return setMessageError(item.error);
        }
      });
    } else {
      var _arr2 = errors;
      var noError = true;
      _arr2 === null || _arr2 === void 0 ? void 0 : _arr2.map(function (item) {
        if (item.formInput === name) {
          return noError = false;
        } else {
          return;
        }
      });

      if (noError) {
        return setMessageError("");
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formInput) + " " + className,
    style: {
      width: props.width,
      marginTop: props.marginTop
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("textarea", {
      className: (messageError ? (_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formInput__item_error) + " " + (_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formInput__item) : (_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formInput__item)) + " " + (name === "comment" ? (_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formInput__item_comment) : ""),
      value: value,
      onChange: function onChange(e) {
        setter(e);
      },
      onKeyDown: function onKeyDown(e) {
        return validation ? validation(e) : "";
      },
      name: name,
      placeholder: placeholder
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: (_styles_formInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errorDescription),
      children: messageError
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);

/***/ }),

/***/ 9725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useHandleChange)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useHandleChange = function useHandleChange(setter, values) {
  function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setter(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  }

  function handleBigChange(value, inputName) {
    setter(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, inputName, value)));
  }

  return {
    handleChange: handleChange,
    handleBigChange: handleBigChange
  };
};

/***/ }),

/***/ 6278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useUserErrors)
/* harmony export */ });
var useUserErrors = function useUserErrors(userErrors, setUserErrors) {
  function hideUserError(formInput) {
    for (var i = 0; i < userErrors.length; i++) {
      if (userErrors[i].formInput === formInput) {
        var arr = userErrors;
        arr.splice(i, 1);
        setUserErrors(arr);
      }
    }

    return false;
  }

  function showUserError(formInput, errorMessage) {
    var prev;
    userErrors.map(function (item) {
      if (item.formInput === formInput) {
        prev = true;
      }
    });

    if (prev) {
      return;
    }

    var obj = {
      error: errorMessage,
      formInput: formInput
    };
    var errors = userErrors;
    errors.push(obj);
    setUserErrors(errors);
  }

  return {
    hideUserError: hideUserError,
    showUserError: showUserError
  };
};

/***/ }),

/***/ 5044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useValidations)
/* harmony export */ });
var useValidations = function useValidations(showUserError, hideUserError, values, handleBigChange) {
  function nameValidation() {
    values.name ? hideUserError("name") : showUserError("name", "Имя не может быть пустым");
  }

  function phoneInputMask(e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.preventDefault();
      var arr = values.phone && values.phone.split("").reverse();
      var abc;

      for (var i = 0; i < arr.length - 2; i++) {
        var regex = /[0-9]/;
        abc = regex.test(String(arr[i]).toLowerCase());

        if (abc) {
          arr.splice(i, 1, "_");
          var str = arr.reverse().join("");
          return handleBigChange(str, "phone");
        }
      }
    } else if ((e.keyCode < 47 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 106)) {
      return e.preventDefault();
    } else {
      e.preventDefault();

      var _arr = values.phone && values.phone.split("");

      var index = _arr.findIndex(function (item) {
        return item === "_";
      });

      _arr[index] = e.key;

      var _str = _arr.join("");

      handleBigChange(_str, "phone");
    }
  }

  function emailValidation() {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return values.email === '' ? showUserError("email", "Email не может быть пустым") : hideUserError("email") || !regex.test(String(values.email).toLowerCase()) ? showUserError("email", "Некорректный email") : hideUserError("email");
  }

  return {
    phoneInputMask: phoneInputMask,
    nameValidation: nameValidation,
    emailValidation: emailValidation
  };
};

/***/ }),

/***/ 8635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fY": () => (/* binding */ setCatalog)
/* harmony export */ });
/* unused harmony export catalogSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  values: []
};
var catalogSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'catalog',
  initialState: initialState,
  reducers: {
    setCatalog: function setCatalog(state, action) {
      state.values = action.payload;
    }
  }
});
var setCatalog = catalogSlice.actions.setCatalog;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalogSlice.reducer);

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cf": () => (/* binding */ setModal)
/* harmony export */ });
/* unused harmony export catalogSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  values: null
};
var catalogSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'service',
  initialState: initialState,
  reducers: {
    setModal: function setModal(state, action) {
      state.values = action.payload;
    }
  }
});
var setModal = catalogSlice.actions.setModal;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalogSlice.reducer);

/***/ }),

/***/ 3992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ successForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/molecules/successForm/imgs/success.svg
/* harmony default export */ const success = ({"src":"/_next/static/media/success.d4f21a7c.svg","height":35,"width":35});
// EXTERNAL MODULE: ./src/molecules/successForm/successForm.module.scss
var successForm_module = __webpack_require__(5941);
var successForm_module_default = /*#__PURE__*/__webpack_require__.n(successForm_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/molecules/successForm/successForm.tsx






var SuccessForm = function SuccessForm() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (successForm_module_default()).success,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (successForm_module_default()).success__img,
      src: success.src,
      alt: "\u0423\u0441\u043F\u0435\u0448\u043D\u043E"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (successForm_module_default()).success__description,
      children: "\u0417\u0430\u044F\u0432\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"
    })]
  });
};

/* harmony default export */ const successForm = (SuccessForm);

/***/ }),

/***/ 3273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mainContainer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/Header.module.scss
var Header_module = __webpack_require__(2945);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/styles/MobileMenu.module.scss
var MobileMenu_module = __webpack_require__(2354);
var MobileMenu_module_default = /*#__PURE__*/__webpack_require__.n(MobileMenu_module);
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/inActiveCatalog.svg
/* harmony default export */ const inActiveCatalog = ({"src":"/_next/static/media/inActiveCatalog.bfc57298.svg","height":23,"width":27});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/activeCatalog.svg
/* harmony default export */ const activeCatalog = ({"src":"/_next/static/media/activeCatalog.affd0630.svg","height":29,"width":35});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/inActiveProductionsvg.svg
/* harmony default export */ const inActiveProductionsvg = ({"src":"/_next/static/media/inActiveProductionsvg.af3f03a9.svg","height":35,"width":32});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/activeProductionsvg.svg
/* harmony default export */ const activeProductionsvg = ({"src":"/_next/static/media/activeProductionsvg.aab66a87.svg","height":35,"width":32});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/inActiveContacts.svg
/* harmony default export */ const inActiveContacts = ({"src":"/_next/static/media/inActiveContacts.a16c2309.svg","height":43,"width":28});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/activeContacts.svg
/* harmony default export */ const activeContacts = ({"src":"/_next/static/media/activeContacts.97678d8b.svg","height":43,"width":27});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/inActiveSearch.svg
/* harmony default export */ const inActiveSearch = ({"src":"/_next/static/media/inActiveSearch.0cb35021.svg","height":35,"width":34});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/activeSearch.svg
/* harmony default export */ const activeSearch = ({"src":"/_next/static/media/activeSearch.e53ee3ca.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/inActiveServices.svg
/* harmony default export */ const inActiveServices = ({"src":"/_next/static/media/inActiveServices.57fbc47a.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/activeServices.svg
/* harmony default export */ const activeServices = ({"src":"/_next/static/media/activeServices.39027322.svg","height":35,"width":35});
// EXTERNAL MODULE: ./src/atoms/CustomLink/CustomLink.tsx
var CustomLink = __webpack_require__(2450);
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/imgs/close.svg
/* harmony default export */ const imgs_close = ({"src":"/_next/static/media/close.cac1a3dc.svg","height":18,"width":18});
;// CONCATENATED MODULE: ./src/molecules/DesktopHeader/imgs/Logo.svg
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.b0e488be.svg","height":40,"width":220});
// EXTERNAL MODULE: ./src/atoms/CustomButton/CustomButton.tsx
var CustomButton = __webpack_require__(5919);
;// CONCATENATED MODULE: ./src/consts/routes.tsx
var factoryRoute = "/factory";
var servicesRoute = "/services";
var contactsRoute = "/contacts";
var casesRoute = "/cases";
// EXTERNAL MODULE: ./src/atoms/formInput/formInput.tsx
var formInput = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/hooks/useHandleChange.tsx
var useHandleChange = __webpack_require__(9725);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/molecules/MobileMenu/MobileMenu.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


























var MobileMenu = function MobileMenu() {
  var catalog = (0,external_react_redux_.useSelector)(function (state) {
    return state.catalog.values;
  });
  var router = (0,router_.useRouter)();

  var _useState = (0,external_react_.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useHandleChange = (0,useHandleChange/* useHandleChange */.n)(setValues, values),
      handleChange = _useHandleChange.handleChange;

  var _useState3 = (0,external_react_.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      menuItemActive = _useState4[0],
      setMenuItemActive = _useState4[1];

  var _useState5 = (0,external_react_.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isCatalogActive = _useState6[0],
      setIsCatalogActive = _useState6[1];

  var _useState7 = (0,external_react_.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSearchActive = _useState8[0],
      setIsSearchActive = _useState8[1];

  var mobileMenu = [{
    id: 1,
    name: "Каталог",
    inactiveImage: inActiveCatalog,
    activeImage: activeCatalog,
    url: false,
    activeState: isCatalogActive,
    setActiveState: setIsCatalogActive
  }, {
    id: 2,
    name: "Производство",
    inactiveImage: inActiveProductionsvg,
    activeImage: activeProductionsvg,
    url: factoryRoute,
    activeState: false,
    setActiveState: false
  }, {
    id: 3,
    name: "Услуги",
    inactiveImage: inActiveServices,
    activeImage: activeServices,
    url: servicesRoute,
    activeState: false,
    setActiveState: false
  }, {
    id: 4,
    name: "Кейсы",
    inactiveImage: inActiveServices,
    activeImage: activeServices,
    url: casesRoute,
    activeState: false,
    setActiveState: false
  }, {
    id: 5,
    name: "Контакты",
    inactiveImage: inActiveContacts,
    activeImage: activeContacts,
    url: contactsRoute,
    activeState: false,
    setActiveState: false
  }, {
    id: 6,
    name: "Поиск",
    inactiveImage: inActiveSearch,
    activeImage: activeSearch,
    url: false,
    activeState: isSearchActive,
    setActiveState: setIsSearchActive
  }];

  var search = function search(searchString) {
    router.push("/search/".concat(searchString));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (MobileMenu_module_default()).mobileMenu,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MobileMenu_module_default()).mobileCatalog + " " + (isCatalogActive ? (MobileMenu_module_default()).mobileCatalog_opened : (MobileMenu_module_default()).mobileCatalog_closed),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MobileMenu_module_default()).mobileCatalog__container,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MobileMenu_module_default()).header,
          children: [/*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
            url: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              width: 150,
              src: Logo,
              alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (MobileMenu_module_default()).panel,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (MobileMenu_module_default()).contacts,
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (MobileMenu_module_default()).contacts__phone,
                href: "tel:84951822582",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "+7 (495) 182 2582"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: (MobileMenu_module_default()).contacts__callback,
                children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              className: (MobileMenu_module_default()).panel__close,
              src: imgs_close,
              alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433",
              onClick: function onClick() {
                return setIsCatalogActive(false);
              }
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MobileMenu_module_default()).catalogContent,
          children: catalog === null || catalog === void 0 ? void 0 : catalog.map(function (item) {
            return /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
              url: "/catalog/" + item.id,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (MobileMenu_module_default()).catalogContent__item,
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: item.name
                })
              })
            }, item.id);
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MobileMenu_module_default()).searchContainer + " " + (isSearchActive ? (MobileMenu_module_default()).searchContainer_opened : (MobileMenu_module_default()).searchContainer_closed),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MobileMenu_module_default()).search,
        children: [/*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
          width: "100%",
          placeholder: "\u041F\u043E\u0438\u0441\u043A",
          value: values.search || "",
          name: "search",
          setter: handleChange
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MobileMenu_module_default()).panel,
          children: [/*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
            className: (MobileMenu_module_default()).searchBtn,
            callBack: function callBack() {
              return search(values.search || "");
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u041D\u0410\u0419\u0422\u0418"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (MobileMenu_module_default()).panel__close,
            src: imgs_close.src,
            onClick: function onClick() {
              return setIsSearchActive(false);
            },
            alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MobileMenu_module_default()).mobileMenuContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MobileMenu_module_default()).content,
        children: mobileMenu.map(function (item, index) {
          return !!item.setActiveState ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (MobileMenu_module_default()).content__item,
            onClick: function onClick() {
              // @ts-ignore
              item.setActiveState(function (prevState) {
                return !prevState;
              });
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: (MobileMenu_module_default()).image,
              src: item.activeState ? item.activeImage.src : item.inactiveImage.src,
              alt: "\u041C\u0435\u043D\u044E"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (MobileMenu_module_default()).description,
              children: item.name
            }), index === 4 ? "" : /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MobileMenu_module_default()).line
            })]
          }, item.id) : /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
            url: item.url,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (MobileMenu_module_default()).content__item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: (MobileMenu_module_default()).image,
                src: item.url === router.pathname ? item.activeImage.src : item.inactiveImage.src,
                alt: "\u041C\u0435\u043D\u044E"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: (MobileMenu_module_default()).description,
                children: item.name
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (MobileMenu_module_default()).line
              })]
            })
          }, item.id);
        })
      })
    })]
  });
};

/* harmony default export */ const MobileMenu_MobileMenu = (MobileMenu);
// EXTERNAL MODULE: ./src/styles/DesktopHeader.module.scss
var DesktopHeader_module = __webpack_require__(6820);
var DesktopHeader_module_default = /*#__PURE__*/__webpack_require__.n(DesktopHeader_module);
;// CONCATENATED MODULE: ./src/molecules/DesktopHeader/imgs/selectIcon.svg
/* harmony default export */ const selectIcon = ({"src":"/_next/static/media/selectIcon.d9d27f8d.svg","height":11,"width":18});
;// CONCATENATED MODULE: ./src/molecules/DesktopHeader/imgs/Loupe.svg
/* harmony default export */ const Loupe = ({"src":"/_next/static/media/Loupe.e53ee3ca.svg","height":24,"width":24});
// EXTERNAL MODULE: ./src/styles/CatalogCard.module.scss
var CatalogCard_module = __webpack_require__(6088);
var CatalogCard_module_default = /*#__PURE__*/__webpack_require__.n(CatalogCard_module);
;// CONCATENATED MODULE: ./src/atoms/CatalogCard/CatalogCard.tsx






var CatalogCard = function CatalogCard(_ref) {
  var img = _ref.img,
      name = _ref.name,
      id = _ref.id;
  return /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
    url: "/catalog/" + id,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (CatalogCard_module_default()).catalogCard,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (CatalogCard_module_default()).catalogCard__image,
        src: "".concat("http://localhost:3000/images/" + img),
        alt: name
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (CatalogCard_module_default()).catalogCard__description,
        children: name
      })]
    })
  });
};

/* harmony default export */ const CatalogCard_CatalogCard = (CatalogCard);
;// CONCATENATED MODULE: ./src/molecules/DesktopHeader/imgs/closeIcon.svg
/* harmony default export */ const closeIcon = ({"src":"/_next/static/media/closeIcon.3c735f56.svg","height":19,"width":18});
// EXTERNAL MODULE: ./src/hooks/useUserErrors.tsx
var useUserErrors = __webpack_require__(6278);
// EXTERNAL MODULE: ./src/hooks/useValidations.tsx
var useValidations = __webpack_require__(5044);
// EXTERNAL MODULE: ./src/styles/callback.module.scss
var callback_module = __webpack_require__(6519);
var callback_module_default = /*#__PURE__*/__webpack_require__.n(callback_module);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/layers/serviceLayer.ts
var serviceLayer = __webpack_require__(9120);
// EXTERNAL MODULE: ./src/molecules/successForm/successForm.tsx + 1 modules
var successForm = __webpack_require__(3992);
;// CONCATENATED MODULE: ./src/molecules/callback/callback.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function callback_slicedToArray(arr, i) { return callback_arrayWithHoles(arr) || callback_iterableToArrayLimit(arr, i) || callback_unsupportedIterableToArray(arr, i) || callback_nonIterableRest(); }

function callback_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function callback_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return callback_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return callback_arrayLikeToArray(o, minLen); }

function callback_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function callback_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function callback_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Callback = function Callback() {
  var dispatch = (0,external_react_redux_.useDispatch)();

  var _useState = (0,external_react_.useState)({
    phone: "+7(___)___-__-__"
  }),
      _useState2 = callback_slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,external_react_.useState)([]),
      _useState4 = callback_slicedToArray(_useState3, 2),
      userError = _useState4[0],
      setUserError = _useState4[1];

  var _useState5 = (0,external_react_.useState)(),
      _useState6 = callback_slicedToArray(_useState5, 2),
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
              nameValidation();
              forceUpdate();

              if (!(userError.length < 1)) {
                _context.next = 16;
                break;
              }

              _context.prev = 3;
              url = "http://localhost:3000/api/mail/form";
              _context.next = 7;
              return external_axios_default().post(url, {
                name: values.name || "",
                phone: values.phone || ""
              });

            case 7:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setValues({
                phone: "+7(___)___-__-__"
              });
              dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(successForm/* default */.Z, {})));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              alert(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));
    return _send.apply(this, arguments);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (callback_module_default()).callback,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: (callback_module_default()).callback__title,
      children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (callback_module_default()).callback__subtitle,
      children: "\u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0437\u0432\u043E\u043D\u043A\u0430"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (callback_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        className: (callback_module_default()).content__formInput,
        value: values.name || "",
        setter: handleChange,
        name: "name",
        placeholder: "Имя",
        errors: userError
      }), /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
        className: (callback_module_default()).content__formInput,
        value: values.phone || "",
        setter: handleChange,
        name: "phone",
        placeholder: "Телефон",
        errors: userError,
        validation: phoneInputMask
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
        className: (callback_module_default()).content__submitBtn,
        callBack: send,
        children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (callback_module_default()).description,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (callback_module_default()).description__item,
          children: "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0412\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (callback_module_default()).description__item,
          children: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0417-152"
        })]
      })]
    })]
  });
};

/* harmony default export */ const callback = (Callback);
;// CONCATENATED MODULE: ./src/molecules/DesktopHeader/DesktopHeader.tsx
function DesktopHeader_slicedToArray(arr, i) { return DesktopHeader_arrayWithHoles(arr) || DesktopHeader_iterableToArrayLimit(arr, i) || DesktopHeader_unsupportedIterableToArray(arr, i) || DesktopHeader_nonIterableRest(); }

function DesktopHeader_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DesktopHeader_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DesktopHeader_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DesktopHeader_arrayLikeToArray(o, minLen); }

function DesktopHeader_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DesktopHeader_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DesktopHeader_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var DesktopHeader = function DesktopHeader() {
  var dispatch = (0,external_react_redux_.useDispatch)();
  var catalog = (0,external_react_redux_.useSelector)(function (state) {
    return state.catalog.values;
  });
  var router = (0,router_.useRouter)();

  var _useState = (0,external_react_.useState)(false),
      _useState2 = DesktopHeader_slicedToArray(_useState, 2),
      isCatalogActive = _useState2[0],
      setIsCatalogActive = _useState2[1];

  var _useState3 = (0,external_react_.useState)(false),
      _useState4 = DesktopHeader_slicedToArray(_useState3, 2),
      isSearchActive = _useState4[0],
      setIsSearchActive = _useState4[1];

  var _useState5 = (0,external_react_.useState)({}),
      _useState6 = DesktopHeader_slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  var _useHandleChange = (0,useHandleChange/* useHandleChange */.n)(setValues, values),
      handleChange = _useHandleChange.handleChange;

  var search = function search(searchString) {
    router.push("/search/".concat(searchString));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (DesktopHeader_module_default()).desktopHeader,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (DesktopHeader_module_default()).desktopHeader__container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
          url: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: Logo,
              alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (DesktopHeader_module_default()).links,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (DesktopHeader_module_default()).catalogChoose,
            onClick: function onClick() {
              setIsCatalogActive(function (prevState) {
                return !prevState;
              });
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (DesktopHeader_module_default()).catalogChoose__description,
              children: "\u041A\u0410\u0422\u0410\u041B\u041E\u0413"
            }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              className: (DesktopHeader_module_default()).catalogChoose__choose + " " + (isCatalogActive ? (DesktopHeader_module_default()).catalogChoose__choose_activeCatalog : (DesktopHeader_module_default()).catalogChoose__choose_inActiveCatalog),
              src: selectIcon,
              alt: "\u0412\u044B\u0431\u043E\u0440 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
            url: factoryRoute,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (DesktopHeader_module_default()).links__item,
              children: "\u041F\u0420\u041E\u0418\u0417\u0412\u041E\u0414\u0421\u0422\u0412\u041E"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
            url: servicesRoute,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (DesktopHeader_module_default()).links__item,
              children: "\u0423\u0421\u041B\u0423\u0413\u0418"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
            url: casesRoute,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (DesktopHeader_module_default()).links__item,
              children: "\u041A\u0415\u0419\u0421\u042B"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
            url: contactsRoute,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (DesktopHeader_module_default()).links__item,
              children: "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (DesktopHeader_module_default()).panel,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (DesktopHeader_module_default()).search,
            onClick: function onClick() {
              return setIsSearchActive(true);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              className: (DesktopHeader_module_default()).search__icon,
              src: Loupe,
              alt: "\u041F\u043E\u0438\u0441\u043A"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (DesktopHeader_module_default()).search__description,
              children: "\u041F\u043E\u0438\u0441\u043A"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (DesktopHeader_module_default()).callBack,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "tel:84951822582",
              className: (DesktopHeader_module_default()).callBack__phone,
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "description",
                children: "+7 (495) 182 2582"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (DesktopHeader_module_default()).callBack__link,
              onClick: function onClick() {
                return dispatch((0,serviceLayer/* setModal */.cf)( /*#__PURE__*/jsx_runtime_.jsx(callback, {})));
              },
              children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (DesktopHeader_module_default()).Catalog + " " + (isCatalogActive ? (DesktopHeader_module_default()).Catalog_opened : (DesktopHeader_module_default()).Catalog_closed),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (DesktopHeader_module_default()).Catalog__container,
        children: catalog === null || catalog === void 0 ? void 0 : catalog.map(function (item) {
          return /*#__PURE__*/jsx_runtime_.jsx(CatalogCard_CatalogCard, {
            img: item.photo,
            name: item.name,
            id: item.id
          }, item.id);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (DesktopHeader_module_default()).Search + " " + (isSearchActive ? (DesktopHeader_module_default()).Search_opened : (DesktopHeader_module_default()).Search_closed),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (DesktopHeader_module_default()).Search__container,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (DesktopHeader_module_default()).formInputContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx(formInput/* default */.Z, {
            name: "search",
            value: values.search || "",
            placeholder: "Поиск",
            setter: handleChange,
            width: "100%",
            marginTop: "5px"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(CustomButton/* default */.Z, {
          callBack: function callBack() {
            search(values.search || "");
            setIsSearchActive(false);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "\u041D\u0410\u0419\u0422\u0418"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (DesktopHeader_module_default()).closeImg,
          src: closeIcon.src,
          alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
          onClick: function onClick() {
            return setIsSearchActive(false);
          }
        })]
      })
    })]
  });
};

/* harmony default export */ const DesktopHeader_DesktopHeader = (DesktopHeader);
;// CONCATENATED MODULE: ./src/organisms/Header/Header.tsx







var Header = function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Header_module_default()).Header,
    children: [/*#__PURE__*/jsx_runtime_.jsx(DesktopHeader_DesktopHeader, {}), /*#__PURE__*/jsx_runtime_.jsx(MobileMenu_MobileMenu, {})]
  });
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/molecules/Footer/imgs/logoDAIMAX.svg
/* harmony default export */ const logoDAIMAX = ({"src":"/_next/static/media/logoDAIMAX.34877994.svg","height":40,"width":220});
// EXTERNAL MODULE: ./src/styles/Footer.module.scss
var Footer_module = __webpack_require__(1030);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/molecules/Footer/Footer.tsx









var Footer = function Footer() {
  var catalog = (0,external_react_redux_.useSelector)(function (state) {
    return state.catalog.values;
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Footer_module_default()).Footer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).Footer__container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Footer_module_default()).aboutCompany,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (Footer_module_default()).aboutCompany__logo,
            src: logoDAIMAX.src,
            alt: "\u0414\u0430\u0439\u043C\u0430\u043A\u0441"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).aboutCompany__item,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).aboutCompany__item_link,
              href: "tel:84954325308",
              children: "+7 495 432-53-08"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).aboutCompany__item,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Footer_module_default()).aboutCompany__item_link,
              href: "mailto:",
              children: "order+470719@evro-market.ru"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).aboutCompany__item,
            children: "141150, \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B., \u0433.\u041B\u043E\u0441\u0438\u043D\u043E-\u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u0438\u0439, \u0443\u043B.\u041F\u0435\u0440\u0432\u043E\u043C\u0430\u0439\u0441\u043A\u0430\u044F, \u0434.1, \u043A\u043E\u0440\u043F.4"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).aboutCompany__item,
            children: "\u041F\u043D-\u041F\u0442: 09:00 \u2014 20:00"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Footer_module_default()).mainContent,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).catalog,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: (Footer_module_default()).catalog__title,
              children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Footer_module_default()).catalogContainer,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).leftContent,
                children: catalog === null || catalog === void 0 ? void 0 : catalog.slice(0, Math.floor(catalog.length / 2)).map(function (item) {
                  return /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
                    url: "/catalog/" + item.id,
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (Footer_module_default()).leftContent__description,
                      children: item.name
                    })
                  }, item.id);
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).rightContent,
                children: catalog === null || catalog === void 0 ? void 0 : catalog.slice(Math.floor(catalog.length / 2), catalog.length).map(function (item) {
                  return /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
                    url: "/catalog/" + item.id,
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (Footer_module_default()).rightContent__description,
                      children: item.name
                    })
                  }, item.id);
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).linksToPages,
            children: [/*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
              url: factoryRoute,
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (Footer_module_default()).linksToPages__item,
                children: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
              url: servicesRoute,
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (Footer_module_default()).linksToPages__item,
                children: "\u0423\u0441\u043B\u0443\u0433\u0438"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomLink/* default */.Z, {
              url: contactsRoute,
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: (Footer_module_default()).linksToPages__item,
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Footer_module_default()).warning,
        children: "\u0412\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u043E\u0441\u0438\u0442 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439(\u0441\u0442.437 \u0413\u041A \u0420\u0424)"
      })]
    })
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
// EXTERNAL MODULE: ./src/layers/catalogSlice.ts
var catalogSlice = __webpack_require__(8635);
// EXTERNAL MODULE: ./src/styles/modal.module.scss
var modal_module = __webpack_require__(8011);
var modal_module_default = /*#__PURE__*/__webpack_require__.n(modal_module);
;// CONCATENATED MODULE: ./src/organisms/modal/imgs/closeIcon.svg
/* harmony default export */ const imgs_closeIcon = ({"src":"/_next/static/media/closeIcon.d53e3ae8.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./src/organisms/modal/modal.tsx








var Modal = function Modal(_ref) {
  var children = _ref.children;
  var dispatch = (0,external_react_redux_.useDispatch)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (modal_module_default()).modal,
    onClick: function onClick() {
      return dispatch((0,serviceLayer/* setModal */.cf)(null));
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (modal_module_default()).modalContainer,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (modal_module_default()).modalContainer__close,
        src: imgs_closeIcon.src,
        alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        onClick: function onClick() {
          return dispatch((0,serviceLayer/* setModal */.cf)(null));
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (modal_module_default()).content,
        children: children
      })]
    })
  });
};

/* harmony default export */ const modal_modal = (Modal);
;// CONCATENATED MODULE: ./src/templates/mainContainer/mainContainer.tsx
function mainContainer_typeof(obj) { "@babel/helpers - typeof"; return mainContainer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, mainContainer_typeof(obj); }

function mainContainer_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ mainContainer_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == mainContainer_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function mainContainer_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function mainContainer_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { mainContainer_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { mainContainer_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var MainContainer = function MainContainer(_ref) {
  var children = _ref.children;
  var dispatch = (0,external_react_redux_.useDispatch)();
  var modal = (0,external_react_redux_.useSelector)(function (state) {
    return state.service.values;
  });

  function getCatalog() {
    return _getCatalog.apply(this, arguments);
  }

  function _getCatalog() {
    _getCatalog = mainContainer_asyncToGenerator( /*#__PURE__*/mainContainer_regeneratorRuntime().mark(function _callee() {
      var _yield$axios$get, data;

      return mainContainer_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return external_axios_default().get("".concat("http://localhost:3000/api/catalog/"));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              dispatch((0,catalogSlice/* setCatalog */.fY)(data));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getCatalog.apply(this, arguments);
  }

  (0,external_react_.useEffect)(function () {
    getCatalog();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
    }), modal ? /*#__PURE__*/jsx_runtime_.jsx(modal_modal, {
      children: modal
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
  });
};

/* harmony default export */ const mainContainer = (MainContainer);

/***/ }),

/***/ 5941:
/***/ ((module) => {

// Exports
module.exports = {
	"success": "successForm_success__w_fM_",
	"success__description": "successForm_success__description__7to2L"
};


/***/ }),

/***/ 6088:
/***/ ((module) => {

// Exports
module.exports = {
	"catalogCard": "CatalogCard_catalogCard__8W3VG",
	"catalogCard__image": "CatalogCard_catalogCard__image__3l__i",
	"catalogCard__description": "CatalogCard_catalogCard__description__PhM2c"
};


/***/ }),

/***/ 6820:
/***/ ((module) => {

// Exports
module.exports = {
	"desktopHeader": "DesktopHeader_desktopHeader__t6xyN",
	"desktopHeader__container": "DesktopHeader_desktopHeader__container__OCL3L",
	"links": "DesktopHeader_links__lLnNT",
	"catalogChoose": "DesktopHeader_catalogChoose__uvj3h",
	"catalogChoose__description": "DesktopHeader_catalogChoose__description__KJRh3",
	"catalogChoose__choose_activeCatalog": "DesktopHeader_catalogChoose__choose_activeCatalog__1Rq8G",
	"catalogChoose__choose_inActiveCatalog": "DesktopHeader_catalogChoose__choose_inActiveCatalog____tEL",
	"links__item": "DesktopHeader_links__item____NDP",
	"panel": "DesktopHeader_panel__Y_MoO",
	"search": "DesktopHeader_search__UtXgp",
	"search__description": "DesktopHeader_search__description__wy5DM",
	"callBack": "DesktopHeader_callBack__yrmW7",
	"callBack__phone": "DesktopHeader_callBack__phone__v0L7t",
	"callBack__link": "DesktopHeader_callBack__link__mhTUs",
	"Catalog": "DesktopHeader_Catalog__i4wOS",
	"Catalog__container": "DesktopHeader_Catalog__container__dNa3m",
	"Catalog_opened": "DesktopHeader_Catalog_opened__g7Ipu",
	"Catalog_closed": "DesktopHeader_Catalog_closed__TEz_Y",
	"Search": "DesktopHeader_Search__XYNyl",
	"Search_opened": "DesktopHeader_Search_opened___9nKb",
	"Search_closed": "DesktopHeader_Search_closed__c1g1z",
	"Search__container": "DesktopHeader_Search__container__G_5EX",
	"formInputContainer": "DesktopHeader_formInputContainer__VWusd",
	"closeImg": "DesktopHeader_closeImg____YNg"
};


/***/ }),

/***/ 1030:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__9GGLE",
	"Footer__container": "Footer_Footer__container__CxVK7",
	"content": "Footer_content__YkcsC",
	"aboutCompany": "Footer_aboutCompany__1jyXX",
	"aboutCompany__logo": "Footer_aboutCompany__logo__wnhcR",
	"aboutCompany__item": "Footer_aboutCompany__item__b_q4Y",
	"aboutCompany__item_link": "Footer_aboutCompany__item_link__gkMeF",
	"mainContent": "Footer_mainContent__rRIjy",
	"catalog": "Footer_catalog__PbqN2",
	"catalog__title": "Footer_catalog__title__mzcqa",
	"catalogContainer": "Footer_catalogContainer__ibIJt",
	"leftContent__description": "Footer_leftContent__description___kABU",
	"rightContent": "Footer_rightContent__n0d2f",
	"rightContent__description": "Footer_rightContent__description__hb643",
	"linksToPages": "Footer_linksToPages__nCjRr",
	"linksToPages__item": "Footer_linksToPages__item__k0p2d",
	"warning": "Footer_warning__EDL67"
};


/***/ }),

/***/ 2945:
/***/ ((module) => {

// Exports
module.exports = {
	"Header__desktop": "Header_Header__desktop__jffDC"
};


/***/ }),

/***/ 2354:
/***/ ((module) => {

// Exports
module.exports = {
	"mobileMenu": "MobileMenu_mobileMenu__ujywr",
	"mobileMenuContainer": "MobileMenu_mobileMenuContainer__0sWi_",
	"content": "MobileMenu_content__d8YxC",
	"content__item": "MobileMenu_content__item__bw5Jq",
	"image": "MobileMenu_image__nWmDi",
	"description": "MobileMenu_description__rE7dh",
	"line": "MobileMenu_line__e5795",
	"mobileCatalog": "MobileMenu_mobileCatalog__98paH",
	"mobileCatalog_opened": "MobileMenu_mobileCatalog_opened__h9R7s",
	"mobileCatalog_closed": "MobileMenu_mobileCatalog_closed__JDlWJ",
	"mobileCatalog__container": "MobileMenu_mobileCatalog__container___vTD4",
	"header": "MobileMenu_header__4R4GE",
	"panel": "MobileMenu_panel__aip2t",
	"contacts": "MobileMenu_contacts__Wy0N5",
	"contacts__phone": "MobileMenu_contacts__phone__gtg4m",
	"contacts__callback": "MobileMenu_contacts__callback__w5U_E",
	"catalogContent": "MobileMenu_catalogContent__hGFy1",
	"catalogContent__item": "MobileMenu_catalogContent__item__OO2W_",
	"searchContainer": "MobileMenu_searchContainer__R_kWQ",
	"searchContainer_opened": "MobileMenu_searchContainer_opened__G_3qs",
	"searchContainer_closed": "MobileMenu_searchContainer_closed__YIjq_",
	"search": "MobileMenu_search__sHk4K",
	"search__input": "MobileMenu_search__input__gdD3v",
	"searchBtn": "MobileMenu_searchBtn__X6n3k",
	"panel__close": "MobileMenu_panel__close__rvtF3"
};


/***/ }),

/***/ 6519:
/***/ ((module) => {

// Exports
module.exports = {
	"callback__title": "callback_callback__title__t906H",
	"callback__subtitle": "callback_callback__subtitle__NSUg1",
	"callback": "callback_callback___iyA2",
	"content": "callback_content__hPxdJ",
	"content__formInput": "callback_content__formInput__fDMhJ",
	"content__submitBtn": "callback_content__submitBtn__5lSYC",
	"description": "callback_description__9kNz6",
	"description__item": "callback_description__item__bF6bc"
};


/***/ }),

/***/ 6437:
/***/ ((module) => {

// Exports
module.exports = {
	"formInput": "formInput_formInput__8szqZ",
	"formInput__item": "formInput_formInput__item__OlHzj",
	"formInput__item_comment": "formInput_formInput__item_comment__pGkcq",
	"formInput__item_error": "formInput_formInput__item_error__BsgvO",
	"errorDescription": "formInput_errorDescription__0R2oh"
};


/***/ }),

/***/ 8011:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modal_modal__FW3Fn",
	"modalContainer": "modal_modalContainer__ef7eS",
	"modalContainer__close": "modal_modalContainer__close__1fBTH",
	"content": "modal_content__0Vgi3"
};


/***/ })

};
;