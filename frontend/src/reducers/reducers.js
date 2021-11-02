import { combineReducers } from 'redux'
import anime from './animeReducer'
import query from './searchReducer'
import theme from './themeReducer'

export default combineReducers({
    anime,
    query,
    theme
})