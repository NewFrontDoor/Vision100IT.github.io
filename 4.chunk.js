webpackJsonp([4],{1103:function(e,t,n){"use strict";var r=n(1),o=(n.n(r),n(9)),a=(n.n(o),n(1104)),i=n.n(a),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),s=function(e){return l("div",{className:i.a[e.type]},void 0,e.children)};s.defaultProps={children:null},t.a=s},1104:function(e,t){e.exports={warning:"Alert__warning___1bjrH",announcement:"Alert__announcement___2rbBL"}},1105:function(e,t,n){"use strict";var r=n(1),o=(n.n(r),n(9)),a=(n.n(o),n(61)),i=n(1106),l=n.n(i),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=n(582),c=function(e){var t=e.background,n=e.imagePadding,r=e.link,o=e.image,i=e.name,c=e.children,d={backgroundColor:t},f={padding:n};return s("div",{className:l.a.card,style:d},void 0,s(a.b,{to:r},void 0,s("h2",{hidden:!0},void 0,i),s("img",{src:u(o),style:f}),s("p",{},void 0,c)))};c.defaultProps={link:"",imagePadding:"",children:null},t.a=c},1106:function(e,t){e.exports={card:"Card__card___1WSln"}},1108:function(e,t,n){"use strict";var r=n(1),o=(n.n(r),n(9)),a=(n.n(o),n(61)),i=n(570),l=n.n(i),s=n(1109),u=n.n(s),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),d=n(582),f=function(e){return c("section",{className:u.a.post},void 0,c("header",{className:u.a.header},void 0,c("h2",{className:u.a.title},void 0,c(a.b,{to:e.url},void 0,e.title)),c("p",{className:u.a.meta},void 0,c("span",{className:u.a.author},void 0,"By ",e.author.name),c("span",{className:u.a.date},void 0,l()(e.date).format("Do MMMM, YYYY")))),c("div",{className:u.a.body},void 0,c("div",{className:u.a.content},void 0,e.image&&c("img",{src:d(e.image.href),className:e.image.size,alt:e.image.alt}),e.children)))};f.defaultProps={image:null},t.a=f},1109:function(e,t){e.exports={post:"Post__post___OQe3l",meta:"Post__meta___-ArPX",author:"Post__author___8optR",date:"Post__date___3Kaol",category:"Post__category___1Mt1Y",content:"Post__content___1scm5",wide:"Post__wide___3Jqar",regular:"Post__regular___38Mec"}},1110:function(e,t,n){"use strict";var r=n(1),o=(n.n(r),n(9)),a=(n.n(o),n(61)),i=n(1111),l=n.n(i),s=n(1112),u=n.n(s),c=n(1113),d=n.n(c),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),v=f(l.a,{}),p=f(u.a,{}),m=function(e){var t=e.previous,n=e.next;return f("nav",{role:"pagination",className:d.a.pagination},void 0,n&&f(a.b,{to:n},void 0,v," Next"),t&&f(a.b,{to:t},void 0,"Previous ",p))};m.defaultProps={previous:"",next:""},t.a=m},1111:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),l=n(131),s=r(l),u=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"})))};t.default=u,e.exports=t.default},1112:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),l=n(131),s=r(l),u=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z"})))};t.default=u,e.exports=t.default},1113:function(e,t){e.exports={pagination:"Pagination__pagination___2HSx8"}},1114:function(e,t){e.exports={cards:"client__cards___JknuX"}},556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),a=n(9),i=(n.n(a),n(580)),l=n.n(i),s=n(205),u=n.n(s),c=n(1103),d=n(1105),f=n(774),v=n(572),p=n(578),m=n(1108),g=n(1110),_=n(204),y=n(1114),h=n.n(y),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),k={get context(){return n(769)},get posts(){return this.context.keys().sort().reverse()},post:function(e){return this.context(this.posts.find(function(t){return t===e}))},postId:function(e){var t=this.posts[e].split(".");return t.shift(),t.pop(),t.join(".")},page:function(e){var t=this,n=e.trim,r=void 0===n?0:n,o=e.page,a=void 0===o?0:o,i=e.size,s=void 0===i?0:i,u=a*s,c=u+s;return this.posts.slice(u,c).map(this.context).map(l.a).map(function(e,n){var o=t.postId([n+u]),a=r?e.body.slice(0,r)+"... [View more](/blog"+o+")":e.body;return Object.assign(e,{url:"/blog"+o,body:a,key:n})})}},x=P(f.a,{mini:!0}),w=P(d.a,{name:"Elvanto",background:"#323232",image:"./elvanto.png",imagePadding:"10px",link:"/elvanto"},void 0,"Have you got started with Elvanto yet?"),N=P(d.a,{name:"Registration",background:"white",image:"./soul.jpeg",imagePadding:"10px",link:"/registration"},void 0,"Have a church event soon? Check out the V100IT registration module"),j=P(d.a,{name:"Podcasting",background:"#171717",image:"./podcasting.png",imagePadding:"75px",link:"/podcasting"},void 0,"Get on board with podcasting your sermons"),S=P(d.a,{name:"Designers",background:"white",image:"./close-image.jpeg"},void 0,"Thinking of a refresh? Read our recommendations - ",P("em",{},void 0,"coming soon...")),O=function(e){var t=Number(e.match.params.page)||0,n=t+1,r=t-1,a=k.page({trim:500,page:t,size:5}),i=void 0,l=void 0;5===a.length&&(i="/client/"+n),0===r&&(l="/client"),r>0&&(l="/client/"+r);var s=a.shift();return P(v.a,{headerSize:"mini"},void 0,x,P("main",{role:"main"},void 0,P("div",{className:"alerts hidden"},void 0,_.a.banners.map(function(e){return P(c.a,{type:e.type},u()(e.text),P("p",{},void 0,e.text))})),P("div",{className:h.a.cards},void 0,w,N,j,S),P("div",{className:"client-wrapper"},void 0,s&&P("section",{className:"pinned-post"},void 0,o.a.createElement(m.a,b({url:s.url},s.attributes),P(p.a,{},void 0,s.body))),P("section",{className:"posts"},void 0,a.map(function(e){return o.a.createElement(m.a,b({key:u()(e.url),url:e.url},e.attributes),P(p.a,{},void 0,e.body))})),P(g.a,{previous:i,next:l}))))};t.default=O}});