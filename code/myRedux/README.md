#### 核心逻辑
```javascript
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
```

#### 参数类型约束
- `reducer` 必须是函数类型
  ```javascript
  // 约束 reducer 参数类型
  if (typeof reducer !== 'function') throw new Error('reducer 必须是函数')
  ```
- `action` 类型约束
  ```javascript
  // 判断 action 是否是对象
  if (!isPlainObject(action)) throw new Error('action 必须是对象')
  // 判断对象中是否具有 type 属性
  if (typeof action.type === 'undefined') throw new Error('action 对象中必须要有 type 属性')

  // 判断 obj 参数是否是对象
  function isPlainObject (obj) {
    // 排除基本数据类型和 null
    if (typeof obj !== 'object' || obj === null) return false
    // 区分数组和对象，采用原型对象对比的方式
    var proto = obj
    while (Object.getPrototypeOf(proto) != null) {
      proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
  }
  ```