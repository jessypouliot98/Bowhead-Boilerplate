import React from 'react'

const Context = React.createContext({});
const { Consumer } = Context;

export interface IAppProviderProps {
	callbackFn?: Function
}

export interface IAppProviderState {
	loading: boolean,
	globalState: any,
	menu: any
}

class AppProvider extends React.Component<IAppProviderProps, IAppProviderState> {

	state = {
		plugins: {},
		loading: false,
		globalState: {},
		menu: {},
	};

	componentDidMount(){
		
	}

	render() {
		return (
			<Context.Provider value={{
				state: this.state.globalState,
			}}>
				{ !this.state.loading && (
					this.props.children
				) }
			</Context.Provider>
		);
	}

}

export {
	AppProvider,
	Consumer as AppConsumer,
	Context as AppContext
};
