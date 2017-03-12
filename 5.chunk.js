webpackJsonp([5],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_team_member_index_jsx__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content__ = __webpack_require__(262);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








var _ref = _jsx('h1', {}, void 0, 'About Vision 100');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
	name: 'mission'
}, void 0, _jsx('h2', {}, void 0, 'Mission + Vision'), _jsx('p', {}, void 0, 'Vision 100 IT exists to help churches - particularly church IT volunteers and ministry staff - to use IT better.'), _jsx('hr', {}));

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
	name: 'history'
}, void 0, _jsx('h2', {}, void 0, 'History'), _jsx('p', {}, void 0, 'Vision 100 IT are a (newly!) national team of passionate IT and web development engineers, ministry leaders and management professionals who voluntarily build and maintain IT systems, training and educating our clients on the foundation of years of collective knowledge gleaned from within the IT industry.'), _jsx('p', {}, void 0, 'Vision 100 IT has now existed for over a decade, and has gradually built up a knowledge base of best practices and approaches for doing church IT sustainably. We are all about getting and keeping our clients on the web, in order to more effectively reach the lost and minister to the people in their congregations.'), _jsx('hr', {}));

var _ref4 = _jsx('h2', {}, void 0, 'Vision 100 IT Board');

var _ref5 = _jsx('hr', {});

var _ref6 = _jsx('h2', {}, void 0, 'Vision 100 IT Team Members');

var _ref7 = _jsx('hr', {});

var _ref8 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
	name: 'join'
}, void 0, _jsx('h2', {}, void 0, 'Join our team'), _jsx('p', {}, void 0, 'Vision 100 IT is made up of a team of volunteers who firmly believe in the value of IT to furthering the cause of the gospel. The team meets together regularly for \u2018sprints\u2019 where a lot of the heavy lifting work gets done, while we hang out, eat pizza and enjoy taking on some challenges together. In between times, we pick up support tasks as they arise from our client churches. Involvement can be as much as building a web app from scratch for interfacing our document management system, or taking on a task here and there across the year. If you\u2019re interested in being part of the team, be in touch ', _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
	to: '/contact'
}, void 0, 'here.')), _jsx('p', {}, void 0, 'Vision 100 IT does not have any employed positions at this time.'), _jsx('hr', {}));

var _ref9 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
	name: 'service'
}, void 0, _jsx('h2', {}, void 0, 'Service Levels (Client Charter)'), _jsx('p', {}, void 0, 'The Vision 100 IT Client Charter is to be advised.'), _jsx('p', {}, void 0, 'Please speak to us directly with any concerns prior to the charter being published.'), _jsx('div', {
	className: 'hidden'
}, void 0, _jsx('p', {}, void 0, 'Vision 100 commits to:'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Respond to all initial queries within 24 hours'), _jsx('li', {}, void 0, 'Solve simple problems within 3 days'), _jsx('li', {}, void 0, 'Promise 3'), _jsx('li', {}, void 0, 'Promise 4'), _jsx('li', {}, void 0, 'Promise 5'))));

var About = function About() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_4__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
		className: 'about-wrapper'
	}, void 0, _jsx('div', {
		className: 'about-overlay'
	}, void 0, _jsx('div', {
		className: 'site-wrapper site-wrapper-padding'
	}, void 0, _ref, _ref2, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
		name: 'team'
	}, void 0, _jsx('div', {
		className: 'team-wrap'
	}, void 0, _ref4, __WEBPACK_IMPORTED_MODULE_5__content__["a" /* default */].boardMembers.map(function (member, key) {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_team_member_index_jsx__["a" /* default */], _extends({ key: key }, member));
	}), _ref5, _ref6, __WEBPACK_IMPORTED_MODULE_5__content__["a" /* default */].teamMembers.map(function (member, key) {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_team_member_index_jsx__["a" /* default */], _extends({ key: key }, member));
	}), _ref7)), _ref8, _ref9))));
};

/* harmony default export */ __webpack_exports__["default"] = About;

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TeamMember_scss__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TeamMember_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TeamMember_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var imageContext = __webpack_require__(656);

var TeamMember = function TeamMember(props) {
	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_2__TeamMember_scss___default.a.member
	}, void 0, _jsx('h4', {
		title: props.title
	}, void 0, props.name, ' - ', props.position), _jsx('img', {
		src: props.image ? imageContext(props.image) : '',
		className: __WEBPACK_IMPORTED_MODULE_2__TeamMember_scss___default.a.img
	}), _jsx(__WEBPACK_IMPORTED_MODULE_1__markdown_index_jsx__["a" /* Markdown */], {}, void 0, props.text));
};

/* harmony default export */ __webpack_exports__["a"] = TeamMember;

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"member":"TeamMember__member___3IEeY","img":"TeamMember__img___2LyfZ"};

/***/ })

});