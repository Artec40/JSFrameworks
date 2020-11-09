import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import deckReducer from './deck-reducer'
import informerReducer from './informer-reducer'

let reducers = combineReducers({
    informer: informerReducer,
    deck: deckReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store