import { createReducer } from '../utils/Redux'
import { DUNGEON } from '../actions/Dungeon'
import { floors } from '../data/floors'
import {deepCopyArray} from "../utils/deepCopy";
import {mix} from "../utils/mix";

const defaultState = {
  floors: floors
}

const unlockFloor = (state, {nextFloor}) => {
  const newFloors = deepCopyArray(state.floors)
  if(nextFloor < newFloors.length) {
    newFloors[nextFloor].locked = false
  }

  return {
    floors: newFloors
  }
}

const setFloor = (state, {floor}) => ({
  currentFloor: floor,
  eventList: mix(floors[floor].events),
  currentEvent: 0
})

const toNextFloor = (state, {nextFloor}) => ({
  currentFloor: nextFloor,
  eventList: mix(floors[nextFloor].events),
  currentEvent: 0
})

const resetCurrentDungeon = () => ({...defaultState})

const incrementEvent = (state) => {
  const { currentEvent } = state
  return {
    currentEvent: currentEvent+1
  }
}

export const dungeonReducer = createReducer({
  [DUNGEON.UNLOCK_FLOOR]: unlockFloor,
  [DUNGEON.SET_FLOOR]: setFloor,
  [DUNGEON.NEXT_FLOOR]: toNextFloor,
  [DUNGEON.RESET_CURRENT_DUNGEON]: resetCurrentDungeon,
  [DUNGEON.INCREMENT_EVENT]: incrementEvent
}, defaultState)