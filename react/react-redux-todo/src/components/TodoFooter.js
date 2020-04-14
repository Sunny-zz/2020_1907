import React from 'react'
const TodoFooter = ({ filterType }) => <div>
  <button style={{ color: filterType === 'all' ? 'red' : 'black' }}>all</button>
  <button style={{ color: filterType === 'active' ? 'red' : 'black' }}>active</button>
  <button style={{ color: filterType === 'completed' ? 'red' : 'black' }}>completed</button>
</div>
export default TodoFooter