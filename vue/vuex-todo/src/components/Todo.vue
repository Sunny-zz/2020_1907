<template>
  <div class="todo">
    <span @click="completedTodo(todo.id)" :class="{ done: todo.done }">{{
      todo.text
    }}</span>
    <button @click="del(todo.id)">删除</button>
  </div>
</template>

<script>
import { DELETE_TODO, COMPLETED_TODO } from '../store/mutationTypes';
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    del (id) {
      this.$store.commit({
        type: DELETE_TODO,
        id
      })
    },
    completedTodo (id) {
      this.$store.commit({
        type: COMPLETED_TODO,
        id
      })
    }
  },
}
</script>

<style>
.todo {
  width: 200px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.todo span {
  flex-grow: 1;
  padding: 10px;
  user-select: none;
  cursor: pointer;
}
.todo button {
  flex-shrink: 0;
}
.todo .done {
  color: #ccc;
  text-decoration: line-through;
}
</style>