import { ADD_TODO, DELETE_TODO, COMPLETED_TODO, CLEAR_COMPLETED, GET_TODOS } from '../mutationTypes';
import Axios from 'axios';
// 一个 store 模块是一个对象,对象有 state  mutations  getters actions 属性
// 模块内的 mutations getters 其实都是全局下的，组件内部使用的时候和原来没有区别，也可以使用模块的命名空间命名
// 比如 mutation  this.$store.commit('mutation函数名')
// 比如 getters   this.$store.getters('getter函数名')
// 定义公共todo筛选方法
const filterTodos = (todos, type) => todos.filter(todo => type === 'all' ? true : type === 'active' ? !todo.done : todo.done)
// 修改 store 数据流程  
// 1. commit  mutaion  --> store  一般是同步，如果有异步操作必须要在 commit 之前执行，异步结束之后在执行该流程
// 2. dispatch action  mutation  ---> store 可以实现同步，但一般异步的时候使用该流程，异步操作可以放到 action 内
// 带异步操作的修改推荐使用流程2，将异步放到 action 内
const todosModule = {
  state: () => ({
    todos: []
  }),
  getters: {
    // 默认会接收当前模块内的 state 作为第一个参数
    // 第二个参数 getters  代表 store(包括模块) 内所有的 getters   当一个 getter 想要调用另外一个 getter 时使用该参数
    // 第三个参数是 store 中的 state   当需要使用其他模块的数据时使用该参数
    showTodos: (state, getters, rootState) => {
      // console.log(state)
      // console.log(getters)
      // console.log(rootState)
      return filterTodos(state.todos, rootState.typeModule.showType)
    },
    activeTodosNum: (state) => filterTodos(state.todos, 'active').length
  },
  actions: {
    // action 函数默认接受 context 作为参数  context 其实和 store 一样，是 store 复制版
    async [GET_TODOS] ({ commit }) {
      // Axios.get('http://localhost:3008/todos').then(res => {
      //   console.log('数据请求回来了')
      //   commit(GET_TODOS, res.data)
      // })
      const res = await Axios.get('http://localhost:3008/todos')
      // console.log('数据来了')
      // if(res) 是不是真的拿到了数据
      commit(GET_TODOS, res.data)
    },
    async [ADD_TODO] ({ commit }, todoText) {
      const res = await Axios.post('http://localhost:3008/todos', { text: todoText, done: false })
      // console.log('后台数据更新完毕了')
      commit(ADD_TODO, res.data)
    },
    [DELETE_TODO] ({ commit }, todoId) {
      Axios.delete(`http://localhost:3008/todos/${todoId}`).then(() => {
        commit(DELETE_TODO, todoId)
      })
    }
  },
  // action 是更新后台数据，mutation 是更新本地数据
  // 如何更新本地数据  
  // 1. 根据更新后台返回的的结果去更新本地
  // 2. 后台返回的数据不能用，只能自己更新本地数据
  mutations: {
    // 获取 todos
    // mutation 函数必须是同步函数
    [GET_TODOS] (state, newTodos) {
      // console.log(newTodos)
      state.todos = newTodos
    },
    // 添加 todo 
    [ADD_TODO] (state, newTodo) {
      state.todos.push(newTodo)
    },
    // 删除 todo
    [DELETE_TODO] (state, id) {
      // 1. filter id
      // 2. splice 索引
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    [COMPLETED_TODO] (state, id) {
      // 1. find |  forEach
      // 2. map
      const currentTodo = state.todos.find(todo => todo.id === id)
      currentTodo.done = !currentTodo.done
    },
    [CLEAR_COMPLETED] (state) {
      state.todos = filterTodos(state.todos, 'active')
    }
  },
}

export default todosModule