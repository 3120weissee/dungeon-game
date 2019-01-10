export const deepCopyArray = startArray => {
  return startArray.map(item => {
    if(Array.isArray(item)) return deepCopyArray(item)
    if(typeof item === 'object') return deepCopyObject(item)
    return item
  })
}

export const deepCopyObject = startObj => {
  return Object.keys(startObj).reduce((acc, key) => {
    const item = startObj[key]

    if(!item) {
      acc[key] = null
      return acc
    }

    if(Array.isArray(item)) {
      acc[key] = deepCopyArray(item)
      return acc
    }

    if(typeof item === 'object') {
      acc[key] = deepCopyObject(item)
      return acc
    }

    acc[key] = item
    return acc
  }, {})
}