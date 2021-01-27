import { action, observable } from "mobx"

class TodoStore {
  @observable todos = []

  @action.bound todoAdd (taskName) {
    this.todos.push({
      taskName
    })
  }
}

const todo = new TodoStore()

export default todo
