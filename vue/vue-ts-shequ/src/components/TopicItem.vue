<template>
  <div class="topic-item">
    <router-link :to="`/user/${topic.author.loginname}`"
      ><img :src="topic.author.avatar_url" alt=""
    /></router-link>
    <router-link :to="`/topic/${topic.id}`">{{ topic.title }}</router-link>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TopicItem extends Vue {
  @Prop() topic
}
</script>
<style lang="scss">
.topic-item {
  display: flex;
  width: 80%;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  img {
    width: 50px;
    margin-right: 10px;
  }
}
</style>
