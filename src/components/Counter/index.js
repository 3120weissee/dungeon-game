import { connect } from 'react-redux'
import Counter from './Counter'
import { increment, decrement } from '../../actions/Counter'

const mapStateToProps = (state) => {
  const {counter} = state
  return {value: counter.value}
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)