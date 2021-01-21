// import { DECREMENT, INCREMENT } from "../const/counter.const"
import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.actions'

const initialState = {
  count: 0
}

function handleIncrement (state) {
  return {
    count: state.count + 1
  }
}

function handleDecrement (state) {
  return {
    count: state.count - 1
  }
}

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement
}, initialState)
