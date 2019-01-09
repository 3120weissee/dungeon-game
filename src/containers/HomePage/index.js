import { connect } from 'react-redux'
import HomePage from './HomePage'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  // const {} = state
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToCounter: () => dispatch(push('/counter'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)