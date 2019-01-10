import { connect } from 'react-redux'
import StorePage from './StorePage'
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
)(StorePage)