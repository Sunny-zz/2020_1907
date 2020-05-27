<template>
  <div class="todo">
    <span @click="completedTodo(todo.id)" :class="{ done: todo.done }">{{
      todo.text
    }}</span>
    <button @click="delTodo(todo.id)">删除</button>
  </div>
</template>

<script>
import { DELETE_TODO, COMPLETED_TODO } from '../store/mutationTypes';
import { mapMutations, mapActions } from 'vuex'
// this.$store.xxx   ===  辅助函数优化
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    // del (id) {
    //   this.$store.commit({
    //     type: DELETE_TODO,
    //     id
    //   })
    // },
    // completedTodo (id) {
    //   this.$store.commit({
    //     type: COMPLETED_TODO,
    //     id
    //   })
    // }
    // 类似于直接将 store 中的 mutation 函数获取到了，调用的时候传递参数相当于载荷
    ...mapMutations({
      completedTodo: COMPLETED_TODO
    }),
    ...mapActions({
      delTodo: DELETE_TODO
    })
    // ...mapMutations([DELETE_TODO, COMPLETED_TODO])
  },
  // destroyed () {
  //   console.log('组件销毁了', this)
  // },
  // beforeDestroy () {
  //   console.log('组件销毁之前', this)
  // },
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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