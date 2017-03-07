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






},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2Zha2VfOTEzYzRlOTkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG1DQUFtQyw2QkFBQTtDQUN0QyxlQUFlLEVBQUUsVUFBVTtLQUN2QixPQUFPO01BQ04sUUFBUSxFQUFFLEVBQUU7TUFDWixDQUFDO0tBQ0Y7SUFDRCxrQkFBa0IsRUFBRSxVQUFVO0tBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDO01BQ1AsT0FBTyxFQUFFLFNBQVM7QUFDeEIsR0FBRyxDQUFDLENBQUM7O0VBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDaEIsV0FBVyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsQ0FBQztVQUNWLE9BQU8sRUFBRSxRQUFRO09BQ3BCLENBQUM7QUFDUixHQUFHLENBQUMsQ0FBQzs7RUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ0gsR0FBRyxFQUFFLFlBQVk7TUFDakIsUUFBUSxFQUFFLE1BQU07R0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO01BQ2pDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUNwQyxDQUFDLENBQUM7S0FDQTtBQUNMLENBQUMsTUFBTSxFQUFFLFVBQVU7O0VBRWpCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztFQUNqQixJQUFJLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBQy9FLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7QUFDcEMsSUFBSSxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFROztJQUU5QixDQUFDLENBQUM7QUFDTixHQUFHLENBQUMsQ0FBQztBQUNMOztFQUVFLE9BQU8sb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQyxDQUFDLGtCQUF5QixDQUFBO0VBQ3ZDO0FBQ0YsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDL0I7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuIFxudmFyIE1vY2tDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGluaXREYXRhOiB7fVxuICAgIFx0fTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKXtcbiAgICBcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0TW9jay5zZXR1cCh7XG5cdFx0ICAgIHRpbWVvdXQ6ICcyMDAtNjAwJ1xuXHRcdH0pO1xuXG5cdFx0TW9jay5tb2NrKC9cXC5qc29uLywge1xuXHRcdCAgICAnbGlzdHwxLTEwJzogW3tcblx0XHQgICAgICAgICdpZHwrMSc6IDEsXG5cdFx0ICAgICAgICAnZW1haWwnOiAnQEVNQUlMJ1xuXHRcdCAgICB9XVxuXHRcdH0pO1xuXG5cdFx0JC5hamF4KHtcblx0XHQgICAgdXJsOiAnaGVsbG8uanNvbicsXG5cdFx0ICAgIGRhdGFUeXBlOiAnanNvbidcblx0XHR9KS5kb25lKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywganFYSFIpe1xuXHRcdCAgICBfdGhpcy5zZXRTdGF0ZSh7aW5pdERhdGE6IGRhdGF9KTtcblx0XHR9KTtcbiAgICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0Ly9tb3JlIHRoYW4gb25lIGNoaWxkXG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKXtcblx0XHRcdHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcblx0XHRcdFx0aW5pdERhdGE6IF90aGlzLnN0YXRlLmluaXREYXRhXG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRcblx0XHRyZXR1cm4gPGRpdj57IGNoaWxkcmVuV2l0aFByb3BzIH08L2Rpdj5cblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9ja0NvbXBvbmVudDtcblxuXG5cblxuIl19
