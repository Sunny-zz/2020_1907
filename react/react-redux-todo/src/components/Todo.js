import React from 'react'
const Todo = ({ todoText, isCompleted, id, toggleTodo, delTodo }) => <li>
  <span onClick={() => toggleTodo(id)}
    style={isCompleted ? { textDecoration: 'line-through', color: '#ccc' } : {}}
  >{todoText}</span>
  <button onClick={() => delTodo(id)} >删除</button>
</li>
export default Todo