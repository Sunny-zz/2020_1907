import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_TODO, DELETE_TODO, COMPLETED_TODO } from './mutationTypes';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: '打王者',
        done: false
      },
      {
        id: 2,
        text: '打联盟',
        done: false
      }
    ]
  },
  mutations: {
    // 添加 todo 
    [ADD_TODO] (state, payload) {
      // 1. splice
      // 2. push
      state.todos.push({ id: new Date().getTime(), text: payload.todoText })
    },
    // 删除 todo
    [DELETE_TODO] (state, payload) {
      // 1. filter id
      // 2. splice 索引
      state.todos = state.todos.filter(todo => todo.id !== payload.id)
    },
    [COMPLETED_TODO] (state, payload) {
      // 1. find |  forEach
      // 2. map
      const currentTodo = state.todos.find(todo => todo.id === payload.id)
      currentTodo.done = !currentTodo.done
    }
  },
})
