(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2Zha2VfM2M4YjUwM2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBLElBQUksaUNBQWlDLDJCQUFBO0NBQ3BDLFlBQVksRUFBRSxVQUFVO0VBQ3ZCLFFBQVEsRUFBRTtHQUNULElBQUksQ0FBQyxFQUFFO0dBQ1A7RUFDRDtDQUNELE1BQU0sRUFBRSxVQUFVO0VBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNuQixFQUFFLElBQUksU0FBUyxHQUFHLEVBQUU7O0VBRWxCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO0dBQ3JELFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN4RCxRQUFRLG9CQUFBLElBQUcsRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsQ0FBRyxDQUFBLEVBQUE7TUFDbkIsb0JBQUEsTUFBSyxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsRUFBVSxDQUFBLEVBQUE7TUFDdEIsb0JBQUEsTUFBSyxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBYSxDQUFBO0tBQ3JCLENBQUEsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLEdBQUc7O0VBRUQsT0FBTyxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFDLFNBQWUsQ0FBQTtFQUMzQjtBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIgXG52YXIgTXlDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRlZmF1bHRQcm9wczogZnVuY3Rpb24oKXtcblx0XHRpbml0RGF0YToge1xuXHRcdFx0bGlzdDpbXVxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIGxpc3RJdGVtcyA9IFtdXG5cblx0XHRpZihfdGhpcy5wcm9wcy5pbml0RGF0YSAmJiBfdGhpcy5wcm9wcy5pbml0RGF0YS5saXN0KSB7XG5cdFx0XHRsaXN0SXRlbXMgPSBfdGhpcy5wcm9wcy5pbml0RGF0YS5saXN0Lm1hcChmdW5jdGlvbihpdGVtLGkpe1xuXHRcdFx0ICByZXR1cm4gKDxsaSBrZXk9e2l9PlxuXHRcdFx0ICBcdDxzcGFuPntpdGVtLmlkfTwvc3Bhbj5cblx0XHRcdCAgXHQ8c3Bhbj57aXRlbS5lbWFpbH08L3NwYW4+XG5cdFx0XHQgIDwvbGk+KVx0XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDx1bD57bGlzdEl0ZW1zfTwvdWw+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE15Q29tcG9uZW50OyJdfQ==
