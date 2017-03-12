webpackJsonp([7],{

/***/ 1037:
/***/ (function(module, exports) {

module.exports = "---\ntitle: Sparkleshare Document Management\n---\n\nSparkleshare is a document management system, similar to other cloud\nbased storage solutions like Dropbox and Google drive. There are a\nnumber of distinctives about Sparkleshare that set it apart from these\nother solutions, and which are why we have included it in our Vision 100\nIT package.\n\nHosting\n-------\n\nSparkleshare is an open-source software package, meaning that the core\nfunctionality of the application carries no cost. Although there are\nfree tiers on other cloud based storage solutions, Sparkleshare is\nhosted and maintained by Vision 100 IT on our servers - which puts you\nthe user in greater control of your storage and brings a number of\nbenefits:\n\n### 1. Space\n\nThe first is space. With commercial solutions, eventually you’ll need\nmore space, and more space carries a cost. With Sparkleshare, the limit\nof storage is the limit of space that Vision 100 IT has on it’s servers\n- which are expandable as space is needed. The short of it is that extra\nspace requirements don’t cost you anything.\n\n### 2. Control and permissions\n\nDropbox and other free systems are designed for individual use. That is,\nyou receive your folder within which you can make changes, add extra\nfolders as you see fit, but ultimately you’re restricted to your one\nblock of space on the internet. If using it for a ministry, your space\nis ultimately ‘owned’ and controlled by the person who set it up.\nSparkleshare functions a little more like a shared drive, where the\nspace is owned by your Church.\n\nFurthermore, because Sparkleshare is like a shared drive - permissions\nfor project level access can be defined, added and removed with much\nmore control than free commercial products, and these features won’t be\ntied to corporate tiers which would be overkill both in storage space\nand cost for your church.\n\n### 3. Local and shared\n\nSparkleshare comes with a small application that will keep the files up\nto date on your personal computer. This is the primary way that users\nwill interact with files. When a change is made on one computer, the\nother members who have access to that project will automatically receive\nthe changes.\n\n### 4. Security\n\nSparkleshare is not account based, but instead is set up with a key that\nis unique to your computer. This is an added level of security for a\nchurch that often will be required to store sensitive information about\nchurch members.\n\n\nIf you’re interested in having Sparkleshare set up for your ministry,\nplease contact us though the Feature request form.\n"

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_sparkleshare_md__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_sparkleshare_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__content_sparkleshare_md__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _fm = __WEBPACK_IMPORTED_MODULE_1_front_matter___default()(__WEBPACK_IMPORTED_MODULE_4__content_sparkleshare_md___default.a),
    body = _fm.body,
    attributes = _fm.attributes;

var Sparkleshare = function Sparkleshare() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
		className: 'sparkleshare-wrapper'
	}, void 0, _jsx('div', {
		className: 'sparkleshare-overlay'
	}, void 0, _jsx('div', {
		className: 'site-wrapper site-wrapper-padding'
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, '# ' + attributes.title + '\n\t\t\t\t\t\t' + body)))));
};

/* harmony default export */ __webpack_exports__["default"] = Sparkleshare;

/***/ })

});