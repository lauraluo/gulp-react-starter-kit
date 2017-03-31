(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DialogRelayout(WrappedComponent, configs) {

    configs = Object.assign({
        root: '#GlobalContainer', //for body > div
        modifierRootClass: 'dialog-opened', //modifier root
        container: '.container', //for prevent page scroll
        containerBody: '.container-body' //for positioning main content container
    }, configs);

    var MixiedComponentWithRelayout = function (_React$Component) {
        _inherits(MixiedComponentWithRelayout, _React$Component);

        function MixiedComponentWithRelayout(props) {
            _classCallCheck(this, MixiedComponentWithRelayout);

            return _possibleConstructorReturn(this, (MixiedComponentWithRelayout.__proto__ || Object.getPrototypeOf(MixiedComponentWithRelayout)).call(this, props));
        }

        _createClass(MixiedComponentWithRelayout, [{
            key: '_relayout',
            value: function _relayout() {
                console.log("_relayout");
                var root = (0, _jquery2.default)(configs.root),
                    container = (0, _jquery2.default)(configs.container),
                    containerBody = (0, _jquery2.default)(configs.containerBody),
                    posY = (0, _jquery2.default)(document).scrollTop();

                if (this.state.isOpened && root.hasClass(configs.toggleClass) || !this.state.isOpened && !root.hasClass(configs.toggleClass)) return;

                if (this.state.isOpened) {
                    //modifier root
                    root.toggleClass(configs.modifierRootClass);
                    //prevent page scroll for mobile
                    container.css({ position: 'absolute' });
                    //positioning container of main content in dialog background
                    containerBody.css({
                        position: 'fixed',
                        top: -posY
                    });
                } else {
                    //reset all
                    root.removeClass(configs.modifierRootClass);
                    container.removeAttr('style');
                    containerBody.removeAttr('style');
                    (0, _jquery2.default)(document).scrollTop(posY);
                }
            }
        }, {
            key: 'proc',
            value: function proc() {
                console.log('proc');
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                console.log('relayout componentDidMount');
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                console.log('relayout componentWillUnmount');
            }
        }, {
            key: 'componentWillMount',
            value: function componentWillMount() {
                console.log('relayout componentWillMount');
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                var props = Object.assign({}, this.props, {
                    ref: function ref() {
                        _this2.proc.bind(_this2);
                    },
                    _relayout: this._relayout
                });

                return _react2.default.createElement(WrappedComponent, props);
            }
        }]);

        return MixiedComponentWithRelayout;
    }(_react2.default.Component);

    return MixiedComponentWithRelayout;
}
exports.default = DialogRelayout;

},{"jquery":"jquery","react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogActions = exports.DialogStore = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reflux = require("reflux");

var _reflux2 = _interopRequireDefault(_reflux);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _DialogButton = require("./DialogButton");

var _DialogButton2 = _interopRequireDefault(_DialogButton);

var _Mixin = require("../core/Mixin.DialogRelayout");

var _Mixin2 = _interopRequireDefault(_Mixin);

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

        _this._checkConfigsInterface = function (configs) {
            var result = true;

            Object.keys(configs).map(function (key, index) {
                var value = configs[key];

                switch (key) {
                    case "title":
                        if (typeof value !== "string") {
                            console.error("title should be a string");
                            result = false;
                        }
                        break;
                    case "content":
                        if (typeof value !== "function" && typeof value !== "string") {
                            console.error("content should be a functional component or a string");
                            result = false;
                        }
                        break;
                    case "buttons":
                        if (Object.prototype.toString.call(value) !== '[object Array]') {
                            console.error("buttons should be an Array");
                            result = false;
                        }
                        break;
                    case "didOpened":
                    case "willOpen":
                    case "didClosed":
                        if (typeof value !== "function") {
                            console.error("callback should be an function");
                            result = false;
                        }
                        break;
                    default:
                        return;
                }
            });

            return result;
        };

        _this.onShowDialog = function () {
            var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                title: "",
                content: {},
                buttons: [],
                didOpened: null
            };


            if (!_this._checkConfigsInterface(configs)) {
                return;
            }

            _this.state.type = 1;
            _this.state.title = configs.title;
            _this.state.content = configs.content;
            _this.state.buttons = configs.buttons;
            _this.state.didOpened = configs.didOpened;
            _this._updateState();
        };

        _this.onHideDialog = function () {
            _this.state.type = 0;
            _this.state.title = '';
            _this.state.content = '';
            _this.state.buttons = [];

            _this._updateState();
        };

        _this.state = {
            isOpened: false,
            posY: 0,
            type: 0,
            title: '',
            content: '',
            buttons: [],
            didOpened: null,
            willOpen: null,
            didClosed: null

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
    }]);

    return DialogStore;
}(_reflux2.default.Store);

var Dialog = function (_Reflux$PureComponent) {
    _inherits(Dialog, _Reflux$PureComponent);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this2 = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _initialiseProps.call(_this2);

        _this2.state = {}; // our store will add its own state to the component's
        _this2.store = DialogStore; // <- just assign the store class itself
        _this2._BodyComponent = _this2._BodyComponent.bind(_this2);
        _this2._relayout = _this2.props._relayout.bind(_this2);
        return _this2;
    }

    _createClass(Dialog, [{
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log(prevState);
            if (this.state.isOpened && !prevState.isOpened && typeof this.state.didOpened == "function") {
                this.state.didOpened();
            }
            this._relayout();
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var dialogBoxClass = 'dialog-box';
            var dataAttr = {
                'data-dialog-name': this.state.dialogName
            };
            var hasExtraPaddingWithBody = false;

            switch (this.state.type) {
                default:
                case 0:
                    return false;
                case 1:
                case 2:
                    break;
                case 3:
                    hasExtraPaddingWithBody = true;
                    break;
                case 4:
                    dialogBoxClass += ' dialog-list';
                    break;
                case 5:
                    dialogBoxClass += ' dialog-scene';
                    break;
            }

            return _react2.default.createElement(
                "div",
                _extends({ className: "dialog" }, dataAttr),
                _react2.default.createElement("div", { className: "dialog-backdrop" }),
                _react2.default.createElement(
                    "div",
                    { className: dialogBoxClass },
                    _react2.default.createElement(
                        "div",
                        { className: "dialog-container" },
                        _react2.default.createElement(this._HeaderComponent, { ref: function ref(header) {
                                return _this3.dialogHeader = header;
                            } }),
                        _react2.default.createElement(this._BodyComponent, {
                            ref: function ref(body) {
                                return _this3.dialogBody = body;
                            },
                            extraPadding: hasExtraPaddingWithBody }),
                        _react2.default.createElement(this._FooterComponent, { ref: function ref(footer) {
                                return _this3.dialogFooter = footer;
                            } })
                    )
                )
            );
        }
    }]);

    return Dialog;
}(_reflux2.default.PureComponent);

var _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this._BodyComponent = function (props) {
        var className = props.extraPadding ? 'dialog-box-body dialog-box-body-padding' : 'dialog-box-body';
        var renderResult;

        if (typeof _this4.state.content === 'string') {
            var content = _this4.state.content.split('\n').map(function (item, i) {
                return _react2.default.createElement(
                    "span",
                    { key: 'dialog-item' + i },
                    item,
                    _react2.default.createElement("br", null)
                );
            });

            renderResult = _react2.default.createElement(
                "div",
                { className: className },
                content
            );
        } else {
            var Content = _this4.state.content;
            renderResult = _react2.default.createElement(
                "div",
                { className: className },
                _react2.default.createElement(Content, null)
            );
        }

        return renderResult;
    };

    this._HeaderComponent = function () {
        var rendeResult = {};
        if (_this4.state.title && _this4.state.title.length > 0) {
            rendeResult = _react2.default.createElement(
                "header",
                null,
                _this4.state.title
            );
        }
        return rendeResult;
    };

    this._FooterComponent = function (props) {
        var classNames = ['dialog-button-block-primary'];

        if (_this4.state.buttons.length == 2) {
            classNames = ['dialog-button-inline', 'dialog-button-inline-primary'];
        }

        var buttons = Object.keys(_this4.state.buttons).map(function (key, i) {
            var item = _this4.state.buttons[i];
            return _react2.default.createElement(_DialogButton2.default, {
                key: i,
                name: item.text,
                className: classNames[i] ? classNames[i] : "",
                callback: item.callback });
        });

        return _react2.default.createElement(
            "div",
            { className: "dialog-box-footer" },
            buttons
        );
    };
};

var MixiedDialog = (0, _Mixin2.default)(Dialog);
exports.default = MixiedDialog;
exports.DialogStore = DialogStore;
exports.DialogActions = DialogActions;

},{"../core/Mixin.DialogRelayout":1,"./DialogButton":3,"jquery":"jquery","react":"react","reflux":"reflux"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("./Dialog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogButton = function (_Component) {
    _inherits(DialogButton, _Component);

    function DialogButton(props) {
        _classCallCheck(this, DialogButton);

        var _this = _possibleConstructorReturn(this, (DialogButton.__proto__ || Object.getPrototypeOf(DialogButton)).call(this, props));

        _this._onClick = function () {

            var isOverride = false;

            if (_this.props.callback && typeof _this.props.callback == "function") {
                isOverride = _this.props.callback();
            }

            if (!isOverride && _Dialog.DialogActions) {
                _Dialog.DialogActions.hideDialog();
            }
        };

        return _this;
    }

    _createClass(DialogButton, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: this.props.className, onClick: this._onClick },
                this.props.name
            );
        }
    }]);

    return DialogButton;
}(_react.Component);

exports.default = DialogButton;

},{"./Dialog":2,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("./Dialog");

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogDemo = function (_React$Component) {
    _inherits(DialogDemo, _React$Component);

    function DialogDemo(props) {
        _classCallCheck(this, DialogDemo);

        var _this = _possibleConstructorReturn(this, (DialogDemo.__proto__ || Object.getPrototypeOf(DialogDemo)).call(this, props));

        _this._openCallback = function () {
            console.log("_openCallback");
            (0, _jquery2.default)(_this.subView).find('input').focus();
        };

        _this._submitCallback = function () {
            console.log("submit");
            alert((0, _jquery2.default)(_this.subView).find('input').val());
            return true;
        };

        _this._subView = function () {
            return _react2.default.createElement(
                "div",
                { ref: function ref(subView) {
                        _this.subView = subView;
                    } },
                _react2.default.createElement(
                    "p",
                    { className: "title" },
                    "Sub view of DialogDemo APP"
                ),
                _react2.default.createElement("input", { type: "text" }),
                _react2.default.createElement(
                    "button",
                    { className: "btn", onClick: _this._submitCallback },
                    "\u9001\u51FA\u9215"
                )
            );
        };

        _this._openDialog = function () {
            _Dialog.DialogActions.showDialog({
                title: "Dialog標題",
                content: _this._subView,
                didOpened: _this._openCallback,
                buttons: [{
                    text: "取消",
                    callback: _Dialog.DialogActions.hideDialog
                }, {
                    text: "送出鈕",
                    callback: _this._submitCallback
                }]
            });
        };

        _this.state = {
            data: "appData"
        };
        _this.subView = {};
        return _this;
    }

    _createClass(DialogDemo, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "dialogDemo" },
                _react2.default.createElement(
                    "button",
                    { className: "btn", onClick: this._openDialog },
                    "\u6253\u958Bdialog"
                )
            );
        }
    }]);

    return DialogDemo;
}(_react2.default.Component);

exports.default = DialogDemo;

},{"./Dialog":2,"jquery":"jquery","react":"react"}],5:[function(require,module,exports){
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

},{"./components/dialog/Dialog":2,"./components/dialog/DialogDemo":4,"react":"react","react-dom":"react-dom"}]},{},[5])

//# sourceMappingURL=../js/maps/dialogDemo.bundle.js.map
