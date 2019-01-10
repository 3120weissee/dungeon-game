import { mix } from './mix'

describe('mix', () => {
  test('works', () => {
    const startArray = [1,2,3,4,5,6]
    const resultArray = mix(startArray)

    expect(resultArray).toHaveLength(startArray.length)
    resultArray.forEach(item => expect(startArray.includes(item)).toBe(true))
  })
})