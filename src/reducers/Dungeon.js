import { createReducer } from '../utils/Redux'
import { DUNGEON } from '../actions/Dungeon'
import { CURRENT_DUNGEON } from '../actions/CurrentDungeon'
import { floors } from '../data/floors'
import {deepCopyArray} from "../utils/deepCopy";

const defaultState = {
  floors: floors
}

const unlockFloor = (state, {nextFloor}) => {
  const newFloors = deepCopyArray(state.floors)
  newFloors[nextFloor].locked = false

  return {
    floors: newFloors
  }
}

export const dungeonReducer = createReducer({
  [CURRENT_DUNGEON.NEXT_FLOOR]: unlockFloor
}, defaultState)