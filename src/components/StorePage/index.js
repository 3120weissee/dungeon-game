import { connect } from 'react-redux'
import StorePage from './StorePage'
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
)(StorePage)