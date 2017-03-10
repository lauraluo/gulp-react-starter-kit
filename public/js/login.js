(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Login = React.createClass({displayName: "Login",
	propTypes: {
		// initData: React.PropTypes.array
	},
	getInitialState: function () {
		return {
			validation: {
				result: true,
				errorMsg: null,
				account: {
					result: true,
					errorMsg: null
				},
				account: {
					result: true,
					errorMsg: null
				}
			},
			form: {
				account: {
					placeholder: "請輸入帳號",
					value: ""
				},
				account: {
					placeholder: "請輸入密碼",
					value: ""
				}		
			}
		}
	},
	render: function () {

		return React.createElement("div", null, "login MyComponent")
	}
});

module.exports = Login;

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
var Login = require('./Login');
var Mock = require('./MockComponent');

ReactDOM.render(
	React.createElement(Mock, null, 
		React.createElement(Login, null)
	),
	document.getElementById('login')
)


},{"./Login":1,"./MockComponent":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L21vY2tFeGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2dpbi9Nb2NrQ29tcG9uZW50LmpzeCIsIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbW9ja0V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvZ2luL2Zha2VfOWU0YzU2OWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBLElBQUksMkJBQTJCLHFCQUFBO0FBQy9CLENBQUMsU0FBUyxFQUFFOztFQUVWO0NBQ0QsZUFBZSxFQUFFLFlBQVk7RUFDNUIsT0FBTztHQUNOLFVBQVUsRUFBRTtJQUNYLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUU7S0FDUixNQUFNLEVBQUUsSUFBSTtLQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7S0FDUixNQUFNLEVBQUUsSUFBSTtLQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Q7SUFDRDtHQUNELElBQUksRUFBRTtJQUNMLE9BQU8sRUFBRTtLQUNSLFdBQVcsRUFBRSxPQUFPO0tBQ3BCLEtBQUssRUFBRSxFQUFFO0tBQ1Q7SUFDRCxPQUFPLEVBQUU7S0FDUixXQUFXLEVBQUUsT0FBTztLQUNwQixLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0Q7R0FDRDtFQUNEO0FBQ0YsQ0FBQyxNQUFNLEVBQUUsWUFBWTs7RUFFbkIsT0FBTyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLG1CQUF1QixDQUFBO0VBQ25DO0FBQ0YsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLOzs7QUNyQ3RCOztBQUVBLElBQUksbUNBQW1DLDZCQUFBO0NBQ3RDLGVBQWUsRUFBRSxVQUFVO0tBQ3ZCLE9BQU87TUFDTixRQUFRLEVBQUUsRUFBRTtNQUNaLENBQUM7S0FDRjtJQUNELGtCQUFrQixFQUFFLFVBQVU7S0FDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0VBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDUCxPQUFPLEVBQUUsU0FBUztBQUN4QixHQUFHLENBQUMsQ0FBQzs7RUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtNQUNoQixXQUFXLEVBQUUsQ0FBQztVQUNWLE9BQU8sRUFBRSxDQUFDO1VBQ1YsT0FBTyxFQUFFLFFBQVE7T0FDcEIsQ0FBQztBQUNSLEdBQUcsQ0FBQyxDQUFDOztFQUVILENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDSCxHQUFHLEVBQUUsWUFBWTtNQUNqQixRQUFRLEVBQUUsTUFBTTtHQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7TUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ3BDLENBQUMsQ0FBQztLQUNBO0FBQ0wsQ0FBQyxNQUFNLEVBQUUsVUFBVTs7RUFFakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0VBQ2pCLElBQUksaUJBQWlCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FDL0UsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtBQUNwQyxJQUFJLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVE7O0lBRTlCLENBQUMsQ0FBQztBQUNOLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7O0VBRUUsT0FBTyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFDLENBQUMsa0JBQXlCLENBQUE7RUFDdkM7QUFDRixDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMvQjtBQUNBO0FBQ0E7Ozs7O0FDOUNBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFdEMsUUFBUSxDQUFDLE1BQU07Q0FDZCxvQkFBQyxJQUFJLEVBQUEsSUFBQyxFQUFBO0VBQ0wsb0JBQUMsS0FBSyxFQUFBLElBQUUsQ0FBQTtDQUNGLENBQUE7Q0FDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztDQUNoQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cHJvcFR5cGVzOiB7XG5cdFx0Ly8gaW5pdERhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRyZXN1bHQ6IHRydWUsXG5cdFx0XHRcdGVycm9yTXNnOiBudWxsLFxuXHRcdFx0XHRhY2NvdW50OiB7XG5cdFx0XHRcdFx0cmVzdWx0OiB0cnVlLFxuXHRcdFx0XHRcdGVycm9yTXNnOiBudWxsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFjY291bnQ6IHtcblx0XHRcdFx0XHRyZXN1bHQ6IHRydWUsXG5cdFx0XHRcdFx0ZXJyb3JNc2c6IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZvcm06IHtcblx0XHRcdFx0YWNjb3VudDoge1xuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIuiri+i8uOWFpeW4s+iZn1wiLFxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFjY291bnQ6IHtcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCLoq4vovLjlhaXlr4bnorxcIixcblx0XHRcdFx0XHR2YWx1ZTogXCJcIlxuXHRcdFx0XHR9XHRcdFxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gPGRpdj5sb2dpbiBNeUNvbXBvbmVudDwvZGl2PlxuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbjsiLCJcbiBcbnZhciBNb2NrQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRpbml0RGF0YToge31cbiAgICBcdH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdE1vY2suc2V0dXAoe1xuXHRcdCAgICB0aW1lb3V0OiAnMjAwLTYwMCdcblx0XHR9KTtcblxuXHRcdE1vY2subW9jaygvXFwuanNvbi8sIHtcblx0XHQgICAgJ2xpc3R8MS0xMCc6IFt7XG5cdFx0ICAgICAgICAnaWR8KzEnOiAxLFxuXHRcdCAgICAgICAgJ2VtYWlsJzogJ0BFTUFJTCdcblx0XHQgICAgfV1cblx0XHR9KTtcblxuXHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJ2hlbGxvLmpzb24nLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0fSkuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGpxWEhSKXtcblx0XHQgICAgX3RoaXMuc2V0U3RhdGUoe2luaXREYXRhOiBkYXRhfSk7XG5cdFx0fSk7XG4gICAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdC8vbW9yZSB0aGFuIG9uZSBjaGlsZFxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCl7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdGluaXREYXRhOiBfdGhpcy5zdGF0ZS5pbml0RGF0YVxuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0XG5cdFx0cmV0dXJuIDxkaXY+eyBjaGlsZHJlbldpdGhQcm9wcyB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiIsInZhciBMb2dpbiA9IHJlcXVpcmUoJy4vTG9naW4nKTtcbnZhciBNb2NrID0gcmVxdWlyZSgnLi9Nb2NrQ29tcG9uZW50Jyk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PE1vY2s+XG5cdFx0PExvZ2luLz5cblx0PC9Nb2NrPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJylcbilcbiJdfQ==
