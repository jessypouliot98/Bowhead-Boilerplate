import React from 'react'
import { AppProvider } from './Providers/AppProvider'
import { VIEW_INITIAL_DATA } from '../../../common'
import MainRouter from './Routes/MainRouter'

class App extends React.Component {

	get initialData() {
		return window[VIEW_INITIAL_DATA];
	}

	render() {
		return (
			<AppProvider initialData={this.initialData}>

				<MainRouter/>

			</AppProvider>
		);
	}

}

export default App;
