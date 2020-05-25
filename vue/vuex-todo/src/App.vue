<template>
  <div id="app">
    <h2>hello vuex todo</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList
  },
}
</script>

<style>
</style>
