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
      addFloorEvent(Monster.Ram, 1),
      addFloorEvent(Monster.Skeleton, 1),
      addFloorEvent(Monster.CaveBat, 3)
    )
  },
  {
    name: 'Middle',
    // locked: true
  },
  {
    name: 'End',
    // locked: true
  }
]