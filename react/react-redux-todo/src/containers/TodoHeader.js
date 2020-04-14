import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions';
class TodoHeader extends Component {
  state = {
    todoText: ''
  }
  render () {
    const { todoText } = this.state
    const { addTodo } = this.props
    return <div className='todo-header'>
      <input value={todoText} onChange={event => this.setState({ todoText: event.target.value })} type="text" />
      <button onClick={() => addTodo(todoText)} >按钮</button>
    </div>
  }
}

export default connect(null, { addTodo })(TodoHeader)