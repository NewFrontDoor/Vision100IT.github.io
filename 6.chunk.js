webpackJsonp([6],{

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reformed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_popover_index_jsx__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_support_scss__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_support_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__css_support_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var fields = {
	summary: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* InputText */],
		label: 'How can we help?',
		placeholder: 'Summarise the issue like an email subject line',
		required: true
	},
	details: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["b" /* InputTextArea */],
		label: 'Further details that will help us to help you',
		placeholder: 'Please give us a detailed description, including any steps taken that led to the problem and the result',
		required: true,
		rows: '4'
	},
	url: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* InputText */],
		label: 'URL for affected page: (if applicable)',
		placeholder: 'Please copy paste the url from the browser'
	},
	requestType: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["c" /* InputRadio */],
		label: 'Issue type (This helps us quickly allocate to the product expert)',
		options: [{
			key: 'error',
			label: 'Username/password authentication issues',
			help: 'May be for Website, Sparkleshare, Sympa'
		}, {
			key: 'error2',
			label: 'Page not loading correctly/at all'
		}, {
			key: 'error3',
			label: 'Sparkleshare conflict/error'
		}, {
			key: 'error4',
			label: 'Mailing list issue/request'
		}, {
			key: 'error5',
			label: 'Other'
		}],
		required: true
	},
	severity: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["d" /* InputSelect */],
		label: 'Severity:',
		options: [{
			key: '4 - minimal impact, tolerable for a period',
			label: '4 - minimal impact, tolerable for a period'
		}, {
			key: '3 - affects one user, moderate impact on workflow',
			label: '3 - affects one user, moderate impact on workflow'
		}, {
			key: '2 - affects multiple users, serious impact on workflow',
			label: '2 - affects multiple users, serious impact on workflow'
		}, {
			key: '1 - affects multiple users and clients, system offline',
			label: '1 - affects multiple users and clients, system offline'
		}]
	},
	additional: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["b" /* InputTextArea */],
		label: 'Any other additional information',
		placeholder: 'Not required. You may choose to enter any other relevant information or special requests here.',
		rows: '3'
	},
	hr: {
		component: 'hr'
	},
	h4: {
		component: 'h4',
		children: 'Contact Details'
	},
	name: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* InputText */],
		label: 'Name:',
		placeholder: 'First and last name',
		required: true
	},
	organisation: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* InputText */],
		label: 'Organisation:',
		placeholder: 'Your church or parachurch organisation',
		required: true
	},
	email: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputEmail */],
		label: 'Contact email:',
		placeholder: 'Contact email',
		required: true
	}
};

// <div className="form-group hide">
// 	<label htmlFor="file">File upload:</label>
// 	<input type="file" name="file" className="form-control"/>
// 	<p className="help-block">Only txt, doc, docx or pdf and under 2mb are accepted.</p>
// </div>
// <div className="form-group hide">
// 	<label htmlFor="screenshot">Screenshot:</label>
// 	<input type="file" name="image" className="form-control"/>
// 	<p className="help-block">Only jpg, jpeg or png and under 2mb are accepted.</p>
// </div>

var _ref2 = _jsx('div', {
	className: 'form-group'
}, void 0, _jsx('button', {
	type: 'submit',
	className: 'btn btn-primary pull-right'
}, void 0, 'Submit'));

var SupportForm = function SupportForm(_ref) {
	var bindInput = _ref.bindInput,
	    model = _ref.model,
	    onSubmit = _ref.onSubmit,
	    schema = _ref.schema;

	var handleSubmit = function handleSubmit(event) {
		event.preventDefault();
		onSubmit(model);
	};

	return _jsx('div', {
		className: 'support-form'
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["f" /* Form */], {
		onSubmit: handleSubmit,
		schema: schema,
		fields: fields,
		bindInput: bindInput
	}, void 0, _ref2));
};

var SupportFormContainer = __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose___default()(__WEBPACK_IMPORTED_MODULE_3_react_reformed___default()(), __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema___default()(fields), __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["g" /* util */].submitted)(SupportForm);

var _ref3 = _jsx('h1', {}, void 0, 'Support form');

var _ref4 = _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'Some issues may be answered by our ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Link */], {
	to: '/documentation'
}, void 0, 'documentation'), ' which you can find ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Link */], {
	to: '/documentation'
}, void 0, 'here'), '. Please also check our ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Link */], {
	to: '/status'
}, void 0, 'system status page'), ' for any issues that may impact your work.'));

var _ref5 = _jsx('hr', {});

var _ref6 = _jsx('div', {
	className: 'instruction'
}, void 0, _jsx('h3', {}, void 0, 'Guidelines'), _jsx('p', {}, void 0, 'To best assist you with your support requests, please ensure to:'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'fill out this form ', _jsx('strong', {}, void 0, 'as completely as you can.')), _jsx('li', {}, void 0, 'include only one problem per submission. You\u2019re welcome to submit multiple requests.'), _jsx('li', {}, void 0, 'check you\u2019re allocated a ticket number.')), 'Each submission will:', _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Send a support ticket by email (to you & us) for tracking by our team.'), _jsx('li', {}, void 0, 'Give an option to close your support request by email.')));

var _ref7 = _jsx('h2', {}, void 0, 'Hearing you loud and clear!');

var _ref8 = _jsx('p', {}, void 0, 'We\u2019ve received your submission and will get back to you about your issue as soon as possible. If you have other things to report, please feel free to complete the form a second time.');

var Support = function (_React$Component) {
	_inherits(Support, _React$Component);

	function Support(props) {
		_classCallCheck(this, Support);

		var _this = _possibleConstructorReturn(this, (Support.__proto__ || Object.getPrototypeOf(Support)).call(this, props));

		_this.state = {
			isModalOpen: false
		};
		_this.setFormRef = _this.setFormRef.bind(_this);
		_this.handleOpen = _this.handleOpen.bind(_this);
		_this.handleClose = _this.handleClose.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.shouldComponentUpdate = __WEBPACK_IMPORTED_MODULE_1_react_addons_pure_render_mixin___default.a.shouldComponentUpdate.bind(_this);
		return _this;
	}

	_createClass(Support, [{
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
			return fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/support-request', {
				method: 'post',
				mode: 'cors',
				body: JSON.stringify(model),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).catch(this.handleOpen).then(this.handleOpen);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {}
	}, {
		key: 'render',
		value: function render() {
			var isModalOpen = this.state.isModalOpen;


			return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: 'status-overlay'
			}, void 0, _jsx('div', {
				className: 'site-wrapper site-wrapper-padding'
			}, void 0, _ref3, _ref4, _ref5, _ref6, _jsx(SupportFormContainer, {
				getFormRef: this.setFormRef,
				onSubmit: this.handleSubmit,
				initialModel: { severity: '4' }
			}))), isModalOpen && _jsx(__WEBPACK_IMPORTED_MODULE_6__components_popover_index_jsx__["a" /* default */], {
				onClose: this.handleClose
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__css_support_scss___default.a.modal
			}, void 0, _ref7, _ref8, _jsx('p', {}, void 0, _jsx('button', {
				className: __WEBPACK_IMPORTED_MODULE_9__css_support_scss___default.a.button,
				onClick: this.handleClose
			}, void 0, 'No worries')))));
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

	return Support;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = Support;

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"support__modal___1K8xw","button":"support__button___1rAKj"};

/***/ })

});