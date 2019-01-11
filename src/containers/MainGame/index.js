import { connect } from 'react-redux'
import MainGame from './MainGame'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  const { player } = state
  return {
    player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToStore: () => dispatch(push('/store')),
    goToDungeon: () => dispatch(push('/dungeon')),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGame)