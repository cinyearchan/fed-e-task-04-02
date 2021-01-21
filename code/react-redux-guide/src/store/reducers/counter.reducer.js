import { DECREMENT, INCREMENT } from "../const/counter.const"
import { HIDEMODAL, SHOWMODAL } from "../const/modal.const"

const initialState = {
  count: 0,
  show: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      }
    case SHOWMODAL:
      return {
        ...state,
        show: true
      }
    case HIDEMODAL:
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}
