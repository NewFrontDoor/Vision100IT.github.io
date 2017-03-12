webpackJsonp([17],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(643);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
	className: 'status-overlay'
}, void 0, _jsx('div', {
	className: 'site-wrapper site-wrapper-padding'
}, void 0, _jsx('h1', {}, void 0, 'System Status'), _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'The following is a list of our systems and their current status - if there is a problem with one of your systems or website that is not listed here, please contact us via the ', _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
	to: '/support'
}, void 0, 'support request form'), '. ', _jsx('strong', {}, void 0, 'This feature is currently in development and will be launched soon.'))), _jsx('div', {}, void 0, _jsx('dl', {
	className: 'dl-horizontal'
}, void 0, _jsx('dt', {}, void 0, 'Website hosting'), _jsx('dd', {}, void 0, 'Operating Ok - no known issues'), _jsx('dt', {}, void 0, 'Sparkleshare'), _jsx('dd', {}, void 0, 'Operating Ok - no known issues'), _jsx('dt', {}, void 0, 'Sympa Mailing Lists'), _jsx('dd', {}, void 0, 'Operating Ok - no known issues'))))));

var Status = function Status() {
	return _ref;
};

/* harmony default export */ __webpack_exports__["default"] = Status;

/***/ })

});