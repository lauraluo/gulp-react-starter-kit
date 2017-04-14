import Index from './components/index/RootComponent';
import MockComponent from './components/index/MockComponent'
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
	<MockComponent>
		<Index/>
	</MockComponent>,
	document.getElementById('index')
)