import React from 'react'
import { connect } from 'react-redux'

function Counter ({ count, dispatch }) {
  return <div>
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    <span>{ count }</span>
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  </div>
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter)
