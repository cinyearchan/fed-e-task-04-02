import { createStore, applyMiddleware } from "redux";
// import logger from './middleware/logger'
// import thunk from './middleware/thunk'
import reducer from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(thunk))
