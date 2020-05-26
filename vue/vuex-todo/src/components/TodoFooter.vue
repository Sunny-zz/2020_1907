<template>
  <div class="todo-footer">
    <!-- 未完成的 todo 个数 -->
    <!-- 1. 在该组件内获取整个 todos 数据，然后做个计算 -->
    <span>{{ activeTodosNum }} item left </span>
    <div>
      <button
        @click="changeShowType('all')"
        :class="{ active: showType === 'all' }"
      >
        all
      </button>
      <button
        @click="changeShowType('active')"
        :class="{ active: showType === 'active' }"
      >
        active
      </button>
      <button
        @click="changeShowType('completed')"
        :class="{ active: showType === 'completed' }"
      >
        completed
      </button>
    </div>
    <button @click="clearCompleted">clear completed</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { CHANGE_SHOW_TYPE, CLEAR_COMPLETED } from '../store/mutationTypes';
export default {
  name: 'TodoFooter',
  computed: {
    ...mapState({
      showType: state => state.typeModule.showType
    }),
    // 如何获取 store 中的 getters 
    // activeNum () {
    //   console.log(this)
    //   return this.$store.getters.activeTodosNum
    // }
    ...mapGetters(['activeTodosNum'])
    // ...mapGetters({
    //   activeNum: 'activeTodosNum'
    // })
  },
  methods: {
    ...mapMutations({
      changeShowType: CHANGE_SHOW_TYPE,
      clearCompleted: CLEAR_COMPLETED
    })
  },
}
</script>

<style>
.todo-footer {
  margin-top: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.todo-footer .active {
  color: red;
}
</style>