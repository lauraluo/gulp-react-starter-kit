var Login = require('./LoginComponent');
var Mock = require('./MockComponent');

ReactDOM.render(
	<Mock>
		<Login/>
	</Mock>,
	document.getElementById('main')
);
