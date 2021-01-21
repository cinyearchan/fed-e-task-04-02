import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.actions'

function Counter ({ count, increment, decrement, increment_async, decrement_async }) {
  return <div>
    <button onClick={ () => increment_async(20) }>+</button>
    <span>{ count }</span>
    <button onClick={ () => decrement(5) }>-</button>
  </div>
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
