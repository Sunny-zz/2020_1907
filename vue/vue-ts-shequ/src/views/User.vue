<template>
  <div v-if="user">
    <div>
      <img :src="user.avatar_url" alt="" />
      <h4>{{ user.loginname }}</h4>
    </div>
    <hr />
    <div v-if="user.recent_replies.length">
      <h3>参与的话题</h3>
      <TopicItem
        v-for="item in user.recent_replies"
        :key="item.id"
        :topic="item"
      />
    </div>
    <hr />
    <div v-if="user.recent_topics.length">
      <h3>创建的话题</h3>
      <TopicItem
        v-for="item in user.recent_topics"
        :key="item.id"
        :topic="item"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import TopicItem from '../components/TopicItem.vue'
@Component({
  components: {
    TopicItem
  }
})
export default class User extends Vue {
  @State(state => state.user.user) user
  @Action getUser
  @Watch('$route', { immediate: true })
  getUserFun () {
    this.getUser(this.$route.params.loginname)
  }
}
</script>
