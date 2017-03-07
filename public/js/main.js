(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

 
var MockComponent = React.createClass({displayName: "MockComponent",
	getInitialState: function(){
    	return {
    		initData: {}
    	};
    },
    componentWillMount: function(){
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
		}).done(function(data, status, jqXHR){
		    _this.setState({initData: data});
		});
    },
	render: function(){
		//more than one child
		var childrenWithProps =  React.Children.map(this.props.children, function(child){
			React.cloneElement(child, {
				data: this.initData
			});
		});

		
		return React.createElement("div", null,  childrenWithProps )
	}
});

module.exports = MockComponent;






},{}],2:[function(require,module,exports){
 
var MyComponent = React.createClass({displayName: "MyComponent",
	defaultProps: function(){
		data: {
			list:[]
		}
	},
	render: function(){
		var _this = this;
		var listItems = []

		if(_this.props.data && _this.props.data.list) {
			listItems = _this.props.data.list.map(function(item,i){
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

},{}],3:[function(require,module,exports){
console.log("main.js load");

var MyComponent = require('./components/MyComponent');
var Mock = require('./components/MockComponent');

ReactDOM.render(
	React.createElement(Mock, null, 
		React.createElement(MyComponent, null)
	),
	document.getElementById('main')
);



},{"./components/MockComponent":1,"./components/MyComponent":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTW9ja0NvbXBvbmVudC5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQuanN4IiwiL1VzZXJzL2hzaW55aWxvL0RvY3VtZW50cy9teUdpdC9tb2NrRXhhbXBsZXMvY29udGVudC9mYWtlXzFjMDBhYmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG1DQUFtQyw2QkFBQTtDQUN0QyxlQUFlLEVBQUUsVUFBVTtLQUN2QixPQUFPO01BQ04sUUFBUSxFQUFFLEVBQUU7TUFDWixDQUFDO0tBQ0Y7SUFDRCxrQkFBa0IsRUFBRSxVQUFVO0tBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDO01BQ1AsT0FBTyxFQUFFLFNBQVM7QUFDeEIsR0FBRyxDQUFDLENBQUM7O0VBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDaEIsV0FBVyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsQ0FBQztVQUNWLE9BQU8sRUFBRSxRQUFRO09BQ3BCLENBQUM7QUFDUixHQUFHLENBQUMsQ0FBQzs7RUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ0gsR0FBRyxFQUFFLFlBQVk7TUFDakIsUUFBUSxFQUFFLE1BQU07R0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO01BQ2pDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUNwQyxDQUFDLENBQUM7S0FDQTtBQUNMLENBQUMsTUFBTSxFQUFFLFVBQVU7O0VBRWpCLElBQUksaUJBQWlCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FDL0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7SUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO0lBQ25CLENBQUMsQ0FBQztBQUNOLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7O0VBRUUsT0FBTyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFDLENBQUMsa0JBQXlCLENBQUE7RUFDdkM7QUFDRixDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMvQjtBQUNBO0FBQ0E7Ozs7O0FDNUNBO0FBQ0EsSUFBSSxpQ0FBaUMsMkJBQUE7Q0FDcEMsWUFBWSxFQUFFLFVBQVU7RUFDdkIsSUFBSSxFQUFFO0dBQ0wsSUFBSSxDQUFDLEVBQUU7R0FDUDtFQUNEO0NBQ0QsTUFBTSxFQUFFLFVBQVU7RUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CLEVBQUUsSUFBSSxTQUFTLEdBQUcsRUFBRTs7RUFFbEIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7R0FDN0MsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3BELFFBQVEsb0JBQUEsSUFBRyxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxDQUFHLENBQUEsRUFBQTtNQUNuQixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxFQUFVLENBQUEsRUFBQTtNQUN0QixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFhLENBQUE7S0FDckIsQ0FBQSxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sR0FBRzs7RUFFRCxPQUFPLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUMsU0FBZSxDQUFBO0VBQzNCO0FBQ0YsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXOzs7QUN4QjVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTVCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUVqRCxRQUFRLENBQUMsTUFBTTtDQUNkLG9CQUFDLElBQUksRUFBQSxJQUFDLEVBQUE7RUFDTCxvQkFBQyxXQUFXLEVBQUEsSUFBRSxDQUFBO0NBQ1IsQ0FBQTtDQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbiBcbnZhciBNb2NrQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRpbml0RGF0YToge31cbiAgICBcdH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdE1vY2suc2V0dXAoe1xuXHRcdCAgICB0aW1lb3V0OiAnMjAwLTYwMCdcblx0XHR9KTtcblxuXHRcdE1vY2subW9jaygvXFwuanNvbi8sIHtcblx0XHQgICAgJ2xpc3R8MS0xMCc6IFt7XG5cdFx0ICAgICAgICAnaWR8KzEnOiAxLFxuXHRcdCAgICAgICAgJ2VtYWlsJzogJ0BFTUFJTCdcblx0XHQgICAgfV1cblx0XHR9KTtcblxuXHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJ2hlbGxvLmpzb24nLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0fSkuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGpxWEhSKXtcblx0XHQgICAgX3RoaXMuc2V0U3RhdGUoe2luaXREYXRhOiBkYXRhfSk7XG5cdFx0fSk7XG4gICAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdC8vbW9yZSB0aGFuIG9uZSBjaGlsZFxuXHRcdHZhciBjaGlsZHJlbldpdGhQcm9wcyA9ICBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpe1xuXHRcdFx0UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdGRhdGE6IHRoaXMuaW5pdERhdGFcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0XG5cdFx0cmV0dXJuIDxkaXY+eyBjaGlsZHJlbldpdGhQcm9wcyB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiIsIiBcbnZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGVmYXVsdFByb3BzOiBmdW5jdGlvbigpe1xuXHRcdGRhdGE6IHtcblx0XHRcdGxpc3Q6W11cblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBsaXN0SXRlbXMgPSBbXVxuXG5cdFx0aWYoX3RoaXMucHJvcHMuZGF0YSAmJiBfdGhpcy5wcm9wcy5kYXRhLmxpc3QpIHtcblx0XHRcdGxpc3RJdGVtcyA9IF90aGlzLnByb3BzLmRhdGEubGlzdC5tYXAoZnVuY3Rpb24oaXRlbSxpKXtcblx0XHRcdCAgcmV0dXJuICg8bGkga2V5PXtpfT5cblx0XHRcdCAgXHQ8c3Bhbj57aXRlbS5pZH08L3NwYW4+XG5cdFx0XHQgIFx0PHNwYW4+e2l0ZW0uZW1haWx9PC9zcGFuPlxuXHRcdFx0ICA8L2xpPilcdFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8dWw+e2xpc3RJdGVtc308L3VsPlxuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNeUNvbXBvbmVudDsiLCJjb25zb2xlLmxvZyhcIm1haW4uanMgbG9hZFwiKTtcblxudmFyIE15Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL015Q29tcG9uZW50Jyk7XG52YXIgTW9jayA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Nb2NrQ29tcG9uZW50Jyk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PE1vY2s+XG5cdFx0PE15Q29tcG9uZW50Lz5cblx0PC9Nb2NrPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuKTtcblxuIl19
