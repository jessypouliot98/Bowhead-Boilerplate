import React from 'react'

const Context = React.createContext({});
const { Consumer } = Context;

export interface IAppProviderProps {
	initialData?: any,
}

export interface IAppProviderState {
	loading: boolean,
}

class AppProvider extends React.Component<IAppProviderProps, IAppProviderState> {

	state = {
		loading: false,
	};

	render() {
		return (
			<Context.Provider value={{ foo: 'bar' }}>
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
