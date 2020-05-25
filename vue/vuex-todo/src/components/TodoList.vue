<template>
  <div v-if="todos.length" class="todo-list">
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
  <div v-else>暂无待办事项</div>
</template>

<script>
import { mapState } from 'vuex';
import Todo from './Todo'
export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  computed: mapState(['todos']),
}
</script>

<style>
</style>