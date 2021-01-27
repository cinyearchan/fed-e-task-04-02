import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class TodoExtra extends Component {
  render () {
    const { unfinishedTodoCount } = this.props.todo
    return (
      <footer className="footer">
				<span className="todo-count"><strong>{ unfinishedTodoCount }</strong> item left</span>
				<ul className="filters">
					<li>
						<button className="selected">All</button>
					</li>
					<li>
						<button>Active</button>
					</li>
					<li>
						<button>Completed</button>
					</li>
				</ul>
				
				<button className="clear-completed">Clear completed</button>
			</footer>
    )
  }
}

export default TodoExtra
