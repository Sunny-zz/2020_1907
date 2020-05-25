<template>
  <div class="todo-form">
    <input type="text" v-model="todoText" @keydown.13="addTodo" />
    <button @click="addTodo">添加</button>
  </div>
</template>

<script>
import { ADD_TODO } from '../store/mutationTypes';
export default {
  name: 'TodoForm',
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit({
        type: ADD_TODO,
        todoText: this.todoText
      })
      this.todoText = ''
    }
  },
}
</script>

<style>
</style>