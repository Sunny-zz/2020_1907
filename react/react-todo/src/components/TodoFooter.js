import React from 'react'
const TodoFooter = ({ showType, changeType, activeTodoNum, clearCompleted, completedTodoNum }) => <div>
  <span>{activeTodoNum} {activeTodoNum === 1 ? 'item' : 'items'} left</span>
  <button onClick={() => changeType('all')} style={{ color: showType === 'all' ? 'red' : 'black' }}>All</button>
  <button onClick={() => changeType('active')} style={{ color: showType === 'active' ? 'red' : 'black' }}>Active</button>
  <button onClick={() => changeType('completed')} style={{ color: showType === 'completed' ? 'red' : 'black' }}>Completed</button>
  {completedTodoNum !== 0 ? <button onClick={clearCompleted}>Clear Completed</button> : ''}
</div>
export default TodoFooter