console.log("main.js load");

var MyComponent = require('./components/MyComponent');
var Mock = require('./components/MockComponent');

ReactDOM.render(
	<Mock>
		<MyComponent/>
	</Mock>,
	document.getElementById('main')
);

