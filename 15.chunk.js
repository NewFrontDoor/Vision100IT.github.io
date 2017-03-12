webpackJsonp([15],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_front_matter__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_markdown_index_jsx__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Blog_scss__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Blog_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Blog_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var blogs = {
	get context() {
		return __webpack_require__(842);
	},
	get blogs() {
		return this.context.keys();
	},
	document: function document(id) {
		var blog = this.context(this.blogs.find(function (x) {
			return x === './' + id + '.md';
		}));

		var _fm = __WEBPACK_IMPORTED_MODULE_2_front_matter___default()(blog),
		    body = _fm.body,
		    attributes = _fm.attributes;

		return _extends({ body: body }, attributes);
	}
};

var imageContext = __webpack_require__(656);

var Blog = function (_React$Component) {
	_inherits(Blog, _React$Component);

	function Blog() {
		_classCallCheck(this, Blog);

		var _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this));

		_this.handleGoBack = _this.handleGoBack.bind(_this);
		_this.shouldComponentUpdate = __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default.a.shouldComponentUpdate.bind(_this);
		return _this;
	}

	_createClass(Blog, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {}
	}, {
		key: 'handleGoBack',
		value: function handleGoBack() {
			this.props.history.goBack();
		}
	}, {
		key: 'render',
		value: function render() {
			return _jsx(__WEBPACK_IMPORTED_MODULE_4__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_6__Blog_scss___default.a.wrapper
			}, void 0, _jsx('h1', {}, void 0, this.blog.title), _jsx('h1', {}, void 0, _jsx('small', {}, void 0, this.blog.sub_title)), _jsx('h3', {}, void 0, this.blog.author.name, ' - ', _jsx('span', {
				className: __WEBPACK_IMPORTED_MODULE_6__Blog_scss___default.a.date
			}, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.blog.date).format('Do MMMM, YYYY'))), this.blog.image && _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_6__Blog_scss___default.a.imgContainer
			}, void 0, _jsx('img', {
				className: __WEBPACK_IMPORTED_MODULE_6__Blog_scss___default.a.image,
				src: imageContext(this.blog.image.href),
				alt: this.blog.image.alt
			})), _jsx(__WEBPACK_IMPORTED_MODULE_5__components_markdown_index_jsx__["a" /* Markdown */], {}, void 0, this.blog.body), _jsx('a', {
				href: '#',
				onClick: this.handleGoBack
			}, void 0, ' < Back')));
		}
	}, {
		key: 'blog',
		get: function get() {
			return blogs.document(this.props.match.params.blogId) || {};
		}
	}]);

	return Blog;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = Blog;

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"Blog__wrapper___OUvDp","image":"Blog__image___3Jqqy"};

/***/ })

});