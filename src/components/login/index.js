var Login = require('./RootComponent');
var Mock = require('./MockComponent');


ReactDOM.render(
	<Mock>
		<Login/>
	</Mock>,
	document.getElementById('login')
)
