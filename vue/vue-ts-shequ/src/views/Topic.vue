<template>
  <div v-if="topic" class="topic">
    <h2>{{ topic.title }}</h2>
    <div class="content" v-html="topic.content"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Topic extends Vue {
  topic = null
  created () {
    axios.get(`https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`).then(res => {
      this.topic = res.data.data
    })
  }
}
</script>
