 
var MyComponent = React.createClass({
	propTypes: {
		initData: React.PropTypes.array
	},
	render: function(){
		var _this = this;
		var listItems = []

		if(_this.props.initData && _this.props.initData.list) {
			listItems = _this.props.initData.list.map(function(item,i){
			  return (<li key={i}>
			  	<span>{item.id}</span>
			  	<span>{item.email}</span>
			  </li>)	
			});
		}
		
		return <ul>{listItems} lalaluo1</ul>
	}
});

module.exports = MyComponent;