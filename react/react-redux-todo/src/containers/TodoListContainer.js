// todolist 组件的容器组件 用来帮助 todolist 组件获取 store 中的数据

import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, delTodo } from '../actions'
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
// mapDispatchToProps 方法  将一些带 dispatch 的函数当作 props 传递给组件
// const mapDispatchToProps = dispatch => {
//   return {
//     // 触发action的函数
//     // 通过 dispatch 发出的 action ，redux 希望放到 action 创建函数内，哪里需要哪里导入
//     toggleTodo: id => {
//       dispatch(toggleTodo(id))   // dispatch({type: 'TOGGLE_TODO',id})
//     }
//   }
// }
// mapDispatchToProps 添加为 connect 第一次调用的第二个参数
// mapDispatchToProps 方法有个简单的写法 正常是写成一个上面(12行---20行)类似的函数当作 props 传递
// 另外一种简单的写法是写成一个对象对象里面写上 action 创建函数

const TodoListContainer = connect(mapStateToProps, { toggleTodo, delTodo })(TodoList)
// mapdispatch 的对象写法不是直接将 action 创建函数传递过去，而是包装(带上 dispatch 发 action)之后再传递的
export default TodoListContainer

// 创建store (reducer  分类 --》 合并 )
// 共享 store (provider) 权限
// 展示 (容器组件 connect(mapstatetoprops) )
// 修改 store reducer中创建修改的方案 
// 在 容器组件 创建执行修改方案的函数(创建 action 创建函数 --->  mapdispatchtoprops )