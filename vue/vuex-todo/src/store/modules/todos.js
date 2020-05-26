import { ADD_TODO, DELETE_TODO, COMPLETED_TODO, CLEAR_COMPLETED, GET_TODOS } from '../mutationTypes';
// 一个 store 模块是一个对象,对象有 state  mutations  getters actions 属性
// 模块内的 mutations getters 其实都是全局下的，组件内部使用的时候和原来没有区别，也可以使用模块的命名空间命名
// 比如 mutation  this.$store.commit('mutation函数名')
// 比如 getters   this.$store.getters('getter函数名')

// 定义公共todo筛选方法
const filterTodos = (todos, type) => todos.filter(todo => type === 'all' ? true : type === 'active' ? !todo.done : todo.done)
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
  mutations: {
    // 获取 todos
    [GET_TODOS] (state) {
      state.todos = [
        {
          id: 1,
          text: '打王者',
          done: false
        },
        {
          id: 2,
          text: '打联盟',
          done: true
        }
      ]
    },
    // 添加 todo 
    [ADD_TODO] (state, payload) {
      // 1. splice
      // 2. push
      state.todos.push({ id: new Date().getTime(), text: payload.todoText, done: false })
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