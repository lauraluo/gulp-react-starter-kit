import Index from './components/index/RootComponent';
import ReactDOM from 'react-dom';
import React from 'react-dom';
import MockComponent from './components/index/MockComponent'

ReactDOM.render(
	<MockComponent>
		<Index/>
	</MockComponent>,
	document.getElementById('login')
)