import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import showType from './modules/showType'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  // modules 的对象其实就是相当于以前的 store 内的 state 数据
  // state = modules   也就是说 数据有两个一个是 todos 值是 todos 模块 另外一个是 showType 值是 showType 模块
  // 因为 todos 模块内写的 state 是 {todos: [xxxx]}  所有最终 store 中的 state 内的 todos = {todos: [xxxx]} 就不直接是数组了
  // state: {
  //   todos: [],
  //   showType: 'all'
  // },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createLogger({ collapsed: false, })],
  modules: {
    todoModule: todos,
    typeModule: showType
  },
  // store 中的数据 state = {todos:{todos: []},  showType:{showType: 'all'}}
  getters: {
    num: () => {
      return 1000
    }
  }
})


