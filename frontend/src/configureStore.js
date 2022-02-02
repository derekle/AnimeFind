import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers/reducers'

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store