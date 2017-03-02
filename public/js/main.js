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
		// var childrenWithProps =  React.Children.map(this.props.children, function(child){
		// 	React.cloneElement(child, {
		// 		data: this.initData
		// 	});
		// });

		
		return React.createElement("div", null,  React.cloneElement(this.props.children, { data: this.state.initData }) )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTW9ja0NvbXBvbmVudC5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQuanN4IiwiL1VzZXJzL2hzaW55aWxvL0RvY3VtZW50cy9teUdpdC9tb2NrRXhhbXBsZXMvY29udGVudC9mYWtlXzJmYTk3MjFjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxtQ0FBbUMsNkJBQUE7Q0FDdEMsZUFBZSxFQUFFLFVBQVU7S0FDdkIsT0FBTztNQUNOLFFBQVEsRUFBRSxFQUFFO01BQ1osQ0FBQztLQUNGO0lBQ0Qsa0JBQWtCLEVBQUUsVUFBVTtLQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUNQLE9BQU8sRUFBRSxTQUFTO0FBQ3hCLEdBQUcsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ2hCLFdBQVcsRUFBRSxDQUFDO1VBQ1YsT0FBTyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsUUFBUTtPQUNwQixDQUFDO0FBQ1IsR0FBRyxDQUFDLENBQUM7O0VBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNILEdBQUcsRUFBRSxZQUFZO01BQ2pCLFFBQVEsRUFBRSxNQUFNO0dBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztNQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDcEMsQ0FBQyxDQUFDO0tBQ0E7QUFDTCxDQUFDLE1BQU0sRUFBRSxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLE9BQU8sb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBUyxDQUFBO0VBQzVGO0FBQ0YsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDL0I7QUFDQTtBQUNBOzs7OztBQzVDQTtBQUNBLElBQUksaUNBQWlDLDJCQUFBO0NBQ3BDLFlBQVksRUFBRSxVQUFVO0VBQ3ZCLElBQUksRUFBRTtHQUNMLElBQUksQ0FBQyxFQUFFO0dBQ1A7RUFDRDtDQUNELE1BQU0sRUFBRSxVQUFVO0VBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNuQixFQUFFLElBQUksU0FBUyxHQUFHLEVBQUU7O0VBRWxCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0dBQzdDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNwRCxRQUFRLG9CQUFBLElBQUcsRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsQ0FBRyxDQUFBLEVBQUE7TUFDbkIsb0JBQUEsTUFBSyxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsRUFBVSxDQUFBLEVBQUE7TUFDdEIsb0JBQUEsTUFBSyxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBYSxDQUFBO0tBQ3JCLENBQUEsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLEdBQUc7O0VBRUQsT0FBTyxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFDLFNBQWUsQ0FBQTtFQUMzQjtBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVzs7O0FDeEI1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUU1QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFakQsUUFBUSxDQUFDLE1BQU07Q0FDZCxvQkFBQyxJQUFJLEVBQUEsSUFBQyxFQUFBO0VBQ0wsb0JBQUMsV0FBVyxFQUFBLElBQUUsQ0FBQTtDQUNSLENBQUE7Q0FDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUNoQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4gXG52YXIgTW9ja0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0aW5pdERhdGE6IHt9XG4gICAgXHR9O1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRNb2NrLnNldHVwKHtcblx0XHQgICAgdGltZW91dDogJzIwMC02MDAnXG5cdFx0fSk7XG5cblx0XHRNb2NrLm1vY2soL1xcLmpzb24vLCB7XG5cdFx0ICAgICdsaXN0fDEtMTAnOiBbe1xuXHRcdCAgICAgICAgJ2lkfCsxJzogMSxcblx0XHQgICAgICAgICdlbWFpbCc6ICdARU1BSUwnXG5cdFx0ICAgIH1dXG5cdFx0fSk7XG5cblx0XHQkLmFqYXgoe1xuXHRcdCAgICB1cmw6ICdoZWxsby5qc29uJyxcblx0XHQgICAgZGF0YVR5cGU6ICdqc29uJ1xuXHRcdH0pLmRvbmUoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBqcVhIUil7XG5cdFx0ICAgIF90aGlzLnNldFN0YXRlKHtpbml0RGF0YTogZGF0YX0pO1xuXHRcdH0pO1xuICAgIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHQvL21vcmUgdGhhbiBvbmUgY2hpbGRcblx0XHQvLyB2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKXtcblx0XHQvLyBcdFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdC8vIFx0XHRkYXRhOiB0aGlzLmluaXREYXRhXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9KTtcblxuXHRcdFxuXHRcdHJldHVybiA8ZGl2PnsgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHsgZGF0YTogdGhpcy5zdGF0ZS5pbml0RGF0YSB9KSB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiIsIiBcbnZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGVmYXVsdFByb3BzOiBmdW5jdGlvbigpe1xuXHRcdGRhdGE6IHtcblx0XHRcdGxpc3Q6W11cblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBsaXN0SXRlbXMgPSBbXVxuXG5cdFx0aWYoX3RoaXMucHJvcHMuZGF0YSAmJiBfdGhpcy5wcm9wcy5kYXRhLmxpc3QpIHtcblx0XHRcdGxpc3RJdGVtcyA9IF90aGlzLnByb3BzLmRhdGEubGlzdC5tYXAoZnVuY3Rpb24oaXRlbSxpKXtcblx0XHRcdCAgcmV0dXJuICg8bGkga2V5PXtpfT5cblx0XHRcdCAgXHQ8c3Bhbj57aXRlbS5pZH08L3NwYW4+XG5cdFx0XHQgIFx0PHNwYW4+e2l0ZW0uZW1haWx9PC9zcGFuPlxuXHRcdFx0ICA8L2xpPilcdFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDx1bD57bGlzdEl0ZW1zfTwvdWw+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE15Q29tcG9uZW50OyIsImNvbnNvbGUubG9nKFwibWFpbi5qcyBsb2FkXCIpO1xuXG52YXIgTXlDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTXlDb21wb25lbnQnKTtcbnZhciBNb2NrID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01vY2tDb21wb25lbnQnKTtcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8TW9jaz5cblx0XHQ8TXlDb21wb25lbnQvPlxuXHQ8L01vY2s+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4pO1xuXG4iXX0=
