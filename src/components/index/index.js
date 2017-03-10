var Index = require('./RootComponent');
var Mock = require('./MockComponent');

ReactDOM.render(
	<Mock>
		<Index/>
	</Mock>,
	document.getElementById('index')
)
