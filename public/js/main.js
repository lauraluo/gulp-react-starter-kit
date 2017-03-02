(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 
var MyComponent = React.createClass({displayName: "MyComponent",
	render: function(){
		return React.createElement("div", null, "Hello81111")
	}
});

module.exports = MyComponent;








},{}],2:[function(require,module,exports){
console.log("main.js load");

var MyComponent = require('./components/MyComponent');

ReactDOM.render(React.createElement(MyComponent, null) , document.getElementById('main'));



},{"./components/MyComponent":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9jb250ZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQuanN4IiwiL1VzZXJzL2hzaW55aWxvL0RvY3VtZW50cy9teUdpdC9tb2NrRXhhbXBsZXMvY29udGVudC9mYWtlX2I1Y2Q1M2Q0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQSxJQUFJLGlDQUFpQywyQkFBQTtDQUNwQyxNQUFNLEVBQUUsVUFBVTtFQUNqQixPQUFPLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEsWUFBZ0IsQ0FBQTtFQUM1QjtBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDWkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFNUIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXRELFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsV0FBVyxFQUFBLElBQUUsQ0FBQSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIgXG52YXIgTXlDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPGRpdj5IZWxsbzgxMTExPC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE15Q29tcG9uZW50O1xuXG5cblxuXG5cblxuIiwiY29uc29sZS5sb2coXCJtYWluLmpzIGxvYWRcIik7XG5cbnZhciBNeUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NeUNvbXBvbmVudCcpO1xuXG5SZWFjdERPTS5yZW5kZXIoPE15Q29tcG9uZW50Lz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKTtcblxuIl19
