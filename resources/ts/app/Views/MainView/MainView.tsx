import React from 'react'
import BaseView from '../BaseView/BaseView'
import Notification from '../../Components/Notification/Notification'
import Header from '../../Parts/Header/Header'
import Footer from '../../Parts/Footer/Footer'

class MainView extends BaseView<any, any> {

    public componentDidMount() {
        console.log({
            context: this.context,
            state: this.state,
            props: this.props,
        });
    }

    public render() {
        const containerClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

        return (
            <div className={'min-h-screen'}>

                <Notification
                    icon={(
                        <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    title={'Exemple notification!'}
                    message={'Lorem ipsum dolar sit'}
                    duration={10000}
                />

                <Header className={containerClass}/>

                <main className={[containerClass].join(' ')}>
                    <h1>Hello World</h1>
                </main>

                <Footer/>

            </div>
        );
    }

}

export default MainView
