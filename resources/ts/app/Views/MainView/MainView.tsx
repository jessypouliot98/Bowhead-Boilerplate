import React from 'react'
import BaseView from '../BaseView/BaseView'
import Button from '../../Components/Button/Button'

class MainView extends BaseView<any, any> {

    public componentDidMount() {
        console.log({
            context: this.context,
            state: this.state,
            props: this.props,
        });
    }

    public render() {
        return (
            <div className={'px-5 bg-blue'}>
                <Button type={'secondary'} onClick={(e) => console.log(e)}>
                    Button
                </Button>
            </div>
        );
    }

}

export default MainView
