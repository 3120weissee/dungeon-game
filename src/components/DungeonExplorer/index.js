import { connect } from 'react-redux'
import DungeonExplorer from './DungeonExplorer'
import { push } from 'connected-react-router'
import { toNextFloor, incrementCurrentEvent } from '../../actions/CurrentDungeon'

const mapStateToProps = (state) => {
  const {currentDungeon} = state
  const { eventList, currentEvent, currentFloor } = currentDungeon
  return {
    eventList,
    currentEvent,
    currentFloor: parseInt(currentFloor)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main')),
    goToNextFloor: (nextFloor) => dispatch(toNextFloor(nextFloor)),
    incrementCurrentEvent: () => dispatch(incrementCurrentEvent())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DungeonExplorer)