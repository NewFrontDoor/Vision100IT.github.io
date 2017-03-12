webpackJsonp([8],{

/***/ 1036:
/***/ (function(module, exports) {

module.exports = "---\ntitle: Events Registration Module\n---\n\nWouldn’t it be great if the administration for your church event wasn’t\nsuch heavy lifting?\n\nTypically, a church event will require a registration form, a payment\nsystem (either manual or online), and a lot of excel spreadsheets. You\nneed to consider how an individual will register compared to a family or\na couple, and furthermore, once you’ve worked all this out - then comes\nthe challenge of getting people to actually register!\n\nThere are a number of event registration systems available, but they\ncome with a number of drawbacks. You might have experienced one or more\nof these:\n\n-   The form can’t be branded with your church/ministry branding.\n-   Payments are taken separately\n-   The form is not on your website, but at an obscure web address,\n    making it an untrustworthy especially to older members of\n    your congregation.\n-   You’re tied into a subscription service, your registration details\n    are only available online, and the format of your registration\n    spreadsheet is not adjustable.\n-   Your church members can’t sign up on the spot because the form is\n    not mobile friendly.\n-   It’s difficult to accommodate flexible registration types (e.g.\n    people registering at cost price, or those needing financial\n    assistance to attend the event)\n\nVision 100 IT has developed an event registration system that can be\nrolled out to your website that addresses these concerns, allowing you\nto get as many of your ministry members registered through the online\nsystem as quickly as possible. Your greatest concern will just be how\nbest to advertise!\n\nYou can see an example of this registration form [here.]\n\nIf you’re interested in having an Events registration module added to\nyour website, let us know through the feature request form. If you\ncurrently don’t have a V100IT hosted website, but are interested in\nimplementing a similar system on your own page, we’d be happy to let you\nknow what you need to consider in order to set it up for yourself.\n\n  [here.]: http://www.crckingston.org.au/camprego\n"

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_registration_md__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_registration_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__content_registration_md__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _fm = __WEBPACK_IMPORTED_MODULE_1_front_matter___default()(__WEBPACK_IMPORTED_MODULE_4__content_registration_md___default.a),
    body = _fm.body,
    attributes = _fm.attributes;

var Registration = function Registration() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
		className: 'registration-wrapper'
	}, void 0, _jsx('div', {
		className: 'registration-overlay'
	}, void 0, _jsx('div', {
		className: 'site-wrapper site-wrapper-padding'
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, '# ' + attributes.title + '\n\t\t\t\t\t\t' + body)))));
};

/* harmony default export */ __webpack_exports__["default"] = Registration;

/***/ })

});