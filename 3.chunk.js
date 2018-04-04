webpackJsonp([3],{1196:function(e,t,r){"use strict";var o=r(1197),n=r(1198),a=r(900);e.exports={formats:a,parse:n,stringify:o}},1197:function(e,t,r){"use strict";var o=r(899),n=r(900),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,n,a,i,c,s,u,d,f,p,v){var h=t;if("function"==typeof s)h=s(r,h);else if(h instanceof Date)h=f(h);else if(null===h){if(a)return c&&!v?c(r,l.encoder):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||o.isBuffer(h)){if(c){return[p(v?r:c(r,l.encoder))+"="+p(c(h,l.encoder))]}return[p(r)+"="+p(String(h))]}var m=[];if(void 0===h)return m;var y;if(Array.isArray(s))y=s;else{var b=Object.keys(h);y=u?b.sort(u):b}for(var q=0;q<y.length;++q){var g=y[q];i&&null===h[g]||(m=Array.isArray(h)?m.concat(e(h[g],n(r,g),n,a,i,c,s,u,d,f,p,v)):m.concat(e(h[g],r+(d?"."+g:"["+g+"]"),n,a,i,c,s,u,d,f,p,v)))}return m};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?l.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,f="boolean"==typeof i.encode?i.encode:l.encode,p="function"==typeof i.encoder?i.encoder:l.encoder,v="function"==typeof i.sort?i.sort:null,h=void 0!==i.allowDots&&i.allowDots,m="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,y="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,q,g=n.formatters[i.format];"function"==typeof i.filter?(q=i.filter,r=q("",r)):Array.isArray(i.filter)&&(q=i.filter,b=q);var O=[];if("object"!=typeof r||null===r)return"";var w;w=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var _=a[w];b||(b=Object.keys(r)),v&&b.sort(v);for(var j=0;j<b.length;++j){var P=b[j];d&&null===r[P]||(O=O.concat(c(r[P],P,_,u,d,f?p:null,q,v,h,m,g,y)))}var N=O.join(s),E=!0===i.addQueryPrefix?"?":"";return N.length>0?E+N:""}},1198:function(e,t,r){"use strict";var o=r(899),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=o.split(t.delimiter,i),c=0;c<l.length;++c){var s,u,d=l[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(s=t.decoder(d,a.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(d.slice(0,p),a.decoder),u=t.decoder(d.slice(p+1),a.decoder)),n.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r},l=function(e,t,r){if(!e.length)return t;var o,n=e.shift();if("[]"===n)o=[],o=o.concat(l(e,t,r));else{o=r.plainObjects?Object.create(null):{};var a="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,i=parseInt(a,10);!isNaN(i)&&n!==a&&String(i)===a&&i>=0&&r.parseArrays&&i<=r.arrayLimit?(o=[],o[i]=l(e,t,r)):o[a]=l(e,t,r)}return o},c=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=a.exec(o),s=c?o.slice(0,c.index):o,u=[];if(s){if(!r.plainObjects&&n.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}for(var d=0;null!==(c=i.exec(o))&&d<r.depth;){if(d+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+o.slice(c.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(n),u=0;u<s.length;++u){var d=s[u],f=c(d,n[d],r);l=o.merge(l,f,r)}return o.compact(l)}},1199:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(4),i=o(a),l=r(170),c=o(l),s=function(e){return i.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m38.1 10.7q0.9 1.2 0.4 2.9l-6.1 20.2q-0.5 1.4-1.8 2.4t-2.7 0.9h-20.6q-1.7 0-3.3-1.2t-2.2-2.9q-0.6-1.5-0.1-2.8 0-0.1 0.1-0.6t0.1-0.9q0-0.1-0.1-0.4t-0.1-0.5q0.1-0.2 0.2-0.4t0.4-0.6 0.4-0.5q0.5-0.8 1-2t0.6-2.1q0.1-0.2 0-0.6t0-0.7q0.1-0.2 0.4-0.6t0.4-0.5q0.5-0.8 0.9-2.1t0.6-2q0-0.2-0.1-0.7t0-0.6q0.1-0.3 0.5-0.7t0.5-0.5q0.4-0.6 1-1.9t0.6-2.1q0-0.2-0.1-0.6t0-0.6q0-0.2 0.2-0.4t0.4-0.5 0.4-0.5q0.1-0.2 0.3-0.6t0.4-0.8 0.3-0.8 0.5-0.7 0.5-0.6 0.9-0.2 1 0.1l0 0.1q0.8-0.2 1.1-0.2h17q1.7 0 2.6 1.2t0.4 2.9l-6.2 20.2q-0.8 2.7-1.6 3.5t-2.8 0.7h-19.4q-0.6 0-0.9 0.4-0.2 0.3 0 0.9 0.5 1.6 3.2 1.6h20.6q0.7 0 1.3-0.4t0.8-0.9l6.7-22q0.1-0.5 0.1-1.3 0.8 0.3 1.3 1z m-23.8 0q-0.1 0.3 0.1 0.5t0.4 0.2h13.6q0.3 0 0.6-0.2t0.3-0.5l0.5-1.4q0.1-0.3 0-0.5t-0.5-0.2h-13.6q-0.2 0-0.5 0.2t-0.4 0.5z m-1.8 5.7q-0.1 0.3 0 0.5t0.5 0.2h13.5q0.3 0 0.6-0.2t0.4-0.5l0.5-1.4q0-0.3-0.1-0.5t-0.4-0.2h-13.6q-0.3 0-0.6 0.2t-0.4 0.5z"})))};t.default=s,e.exports=t.default},1200:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(4),i=o(a),l=r(170),c=o(l),s=function(e){return i.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m18.6 20q0-2.2-1.6-3.8t-3.7-1.5-3.8 1.5-1.5 3.8 1.5 3.8 3.8 1.5 3.7-1.5 1.6-3.8z m16 10.6q0-1-0.8-1.8t-1.9-0.8-1.9 0.8-0.8 1.8q0 1.1 0.8 1.9t1.9 0.8 1.9-0.8 0.8-1.9z m0-21.2q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9q0 1.1 0.8 1.8t1.9 0.8 1.9-0.8 0.8-1.8z m-8 8.7v3.9q0 0.2-0.2 0.4t-0.3 0.2l-3.2 0.5q-0.2 0.7-0.7 1.6 0.7 0.9 1.9 2.3 0.1 0.2 0.1 0.5 0 0.2-0.1 0.3-0.5 0.7-1.7 1.9t-1.7 1.2q-0.2 0-0.4-0.1l-2.4-1.9q-0.7 0.4-1.6 0.7-0.2 2.2-0.5 3.2-0.1 0.5-0.6 0.5h-3.8q-0.3 0-0.5-0.2t-0.2-0.3l-0.4-3.2q-0.7-0.2-1.6-0.7l-2.4 1.9q-0.2 0.1-0.5 0.1-0.2 0-0.4-0.1-3-2.8-3-3.3 0-0.2 0.2-0.4 0.2-0.3 0.8-1.1t1-1.3q-0.5-0.9-0.7-1.7l-3.2-0.5q-0.2 0-0.4-0.2t-0.1-0.4v-3.9q0-0.2 0.1-0.4t0.4-0.2l3.2-0.5q0.2-0.7 0.7-1.6-0.7-0.9-1.9-2.3-0.2-0.3-0.2-0.5 0-0.2 0.2-0.4 0.4-0.6 1.7-1.8t1.6-1.2q0.3 0 0.5 0.1l2.4 1.9q0.7-0.4 1.6-0.7 0.2-2.2 0.4-3.2 0.2-0.5 0.7-0.5h3.8q0.2 0 0.4 0.2t0.2 0.3l0.5 3.2q0.7 0.2 1.6 0.7l2.4-1.9q0.2-0.1 0.4-0.1 0.3 0 0.5 0.1 3 2.8 3 3.3 0 0.2-0.2 0.4-0.2 0.4-0.8 1.2t-1 1.2q0.5 1 0.7 1.7l3.2 0.5q0.2 0 0.3 0.2t0.2 0.4z m13.3 11.1v2.9q0 0.3-3.1 0.6-0.3 0.6-0.6 1.1 1 2.4 1 2.9 0 0.1-0.1 0.1-2.5 1.5-2.5 1.5-0.2 0-1-1t-1.1-1.4q-0.4 0-0.6 0t-0.6 0q-0.3 0.4-1.1 1.4t-1 1q0 0-2.5-1.5-0.1 0-0.1-0.1 0-0.5 1-2.9-0.3-0.5-0.6-1.1-3.1-0.3-3.1-0.6v-2.9q0-0.4 3.1-0.7 0.3-0.6 0.6-1-1-2.4-1-2.9 0-0.1 0.1-0.2 0 0 0.7-0.4t1.2-0.7 0.6-0.3q0.2 0 1 1t1.1 1.4q0.4-0.1 0.6-0.1t0.6 0.1q1.1-1.5 1.9-2.4l0.2 0q0 0 2.5 1.4 0.1 0.1 0.1 0.2 0 0.5-1.1 2.9 0.4 0.4 0.7 1 3.1 0.3 3.1 0.7z m0-21.3v2.9q0 0.4-3.1 0.7-0.3 0.5-0.6 1 1 2.4 1 2.9 0 0.1-0.1 0.2-2.5 1.4-2.5 1.4-0.2 0-1-0.9t-1.1-1.5q-0.4 0.1-0.6 0.1t-0.6-0.1q-0.3 0.5-1.1 1.5t-1 0.9q0 0-2.5-1.4-0.1-0.1-0.1-0.2 0-0.5 1-2.9-0.3-0.5-0.6-1-3.1-0.3-3.1-0.7v-2.9q0-0.3 3.1-0.6 0.3-0.6 0.6-1.1-1-2.4-1-2.9 0-0.1 0.1-0.1 0-0.1 0.7-0.4t1.2-0.7 0.6-0.4q0.2 0 1 1t1.1 1.4q0.4 0 0.6 0t0.6 0q1.1-1.5 1.9-2.3l0.2-0.1q0 0 2.5 1.5 0.1 0 0.1 0.1 0 0.5-1.1 2.9 0.4 0.5 0.7 1.1 3.1 0.3 3.1 0.6z"})))};t.default=s,e.exports=t.default},1201:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(4),i=o(a),l=r(170),c=o(l),s=function(e){return i.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m14.1 17.1h11.5v-4.2q0-2.4-1.7-4.1t-4-1.7-4.1 1.7-1.7 4.1v4.2z m18.6 2.2v12.8q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.8 0-1.5-0.6t-0.6-1.6v-12.8q0-0.9 0.6-1.5t1.5-0.7h0.8v-4.2q0-4.1 2.9-7.1t7.1-2.9 7 2.9 3 7.1v4.2h0.7q0.9 0 1.5 0.7t0.6 1.5z"})))};t.default=s,e.exports=t.default},1202:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(4),i=o(a),l=r(170),c=o(l),s=function(e){return i.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m34 27.1q0-0.8-0.6-1.5l-4.7-4.6q-0.6-0.6-1.5-0.6-0.9 0-1.6 0.7 0.1 0 0.4 0.4t0.5 0.5 0.3 0.4 0.3 0.6 0.1 0.6q0 0.9-0.6 1.5t-1.5 0.6q-0.4 0-0.6-0.1t-0.6-0.3-0.4-0.3-0.5-0.5-0.4-0.4q-0.8 0.7-0.8 1.6 0 0.9 0.7 1.6l4.6 4.6q0.6 0.6 1.5 0.6 0.9 0 1.5-0.6l3.3-3.3q0.6-0.6 0.6-1.5z m-15.7-15.7q0-0.9-0.6-1.5l-4.6-4.6q-0.6-0.7-1.5-0.7-0.9 0-1.6 0.6l-3.2 3.3q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.5l4.6 4.7q0.6 0.6 1.5 0.6 1 0 1.6-0.7 0-0.1-0.4-0.4t-0.5-0.5-0.3-0.4-0.3-0.6-0.1-0.6q0-0.9 0.7-1.5t1.5-0.7q0.3 0 0.6 0.1t0.6 0.3 0.4 0.3 0.5 0.5 0.4 0.4q0.7-0.7 0.7-1.6z m20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9-2.7 0-4.6-1.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6q-1.8-1.9-1.8-4.6t1.9-4.5l3.2-3.3q1.9-1.8 4.6-1.8 2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z"})))};t.default=s,e.exports=t.default},1203:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(4),i=o(a),l=r(170),c=o(l),s=function(e){return i.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m40 7.9v24.2q0 1-0.9 1.4-0.3 0.1-0.5 0.1-0.6 0-1-0.5l-9-8.9v3.7q0 2.6-1.9 4.5t-4.6 1.9h-15.7q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h15.7q2.7 0 4.6 1.9t1.9 4.5v3.7l9-8.9q0.4-0.5 1-0.5 0.2 0 0.5 0.1 0.9 0.4 0.9 1.4z"})))};t.default=s,e.exports=t.default},1204:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(4),i=o(a),l=r(170),c=o(l),s=function(e){return i.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m24.9 12.9q0 0.2-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5q0-1.1-1.2-1.6t-2.4-0.6q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2q1.1 0 2.2 0.3t2 1.2 0.8 2.1z m3.6 0q0-1.6-0.8-3t-2-2.3-2.7-1.4-3.1-0.5-3 0.5-2.8 1.4-2 2.3-0.7 3q0 2.2 1.5 4 0.2 0.2 0.7 0.7t0.6 0.7q2.9 3.5 3.2 6.7h5.1q0.3-3.2 3.1-6.6 0.2-0.3 0.7-0.8t0.7-0.7q1.5-1.8 1.5-4z m2.9 0q0 3.4-2.3 5.9-1 1.1-1.7 2t-1.3 2.1-0.8 2.4q1.1 0.6 1.1 1.8 0 0.9-0.6 1.5 0.6 0.6 0.6 1.4 0 1.2-1 1.8 0.2 0.5 0.2 1.1 0 1-0.7 1.5t-1.7 0.6q-0.4 1-1.3 1.6t-2 0.5-1.9-0.5-1.4-1.6q-1 0-1.7-0.6t-0.7-1.5q0-0.6 0.3-1.1-1-0.6-1-1.8 0-0.8 0.6-1.4-0.6-0.6-0.6-1.5 0-1.2 1.1-1.8-0.1-1.1-0.8-2.4t-1.3-2.1-1.7-2q-2.3-2.5-2.3-5.9 0-2.3 1-4.2t2.6-3.1 3.7-2 4.1-0.7 4.2 0.7 3.7 2 2.6 3.1 1 4.2z"})))};t.default=s,e.exports=t.default},1205:function(e,t){e.exports={searchWrapper:"documentation__searchWrapper___13UHT",listWrapper:"documentation__listWrapper___Waij6",listPanel:"documentation__listPanel___3FUdT",docIcons:"documentation__docIcons___15ynP",overlay:"documentation__overlay___2CO2f",title:"documentation__title___1ybJg",searchResults:"documentation__searchResults___1BIr0"}},683:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),l=r.n(i),c=r(13),s=(r.n(c),r(73)),u=r(1196),d=(r.n(u),r(1199)),f=r.n(d),p=r(1200),v=r.n(p),h=r(1201),m=r.n(h),y=r(1202),b=r.n(y),q=r(1203),g=r.n(q),O=r(1204),w=r.n(O),_=r(734),j=r(736),P=r(737),N=r(702),E=r(735),k=r(1205),x=r.n(k),A=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var a=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});if(1===i)r.children=n;else if(i>1){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+3];r.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),S=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),R=A("h1",{},void 0,"Help + how to"),C=A("p",{},void 0,"New Front Door are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, ",A(s.b,{to:"/feature"},void 0,"let us know!")),z=A("h2",{},void 0,"New Front Door documentation"),D=A("ul",{},void 0,A("li",{},void 0,A(s.b,{to:"/documentation/suite"},void 0,"Suite of Tools")),A("li",{},void 0,"Client Charter Agreement - ",A("i",{},void 0,"coming soon")),A("li",{},void 0,A(s.b,{to:"/documentation/privacy"},void 0,"Privacy Policy")),A("li",{},void 0,A(s.b,{to:"/documentation/development"},void 0,"Website Development project outline"))),M=A("ul",{},void 0,A("li",{},void 0,A(s.b,{to:"/documentation/mailinglists"},void 0,"Mailing lists")),A("li",{},void 0,"Making the most of your new website - ",A("i",{},void 0,"coming soon")),A("li",{},void 0,A(s.b,{to:"/elvanto"},void 0,"Elvanto")),A("li",{},void 0,A(s.b,{to:"/sparkleshare"},void 0,"Sparkleshare")),A("li",{},void 0,A(s.b,{to:"/podcasting"},void 0,"Podcasting")),A("li",{},void 0,A(s.b,{to:"/registration"},void 0,"Event Registration tool")),A("li",{},void 0,A(s.b,{to:"/documentation/websiteediting"},void 0,"Website Editing"))),T=A("h2",{id:"maintenance"},void 0,"IT maintenance"),I=A("ul",{},void 0,A("li",{},void 0,"Website refresh recommendations - ",A("i",{},void 0,"coming soon")),A("li",{},void 0,A(s.b,{to:"/documentation/sparkleshare"},void 0,"Administrating Sparkleshare")),A("li",{},void 0,A(s.b,{to:"/documentation/checklist"},void 0,"Checklist for on-boarding and finishing with staff members"))),F=A("ul",{},void 0,A("li",{},void 0,A(s.b,{to:"/documentation/keepingkidssafe"},void 0,"Keeping Kids Safe on the Internet"))),L=A("h2",{},void 0,"Additional resources"),H=A("ul",{},void 0,A("li",{},void 0,A("a",{href:"https://www.elvanto.com/"},void 0,"Elvanto")),A("li",{},void 0,A("a",{href:"http://sparkleshare.org/"},void 0,"Sparkleshare")),A("li",{},void 0,A("a",{href:"https://www.drupal.org/"},void 0,"Drupal")),A("li",{},void 0,A("a",{href:"http://www.virtualchurchassist.com/"},void 0,"Virtual Church Assist"))),W=A("ul",{},void 0,A("li",{},void 0,A("a",{href:"https://www.youtube.com/watch?v=5FVw2A0TylA"},void 0,"Elvanto overview"))),B=function(e){function t(e){o(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=Object(u.parse)(e.location.search.substr(1)),i=a.search;return r.state={searchResults:[],searchTerm:i},r.handleSearchSubmit=r.handleSearchSubmit.bind(r),r.handleCloseResult=r.handleCloseResult.bind(r),r}return a(t,e),S(t,[{key:"componentDidMount",value:function(){this.state.searchTerm&&this.handleSearchSubmit(this.state.searchTerm)}},{key:"handleSearchSubmit",value:function(e){var t=this;this.props.searchIndex(e).then(function(r){return t.setState({searchTerm:e,searchResults:r})})}},{key:"handleCloseResult",value:function(e){e.preventDefault(),this.setState({searchResults:[]})}},{key:"render",value:function(){var e=void 0,t=this.state.searchResults;return t.length>0&&(e=A(P.a,{searchResults:t,onResultClick:this.handleCloseModal})),A(N.a,{},void 0,A("div",{className:x.a.overlay},void 0,A("div",{className:"site-wrapper site-wrapper-padding"},void 0,R,A("div",{className:x.a.searchWrapper},void 0,C,A(E.a,{size:"large",buttonClass:"btn-primary",placeholder:"Search all documents on NFD...",onSearchSubmit:this.handleSearchSubmit}),A(j.a,{titleClass:x.a.title,containerClass:x.a.searchResults,searchResults:this.state.searchResults,onCloseResults:this.handleCloseResult},void 0,e)),z,A("div",{className:x.a.listWrapper},void 0,A("div",{className:x.a.listPanel},void 0,A("h3",{},void 0,A(f.a,{className:""+x.a.docIcons})," Getting started with New Front Door"),D),A("div",{className:x.a.listPanel},void 0,A("h3",{},void 0,A(v.a,{className:""+x.a.docIcons})," Our Tools"),M)),T,A("div",{className:x.a.listWrapper},void 0,A("div",{className:x.a.listPanel},void 0,A("h3",{},void 0,A(m.a,{className:""+x.a.docIcons})," Keeping your systems up to date"),I),A("div",{className:x.a.listPanel},void 0,A("h3",{},void 0,A(w.a,{className:""+x.a.docIcons})," Articles + training night materials"),F)),L,A("div",{className:x.a.listWrapper},void 0,A("div",{className:x.a.listPanel},void 0,A("h3",{},void 0,A(b.a,{className:""+x.a.docIcons})," Recommended external links"),H),A("div",{className:x.a.listPanel},void 0,A("h3",{},void 0,A(g.a,{className:""+x.a.docIcons})," Recommended Videos"),W)))))}}]),t}(l.a.Component);t.default=Object(_.a)(B)},899:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,a){o.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],r,n):e.push(r):e[a]=r}),e):Object.keys(r).reduce(function(e,a){var i=r[a];return o.call(e,a)?e[a]=t.merge(e[a],i,n):e[a]=i,e},a)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var o=r||[],n=o.indexOf(e);if(-1!==n)return o[n];if(o.push(e),Array.isArray(e)){for(var a=[],i=0;i<e.length;++i)e[i]&&"object"==typeof e[i]?a.push(t.compact(e[i],o)):void 0!==e[i]&&a.push(e[i]);return a}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],o)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},900:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}}});