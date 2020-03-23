import React from 'react'
import './todo.css'
const completedStyle = {
  textDecoration: 'line-through',
  color: '#ccc'
}
const Todo = ({ todo, changeCompleted, delTodo }) => {
  const { id, isCompleted, todoText } = todo
  return <li className='todo-item'>
    <input type="checkbox" id={id} checked={isCompleted} onChange={() => changeCompleted(id)} /> <label htmlFor={id}></label> <span style={isCompleted ? completedStyle : {}}>{todoText}</span><button onClick={() => delTodo(id)}>删除</button>
  </li>
}
export default Todo