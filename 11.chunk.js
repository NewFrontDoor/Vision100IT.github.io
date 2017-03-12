webpackJsonp([11],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_search_index_jsx__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_index_index_jsx__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_results_index_jsx__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_result_list_index_jsx__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_scss__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__error_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = _jsx('h1', {}, void 0, '404 page not found');

var _ref2 = _jsx('section', {}, void 0, _jsx('p', {}, void 0, 'You\u2019ve managed to find yourself on a page that doesn\u2019t exist! Feel free to use the search box below, or hit the back button.'));

var Error = function (_React$Component) {
	_inherits(Error, _React$Component);

	function Error(props) {
		_classCallCheck(this, Error);

		var _this = _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, props));

		_this.state = {
			searchResults: [],
			searchTerm: ''
		};
		_this.handleSearchSubmit = _this.handleSearchSubmit.bind(_this);
		_this.handleCloseResult = _this.handleCloseResult.bind(_this);
		return _this;
	}

	_createClass(Error, [{
		key: 'handleSearchSubmit',
		value: function handleSearchSubmit(searchTerm) {
			var _this2 = this;

			this.props.searchIndex(searchTerm).then(function (searchResults) {
				return _this2.setState({ searchTerm: searchTerm, searchResults: searchResults });
			});
		}
	}, {
		key: 'handleCloseResult',
		value: function handleCloseResult(event) {
			event.preventDefault();
			this.setState({ searchResults: [] });
		}
	}, {
		key: 'render',
		value: function render() {
			var searchResultList = void 0;
			var searchResults = this.state.searchResults;


			if (searchResults.length > 0) {
				searchResultList = _jsx(__WEBPACK_IMPORTED_MODULE_4__components_search_result_list_index_jsx__["a" /* default */], {
					onResultClick: this.handleCloseModal,
					searchResults: searchResults
				});
			}

			return _jsx(__WEBPACK_IMPORTED_MODULE_5__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: 'podcasting-wrapper'
			}, void 0, _jsx('div', {
				className: 'podcasting-overlay'
			}, void 0, _jsx('div', {
				className: 'site-wrapper site-wrapper-padding'
			}, void 0, _ref, _ref2, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_6__error_scss___default.a.searchWrapper
			}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_search_index_jsx__["a" /* default */], {
				size: 'large',
				buttonClass: 'btn-primary',
				placeholder: 'Search V100IT...',
				onSearchSubmit: this.handleSearchSubmit
			}), _jsx(__WEBPACK_IMPORTED_MODULE_3__components_search_results_index_jsx__["a" /* default */], {
				titleClass: __WEBPACK_IMPORTED_MODULE_6__error_scss___default.a.title,
				containerClass: __WEBPACK_IMPORTED_MODULE_6__error_scss___default.a.searchResults,
				onCloseResults: this.handleCloseResult,
				searchResults: this.state.searchResults
			}, void 0, searchResultList))))));
		}
	}]);

	return Error;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_search_index_index_jsx__["a" /* default */])(Error);

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchWrapper":"error__searchWrapper___28CUi","title":"error__title___P0Ku9","searchResults":"error__searchResults___1YVbE"};

/***/ })

});