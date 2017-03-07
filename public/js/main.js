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
	defaultProps: function(){
		initData: {
			list:[]
		}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTW9ja0NvbXBvbmVudC5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQuanN4IiwiL1VzZXJzL2hzaW55aWxvL0RvY3VtZW50cy9teUdpdC9tb2NrRXhhbXBsZXMvY29udGVudC9mYWtlXzMzMzJlZTUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxtQ0FBbUMsNkJBQUE7Q0FDdEMsZUFBZSxFQUFFLFVBQVU7S0FDdkIsT0FBTztNQUNOLFFBQVEsRUFBRSxFQUFFO01BQ1osQ0FBQztLQUNGO0lBQ0Qsa0JBQWtCLEVBQUUsVUFBVTtLQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUNQLE9BQU8sRUFBRSxTQUFTO0FBQ3hCLEdBQUcsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ2hCLFdBQVcsRUFBRSxDQUFDO1VBQ1YsT0FBTyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsUUFBUTtPQUNwQixDQUFDO0FBQ1IsR0FBRyxDQUFDLENBQUM7O0VBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNILEdBQUcsRUFBRSxZQUFZO01BQ2pCLFFBQVEsRUFBRSxNQUFNO0dBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztNQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDcEMsQ0FBQyxDQUFDO0tBQ0E7QUFDTCxDQUFDLE1BQU0sRUFBRSxVQUFVOztFQUVqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDakIsSUFBSSxpQkFBaUIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEtBQUssQ0FBQztHQUMvRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO0FBQ3BDLElBQUksUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUTs7SUFFOUIsQ0FBQyxDQUFDO0FBQ04sR0FBRyxDQUFDLENBQUM7QUFDTDs7RUFFRSxPQUFPLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUMsQ0FBQyxrQkFBeUIsQ0FBQTtFQUN2QztBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0FBQy9CO0FBQ0E7QUFDQTs7Ozs7QUM5Q0E7QUFDQSxJQUFJLGlDQUFpQywyQkFBQTtDQUNwQyxZQUFZLEVBQUUsVUFBVTtFQUN2QixRQUFRLEVBQUU7R0FDVCxJQUFJLENBQUMsRUFBRTtHQUNQO0VBQ0Q7Q0FDRCxNQUFNLEVBQUUsVUFBVTtFQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbkIsRUFBRSxJQUFJLFNBQVMsR0FBRyxFQUFFOztFQUVsQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtHQUNyRCxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDeEQsUUFBUSxvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLEdBQUEsRUFBRyxDQUFFLENBQUcsQ0FBQSxFQUFBO01BQ25CLG9CQUFBLE1BQUssRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEVBQVUsQ0FBQSxFQUFBO01BQ3RCLG9CQUFBLE1BQUssRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQWEsQ0FBQTtLQUNyQixDQUFBLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixHQUFHOztFQUVELE9BQU8sb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQyxTQUFlLENBQUE7RUFDM0I7QUFDRixDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVc7OztBQ3hCNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFNUIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7O0FBRWpELFFBQVEsQ0FBQyxNQUFNO0NBQ2Qsb0JBQUMsSUFBSSxFQUFBLElBQUMsRUFBQTtFQUNMLG9CQUFDLFdBQVcsRUFBQSxJQUFFLENBQUE7Q0FDUixDQUFBO0NBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDaEMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuIFxudmFyIE1vY2tDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGluaXREYXRhOiB7fVxuICAgIFx0fTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKXtcbiAgICBcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0TW9jay5zZXR1cCh7XG5cdFx0ICAgIHRpbWVvdXQ6ICcyMDAtNjAwJ1xuXHRcdH0pO1xuXG5cdFx0TW9jay5tb2NrKC9cXC5qc29uLywge1xuXHRcdCAgICAnbGlzdHwxLTEwJzogW3tcblx0XHQgICAgICAgICdpZHwrMSc6IDEsXG5cdFx0ICAgICAgICAnZW1haWwnOiAnQEVNQUlMJ1xuXHRcdCAgICB9XVxuXHRcdH0pO1xuXG5cdFx0JC5hamF4KHtcblx0XHQgICAgdXJsOiAnaGVsbG8uanNvbicsXG5cdFx0ICAgIGRhdGFUeXBlOiAnanNvbidcblx0XHR9KS5kb25lKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywganFYSFIpe1xuXHRcdCAgICBfdGhpcy5zZXRTdGF0ZSh7aW5pdERhdGE6IGRhdGF9KTtcblx0XHR9KTtcbiAgICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0Ly9tb3JlIHRoYW4gb25lIGNoaWxkXG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKXtcblx0XHRcdHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcblx0XHRcdFx0aW5pdERhdGE6IF90aGlzLnN0YXRlLmluaXREYXRhXG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRcblx0XHRyZXR1cm4gPGRpdj57IGNoaWxkcmVuV2l0aFByb3BzIH08L2Rpdj5cblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9ja0NvbXBvbmVudDtcblxuXG5cblxuIiwiIFxudmFyIE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCl7XG5cdFx0aW5pdERhdGE6IHtcblx0XHRcdGxpc3Q6W11cblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBsaXN0SXRlbXMgPSBbXVxuXG5cdFx0aWYoX3RoaXMucHJvcHMuaW5pdERhdGEgJiYgX3RoaXMucHJvcHMuaW5pdERhdGEubGlzdCkge1xuXHRcdFx0bGlzdEl0ZW1zID0gX3RoaXMucHJvcHMuaW5pdERhdGEubGlzdC5tYXAoZnVuY3Rpb24oaXRlbSxpKXtcblx0XHRcdCAgcmV0dXJuICg8bGkga2V5PXtpfT5cblx0XHRcdCAgXHQ8c3Bhbj57aXRlbS5pZH08L3NwYW4+XG5cdFx0XHQgIFx0PHNwYW4+e2l0ZW0uZW1haWx9PC9zcGFuPlxuXHRcdFx0ICA8L2xpPilcdFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8dWw+e2xpc3RJdGVtc308L3VsPlxuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNeUNvbXBvbmVudDsiLCJjb25zb2xlLmxvZyhcIm1haW4uanMgbG9hZFwiKTtcblxudmFyIE15Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL015Q29tcG9uZW50Jyk7XG52YXIgTW9jayA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Nb2NrQ29tcG9uZW50Jyk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PE1vY2s+XG5cdFx0PE15Q29tcG9uZW50Lz5cblx0PC9Nb2NrPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuKTtcblxuIl19
