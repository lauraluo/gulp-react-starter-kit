import RootComponent from './components/index/RootComponent';
import MockProvider from './components/index/MockProvider'
import ReactDOM from 'react-dom';
import React from 'react';


var Index = MockProvider(RootComponent);

ReactDOM.render(
	<Index/>,
	document.getElementById('index')
)