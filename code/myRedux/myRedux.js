/*
  createStore(reducer, preloadedState, enhancer)
  { getState, dispatch, subscribe }
*/
function createStore (reducer, preloadedState) {
  // store 对象中存储的状态
  var currentState = preloadedState
  // 存放订阅者函数
  var currentListeners = []

  // 通过闭包来返回状态
  function getState () {
    return currentState
  }

  // 触发 action
  function dispatch (action) {
    // 通过 reducer 更新状态
    currentState = reducer(currentState, action)
    // 循环数组，调用订阅者
    for (var i = 0; i < currentListeners.length; i++) {
      var listener = currentListeners[i]
      listener()
    }
  }

  // 订阅状态
  function subscribe (listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}