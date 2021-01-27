import { action, computed, observable } from "mobx"

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

  @computed get unfinishedTodoCount () {
    return this.todos.filter(todo => todo.isCompleted === false).length
  }
}

const todo = new TodoStore()

export default todo
