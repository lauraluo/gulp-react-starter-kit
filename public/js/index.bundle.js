(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = _react2.default.createClass({
    displayName: 'MyComponent',

    propTypes: {
        initData: _react2.default.PropTypes.object
    },
    render: function render() {
        var _this = this;
        var listItems = [];

        if (_this.props.initData && _this.props.initData.list) {
            listItems = _this.props.initData.list.map(function (item, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i },
                    _react2.default.createElement(
                        'span',
                        null,
                        item.id
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        item.email
                    )
                );
            });
        }

        return _react2.default.createElement(
            'ul',
            null,
            listItems
        );
    }
});

exports.default = MyComponent;

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _RootComponent = require('./components/index/RootComponent');

var _RootComponent2 = _interopRequireDefault(_RootComponent);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_RootComponent2.default, null), document.getElementById('index'));

},{"./components/index/RootComponent":1,"react":"react","react-dom":"react-dom"}]},{},[2])

//# sourceMappingURL=../js/maps/index.bundle.js.map
