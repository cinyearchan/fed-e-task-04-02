import { action, observable } from "mobx"

class TodoStore {
  @observable todos = []

  @action.bound todoAdd (taskName) {
    this.todos.push({
      taskName,
      isCompleted: false
    })
  }

  @action.bound todoDelete (index) {
    this.todos.splice(index, 1)
  }

  @action.bound todoChangeStatus (index, state) {
    this.todos[index].isCompleted = state
  }
}

const todo = new TodoStore()

export default todo
