import Login from './components/login/RootComponent';
import Mock from './components/login/MockComponent';

ReactDOM.render(
	<Mock>
		<Login/>
	</Mock>,
	document.getElementById('login')
)