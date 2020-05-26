<template>
  <div class="todo-list">
    <Todo v-for="todo in showTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Todo from './Todo'
export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  computed: {
    ...mapGetters(['showTodos'])
  }
}
</script>

<style>
</style>