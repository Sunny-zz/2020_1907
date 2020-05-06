<template>
  <div class="todo-item">
    <!-- 当 v-model 和一个 prop 关联时，只有 prop 是一个对象的时候，v-model 绑定之后相当于直接修改了 prop 也就是这个对象，这种情况 vue 是允许的。但是当你的 prop 是其他非对象类型时 v-model 会报错，需要使用原始(某个表单的值和prop挂钩，然后使用某个事件响应修改)的双向绑定替换 -->
    <!-- 例子:  todo 组件内接收的 prop 的就可以使用 v-model 双向绑定，但是 todoForm 组件内接收的 prop 就不可以 -->
    <div v-show="!todo.editing" class="todo-view">
      <input class="todo-check" type="checkbox" v-model="todo.completed" />
      <span
        @dblclick="handleDblClick"
        class="todo-content"
        :class="{ completed: todo.completed }"
        >{{ todo.todoText }}</span
      >
      <button @click="$emit('delTodo')" class="todo-del">
        删除
      </button>
    </div>
    <input
      :class="`todo-edit data-${todo.id}`"
      v-show="todo.editing"
      type="text"
      v-model="todo.todoText"
      @blur="$emit('changeTodoEditing')"
    />
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  updated () {
    console.log('更新了')
    if (this.todo.editing && document.querySelector(`.data-${this.todo.id}`) !== document.activeElement) {
      // 当该条 todo 的编辑状态是 true 并且 当前的 input 并不处于激活状态时让 input 获得焦点
      // document.activeElement 激活状态下的元素，例如选中的 checkbox 获得焦点的input ...
      console.log(111111111)
      document.querySelector(`.data-${this.todo.id}`).focus()
    }
  },
  methods: {
    handleDblClick () {
      // 让 input 变成 block
      this.$emit('changeTodoEditing')
      // 让他获得焦点
      // setTimeout(() => {
      //   document.querySelector(`.data-${this.todo.id}`).focus()
      // }, 10);
    }
  },
}
</script>

<style >
/* 默认项目在副轴上的高度大小和容器一样大，可以给项目设置大小，或者给项目设置在副轴上的排列方式让项目和自己本身一样大 */
.todo-item {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  height: 30px;
}
.todo-view {
  display: flex;
  width: 100%;
}
.todo-edit {
  margin-left: 30px;
}
.todo-content {
  flex-grow: 1;
  padding-left: 10px;
}
.todo-check,
.todo-del {
  flex-shrink: 0;
}
.completed {
  text-decoration: line-through;
  color: #ccc;
}
</style>