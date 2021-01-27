import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class TodoList extends Component {
  render () {
    const { todos, todoDelete, todoChangeStatus } = this.props.todo
    return (
      <section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{
            todos.map((todo, index) => (
              <li className={todo.isCompleted ? 'completed' : ''} key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.isCompleted} onChange={(e) => todoChangeStatus(index, e.target.checked)} />
                  <label>{ todo.taskName }</label>
                  <button className="destroy" onClick={() => todoDelete(index)}></button>
                </div>
                <input className="edit" />
              </li>
            ))
          }
				</ul>
			</section>
    )
  }
}

export default TodoList
