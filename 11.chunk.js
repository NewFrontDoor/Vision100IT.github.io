webpackJsonp([11],{1270:function(e,o){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (59)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.5.3\n    at module.exports (/home/travis/build/Vision100IT/v100it-template/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/home/travis/build/Vision100IT/v100it-template/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:641:30)\n    at Object.Module._extensions..js (module.js:652:10)\n    at Module.load (module.js:560:32)\n    at tryModuleLoad (module.js:503:12)\n    at Function.Module._load (module.js:495:3)\n    at Module.require (module.js:585:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/travis/build/Vision100IT/v100it-template/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:641:30)\n    at Object.Module._extensions..js (module.js:652:10)\n    at Module.load (module.js:560:32)\n    at tryModuleLoad (module.js:503:12)\n    at Function.Module._load (module.js:495:3)\n    at Module.require (module.js:585:17)\n    at runLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:194:19)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:181:3)\n    at NormalModule.build (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:274:15)")},699:function(e,o,t){"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var i=t(4),l=t.n(i),s=t(13),d=(t.n(s),t(735)),u=t(734),m=t(736),c=t(737),h=t(702),b=t(1270),p=(t.n(b),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,n,a){var r=o&&o.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}()),v=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),f=p("h1",{},void 0,"404 page not found"),j=p("section",{},void 0,p("p",{},void 0,"You’ve managed to find yourself on a page that doesn’t exist! Feel free to use the search box below, or hit the back button.")),_=function(e){function o(e){n(this,o);var t=a(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return t.state={searchResults:[],searchTerm:""},t.handleSearchSubmit=t.handleSearchSubmit.bind(t),t.handleCloseResult=t.handleCloseResult.bind(t),t}return r(o,e),v(o,[{key:"handleSearchSubmit",value:function(e){var o=this;this.props.searchIndex(e).then(function(t){return o.setState({searchTerm:e,searchResults:t})})}},{key:"handleCloseResult",value:function(e){e.preventDefault(),this.setState({searchResults:[]})}},{key:"render",value:function(){var e=void 0,o=this.state.searchResults;return o.length>0&&(e=p(c.a,{searchResults:o,onResultClick:this.handleCloseModal})),p(h.a,{},void 0,p("div",{className:"podcasting-wrapper"},void 0,p("div",{className:"podcasting-overlay"},void 0,p("div",{className:"site-wrapper site-wrapper-padding"},void 0,f,j,p("div",{className:b.default.searchWrapper},void 0,p(d.a,{size:"large",buttonClass:"btn-primary",placeholder:"Search V100IT...",onSearchSubmit:this.handleSearchSubmit}),p(m.a,{titleClass:b.default.title,containerClass:b.default.searchResults,searchResults:this.state.searchResults,onCloseResults:this.handleCloseResult},void 0,e))))))}}]),o}(l.a.Component);o.default=Object(u.a)(_)}});