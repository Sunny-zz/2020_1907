<template>
  <div id="app">
    <h1>todo mvc</h1>
    <div class="todo-wrap">
      <TodoForm
        @addTodo="addTodo"
        :allChecked="allChecked"
        @changeAllCompleted="changeAllCompleted"
      />
      <TodoList
        :todos="showTodos"
        @delTodo="delTodo"
        @changeTodoEditing="changeTodoEditing"
      />
      <TodoFooter
        :showType="showType"
        :activeTodosNum="activeTodosNum"
        @changeType="changeType"
        @clearCompleted="clearCompleted"
      />
    </div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'App',
  data () {
    return {
      todos: [
        {
          id: 1,
          todoText: '上课',
          completed: true,
          editing: false
        },
        {
          id: 2,
          todoText: '吃饭',
          completed: false,
          editing: false
        }
      ],
      showType: 'all'
    }
  },
  computed: {
    activeTodosNum () {
      return this.filterTodos('active').length
    },
    showTodos () {
      return this.filterTodos(this.showType)
    },
    allChecked () {
      return this.todos.every(item => item.completed)
    }

  },
  components: {
    TodoForm,
    TodoList,
    TodoFooter
  },
  methods: {
    addTodo (todoText) {
      this.todos.push({ id: new Date().getTime(), todoText, completed: false, editing: false })
    },
    delTodo (id) {
      console.log('删除操作', id)
      this.todos = this.todos.filter(item => item.id !== id)
    },
    filterTodos (type) {
      return this.todos.filter(item => type === 'all' ? true : type === 'active' ? !item.completed : item.completed)
    },
    changeType (newType) {
      this.showType = newType
    },
    clearCompleted () {
      this.todos = this.filterTodos('active')
    },
    changeAllCompleted (isCompleted) {
      // 修改数组
      this.todos.forEach(item => {
        item.completed = isCompleted
      })
    },
    changeTodoEditing (id) {
      this.todos.forEach(item => {
        if (item.id === id) {
          item.editing = !item.editing
        }
      })
    }
  },
}

</script>

<style>
.todo-wrap {
  border: 1px solid #ccc;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
