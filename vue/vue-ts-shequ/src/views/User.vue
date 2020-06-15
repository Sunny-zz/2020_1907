<template>
  <div v-if="user">
    <div>
      <img :src="user.avatar_url" alt="" />
      <h4>{{ user.loginname }}</h4>
      <span>{{ msg }}</span>
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
import TopicItem from '../components/TopicItem.vue'
import { getModule } from 'vuex-module-decorators'
import myModule from '../store/modules/myModule'
import userModule from '../store/modules/userModule'
@Component({
  components: {
    TopicItem
  }
})
export default class User extends Vue {
  $route: any
  // @State(state => state.user.user) user: any
  get user () {
    return getModule(userModule).user
  }

  get msg () {
    return getModule(myModule).message
  }

  @Watch('$route', { immediate: true })
  getUserFun () {
    getModule(userModule).fetchUser(this.$route.params.loginname)
  }
}
</script>
