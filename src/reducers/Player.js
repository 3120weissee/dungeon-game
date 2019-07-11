import { createReducer } from '../utils/Redux'
import { PLAYER } from '../actions/Player'
import WEAPONS from '../data/weapon'
import ARMOR from '../data/armor'

const defaultState = {
  hp: 50,
  strength: 1,
  defense: 1,
  weapon: WEAPONS.dagger,
  armor: ARMOR.travelerClothes,
  inventory: []
}

const increment = (state) => ({value: state.value+1})

const decrement = (state) => ({value: state.value-1})

export const playerReducer = createReducer({
  [PLAYER.INCREMENT]: increment,
  [PLAYER.DECREMENT]: decrement
}, defaultState)