import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import apiKey from './config';

// App components
import Home from './components/Home';

const App = () => {
	return (
		<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/cats" />} />
					<Route exact path="/:gallery/" render={(props) => <Home {...props} apiKey={apiKey} />} /> 
					<Route render={(props) => <Home {...props} apiKey={apiKey} NotFoundError={true} />} />
				</Switch>
		</BrowserRouter>
	);
}

export default App;
