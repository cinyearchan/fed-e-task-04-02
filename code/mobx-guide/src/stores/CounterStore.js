import { observable, action, configure } from 'mobx'

// 通过配置强制程序使用 action 函数更改应用程序中的状态
// 如果不使用 action 装饰器，则无法更改状态
configure({ enforceActions: 'observed' })

class Counter {
  @observable count = 0

  @action.bound increment () {
    this.count = this.count + 1
  }

  @action.bound decrement () {
    this.count = this.count - 1
  }
}

const counter = new Counter()

export default counter
