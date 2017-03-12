webpackJsonp([4],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_alert_index_jsx__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card_index_jsx__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_hero_index_jsx__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_post_index_jsx__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pagination_index_jsx__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_scss__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__client_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();














var blog = {
	get context() {
		return __webpack_require__(842);
	},
	get posts() {
		return this.context.keys().sort().reverse();
	},
	post: function post(id) {
		return this.context(this.posts.find(function (x) {
			return x === id;
		}));
	},
	postId: function postId(key) {
		var id = this.posts[key].split('.');
		id.shift();
		id.pop();
		return id.join('.');
	},
	page: function page(_ref) {
		var _this = this;

		var _ref$trim = _ref.trim,
		    trim = _ref$trim === undefined ? 0 : _ref$trim,
		    _ref$page = _ref.page,
		    _page = _ref$page === undefined ? 0 : _ref$page,
		    _ref$size = _ref.size,
		    size = _ref$size === undefined ? 0 : _ref$size;

		var begin = _page * size;
		var end = begin + size;

		return this.posts.slice(begin, end).map(this.context).map(__WEBPACK_IMPORTED_MODULE_1_front_matter___default.a).map(function (post, key) {
			var postId = _this.postId([key + begin]);
			var body = trim ? post.body.slice(0, trim) + '... [View more](/blog' + postId + ')' : post.body;
			return Object.assign(post, { url: '/blog' + postId, body: body, key: key });
		});
	}
};

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4__components_hero_index_jsx__["a" /* default */], {
	mini: true
});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_3__components_card_index_jsx__["a" /* default */], {
	name: 'Elvanto',
	background: '#323232',
	image: './elvanto.png',
	imagePadding: '10px',
	link: '/elvanto'
}, void 0, 'Have you got started with Elvanto yet?');

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_3__components_card_index_jsx__["a" /* default */], {
	name: 'Registration',
	background: 'white',
	image: './soul.jpeg',
	imagePadding: '10px',
	link: '/registration'
}, void 0, 'Have a church event soon? Check out the V100IT registration module');

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_3__components_card_index_jsx__["a" /* default */], {
	name: 'Podcasting',
	background: '#171717',
	image: './podcasting.png',
	imagePadding: '75px',
	link: '/podcasting'
}, void 0, 'Get on board with podcasting your sermons');

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_3__components_card_index_jsx__["a" /* default */], {
	name: 'Designers',
	background: 'white',
	image: './close-image.jpeg'
}, void 0, 'Thinking of a refresh? Read our recommendations - ', _jsx('em', {}, void 0, 'coming soon...'));

var Client = function Client(props) {
	var page = Number(props.match.params.page) || 0;
	var previousPage = page + 1;
	var nextPage = page - 1;

	var size = 5;

	var posts = blog.page({
		trim: 500,
		page: page,
		size: size
	});

	var previous = void 0;
	var next = void 0;

	if (posts.length === size) {
		previous = '/client/' + previousPage;
	}

	if (nextPage === 0) {
		next = '/client';
	}

	if (nextPage > 0) {
		next = '/client/' + nextPage;
	}

	var pinnedPost = posts.shift();

	return _jsx(__WEBPACK_IMPORTED_MODULE_5__components_index_index_jsx__["a" /* default */], {
		headerSize: 'mini'
	}, void 0, _ref2, _jsx('main', {
		role: 'main'
	}, void 0, _jsx('div', {
		className: 'alerts hidden'
	}, void 0, __WEBPACK_IMPORTED_MODULE_9__content__["a" /* default */].banners.map(function (banner, key) {
		return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_alert_index_jsx__["a" /* default */], {
			type: banner.type
		}, key, _jsx('p', {}, void 0, banner.text));
	})), _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_10__client_scss___default.a.cards
	}, void 0, _ref3, _ref4, _ref5, _ref6), _jsx('div', {
		className: 'client-wrapper'
	}, void 0, pinnedPost && _jsx('section', {
		className: 'pinned-post'
	}, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_7__components_post_index_jsx__["a" /* default */],
		_extends({ url: pinnedPost.url }, pinnedPost.attributes),
		_jsx(__WEBPACK_IMPORTED_MODULE_6__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, pinnedPost.body)
	)), _jsx('section', {
		className: 'posts'
	}, void 0, posts.map(function (post, key) {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_7__components_post_index_jsx__["a" /* default */],
			_extends({ key: key, url: post.url }, post.attributes),
			_jsx(__WEBPACK_IMPORTED_MODULE_6__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, post.body)
		);
	})), _jsx(__WEBPACK_IMPORTED_MODULE_8__components_pagination_index_jsx__["a" /* default */], {
		previous: previous,
		next: next
	}))));
};

/* harmony default export */ __webpack_exports__["default"] = Client;

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert_scss__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Alert_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var Alert = function Alert(props) {
	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_1__Alert_scss___default.a[props.type]
	}, void 0, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = Alert;

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Card_scss__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Card_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Card_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var imageContext = __webpack_require__(656);

var Card = function Card(_ref) {
	var background = _ref.background,
	    imagePadding = _ref.imagePadding,
	    link = _ref.link,
	    image = _ref.image,
	    name = _ref.name,
	    children = _ref.children;

	var style = {
		backgroundColor: background
	};
	var imageStyle = {
		padding: imagePadding
	};

	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_2__Card_scss___default.a.card,
		style: style
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
		to: link || ''
	}, void 0, _jsx('h2', {
		hidden: true
	}, void 0, name), _jsx('img', {
		src: imageContext(image),
		style: imageStyle
	}), _jsx('p', {}, void 0, children)));
};

Card.defaultProps = {
	link: ''
};

/* harmony default export */ __webpack_exports__["a"] = Card;

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_left__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_left___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_left__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_right__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_right___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_right__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pagination_scss__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pagination_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Pagination_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_left___default.a, {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_right___default.a, {});

var Pagination = function Pagination(_ref) {
	var previous = _ref.previous,
	    next = _ref.next;
	return _jsx('nav', {
		role: 'pagination',
		className: __WEBPACK_IMPORTED_MODULE_4__Pagination_scss___default.a.pagination
	}, void 0, next && _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
		to: next
	}, void 0, _ref2, ' Next'), previous && _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
		to: previous
	}, void 0, 'Previous ', _ref3));
};

/* harmony default export */ __webpack_exports__["a"] = Pagination;

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Post_scss__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Post_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Post_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var imageContext = __webpack_require__(656);

var Post = function Post(props) {
	return _jsx('section', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.post
	}, void 0, _jsx('header', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.header
	}, void 0, _jsx('h2', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.title
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
		to: props.url
	}, void 0, props.title)), _jsx('p', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.meta
	}, void 0, _jsx('span', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.author
	}, void 0, 'By\xA0', props.author.name), _jsx('span', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.date
	}, void 0, __WEBPACK_IMPORTED_MODULE_2_moment___default()(props.date).format('Do MMMM, YYYY')))), _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.body
	}, void 0, _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_3__Post_scss___default.a.content
	}, void 0, props.image && _jsx('img', {
		src: imageContext(props.image.href),
		className: props.image.size,
		alt: props.image.alt
	}), props.children)));
};

/* harmony default export */ __webpack_exports__["a"] = Post;

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(169);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaAngleLeft = function FaAngleLeft(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z' })
        )
    );
};

exports.default = FaAngleLeft;

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(169);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaAngleRight = function FaAngleRight(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z' })
        )
    );
};

exports.default = FaAngleRight;

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"warning":"Alert__warning___1bjrH","announcement":"Alert__announcement___2rbBL"};

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"Card__card___1WSln"};

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"Pagination__pagination___2HSx8"};

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"post":"Post__post___OQe3l","meta":"Post__meta___-ArPX","author":"Post__author___8optR","date":"Post__date___3Kaol","category":"Post__category___1Mt1Y","content":"Post__content___1scm5","wide":"Post__wide___3Jqar","regular":"Post__regular___38Mec"};

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cards":"client__cards___JknuX"};

/***/ })

});