import { connect } from 'react-redux'
import DungeonExplorer from './DungeonExplorer'
import { push } from 'connected-react-router'
import { unlockFloor, toNextFloor, incrementCurrentEvent } from '../../actions/Dungeon'

const mapStateToProps = (state) => {
  const {dungeon} = state
  const { eventList, currentEvent, currentFloor, floors } = dungeon
  const isLastFloor = floors.length-1 === currentFloor
  return {
    eventList,
    currentEvent,
    currentFloor: parseInt(currentFloor),
    isLastFloor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main')),
    goToNextFloor: (nextFloor) => dispatch(toNextFloor(nextFloor)),
    incrementCurrentEvent: () => dispatch(incrementCurrentEvent()),
    unlockFloor: (floor) => dispatch(unlockFloor(floor))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DungeonExplorer)