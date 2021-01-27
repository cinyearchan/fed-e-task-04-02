import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class AddTodo extends Component {
  render () {
    return (
      <header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" />
			</header>
    )
  }
}

export default AddTodo
