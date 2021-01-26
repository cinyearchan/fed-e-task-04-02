import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, saveCarts } from '../actions/cart.actions'

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

const handleSaveCarts = (state, action) => action.payload

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  [saveCarts]: handleSaveCarts
}, initialState)
