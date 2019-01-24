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
      addFloorEvent(Monster.Ram, 1)
    )
  },
  {
    name: 'Middle',
    events: [].concat(
      addFloorEvent(Monster.Skeleton, 1)
    ),
    locked: true
  },
  {
    name: 'End',
    events: [].concat(
      addFloorEvent(Monster.CaveBat, 3)
    ),
    locked: true
  }
]