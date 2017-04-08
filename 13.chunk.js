webpackJsonp([13],{639:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),r=n.n(l),s=n(663),d=n.n(s),u=n(682),p=n.n(u),c=n(681),f=n.n(c),h=n(683),m=n.n(h),v=n(675),b=n(687),y=n(654),O=n(674),_=n(933),g=n.n(_),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),w=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,i){var a=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&a)for(var r in a)void 0===n[r]&&(n[r]=a[r]);else n||(n=a||{});if(1===l)n.children=i;else if(l>1){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),S={name:{component:O.a,label:"Name",placeholder:"Insert your full name",required:!0},email:{component:O.e,label:"Email address",placeholder:"Insert a valid email address",required:!0}},k=w("div",{className:"form-group"},void 0,w("button",{type:"submit",className:"btn btn-primary"},void 0,"Submit")),R=function(e){var t=e.bindInput,n=e.model,o=e.onSubmit,i=e.schema,a=function(e){e.preventDefault(),o(n)};return w(O.f,{schema:i,fields:S,bindInput:t,onSubmit:a},void 0,k)},N=f()(p()(),m()(S),O.g.submitted)(R),j=w("h1",{},void 0,"Contact Us"),P=w("div",{},void 0,w("h3",{},void 0,"Email contact"),w("a",{href:"mailto:it@vision100.org"},void 0,"it@vision100.org")),M=w("h3",{},void 0,"Join our mailing list"),T=w("h2",{},void 0,"Thanks for joining the mailing list."),A=w("p",{},void 0,"Vision 100 sends out a bunch of stuff via email regularly including:"),U=w("ul",{},void 0,w("li",{},void 0,"New features,"),w("li",{},void 0,"Hot tips on best practices,"),w("li",{},void 0,"Other helpful content around the web,"),w("li",{},void 0,"Official updates,"),w("li",{},void 0,"Upcoming events")),E=w("p",{},void 0,"These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have..."),F=w("div",{},void 0,w("h3",{},void 0,"Mailing address"),w("p",{},void 0,"PO Box 5006"),w("p",{},void 0,"UTAS LPO"),w("p",{},void 0,"SANDY BAY TAS 7005")),q=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isOpen:!1,isModalOpen:!1},e.setFormRef=e.setFormRef.bind(e),e.handleOpen=e.handleOpen.bind(e),e.handleClose=e.handleClose.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e.handleCollapse=e.handleCollapse.bind(e),e.shouldComponentUpdate=d.a.shouldComponentUpdate.bind(e),e}return a(t,e),C(t,[{key:"setFormRef",value:function(e){this.formRef=e}},{key:"handleOpen",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1}),this.formRef.resetModel()}},{key:"handleSubmit",value:function(e){fetch("https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/mailing-list",{method:"post",mode:"cors",body:JSON.stringify({name:e.name,email:e.email}),headers:new Headers({"Content-Type":"application/json"})}).catch(this.handleOpen).then(this.handleOpen)}},{key:"shouldComponentUpdate",value:function(){}},{key:"handleCollapse",value:function(e){e.preventDefault(),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isModalOpen;return w(y.a,{},void 0,w("div",{className:"contact-overlay"},void 0,w("div",{className:"site-wrapper site-wrapper-padding"},void 0,j,w("div",{},void 0,P,M,w(N,{getFormRef:this.setFormRef,onSubmit:this.handleSubmit}),e&&w(v.a,{onClose:this.handleClose},void 0,w("div",{className:g.a.modal},void 0,T,w("p",{},void 0,w("button",{className:g.a.button,onClick:this.handleClose},void 0,"Great")))),w("p",{},void 0,w("a",{href:"#",onClick:this.handleCollapse},void 0,"About our mailing lists")),w(b.a,{isOpened:this.state.isOpen},void 0,A,U,E),F))))}},{key:"formRef",set:function(e){this._formRef=e},get:function(){return this._formRef}}]),t}(r.a.Component);t.default=q},933:function(e,t){e.exports={modal:"contact__modal____74qC",button:"contact__button___2Hclh"}}});