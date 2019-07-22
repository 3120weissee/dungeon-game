import { connect } from 'react-redux'
import DungeonExplorer from './DungeonExplorer'
import { push } from 'connected-react-router'
import { unlockFloor, toNextFloor, incrementCurrentEvent } from '../../actions/Dungeon'
import { resetHp } from '../../actions/Player'

const mapStateToProps = (state) => {
  const {dungeon, player} = state
  const { eventList, currentEvent, currentFloor, floors } = dungeon
  const isLastFloor = floors.length-1 === currentFloor
  return {
    eventList,
    currentEvent,
    currentFloor: parseInt(currentFloor),
    isLastFloor,
    player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main')),
    goToNextFloor: (nextFloor) => dispatch(toNextFloor(nextFloor)),
    incrementCurrentEvent: () => dispatch(incrementCurrentEvent()),
    unlockFloor: (floor) => dispatch(unlockFloor(floor)),
    resetHp: () => dispatch(resetHp())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DungeonExplorer)