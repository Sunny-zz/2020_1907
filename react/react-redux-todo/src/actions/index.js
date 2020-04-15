// 该文件存储的是 action 创建函数，其实就是一个函数返回一个对象，对象里面写了 action 类型和需要传递参数
// 一般来说不是触发异步的 action 其实并不需要写成 action 创建函数
// getTodos 应该是属于异步的cation，因为要获取数据之后在触发action 
import axios from 'axios'
// 异步的 action 创建函数需要返回一个函数（该函数有个 dispatch 作为参数）并不是对象，前提是安装中间件 thunk 或者 saga 等异步 action 创建函数逇处理插件
export const getTodos = () => {
  return dispatch => {
    axios.get('http://localhost:3008/todos').then(res => {
      dispatch({ type: 'GET_TODOS', todos: res.data })
    })
  }
}
export const toggleTodo = (id, isCompleted) => {
  return dispatch => {
    axios.patch(`http://localhost:3008/todos/${id}`, { isCompleted: isCompleted }).then(res => {
      dispatch({ type: 'TOGGLE_TODO', id })
    })
  }
}
export const delTodo = id => {
  return dispatch => {
    axios.delete(`http://localhost:3008/todos/${id}`).then(res => {
      dispatch({ type: 'DEL_TODO', id })
    })
  }
}
export const addTodo = todoText => {
  return dispatch => {
    axios.post('http://localhost:3008/todos', { todoText, isCompleted: false, editorStatus: false }).then(res => {
      dispatch({ type: 'ADD_TODO', newTodo: res.data })
    })
  }
}
export const changeType = filterType => {
  return {
    type: 'CHANGE_TYPE',
    filterType
  }
}
export const clearCompleted = () => {
  return {
    type: 'CLEAR_COMPLETED'
  }
}
export const changeAll = checked => {
  return {
    type: 'CHANGE_ALL',
    checked
  }
}

export const changeEditorStatus = (id, editorStatus) => {
  return {
    type: 'CHANGE_EDITOR_STATUS',
    id,
    editorStatus
  }
}
export const editorTodoText = (id, todoText) => {
  return {
    type: 'EDITOR_TODOTEXT',
    id,
    todoText
  }
}