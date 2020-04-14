import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, toggleTodo, delTodo }) => {

  return <div>
    {
      todos.length ? <ul>
        {todos.map(item => <Todo delTodo={delTodo} toggleTodo={toggleTodo} {...item} key={item.id} />)}
      </ul>
        :
        <div>暂无待办事项</div>
    }
  </div>
}
export default TodoList