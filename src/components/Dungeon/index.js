import { connect } from 'react-redux'
import Dungeon from './Dungeon'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  const {counter} = state
  return {value: counter.value}
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