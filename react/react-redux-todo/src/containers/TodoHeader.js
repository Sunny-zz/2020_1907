import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo, changeAll } from '../actions';
class TodoHeader extends Component {
  state = {
    todoText: ''
  }
  render () {
    const { todoText } = this.state
    const { todos, addTodo, changeAll } = this.props
    const isAllCompleted = todos.every(item => item.isCompleted)
    return <div className='todo-header'>
      <label>全选</label><input type="checkbox" onChange={event => changeAll(event.target.checked)} checked={isAllCompleted} />
      <input value={todoText} onKeyDown={event => {
        if (event.which === 13) {
          addTodo(todoText)
          this.setState({ todoText: '' })
        }
      }}
        onChange={event => this.setState({ todoText: event.target.value })} type="text" />
      <button onClick={() => {
        addTodo(todoText)
        this.setState({ todoText: '' })
      }} >按钮</button>
    </div>
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, { addTodo, changeAll })(TodoHeader)