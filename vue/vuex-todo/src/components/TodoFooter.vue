<template>
  <div class="todo-footer">
    <!-- 未完成的 todo 个数 -->
    <!-- 1. 在该组件内获取整个 todos 数据，然后做个计算 -->
    <span>{{ activeTodosNum }} item left </span>
    <div>
      <button
        @click="changeType('all')"
        :class="{ active: showType === 'all' }"
      >
        all
      </button>
      <button
        @click="changeType('active')"
        :class="{ active: showType === 'active' }"
      >
        active
      </button>
      <button
        @click="changeType('completed')"
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
  created () {
    // console.log(this.$store)
  },
  methods: {
    ...mapMutations({
      // 因为 typeModule 模块带了命名空间
      // 调用该模块的 mutation 时，需要写成下面的样子
      // 同理 action   getter 都一样
      changeShowType: `typeModule/${CHANGE_SHOW_TYPE}`,
      clearCompleted: CLEAR_COMPLETED
    }),
    changeType (newType) {
      // 更新 store 
      this.changeShowType(newType)
      // 将新的 type 存储在浏览器中
      localStorage.setItem('type', newType)
      // console.log(JSON.parse(localStorage.getItem('todos')))
    }
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