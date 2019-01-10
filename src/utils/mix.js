import { deepCopyArray } from "./deepCopy";

const getRandomIndex = eventArray => Math.floor(Math.random() * Math.floor(eventArray.length))

export const mix = (eventArray, copyArray, resultArray=[]) => {
  if(!copyArray) {
    copyArray = deepCopyArray(eventArray)
  }

  if(copyArray.length === 0) {
    return resultArray
  }

  const index = getRandomIndex(copyArray)

  resultArray.push(copyArray[index])
  copyArray.splice(index, 1)
  return mix(eventArray, copyArray, resultArray)
}