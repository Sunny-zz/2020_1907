const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos
    case 'TOGGLE_TODO':
      // 不变性原则 
      // 不直接修改原来的 state 
      return state.map(item => item.id === action.id ? { ...item, isCompleted: !item.isCompleted } : item)
    case 'DEL_TODO':
      return state.filter(item => item.id !== action.id)
    case 'ADD_TODO':
      return [...state, action.newTodo]
    case 'CLEAR_COMPLETED':
      return state.filter(item => !item.isCompleted)
    case 'CHANGE_ALL':
      return state.map(item => {
        return { ...item, isCompleted: action.checked }
      })
    case 'CHANGE_EDITOR_STATUS':
      return state.map(item => item.id === action.id ? { ...item, editorStatus: action.editorStatus } : item)
    case 'EDITOR_TODOTEXT':
      return state.map(item => item.id === action.id ? { ...item, todoText: action.todoText } : item)
    default:
      return state
  }
}

export default todos