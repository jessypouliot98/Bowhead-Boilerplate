import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from '@providers/AppProvider'
import App from './App'
import { VIEW_INITIAL_DATA } from '../../../common'
//
const root = document.getElementById('root');

const app = (
	<AppProvider>
		<Router>
			<App/>
		</Router>
	</AppProvider>
);

ReactDOM.render(app, root);
