export const CURRENT_DUNGEON = {
  NEXT_FLOOR: 'next-floor',
  SET_FLOOR: 'set-floor',
  RESET_CURRENT_DUNGEON: 'reset-current-dungeon',
  INCREMENT_EVENT: 'increment-current-event'
}

export const toNextFloor = () => ({type: CURRENT_DUNGEON.NEXT_FLOOR})

export const setFloor = (floor) => ({type: CURRENT_DUNGEON.SET_FLOOR, floor})

export const resetCurrentDungeon = () => ({type: CURRENT_DUNGEON.RESET_CURRENT_DUNGEON})

export const incrementCurrentEvent = () => ({type: CURRENT_DUNGEON.INCREMENT_EVENT})