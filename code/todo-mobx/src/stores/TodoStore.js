import { action, observable } from "mobx"

class TodoStore {
  @observable todos = []

  @action.bound todoAdd (taskName) {
    this.todos.push({
      taskName
    })
  }

  @action.bound todoDelete (index) {
    this.todos.splice(index, 1)
  }
}

const todo = new TodoStore()

export default todo
