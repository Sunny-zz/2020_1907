import React from 'react'
const TodoForm = ({ todoText, changeValue, addTodo }) => <div><input type="text" value={todoText} onChange={changeValue} /><button onClick={addTodo}>提交</button></div>
export default TodoForm