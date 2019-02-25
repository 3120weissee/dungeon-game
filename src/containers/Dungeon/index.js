import { connect } from 'react-redux'
import Dungeon from './Dungeon'
import { push } from 'connected-react-router'
import { setFloor } from '../../actions/Dungeon'

const mapStateToProps = (state) => {
  const {dungeon} = state
  const { floors } = dungeon
  return {
    floors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main')),
    setCurrentDungeon: (floor) => dispatch(setFloor(floor))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dungeon)