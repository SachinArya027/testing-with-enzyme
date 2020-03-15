import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from 'components/Root';
import App from './components/App';

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Root>,
	document.getElementById('root')
);
