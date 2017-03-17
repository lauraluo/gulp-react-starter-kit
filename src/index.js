import Index from './components/index/RootComponent';
import Mock from './components/index/MockComponent';
import ReactDOM from 'react-dom';
import React from 'react-dom';

ReactDOM.render(
	<Mock>
		<Index/>
	</Mock>,
	document.getElementById('index')
)