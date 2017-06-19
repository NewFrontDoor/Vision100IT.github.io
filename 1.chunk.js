webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(1165);
var parse = __webpack_require__(1166);
var formats = __webpack_require__(907);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(906);
var formats = __webpack_require__(907);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    return keys.join(delimiter);
};


/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(906);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObjectRecursive(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaBook = function FaBook(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm38.1 10.7q0.9 1.2 0.4 2.9l-6.1 20.2q-0.5 1.4-1.8 2.4t-2.7 0.9h-20.6q-1.7 0-3.3-1.2t-2.2-2.9q-0.6-1.5-0.1-2.8 0-0.1 0.1-0.6t0.1-0.9q0-0.1-0.1-0.4t-0.1-0.5q0.1-0.2 0.2-0.4t0.4-0.6 0.4-0.5q0.5-0.8 1-2t0.6-2.1q0.1-0.2 0-0.6t0-0.7q0.1-0.2 0.4-0.6t0.4-0.5q0.5-0.8 0.9-2.1t0.6-2q0-0.2-0.1-0.7t0-0.6q0.1-0.3 0.5-0.7t0.5-0.5q0.4-0.6 1-1.9t0.6-2.1q0-0.2-0.1-0.6t0-0.6q0-0.2 0.2-0.4t0.4-0.5 0.4-0.5q0.1-0.2 0.3-0.6t0.4-0.8 0.3-0.8 0.5-0.7 0.5-0.6 0.9-0.2 1 0.1l0 0.1q0.8-0.2 1.1-0.2h17q1.7 0 2.6 1.2t0.4 2.9l-6.2 20.2q-0.8 2.7-1.6 3.5t-2.8 0.7h-19.4q-0.6 0-0.9 0.4-0.2 0.3 0 0.9 0.5 1.6 3.2 1.6h20.6q0.7 0 1.3-0.4t0.8-0.9l6.7-22q0.1-0.5 0.1-1.3 0.8 0.3 1.3 1z m-23.8 0q-0.1 0.3 0.1 0.5t0.4 0.2h13.6q0.3 0 0.6-0.2t0.3-0.5l0.5-1.4q0.1-0.3 0-0.5t-0.5-0.2h-13.6q-0.2 0-0.5 0.2t-0.4 0.5z m-1.8 5.7q-0.1 0.3 0 0.5t0.5 0.2h13.5q0.3 0 0.6-0.2t0.4-0.5l0.5-1.4q0-0.3-0.1-0.5t-0.4-0.2h-13.6q-0.3 0-0.6 0.2t-0.4 0.5z' })
        )
    );
};

exports.default = FaBook;

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCogs = function FaCogs(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.6 20q0-2.2-1.6-3.8t-3.7-1.5-3.8 1.5-1.5 3.8 1.5 3.8 3.8 1.5 3.7-1.5 1.6-3.8z m16 10.6q0-1-0.8-1.8t-1.9-0.8-1.9 0.8-0.8 1.8q0 1.1 0.8 1.9t1.9 0.8 1.9-0.8 0.8-1.9z m0-21.2q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9q0 1.1 0.8 1.8t1.9 0.8 1.9-0.8 0.8-1.8z m-8 8.7v3.9q0 0.2-0.2 0.4t-0.3 0.2l-3.2 0.5q-0.2 0.7-0.7 1.6 0.7 0.9 1.9 2.3 0.1 0.2 0.1 0.5 0 0.2-0.1 0.3-0.5 0.7-1.7 1.9t-1.7 1.2q-0.2 0-0.4-0.1l-2.4-1.9q-0.7 0.4-1.6 0.7-0.2 2.2-0.5 3.2-0.1 0.5-0.6 0.5h-3.8q-0.3 0-0.5-0.2t-0.2-0.3l-0.4-3.2q-0.7-0.2-1.6-0.7l-2.4 1.9q-0.2 0.1-0.5 0.1-0.2 0-0.4-0.1-3-2.8-3-3.3 0-0.2 0.2-0.4 0.2-0.3 0.8-1.1t1-1.3q-0.5-0.9-0.7-1.7l-3.2-0.5q-0.2 0-0.4-0.2t-0.1-0.4v-3.9q0-0.2 0.1-0.4t0.4-0.2l3.2-0.5q0.2-0.7 0.7-1.6-0.7-0.9-1.9-2.3-0.2-0.3-0.2-0.5 0-0.2 0.2-0.4 0.4-0.6 1.7-1.8t1.6-1.2q0.3 0 0.5 0.1l2.4 1.9q0.7-0.4 1.6-0.7 0.2-2.2 0.4-3.2 0.2-0.5 0.7-0.5h3.8q0.2 0 0.4 0.2t0.2 0.3l0.5 3.2q0.7 0.2 1.6 0.7l2.4-1.9q0.2-0.1 0.4-0.1 0.3 0 0.5 0.1 3 2.8 3 3.3 0 0.2-0.2 0.4-0.2 0.4-0.8 1.2t-1 1.2q0.5 1 0.7 1.7l3.2 0.5q0.2 0 0.3 0.2t0.2 0.4z m13.3 11.1v2.9q0 0.3-3.1 0.6-0.3 0.6-0.6 1.1 1 2.4 1 2.9 0 0.1-0.1 0.1-2.5 1.5-2.5 1.5-0.2 0-1-1t-1.1-1.4q-0.4 0-0.6 0t-0.6 0q-0.3 0.4-1.1 1.4t-1 1q0 0-2.5-1.5-0.1 0-0.1-0.1 0-0.5 1-2.9-0.3-0.5-0.6-1.1-3.1-0.3-3.1-0.6v-2.9q0-0.4 3.1-0.7 0.3-0.6 0.6-1-1-2.4-1-2.9 0-0.1 0.1-0.2 0 0 0.7-0.4t1.2-0.7 0.6-0.3q0.2 0 1 1t1.1 1.4q0.4-0.1 0.6-0.1t0.6 0.1q1.1-1.5 1.9-2.4l0.2 0q0 0 2.5 1.4 0.1 0.1 0.1 0.2 0 0.5-1.1 2.9 0.4 0.4 0.7 1 3.1 0.3 3.1 0.7z m0-21.3v2.9q0 0.4-3.1 0.7-0.3 0.5-0.6 1 1 2.4 1 2.9 0 0.1-0.1 0.2-2.5 1.4-2.5 1.4-0.2 0-1-0.9t-1.1-1.5q-0.4 0.1-0.6 0.1t-0.6-0.1q-0.3 0.5-1.1 1.5t-1 0.9q0 0-2.5-1.4-0.1-0.1-0.1-0.2 0-0.5 1-2.9-0.3-0.5-0.6-1-3.1-0.3-3.1-0.7v-2.9q0-0.3 3.1-0.6 0.3-0.6 0.6-1.1-1-2.4-1-2.9 0-0.1 0.1-0.1 0-0.1 0.7-0.4t1.2-0.7 0.6-0.4q0.2 0 1 1t1.1 1.4q0.4 0 0.6 0t0.6 0q1.1-1.5 1.9-2.3l0.2-0.1q0 0 2.5 1.5 0.1 0 0.1 0.1 0 0.5-1.1 2.9 0.4 0.5 0.7 1.1 3.1 0.3 3.1 0.6z' })
        )
    );
};

exports.default = FaCogs;

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaLock = function FaLock(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm14.1 17.1h11.5v-4.2q0-2.4-1.7-4.1t-4-1.7-4.1 1.7-1.7 4.1v4.2z m18.6 2.2v12.8q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.8 0-1.5-0.6t-0.6-1.6v-12.8q0-0.9 0.6-1.5t1.5-0.7h0.8v-4.2q0-4.1 2.9-7.1t7.1-2.9 7 2.9 3 7.1v4.2h0.7q0.9 0 1.5 0.7t0.6 1.5z' })
        )
    );
};

exports.default = FaLock;

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaChain = function FaChain(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm34 27.1q0-0.8-0.6-1.5l-4.7-4.6q-0.6-0.6-1.5-0.6-0.9 0-1.6 0.7 0.1 0 0.4 0.4t0.5 0.5 0.3 0.4 0.3 0.6 0.1 0.6q0 0.9-0.6 1.5t-1.5 0.6q-0.4 0-0.6-0.1t-0.6-0.3-0.4-0.3-0.5-0.5-0.4-0.4q-0.8 0.7-0.8 1.6 0 0.9 0.7 1.6l4.6 4.6q0.6 0.6 1.5 0.6 0.9 0 1.5-0.6l3.3-3.3q0.6-0.6 0.6-1.5z m-15.7-15.7q0-0.9-0.6-1.5l-4.6-4.6q-0.6-0.7-1.5-0.7-0.9 0-1.6 0.6l-3.2 3.3q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.5l4.6 4.7q0.6 0.6 1.5 0.6 1 0 1.6-0.7 0-0.1-0.4-0.4t-0.5-0.5-0.3-0.4-0.3-0.6-0.1-0.6q0-0.9 0.7-1.5t1.5-0.7q0.3 0 0.6 0.1t0.6 0.3 0.4 0.3 0.5 0.5 0.4 0.4q0.7-0.7 0.7-1.6z m20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9-2.7 0-4.6-1.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6q-1.8-1.9-1.8-4.6t1.9-4.5l3.2-3.3q1.9-1.8 4.6-1.8 2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z' })
        )
    );
};

exports.default = FaChain;

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaVideoCamera = function FaVideoCamera(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm40 7.9v24.2q0 1-0.9 1.4-0.3 0.1-0.5 0.1-0.6 0-1-0.5l-9-8.9v3.7q0 2.6-1.9 4.5t-4.6 1.9h-15.7q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h15.7q2.7 0 4.6 1.9t1.9 4.5v3.7l9-8.9q0.4-0.5 1-0.5 0.2 0 0.5 0.1 0.9 0.4 0.9 1.4z' })
        )
    );
};

exports.default = FaVideoCamera;

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaLightbulbO = function FaLightbulbO(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm24.9 12.9q0 0.2-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5q0-1.1-1.2-1.6t-2.4-0.6q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2q1.1 0 2.2 0.3t2 1.2 0.8 2.1z m3.6 0q0-1.6-0.8-3t-2-2.3-2.7-1.4-3.1-0.5-3 0.5-2.8 1.4-2 2.3-0.7 3q0 2.2 1.5 4 0.2 0.2 0.7 0.7t0.6 0.7q2.9 3.5 3.2 6.7h5.1q0.3-3.2 3.1-6.6 0.2-0.3 0.7-0.8t0.7-0.7q1.5-1.8 1.5-4z m2.9 0q0 3.4-2.3 5.9-1 1.1-1.7 2t-1.3 2.1-0.8 2.4q1.1 0.6 1.1 1.8 0 0.9-0.6 1.5 0.6 0.6 0.6 1.4 0 1.2-1 1.8 0.2 0.5 0.2 1.1 0 1-0.7 1.5t-1.7 0.6q-0.4 1-1.3 1.6t-2 0.5-1.9-0.5-1.4-1.6q-1 0-1.7-0.6t-0.7-1.5q0-0.6 0.3-1.1-1-0.6-1-1.8 0-0.8 0.6-1.4-0.6-0.6-0.6-1.5 0-1.2 1.1-1.8-0.1-1.1-0.8-2.4t-1.3-2.1-1.7-2q-2.3-2.5-2.3-5.9 0-2.3 1-4.2t2.6-3.1 3.7-2 4.1-0.7 4.2 0.7 3.7 2 2.6 3.1 1 4.2z' })
        )
    );
};

exports.default = FaLightbulbO;

/***/ }),

/***/ 1173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchWrapper":"documentation__searchWrapper___13UHT","listWrapper":"documentation__listWrapper___Waij6","listPanel":"documentation__listPanel___3FUdT","docIcons":"documentation__docIcons___15ynP","overlay":"documentation__overlay___2CO2f","title":"documentation__title___1ybJg","searchResults":"documentation__searchResults___1BIr0"};

/***/ }),

/***/ 1205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"contact__modal____74qC","button":"contact__button___2Hclh"};

/***/ }),

/***/ 1206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"feature__modal___HePQ7","button":"feature__button___2Dw7O"};

/***/ }),

/***/ 1226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"support__modal___1K8xw","button":"support__button___1rAKj"};

/***/ }),

/***/ 1231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchWrapper":"error__searchWrapper___28CUi","title":"error__title___P0Ku9","searchResults":"error__searchResults___1YVbE"};

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_book__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_book__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_cogs__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_cogs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_cogs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_fa_lock__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_fa_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_fa_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa_chain__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa_chain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa_chain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_fa_video_camera__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_fa_video_camera___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa_video_camera__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_icons_fa_lightbulb_o__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_icons_fa_lightbulb_o___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_icons_fa_lightbulb_o__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_index_index_jsx__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_results_index_jsx__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_result_list_index_jsx__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_index_index_jsx__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_index_jsx__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__documentation_scss__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__documentation_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var _ref = _jsx('h1', {}, void 0, 'Help + how to');

var _ref2 = _jsx('p', {}, void 0, 'Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/feature'
}, void 0, 'let us know!'));

var _ref3 = _jsx('h2', {}, void 0, 'Vision 100 IT documentation');

var _ref4 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/suite'
}, void 0, 'Suite of Tools')), _jsx('li', {}, void 0, 'Client Charter Agreement - ', _jsx('i', {}, void 0, 'coming soon')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/privacy'
}, void 0, 'Privacy Policy')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/development'
}, void 0, 'Website Development project outline')));

var _ref5 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/mailinglists'
}, void 0, 'Mailing lists')), _jsx('li', {}, void 0, 'Making the most of your new website - ', _jsx('i', {}, void 0, 'coming soon')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/elvanto'
}, void 0, 'Elvanto')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/sparkleshare'
}, void 0, 'Sparkleshare')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/podcasting'
}, void 0, 'Podcasting')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/registration'
}, void 0, 'Event Registration tool')));

var _ref6 = _jsx('h2', {
	id: 'maintenance'
}, void 0, 'IT maintenance');

var _ref7 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Website refresh recommendations - ', _jsx('i', {}, void 0, 'coming soon')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/sparkleshare'
}, void 0, 'Administrating Sparkleshare')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/checklist'
}, void 0, 'Checklist for on-boarding and finishing with staff members')));

var _ref8 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation/keepingkidssafe'
}, void 0, 'Keeping Kids Safe on the Internet')));

var _ref9 = _jsx('h2', {}, void 0, 'Additional resources');

var _ref10 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	href: 'https://www.elvanto.com/'
}, void 0, 'Elvanto')), _jsx('li', {}, void 0, _jsx('a', {
	href: 'http://sparkleshare.org/'
}, void 0, 'Sparkleshare')), _jsx('li', {}, void 0, _jsx('a', {
	href: 'https://www.drupal.org/'
}, void 0, 'Drupal')), _jsx('li', {}, void 0, _jsx('a', {
	href: 'http://www.virtualchurchassist.com/'
}, void 0, 'Virtual Church Assist')));

var _ref11 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	href: 'https://www.youtube.com/watch?v=5FVw2A0TylA'
}, void 0, 'Elvanto overview')));

var Documentation = function (_React$Component) {
	_inherits(Documentation, _React$Component);

	function Documentation(props) {
		_classCallCheck(this, Documentation);

		var _this = _possibleConstructorReturn(this, (Documentation.__proto__ || Object.getPrototypeOf(Documentation)).call(this, props));

		var _parse = __WEBPACK_IMPORTED_MODULE_3_qs__["parse"](props.location.search.substr(1)),
		    search = _parse.search;

		_this.state = {
			searchResults: [],
			searchTerm: search
		};
		_this.handleSearchSubmit = _this.handleSearchSubmit.bind(_this);
		_this.handleCloseResult = _this.handleCloseResult.bind(_this);
		return _this;
	}

	_createClass(Documentation, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.state.searchTerm) {
				this.handleSearchSubmit(this.state.searchTerm);
			}
		}
	}, {
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
				searchResultList = _jsx(__WEBPACK_IMPORTED_MODULE_12__components_search_result_list_index_jsx__["a" /* default */], {
					searchResults: searchResults,
					onResultClick: this.handleCloseModal
				});
			}

			return _jsx(__WEBPACK_IMPORTED_MODULE_13__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.overlay
			}, void 0, _jsx('div', {
				className: 'site-wrapper site-wrapper-padding'
			}, void 0, _ref, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.searchWrapper
			}, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_14__components_search_index_jsx__["a" /* default */], {
				size: 'large',
				buttonClass: 'btn-primary',
				placeholder: 'Search all documents on V100IT...',
				onSearchSubmit: this.handleSearchSubmit
			}), _jsx(__WEBPACK_IMPORTED_MODULE_11__components_search_results_index_jsx__["a" /* default */], {
				titleClass: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.title,
				containerClass: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.searchResults,
				searchResults: this.state.searchResults,
				onCloseResults: this.handleCloseResult
			}, void 0, searchResultList)), _ref3, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listWrapper
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listPanel
			}, void 0, _jsx('h3', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_book___default.a, {
				className: '' + __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.docIcons
			}), ' Getting started with Vision 100 IT'), _ref4), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listPanel
			}, void 0, _jsx('h3', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_cogs___default.a, {
				className: '' + __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.docIcons
			}), ' Our Tools'), _ref5)), _ref6, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listWrapper
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listPanel
			}, void 0, _jsx('h3', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6_react_icons_fa_lock___default.a, {
				className: '' + __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.docIcons
			}), ' Keeping your systems up to date'), _ref7), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listPanel
			}, void 0, _jsx('h3', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_9_react_icons_fa_lightbulb_o___default.a, {
				className: '' + __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.docIcons
			}), ' Articles + training night materials'), _ref8)), _ref9, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listWrapper
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listPanel
			}, void 0, _jsx('h3', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa_chain___default.a, {
				className: '' + __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.docIcons
			}), ' Recommended external links'), _ref10), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.listPanel
			}, void 0, _jsx('h3', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa_video_camera___default.a, {
				className: '' + __WEBPACK_IMPORTED_MODULE_15__documentation_scss___default.a.docIcons
			}), ' Recommended Videos'), _ref11)))));
		}
	}]);

	return Documentation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_10__components_search_index_index_jsx__["a" /* default */](Documentation));

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_reformed__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_reformed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_reformed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_index_jsx__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_collapse_index_jsx__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_scss__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__contact_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var fields = {
	name: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'Name',
		placeholder: 'Insert your full name',
		required: true
	},
	email: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["b" /* InputEmail */],
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

	return _jsx(__WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* Form */], {
		schema: schema,
		fields: fields,
		bindInput: bindInput,
		onSubmit: handleSubmit
	}, void 0, _ref2);
};

var ContactFormContainer = __WEBPACK_IMPORTED_MODULE_3_react_reformed_lib_compose___default.a(__WEBPACK_IMPORTED_MODULE_2_react_reformed___default.a(), __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_validateSchema___default.a(fields), __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["g" /* util */].submitted)(ContactForm);

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
			fetch('https://api.vision100it.org/mailing-list', {
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
				getFormRef: this.setFormRef,
				onSubmit: this.handleSubmit
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

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index_index_jsx__ = __webpack_require__(659);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
	className: 'site-wrapper'
}, void 0, _jsx('h1', {}, void 0, 'Control page'), _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'A mockup control panel for easy implementation of site features.'), _jsx('p', {}, void 0, 'This would likely require implementation of a database of some sort, which is currently not available.')), _jsx('hr', {}), _jsx('form', {
	className: ''
}, void 0, _jsx('div', {
	className: 'checkbox'
}, void 0, _jsx('label', {}, void 0, _jsx('input', {
	type: 'checkbox',
	name: 'announcementCheck',
	id: 'error2',
	value: 'error2'
}), 'Display announcement bar on \u2018client\u2019 page')), _jsx('div', {
	className: 'checkbox'
}, void 0, _jsx('label', {}, void 0, _jsx('input', {
	type: 'checkbox',
	name: 'announcementCheck',
	id: 'error2',
	value: 'error2'
}), 'Display announcement bar on all pages [currently unavailable]')), _jsx('div', {
	className: 'form-group has-success has-feedback'
}, void 0, _jsx('label', {
	htmlFor: 'subject'
}, void 0, 'Content for announcement bar'), _jsx('input', {
	type: 'text',
	name: 'subject',
	className: 'form-control',
	placeholder: 'Insert content for the announcement bar'
})), _jsx('hr', {}), _jsx('div', {
	className: 'form-group has-success has-feedback'
}, void 0, _jsx('label', {
	htmlFor: 'subject'
}, void 0, 'Email address for support request form'), _jsx('input', {
	type: 'text',
	name: 'subject',
	className: 'form-control',
	placeholder: 'Insert valid email'
})), _jsx('div', {
	className: 'form-group has-success has-feedback'
}, void 0, _jsx('label', {
	htmlFor: 'subject'
}, void 0, 'Email address for feature request form'), _jsx('input', {
	type: 'text',
	name: 'subject',
	className: 'form-control',
	placeholder: 'Insert valid email'
}))), _jsx('div', {}, void 0, 'Insert other possible items here:'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Item 1'), _jsx('li', {}, void 0, 'Item 2'), _jsx('li', {}, void 0, 'Item 3'))));

var Control = function Control() {
	return _ref;
};

/* harmony default export */ __webpack_exports__["default"] = (Control);

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reformed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_popover_index_jsx__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_feature_scss__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_feature_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__css_feature_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var fields = {
	name: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'Name:',
		placeholder: 'First and last name',
		required: true
	},
	organisation: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'Organisation:',
		placeholder: 'Your church or parachurch organisation',
		required: true
	},
	email: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["b" /* InputEmail */],
		label: 'Contact email:',
		placeholder: 'Contact email',
		required: true
	},
	urlIssue: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'Example URL (if applicable)',
		placeholder: 'Please copy paste the url from your web browser'
	},
	requestType: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["c" /* InputRadio */],
		label: 'Request type:',
		options: [{
			key: 'error',
			label: 'New website feature',
			help: 'May be a module, a visual tweak, or new template'
		}, {
			key: 'error2',
			label: 'Sparkleshare feature'
		}, {
			key: 'error3',
			label: 'Mailing list feature'
		}, {
			key: 'error4',
			label: 'App integration request'
		}, {
			key: 'error5',
			label: 'Other'
		}],
		required: true
	},
	description: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["f" /* InputTextArea */],
		label: 'Description',
		placeholder: 'Required. Please provide a brief description',
		required: true,
		rows: '3'
	},
	additional: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["f" /* InputTextArea */],
		label: 'Any other additional information',
		placeholder: 'Not required. You may choose to enter any other relevant information or special requests here.',
		rows: '5'
	}
};

var _ref2 = _jsx('div', {
	className: 'form-group'
}, void 0, _jsx('button', {
	type: 'submit',
	className: 'btn btn-primary pull-right'
}, void 0, 'Submit'));

var FeatureForm = function FeatureForm(_ref) {
	var bindInput = _ref.bindInput,
	    model = _ref.model,
	    onSubmit = _ref.onSubmit,
	    schema = _ref.schema;

	var handleSubmit = function handleSubmit(event) {
		event.preventDefault();
		onSubmit(model);
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

	return _jsx('div', {
		className: 'support-form'
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* Form */], {
		schema: schema,
		fields: fields,
		bindInput: bindInput,
		onSubmit: handleSubmit
	}, void 0, _ref2));
};

var FeatureFromContainer = __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose___default.a(__WEBPACK_IMPORTED_MODULE_3_react_reformed___default.a(), __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema___default.a(fields), __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["g" /* util */].submitted)(FeatureForm);

var _ref3 = _jsx('h1', {}, void 0, 'Feature request form');

var _ref4 = _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'Some features may be in the pipeline or already available. See our ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation'
}, void 0, 'documentation page'), ' for assistance in using these features, and our ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/client'
}, void 0, 'client page'), ' for any announcements.'));

var _ref5 = _jsx('hr', {});

var _ref6 = _jsx('div', {
	className: 'instruction'
}, void 0, _jsx('h3', {}, void 0, 'Guidelines'), _jsx('p', {}, void 0, 'To best assist you with your feature requests, please ensure to:'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'fill out this form ', _jsx('strong', {}, void 0, 'as completely as you can.')), _jsx('li', {}, void 0, 'include only one request per submission. You\u2019re welcome to submit multiple requests.'), _jsx('li', {}, void 0, 'check you\u2019re allocated a ticket number.')), _jsx('p', {}, void 0, 'Each submission will:'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'Send a request ticket by email (to you & us) for tracking by our team.'), _jsx('li', {}, void 0, 'Give an option to close your feature request by email.')));

var _ref7 = _jsx('h2', {}, void 0, 'New features! Always exciting..');

var _ref8 = _jsx('p', {}, void 0, 'We\u2019ll review your submission and get back to you about your request as soon as possible.');

var Feature = function (_React$Component) {
	_inherits(Feature, _React$Component);

	function Feature(props) {
		_classCallCheck(this, Feature);

		var _this = _possibleConstructorReturn(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).call(this, props));

		_this.state = {
			isModalOpen: false
		};
		_this.setFormRef = _this.setFormRef.bind(_this);
		_this.handleOpen = _this.handleOpen.bind(_this);
		_this.handleClose = _this.handleClose.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(Feature, [{
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
			return fetch('https://api.vision100it.org/feature-request', {
				method: 'post',
				mode: 'cors',
				body: JSON.stringify(model),
				headers: new Headers({ 'Content-Type': 'application/json' })
			}).catch(this.handleOpen).then(this.handleOpen);
		}
	}, {
		key: 'render',
		value: function render() {
			var isModalOpen = this.state.isModalOpen;


			return _jsx(__WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: 'status-overlay'
			}, void 0, _jsx('div', {
				className: 'site-wrapper site-wrapper-padding'
			}, void 0, _ref3, _ref4, _ref5, _ref6, _jsx(FeatureFromContainer, {
				getFormRef: this.setFormRef,
				onSubmit: this.handleSubmit
			}))), isModalOpen && _jsx(__WEBPACK_IMPORTED_MODULE_6__components_popover_index_jsx__["a" /* default */], {
				onClose: this.handleClose
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__css_feature_scss___default.a.modal
			}, void 0, _ref7, _ref8, _jsx('p', {}, void 0, _jsx('button', {
				className: __WEBPACK_IMPORTED_MODULE_9__css_feature_scss___default.a.button,
				onClick: this.handleClose
			}, void 0, 'Woo Hoo!')))));
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

	return Feature;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__ = __webpack_require__(659);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
	className: 'status-overlay'
}, void 0, _jsx('div', {
	className: 'site-wrapper site-wrapper-padding'
}, void 0, _jsx('h1', {}, void 0, 'System Status'), _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'The following is a list of our systems and their current status - if there is a problem with one of your systems or website that is not listed here, please contact us via the ', _jsx(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], {
	to: '/support'
}, void 0, 'support request form'), '. ', _jsx('strong', {}, void 0, 'This feature is currently in development and will be launched soon.'))), _jsx('div', {}, void 0, _jsx('dl', {
	className: 'dl-horizontal'
}, void 0, _jsx('dt', {}, void 0, 'Website hosting'), _jsx('dd', {}, void 0, 'Operating Ok - no known issues'), _jsx('dt', {}, void 0, 'Sparkleshare'), _jsx('dd', {}, void 0, 'Operating Ok - no known issues'), _jsx('dt', {}, void 0, 'Sympa Mailing Lists'), _jsx('dd', {}, void 0, 'Operating Ok - no known issues'))))));

var Status = function Status() {
	return _ref;
};

/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reformed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reformed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_popover_index_jsx__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_index_jsx__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_support_scss__ = __webpack_require__(1226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_support_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__css_support_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var fields = {
	summary: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'How can we help?',
		placeholder: 'Summarise the issue like an email subject line',
		required: true
	},
	details: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["f" /* InputTextArea */],
		label: 'Further details that will help us to help you',
		placeholder: 'Please give us a detailed description, including any steps taken that led to the problem and the result',
		required: true,
		rows: '4'
	},
	url: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
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
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["f" /* InputTextArea */],
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
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'Name:',
		placeholder: 'First and last name',
		required: true
	},
	organisation: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["e" /* InputText */],
		label: 'Organisation:',
		placeholder: 'Your church or parachurch organisation',
		required: true
	},
	email: {
		component: __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["b" /* InputEmail */],
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
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["a" /* Form */], {
		schema: schema,
		fields: fields,
		bindInput: bindInput,
		onSubmit: handleSubmit
	}, void 0, _ref2));
};

var SupportFormContainer = __WEBPACK_IMPORTED_MODULE_4_react_reformed_lib_compose___default.a(__WEBPACK_IMPORTED_MODULE_3_react_reformed___default.a(), __WEBPACK_IMPORTED_MODULE_5_react_reformed_lib_validateSchema___default.a(fields), __WEBPACK_IMPORTED_MODULE_8__components_form_index_jsx__["g" /* util */].submitted)(SupportForm);

var _ref3 = _jsx('h1', {}, void 0, 'Support form');

var _ref4 = _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'Some issues may be answered by our ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation'
}, void 0, 'documentation'), ' which you can find ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation'
}, void 0, 'here'), '. Please also check our ', _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
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
			return fetch('https://api.vision100it.org/support-request', {
				method: 'post',
				mode: 'cors',
				body: JSON.stringify(model),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).catch(this.handleOpen).then(this.handleOpen);
		}
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
				initialModel: { severity: '4' },
				onSubmit: this.handleSubmit
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

/* harmony default export */ __webpack_exports__["default"] = (Support);

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index_index_jsx__ = __webpack_require__(659);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
	className: 'site-wrapper site-wrapper-padding'
}, void 0, _jsx('h1', {}, void 0, 'Events and training'), _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'This is placeholder for our events pages and registration form.'))));

var Training = function Training() {
	return _ref;
};

/* harmony default export */ __webpack_exports__["default"] = (Training);

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_index_jsx__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_index_index_jsx__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_results_index_jsx__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_result_list_index_jsx__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_index_jsx__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_scss__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__error_scss__);
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
				searchResultList = _jsx(__WEBPACK_IMPORTED_MODULE_5__components_search_result_list_index_jsx__["a" /* default */], {
					searchResults: searchResults,
					onResultClick: this.handleCloseModal
				});
			}

			return _jsx(__WEBPACK_IMPORTED_MODULE_6__components_index_index_jsx__["a" /* default */], {}, void 0, _jsx('div', {
				className: 'podcasting-wrapper'
			}, void 0, _jsx('div', {
				className: 'podcasting-overlay'
			}, void 0, _jsx('div', {
				className: 'site-wrapper site-wrapper-padding'
			}, void 0, _ref, _ref2, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_7__error_scss___default.a.searchWrapper
			}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__components_search_index_jsx__["a" /* default */], {
				size: 'large',
				buttonClass: 'btn-primary',
				placeholder: 'Search V100IT...',
				onSearchSubmit: this.handleSearchSubmit
			}), _jsx(__WEBPACK_IMPORTED_MODULE_4__components_search_results_index_jsx__["a" /* default */], {
				titleClass: __WEBPACK_IMPORTED_MODULE_7__error_scss___default.a.title,
				containerClass: __WEBPACK_IMPORTED_MODULE_7__error_scss___default.a.searchResults,
				searchResults: this.state.searchResults,
				onCloseResults: this.handleCloseResult
			}, void 0, searchResultList))))));
		}
	}]);

	return Error;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_3__components_search_index_index_jsx__["a" /* default */](Error));

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group_CSSTransitionGroup__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_transition_group_CSSTransitionGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_index_jsx__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_bar_index_jsx__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_menu_index_jsx__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobile_menu_index_jsx__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_first_child__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Index_scss__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Index_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = {
			showSearch: false
		};
		_this.handleOpenSearch = _this.handleOpenSearch.bind(_this);
		_this.handleCloseSearch = _this.handleCloseSearch.bind(_this);
		return _this;
	}

	_createClass(Index, [{
		key: 'handleOpenSearch',
		value: function handleOpenSearch(event) {
			event.preventDefault();
			this.setState({ showSearch: true });
		}
	}, {
		key: 'handleCloseSearch',
		value: function handleCloseSearch() {
			this.setState({ showSearch: false });
		}
	}, {
		key: 'render',
		value: function render() {
			return _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_9__Index_scss___default.a.content
			}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__header_index_jsx__["a" /* default */], {
				size: this.props.headerSize
			}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__mobile_menu_index_jsx__["a" /* default */], {
				onOpenSearch: this.handleOpenSearch
			}), _jsx(__WEBPACK_IMPORTED_MODULE_5__main_menu_index_jsx__["a" /* default */], {
				menuItems: this.props.menuItems,
				onOpenSearch: this.handleOpenSearch
			})), this.props.children, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_transition_group_CSSTransitionGroup___default.a, {
				component: __WEBPACK_IMPORTED_MODULE_7__lib_first_child__["a" /* default */],
				transitionName: __WEBPACK_IMPORTED_MODULE_9__Index_scss___default.a,
				transitionEnterTimeout: 300,
				transitionLeaveTimeout: 300
			}, void 0, this.state.showSearch && _jsx(__WEBPACK_IMPORTED_MODULE_4__search_bar_index_jsx__["a" /* default */], {
				onClose: this.handleCloseSearch
			})));
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Index.defaultProps = {
	headerSize: 'full',
	menuItems: __WEBPACK_IMPORTED_MODULE_8__content__["a" /* default */].clientmenu.links
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_scss__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Button_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var Button = function Button(_ref) {
	var additionalClasses = _ref.additionalClasses,
	    appearance = _ref.appearance,
	    children = _ref.children,
	    buttonProps = _objectWithoutProperties(_ref, ['additionalClasses', 'appearance', 'children']);

	var buttonClasses = __WEBPACK_IMPORTED_MODULE_2__Button_scss___default.a[appearance] + ' ' + additionalClasses;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'button',
		_extends({ className: buttonClasses }, buttonProps),
		children
	);
};

Button.defaultProps = {
	additionalClasses: '',
	children: null
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"half":"input__half___1RDdf","full":"input__full___pIcTR"};

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaTimesCircle = function FaTimesCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
        )
    );
};

exports.default = FaTimesCircle;

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _hoistNonReactStatics = __webpack_require__(255);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getComponentName = __webpack_require__(695);

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var makeWrapper = function makeWrapper(middleware) {
  return function (WrappedComponent) {
    var FormWrapper = function (_React$Component) {
      _inherits(FormWrapper, _React$Component);

      function FormWrapper(props, ctx) {
        _classCallCheck(this, FormWrapper);

        var _this = _possibleConstructorReturn(this, (FormWrapper.__proto__ || Object.getPrototypeOf(FormWrapper)).call(this, props, ctx));

        _this.setModel = function (model) {
          _this.setState({ model: model });
          return model;
        };

        _this.setProperty = function (prop, value) {
          return _this.setModel((0, _objectAssign2.default)({}, _this.state.model, _defineProperty({}, prop, value)));
        };

        _this.bindToChangeEvent = function (e) {
          var _e$target = e.target,
              name = _e$target.name,
              type = _e$target.type,
              value = _e$target.value;


          if (type === 'checkbox') {
            var oldCheckboxValue = _this.state.model[name] || [];
            var newCheckboxValue = e.target.checked ? oldCheckboxValue.concat(value) : oldCheckboxValue.filter(function (v) {
              return v !== value;
            });

            _this.setProperty(name, newCheckboxValue);
          } else {
            _this.setProperty(name, value);
          }
        };

        _this.bindInput = function (name) {
          return {
            name: name,
            value: _this.state.model[name] || '',
            onChange: _this.bindToChangeEvent
          };
        };

        _this.state = {
          model: props.initialModel || {}
        };
        return _this;
      }

      // This, of course, does not handle all possible inputs. In such cases,
      // you should just use `setProperty` or `setModel`. Or, better yet,
      // extend `reformed` to supply the bindings that match your needs.


      _createClass(FormWrapper, [{
        key: 'render',
        value: function render() {
          var nextProps = (0, _objectAssign2.default)({}, this.props, {
            bindInput: this.bindInput,
            bindToChangeEvent: this.bindToChangeEvent,
            model: this.state.model,
            setProperty: this.setProperty,
            setModel: this.setModel
          });
          // SIDE EFFECT-ABLE. Just for developer convenience and expirementation.
          var finalProps = typeof middleware === 'function' ? middleware(nextProps) : nextProps;

          return _react2.default.createElement(WrappedComponent, finalProps);
        }
      }]);

      return FormWrapper;
    }(_react2.default.Component);

    FormWrapper.propTypes = {
      initialModel: _propTypes2.default.object
    };


    FormWrapper.displayName = 'Reformed(' + (0, _getComponentName2.default)(WrappedComponent) + ')';
    return (0, _hoistNonReactStatics2.default)(FormWrapper, WrappedComponent);
  };
};

exports.default = makeWrapper;

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function compose() {
  for (var _len = arguments.length, _fns = Array(_len), _key = 0; _key < _len; _key++) {
    _fns[_key] = arguments[_key];
  }

  return function () {
    var _fns$reverse = _fns.reverse(),
        _fns$reverse2 = _toArray(_fns$reverse),
        fn = _fns$reverse2[0],
        fns = _fns$reverse2.slice(1);

    return fns.reduce(function (acc, f) {
      return f(acc);
    }, fn.apply(undefined, arguments));
  };
}

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _hoistNonReactStatics = __webpack_require__(255);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getComponentName = __webpack_require__(695);

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getValidationErrors = function getValidationErrors(schema, model) {
  return Object.keys(schema).reduce(function (acc, key) {
    var errors = [];
    var value = model[key];
    var rules = schema[key];

    var renderError = function renderError(condition, fallback) {
      return typeof rules.formatError === 'function' ? rules.formatError({ key: key, value: value, condition: condition, rules: rules, schema: schema, model: model }) : fallback;
    };

    if (rules.required && !value) {
      errors.push(renderError('required', key + ' is required'));
    }
    if (rules.type && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rules.type) {
      errors.push(renderError('type', key + ' must be of type ' + rules.type + ', but got ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value))));
    }
    if (rules.minLength) {
      if (!value || value.length < rules.minLength) {
        errors.push(renderError('minLength', key + ' must have at least ' + rules.minLength + ' characters'));
      }
    }
    if (rules.maxLength) {
      if (value && value.length > rules.maxLength) {
        errors.push(renderError('maxLength', key + ' must not have more than ' + rules.maxLength + ' characters'));
      }
    }
    if (rules.test) {
      var error = void 0;
      rules.test(value, function (msg) {
        error = msg;
      });
      if (error) {
        errors.push(error);
      }
    }

    return (0, _objectAssign2.default)({}, acc, {
      isValid: !errors.length && acc.isValid,
      fields: (0, _objectAssign2.default)({}, acc.fields, _defineProperty({}, key, {
        isValid: !errors.length,
        errors: errors
      }))
    });
  }, { isValid: true, fields: {} });
};

var validateSchema = function validateSchema(schema) {
  return function (WrappedComponent) {
    var validated = function validated(props) {
      var validationErrors = getValidationErrors(schema, props.model);

      return _react2.default.createElement(WrappedComponent, (0, _objectAssign2.default)({}, props, {
        schema: validationErrors
      }));
    };
    validated.displayName = 'ValidateSchema(' + (0, _getComponentName2.default)(WrappedComponent) + ')';
    return (0, _hoistNonReactStatics2.default)(validated, WrappedComponent);
  };
};

exports.default = validateSchema;

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_gateway__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_gateway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_gateway__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal2__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_circle__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_circle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_circle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_times_circle__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_fa_times_circle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_times_circle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_index_jsx__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_scss__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__popover_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5_react_icons_fa_times_circle___default.a, {
	height: '2em',
	width: '2em'
});

var Popover = function (_React$Component) {
	_inherits(Popover, _React$Component);

	function Popover() {
		_classCallCheck(this, Popover);

		return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
	}

	_createClass(Popover, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    onClose = _props.onClose,
			    closeOnEsc = _props.closeOnEsc,
			    closeOnBackdropClick = _props.closeOnBackdropClick,
			    children = _props.children;

			return _jsx(__WEBPACK_IMPORTED_MODULE_2_react_gateway__["Gateway"], {
				into: 'modal'
			}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__button_index_jsx__["a" /* default */], {
				appearance: 'blank',
				additionalClasses: __WEBPACK_IMPORTED_MODULE_7__popover_scss___default.a.close,
				onClick: onClose
			}, void 0, _jsx('span', {
				className: __WEBPACK_IMPORTED_MODULE_7__popover_scss___default.a.stack
			}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_circle___default.a, {
				className: __WEBPACK_IMPORTED_MODULE_7__popover_scss___default.a.white,
				height: '2em',
				width: '2em'
			}), _ref)), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_modal2___default.a, {
				closeOnEsc: closeOnEsc,
				closeOnBackdropClick: closeOnBackdropClick,
				backdropClassName: __WEBPACK_IMPORTED_MODULE_7__popover_scss___default.a.backdrop,
				modalClassName: __WEBPACK_IMPORTED_MODULE_7__popover_scss___default.a.modal,
				onClose: onClose
			}, void 0, children)));
		}
	}]);

	return Popover;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Popover.defaultProps = {
	closeOnEsc: true,
	closeOnBackdropClick: true
};

/* harmony default export */ __webpack_exports__["a"] = (Popover);

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_jsx__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_email_jsx__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_radio_jsx__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_select_jsx__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_text_area_jsx__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_text_jsx__ = __webpack_require__(754);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__form_jsx__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__input_email_jsx__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__input_radio_jsx__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__input_select_jsx__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__input_text_area_jsx__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__input_text_jsx__["a"]; });










/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaSearch = function FaSearch(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm27.2 18.6q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1 2.9 7 7.1 3 7.1-3 2.9-7z m11.4 18.5q0 1.2-0.8 2.1t-2 0.8q-1.2 0-2-0.8l-7.7-7.7q-4 2.8-8.9 2.8-3.2 0-6.1-1.3t-5-3.3-3.4-5-1.2-6.1 1.2-6.1 3.4-5.1 5-3.3 6.1-1.2 6.1 1.2 5 3.3 3.4 5.1 1.2 6.1q0 4.9-2.7 8.9l7.6 7.6q0.8 0.9 0.8 2z' })
        )
    );
};

exports.default = FaSearch;

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lunr__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lunr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lunr__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var searchIndex = function searchIndex(WrappedComponent) {
	var SearchIndexWrapper = function (_React$Component) {
		_inherits(SearchIndexWrapper, _React$Component);

		function SearchIndexWrapper() {
			_classCallCheck(this, SearchIndexWrapper);

			var _this = _possibleConstructorReturn(this, (SearchIndexWrapper.__proto__ || Object.getPrototypeOf(SearchIndexWrapper)).call(this));

			_this.searchIndex = _this.searchIndex.bind(_this);
			return _this;
		}

		_createClass(SearchIndexWrapper, [{
			key: 'searchIndex',
			value: function searchIndex(searchTerm, slice) {
				return this.index.then(function (_ref) {
					var index = _ref.index,
					    data = _ref.data;

					var res = index.search(searchTerm);

					var searchResults = res.map(function (result) {
						return data.items.find(function (item) {
							return item.id === result.ref;
						});
					}).map(function (result) {
						// HACK HACK HACK
						var id = result.id,
						    all = _objectWithoutProperties(result, ['id']);

						return _extends({ id: id.replace('content/', '') }, all);
					});

					if (slice) {
						searchResults = searchResults.slice(0, slice);
					}

					if (searchResults.length === 0) {
						searchResults.push({
							id: '#',
							title: 'No results found'
						});
					}

					return searchResults;
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({}, this.props, {
					searchIndex: this.searchIndex
				}));
			}
		}, {
			key: 'index',
			get: function get() {
				return new Promise(function (resolve) {
					if (self.__searchIndex) {
						resolve({
							index: self.__searchIndex,
							data: self.__searchData
						});
					} else {
						__webpack_require__.e/* require.ensure */(2).then((function () {
							self.__searchIndex = __WEBPACK_IMPORTED_MODULE_1_lunr___default.a.Index.load(__webpack_require__(873));
							self.__searchData = __webpack_require__(874);

							resolve({
								index: self.__searchIndex,
								data: self.__searchData
							});
						}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
					}
				});
			}
		}]);

		return SearchIndexWrapper;
	}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

	return SearchIndexWrapper;
};

/* harmony default export */ __webpack_exports__["a"] = (searchIndex);

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = _jsx('label', {
	className: 'sr-only',
	htmlFor: 'search'
}, void 0, 'Search');

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search() {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

		_this.setSearchInputRef = _this.setSearchInputRef.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(Search, [{
		key: 'setSearchInputRef',
		value: function setSearchInputRef(ref) {
			this._searchInputRef = ref;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window.matchMedia('(min-width: 992px)').matches) {
				this.searchInputRef.focus();
			}
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();
			this.searchInputRef.blur();
			this.props.onSearchSubmit(this.searchInputRef.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    inputButton = _props.inputButton,
			    size = _props.size,
			    placeholder = _props.placeholder;


			var inputGroup = __WEBPACK_IMPORTED_MODULE_2_classnames___default.a({
				'input-group': inputButton,
				'input-group-lg': inputButton && size === 'large'
			});

			var inputClass = __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(this.props.inputClass, {
				'input-lg': !inputButton && size === 'large'
			});

			return _jsx('form', {
				onSubmit: this.handleSubmit
			}, void 0, _jsx('div', {
				className: inputGroup
			}, void 0, _ref, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
				ref: this.setSearchInputRef,
				type: 'search',
				name: 'search',
				className: 'form-control ' + inputClass,
				placeholder: placeholder
			}), inputButton));
		}
	}, {
		key: 'searchInputRef',
		get: function get() {
			return this._searchInputRef;
		}
	}]);

	return Search;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Search.defaultProps = {
	inputButton: null,
	inputClass: '',
	placeholder: 'Search...'
};

/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_height__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_height___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_height__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_index_jsx__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SearchResults_scss__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SearchResults_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__SearchResults_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle___default.a, {});

var SearchResults = function SearchResults(_ref) {
	var onCloseResults = _ref.onCloseResults,
	    containerClass = _ref.containerClass,
	    children = _ref.children,
	    titleClass = _ref.titleClass,
	    query = _ref.query;

	return _jsx('div', {
		className: containerClass
	}, void 0, _jsx('div', {
		className: titleClass
	}, void 0, _jsx('h3', {}, void 0, 'Results', _jsx('span', {
		style: { float: 'right' }
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__button_index_jsx__["a" /* default */], {
		appearance: 'blank',
		onClick: onCloseResults
	}, void 0, _ref2)))), children, query && _jsx('div', {
		className: 'small ' + __WEBPACK_IMPORTED_MODULE_6__SearchResults_scss___default.a.nav
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
		to: '/documentation?search=' + query
	}, void 0, 'more')));
};

SearchResults.defaultProps = {
	onResultClick: function onResultClick() {},
	containerClass: '',
	children: null,
	query: null
};

var withHeight = function withHeight(WrappedComponent) {
	var HeightContainer = function (_React$Component) {
		_inherits(HeightContainer, _React$Component);

		function HeightContainer() {
			_classCallCheck(this, HeightContainer);

			var _this = _possibleConstructorReturn(this, (HeightContainer.__proto__ || Object.getPrototypeOf(HeightContainer)).call(this));

			_this.state = {
				height: 0
			};

			_this.handleHeight = _this.handleHeight.bind(_this);
			return _this;
		}

		_createClass(HeightContainer, [{
			key: 'handleHeight',
			value: function handleHeight(height) {
				this.setState({ height: height });
			}
		}, {
			key: 'render',
			value: function render() {
				var height = this.state.height;


				if (!this.props.children) {
					height = 0;
				}

				return _jsx('div', {
					className: __WEBPACK_IMPORTED_MODULE_6__SearchResults_scss___default.a.container,
					style: { height: height }
				}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_height___default.a, {
					onHeightReady: this.handleHeight
				}, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, this.props)));
			}
		}]);

		return HeightContainer;
	}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

	HeightContainer.defaultProps = {
		children: null
	};

	return HeightContainer;
};

/* harmony default export */ __webpack_exports__["a"] = (withHeight(SearchResults));

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchResultList_scss__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchResultList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SearchResultList_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var SearchResultList = function SearchResultList(_ref) {
	var onResultClick = _ref.onResultClick,
	    searchResults = _ref.searchResults;

	var results = searchResults.map(function (item) {
		return _jsx('li', {}, item.id, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
			to: '/' + item.id,
			onClick: onResultClick
		}, void 0, item.title));
	});

	return _jsx('div', {
		className: __WEBPACK_IMPORTED_MODULE_3__SearchResultList_scss___default.a.content
	}, void 0, _jsx('ul', {
		className: __WEBPACK_IMPORTED_MODULE_3__SearchResultList_scss___default.a.results
	}, void 0, results));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchResultList);

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getComponentName = function getComponentName(component) {
  return component.displayName || component.name;
};

exports.default = getComponentName;

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(716),
    isObject = __webpack_require__(688);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExMC4yOTMiCiAgIGhlaWdodD0iNzAuOTI5MDAxIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idmlzaW9uMTAwLWl0LWxvZ28uc3ZnIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczEwIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MDUiCiAgICAgaWQ9Im5hbWVkdmlldzgiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOnpvb209IjEuOTg1NTYyOCIKICAgICBpbmtzY2FwZTpjeD0iLTMyLjA5NjUzMyIKICAgICBpbmtzY2FwZTpjeT0iMzYuMDQ2NDk4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyMzkiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjExOTIiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPgogIDxwYXRoCiAgICAgZD0ibSAwLDAuNDM0IDYuNDI0LDAgNC4yODUsMjIuOTM3IDQuNDQsLTIyLjkzNyA1LjI1LDAgTCAxMy41NTgsMzAuNjcyIDYuNjk4LDMwLjUxOSAwLjAwMiwwLjQzNCBaIG0gMjIuOTI4LDAgNi4xMjUsMCAwLDMwLjA4NSAtNi4xMjUsMCAwLC0zMC4wODUgeiBtIDI3Ljk0NCw2LjU0NSAtNS4wNjMsMi4wOTUgYyAtMC43MiwtMi40ODMgLTIuMDQsLTMuNzI1IC0zLjk2LC0zLjcyNSAtMC44OSwwIC0xLjYsMC4yNzUgLTIuMTMsMC44MjYgLTAuNTIsMC41NSAtMC43OCwxLjE5NSAtMC43OCwxLjkyOCAwLDAuODU0IDAuMzEsMS41MzQgMC45MywyLjA0IDAuNjIsMC41MDcgMS45MiwxLjE3MiAzLjg5LDEuOTkzIDEuOCwwLjcyMiAzLjIxLDEuNDM1IDQuMjQsMi4xNCAxLjAzLDAuNzA0IDEuODYsMS42NjQgMi40OSwyLjg3NSAwLjY0LDEuMjE0IDAuOTUsMi42MiAwLjk1LDQuMjIgMCwyLjgxIC0wLjg5LDUuMTEgLTIuNjgsNi45MSAtMS43OSwxLjggLTQuMTksMi43IC03LjE5LDIuNyAtNS4wNSwwIC04LjI3MywtMi43NTUgLTkuNjgsLTguMjY1IGwgNS4zNSwtMS42NTIgYyAwLjY1LDMuMDI2IDIuMTQsNC41NCA0LjQ3LDQuNTQgMS4wNiwwIDEuOTIsLTAuMjk3IDIuNTgsLTAuODk0IDAuNjYsLTAuNTkgMC45OSwtMS4zNyAwLjk5LC0yLjM0IDAsLTAuNzMgLTAuMjMsLTEuMzkgLTAuNjksLTEuOTcgQyA0NC4xMjYsMTkuODIgNDMuMDY2LDE5LjIxIDQxLjQwNCwxOC41NiAzOS4yNywxNy43NCAzNy42NzgsMTcgMzYuNjMsMTYuMzMgYyAtMS4wNSwtMC42NyAtMS45MSwtMS42MiAtMi41OTQsLTIuODYgLTAuNjgsLTEuMjQgLTEuMDIsLTIuNjUgLTEuMDIsLTQuMjQgMCwtMi43IDAuODA3LC00LjkyIDIuNDE4LC02LjY0IEMgMzcuMDQ4LDAuODYgMzkuMTgxLDAgNDEuODM0LDAgNDYuNjc5LDAgNDkuNzAyLDIuMzM2IDUwLjksNy4wMSBaIG0gNC4zMjgsLTYuNTQ1IDYuMTI0LDAgMCwzMC4wODUgLTYuMTI0LDAgMCwtMzAuMDg1IHogbSAzMC42MTYsMTUuMTA4IGMgMCwxMC4zNDUgLTMuMzcsMTUuNTE3IC0xMC4xMDQsMTUuNTE3IC0zLjM1LDAgLTUuODcyLC0xLjMyIC03LjU3NCwtMy45NTggLTEuNywtMi42MzUgLTIuNTUyLC02LjQ4NyAtMi41NTIsLTExLjU2IDAsLTEwLjMyOCAzLjM2OCwtMTUuNDkzIDEwLjEwNSwtMTUuNDkzIDMuMjkzLDAgNS44MDUsMS4yOSA3LjUzLDMuODggMS43MzIsMi41OCAyLjU5NSw2LjQ1IDIuNTk1LDExLjYxIHogbSAtNi40NSwwIGMgMCwtNC4wNTQgLTAuMjkyLC02Ljc1NiAtMC44NzgsLTguMSAtMC41ODQsLTEuMzQ0IC0xLjUxOCwtMi4wMTYgLTIuNzk3LC0yLjAxNiAtMS4yNjgsMCAtMi4xOSwwLjY3NiAtMi43NzYsMi4wMjcgLTAuNTg0LDEuMzUyIC0wLjg4LDQuMDQ4IC0wLjg4LDguMDg4IDAsMy45NyAwLjI5Miw2LjY0NyAwLjg3LDguMDQ1IDAuNTgsMS4zOTcgMS41MDcsMi4wOTIgMi43ODYsMi4wOTIgMS4yNjYsMCAyLjE5NSwtMC42NyAyLjc4OCwtMi4wMSAwLjU5LC0xLjM0IDAuODksLTQuMDUgMC44OSwtOC4xNCB6IG0gMTAuNDk3LC0xNS4xMDggNi44LDAgNy4xNiwxOC42OSAwLC0xOC42OSA0Ljc0LDAgMCwzMC4wODUgLTUuNDcyLDAgLTguNDkzLC0yMS43NzUgMCwyMS43NzUgLTQuNzM1LDAgMCwtMzAuMDg1IHogbSAtNzguNTUyLDM0LjY1NSA0Ljg1LDAgMCwyNC40MzggNC43ODYsMCAwLDQuNzI0IC0xNi4wMTksMCAwLC00LjcyNCA0Ljg3LDAgMCwtMTcuMDcgYyAtMS40NCwxLjQ5NyAtMy4wNjIsMi43MDQgLTQuODcsMy42MjIgbCAwLC01LjY1NSBjIDIuNTg0LC0xLjM1NCA0LjcwOCwtMy4xMzUgNi4zNzUsLTUuMzM1IHogbSAzMC40MzUsMTQuMzU3IGMgMCw1LjIyNSAtMC43NTIsOS4wNzIgLTIuMjU3LDExLjU0NCAtMS41LDIuNDggLTMuOTcsMy43MSAtNy40LDMuNzEgLTMuNTQsMCAtNi4wNCwtMS4yOCAtNy40OCwtMy44NCAtMS40NCwtMi41NiAtMi4xNywtNi4xMiAtMi4xNywtMTAuNjggMCwtNS4yNSAwLjc1LC05LjExIDIuMjYsLTExLjU3IDEuNTEsLTIuNDYgMy45NywtMy42OSA3LjQsLTMuNjkgMy41NSwwIDYuMDQsMS4yOCA3LjQ5LDMuODQ4IDEuNDUsMi41NjggMi4xNyw2LjEzIDIuMTcsMTAuNzA1IHogbSAtNi42OTMsMC4zNSBjIDAsLTQuMzggLTAuMiwtNy4xOSAtMC41OTYsLTguNDI4IC0wLjQsLTEuMjQgLTEuMTksLTEuODYgLTIuMzYsLTEuODYgLTEuMDcsMCAtMS44MywwLjUyIC0yLjI5LDEuNTYgLTAuNDYsMS4wNCAtMC42OSwzLjk1IC0wLjY5LDguNzEgMCw0LjcxIDAuMjIsNy42IDAuNjcsOC42NyAwLjQ0LDEuMDcgMS4yMSwxLjYxIDIuMywxLjYxIDEuMDUsMCAxLjgsLTAuNTEgMi4yNiwtMS41MiAwLjQ2LC0xLjAxIDAuNjksLTMuOTMgMC42OSwtOC43NyB6IG0gMjguMjMsLTAuMzUgYyAwLDUuMjI1IC0wLjc1Miw5LjA3MiAtMi4yNTUsMTEuNTQ0IC0xLjUwNSwyLjQ4IC0zLjk3LDMuNzEgLTcuNDAyLDMuNzEgLTMuNTQ0LDAgLTYuMDQsLTEuMjggLTcuNDg3LC0zLjg0IC0xLjQ0LC0yLjU2IC0yLjE3LC02LjEyIC0yLjE3LC0xMC42OCAwLC01LjI1IDAuNzYsLTkuMTEgMi4yNiwtMTEuNTcgMS41MSwtMi40NiAzLjk3LC0zLjY5IDcuNCwtMy42OSAzLjU1LDAgNi4wNCwxLjI4IDcuNDksMy44NDggMS40NSwyLjU2MyAyLjE3LDYuMTMgMi4xNywxMC43MDUgeiBtIC02LjY5MiwwLjM1IGMgMCwtNC4zOCAtMC4xOTgsLTcuMTkgLTAuNTk1LC04LjQyOCAtMC4zOTcsLTEuMjQgLTEuMTg0LC0xLjg2IC0yLjM1OCwtMS44NiAtMS4wNjIsMCAtMS44MjYsMC41MiAtMi4yODUsMS41NiAtMC40NjIsMS4wNCAtMC42OSwzLjk1IC0wLjY5LDguNzEgMCw0LjcxIDAuMjIzLDcuNiAwLjY2OCw4LjY3IDAuNDQ2LDEuMDcgMS4yMTUsMS42MSAyLjMwOCwxLjYxIDEuMDUsMCAxLjgxLC0wLjUxIDIuMjcsLTEuNTIgMC40NiwtMS4wMSAwLjY5LC0zLjkzIDAuNjksLTguNzcgeiIKICAgICBpZD0icGF0aDQiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0iZmlsbDojZWYzYjI0IiAvPgogIDxwYXRoCiAgICAgZD0ibSAxMDguMjk4LDQwLjAwNSAwLDAuNjYgLTYuMDEsMCAwLDIzLjg5IC02LjQ1OCwwIDAsLTIzLjg5IC01Ljg2LDAgMCwtNS41MTMgMTUuMjMyLDAgYyAtNC4xNSwtNC45MyAtMTAuNDcsLTguMDc3IC0xNy41NDcsLTguMDc3IC0xMi41MDIsMCAtMjIuNjM3LDkuODE4IC0yMi42MzcsMjEuOTI4IDAsMTIuMTEgMTAuMTM1LDIxLjkyNiAyMi42MzcsMjEuOTI2IDEyLjUwMiwwIDIyLjYzOCwtOS44MTYgMjIuNjM4LC0yMS45MjYgMCwtMy4yMDggLTAuNzE3LC02LjI1MiAtMS45OTUsLTguOTk4IHogbSAtMjQuNDk0LDI0LjU1IC02LjQ2MiwwIDAsLTI5LjQwMyA2LjQ2MiwwIDAsMjkuNCB6IG0gOC42OTgsMCAtNi4wMSwwIDAsLTYuNTA2IDYuMDEsMCAwLDYuNTA0IHoiCiAgICAgaWQ9InBhdGg2IgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgc3R5bGU9ImZpbGw6I2VmM2IyNCIgLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collapse_scss__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collapse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Collapse_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Collapse = function Collapse(props) {
	var collapseClass = __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(__WEBPACK_IMPORTED_MODULE_3__Collapse_scss___default.a.toggle, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__Collapse_scss___default.a.visible, props.isOpened));

	return _jsx('div', {
		className: collapseClass
	}, void 0, props.children);
};

Collapse.defaultProps = {
	children: null
};

/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(706);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(709);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(687);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  false ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(707);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(47);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(708);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         false ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  false ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 707:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(3);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(710);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(712);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(713);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(714);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(169);

var _PropTypes = __webpack_require__(687);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  false ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(711);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(686);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(686);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_throttle__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_vision100_it_logo_svg__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_vision100_it_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_vision100_it_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_scss__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Header_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/'
}, void 0, _jsx('h1', {
	className: 'sr-only'
}, void 0, 'Vision 100 IT'), _jsx('img', {
	className: 'img-responsive',
	src: __WEBPACK_IMPORTED_MODULE_4__images_vision100_it_logo_svg___default.a
}));

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.handleScroll = __WEBPACK_IMPORTED_MODULE_3_lodash_throttle___default.a(_this.handleScroll.bind(_this), 250);
		_this.backgroundHeight = _this.backgroundHeight.bind(_this);
		_this.state = _this.nextState();
		return _this;
	}

	_createClass(Header, [{
		key: 'backgroundHeight',
		value: function backgroundHeight() {
			if (this.props.size === 'full') {
				return window.pageYOffset > window.innerHeight - 80 ? 1 : 0;
			}
			if (this.props.size === 'mini') {
				return window.pageYOffset > window.innerHeight / 4 - 80 ? 1 : 0;
			}
			return 1;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'nextState',
		value: function nextState() {
			return {
				backgroundColor: 'rgba(255,255,255, ' + this.backgroundHeight() + ')',
				boxShadow: '0 2px 5px rgba(0,0,0, ' + this.backgroundHeight() * 0.26 + ')',
				padding: '' + this.paddingHeight
			};
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {
			this.setState(this.nextState());
		}
	}, {
		key: 'render',
		value: function render() {
			var scrollStyle = {
				backgroundColor: this.state.backgroundColor,
				boxShadow: this.state.boxShadow
			};

			var logoStyle = {
				paddingLeft: this.state.padding,
				paddingRight: this.state.padding
			};

			return _jsx('header', {
				className: __WEBPACK_IMPORTED_MODULE_5__Header_scss___default.a.nav,
				style: scrollStyle
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_5__Header_scss___default.a.logo,
				style: logoStyle
			}, void 0, _ref), this.props.children);
		}
	}, {
		key: 'paddingHeight',
		get: function get() {
			if (this.props.size === 'full') {
				return window.pageYOffset > window.innerHeight / 2 ? '5%' : '10px';
			}
			if (this.props.size === 'mini') {
				return window.pageYOffset > window.innerHeight / 4 ? '5%' : '10px';
			}
			return '5%';
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(688),
    now = __webpack_require__(717),
    toNumber = __webpack_require__(720);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(718);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(719);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 721:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"Header__nav___3jI7E","mini":"Header__mini___1agoZ","logo":"Header__logo___1oDyD"};

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_search__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_fa_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_index_jsx__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_index_index_jsx__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_index_jsx__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_results_index_jsx__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_result_list_index_jsx__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__SearchBar_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var ESCAPE = 27;

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3_react_icons_fa_search___default.a, {
	height: '1.5em',
	width: '1.5em'
});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_times_circle___default.a, {});

var _ref3 = _jsx('ul', {
	className: 'list-unstyled'
}, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/client'
}, void 0, 'News')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/support'
}, void 0, 'Support')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/status'
}, void 0, 'Status')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/documentation'
}, void 0, 'Documentation')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
	to: '/contact'
}, void 0, 'Contact')));

var _ref4 = _jsx('p', {}, void 0, '\xA9 Vision 100 Resources 2016.');

var _ref5 = _jsx('p', {}, void 0, 'Design by ', _jsx('a', {
	href: 'https://twitter.com/readeral'
}, void 0, 'readeral'), ' and ', _jsx('a', {
	href: 'https://twitter.com/barrythepenguin'
}, void 0, 'barrythepenguin'), '.');

var _ref6 = _jsx('p', {}, void 0, _jsx('a', {
	href: 'mailto:info@vision100.org'
}, void 0, 'info@vision100.org'), '.');

var _ref7 = _jsx('p', {}, void 0, 'ABN: 50 782 030 539.');

var SearchBar = function (_React$Component) {
	_inherits(SearchBar, _React$Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

		_this.state = {
			searchResults: [],
			searchTerm: ''
		};
		_this.handleSearchSubmit = _this.handleSearchSubmit.bind(_this);
		_this.handleCloseResults = _this.handleCloseResults.bind(_this);
		_this.handleCloseModal = _this.handleCloseModal.bind(_this);
		_this.handleEscKey = _this.handleEscKey.bind(_this);
		return _this;
	}

	_createClass(SearchBar, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('keydown', this.handleEscKey, false);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('keydown', this.handleEscKey, false);
		}
	}, {
		key: 'handleSearchSubmit',
		value: function handleSearchSubmit(searchTerm) {
			var _this2 = this;

			this.props.searchIndex(searchTerm, 3).then(function (searchResults) {
				return _this2.setState({ searchTerm: searchTerm, searchResults: searchResults });
			});
		}
	}, {
		key: 'handleCloseResults',
		value: function handleCloseResults(event) {
			event.preventDefault();
			this.setState({
				searchResults: [],
				searchTerm: ''
			});
		}
	}, {
		key: 'handleCloseModal',
		value: function handleCloseModal(event) {
			this.setState({
				searchResults: [],
				searchTerm: ''
			});
			this.props.onClose(event);
		}
	}, {
		key: 'handleEscKey',
		value: function handleEscKey(event) {
			if (event.keyCode === ESCAPE) {
				this.handleCloseModal(event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var searchResultList = void 0;
			var _state = this.state,
			    searchResults = _state.searchResults,
			    searchTerm = _state.searchTerm;


			if (searchResults.length > 0) {
				searchResultList = _jsx(__WEBPACK_IMPORTED_MODULE_9__search_result_list_index_jsx__["a" /* default */], {
					searchResults: searchResults,
					onResultClick: this.handleCloseModal
				});
			}

			var inputButton = _jsx('span', {
				className: 'input-group-btn ' + __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.searchInput
			}, void 0, _jsx('button', {
				className: 'btn ' + __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.searchButton,
				type: 'submit'
			}, void 0, _ref));

			return _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.overlay
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.container
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.title
			}, void 0, _jsx('h2', {}, void 0, 'Search menu', _jsx(__WEBPACK_IMPORTED_MODULE_5__button_index_jsx__["a" /* default */], {
				appearance: 'blank',
				additionalClasses: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.close,
				onClick: this.handleCloseModal
			}, void 0, _ref2))), _jsx(__WEBPACK_IMPORTED_MODULE_7__search_index_jsx__["a" /* default */], {
				inputClass: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.searchInput,
				inputButton: inputButton,
				onSearchSubmit: this.handleSearchSubmit
			})), _jsx(__WEBPACK_IMPORTED_MODULE_8__search_results_index_jsx__["a" /* default */], {
				containerClass: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.results,
				titleClass: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.title,
				query: searchTerm,
				onCloseResults: this.handleCloseResults
			}, void 0, searchResultList), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.container
			}, void 0, _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.menu
			}, void 0, _ref3), _jsx('div', {
				className: __WEBPACK_IMPORTED_MODULE_10__SearchBar_scss___default.a.postscript
			}, void 0, _ref4, _ref5, _ref6, _ref7)));
		}
	}]);

	return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6__search_index_index_jsx__["a" /* default */](SearchBar));

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"blank":"Button__blank___QIGC-"};

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.1.0
 * Copyright (C) 2017 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.1.0"
/*!
 * lunr.utils
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf Utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}
lunr.FieldRef = function (docRef, fieldName) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = fieldName + lunr.FieldRef.joiner + docRef
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef)
}

lunr.FieldRef.prototype.toString = function () {
  return this._stringValue
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @returns {lunr.Token[]}
 */
lunr.tokenizer = function (obj) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(lunr.utils.asString(t).toLowerCase())
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        tokens.push(
          new lunr.Token (str.slice(sliceStart, sliceEnd), {
            position: [sliceStart, sliceLength],
            index: tokens.length
          })
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]

    tokens = tokens.reduce(function (memo, token, j) {
      var result = fn(token, j, tokens)

      if (result === void 0 || result === '') return memo

      return memo.concat(result)
    }, [])
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str) {
  var token = new lunr.Token (str)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the cosine similarity between this vector and another
 * vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2017 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      } else {
        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        })
      }
    }

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var char = frame.str.charAt(1),
          deletionNode

      if (char in frame.node.edges) {
        deletionNode = frame.node.edges[char]
      } else {
        deletionNode = new lunr.TokenSet
        frame.node.edges[char] = deletionNode
      }

      if (frame.str.length <= 2) {
        deletionNode.final = true
      } else {
        stack.push({
          node: deletionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(2)
        })
      }
    }

    // deletion
    // just removing the last character from the str
    if (frame.editsRemaining > 0 && frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.editsRemaining > 0 && frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      } else {
        stack.push({
          node: substitutionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(1)
        })
      }
    }

    // insertion
    // can only do insertion if there are edits remaining
    if (frame.editsRemaining > 0) {
      if ("*" in frame.node.edges) {
        var insertionNode = frame.node.edges["*"]
      } else {
        var insertionNode = new lunr.TokenSet
        frame.node.edges["*"] = insertionNode
      }

      if (frame.str.length == 0) {
        insertionNode.final = true
      } else {
        stack.push({
          node: insertionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str
        })
      }
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      } else {
        stack.push({
          node: transposeNode,
          editsRemaining: frame.editsRemaining - 1,
          str: charA + frame.str.slice(2)
        })
      }
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node,
      wildcardFound = false

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * As soon as a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      wildcardFound = true
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next

      // TODO: is this needed anymore?
      if (wildcardFound) {
        node.edges["*"] = root
      }
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.documentVectors - Document vectors keyed by document reference.
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null)

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term)
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting)

          /*
           * To support field level boosts a query vector is created per
           * field. This vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           *
           * If the query vector for this field does not exist yet it needs
           * to be created.
           */
          if (!(field in queryVectors)) {
            queryVectors[field] = new lunr.Vector
          }

          /*
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, 1 * clause.boost, function (a, b) { return a + b })

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                documentMetadata, matchData

            documentMetadata = fieldPosting[matchingDocumentRef]
            matchData = new lunr.MatchData (expandedTerm, field, documentMetadata)

            if (matchingFieldRef in matchingFields) {
              matchingFields[matchingFieldRef].combine(matchData)
            } else {
              matchingFields[matchingFieldRef] = matchData
            }

          }
        }
      }
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = {}

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef,
        fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector)

    if (docRef in results) {
      results[docRef].score += score
      results[docRef].matchData.combine(matchingFields[fieldRef])
    } else {
      results[docRef] = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
    }
  }

  /*
   * The results object needs to be converted into a list
   * of results, sorted by score before being returned.
   */
  return Object.keys(results)
    .map(function (key) {
      return results[key]
    })
    .sort(function (a, b) {
      return b.score - a.score
    })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = {},
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = []
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * @param {string} field - The name of a field to index in all documents.
 */
lunr.Builder.prototype.field = function (field) {
  this._fields.push(field)
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * @param {object} doc - The document to add to the index.
 */
lunr.Builder.prototype.add = function (doc) {
  var docRef = doc[this._ref]

  this.documentCount += 1

  for (var i = 0; i < this._fields.length; i++) {
    var fieldName = this._fields[i],
        field = doc[fieldName],
        tokens = this.tokenizer(field),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = {}

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < this._fields.length; k++) {
          posting[this._fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  for (var i = 0; i < this._fields.length; i++) {
    var field = this._fields[i]
    accumulator[field] = accumulator[field] / documentsWithField[field]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf = lunr.idf(this.invertedIndex[term], this.documentCount),
          score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[field])) + tf),
          scoreWithPrecision = Math.round(score * 1000) / 1000
          // Converts 1.23456789 to 1.234.
          // Reducing the precision so that the vectors take up less
          // space when serialised. Doing it now so that they behave
          // the same before and after serialisation. Also, this is
          // the fastest approach to reducing a number's precision in
          // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @private
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: this._fields,
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @property {object} metadata - A collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  this.metadata = {}
  this.metadata[term] = {}
  this.metadata[term][field] = metadata
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = {}
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = {}
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=0] - Whether the term should have wildcards appended or prepended.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  this.clauses.push(clause)

  return this
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * @param {string} term - The term to add to the query.
 * @param {Object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.prototype.term = function (term, options) {
  var clause = options || {}
  clause.term = term

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseFieldOrTerm

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseFieldOrTerm = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(726),
    ReactHeight = _require.ReactHeight;

ReactHeight.ReactHeight = ReactHeight;
module.exports = ReactHeight;

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactHeight = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(727);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint "react/no-did-mount-set-state":0 */
/* eslint "react/no-did-update-set-state":0 */

var getElementHeight = function getElementHeight(el) {
  return el.clientHeight;
};

var ReactHeight = exports.ReactHeight = function (_PureComponent) {
  _inherits(ReactHeight, _PureComponent);

  function ReactHeight(props) {
    _classCallCheck(this, ReactHeight);

    var _this = _possibleConstructorReturn(this, (ReactHeight.__proto__ || Object.getPrototypeOf(ReactHeight)).call(this, props));

    _this.setWrapperRef = function (el) {
      _this.wrapper = el;
    };

    _this.state = {
      dirty: props.dirty,
      height: 0
    };
    return _this;
  }

  _createClass(ReactHeight, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var height = this.props.getElementHeight(this.wrapper);
      var dirty = false;

      this.setState({ height: height, dirty: dirty }, function () {
        return _this2.props.onHeightReady(_this2.state.height);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var children = _ref.children,
          dirty = _ref.dirty;

      if (children !== this.props.children || dirty) {
        this.setState({ dirty: true });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this3 = this;

      var height = this.props.getElementHeight(this.wrapper);
      var dirty = false;

      if (height === this.state.height) {
        this.setState({ dirty: dirty });
      } else {
        this.setState({ height: height, dirty: dirty }, function () {
          return _this3.props.onHeightReady(_this3.state.height);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _onHeightReady = _props.onHeightReady,
          _getElementHeight = _props.getElementHeight,
          _dirty = _props.dirty,
          hidden = _props.hidden,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['onHeightReady', 'getElementHeight', 'dirty', 'hidden', 'children']);

      var dirty = this.state.dirty;


      if (hidden && !dirty) {
        return null;
      }

      if (hidden) {
        return _react2.default.createElement(
          'div',
          { style: { height: 0, overflow: 'hidden' } },
          _react2.default.createElement(
            'div',
            _extends({ ref: this.setWrapperRef }, props),
            children
          )
        );
      }

      return _react2.default.createElement(
        'div',
        _extends({ ref: this.setWrapperRef }, props),
        children
      );
    }
  }]);

  return ReactHeight;
}(_react.PureComponent);

ReactHeight.propTypes = {
  children: _propTypes2.default.node.isRequired,
  onHeightReady: _propTypes2.default.func.isRequired,
  hidden: _propTypes2.default.bool,
  dirty: _propTypes2.default.bool,
  getElementHeight: _propTypes2.default.func
};
ReactHeight.defaultProps = {
  hidden: false,
  dirty: true,
  getElementHeight: getElementHeight
};

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(728)();
}


/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(22);
var invariant = __webpack_require__(1);

module.exports = function() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 729:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"SearchResults__container___46FIL","nav":"SearchResults__nav___3dSBQ"};

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"SearchResultList__content___2cUYR","results":"SearchResultList__results___3Zd3v"};

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"SearchBar__overlay___3LcbL","close":"SearchBar__close___atjw6","container":"SearchBar__container___2xmca","menu":"SearchBar__menu___2TWhS","results":"SearchBar__results___2l2aa","title":"SearchBar__title___1kvEh","searchInput":"SearchBar__searchInput___2bo51","searchButton":"SearchBar__searchButton___19AmD","postscript":"SearchBar__postscript___1ZFsj"};

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_string_hash__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_string_hash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_string_hash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_search__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_fa_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_index_jsx__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MainMenu_scss__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MainMenu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__MainMenu_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_icons_fa_search___default.a, {
	height: '1.25em',
	width: '1.25em'
});

var MainMenu = function MainMenu(props) {
	return _jsx('div', {
		className: '' + __WEBPACK_IMPORTED_MODULE_6__MainMenu_scss___default.a.main
	}, void 0, _jsx('ul', {
		className: 'list-inline'
	}, void 0, _jsx('li', {
		className: '' + __WEBPACK_IMPORTED_MODULE_6__MainMenu_scss___default.a.search
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__button_index_jsx__["a" /* default */], {
		appearance: 'blank',
		onClick: props.onOpenSearch
	}, void 0, 'Search ', _ref)), props.menuItems.map(function (item) {
		return _jsx('li', {
			className: 'main-menu-item'
		}, __WEBPACK_IMPORTED_MODULE_2_string_hash___default.a(item.to), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */], {
			to: item.to,
			dangerouslySetInnerHTML: { __html: item.text }
		}));
	})));
};

MainMenu.defaultProps = {
	menuItems: []
};

var menuItemShape = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
	text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
	target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	link: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
});

/* harmony default export */ __webpack_exports__["a"] = (MainMenu);

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"MainMenu__main___2Glud","search":"MainMenu__search___2g1Lo"};

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_index_jsx__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MobileMenu_scss__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MobileMenu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__MobileMenu_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








var MobileMenu = function MobileMenu(props) {
	return _jsx('div', {
		className: '' + __WEBPACK_IMPORTED_MODULE_4__MobileMenu_scss___default.a.mobile
	}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__button_index_jsx__["a" /* default */], {
		appearance: 'blank',
		additionalClasses: __WEBPACK_IMPORTED_MODULE_4__MobileMenu_scss___default.a.menuItem,
		onClick: props.onOpenSearch
	}, void 0, 'Menu'), _jsx(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], {
		className: __WEBPACK_IMPORTED_MODULE_4__MobileMenu_scss___default.a.menuItem,
		to: '/client'
	}, void 0, 'Client'));
};

/* harmony default export */ __webpack_exports__["a"] = (MobileMenu);

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"mobile":"MobileMenu__mobile___1elRM","menuItem":"MobileMenu__menuItem___9b_mB","active":"MobileMenu__active___1uvaX"};

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FirstChild(props) {
	var childrenArray = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(props.children);
	return childrenArray[0] || null;
}

/* harmony default export */ __webpack_exports__["a"] = (FirstChild);

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"Index__content___1OKfz","enter":"Index__enter___2EGVq","enterActive":"Index__enterActive___enQcq","leave":"Index__leave___2jbsK","leaveActive":"Index__leaveActive___1IdWp"};

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(166);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCircle = function FaCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
        )
    );
};

exports.default = FaCircle;

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"popover__modal___Bd2wJ","close":"popover__close___3JFMZ","white":"popover__white___WKZwT","backdrop":"popover__backdrop___2fWXJ","stack":"popover__stack___3I_Hy"};

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__submitted__ = __webpack_require__(748);


/* harmony default export */ __webpack_exports__["a"] = ({
	submitted: __WEBPACK_IMPORTED_MODULE_0__submitted__["a" /* default */]
});

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var submitted = function submitted(WrappedComponent) {
	var Submitted = function (_React$Component) {
		_inherits(Submitted, _React$Component);

		function Submitted(props, ctx) {
			_classCallCheck(this, Submitted);

			var _this = _possibleConstructorReturn(this, (Submitted.__proto__ || Object.getPrototypeOf(Submitted)).call(this, props, ctx));

			_this.state = {
				submitted: false
			};
			_this.resetModel = _this.resetModel.bind(_this);
			_this.handleSubmit = _this.handleSubmit.bind(_this);
			return _this;
		}

		_createClass(Submitted, [{
			key: 'resetModel',
			value: function resetModel() {
				this.setState({ submitted: false });
				this.props.setModel({});
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(model) {
				this.setState({ submitted: true });
				if (this.props.schema.isValid) {
					return this.props.onSubmit(model);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    schema = _props.schema,
				    getFormRef = _props.getFormRef,
				    props = _objectWithoutProperties(_props, ['schema', 'getFormRef']);

				schema.isSubmitted = this.state.submitted;
				getFormRef(this);

				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({
					onSubmit: this.handleSubmit,
					schema: schema
				}, props));
			}
		}]);

		return Submitted;
	}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

	Submitted.defaultProps = {
		getFormRef: function getFormRef() {},
		schema: {}
	};

	return Submitted;
};

/* harmony default export */ __webpack_exports__["a"] = (submitted);

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Form = function Form(_ref) {
	var bindInput = _ref.bindInput,
	    children = _ref.children,
	    className = _ref.className,
	    fields = _ref.fields,
	    schema = _ref.schema,
	    onSubmit = _ref.onSubmit;

	var fieldArray = Object.keys(fields).map(function (key) {
		var field = fields[key];
		var _schema$fields$key = schema.fields[key],
		    isValid = _schema$fields$key.isValid,
		    errors = _schema$fields$key.errors;


		return _extends({
			hasError: schema.isSubmitted && !isValid,
			errors: errors
		}, bindInput(key), field);
	});

	return _jsx('form', {
		className: className,
		onSubmit: onSubmit
	}, void 0, fieldArray.map(function (_ref2) {
		var component = _ref2.component,
		    children = _ref2.children,
		    rest = _objectWithoutProperties(_ref2, ['component', 'children']);

		if (typeof component === 'string') {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, { key: rest.name }, children);
		}

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, _extends({ key: rest.name }, rest), children);
	}), children);
};

Form.defaultProps = {
	className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__input_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var InputEmail = function InputEmail(_ref) {
	var hasError = _ref.hasError,
	    label = _ref.label,
	    name = _ref.name,
	    onChange = _ref.onChange,
	    placeholder = _ref.placeholder,
	    required = _ref.required,
	    value = _ref.value,
	    width = _ref.width;

	return _jsx('fieldset', {
		className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a('form-group', { 'has-error': hasError }, __WEBPACK_IMPORTED_MODULE_3__input_scss___default.a[width || 'full'])
	}, void 0, _jsx('label', {
		htmlFor: name
	}, void 0, label), _jsx('input', {
		id: name,
		type: 'email',
		className: 'form-control',
		name: name,
		placeholder: placeholder,
		value: value,
		required: required,
		onChange: onChange
	}));
};

InputEmail.defaultProps = {
	hasError: false,
	placeholder: '',
	required: false,
	width: 'full',
	value: ''
};

/* harmony default export */ __webpack_exports__["a"] = (InputEmail);

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__input_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var InputRadio = function InputRadio(_ref) {
	var hasError = _ref.hasError,
	    label = _ref.label,
	    name = _ref.name,
	    onChange = _ref.onChange,
	    options = _ref.options,
	    placeholder = _ref.placeholder,
	    required = _ref.required,
	    width = _ref.width;

	return _jsx('fieldset', {
		className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a('form-group', { 'has-error': hasError }, __WEBPACK_IMPORTED_MODULE_3__input_scss___default.a[width])
	}, void 0, _jsx('label', {
		htmlFor: name
	}, void 0, label), options.map(function (_ref2) {
		var key = _ref2.key,
		    label = _ref2.label,
		    help = _ref2.help;

		return _jsx('div', {
			className: 'radio'
		}, key, _jsx('label', {}, void 0, _jsx('input', {
			type: 'radio',
			name: name,
			placeholder: placeholder,
			value: key,
			required: required,
			onChange: onChange
		}), label), help && _jsx('p', {
			className: 'help-block'
		}, void 0, help));
	}));
};

InputRadio.defaultProps = {
	hasError: false,
	placeholder: '',
	required: false,
	width: 'full'
};

/* harmony default export */ __webpack_exports__["a"] = (InputRadio);

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__input_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var InputSelect = function InputSelect(_ref) {
	var hasError = _ref.hasError,
	    label = _ref.label,
	    name = _ref.name,
	    onChange = _ref.onChange,
	    options = _ref.options,
	    required = _ref.required,
	    value = _ref.value,
	    width = _ref.width;

	return _jsx('fieldset', {
		className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a('form-group', { 'has-error': hasError }, __WEBPACK_IMPORTED_MODULE_3__input_scss___default.a[width])
	}, void 0, _jsx('label', {
		htmlFor: name
	}, void 0, label), _jsx('select', {
		id: name,
		className: 'form-control',
		name: name,
		value: value,
		required: required,
		onChange: onChange
	}, void 0, options.map(function (_ref2) {
		var key = _ref2.key,
		    label = _ref2.label;

		return _jsx('option', {
			value: key
		}, key, label);
	})));
};

InputSelect.defaultProps = {
	hasError: false,
	required: false,
	width: 'full',
	value: ''
};

/* harmony default export */ __webpack_exports__["a"] = (InputSelect);

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__input_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var InputTextArea = function InputTextArea(_ref) {
	var hasError = _ref.hasError,
	    label = _ref.label,
	    name = _ref.name,
	    onChange = _ref.onChange,
	    placeholder = _ref.placeholder,
	    required = _ref.required,
	    rows = _ref.rows,
	    value = _ref.value,
	    width = _ref.width;

	return _jsx('fieldset', {
		className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a('form-group', { 'has-error': hasError }, __WEBPACK_IMPORTED_MODULE_3__input_scss___default.a[width || 'full'])
	}, void 0, _jsx('label', {
		htmlFor: name
	}, void 0, label), _jsx('textarea', {
		id: name,
		rows: rows,
		className: 'form-control',
		name: name,
		placeholder: placeholder,
		value: value,
		required: required,
		onChange: onChange
	}));
};

InputTextArea.defaultProps = {
	hasError: false,
	required: false,
	placeholder: '',
	width: 'full',
	value: '',
	rows: '2'
};

/* harmony default export */ __webpack_exports__["a"] = (InputTextArea);

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__input_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var InputText = function InputText(_ref) {
	var hasError = _ref.hasError,
	    label = _ref.label,
	    name = _ref.name,
	    onChange = _ref.onChange,
	    placeholder = _ref.placeholder,
	    required = _ref.required,
	    value = _ref.value,
	    width = _ref.width;

	return _jsx('fieldset', {
		className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a('form-group', { 'has-error': hasError }, __WEBPACK_IMPORTED_MODULE_3__input_scss___default.a[width || 'full'])
	}, void 0, _jsx('label', {
		htmlFor: name
	}, void 0, label), _jsx('input', {
		id: name,
		type: 'text',
		className: 'form-control',
		name: name,
		placeholder: placeholder,
		value: value,
		required: required,
		onChange: onChange
	}));
};

InputText.defaultProps = {
	hasError: false,
	placeholder: '',
	required: false,
	width: 'full',
	value: ''
};

/* harmony default export */ __webpack_exports__["a"] = (InputText);

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"toggle":"Collapse__toggle___3xR-j","visible":"Collapse__visible___L29jk"};

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
    }

    return out;
};

exports.compact = function (obj, references) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && typeof obj[i] === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ })

});