import React, { useEffect } from 'react'
const Todo = ({ todoText, isCompleted, id, toggleTodo, delTodo, editorStatus, changeEditorStatus, editorTodoText }) => {
  useEffect(() => {
    if (editorStatus) {
      document.querySelector('#editor').focus()
    }
  })

  return <li> {
    !editorStatus ?
      <div>
        <input onChange={() => toggleTodo(id, !isCompleted)} type="checkbox" checked={isCompleted} />
        <span onDoubleClick={() => changeEditorStatus(id, true)}
          style={isCompleted ? { textDecoration: 'line-through', color: '#ccc' } : {}}
        >{todoText}</span>
        <button onClick={() => delTodo(id)} >删除</button>
      </div> :
      <div>
        <input id="editor" type="text" value={todoText} onChange={event => editorTodoText(id, event.target.value)} onBlur={() => todoText.trim() === '' ? delTodo(id) : changeEditorStatus(id, false)} />
      </div>
  }
  </li>
}
export default Todo