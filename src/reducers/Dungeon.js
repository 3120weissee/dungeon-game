import { createReducer } from '../utils/Redux'
import { DUNGEON } from '../actions/Dungeon'
import { floors } from '../data/floors'

const defaultState = {
  floors: floors
}

const increment = (state) => ({value: state.value+1})

const decrement = (state) => ({value: state.value-1})

export const dungeonReducer = createReducer({
  [DUNGEON.INCREMENT]: increment,
  [DUNGEON.DECREMENT]: decrement
}, defaultState)