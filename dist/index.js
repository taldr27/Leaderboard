"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/interface.js */ \"./src/modules/interface.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n\n\n\ndocument.querySelector('#score-form').addEventListener('submit', _modules_add_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ndocument.addEventListener('DOMContentLoaded', _modules_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayScores);\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ \"./src/modules/const.js\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ \"./src/modules/interface.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\n\n\nconst add = (e) => {\n  e.preventDefault();\n  const name = document.querySelector('#input-name').value;\n  const scoreV = document.querySelector('#input-score').value;\n\n  if (name === '' || scoreV === '') {\n    const section = document.getElementById('score-container');\n    const message = document.createElement('p');\n    message.innerHTML = 'Please put something into the fields';\n    section.insertAdjacentElement('afterend', message);\n    setTimeout(() => { message.remove(); }, 2000);\n  } else {\n    const score = new _const_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, scoreV);\n\n    _interface_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addScoreToList(score);\n    _store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addScore(score);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/const.js":
/*!******************************!*\
  !*** ./src/modules/const.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scores)\n/* harmony export */ });\nclass Scores {\n  constructor(name, score) {\n    this.name = name;\n    this.score = score;\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/const.js?");

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interface)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\nclass Interface {\n  static displayScores() {\n    const scores = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScores();\n    scores.forEach((score) => Interface.addScoreToList(score));\n  }\n\n  static addScoreToList(score) {\n    const list = document.querySelector('#books-cont');\n    const row = document.createElement('li');\n    row.innerHTML = `<span class=\"title\">'${score.name}' by ${score.scoreV}</span>\n    <button class='list-btn'><a class=\"delete\" id='' href=\"#\">Remove</a></button>`;\n    list.appendChild(row);\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/interface.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n  static getScores() {\n    let scores;\n    if (localStorage.getItem('scores') === null) {\n      scores = [];\n    } else {\n      scores = JSON.parse(localStorage.getItem('scores'));\n    }\n    return scores;\n  }\n\n  static addScore(score) {\n    const scores = Store.getScores();\n    scores.push(score);\n    localStorage.setItem('scores', JSON.stringify(scores));\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/store.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);