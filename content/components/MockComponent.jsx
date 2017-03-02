
 
var MockComponent = React.createClass({
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

		
		return <div>{ React.cloneElement(this.props.children, { data: this.state.initData }) }</div>
	}
});

module.exports = MockComponent;




