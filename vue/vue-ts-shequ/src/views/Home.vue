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
import TopicItem from '../components/TopicItem.vue'
// 组件内 vuex 的 ts 用法要借助  vuex-class 插件
@Component({
  components: {
    TopicItem
  }
})
export default class Home extends Vue {
  @State(state => state.topics.topics) topics
  @Action getTopics
  created () {
    this.getTopics()
  }
}
</script>
<style lang="scss">
</style>
