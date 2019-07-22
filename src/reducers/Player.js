import { createReducer } from '../utils/Redux'
import { PLAYER } from '../actions/Player'
import WEAPONS from '../data/weapon'
import ARMOR from '../data/armor'
import { deepCopyObject } from '../utils/deepCopy'

const defaultState = {
  name: 'Player',
  maxHp: 50,
  hp: 50,
  strength: 1,
  defense: 1,
  weapon: WEAPONS.dagger,
  armor: ARMOR.travelerClothes,
  inventory: []
}

const resetHp = (state) => {
  console.log({...deepCopyObject(state), hp: state.maxHp})
  return {...deepCopyObject(state), hp: state.maxHp}
}

export const playerReducer = createReducer({
  [PLAYER.RESET_HP]: resetHp
}, defaultState)