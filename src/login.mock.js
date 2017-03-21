import Login from './components/login/RootComponent';
import MockComponent from './components/login/MockComponent';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
	<MockComponent>
		<Login/>
	</MockComponent>,
	document.getElementById('login')
)