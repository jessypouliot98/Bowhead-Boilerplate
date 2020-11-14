import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainView from '../Views/MainView/MainView'

class MainRouter extends React.Component<any, any> {

    public render() {
        return (
            <Switch>
                <Route path={'/exemple'} exact render={() => 'Exemple page'}/>
                <Route path={'/'} exact component={MainView}/>

                <Redirect to={'/'}/>
            </Switch>
        );
    }

}

export default MainRouter
