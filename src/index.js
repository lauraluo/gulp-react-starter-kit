import Index from './components/index/RootComponent';
import Mock from './components/index/MockComponent';

ReactDOM.render(
	<Mock>
		<Index/>
	</Mock>,
	document.getElementById('index')
)