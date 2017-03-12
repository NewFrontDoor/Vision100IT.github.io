webpackJsonp([13],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_reformed__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_reformed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_reformed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_index_jsx__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_collapse_index_jsx__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_scss__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__contact_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var fields = {
	name: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* InputText */],
		label: 'Name',
		placeholder: 'Insert your full name',
		required: true
	},
	email: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputEmail */],
		label: 'Email address',
		placeholder: 'Insert a valid email address',
		required: true
	}
};

var _ref2 = _jsx('div', {
	className: 'form-group'
}, void 0, _jsx('button', {
	type: 'submit',
	className: 'btn btn-primary'
}, void 0, 'Submit'));

var ContactForm = function ContactForm(_ref) {
	var bindInput = _ref.bindInput,
	    model = _ref.model,
	    onSubmit = _ref.onSubmit,
	    schema = _ref.schema;

	var handleSubmit = function handleSubmit(event) {
		event.preventDefault();
		onSubmit(model);
	};

	return _jsx(__WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["f" /* Form */], {
		onSubmit: handleSubmit,
		schema: schema,
		fields: fields,
		bindInput: bindInput
	}, void 0, _ref2);
};

var ContactFormContainer = __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose___default()(__WEBPACK_IMPORTED_MODULE_2_react_reformed___default()(), __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema___default()(fields), __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["g" /* util */].submitted)(ContactForm);

var _ref3 = _jsx('h1', {}, void 0, 'Contact Us');

var _ref4 = _jsx('div', {}, void 0, _jsx('h3', {}, void 0, 'Email contact'), _jsx('a', {
	href: 'mailto:it@vision100.org'
}, void 0, 'it@vision100.org'));

var _ref5 = _jsx('h3', {}, void 0, 'Join our mailing list');

var _ref6 = _jsx('h2', {}, void 0, 'Thanks for joining the mailing list.');

var _ref7 = _jsx('p', {}, void 0, 'Vision 100 sends out a bunch of stuff via email regularly including:');

var _ref8 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'New features,'), _jsx('li', {}, void 0, 'Hot tips on best practices,'), _jsx('li', {}, void 0, 'Other helpful content around the web,'), _jsx('li', {}, void 0, 'Official updates,'), _jsx('li', {}, void 0, 'Upcoming events'));

var _ref9 = _jsx('p', {}, void 0, 'These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have...');

var _ref10 = _jsx('div', {}, void 0, _jsx('h3', {}, void 0, 'Mailing address'), _jsx('p', {}, void 0, 'PO Box 5006'), _jsx('p', {}, void 0, 'UTAS LPO'), _jsx('p', {}, void 0, 'SANDY BAY TAS 7005'));

var Contact = function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact() {
		_classCallCheck(this, Contact);

		var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this));

		_this.state = {
			isOpen: false,
			isModalOpen: false
		};
		_this.setFormRef = _this.setFormRef.bind(_this);
		_this.handleOpen = _this.handleOpen.bind(_this);
		_this.handleClose = _this.handleClose.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleCollapse = _this.handleCollapse.bind(_this);
		_this.shouldComponentUpdate = __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default.a.shouldComponentUpdate.bind(_this);
		return _this;
	}

	_createClass(Contact, [{
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
			fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/mailing-list', {
				method: 'post',
				mode: 'cors',
				body: JSON.stringify({
					name: model.name,
					email: model.email
				}),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).catch(this.handleOpen).then(this.handleOpen);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {}
	}, {
		key: 'handleCollapse',
		value: function handleCollapse(event) {
			event.preventDefault();
			this.setState({ isOpen: !this.state.isOpen });
		}
	}, {
		key: 'render',
		value: function render() {
			var isModalOpen = this.state.isModalOpen;


			return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: 'contact-overlay'
			}, void 0, _jsx('div', {
				className: 'site-wrapper site-wrapper-padding'
			}, void 0, _ref3, _jsx('div', {}, void 0, _ref4, _ref5, _jsx(ContactFormContainer, {
				onSubmit: this.handleSubmit,
				getFormRef: this.setFormRef
			}), isModalOpen && _jsx(__WEBPACK_IMPORTED_MODULE_5__components_popover_index_jsx__["a" /* default */], {
				onClose: this.handleClose
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__contact_scss___default.a.modal
			}, void 0, _ref6, _jsx('p', {}, void 0, _jsx('button', {
				className: __WEBPACK_IMPORTED_MODULE_9__contact_scss___default.a.button,
				onClick: this.handleClose
			}, void 0, 'Great')))), _jsx('p', {}, void 0, _jsx('a', {
				href: '#',
				onClick: this.handleCollapse
			}, void 0, 'About our mailing lists')), _jsx(__WEBPACK_IMPORTED_MODULE_6__components_collapse_index_jsx__["a" /* default */], {
				isOpened: this.state.isOpen
			}, void 0, _ref7, _ref8, _ref9), _ref10))));
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

	return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = Contact;

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"contact__modal____74qC","button":"contact__button___2Hclh"};

/***/ })

});