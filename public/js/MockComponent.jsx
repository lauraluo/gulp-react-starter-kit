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






},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2Zha2VfM2VhMjcwYjAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG1DQUFtQyw2QkFBQTtDQUN0QyxlQUFlLEVBQUUsVUFBVTtLQUN2QixPQUFPO01BQ04sUUFBUSxFQUFFLEVBQUU7TUFDWixDQUFDO0tBQ0Y7SUFDRCxrQkFBa0IsRUFBRSxVQUFVO0tBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDO01BQ1AsT0FBTyxFQUFFLFNBQVM7QUFDeEIsR0FBRyxDQUFDLENBQUM7O0VBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDaEIsV0FBVyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsQ0FBQztVQUNWLE9BQU8sRUFBRSxRQUFRO09BQ3BCLENBQUM7QUFDUixHQUFHLENBQUMsQ0FBQzs7RUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ0gsR0FBRyxFQUFFLFlBQVk7TUFDakIsUUFBUSxFQUFFLE1BQU07R0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO01BQ2pDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUNwQyxDQUFDLENBQUM7S0FDQTtBQUNMLENBQUMsTUFBTSxFQUFFLFVBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUUsT0FBTyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFTLENBQUE7RUFDNUY7QUFDRixDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMvQjtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4gXG52YXIgTW9ja0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0aW5pdERhdGE6IHt9XG4gICAgXHR9O1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRNb2NrLnNldHVwKHtcblx0XHQgICAgdGltZW91dDogJzIwMC02MDAnXG5cdFx0fSk7XG5cblx0XHRNb2NrLm1vY2soL1xcLmpzb24vLCB7XG5cdFx0ICAgICdsaXN0fDEtMTAnOiBbe1xuXHRcdCAgICAgICAgJ2lkfCsxJzogMSxcblx0XHQgICAgICAgICdlbWFpbCc6ICdARU1BSUwnXG5cdFx0ICAgIH1dXG5cdFx0fSk7XG5cblx0XHQkLmFqYXgoe1xuXHRcdCAgICB1cmw6ICdoZWxsby5qc29uJyxcblx0XHQgICAgZGF0YVR5cGU6ICdqc29uJ1xuXHRcdH0pLmRvbmUoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBqcVhIUil7XG5cdFx0ICAgIF90aGlzLnNldFN0YXRlKHtpbml0RGF0YTogZGF0YX0pO1xuXHRcdH0pO1xuICAgIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHQvL21vcmUgdGhhbiBvbmUgY2hpbGRcblx0XHQvLyB2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKXtcblx0XHQvLyBcdFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdC8vIFx0XHRkYXRhOiB0aGlzLmluaXREYXRhXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9KTtcblxuXHRcdFxuXHRcdHJldHVybiA8ZGl2PnsgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHsgZGF0YTogdGhpcy5zdGF0ZS5pbml0RGF0YSB9KSB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiJdfQ==
