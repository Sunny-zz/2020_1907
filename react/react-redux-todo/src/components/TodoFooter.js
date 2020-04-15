import React from 'react'
const TodoFooter = ({ filterType, changeType, activeTodosNum, clearCompleted, completedTodosNum }) => <div><span> {activeTodosNum} item{activeTodosNum === 1 ? '' : 's'} left</span>
  <button onClick={() => changeType('all')} style={{ color: filterType === 'all' ? 'red' : 'black' }}>all</button>
  <button onClick={() => changeType('active')} style={{ color: filterType === 'active' ? 'red' : 'black' }}>active</button>
  <button onClick={() => changeType('completed')} style={{ color: filterType === 'completed' ? 'red' : 'black' }}>completed</button>
  {completedTodosNum ? <button onClick={clearCompleted}>clear completed</button> : ''}
</div>
export default TodoFooter