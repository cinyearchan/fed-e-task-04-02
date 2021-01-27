import { observable } from 'mobx'

class Counter {
  @observable count = 0

  increment = () => {
    this.count = this.count + 1
  }

  decrement = () => {
    this.count = this.count - 1
  }
}

const counter = new Counter()

export default counter
