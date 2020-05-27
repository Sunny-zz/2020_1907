<template>
  <div id="app">
    <h2>hello vuex todo</h2>
    <TodoForm />
    <TodoList v-if="todos.length" />
    <TodoFooter v-if="todos.length" />
  </div>
</template>

<script>

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import { GET_TODOS, CHANGE_SHOW_TYPE } from './store/mutationTypes'
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
    TodoFooter
  },
  // 1. created   组件首次数据等初始化完毕     首次更新数据
  // 2. mounted   组件首次在页面中渲染完毕     获取真实dom
  // 3. updated   组件的数据(props data ...)更新。页面再次渲染 完毕     获取到更新之后的数据和更新之后的真实dom
  // 4. destroyed 组件销毁(组件在页面中不存在了)  可以删除一些组件内在执行的 setInterval 等...
  async created () {
    // 触发 获取后台的 todos 数据的 action 
    // 该组件有个需求: 当获取后台数据成功之后，需要做一些其他的事情(可能是修改组件的数据也可能是再次发别的 action )

    // await 并不是会将所有的异步操作变成同步，只会将返回promise 的异步操作变成同步 (目前1. axios 可以直接使用 await 2. async 的函数)
    await this.getTodos()
    // console.log('数据更新完了，做一些别的事')
    // this.GET_TODOS()
    // 获取本地的类别(type)信息 去更新 store 
    // cookie  |   h5 本地存储  1. localStorage 不删除永久存储在浏览器中   2.sessionStorage 页面关闭就删除了
    // 存储的值只能是字符串 如果想要存储对象的话请将对象转化成 json 字符串  JSON.stringify() 
    // 获取的时候用 JSON.parse() 解析
    const type = localStorage.getItem('type')
    // localStorage.setItem('todos', JSON.stringify([
    //   { id: 1, text: '666', done: false }
    // ]))
    if (type) {
      // console.log('在浏览器中存储了 type 的值')
      this.changeShowType(type)
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todoModule.todos
    }),
  },
  methods: {
    // ...mapActions([GET_TODOS]),
    ...mapActions({
      getTodos: GET_TODOS
    }),
    ...mapMutations({
      changeShowType: `typeModule/${CHANGE_SHOW_TYPE}`
    })
  },
}
</script>

<style>
</style>
