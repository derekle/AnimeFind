import { combineReducers } from 'redux'
import anime from './animeReducer'
import query from './searchReducer'

export default combineReducers({
    anime,
    query
})