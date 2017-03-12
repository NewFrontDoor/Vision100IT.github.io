webpackJsonp([1],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_hero_index_jsx__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_featured_feature_how_jsx__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_featured_feature_who_jsx__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_featured_feature_tools_jsx__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_featured_feature_events_jsx__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_featured_feature_pricing_jsx__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_featured_feature_join_jsx__ = __webpack_require__(848);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();















var remarkConfig = {
	remarkReactComponents: {
		h1: 'h1'
	}
};

var _ref = _jsx('main', {
	role: 'main'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__components_featured_feature_how_jsx__["a" /* default */], {}), _jsx(__WEBPACK_IMPORTED_MODULE_6__components_featured_feature_who_jsx__["a" /* default */], {}), _jsx(__WEBPACK_IMPORTED_MODULE_7__components_featured_feature_tools_jsx__["a" /* default */], {}), _jsx(__WEBPACK_IMPORTED_MODULE_8__components_featured_feature_events_jsx__["a" /* default */], {}), _jsx(__WEBPACK_IMPORTED_MODULE_9__components_featured_feature_pricing_jsx__["a" /* default */], {}), _jsx(__WEBPACK_IMPORTED_MODULE_10__components_featured_feature_join_jsx__["a" /* default */], {}));

var Home = function Home() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {
		headerSize: 'full',
		menuItems: __WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */].mainmenu.links
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__components_markdown_index_jsx__["a" /* Markdown */], {
		component: __WEBPACK_IMPORTED_MODULE_1__components_hero_index_jsx__["a" /* default */],
		remarkConfig: remarkConfig
	}, void 0, __WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */].hero.tagline), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = Home;

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Featured_scss__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Featured_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Featured_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var Featured = function Featured(_ref) {
	var children = _ref.children,
	    name = _ref.name,
	    background = _ref.background;
	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_2__Featured_scss___default.a[background]
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_scroll__["Element"], {
		name: name
	}, void 0, _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_2__Featured_scss___default.a.wrapper
	}, void 0, _jsx('section', {}, void 0, children))));
};

/* harmony default export */ __webpack_exports__["a"] = Featured;

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_events_scss__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_events_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__feature_events_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_jsx__ = __webpack_require__(662);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _ref = _jsx('header', {
	className: 'hidden'
}, void 0, _jsx('h2', {}, void 0, 'Keeping you up to speed'));

var _ref2 = _jsx('div', {}, void 0, _jsx('div', {
	className: 'text-slab'
}, void 0, 'Keeping you up to speed'), _jsx('p', {
	className: 'lead'
}, void 0, 'The internet changes. Your church changes. Your staff capacity and even staff size changes. That\u2019s why ', _jsx('em', {}, void 0, 'events and training'), ' are at the ', _jsx('em', {}, void 0, 'heart of the Vision 100 IT philosophy.')));

var _ref3 = _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'Whether you\u2019re already a client, interested in becoming one, or just want some fresh input, these events are for you. They are professional-quality training sessions, with presenters who not only have IT expertise, but have also thought long and hard about how to apply this to the unique context of Christian ministry. Topics range from social media usage to engaging a graphic designer and everything in between.'));

var _ref4 = _jsx('h3', {}, void 0, 'Our next training sessions');

var _ref5 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'May 10th, 2017. Nailing Events in Your Church'));

var _ref6 = _jsx('div', {}, void 0, _jsx('h4', {}, void 0, 'More info'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'When: 7:30-9:30pm'), _jsx('li', {}, void 0, 'Where: The Loft, Wellspring, Sandy Bay (Tasmania)'), _jsx('li', {}, void 0, 'Cost: $45 to cover event, admin and support Vision 100 IT (dinner & snacks included). We recommend churches subsidise their delegates.'), _jsx('li', {}, void 0, 'Register: Regos will open in January')));

var _ref7 = _jsx('div', {
	className: 'expand'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
	to: '/documentation#maintenance'
}, void 0, 'Check out some of our previous training content', _jsx('br', {}), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down___default.a, {
	height: '1.5em',
	width: '1.5em'
})));

var FeaturedEvents = function FeaturedEvents() {
	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_3__feature_events_scss___default.a.background
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__index_jsx__["a" /* default */], {
		name: 'events',
		background: 'transparent'
	}, void 0, _ref, _jsx('section', {}, void 0, _ref2, _ref3, _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_3__feature_events_scss___default.a.training
	}, void 0, _ref4, _ref5, _ref6), _ref7)));
};

/* harmony default export */ __webpack_exports__["a"] = FeaturedEvents;

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa_plus_circle__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa_plus_circle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa_plus_circle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_index_jsx__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_how_scss__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__feature_how_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_jsx__ = __webpack_require__(662);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = _jsx('h2', {
	className: 'text-slab'
}, void 0, 'Sometimes all you need is a bit of direction.');

var _ref2 = _jsx('em', {}, void 0, 'particularly church IT volunteers and ministry staff');

var _ref3 = _jsx('h3', {}, void 0, 'Overwhelmed pastor.');

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa_plus_circle___default.a, {
	height: '2em',
	width: '2em'
});

var _ref5 = _jsx('h3', {}, void 0, '\u201CVoluntold\u201D victim.');

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa_plus_circle___default.a, {
	height: '2em',
	width: '2em'
});

var _ref7 = _jsx('h3', {}, void 0, 'Capable. Over it.');

var _ref8 = _jsx(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa_plus_circle___default.a, {
	height: '2em',
	width: '2em'
});

var _ref9 = _jsx('br', {});

var _ref10 = _jsx('p', {}, void 0, 'Vision 100 IT offers a suite of tools, services and training to allow you to utilise IT as an effective tool for ministry. We work collaboratively with your staff or designated church member to develop a tailored website and package of tools to keep your newcomers informed and your ministry teams connected. We provide assistance and training in best practices for tools you already use, and are open to exploring ways to combine your current approach and applications into our ecosystem.');

var FeaturedHow = function (_React$Component) {
	_inherits(FeaturedHow, _React$Component);

	function FeaturedHow() {
		_classCallCheck(this, FeaturedHow);

		var _this = _possibleConstructorReturn(this, (FeaturedHow.__proto__ || Object.getPrototypeOf(FeaturedHow)).call(this));

		_this.state = {
			isOpen: ''
		};
		_this.handleCollapse = _this.handleCollapse.bind(_this);
		return _this;
	}

	_createClass(FeaturedHow, [{
		key: 'handleCollapse',
		value: function handleCollapse(prop) {
			var _this2 = this;

			return function (event) {
				event.preventDefault();
				_this2.setState({
					isOpen: _this2.state.isOpen === prop ? '' : prop
				});
			};
		}
	}, {
		key: 'render',
		value: function render() {
			return _jsx(__WEBPACK_IMPORTED_MODULE_4__index_jsx__["a" /* default */], {
				name: 'how',
				background: 'white'
			}, void 0, _ref, _jsx('p', {
				className: 'lead'
			}, void 0, 'We want you to put your best foot forward, so we\u2019re here to give you the tools, techniques and direction you need. Vision 100 IT exists to help churches - ', _ref2, ' - to use IT better. ', _jsx('span', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.hiddenXs
			}, void 0, 'Maybe you can relate to one of these people:')), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.examples + ' ' + __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.hiddenXs
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.example
			}, void 0, _jsx('a', {
				href: '#',
				onClick: this.handleCollapse('overwhelmed')
			}, void 0, _ref3, _ref4)), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.example
			}, void 0, _jsx('a', {
				href: '#',
				onClick: this.handleCollapse('voluntold')
			}, void 0, _ref5, _ref6)), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.example
			}, void 0, _jsx('a', {
				href: '#',
				onClick: this.handleCollapse('capable')
			}, void 0, _ref7, _ref8)), _jsx(__WEBPACK_IMPORTED_MODULE_2__collapse_index_jsx__["a" /* default */], {
				isOpened: this.state.isOpen === 'overwhelmed'
			}, void 0, _jsx('p', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.explanation
			}, void 0, 'You\u2019re a church leader in the 21st Century, and you\u2019ve put together a fancy_church.blogspot.com page, but now you\u2019re wondering if no website is better than what you\u2019ve got. The effort to get something professional up and running just seems too much amidst the weekly sermons and pastoral care. Who actually has time to sort through these IT things?')), _jsx(__WEBPACK_IMPORTED_MODULE_2__collapse_index_jsx__["a" /* default */], {
				isOpened: this.state.isOpen === 'voluntold'
			}, void 0, _jsx('p', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.explanation
			}, void 0, 'Being \u201Casked\u201D to put together a webpage for church because you\u2019re the youngest and most \u201Csavvy\u201D member can be frustrating, and now you\u2019ve landed the job of dragging your church into the brave new world of Facebook, Instagram, Content Management and Responsive Design. Your pastor sent you a link to awesome~church.com and wants a site just like it. Just wish you had a bit of support and some better tools?')), _jsx(__WEBPACK_IMPORTED_MODULE_2__collapse_index_jsx__["a" /* default */], {
				isOpened: this.state.isOpen === 'capable'
			}, void 0, _jsx('p', {
				className: __WEBPACK_IMPORTED_MODULE_3__feature_how_scss___default.a.explanation
			}, void 0, 'You understand websites and servers and have managed to get something off the ground for church, but it\u2019s starting to cost you a bit too much and you\u2019re struggling to persuade the eldership that it\u2019s worth investing in a more rigorous approach to church IT. Wouldn\u2019t it be great if all you had to worry about was keeping things up to date, rather than keeping it online as well?')), _ref9), _ref10);
		}
	}]);

	return FeaturedHow;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = FeaturedHow;

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_reformed__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_reformed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_reformed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_facebook__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_fa_twitter__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_fa_twitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_fa_twitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_index_jsx__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_index_jsx__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feature_join_scss__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__feature_join_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var imageContext = __webpack_require__(656);

var fields = {
	name: {
		component: __WEBPACK_IMPORTED_MODULE_8__form_index_jsx__["a" /* InputText */],
		label: 'Name:',
		placeholder: 'First and last name',
		required: true,
		width: 'half'
	},
	email: {
		component: __WEBPACK_IMPORTED_MODULE_8__form_index_jsx__["e" /* InputEmail */],
		label: 'Email:',
		placeholder: 'Your email',
		required: true,
		width: 'half'
	},
	organisation: {
		component: __WEBPACK_IMPORTED_MODULE_8__form_index_jsx__["a" /* InputText */],
		label: 'Organisation:',
		placeholder: 'Your church or parachurch organisation',
		required: true
	},
	message: {
		component: __WEBPACK_IMPORTED_MODULE_8__form_index_jsx__["b" /* InputTextArea */],
		label: 'Message:',
		placeholder: 'Message',
		required: true
	}
};

var _ref2 = _jsx('button', {
	type: 'submit',
	className: 'btn btn-default form-control'
}, void 0, 'Submit');

var JoinForm = function JoinForm(_ref) {
	var bindInput = _ref.bindInput,
	    model = _ref.model,
	    onSubmit = _ref.onSubmit,
	    schema = _ref.schema;

	var handleSubmit = function handleSubmit(event) {
		event.preventDefault();
		onSubmit(model);
	};

	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.form
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__form_index_jsx__["f" /* Form */], {
		onSubmit: handleSubmit,
		schema: schema,
		fields: fields,
		bindInput: bindInput
	}, void 0, _jsx('div', {
		className: 'form-group ' + __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.submit
	}, void 0, _ref2)));
};

var JoinFormContainer = __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose___default()(__WEBPACK_IMPORTED_MODULE_2_react_reformed___default()(), __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema___default()(fields), __WEBPACK_IMPORTED_MODULE_8__form_index_jsx__["g" /* util */].submitted)(JoinForm);

var _ref3 = _jsx('header', {
	className: 'hidden'
}, void 0, _jsx('h2', {}, void 0, 'Sign up'));

var _ref4 = _jsx('div', {
	className: 'text-slab'
}, void 0, 'Begin the journey');

var _ref5 = _jsx('div', {}, void 0, _jsx('a', {
	href: 'http://facebook.com/vision100it'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_facebook___default.a, {
	height: '2em',
	width: '2em'
})));

var _ref6 = _jsx('div', {}, void 0, _jsx('a', {
	href: 'http://twitter.com/vision100it'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6_react_icons_fa_twitter___default.a, {
	height: '2em',
	width: '2em'
})));

var _ref7 = _jsx('h2', {}, void 0, 'Thanks for contacting us!');

var _ref8 = _jsx('p', {}, void 0, 'We\u2019ll be in touch soon to let you know the next steps.');

var FeaturedJoin = function (_React$Component) {
	_inherits(FeaturedJoin, _React$Component);

	function FeaturedJoin() {
		_classCallCheck(this, FeaturedJoin);

		var _this = _possibleConstructorReturn(this, (FeaturedJoin.__proto__ || Object.getPrototypeOf(FeaturedJoin)).call(this));

		_this.state = {
			isModalOpen: false
		};
		_this.setFormRef = _this.setFormRef.bind(_this);
		_this.handleOpen = _this.handleOpen.bind(_this);
		_this.handleClose = _this.handleClose.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(FeaturedJoin, [{
		key: 'setFormRef',
		value: function setFormRef(ref) {
			this.formRef = ref;
		}
	}, {
		key: 'handleOpen',
		value: function handleOpen() {
			this.setState({ isModalOpen: true });
		}
	}, {
		key: 'handleClose',
		value: function handleClose() {
			this.setState({ isModalOpen: false });
			this.formRef.resetModel();
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(model) {
			return fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/contact-us', {
				method: 'post',
				mode: 'cors',
				body: JSON.stringify({
					name: model.name,
					email: model.email,
					organisation: model.organisation,
					message: model.message
				}),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).catch(this.handleOpen).then(this.handleOpen);
		}
	}, {
		key: 'render',
		value: function render() {
			var isModalOpen = this.state.isModalOpen;


			return _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.feature
			}, void 0, _jsx('section', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.video
			}, void 0, _jsx('video', {
				autoPlay: true,
				loop: true,
				muted: true
			}, void 0, _jsx('source', {
				src: imageContext('./clip2.mp4'),
				type: 'video/mp4'
			}))), _jsx('section', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.content
			}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_scroll__["Element"], {
				name: 'join'
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.background
			}), _ref3, _ref4, _jsx('p', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.message
			}, void 0, 'Interested in coming on board? Get in touch below or via our Social Media channels.'), _jsx(JoinFormContainer, {
				onSubmit: this.handleSubmit,
				getFormRef: this.setFormRef
			}), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.social
			}, void 0, _ref5, _ref6))), isModalOpen && _jsx(__WEBPACK_IMPORTED_MODULE_7__popover_index_jsx__["a" /* default */], {
				onClose: this.handleClose
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.modal
			}, void 0, _ref7, _ref8, _jsx('p', {}, void 0, _jsx('button', {
				className: __WEBPACK_IMPORTED_MODULE_9__feature_join_scss___default.a.button,
				onClick: this.handleClose
			}, void 0, 'Awesome')))));
		}
	}, {
		key: 'formRef',
		set: function set(ref) {
			this._formRef = ref;
		},
		get: function get() {
			return this._formRef;
		}
	}]);

	return FeaturedJoin;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = FeaturedJoin;

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_jsx__ = __webpack_require__(662);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__index_jsx__["a" /* default */], {
	name: 'pricing',
	background: 'white'
}, void 0, _jsx('div', {
	className: 'featured-fifth featured-light'
}, void 0, _jsx('header', {
	className: 'hidden'
}, void 0, _jsx('h2', {}, void 0, 'Pricing')), _jsx('div', {
	className: 'text-slab'
}, void 0, 'No ticket cost - the best journeys in life are free'), _jsx('p', {
	className: 'lead'
}, void 0, _jsx('em', {}, void 0, 'All our core features are free')), _jsx('p', {}, void 0, 'For our core features and services, we won\u2019t invoice you at all. Not in a ', _jsx('q', {}, void 0, 'free tier'), ' business model where we send you five emails a day about how awesome ', _jsx('q', {}, void 0, 'premium'), ' is sort of way, but in a ', _jsx('q', {}, void 0, 'We\u2019re really eager for you to get the most out of your IT for the good of the Gospel'), ' sort of way. How does that sound? This is our rationale:'), _jsx('blockquote', {
	className: 'lead'
}, void 0, 'We want to focus on providing you ', _jsx('em', {}, void 0, 'services and methodology'), ' that will keep you ', _jsx('em', {}, void 0, 'engaged with your IT'), ', rather than a product that is merely set and forget. If giving our services to you for free achieves that goal, we\u2019ll do it.'), _jsx('p', {
	className: 'lead'
}, void 0, _jsx('em', {}, void 0, 'A few extras might have ', _jsx('strong', {}, void 0, 'some'), ' costs')), _jsx('p', {}, void 0, 'We do have some services that will carry a cost, but we think that if you\u2019ve got the right people on the ground, and make good use of our documentation, you\u2019ll be fine. Some of our products carry a cost as well. Our registration payment system is a \u2018premium\u2019 product for which we charge a small extra fee'), _jsx('p', {
	className: 'lead'
}, void 0, _jsx('em', {}, void 0, 'Consultation services')), _jsx('p', {}, void 0, 'In addition to our normal customer services, we can provide full blown consultation services to help you smoothly transition your church into electronic administration. For more details about our consultation services, ', _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
	to: '/consultation'
}, void 0, 'click here.')), _jsx('div', {
	className: 'expand'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
	to: '/documentation/costs'
}, void 0, 'More about costs', _jsx('br', {}), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_angle_down___default.a, {
	height: '1.5em',
	width: '1.5em'
})))));

var FeaturedPricing = function FeaturedPricing() {
	return _ref;
};

/* harmony default export */ __webpack_exports__["a"] = FeaturedPricing;

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_down__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collapse_index_jsx__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__feature_tools_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_jsx__ = __webpack_require__(662);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var imageContext = __webpack_require__(656);

var _ref = _jsx('header', {
	className: 'hidden'
}, void 0, _jsx('h2', {}, void 0, 'Tools + Philosophy'));

var _ref2 = _jsx('div', {
	className: 'text-slab'
}, void 0, 'It\u2019s not about the destination, it\u2019s about the journey');

var _ref3 = _jsx('p', {
	className: 'lead'
}, void 0, 'The core product of Vision 100 IT isn\u2019t ', _jsx('em', {}, void 0, 'just your website'), ' - it\u2019s our ', _jsx('em', {}, void 0, 'philosophy.'));

var _ref4 = _jsx('p', {}, void 0, 'There are plenty of products and approaches that will get your church on the web - our main aim is to help you to do this as best as possible. As a result, we\u2019ve collated a suite of supported tools that will best help us to help you do IT well.');

var _ref5 = _jsx('p', {}, void 0, 'We\u2019re eager to ensure that you\u2019re equipped to make the most of these tools as the web evolves over time. We won\u2019t just build you a website, mailing lists and collaborative storage solutions, but we\u2019ll');

var _ref6 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'coach you through ', _jsx('em', {}, void 0, 'keeping them up to date')), _jsx('li', {}, void 0, 'provide ', _jsx('em', {}, void 0, 'ongoing support'), ' as your team members change, and'), _jsx('li', {}, void 0, _jsx('em', {}, void 0, 'walk you through new features'), ' and updates as they occur.'));

var _ref7 = _jsx('p', {}, void 0, 'Although we think this ecosystem is fantastic, selecting our tools over years of experience, your needs may vary. If you already have some solutions sorted, no problem! We\u2019ll work with you as best as we can to ', _jsx('em', {}, void 0, 'ensure you\u2019re being as effective as possible.'));

var _ref8 = _jsx('br', {});

var _ref9 = _jsx(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_angle_down___default.a, {
	height: '1.5em',
	width: '1.5em'
});

var _ref10 = _jsx('header', {}, void 0, _jsx('h3', {}, void 0, 'Websites'));

var _ref11 = _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Our websites are responsive - supporting phones and tablets'), _jsx('li', {}, void 0, 'They are built on Drupal CMS - a modern, powerful and secure platform, easily updated, supports user permissions'), _jsx('li', {}, void 0, 'We\u2019ll manage your domain name - you\u2019ll never need to worry about renewing or remembering your password every 3 years'), _jsx('li', {}, void 0, 'Modular features - features developed for one client become available for all clients'), _jsx('li', {}, void 0, 'Running on one of the world\u2019s largest server platforms - uptime and server stability is nothing to worry about')));

var _ref12 = _jsx('header', {}, void 0, _jsx('h3', {}, void 0, 'Administration and relationship management'));

var _ref13 = _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Implementation and consultation to get you started with Elvanto - an Australian-built Church Management platform'), _jsx('li', {}, void 0, 'Flexible mailing lists - so those outside your Church Management software can email you'), _jsx('li', {}, void 0, 'Podcasting your sermons'), _jsx('li', {}, void 0, 'Newsletter distribution')));

var _ref14 = _jsx('header', {}, void 0, _jsx('h3', {}, void 0, 'Document management'));

var _ref15 = _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Privately hosted document management platform'), _jsx('li', {}, void 0, 'Securely stored, not in the control of Dropbox or Google'), _jsx('li', {}, void 0, 'Conflicts easily managed so nothing gets lost'), _jsx('li', {}, void 0, 'Folder and file level user permissions'), _jsx('li', {}, void 0, 'Integrated into your website')));

var _ref16 = _jsx('header', {}, void 0, _jsx('h3', {}, void 0, 'Consulation + advice'));

var _ref17 = _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Initial consultation meetings when coming on board'), _jsx('li', {}, void 0, 'Recommendations of graphic designers, photographers and video producers'), _jsx('li', {}, void 0, 'Access to our documentation: user guides and best practices'), _jsx('li', {}, void 0, 'Podcasts and training sessions'), _jsx('li', {}, void 0, 'Optional in-depth consultation services')));

var FeaturedTools = function (_React$Component) {
	_inherits(FeaturedTools, _React$Component);

	function FeaturedTools() {
		_classCallCheck(this, FeaturedTools);

		var _this = _possibleConstructorReturn(this, (FeaturedTools.__proto__ || Object.getPrototypeOf(FeaturedTools)).call(this));

		_this.state = {
			isOpen: false
		};
		_this.handleCollapse = _this.handleCollapse.bind(_this);
		_this.shouldComponentUpdate = __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default.a.shouldComponentUpdate.bind(_this);
		return _this;
	}

	_createClass(FeaturedTools, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {}
	}, {
		key: 'handleCollapse',
		value: function handleCollapse(event) {
			event.preventDefault();

			if (!this.state.isOpen) {
				__WEBPACK_IMPORTED_MODULE_2_react_scroll__["scroller"].scrollTo('tools-expand', {
					spy: true,
					smooth: true,
					offset: -164,
					duration: 500
				});
			}

			this.setState({
				isOpen: !this.state.isOpen
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _jsx(__WEBPACK_IMPORTED_MODULE_6__index_jsx__["a" /* default */], {
				name: 'tools',
				background: 'white'
			}, void 0, _ref, _jsx('section', {
				className: 'description'
			}, void 0, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_scroll__["Element"], {
				name: 'tools-expand'
			}, void 0, _jsx('div', {
				className: 'expand'
			}, void 0, _jsx('a', {
				href: '#',
				onClick: this.handleCollapse
			}, void 0, 'Supported tools and products', _ref8, _ref9)))), _jsx(__WEBPACK_IMPORTED_MODULE_4__collapse_index_jsx__["a" /* default */], {
				isOpened: this.state.isOpen
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.product
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.image
			}, void 0, _jsx('img', {
				className: 'img-responsive center-block',
				src: imageContext('./soul.jpeg')
			})), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.detail
			}, void 0, _ref10, _ref11)), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.product
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.image
			}, void 0, _jsx('img', {
				className: 'img-responsive center-block',
				src: imageContext('./elvanto-i.png')
			})), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.detail
			}, void 0, _ref12, _ref13)), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.product
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.image
			}, void 0, _jsx('img', {
				className: 'img-responsive center-block',
				src: imageContext('./sparkleshare.png')
			})), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.detail
			}, void 0, _ref14, _ref15)), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.product
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.image
			}, void 0, _jsx('img', {
				className: 'img-responsive center-block',
				src: imageContext('./consultation.jpg')
			})), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__feature_tools_scss___default.a.detail
			}, void 0, _ref16, _ref17))));
		}
	}]);

	return FeaturedTools;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = FeaturedTools;

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_bank__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa_bank___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_bank__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_group__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_server__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_graduation_cap__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_graduation_cap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_graduation_cap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_fa_angle_down__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_fa_angle_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_fa_angle_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feature_who_scss__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feature_who_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__feature_who_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_jsx__ = __webpack_require__(662);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();











var imageContext = __webpack_require__(656);

var _ref = _jsx('div', {
	className: 'text-slab'
}, void 0, 'The right people at the right time');

var _ref2 = _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa_bank___default.a, {
	height: '4em',
	width: '4em'
}), _jsx('span', {
	className: 'fa-university fa-5x'
}), _jsx('p', {}, void 0, '14+ years of V100IT history'));

var _ref3 = _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_graduation_cap___default.a, {
	height: '4em',
	width: '4em'
}), _jsx('p', {}, void 0, '30+ years of collective experience'));

var _ref4 = _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_group___default.a, {
	height: '4em',
	width: '4em'
}), _jsx('p', {}, void 0, '10+ clients on board'));

var _ref5 = _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_server___default.a, {
	height: '4em',
	width: '4em'
}), _jsx('p', {}, void 0, '20+ websites served'));

var _ref6 = _jsx('p', {}, void 0, 'Vision 100 IT are a national team of passionate IT and web development engineers, ministry leaders and management professionals who voluntarily build and maintain IT systems, training and educating our clients on the foundation of years of collective knowledge gleaned from within the IT industry.');

var _ref7 = _jsx('p', {}, void 0, 'Vision 100 IT has now existed for over a decade, and has gradually built up a knowledge base of best practices and approaches for doing church IT ', _jsx('em', {}, void 0, 'sustainably'), '. We are all about getting ', _jsx('em', {}, void 0, 'and keeping'), ' our clients on the web, in order to more effectively reach the lost and minister to the people in their congregations.');

var _ref8 = _jsx('p', {}, void 0, 'Currently our team has members in Hobart and in Sydney, ready to meet and discuss the needs of your ministry.');

var _ref9 = _jsx('div', {
	className: 'expand'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */], {
	to: '/about#team'
}, void 0, _jsx('p', {}, void 0, 'Meet the team'), _jsx(__WEBPACK_IMPORTED_MODULE_6_react_icons_fa_angle_down___default.a, {
	height: '1.5em',
	width: '1.5em'
})));

var FeaturedWho = function FeaturedWho() {
	return _jsx(__WEBPACK_IMPORTED_MODULE_8__index_jsx__["a" /* default */], {
		name: 'who',
		background: 'black'
	}, void 0, _ref, _jsx('div', {
		className: '' + __WEBPACK_IMPORTED_MODULE_7__feature_who_scss___default.a.snapshots
	}, void 0, _ref2, _ref3, _ref4, _ref5), _ref6, _ref7, _ref8, _ref9, _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_7__feature_who_scss___default.a.tiled
	}, void 0, _jsx('div', {}, void 0, _jsx('img', {
		src: imageContext('./christian-tile.jpg')
	})), _jsx('div', {}, void 0, _jsx('img', {
		src: imageContext('./jonno-tile.jpg')
	})), _jsx('div', {}, void 0, _jsx('img', {
		src: imageContext('./emile-tile.jpg')
	})), _jsx('div', {}, void 0, _jsx('img', {
		src: imageContext('./gibbo-tile.jpg')
	})), _jsx('div', {}, void 0, _jsx('img', {
		src: imageContext('./alan-tile.jpg')
	})), _jsx('div', {}, void 0, _jsx('img', {
		src: imageContext('./chris-tile.jpg')
	}))));
};

/* harmony default export */ __webpack_exports__["a"] = FeaturedWho;

/***/ }),

/***/ 870:
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

var FaBank = function FaBank(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm19.9 1.4l20 8v2.6h-2.7q0 0.6-0.4 1t-1 0.4h-31.7q-0.6 0-1-0.4t-0.4-1h-2.7v-2.6z m-14.6 13.3h5.3v15.9h2.7v-15.9h5.3v15.9h2.7v-15.9h5.3v15.9h2.6v-15.9h5.3v15.9h1.3q0.6 0 1 0.4t0.4 1v1.3h-34.5v-1.3q0-0.6 0.4-1t1-0.4h1.2v-15.9z m33.1 19.9q0.6 0 1 0.4t0.5 0.9v2.7h-39.9v-2.7q0-0.5 0.4-0.9t1-0.4h37z' })
        )
    );
};

exports.default = FaBank;

/***/ }),

/***/ 875:
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

var FaFacebook = function FaFacebook(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm29.4 0.3v5.9h-3.5q-1.9 0-2.6 0.8t-0.7 2.4v4.2h6.6l-0.9 6.6h-5.7v16.9h-6.8v-16.9h-5.7v-6.6h5.7v-4.9q0-4.1 2.3-6.4t6.2-2.3q3.3 0 5.1 0.3z' })
        )
    );
};

exports.default = FaFacebook;

/***/ }),

/***/ 876:
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

var FaGraduationCap = function FaGraduationCap(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.1 18.9l0.3 5.6q0 1.2-1.5 2.2t-4.1 1.7-5.6 0.6-5.7-0.6-4.1-1.7-1.4-2.2l0.3-5.6 10 3.2q0.4 0.1 0.9 0.1t0.8-0.1z m9.2-5.6q0 0.4-0.3 0.5l-19.7 6.2q0 0-0.1 0t-0.2 0l-11.4-3.6q-0.8 0.6-1.3 1.9t-0.6 3.2q1.1 0.6 1.1 1.9 0 1.2-1 1.8l1 7.6q0.1 0.3-0.1 0.5-0.2 0.1-0.4 0.1h-3.4q-0.2 0-0.4-0.1-0.2-0.2-0.1-0.5l1-7.6q-1-0.6-1-1.8 0-1.3 1.1-2 0.2-3.6 1.7-5.8l-5.8-1.8q-0.4-0.1-0.4-0.5t0.4-0.6l19.6-6.1q0.1 0 0.2 0t0.1 0l19.6 6.1q0.4 0.2 0.4 0.6z' })
        )
    );
};

exports.default = FaGraduationCap;

/***/ }),

/***/ 877:
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

var FaGroup = function FaGroup(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm12.3 20q-3.4 0.1-5.5 2.7h-2.8q-1.7 0-2.8-0.9t-1.2-2.4q0-7.4 2.6-7.4 0.1 0 0.9 0.5t2 0.8 2.5 0.5q1.4 0 2.7-0.5-0.1 0.8-0.1 1.4 0 2.9 1.7 5.3z m22.3 13.2q0 2.5-1.6 4t-4 1.4h-18.1q-2.6 0-4.1-1.4t-1.5-4q0-1.1 0.1-2.1t0.3-2.3 0.5-2.2 0.9-2.1 1.3-1.6 1.8-1.2 2.3-0.4q0.2 0 0.9 0.5t1.5 1 2.2 1 2.8 0.4 2.8-0.4 2.3-1 1.5-1 0.9-0.5q1.2 0 2.3 0.4t1.8 1.2 1.2 1.6 0.9 2.1 0.6 2.2 0.3 2.3 0.1 2.1z m-21.3-26.5q0 2.2-1.6 3.8t-3.7 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.7 1.6 1.6 3.7z m14.6 8q0 3.3-2.3 5.6t-5.7 2.4-5.6-2.4-2.3-5.6 2.3-5.7 5.6-2.3 5.7 2.3 2.3 5.7z m12 4.7q0 1.6-1.2 2.4t-2.9 0.9h-2.7q-2.2-2.6-5.5-2.7 1.6-2.4 1.6-5.3 0-0.6-0.1-1.4 1.4 0.5 2.8 0.5 1.2 0 2.5-0.5t2-0.8 0.9-0.5q2.6 0 2.6 7.4z m-2.7-12.7q0 2.2-1.5 3.8t-3.8 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.8 1.6 1.5 3.7z' })
        )
    );
};

exports.default = FaGroup;

/***/ }),

/***/ 880:
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

var FaPlusCircle = function FaPlusCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
        )
    );
};

exports.default = FaPlusCircle;

/***/ }),

/***/ 881:
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

var FaServer = function FaServer(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm2.9 31.4h22.8v-2.8h-22.8v2.8z m0-11.4h22.8v-2.9h-22.8v2.9z m35 10q0-0.9-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.7-1.5z m-35-21.4h22.8v-2.9h-22.8v2.9z m35 10q0-0.9-0.7-1.5t-1.5-0.7-1.5 0.7-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.7-1.5z m0-11.5q0-0.8-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.6 1.5 0.6 1.5-0.6 0.7-1.6z m2.1 18.6v8.6h-40v-8.6h40z m0-11.4v8.6h-40v-8.6h40z m0-11.4v8.5h-40v-8.5h40z' })
        )
    );
};

exports.default = FaServer;

/***/ }),

/***/ 882:
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

var FaTwitter = function FaTwitter(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z' })
        )
    );
};

exports.default = FaTwitter;

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"Featured__wrapper___1i2-0","white":"Featured__white___1OscA","black":"Featured__black___3UwNk","transparent":"Featured__transparent___3zk8j"};

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"background":"feature-events__background___3vK-R","training":"feature-events__training___1onyw"};

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"examples":"feature-how__examples___2SDVw","explanation":"feature-how__explanation___24i63","example":"feature-how__example___3-Gn9","collapse":"feature-how__collapse___3Chmg","hiddenXs":"feature-how__hiddenXs___cQWGf"};

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"feature":"feature-join__feature___2nGXn","video":"feature-join__video___V2W2W","social":"feature-join__social___oxvX_","content":"feature-join__content___UfHQ2","message":"feature-join__message___21J6j","form":"feature-join__form___2a_ZM","submit":"feature-join__submit___3m95i","modal":"feature-join__modal___3pp-E","button":"feature-join__button___23XL6"};

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"product":"feature-tools__product___ejDsJ","detail":"feature-tools__detail___28uqX","image":"feature-tools__image___1XYLY"};

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"collection":"feature-who__collection___4LRZn","tiled":"feature-who__tiled___Gbnot","snapshots":"feature-who__snapshots___1JJEv"};

/***/ })

});