import { takeEvery, put, delay } from 'redux-saga/effects'
import { increment } from '../actions/counter.actions'
import { INCREMENT_ASYNC } from '../const/counter.const'
// takeEvery 接收 action
// put 触发 action

function* increment_async_fn () {
  yield delay(2000)
  yield put(increment(10))
}

export default function* counterSaga () {
  // 接收 action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}
