import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux'
import Counter from './Components/Counter'
import { Provider } from 'react-redux'

const initialState = {
  count: 0
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

const increment = { type: 'increment' }
const decrement = { type: 'decrement' }


ReactDOM.render(
  <Provider store={store}><Counter /></Provider>,
  document.getElementById('root')
);
