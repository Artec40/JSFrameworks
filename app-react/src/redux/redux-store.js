import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import decksReducer from './decks-reducer'
import informerReducer from './informer-reducer'

let reducers = combineReducers({
    informer: informerReducer,
    decks: decksReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store