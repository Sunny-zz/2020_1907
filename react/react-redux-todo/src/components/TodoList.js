
import React, { Component } from 'react'
import Todo from './Todo'
class TodoList extends Component {
  componentDidMount () {
    this.props.getTodos()
  }
  render () {
    const { todos, toggleTodo, delTodo, changeEditorStatus, editorTodoText } = this.props
    return <div>
      {
        todos.length ? <ul>
          {todos.map(item => <Todo editorTodoText={editorTodoText} changeEditorStatus={changeEditorStatus} delTodo={delTodo} toggleTodo={toggleTodo} {...item} key={item.id} />)}
        </ul>
          : ''
      }
    </div>
  }
}
export default TodoList