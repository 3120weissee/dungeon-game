import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduceReducers from 'reduce-reducers'
import {counterReducer} from './reducers/Counter'

const combinedReducers = combineReducers({
  counter: counterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reduceReducers(combinedReducers),
  composeEnhancers(applyMiddleware(thunk))
)
