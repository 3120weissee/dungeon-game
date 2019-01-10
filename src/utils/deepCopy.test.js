import {deepCopyArray, deepCopyObject} from './deepCopy'

const testArrays = [
  {
    title: 'simple array copy',
    testItem: [1,2,3]
  },
  {
    title: 'nested array copy',
    testItem: [[1,2], [3,[4,5]]]
  },
  {
    title: 'with objects',
    testItem: [{a:1, b:2}, {c:3, d:4}]
  },
  {
    title: 'mixed',
    testItem: [1, [2,[3,4], {a:1}], {b: [1,2, [3, [4,5]]], c:4}]
  }
]

const testObjects = [
  {
    title: 'simple object copy',
    testItem: {a: 1, b: 2}
  },
  {
    title: 'nested objects',
    testItem: {x: {a:1, b:2}, y: {c:3, d: {e: 4}}}
  },
  {
    title: 'with arrays',
    testItem: {b: [1,2], c: [3,4]}
  },
  {
    title: 'mixed',
    testItem: {x: {a:1, b:[2,3]}, y: [{c: 4}, 5], z:6}
  }
]


describe('deep copy', () => {

  describe('array', () => {
    const testResults = (startArray, resultArray) => {
      startArray.forEach((item, idx) => expect(item).toEqual(resultArray[idx]))
    }

    testArrays.forEach(testConfig => {
      const {title, testItem} = testConfig
      test(title, () => {
        testResults(testItem, deepCopyArray(testItem))
      })
    })
  })

  describe('object', () => {
    const testResults = (startObject, resultObject) => {
      Object.keys(startObject).forEach(key => expect(startObject[key]).toEqual(resultObject[key]))
    }

    testObjects.forEach(testConfig => {
      const {title, testItem} = testConfig
      test(title, () => {
        testResults(testItem, deepCopyObject(testItem))
      })
    })
  })
})