import { takeEvery, put } from 'redux-saga/effects'
import { addProductToCart, addProductToLocalCart, deleteProductFromCart, deleteProductFromLocalCart, loadCarts, saveCarts } from '../actions/cart.actions'
import axios from 'axios'

function* handleAddProductToCart (action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

function* handleLoadCarts (action) {
  const { data } = yield axios.get('http://localhost:3005/cart')
  yield put(saveCarts(data))
}

function* handleDeleteProductFromCart (action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: { cid: action.payload }
  })
  yield put(deleteProductFromLocalCart(data.index))
}

export default function* cartSaga () {
  yield takeEvery(addProductToCart, handleAddProductToCart)
  yield takeEvery(loadCarts, handleLoadCarts)
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
}
