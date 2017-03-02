 
var MyComponent = React.createClass({
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
			  return (<li key={i}>
			  	<span>{item.id}</span>
			  	<span>{item.email}</span>
			  </li>)	
			});
		}

		return <ul>{listItems}</ul>
	}
});

module.exports = MyComponent;