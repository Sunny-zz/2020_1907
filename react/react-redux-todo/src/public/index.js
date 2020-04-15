
export const getFilterTodos = (todos, filterType) => {
  return todos.filter(item => filterType === 'all' ? true : filterType === 'active' ? !item.isCompleted : item.isCompleted)
}