import { render } from 'preact';
import { LocationProvider, Router, Route, useLocation } from 'preact-iso';

import { Phrase } from './layout/Phrase/index.jsx';
import './style.css';

export function App() {
	
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Phrase} />
					<Route path="/test" component={Phrase} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
