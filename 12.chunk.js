webpackJsonp([12],{

/***/ 1034:
/***/ (function(module, exports) {

module.exports = "---\ntitle: Elvanto Church Management System\n---\n\n### What is Elvanto?\n\nFrom the [Elvanto webpage:]\n\n> Elvanto is an online church management system that gives you back the\n> power with your church database. It’s easy to use and jam-packed with\n> powerful features.\n\nElvanto is a hosted system that keeps track of your ministries and\nmembers. It has powerful reporting and rostering features, scheduling,\nreminders and communication solutions, as well as a host of other\nexcellent database related features.\n\n### Why do we recommend Elvanto?\n\nWe have searched through a number of Church Management Systems (CMS),\nand have come to the conclusion that Elvanto offers the best flexibility\nof features relative to its cost. Elvanto integrates well into our\necosystem, and fits the Vision 100 IT philosophy of use. What’s more,\nElvanto is an Australian company, so support and featured webcasts are\nin our time zone! We so believe in the product Elvanto offers that\nVision 100 IT has partnered with Elvanto to train client churches who\nchoose to use this system.\n\n### Does that mean you will only support users of Elvanto?\n\nElvanto is the system that we’re most familiar with, but we also have\nhad extensive experience with Church Community Builder and recommend it\nas an alternative if Elvanto does not fit your requirements. If you are\na Vision 100 IT client, we will do our best to support you with\nwhichever CMS you choose to use in your context.\n\n### How do I get started?\n\nThe best thing to do would be to be in touch through our [Contact Form]\nif you wish to come on board, or if you are already a Vision 100 IT\nclient, then let us know you’d like to get going with Elvanto through\nthe [Feature Request form].\n\n  [Elvanto webpage:]: https://www.elvanto.com/about/\n  [Contact Form]: /#join\n  [Feature Request form]: /feature\n"

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_elvanto_md__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_elvanto_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__content_elvanto_md__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _fm = __WEBPACK_IMPORTED_MODULE_1_front_matter___default()(__WEBPACK_IMPORTED_MODULE_4__content_elvanto_md___default.a),
    body = _fm.body,
    attributes = _fm.attributes;

var Elvanto = function Elvanto() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
		className: 'elvanto-wrapper'
	}, void 0, _jsx('div', {
		className: 'elvanto-overlay'
	}, void 0, _jsx('div', {
		className: 'site-wrapper site-wrapper-padding'
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, '# ' + attributes.title + '\n\t\t\t\t\t\t' + body)))));
};

/* harmony default export */ __webpack_exports__["default"] = Elvanto;

/***/ })

});