(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


},{}],2:[function(require,module,exports){

 
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






},{}],3:[function(require,module,exports){
var Login = require('./LoginComponent');
var Mock = require('./MockComponent');

ReactDOM.render(
	React.createElement(Mock, null, 
		React.createElement(Login, null)
	),
	document.getElementById('main')
);


},{"./LoginComponent":1,"./MockComponent":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkNvbXBvbmVudC5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2dpbi9Nb2NrQ29tcG9uZW50LmpzeCIsIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvZ2luL2Zha2VfNDY3MGNlM2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBOztBQUVBLElBQUksbUNBQW1DLDZCQUFBO0NBQ3RDLGVBQWUsRUFBRSxVQUFVO0tBQ3ZCLE9BQU87TUFDTixRQUFRLEVBQUUsRUFBRTtNQUNaLENBQUM7S0FDRjtJQUNELGtCQUFrQixFQUFFLFVBQVU7S0FDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0VBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDUCxPQUFPLEVBQUUsU0FBUztBQUN4QixHQUFHLENBQUMsQ0FBQzs7RUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtNQUNoQixXQUFXLEVBQUUsQ0FBQztVQUNWLE9BQU8sRUFBRSxDQUFDO1VBQ1YsT0FBTyxFQUFFLFFBQVE7T0FDcEIsQ0FBQztBQUNSLEdBQUcsQ0FBQyxDQUFDOztFQUVILENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDSCxHQUFHLEVBQUUsWUFBWTtNQUNqQixRQUFRLEVBQUUsTUFBTTtHQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7TUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ3BDLENBQUMsQ0FBQztLQUNBO0FBQ0wsQ0FBQyxNQUFNLEVBQUUsVUFBVTs7RUFFakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0VBQ2pCLElBQUksaUJBQWlCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FDL0UsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtBQUNwQyxJQUFJLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVE7O0lBRTlCLENBQUMsQ0FBQztBQUNOLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7O0VBRUUsT0FBTyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFDLENBQUMsa0JBQXlCLENBQUE7RUFDdkM7QUFDRixDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMvQjtBQUNBO0FBQ0E7Ozs7O0FDOUNBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3hDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUV0QyxRQUFRLENBQUMsTUFBTTtDQUNkLG9CQUFDLElBQUksRUFBQSxJQUFDLEVBQUE7RUFDTCxvQkFBQyxLQUFLLEVBQUEsSUFBRSxDQUFBO0NBQ0YsQ0FBQTtDQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0NBQy9CLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lMMVZ6WlhKekwyaHphVzU1YVd4dkwwUnZZM1Z0Wlc1MGN5OXRlVWRwZEM5dGIyTnJSWGhoYlhCc1pYTXZjM0pqTDJOdmJYQnZibVZ1ZEhNdmJHOW5hVzR2VEc5bmFXNURiMjF3YjI1bGJuUXVhbk40SWl3aWMyOTFjbU5sY3lJNld5SXZWWE5sY25NdmFITnBibmxwYkc4dlJHOWpkVzFsYm5SekwyMTVSMmwwTDIxdlkydEZlR0Z0Y0d4bGN5OXpjbU12WTI5dGNHOXVaVzUwY3k5c2IyZHBiaTlNYjJkcGJrTnZiWEJ2Ym1WdWRDNXFjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlKZGZRPT0iLCJcbiBcbnZhciBNb2NrQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRpbml0RGF0YToge31cbiAgICBcdH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdE1vY2suc2V0dXAoe1xuXHRcdCAgICB0aW1lb3V0OiAnMjAwLTYwMCdcblx0XHR9KTtcblxuXHRcdE1vY2subW9jaygvXFwuanNvbi8sIHtcblx0XHQgICAgJ2xpc3R8MS0xMCc6IFt7XG5cdFx0ICAgICAgICAnaWR8KzEnOiAxLFxuXHRcdCAgICAgICAgJ2VtYWlsJzogJ0BFTUFJTCdcblx0XHQgICAgfV1cblx0XHR9KTtcblxuXHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJ2hlbGxvLmpzb24nLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0fSkuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGpxWEhSKXtcblx0XHQgICAgX3RoaXMuc2V0U3RhdGUoe2luaXREYXRhOiBkYXRhfSk7XG5cdFx0fSk7XG4gICAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdC8vbW9yZSB0aGFuIG9uZSBjaGlsZFxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCl7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdGluaXREYXRhOiBfdGhpcy5zdGF0ZS5pbml0RGF0YVxuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0XG5cdFx0cmV0dXJuIDxkaXY+eyBjaGlsZHJlbldpdGhQcm9wcyB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiIsInZhciBMb2dpbiA9IHJlcXVpcmUoJy4vTG9naW5Db21wb25lbnQnKTtcbnZhciBNb2NrID0gcmVxdWlyZSgnLi9Nb2NrQ29tcG9uZW50Jyk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PE1vY2s+XG5cdFx0PExvZ2luLz5cblx0PC9Nb2NrPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuKTtcbiJdfQ==
