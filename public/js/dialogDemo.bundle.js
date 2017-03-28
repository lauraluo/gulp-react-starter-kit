/* publish time Tuesday, March 28th, 2017, 6:18:36 PM */(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogActions = exports.DialogStore = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reflux = require("reflux");

var _reflux2 = _interopRequireDefault(_reflux);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogActions = _reflux2.default.createActions(["showDialog", "showDialogYesNo", "showDialogList", "showDialogListYesNo", "showDialogScene", "showDialogToast", "hideDialog", "setDialogName", "clearDialogName"]);

var DialogStore = function (_Reflux$Store) {
    _inherits(DialogStore, _Reflux$Store);

    function DialogStore(props) {
        _classCallCheck(this, DialogStore);

        var _this = _possibleConstructorReturn(this, (DialogStore.__proto__ || Object.getPrototypeOf(DialogStore)).call(this, props));

        _this.state = {
            isOpened: false,
            posY: 0,
            type: 0,
            title: '',
            content: '',
            buttons: [],
            callbackFn: []
        };
        _this.listenables = DialogActions;
        return _this;
    }

    _createClass(DialogStore, [{
        key: "_updateState",
        value: function _updateState() {
            if (!this.state.isOpened && this.state.type != 0) {
                this.state.posY = (0, _jquery2.default)(document).scrollTop();
            }

            this.state.isOpened = this.state.type != 0;
            this.trigger(this.state);
        }
    }, {
        key: "onShowDialog",
        value: function onShowDialog(title, content, button, confirmFn) {
            this.state.type = 1;
            this.state.title = title;
            this.state.content = content;
            this.state.buttons = [button];
            this.state.callbackFn = [confirmFn];
            this._updateState();
        }
    }]);

    return DialogStore;
}(_reflux2.default.Store);

var Dialog = function (_Reflux$Component) {
    _inherits(Dialog, _Reflux$Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this2 = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this2.state = {}; // our store will add its own state to the component's
        _this2.store = DialogStore; // <- just assign the store class itself
        return _this2;
    }

    _createClass(Dialog, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "abc" },
                "the dialog is: " + this.state.isOpened
            );
        }
    }]);

    return Dialog;
}(_reflux2.default.Component);

exports.default = Dialog;
exports.DialogStore = DialogStore;
exports.DialogActions = DialogActions;

},{"jquery":"jquery","react":"react","reflux":"reflux"}],2:[function(require,module,exports){
"use strict";

var _typeof9 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof8 = typeof Symbol === "function" && _typeof9(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof9(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof9(obj);
};

var _typeof7 = typeof Symbol === "function" && _typeof8(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof8(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof8(obj);
};

var _typeof6 = typeof Symbol === "function" && _typeof7(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof7(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof7(obj);
};

var _typeof5 = typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof6(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof6(obj);
};

var _typeof4 = typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof5(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof5(obj);
};

var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
};

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("./Dialog");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// function DialogDemoContent(props) {
//   return <h1>Hello, {props.name}</h1>
// }


var DialogDemo = function (_React$Component) {
    _inherits(DialogDemo, _React$Component);

    function DialogDemo() {
        _classCallCheck(this, DialogDemo);

        return _possibleConstructorReturn(this, (DialogDemo.__proto__ || Object.getPrototypeOf(DialogDemo)).apply(this, arguments));
    }

    _createClass(DialogDemo, [{
        key: "_openDialog",
        value: function _openDialog() {
            _Dialog.DialogActions.showDialog("newName", "ddddd", "button", "confirmFn");
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement("div", { className: "dialogDemo" }, _react2.default.createElement("button", { className: "btn", onClick: this._openDialog }, "\u9EDE\u64CA\u5207\u63DBdiaog\u72C0\u614B"));
        }
    }]);

    return DialogDemo;
}(_react2.default.Component);

exports.default = DialogDemo;

},{"./Dialog":1,"react":"react"}],3:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('./components/dialog/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DialogDemo = require('./components/dialog/DialogDemo');

var _DialogDemo2 = _interopRequireDefault(_DialogDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_DialogDemo2.default, null), document.getElementById('main'));
_reactDom2.default.render(_react2.default.createElement(_Dialog2.default, null), document.getElementById('dialog'));

},{"./components/dialog/Dialog":1,"./components/dialog/DialogDemo":2,"react":"react","react-dom":"react-dom"}]},{},[3])

//# sourceMappingURL=../js/maps/dialogDemo.bundle.js.map
