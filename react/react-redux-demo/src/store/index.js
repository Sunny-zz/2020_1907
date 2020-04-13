// store 用来存储共享 state 的
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// createStore 是一个方法，该方法可以创建 store 
// 如何创建
// 该方法需要接收一个函数作为参数(这个函数叫做 reducer 函数),用来初始化 store 的数据的,也能添加修改数据的方法
// 该函数如何创建
// const rootReducer = (state = { num: 10 }) => state
const rootReducer = (state = { num: 10 }, action) => {
  // 修改 state 的时候要满足不变性原则
  // 不修改原来的 state 返回新的 state
  switch (action.type) {
    case 'ADD':
      console.log('加了')
      return { num: state.num + 1 }

    case 'DECREMENT':
      console.log('减了')
      const number = action.number ? action.number : 1
      return { num: state.num - number }
    default:
      return state
  }
}
const store = createStore(rootReducer, applyMiddleware(logger))
export default store

// 为了更清楚的看到 store 中的数据变化可以安装一个第三方工具 redux-logger 实时监测 store 的变化
// 该工具是给 redux 添加功能的插件 称之为中间件 需要使用 redux 中的 applyMiddleware 方法加载该功能