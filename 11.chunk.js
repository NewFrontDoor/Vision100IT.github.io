webpackJsonp([11],{648:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),i=r.n(s),l=r(15),u=(r.n(l),r(694)),c=r(691),h=r(693),f=r(692),p=r(658),d=r(952),b=r.n(d),v=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,n,a){var o=t&&t.defaultProps,s=arguments.length-3;if(r||0===s||(r={}),r&&o)for(var i in o)void 0===r[i]&&(r[i]=o[i]);else r||(r=o||{});if(1===s)r.children=a;else if(s>1){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+3];r.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=v("h1",{},void 0,"404 page not found"),m=v("section",{},void 0,v("p",{},void 0,"You’ve managed to find yourself on a page that doesn’t exist! Feel free to use the search box below, or hit the back button.")),R=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={searchResults:[],searchTerm:""},r.handleSearchSubmit=r.handleSearchSubmit.bind(r),r.handleCloseResult=r.handleCloseResult.bind(r),r}return o(t,e),y(t,[{key:"handleSearchSubmit",value:function(e){var t=this;this.props.searchIndex(e).then(function(r){return t.setState({searchTerm:e,searchResults:r})})}},{key:"handleCloseResult",value:function(e){e.preventDefault(),this.setState({searchResults:[]})}},{key:"render",value:function(){var e=void 0,t=this.state.searchResults;return t.length>0&&(e=v(f.a,{searchResults:t,onResultClick:this.handleCloseModal})),v(p.a,{},void 0,v("div",{className:"podcasting-wrapper"},void 0,v("div",{className:"podcasting-overlay"},void 0,v("div",{className:"site-wrapper site-wrapper-padding"},void 0,_,m,v("div",{className:b.a.searchWrapper},void 0,v(u.a,{size:"large",buttonClass:"btn-primary",placeholder:"Search V100IT...",onSearchSubmit:this.handleSearchSubmit}),v(h.a,{titleClass:b.a.title,containerClass:b.a.searchResults,searchResults:this.state.searchResults,onCloseResults:this.handleCloseResult},void 0,e))))))}}]),t}(i.a.Component);t.default=r.i(c.a)(R)},952:function(e,t){e.exports={searchWrapper:"error__searchWrapper___28CUi",title:"error__title___P0Ku9",searchResults:"error__searchResults___1YVbE"}}});