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
		var _this = this;
		var childrenWithProps =  React.Children.map(this.props.children, function(child){
			return React.cloneElement(child, {
				initData: _this.state.initData
				
			});
		});

		
		return React.createElement("div", null,  childrenWithProps )
	}
});

module.exports = MockComponent;






},{}],2:[function(require,module,exports){
 
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
		
		return React.createElement("ul", null, listItems, " lalaluo1")
	}
});

module.exports = MyComponent;

},{}],3:[function(require,module,exports){
var MyComponent = require('./components/MyComponent');
var Mock = require('./components/MockComponent');

ReactDOM.render(
	React.createElement(Mock, null, 
		React.createElement(MyComponent, null)
	),
	document.getElementById('main')
);

},{"./components/MockComponent":1,"./components/MyComponent":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTW9ja0NvbXBvbmVudC5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQuanN4IiwiL1VzZXJzL2hzaW55aWxvL0RvY3VtZW50cy9teUdpdC9tb2NrRXhhbXBsZXMvY29udGVudC9mYWtlXzEwOTBmYTJmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxtQ0FBbUMsNkJBQUE7Q0FDdEMsZUFBZSxFQUFFLFVBQVU7S0FDdkIsT0FBTztNQUNOLFFBQVEsRUFBRSxFQUFFO01BQ1osQ0FBQztLQUNGO0lBQ0Qsa0JBQWtCLEVBQUUsVUFBVTtLQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUNQLE9BQU8sRUFBRSxTQUFTO0FBQ3hCLEdBQUcsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ2hCLFdBQVcsRUFBRSxDQUFDO1VBQ1YsT0FBTyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsUUFBUTtPQUNwQixDQUFDO0FBQ1IsR0FBRyxDQUFDLENBQUM7O0VBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNILEdBQUcsRUFBRSxZQUFZO01BQ2pCLFFBQVEsRUFBRSxNQUFNO0dBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztNQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDcEMsQ0FBQyxDQUFDO0tBQ0E7QUFDTCxDQUFDLE1BQU0sRUFBRSxVQUFVOztFQUVqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDakIsSUFBSSxpQkFBaUIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEtBQUssQ0FBQztHQUMvRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO0FBQ3BDLElBQUksUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUTs7SUFFOUIsQ0FBQyxDQUFDO0FBQ04sR0FBRyxDQUFDLENBQUM7QUFDTDs7RUFFRSxPQUFPLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUMsQ0FBQyxrQkFBeUIsQ0FBQTtFQUN2QztBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0FBQy9CO0FBQ0E7QUFDQTs7Ozs7QUM5Q0E7QUFDQSxJQUFJLGlDQUFpQywyQkFBQTtDQUNwQyxTQUFTLEVBQUU7RUFDVixRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0VBQy9CO0NBQ0QsTUFBTSxFQUFFLFVBQVU7RUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CLEVBQUUsSUFBSSxTQUFTLEdBQUcsRUFBRTs7RUFFbEIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7R0FDckQsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hELFFBQVEsb0JBQUEsSUFBRyxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxDQUFHLENBQUEsRUFBQTtNQUNuQixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxFQUFVLENBQUEsRUFBQTtNQUN0QixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFhLENBQUE7S0FDckIsQ0FBQSxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sR0FBRzs7RUFFRCxPQUFPLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUMsU0FBUyxFQUFDLFdBQWMsQ0FBQTtFQUNwQztBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVzs7O0FDdEI1QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFakQsUUFBUSxDQUFDLE1BQU07Q0FDZCxvQkFBQyxJQUFJLEVBQUEsSUFBQyxFQUFBO0VBQ0wsb0JBQUMsV0FBVyxFQUFBLElBQUUsQ0FBQTtDQUNSLENBQUE7Q0FDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztDQUMvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbiBcbnZhciBNb2NrQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRpbml0RGF0YToge31cbiAgICBcdH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdE1vY2suc2V0dXAoe1xuXHRcdCAgICB0aW1lb3V0OiAnMjAwLTYwMCdcblx0XHR9KTtcblxuXHRcdE1vY2subW9jaygvXFwuanNvbi8sIHtcblx0XHQgICAgJ2xpc3R8MS0xMCc6IFt7XG5cdFx0ICAgICAgICAnaWR8KzEnOiAxLFxuXHRcdCAgICAgICAgJ2VtYWlsJzogJ0BFTUFJTCdcblx0XHQgICAgfV1cblx0XHR9KTtcblxuXHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJ2hlbGxvLmpzb24nLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0fSkuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGpxWEhSKXtcblx0XHQgICAgX3RoaXMuc2V0U3RhdGUoe2luaXREYXRhOiBkYXRhfSk7XG5cdFx0fSk7XG4gICAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdC8vbW9yZSB0aGFuIG9uZSBjaGlsZFxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCl7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdGluaXREYXRhOiBfdGhpcy5zdGF0ZS5pbml0RGF0YVxuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0XG5cdFx0cmV0dXJuIDxkaXY+eyBjaGlsZHJlbldpdGhQcm9wcyB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiIsIiBcbnZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cHJvcFR5cGVzOiB7XG5cdFx0aW5pdERhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgbGlzdEl0ZW1zID0gW11cblxuXHRcdGlmKF90aGlzLnByb3BzLmluaXREYXRhICYmIF90aGlzLnByb3BzLmluaXREYXRhLmxpc3QpIHtcblx0XHRcdGxpc3RJdGVtcyA9IF90aGlzLnByb3BzLmluaXREYXRhLmxpc3QubWFwKGZ1bmN0aW9uKGl0ZW0saSl7XG5cdFx0XHQgIHJldHVybiAoPGxpIGtleT17aX0+XG5cdFx0XHQgIFx0PHNwYW4+e2l0ZW0uaWR9PC9zcGFuPlxuXHRcdFx0ICBcdDxzcGFuPntpdGVtLmVtYWlsfTwvc3Bhbj5cblx0XHRcdCAgPC9saT4pXHRcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPHVsPntsaXN0SXRlbXN9IGxhbGFsdW8xPC91bD5cblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTXlDb21wb25lbnQ7IiwidmFyIE15Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL015Q29tcG9uZW50Jyk7XG52YXIgTW9jayA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Nb2NrQ29tcG9uZW50Jyk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PE1vY2s+XG5cdFx0PE15Q29tcG9uZW50Lz5cblx0PC9Nb2NrPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuKTsiXX0=
