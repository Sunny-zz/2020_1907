<template>
  <div class="todo-form">
    <div>
      <label for="all">全选</label>
      <input
        id="all"
        type="checkbox"
        :checked="allChecked"
        @change="handleCheck"
      />
    </div>
    <input type="text" v-model="todoText" />
    <button @click="handleClick">添加</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  props: ['allChecked'],
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    handleClick () {
      let { todoText } = this
      if (todoText.trim()) {
        this.$emit('addTodo', todoText)
        this.todoText = ''
      } else {
        alert('请输入有效内容')
      }
    },
    handleCheck ($event) {
      this.$emit('changeAllCompleted', $event.target.checked)
    }
  },
}
</script>

<style>
.todo-form {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.todo-form > div {
  display: flex;
  align-items: center;
}
</style>