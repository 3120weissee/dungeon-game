import Monster from './monster'

const addFloorEvent = (eventObject, howMany) => {
  const eventArray = []
  for(let i = 0; i < howMany; i++) {
    eventArray.push(eventObject)
  }
  return eventArray
}

export const floors = [
  {
    name: 'Beginning',
    events: [].concat(
      addFloorEvent(Monster.Ram, 5)
    )
  },
  {
    name: 'Middle',
    events: [].concat(
      addFloorEvent(Monster.Skeleton, 5)
    ),
    locked: true
  },
  {
    name: 'End',
    events: [].concat(
      addFloorEvent(Monster.CaveBat, 5)
    ),
    locked: true
  }
]