/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 637:
/***/ ((module) => {

const calculator = {
    a: null,
    b: null,
    init(arg1, arg2){
        this.a = arg1;
        this.b = arg2;
    },
    addition(){
        if (this.a === undefined || this.b === undefined){
            return 'один из аргументов не определен';
        } else if (isNaN(this.a) || isNaN(this.b)){
            return 'один из аргументов не является числом';
        }
        return this.a + this.b;
    },
    subtraction(){
        if (this.a === undefined || this.b === undefined){
            return 'один из аргументов не определен';
        } else if (isNaN(this.a) || isNaN(this.b)){
        return 'один из аргументов не является числом';
        }
        return this.a - this.b;
    },
    multiplication(){
        if ( this.a === null || this.b === null) {
            return null;
        } else if (this.a === undefined || this.b === undefined){
            return undefined;
        } else if (isNaN(this.a) || isNaN(this.b)){
            return 'один из аргументов не является числом';
        }
        return this.a * this.b;
    },
    division(){
        if ( this.a === null || this.b === null) {
            return null;
        } else if (this.a === undefined || this.b === undefined){
            return undefined;
        } else if (isNaN(this.a) || isNaN(this.b)){
            return 'один из аргументов не является числом';
        }
        return this.a / this.b;
    },

}
module.exports = {
    calculator: calculator,
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const script = __webpack_require__(637);
const calc = script.calculator;
calc.init(56,4);
console.log(calc.subtraction());

})();

/******/ })()
;