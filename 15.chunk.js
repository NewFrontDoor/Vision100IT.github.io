webpackJsonp([15],{1e3:function(e,t){e.exports={wrapper:"Blog__wrapper___OUvDp",image:"Blog__image___3Jqqy"}},555:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),l=o.n(a),c=o(9),u=(o.n(c),o(583)),s=o.n(u),f=o(573),p=o.n(f),b=o(575),h=o(581),d=o(1e3),y=o.n(d),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),v=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_={get context(){return o(772)},get blogs(){return this.context.keys()},document:function(e){var t=this.context(this.blogs.find(function(t){return t==="./"+e+".md"})),o=s()(t),n=o.body,r=o.attributes;return m({body:n},r)}},O=o(585),k=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleGoBack=e.handleGoBack.bind(e),e}return i(t,e),v(t,[{key:"handleGoBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return g(b.a,{},void 0,g("div",{className:y.a.wrapper},void 0,g("h1",{},void 0,this.blog.title),g("h1",{},void 0,g("small",{},void 0,this.blog.sub_title)),g("h3",{},void 0,this.blog.author.name," - ",g("span",{className:y.a.date},void 0,p()(this.blog.date).format("Do MMMM, YYYY"))),this.blog.image&&g("div",{className:y.a.imgContainer},void 0,g("img",{className:y.a.image,src:O(this.blog.image.href),alt:this.blog.image.alt})),g(h.a,{},void 0,this.blog.body),g("a",{href:"#",onClick:this.handleGoBack},void 0," < Back")))}},{key:"blog",get:function(){return _.document(this.props.match.params.blogId)||{}}}]),t}(l.a.Component);t.default=k}});