
import { combineReducers, createStore } from 'redux'

import animeReducer from './animeReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
    anime: animeReducer,
    theme: themeReducer
})
export default rootReducer