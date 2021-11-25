"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products/[permalink]";
exports.ids = ["pages/products/[permalink]"];
exports.modules = {

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(\"pk_test_3604516bf1c3472c73ebb227f831e21f6823d31e4ad4d\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0QsMERBQVcsQ0FBQ0UsdURBQTJDO0FBRTFFLGlFQUFlRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWtlaXR1cC8uL2xpYi9jb21tZXJjZS5qcz83NTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBDb21tZXJjZVNESyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19BUElfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiQ29tbWVyY2VTREsiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/products/[permalink].js":
/*!***************************************!*\
  !*** ./pages/products/[permalink].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/commerce */ \"./lib/commerce.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getStaticProps({ params  }) {\n    const { permalink  } = params;\n    const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.retrieve(permalink, {\n        type: 'permalink'\n    });\n    return {\n        props: {\n            product\n        }\n    };\n}\nasync function getStaticPaths() {\n    const { data: products  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.list();\n    return {\n        paths: products.map((product)=>({\n                params: {\n                    permalink: product.permalink\n                }\n            })\n        ),\n        fallback: false\n    };\n}\nfunction ProductPage({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        __source: {\n            fileName: \"C:\\\\Users\\\\talla\\\\WebstormProjects\\\\makeitup\\\\pages\\\\products\\\\[permalink].js\",\n            lineNumber: 32,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\talla\\\\WebstormProjects\\\\makeitup\\\\pages\\\\products\\\\[permalink].js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: product.name\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\talla\\\\WebstormProjects\\\\makeitup\\\\pages\\\\products\\\\[permalink].js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: product.description.replace(/<[^>]+>/g, '')\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\talla\\\\WebstormProjects\\\\makeitup\\\\pages\\\\products\\\\[permalink].js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: product.price.formatted_with_symbol\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcGVybWFsaW5rXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDaEI7QUFDbEIsZUFBZUUsY0FBYyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBQyxHQUFHRCxNQUFNO0lBRTNCLEtBQUssQ0FBQ0UsT0FBTyxHQUFHLEtBQUssQ0FBQ0wsdUVBQTBCLENBQUNJLFNBQVMsRUFBRSxDQUFDO1FBQ3pESSxJQUFJLEVBQUUsQ0FBVztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSkMsS0FBSyxFQUFFLENBQUM7WUFDSkosT0FBTztRQUNYLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVNLGVBQWVLLGNBQWMsR0FBRyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUwsUUFBUSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNOLG1FQUFzQjtJQUV2RCxNQUFNLENBQUMsQ0FBQztRQUNKYSxLQUFLLEVBQUVQLFFBQVEsQ0FBQ1EsR0FBRyxFQUFFVCxPQUFPLElBQU0sQ0FBQztnQkFDL0JGLE1BQU0sRUFBRSxDQUFDO29CQUNMQyxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0QsU0FBUztnQkFDaEMsQ0FBQztZQUNMLENBQUM7O1FBQ0RXLFFBQVEsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRWMsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDWCxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUMsTUFBTSx1RUFDREosdURBQWM7Ozs7Ozs7O2lGQUNWaUIsQ0FBRTs7Ozs7OzswQkFBRWIsT0FBTyxDQUFDYyxJQUFJOztpRkFDaEJDLENBQUM7Ozs7Ozs7MEJBQUVmLE9BQU8sQ0FBQ2dCLFdBQVcsQ0FBQ0MsT0FBTyxhQUFhLENBQUU7O2lGQUM3Q0YsQ0FBQzs7Ozs7OzswQkFBRWYsT0FBTyxDQUFDa0IsS0FBSyxDQUFDQyxxQkFBcUI7Ozs7QUFHbkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ha2VpdHVwLy4vcGFnZXMvcHJvZHVjdHMvW3Blcm1hbGlua10uanM/ZjU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uLy4uL2xpYi9jb21tZXJjZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCB7IHBlcm1hbGlua30gPSBwYXJhbXM7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLnJldHJpZXZlKHBlcm1hbGluaywge1xyXG4gICAgICAgIHR5cGU6ICdwZXJtYWxpbmsnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHBlcm1hbGluazogcHJvZHVjdC5wZXJtYWxpbmssXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKHsgcHJvZHVjdCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb24ucmVwbGFjZSgvPFtePl0rPi9nLCAnJyl9PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZS5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9wPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNvbW1lcmNlIiwiUmVhY3QiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBlcm1hbGluayIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInJldHJpZXZlIiwidHlwZSIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwibGlzdCIsInBhdGhzIiwibWFwIiwiZmFsbGJhY2siLCJQcm9kdWN0UGFnZSIsIkZyYWdtZW50IiwiaDEiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwicmVwbGFjZSIsInByaWNlIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[permalink].js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[permalink].js"));
module.exports = __webpack_exports__;

})();