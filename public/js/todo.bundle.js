(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TodoList = require('./TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _TodoInput = require('./TodoInput');

var _TodoInput2 = _interopRequireDefault(_TodoInput);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.state = { items: [] };
        return _this;
    }

    _createClass(TodoApp, [{
        key: 'addItem',
        value: function addItem(item) {
            this.setState({ items: this.state.items.concat([{ item: item }]) });
        }
    }, {
        key: 'markItemDone',
        value: function markItemDone(index) {
            var newItems = this.state.items.slice(0);
            newItems[index].done = newItems[index].done ? false : true;
            this.setState({ items: newItems });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TodoList2.default, { items: this.state.items, onItemDone: this.markItemDone.bind(this) }),
                _react2.default.createElement(_TodoInput2.default, { onAddItem: this.addItem.bind(this) })
            );
        }
    }]);

    return TodoApp;
}(_react2.default.Component);

exports.default = TodoApp;

},{"./TodoInput":2,"./TodoList":4,"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoInput = function (_React$Component) {
    _inherits(TodoInput, _React$Component);

    function TodoInput() {
        _classCallCheck(this, TodoInput);

        return _possibleConstructorReturn(this, (TodoInput.__proto__ || Object.getPrototypeOf(TodoInput)).apply(this, arguments));
    }

    _createClass(TodoInput, [{
        key: 'addItem',
        value: function addItem(e) {
            e.preventDefault();
            this.props.onAddItem(this.refs['input'].value);
            this.refs['input'].value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.addItem.bind(this) },
                'Add item: ',
                _react2.default.createElement('input', { type: 'text', ref: 'input' }),
                _react2.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Add'
                )
            );
        }
    }]);

    return TodoInput;
}(_react2.default.Component);

exports.default = TodoInput;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var item = _ref.item,
        onDone = _ref.onDone;
    return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
            'span',
            { className: item.done ? 'done' : '' },
            item.item
        ),
        '\xA0',
        _react2.default.createElement(
            'a',
            { href: '#', onClick: onDone },
            item.done ? 'Not done' : 'Done'
        )
    );
};

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TodoItem = require('./TodoItem');

var _TodoItem2 = _interopRequireDefault(_TodoItem);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var items = _ref.items,
        onItemDone = _ref.onItemDone;
    return _react2.default.createElement(
        'ul',
        null,
        items.map(function (item, index) {
            return _react2.default.createElement(_TodoItem2.default, { key: index, item: item, onDone: onItemDone.bind(null, index) });
        })
    );
};

},{"./TodoItem":3,"react":"react"}],5:[function(require,module,exports){
'use strict';

var _TodoApp = require('./components/todo/TodoApp');

var _TodoApp2 = _interopRequireDefault(_TodoApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_TodoApp2.default, null), document.querySelector('#app'));

},{"./components/todo/TodoApp":1}]},{},[5])

//# sourceMappingURL=../js/maps/todo.bundle.js.map
