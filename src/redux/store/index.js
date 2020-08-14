/**引入createStore创建Store */

import { createStore, applyMiddleware, compose } from 'redux'
// 引入redux-thunk库
import thunk from 'redux-thunk'

import reducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
export default () => createStore(reducer, enhancer, composeWithDevTools())
