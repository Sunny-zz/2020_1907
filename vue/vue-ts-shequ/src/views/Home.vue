<template>
  <div class="home">
    <h2>文章列表</h2>
    <div v-if="topics.length" class="topics">
      <TopicItem v-for="topic in topics" :topic="topic" :key="topic.id" />
    </div>
    <div v-else>稍等</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
// 该插件获取 store 内的数据不能自动类型推论
import TopicItem from '../components/TopicItem.vue'
import { Topic } from '../store/modules/topics'
// 组件内 vuex 的 ts 用法要借助  vuex-class 插件
@Component({
  components: {
    TopicItem
  }
})

// 在组件中获取各种值(父组件的 props ，store 中的 state  getter  action 。。。)的时候，不会进行类型推论，需要我们自己给他设置类型
export default class Home extends Vue {
  @State(state => state.topics.topics) topics!: Topic[]
  @Action getTopics: any
  created () {
    this.getTopics()
  }
}
</script>
<style lang="scss">
</style>
