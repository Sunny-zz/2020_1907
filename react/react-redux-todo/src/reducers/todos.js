const todos = (state = [
  {
    id: '1312',
    todoText: '第一条',
    isCompleted: true
  },
  {
    id: '1311',
    todoText: '第二条',
    isCompleted: false
  }
], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      // 不变性原则 
      // 之前的 state 不会改变
      return state.map(item => item.id === action.id ? { ...item, isCompleted: !item.isCompleted } : item)
    case 'DEL_TODO':
      return state.filter(item => item.id !== action.id)
    case 'ADD_TODO':
      return [...state, { id: new Date().getTime().toString(), isCompleted: false, todoText: action.todoText }]
    default:
      return state
  }
}

export default todos