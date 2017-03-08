(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 
var MyComponent = React.createClass({displayName: "MyComponent",
	propTypes: {
		initData: React.PropTypes.array
	},
	render: function(){
		var _this = this;
		var listItems = []

		if(_this.props.initData && _this.props.initData.list) {
			listItems = _this.props.initData.list.map(function(item,i){
			  return (React.createElement("li", {key: i}, 
			  	React.createElement("span", null, item.id), 
			  	React.createElement("span", null, item.email)
			  ))	
			});
		}
		
		return React.createElement("ul", null, listItems)
	}
});

module.exports = MyComponent;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2Zha2VfNjU0OGFhMmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBLElBQUksaUNBQWlDLDJCQUFBO0NBQ3BDLFNBQVMsRUFBRTtFQUNWLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUs7RUFDL0I7Q0FDRCxNQUFNLEVBQUUsVUFBVTtFQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbkIsRUFBRSxJQUFJLFNBQVMsR0FBRyxFQUFFOztFQUVsQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtHQUNyRCxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDeEQsUUFBUSxvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLEdBQUEsRUFBRyxDQUFFLENBQUcsQ0FBQSxFQUFBO01BQ25CLG9CQUFBLE1BQUssRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEVBQVUsQ0FBQSxFQUFBO01BQ3RCLG9CQUFBLE1BQUssRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQWEsQ0FBQTtLQUNyQixDQUFBLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixHQUFHOztFQUVELE9BQU8sb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQyxTQUFlLENBQUE7RUFDM0I7QUFDRixDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIFxudmFyIE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRwcm9wVHlwZXM6IHtcblx0XHRpbml0RGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBsaXN0SXRlbXMgPSBbXVxuXG5cdFx0aWYoX3RoaXMucHJvcHMuaW5pdERhdGEgJiYgX3RoaXMucHJvcHMuaW5pdERhdGEubGlzdCkge1xuXHRcdFx0bGlzdEl0ZW1zID0gX3RoaXMucHJvcHMuaW5pdERhdGEubGlzdC5tYXAoZnVuY3Rpb24oaXRlbSxpKXtcblx0XHRcdCAgcmV0dXJuICg8bGkga2V5PXtpfT5cblx0XHRcdCAgXHQ8c3Bhbj57aXRlbS5pZH08L3NwYW4+XG5cdFx0XHQgIFx0PHNwYW4+e2l0ZW0uZW1haWx9PC9zcGFuPlxuXHRcdFx0ICA8L2xpPilcdFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8dWw+e2xpc3RJdGVtc308L3VsPlxuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNeUNvbXBvbmVudDsiXX0=
