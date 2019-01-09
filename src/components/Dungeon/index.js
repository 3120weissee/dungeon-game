import { connect } from 'react-redux'
import Dungeon from './Dungeon'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  const {counter, dungeon} = state
  const { value } = counter
  const { floors } = dungeon
  return {
    value,
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