import React from 'react';
import TodoHeader from './containers/TodoHeader';
import TodoListContainer from './containers/TodoListContainer';
import TodoFooterContainer from './containers/TodoFooterContainer';


function App () {
  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoHeader />
      <TodoListContainer />
      <TodoFooterContainer />
    </div>
  );
}

// const arr = [
//   {
//     id: '1',
//     text: '1111110',
//     is: false
//   },
//   {
//     id: '2',
//     text: '2222210',
//     is: true
//   }
// ]
// const newArr = arr.map(item => {
//   // item 是数组内的对象
//   const newItem = { ...item }
//   if (newItem.id === '2') { newItem.is = !newItem.is }
//   return newItem
// })
// console.log(newArr)
// console.log(arr)
export default App;
