webpackJsonp([18],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index_index_jsx__ = __webpack_require__(643);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
	className: 'site-wrapper'
}, void 0, _jsx('h1', {}, void 0, 'Control page'), _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'A mockup control panel for easy implementation of site features.'), _jsx('p', {}, void 0, 'This would likely require implementation of a database of some sort, which is currently not available.')), _jsx('hr', {}), _jsx('form', {
	className: ''
}, void 0, _jsx('div', {
	className: 'checkbox'
}, void 0, _jsx('label', {}, void 0, _jsx('input', {
	type: 'checkbox',
	name: 'announcementCheck',
	id: 'error2',
	value: 'error2'
}), 'Display announcement bar on \u2018client\u2019 page')), _jsx('div', {
	className: 'checkbox'
}, void 0, _jsx('label', {}, void 0, _jsx('input', {
	type: 'checkbox',
	name: 'announcementCheck',
	id: 'error2',
	value: 'error2'
}), 'Display announcement bar on all pages [currently unavailable]')), _jsx('div', {
	className: 'form-group has-success has-feedback'
}, void 0, _jsx('label', {
	htmlFor: 'subject'
}, void 0, 'Content for announcement bar'), _jsx('input', {
	type: 'text',
	name: 'subject',
	className: 'form-control',
	placeholder: 'Insert content for the announcement bar'
})), _jsx('hr', {}), _jsx('div', {
	className: 'form-group has-success has-feedback'
}, void 0, _jsx('label', {
	htmlFor: 'subject'
}, void 0, 'Email address for support request form'), _jsx('input', {
	type: 'text',
	name: 'subject',
	className: 'form-control',
	placeholder: 'Insert valid email'
})), _jsx('div', {
	className: 'form-group has-success has-feedback'
}, void 0, _jsx('label', {
	htmlFor: 'subject'
}, void 0, 'Email address for feature request form'), _jsx('input', {
	type: 'text',
	name: 'subject',
	className: 'form-control',
	placeholder: 'Insert valid email'
}))), _jsx('div', {}, void 0, 'Insert other possible items here:'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Item 1'), _jsx('li', {}, void 0, 'Item 2'), _jsx('li', {}, void 0, 'Item 3'))));

var Control = function Control() {
	return _ref;
};

/* harmony default export */ __webpack_exports__["default"] = Control;

/***/ })

});