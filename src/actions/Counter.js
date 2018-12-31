export const COUNTER = {
  INCREMENT: 'counter-increment',
  DECREMENT: 'counter-decrement'
}

export const increment = () => ({type: COUNTER.INCREMENT})

export const decrement = () => ({type: COUNTER.DECREMENT})