export const PLAYER = {
  INCREMENT: 'counter-increment',
  DECREMENT: 'counter-decrement'
}

export const increment = () => ({type: PLAYER.INCREMENT})

export const decrement = () => ({type: PLAYER.DECREMENT})