export const DUNGEON = {
  UNLOCK_FLOOR: 'unlock-floor',
  NEXT_FLOOR: 'next-floor',
  SET_FLOOR: 'set-floor',
  RESET_CURRENT_DUNGEON: 'reset-current-dungeon',
  INCREMENT_EVENT: 'increment-current-event'
}

export const toNextFloor = (nextFloor) => ({type: DUNGEON.NEXT_FLOOR, nextFloor})

export const setFloor = (floor) => ({type: DUNGEON.SET_FLOOR, floor})

export const resetCurrentDungeon = () => ({type: DUNGEON.RESET_CURRENT_DUNGEON})

export const incrementCurrentEvent = () => ({type: DUNGEON.INCREMENT_EVENT})

export const unlockFloor = nextFloor => ({type: DUNGEON.UNLOCK_FLOOR, nextFloor})