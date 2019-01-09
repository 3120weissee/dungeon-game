export const DUNGEON = {
  INCREMENT: 'counter-increment',
  DECREMENT: 'counter-decrement'
}

export const increment = () => ({type: DUNGEON.INCREMENT})

export const decrement = () => ({type: DUNGEON.DECREMENT})