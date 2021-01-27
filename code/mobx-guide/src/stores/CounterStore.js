import { observable, action, configure, runInAction } from 'mobx'
import axios from 'axios'

// 通过配置强制程序使用 action 函数更改应用程序中的状态
// 如果不使用 action 装饰器，则无法更改状态
configure({ enforceActions: 'observed' })

class Counter {
  @observable count = 0
  @observable users = []

  @action.bound increment () {
    this.count = this.count + 1
  }

  @action.bound decrement () {
    this.count = this.count - 1
  }

  @action.bound async getData () {
    let { data } = await axios.get('https://api.github.com/users')
    runInAction(() => this.users = data)
  }
}

const counter = new Counter()

export default counter
