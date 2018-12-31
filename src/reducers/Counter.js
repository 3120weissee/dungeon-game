import { createReducer } from '../utils/Redux'
import { COUNTER } from '../actions/Counter'

const defaultState = {
  value: 0
}

const increment = (state) => ({value: state.value+1})

const decrement = (state) => ({value: state.value-1})

export const counterReducer = createReducer({
  [COUNTER.INCREMENT]: increment,
  [COUNTER.DECREMENT]: decrement
}, defaultState)