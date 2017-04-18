(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mockjs = require('mockjs');

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AttachedToMock(WrappedComponent, configs) {
    var MockComponent = function (_React$Component) {
        _inherits(MockComponent, _React$Component);

        function MockComponent(props) {
            _classCallCheck(this, MockComponent);

            var _this = _possibleConstructorReturn(this, (MockComponent.__proto__ || Object.getPrototypeOf(MockComponent)).call(this, props));

            _this.componentWillMount = function () {
                _mockjs2.default.mock(/\.json/, _this.mockTemplate);
                _mockjs2.default.setup({ timeout: '200-600' });
            };

            _this.mockTemplate = {
                'list|1-10': [{
                    'id|+1': 1,
                    'email': '@EMAIL'
                }]
            };
            _this.state = { initData: _mockjs2.default.mock(_this.mockTemplate) };
            return _this;
        }

        _createClass(MockComponent, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(WrappedComponent, _extends({ initData: this.state.initData }, this.props));
            }
        }]);

        return MockComponent;
    }(_react2.default.Component);

    return MockComponent;
}

exports.default = AttachedToMock;

},{"mockjs":"mockjs","react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*var MyComponent = React.createClass({
    propTypes: {
        initData: React.PropTypes.object
    },
    getInitialState: function(){
        return {
            datas: null
        }
    },
    handleGetNewData: function(e){
        var _this = this;
        $.ajax({url: 'hello.json', dataType: 'json'})
        .done(function (data, status, jqXHR) {
            _this.setState({datas: data});
        });
    },
    getListbyItem: function(itmes,prefixKey){
        // var _this = this;
        var result = itmes.map(function(item,i){
            return (
            <li key={prefixKey + i}>
                <span>{item.id}</span>
                <span>{item.email}</span>
            </li>
            
            )	
        });

        return result;
    },
    render: function(){
        var _this = this;
        var listItems = []
        var newListItems = [];

        if(_this.props.initData && _this.props.initData.list) {
            listItems = _this.getListbyItem(_this.props.initData.list,"props");
        }

        if(_this.state.datas && _this.state.datas.list) {
            newListItems = _this.getListbyItem(_this.state.datas.list,"state");
        }
        
        return (
            <ul>
                {listItems}
                {newListItems}
                <button className="getNewData" onClick={_this.handleGetNewData}>取得新資料</button>
            </ul>)
    }
});

export default MyComponent;*/

var RootComponent = function (_React$Component) {
    _inherits(RootComponent, _React$Component);

    function RootComponent(props) {
        _classCallCheck(this, RootComponent);

        var _this2 = _possibleConstructorReturn(this, (RootComponent.__proto__ || Object.getPrototypeOf(RootComponent)).call(this, props));

        _this2.getListbyItem = function (itmes, prefixKey) {
            var result = itmes.map(function (item, i) {
                return _react2.default.createElement(
                    'li',
                    { key: prefixKey + i },
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

            return result;
        };

        _this2.handleGetNewData = function (e) {
            var _this = _this2;
            _jquery2.default.ajax({ url: 'hello.json', dataType: 'json' }).done(function (data, status, jqXHR) {
                _this.setState({ datas: data });
            });
        };

        _this2.state = {
            datas: null
        };

        return _this2;
    }

    _createClass(RootComponent, [{
        key: 'render',
        value: function render() {
            var _this = this;
            var listItems = [];
            var newListItems = [];

            if (_this.props.initData && _this.props.initData.list) {
                listItems = _this.getListbyItem(_this.props.initData.list, "props");
            }

            if (_this.state.datas && _this.state.datas.list) {
                newListItems = _this.getListbyItem(_this.state.datas.list, "state");
            }

            return _react2.default.createElement(
                'ul',
                null,
                listItems,
                newListItems,
                _react2.default.createElement(
                    'button',
                    { className: 'getNewData', onClick: _this.handleGetNewData },
                    '\u53D6\u5F97\u65B0\u8CC7\u6599'
                )
            );
        }
    }]);

    return RootComponent;
}(_react2.default.Component);

exports.default = RootComponent;

},{"jquery":"jquery","react":"react"}],3:[function(require,module,exports){
'use strict';

var _RootComponent = require('./components/index/RootComponent');

var _RootComponent2 = _interopRequireDefault(_RootComponent);

var _MockProvider = require('./components/index/MockProvider');

var _MockProvider2 = _interopRequireDefault(_MockProvider);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = (0, _MockProvider2.default)(_RootComponent2.default);

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById('index'));

},{"./components/index/MockProvider":1,"./components/index/RootComponent":2,"react":"react","react-dom":"react-dom"}]},{},[3])

//# sourceMappingURL=../js/maps/index.bundle.js.map
