import React from 'react'
const TodoForm = ({ todoText, changeValue, addTodo, allTodoIsCompleted, clickAll, allNum }) => (
  <div>
    {allNum ? <input type="checkbox" checked={allTodoIsCompleted} onChange={clickAll} /> : ''}
    <input type="text" onKeyDown={(event) => {
      // console.log(event.keyCode)
      if (event.which === 13) {
        addTodo()
      }
    }} value={todoText} onChange={changeValue} />
    <button onClick={addTodo}>提交</button>
  </div>
)
export default TodoForm