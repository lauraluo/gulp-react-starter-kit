(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if ("development" !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
},{}],2:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],3:[function(require,module,exports){
module.exports = require('react/lib/update');
},{"react/lib/update":5}],4:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
'use strict';

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;
},{}],5:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* global hasOwnProperty:true */

'use strict';

var _prodInvariant = require('./reactProdInvariant'),
    _assign = require('object-assign');

var invariant = require('fbjs/lib/invariant');
var hasOwnProperty = {}.hasOwnProperty;

function shallowCopy(x) {
  if (Array.isArray(x)) {
    return x.concat();
  } else if (x && typeof x === 'object') {
    return _assign(new x.constructor(), x);
  } else {
    return x;
  }
}

var COMMAND_PUSH = '$push';
var COMMAND_UNSHIFT = '$unshift';
var COMMAND_SPLICE = '$splice';
var COMMAND_SET = '$set';
var COMMAND_MERGE = '$merge';
var COMMAND_APPLY = '$apply';

var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

var ALL_COMMANDS_SET = {};

ALL_COMMANDS_LIST.forEach(function (command) {
  ALL_COMMANDS_SET[command] = true;
});

function invariantArrayCase(value, spec, command) {
  !Array.isArray(value) ? "development" !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
  var specValue = spec[command];
  !Array.isArray(specValue) ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
}

/**
 * Returns a updated shallow copy of an object without mutating the original.
 * See https://facebook.github.io/react/docs/update.html for details.
 */
function update(value, spec) {
  !(typeof spec === 'object') ? "development" !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

  if (hasOwnProperty.call(spec, COMMAND_SET)) {
    !(Object.keys(spec).length === 1) ? "development" !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

    return spec[COMMAND_SET];
  }

  var nextValue = shallowCopy(value);

  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
    var mergeObj = spec[COMMAND_MERGE];
    !(mergeObj && typeof mergeObj === 'object') ? "development" !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
    !(nextValue && typeof nextValue === 'object') ? "development" !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
    _assign(nextValue, spec[COMMAND_MERGE]);
  }

  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
    invariantArrayCase(value, spec, COMMAND_PUSH);
    spec[COMMAND_PUSH].forEach(function (item) {
      nextValue.push(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
    spec[COMMAND_UNSHIFT].forEach(function (item) {
      nextValue.unshift(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
    !Array.isArray(value) ? "development" !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
    !Array.isArray(spec[COMMAND_SPLICE]) ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
    spec[COMMAND_SPLICE].forEach(function (args) {
      !Array.isArray(args) ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
      nextValue.splice.apply(nextValue, args);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
    !(typeof spec[COMMAND_APPLY] === 'function') ? "development" !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
    nextValue = spec[COMMAND_APPLY](nextValue);
  }

  for (var k in spec) {
    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
      nextValue[k] = update(value[k], spec[k]);
    }
  }

  return nextValue;
}

module.exports = update;
},{"./reactProdInvariant":4,"fbjs/lib/invariant":1,"object-assign":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mockjs = require('mockjs');

var _mockjs2 = _interopRequireDefault(_mockjs);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockComponent = _react2.default.createClass({
    displayName: 'MockComponent',

    getInitialState: function getInitialState() {
        return { initData: {} };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;
        _mockjs2.default.setup({ timeout: '200-600' });

        _mockjs2.default.mock(/\.json/, {
            'list|1-10': [{
                'id|+1': 1,
                'email': '@EMAIL'
            }]
        });

        _jquery2.default.ajax({ url: 'hello.json', dataType: 'json' }).done(function (data, status, jqXHR) {
            _this.setState({ initData: data });
        });
    },
    render: function render() {
        //more than one child
        var _this = this;
        var childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.cloneElement(child, { initData: _this.state.initData });
        });

        return _react2.default.createElement(
            'div',
            null,
            childrenWithProps
        );
    }
});

exports.default = MockComponent;

},{"jquery":"jquery","mockjs":"mockjs","react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = _react2.default.createClass({
	displayName: 'MyComponent',

	propTypes: {
		// initData: React.PropTypes.array
	},
	getInitialState: function getInitialState() {
		return {
			validation: {
				result: true,
				errorMsg: null,
				childs: [{
					key: "account",
					rules: ['/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i'],
					result: true,
					errorMsg: null
				}, {
					key: "password",
					rules: ['\S{6,}'],
					result: true,
					errorMsg: null
				}]

			},
			form: {
				account: "",
				password: ""
			}
		};
	},
	_validation: function _validation() {
		// var _this = this;
		// var mapResult = false;
		// var validationChild = _this.state.validation.child;
		// var fomrData = _this.form;

		// var testRule = function(rules,item){
		// 	var results = rules.map(function(ruleString,index){
		// 		var re = new RegExp(ruleString);
		// 		return re.test(item);
		// 	});

		// 	return results.indexOf(false) == -1;
		// };

		// validationChild.forEach((item,key) => {
		// 	var result = testRule(item.rule,formData[key]);


		// });
	},
	_handleChange: function _handleChange(e) {
		var nodes = e.target.dataset.rel.split('.');
		var phaserJsonString = "{<%= sub %>}";
		var phaserObject = {};
		var _this = this;
		var subPhaserString;
		nodes.forEach(function (item, index) {
			var compiled = _lodash2.default.template(phaserJsonString);
			if (index == nodes.length - 1) {
				subPhaserString = '"' + item + '"' + ':' + '"' + e.target.value + '"';
				phaserJsonString = compiled({ 'sub': subPhaserString });
			} else {
				subPhaserString = '"' + item + '"' + ':{<%= sub %>}';
				phaserJsonString = compiled({ 'sub': subPhaserString });
			}
		});

		phaserObject = JSON.parse(phaserJsonString);

		this.setState({
			form: (0, _reactAddonsUpdate2.default)(_this.state.form, {
				$merge: phaserObject.form
			})
		});
	},
	_submit: function _submit() {},
	render: function render() {
		// var _this = this;

		return _react2.default.createElement(
			'form',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'form-group  has-error' },
				_react2.default.createElement(
					'label',
					{ htmlFor: 'exampleInputEmail1' },
					'Account'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					name: 'account',
					'data-rel': 'form.account',
					value: this.state.form.account,
					onChange: this._handleChange,
					type: 'email',
					id: 'exampleInputEmail1',
					placeholder: 'Email' }),
				_react2.default.createElement(
					'div',
					{ className: 'help-block' },
					'\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u683C\u5F0F\uFF1Aname@abc.com'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ htmlFor: 'exampleInputPassword1' },
					'Password'
				),
				_react2.default.createElement('input', {
					className: 'form-control',
					name: 'password',
					'data-rel': 'form.password',
					value: this.state.form.password,
					onChange: this._handleChange,
					type: 'password',
					id: 'exampleInputPassword1',
					placeholder: 'Password' }),
				_react2.default.createElement(
					'div',
					{ className: 'help-block' },
					'\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5BC6\u78BC\u683C\u5F0F\uFF1A\u9577\u5EA6\u81F3\u5C11\u5927\u65BC\u516D'
				)
			),
			_react2.default.createElement(
				'button',
				{ type: 'submit', className: 'btn btn-default' },
				'Submit'
			)
		);
	}
});

exports.default = MyComponent;

},{"lodash":"lodash","react":"react","react-addons-update":3}],8:[function(require,module,exports){
'use strict';

var _RootComponent = require('./components/login/RootComponent');

var _RootComponent2 = _interopRequireDefault(_RootComponent);

var _MockComponent = require('./components/login/MockComponent');

var _MockComponent2 = _interopRequireDefault(_MockComponent);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_MockComponent2.default,
	null,
	_react2.default.createElement(_RootComponent2.default, null)
), document.getElementById('login'));

},{"./components/login/MockComponent":6,"./components/login/RootComponent":7,"react":"react","react-dom":"react-dom"}]},{},[8])

//# sourceMappingURL=../js/maps/login.mock.bundle.js.map
