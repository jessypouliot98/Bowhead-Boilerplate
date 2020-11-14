import React from 'react'
import { AppContext } from '../../Providers/AppProvider'
import { RouteComponentProps } from 'react-router-dom'

export type BaseViewProps<T = any> = RouteComponentProps<T>

export type BaseViewState = {}

abstract class BaseView<P extends BaseViewProps = BaseViewProps, S extends BaseViewState = BaseViewState> extends React.Component<P, S> {

    static contextType = AppContext;

}

export default BaseView
