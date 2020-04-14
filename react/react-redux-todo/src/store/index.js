import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import todos from '../reducers/todos'
import filterType from '../reducers/filterType'
// store 数据的拆分
// store中的数据会有很多，处理数据的逻辑就会有更多如果都写道一个 reducer 函数内会非常乱不好处理
// 可以使用 redux 包中的 combineReducers 合并多个 reducer 
const rootReducer = combineReducers({
  todos,
  filterType
})
// 合并之后的state 
// { todos:todos,  filterType:filterType }
const store = createStore(rootReducer, applyMiddleware(logger))
export default store