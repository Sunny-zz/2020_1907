<template>
  <div class="todo-footer">
    <span>
      {{ activeTodosNum }} item{{ activeTodosNum === 1 ? "" : "s" }} left
    </span>
    <div>
      <button
        @click="$emit('changeType', 'all')"
        :class="{ active: showType === 'all' }"
      >
        all
      </button>
      <button
        @click="$emit('changeType', 'active')"
        :class="{ active: showType === 'active' }"
      >
        active
      </button>
      <button
        @click="$emit('changeType', 'completed')"
        :class="{ active: showType === 'completed' }"
      >
        completed
      </button>
    </div>
    <button @click="$emit('clearCompleted')">clear completed</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: ['activeTodosNum', 'showType']
}
</script>

<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.active {
  color: red;
}
</style>