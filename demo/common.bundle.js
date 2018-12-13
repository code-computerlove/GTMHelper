/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return closest; });\n// Helper.js\n// Generic functions we can reuse.\nfunction matches(el, selector) {\n  // IE support\n  if (!Element.prototype.matches) {\n    Element.prototype.matches = Element.prototype.msMatchesSelector;\n  }\n\n  return el.matches(selector);\n}\n\nfunction closest(el, selector) {\n  if (el.tagName === 'BODY') {\n    return null;\n  }\n\n  if (matches(el.parentNode, selector)) {\n    return el.parentNode;\n  }\n\n  return closest(el.parentNode, selector);\n}\n\n//# sourceURL=webpack:///./helpers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: ConfigChange, sendPromoEvent, TrackClickEvents, TrackComponentsInView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigChange\", function() { return ConfigChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendPromoEvent\", function() { return sendPromoEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TrackClickEvents\", function() { return TrackClickEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TrackComponentsInView\", function() { return TrackComponentsInView; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./helpers.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar config = {\n  category: 'data-ga-category',\n  scroll: 'data-ga-scroll-tracking',\n  action: 'data-ga-action',\n  label: 'data-ga-label'\n};\nfunction ConfigChange(options) {\n  config = _objectSpread({}, options);\n}\nfunction sendPromoEvent(event, eventType, events) {\n  var dataLayerEvent = {\n    event: event,\n    ecommerce: {}\n  };\n\n  var eventData = _objectSpread({\n    name: '',\n    position: '',\n    creative: ''\n  }, events);\n\n  dataLayerEvent.ecommerce[eventType] = {\n    promotions: [eventData]\n  };\n  dataLayer.push(dataLayerEvent);\n}\n\nfunction checkForAction() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      target = _ref.target,\n      currentTarget = _ref.currentTarget;\n\n  var element = target;\n\n  if (!element.hasAttribute('data-ga-action')) {\n    element = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, '[data-ga-action]');\n  }\n\n  if (element === null) return;\n  var name = currentTarget.getAttribute('data-ga-category') || '';\n  var position = element.getAttribute('data-ga-action') || '';\n  var creative = element.getAttribute('data-ga-label') || '';\n  sendPromoEvent('promotionClick', 'promoClick', {\n    name: name,\n    position: position,\n    creative: creative\n  });\n} // Event to track click events on a component\n\n\nfunction TrackClickEvents() {\n  var components = [].slice.call(document.querySelectorAll(\"[\".concat(config.category, \"]\")));\n  components.forEach(function (component) {\n    return component.addEventListener('click', checkForAction, true);\n  });\n}\nvar observer = null;\n\nfunction checkIfInMiddleOfWindow(entry) {\n  if (entry.intersectionRatio >= 0.50) {\n    var name = entry.target.getAttribute(config.category);\n    sendPromoEvent('promotionView', 'promoView', {\n      name: name\n    });\n    observer.unobserve(entry.target);\n  }\n}\n\nfunction observerCallback(entries) {\n  entries.forEach(checkIfInMiddleOfWindow);\n} // checks if the component is in the middle of the view\n\n\nfunction TrackComponentsInView() {\n  var observerConfig = {\n    threshold: [0.50]\n  };\n  observer = new IntersectionObserver(observerCallback, observerConfig);\n  var components = [].slice.call(document.querySelectorAll(\"[\".concat(config.scroll, \"]\")));\n  components.forEach(function (element) {\n    return observer.observe(element);\n  });\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\n\nObject(_index__WEBPACK_IMPORTED_MODULE_0__[\"TrackComponentsInView\"])();\nObject(_index__WEBPACK_IMPORTED_MODULE_0__[\"TrackClickEvents\"])();\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ })

/******/ });