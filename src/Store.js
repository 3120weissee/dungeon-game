import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduceReducers from 'reduce-reducers'
import {counterReducer} from './reducers/Counter'
import {dungeonReducer} from './reducers/Dungeon'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

const createReducers = (history) => combineReducers({
  router:  connectRouter(history),
  counter: counterReducer,
  dungeon: dungeonReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reduceReducers(createReducers(history)),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
)
