webpackJsonp([9],{

/***/ 1035:
/***/ (function(module, exports) {

module.exports = "---\ntitle: Podcasting Module\n---\n\nPodcasting is an excellent way to distribute your church audio, from\nyour weekly sermons, to your once off evangelistic events and community\nseminars. Podcasting allows your church members and others to\n\\*automatically\\* download your audio to their devices.\n\n### Why podcasting is great\n\nThe main issue churches have with podcasting is the significant effort\nit takes to set it up. Often it’s enough trouble to post the file on the\nwebsite. Unfortunately, this then requires church members to regularly\nreturn to the website to download the individual files, and if they then\nwant to listen on a digital device like a phone or tablet, it needs to\nbe added to their library, and synced before it can be listened to!\n\nNeedless to say - the effort of uploading sermons has a limited impact\nwhen church members find it difficult to listen to them.\n\nThis is why Vision 100 IT offers podcasting as a core feature of our\nwebsites. Once set up, it’s as simple as uploading the file to your\nwebsite and the rest is handled automatically.\n\nPodcasting can be linked to the iTunes podcasting system as well,\nallowing you to use your church branding and to have your church content\ndiscoverable on iTunes.\n\nIf you’re interested in having podcasting added to your website, let us\nknow through the feature request form. If you currently don’t have a\nVision 100 IT hosted website, but are interested in podcasting on your\nown page, we’d be happy to let you know what you need to consider in\norder to set it up for yourself.\n"

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_podcasting_md__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_podcasting_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__content_podcasting_md__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _fm = __WEBPACK_IMPORTED_MODULE_1_front_matter___default()(__WEBPACK_IMPORTED_MODULE_4__content_podcasting_md___default.a),
    body = _fm.body,
    attributes = _fm.attributes;

var Podcasting = function Podcasting() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
		className: 'podcasting-wrapper'
	}, void 0, _jsx('div', {
		className: 'podcasting-overlay'
	}, void 0, _jsx('div', {
		className: 'site-wrapper site-wrapper-padding'
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, '# ' + attributes.title + '\n\t\t\t\t\t\t' + body)))));
};

/* harmony default export */ __webpack_exports__["default"] = Podcasting;

/***/ })

});