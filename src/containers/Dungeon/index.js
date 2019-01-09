import { connect } from 'react-redux'
import Dungeon from './Dungeon'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  const {dungeon} = state
  const { floors } = dungeon
  return {
    floors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dungeon)