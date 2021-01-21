import { createStore, applyMiddleware } from "redux";
import logger from './middleware/logger'
import thunk from './middleware/thunk'
import reducer from './reducers'

export const store = createStore(reducer, applyMiddleware(logger, thunk))
