<template>
  <div class="todo-list">
    <!-- 注意假如自定义事件带参数那么传递多次就需要注意:  传递第一次的时候就需要传参（如果第一次参数传递不了那么就不能使用自定义事件传递了） -->
    <!-- $emit('delTodo') 其实是将 直接执行了的 delTodo 装到一个函数里面  -->
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delTodo="$emit('delTodo', todo.id)"
      @changeTodoEditing="$emit('changeTodoEditing', todo.id)"
    />
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  props: ['todos']
}
</script>

<style>
.todo-list {
  max-height: 400px;
  overflow-y: auto;
}
</style>