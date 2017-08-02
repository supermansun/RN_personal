import {
    AppRegistry
} from 'react-native';
import React, { Compnonent } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduces from './store/reduces/index'
import Index from './index'
import thunk from 'redux-thunk'
const store = createStore(reduces, applyMiddleware(thunk))
export default class rn_pro extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )

    }
}