import React from 'react';
import TodoHeader from './containers/TodoHeader';
import TodoListContainer from './containers/TodoListContainer';
import TodoFooterContainer from './containers/TodoFooterContainer';
// import axios from 'axios';

function App () {
  // useEffect(() => {
  //   // async  await 
  //   // 可以将函数内的异步操作变成同步的 
  //   // const getTodos = async () => {
  //   //   const res = await axios.get('http://localhost:3008/todos')
  //   //   console.log(res)
  //   // }
  //   async function getTodos () {
  //     const res = await axios.get('http://localhost:3008/todos').catch(err => { alert('出错啦') })
  //     console.log(res)
  //   }
  //   getTodos()
  // })
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


// 展示
// 创建 reducer(多个)
// 创建 store (合并多个reducer)
// 提供给所有组件获取和修改的权限  Provider
// 使用，容器组件通过 connect 的 mapStateToProps

// 修改
// 在对应的 reducer 中创建修改方法
// 创建对应的 action 创建函数
// 容器组件中导入 action 创建函数 ，并包装(mapDispatchToProps)