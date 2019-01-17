import { createReducer } from '../utils/Redux'
import { CURRENT_DUNGEON } from '../actions/CurrentDungeon'
import { floors } from '../data/floors'
import { mix } from '../utils/mix'

const defaultState = {}

const setFloor = (state, {floor}) => ({
  currentFloor: floor,
  eventList: mix(floors[floor].events),
  currentEvent: 0
})


const toNextFloor = (state) => {
  const nextFloor = state.currentFloor + 1
  return {
    currentFloor: nextFloor,
    eventList: mix(floors[nextFloor].events),
    currentEvent: 0
  }
}

const resetCurrentDungeon = () => ({...defaultState})

const incrementEvent = (state) => {
  const { currentEvent } = state
  return {
    currentEvent: currentEvent+1
  }
}


export const currentDungeonReducer = createReducer({
  [CURRENT_DUNGEON.SET_FLOOR]: setFloor,
  [CURRENT_DUNGEON.NEXT_FLOOR]: toNextFloor,
  [CURRENT_DUNGEON.RESET_CURRENT_DUNGEON]: resetCurrentDungeon,
  [CURRENT_DUNGEON.INCREMENT_EVENT]: incrementEvent
}, defaultState)