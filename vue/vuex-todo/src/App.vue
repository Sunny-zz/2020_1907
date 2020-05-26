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
import { GET_TODOS } from './store/mutationTypes'
import { mapState, mapMutations } from "vuex";
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
    TodoFooter
  },
  created () {
    this.getTodos()
  },
  computed: {
    ...mapState({
      todos: state => state.todoModule.todos
    }),
  },
  methods: {
    ...mapMutations({
      getTodos: GET_TODOS
    })
  },
}
</script>

<style>
</style>
