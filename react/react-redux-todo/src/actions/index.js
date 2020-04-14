// 该文件存储的是 action 创建函数，其实就是一个函数返回一个对象，对象里面写了 action 类型和需要传递参数
// 一般来说不是触发异步的 action 其实并不需要写成 action 创建函数
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const delTodo = id => {
  return {
    type: 'DEL_TODO',
    id
  }
}
export const addTodo = todoText => {
  return {
    type: 'ADD_TODO',
    todoText
  }
}