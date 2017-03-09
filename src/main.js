var MyComponent = require('./components/MyComponent');
var MockCompoment = require('./components/MockComponent');

ReactDOM.render(
	<Mock>
		<MyComponent/>
	</Mock>,
	document.getElementById('main')
);

