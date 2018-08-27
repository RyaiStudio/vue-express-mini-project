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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/script/custom-script.js":
/*!**************************************!*\
  !*** ./dist/script/custom-script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n(function(window) {\r\n\twindow.elnav = function(){ }\r\n\twindow.elnav.prototype = {\r\n\t\tdata: {\r\n\t\t\tbrand: {\r\n\t            url: '/',\r\n\t            logo: 'https://bulma.io/images/bulma-logo.png',\r\n\t            imgalt: 'Bulma: a modern CSS framework based on Flexbox'\r\n\t        },\r\n\t        menu: {\r\n\t            right: [\r\n\t                { url: '', content: 'home', nosub: true, subs: [] },\r\n\t                { url: '/about', content: 'about', nosub: false, subs: [\r\n\t                    { url: '/overview', content: 'overview' },\r\n\t                    { url: '/icons', content: 'icons' }\r\n\t                ] }\r\n\t            ],\r\n\t            buttons: [\r\n\t                { btClass: 'is-default', url: 'https://github.com/private-ryan23', content: 'Tweet', icons: 'fab fa-facebook-messenger' },\r\n\t                { btClass: 'is-primary', url: '', content: 'Download', icons: 'fas fa-download' }\r\n\t            ]\r\n\t        }\r\n\t\t}\r\n\t}\r\n\r\n\tvar Helper = function() { }\r\n\tHelper.prototype = {\r\n\t\tinit: function() { }\r\n\t}\r\n\r\n})(window)\r\n\r\n\n\n//# sourceURL=webpack:///./dist/script/custom-script.js?");

/***/ }),

/***/ 1:
/*!********************************************!*\
  !*** multi ./dist/script/custom-script.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/script/custom-script.js */\"./dist/script/custom-script.js\");\n\n\n//# sourceURL=webpack:///multi_./dist/script/custom-script.js?");

/***/ })

/******/ });