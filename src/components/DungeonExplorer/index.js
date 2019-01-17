import { connect } from 'react-redux'
import DungeonExplorer from './DungeonExplorer'
import { push } from 'connected-react-router'
import { toNextFloor, incrementCurrentEvent } from '../../actions/CurrentDungeon'

const mapStateToProps = (state) => {
  const {currentDungeon} = state
  const { eventList, currentEvent } = currentDungeon
  return {
    eventList,
    currentEvent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main')),
    goToNextFloor: () => dispatch(toNextFloor()),
    incrementCurrentEvent: () => dispatch(incrementCurrentEvent())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DungeonExplorer)