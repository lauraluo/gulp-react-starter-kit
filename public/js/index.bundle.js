(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MockComponent = React.createClass({ displayName: "MockComponent",
	getInitialState: function getInitialState() {
		return {
			initData: {}
		};
	},
	componentWillMount: function componentWillMount() {
		var _this = this;
		Mock.setup({
			timeout: '200-600'
		});

		Mock.mock(/\.json/, {
			'list|1-10': [{
				'id|+1': 1,
				'email': '@EMAIL'
			}]
		});

		$.ajax({
			url: 'hello.json',
			dataType: 'json'
		}).done(function (data, status, jqXHR) {
			_this.setState({ initData: data });
		});
	},
	render: function render() {
		//more than one child
		var _this = this;
		var childrenWithProps = React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				initData: _this.state.initData

			});
		});

		return React.createElement("div", null, childrenWithProps);
	}
});

module.exports = MockComponent;

},{}],2:[function(require,module,exports){
"use strict";

var MyComponent = React.createClass({ displayName: "MyComponent",
	propTypes: {
		initData: React.PropTypes.array
	},
	render: function render() {
		var _this = this;
		var listItems = [];

		if (_this.props.initData && _this.props.initData.list) {
			listItems = _this.props.initData.list.map(function (item, i) {
				return React.createElement("li", { key: i }, React.createElement("span", null, item.id), React.createElement("span", null, item.email));
			});
		}

		return React.createElement("ul", null, listItems, " lalaluo1");
	}
});

module.exports = MyComponent;

},{}],3:[function(require,module,exports){
'use strict';

var Index = require('./RootComponent');
var Mock = require('./MockComponent');

ReactDOM.render(React.createElement(Mock, null, React.createElement(Index, null)), document.getElementById('index'));

},{"./MockComponent":1,"./RootComponent":2}]},{},[3])

//# sourceMappingURL=../maps/index.bundle.js.map
