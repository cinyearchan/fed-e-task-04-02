import { createStore, applyMiddleware } from "redux";
// import logger from './middleware/logger'
// import thunk from './middleware/thunk'
import reducer from './reducers'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import counterSaga from './sagas/counter.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(counterSaga)
