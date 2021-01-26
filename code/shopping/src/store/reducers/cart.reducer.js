import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart } from '../actions/cart.actions'

const initialState = []

const handleAddProductToLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  const product = newState.find(product => product.id === action.payload.id)

  if (product) {
    product.count = product.count + 1
  } else {
    newState.push(action.payload)
  }
  return newState
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart
}, initialState)
