exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 8930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6167);
/* harmony import */ var _styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SliderSomeItems = function SliderSomeItems(_ref) {
  var arrayItems = _ref.arrayItems,
      turningNextBtn = _ref.turningNextBtn,
      turningPrevBtn = _ref.turningPrevBtn,
      isCrumbs = _ref.isCrumbs,
      slidesAmount = _ref.slidesAmount;
  var img = arrayItems; // Хук Effect

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Запускаем интервал
    var interval = setInterval(function () {
      doNextSlide();
    }, 5000); // Выключаем интервал

    return function () {
      clearInterval(interval);
    };
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMouseDown = _useState4[0],
      setIsMouseDown = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("next"),
      _useState6 = _slicedToArray(_useState5, 2),
      action = _useState6[0],
      setAction = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      x3 = _useState8[0],
      setX3 = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      y3 = _useState10[0],
      setY3 = _useState10[1];

  function doNextSlide() {
    setActiveIndex(function (current) {
      setAction("next"); // Вычисляем индекс следующего слайда, который должен вывестись

      var res = current === img.length - 1 ? 0 : current + 1; // Возвращаем индекс
      //console.log(res)

      return res;
    }); //countIndex(1);
  }

  function doPrevSlide() {
    setActiveIndex(function (current) {
      setAction("prev"); // Вычисляем индекс следующего слайда, который должен вывестись

      var res = current === 0 ? img.length - 1 : current - 1; // Возвращаем индекс

      return res;
    }); // countIndex(-1);
  } // Вычисляем индекс предыдущего слайда


  var prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  var prevImgDouble = prevImgIndex ? prevImgIndex - 1 : img.length - 1; // Вычисляем индекс следующего слайда

  var nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
  var nextImgDouble = activeIndex + 1 < img.length ? activeIndex + 2 < img.length ? activeIndex === img.length - 2 ? 0 : activeIndex + 2 : 0 : 1; //инициализируем переменные для начала ведения отсчета для перелистывания

  var x1 = null;
  var y1 = null; //функция записывающая начало свайпа по координатам x и y

  function handleTouchStart(e) {
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
  }

  function handleTouchMove(e) {
    if (!x1 || !y1) {
      // если не существует начала свайпа, выходим из функци
      return;
    } //каждый раз инициализируется переменная записывающая текущие координаты свайпа


    var x2 = e.touches[0].clientX;
    var y2 = e.touches[0].clientY;
    var xDifference = x2 - x1;
    var yDifference = y2 - y1;
    calculateCoordinates(xDifference, yDifference);
  }

  function handleMouseDown(e) {
    setIsMouseDown(true);
    setX3(e.pageX);
    setY3(e.pageY);
  }

  function handleMouseMove(e) {
    if (isMouseDown) {
      var x4 = e.pageX;
      var y4 = e.pageY;
      e.preventDefault();

      if (Math.abs(x4 - x3) > 80) {
        setX3(x4);
        var xDifference = x4 - x3;
        var yDifference = y4 - y3;
        calculateCoordinates(xDifference, yDifference);
      } else {
        return;
      }
    }
  }

  function handleMouseUp(e) {
    setIsMouseDown(false);
  }

  function calculateCoordinates(xDiff, yDiff) {
    // записываем разницу в координатах
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //ветка выполняется, когда свайп идет влево или вправо
      if (xDiff > 0) {
        doPrevSlide();
      } else {
        doNextSlide();
      }
    }
  }

  function switchToGivenSlide(index) {
    setActiveIndex(index);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (action) {
      setTimeout(function () {
        setAction(null);
      }, 1000);
    }
  }, [action]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems),
    onTouchStart: function onTouchStart(e) {
      return handleTouchStart(e);
    },
    onTouchMove: function onTouchMove(e) {
      return handleTouchMove(e);
    },
    onMouseDown: function onMouseDown(e) {
      return handleMouseDown(e);
    },
    onMouseMove: function onMouseMove(e) {
      return handleMouseMove(e);
    },
    onMouseUp: function onMouseUp(e) {
      return handleMouseUp(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return handleMouseUp(e);
    },
    children: [turningPrevBtn ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().prevSlide),
      onClick: doPrevSlide,
      children: turningPrevBtn
    }) : "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slidesContainer),
      children: [slidesAmount === 5 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img) + " " + (action ? action === "next" ? (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_next) : (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_prev) : ""),
        children: img[prevImgDouble]
      }, prevImgDouble) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img) + " " + (action ? action === "next" ? (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_next) : (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_prev) : ""),
        children: img[prevImgIndex]
      }, prevImgIndex), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img) + " " + (action ? action === "next" ? (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_next) : (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_prev) : ""),
        children: img[activeIndex]
      }, activeIndex), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img) + " " + (action ? action === "next" ? (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_next) : (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_prev) : ""),
        children: img[nextImgIndex]
      }, nextImgIndex), slidesAmount && slidesAmount >= 4 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img) + " " + (action ? action === "next" ? (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_next) : (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems__img_prev) : ""),
        children: img[nextImgDouble]
      }, nextImgDouble) : ""]
    }), turningNextBtn ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nextSlide),
      onClick: doNextSlide,
      children: turningNextBtn
    }) : "", isCrumbs ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems_crumbs),
      children: img.map(function (item, index) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
          className: activeIndex === index ? (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems_crumbs__item) + " " + (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems_crumbs__item_active) : (_styles_SliderSomeItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SliderSomeItems_crumbs__item),
          onClick: function onClick() {
            return switchToGivenSlide(index);
          }
        }, index);
      })
    }) : ""]
  });
}; //(action==="next"?(styles.SliderSomeItems__img_next):(styles.SliderSomeItems__img_prev))


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderSomeItems);

/***/ }),

/***/ 6167:
/***/ ((module) => {

// Exports
module.exports = {
	"SliderSomeItems": "SliderSomeItems_SliderSomeItems__sXMep",
	"prevSlide": "SliderSomeItems_prevSlide__fa3tl",
	"prevSlide__img": "SliderSomeItems_prevSlide__img__ogNkV",
	"nextSlide": "SliderSomeItems_nextSlide__kTo8h",
	"nextSlide__img": "SliderSomeItems_nextSlide__img__JL_ho",
	"SliderSomeItems__img": "SliderSomeItems_SliderSomeItems__img__RstVr",
	"SliderSomeItems__img_next": "SliderSomeItems_SliderSomeItems__img_next__etvTS",
	"SliderSomeItems__img_prev": "SliderSomeItems_SliderSomeItems__img_prev__qJ8KJ",
	"slidesContainer": "SliderSomeItems_slidesContainer__egYH2",
	"SliderSomeItems_crumbs": "SliderSomeItems_SliderSomeItems_crumbs__YEpzU",
	"SliderSomeItems_crumbs__item": "SliderSomeItems_SliderSomeItems_crumbs__item__LgY2R",
	"SliderSomeItems_crumbs__item_active": "SliderSomeItems_SliderSomeItems_crumbs__item_active__86Cwl"
};


/***/ })

};
;