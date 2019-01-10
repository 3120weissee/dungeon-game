import { connect } from 'react-redux'
import StartPage from './StartPage'
import { push } from 'connected-react-router'

const mapStateToProps = () => {
  // const {} = state
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMain: () => dispatch(push('/main'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPage)