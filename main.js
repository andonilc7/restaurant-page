/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction makeContact() {\n  const main = document.querySelector('.main');\n  main.textContent ='';\n  main.style.background = 'url(./assets/traditional-greek-dishes.jpg)'\n  const modal = document.createElement('div');\n  modal.classList.add('modal');\n  main.append(modal);\n\n  const phone = document.createElement('p');\n  phone.classList.add(\"description\");\n  phone.textContent = \"Phone: 123-456-7890\"\n  const address = document.createElement('p');\n  address.classList.add(\"description\");\n  address.textContent = \"Address: 123 Cypriot Blvd.\";\n  const message = document.createElement('p');\n  message.classList.add(\"description\");\n  message.textContent = \"We look forward to meeting you!\";\n  modal.append(phone);\n  modal.append(address);\n  modal.append(message);\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeHome() {\n    const main = document.querySelector('.main');\n    main.style.background = 'url(./assets/traditional-greek-dishes.jpg)'\n    main.textContent ='';\n    \n    //making modal\n    const modal = document.createElement('div');\n    modal.classList.add('modal');\n    main.append(modal);\n\n    //writing text on home page\n    const p1 = document.createElement('p');\n    p1.classList.add('description');\n    p1.textContent = \"Welcome to Andoni's Cypriot Restaurant!\";\n    const p2 = document.createElement('p');\n    p2.classList.add('description');\n    p2.textContent = \"Here, we have the best traditional food with modern twists.\";\n    modal.append(p1);\n    modal.append(p2);\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\nconsole.log('hello');\n\n\n\n\n\n\nconst main = document.createElement('div');\nmain.classList.add('main');\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst home = document.querySelector('.home');\nconst menu = document.querySelector('.menu');\nconst contact = document.querySelector('.contact');\nconst tabs = document.querySelectorAll('.tab');\n\ntabs.forEach((tab) => {\n  tab.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains('active')) {\n      return;\n    }\n\n    tabs.forEach((tab) => {\n      tab.classList.remove('active');\n    })\n    e.target.classList.add('active');\n\n    if (e.target == home) {\n      (0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    } else if (e.target == menu) {\n      (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (e.target == contact) {\n      (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n  })\n})\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction makeMenu() {\n  const main = document.querySelector('.main');\n  main.textContent ='';\n  main.style.background = '#7E9181';\n  const menuBox = document.createElement('div');\n  menuBox.classList.add('menu-box');\n  main.append(menuBox);\n\n  //starters section\n  const starters = document.createElement('div');\n  const startersTitle = document.createElement('h2');\n  startersTitle.textContent = \"Starters\";\n  const octopus = document.createElement('p');\n  octopus.textContent = \"Octopus\";\n  const sheftalies = document.createElement('p');\n  sheftalies.textContent = \"Sheftalies\"\n  const pita = document.createElement('p');\n  pita.textContent = \"Pita and Hummus\"\n  const beets = document.createElement('p');\n  beets.textContent = \"Beets\";\n\n  menuBox.append(starters);\n  starters.append(startersTitle);\n  starters.append(octopus);\n  starters.append(sheftalies);\n  starters.append(pita);\n  starters.append(beets);\n\n\n  // entrees section\n  const entrees = document.createElement('div');\n  entrees.textContent = '';\n  const entreesTitle = document.createElement('h2');\n  entreesTitle.textContent = \"Entrees\";\n  const lambChops = document.createElement('p');\n  lambChops.textContent = \"Lamb Chops\";\n  const chicken = document.createElement('p');\n  chicken.textContent = \"Chicken Souvlaki Sandwich\";\n  const pork = document.createElement('p');\n  pork.textContent = \"Pork Souvlaki Sandwich\";\n  const kleftiko = document.createElement('p');\n  kleftiko.textContent = \"Kleftiko\";\n  const branzino = document.createElement('p');\n  branzino.textContent = \"Whole Branzino\";\n  const pastichio = document.createElement('p');\n  pastichio.textContent = \"Pastichio\";\n\n  menuBox.append(entrees);\n  entrees.append(entreesTitle);\n  entrees.append(lambChops);\n  entrees.append(chicken);\n  entrees.append(pork);\n  entrees.append(kleftiko);\n  entrees.append(branzino);\n  entrees.append(branzino);\n\n\n  // desserts section\n  const desserts = document.createElement('div');\n  const dessertsTitle = document.createElement('h2');\n  dessertsTitle.textContent = \"Desserts\";\n  const baklava = document.createElement('p');\n  baklava.textContent = \"Baklava\";\n  const loukoumades =  document.createElement('p');\n  loukoumades.textContent = \"Loukoumades\";\n  const ekmek = document.createElement('p');\n  ekmek.textContent = \"Ekmek\";\n  const mahalepi = document.createElement('p');\n  mahalepi.textContent = \"Mahalepi Lybanesiko\";\n  const yogurt = document.createElement('p');\n  yogurt.textContent = \"Greek Yogurt and Cherries\";\n\n\n  menuBox.append(desserts);\n  desserts.append(dessertsTitle);\n  desserts.append(baklava);\n  desserts.append(loukoumades);\n  desserts.append(ekmek);\n  desserts.append(mahalepi);\n  desserts.append(yogurt);\n\n  return main;\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction makeHeader() {\n  const header = document.createElement('header');\n  header.classList.add('header');\n\n  const restaurantName = document.createElement('h1');\n  restaurantName.classList.add('restaurant-name');\n  restaurantName.textContent = \"Andoni's Cypriot Restaurant\";\n\n  header.append(restaurantName);\n  header.append(makeNav());\n\n  return header;\n}\n\nfunction makeNav() {\n  const nav = document.createElement('nav');\n  nav.classList.add('nav');\n\n  const homeBtn = document.createElement('p');\n  homeBtn.textContent = \"Home\";\n  homeBtn.classList.add('tab');\n  homeBtn.classList.add('home');\n  homeBtn.classList.add('active');\n  nav.append(homeBtn);\n\n  const menuBtn = document.createElement('p');\n  menuBtn.textContent = \"Menu\";\n  menuBtn.classList.add('tab');\n  menuBtn.classList.add('menu');\n  nav.append(menuBtn);\n\n  const contactBtn = document.createElement('p');\n  contactBtn.textContent = \"Contact\";\n  contactBtn.classList.add('tab');\n  contactBtn.classList.add('contact');\n  nav.append(contactBtn);\n\n  return nav;\n}\n\n\n\nfunction initializeWebsite() {\n  const content = document.querySelector('#content');\n  content.append(makeHeader());\n  const main = document.createElement('div');\n  main.classList.add('main');\n  content.append(main);\n  content.append((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;