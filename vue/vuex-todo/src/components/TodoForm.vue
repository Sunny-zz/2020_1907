<template>
  <div class="todo-form">
    <input type="text" v-model="todoText" @keydown.enter="handleClick" />
    <button @click="handleClick">添加</button>
  </div>
</template>

<script>
import { ADD_TODO } from '../store/mutationTypes';
import { mapActions } from "vuex";
export default {
  name: 'TodoForm',
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    ...mapActions({
      addTodo: ADD_TODO
    }),
    async handleClick () {
      await this.addTodo(this.todoText)
      // console.log('添加完毕了，要清空输入内容了')
      this.todoText = ''
    }
    //  xxx("admin")  ===》 ""    md5
  },
}
</script>

<style>
</style>