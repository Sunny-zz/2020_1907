<template>
  <div v-if="post">
    <PostBody :post="post" />
    <hr />
    <PostComment />
  </div>
  <NotFound v-else-if="isNotFound"></NotFound>
  <div v-else>请稍等...</div>
</template>

<script>
import PostBody from './PostBody'
import PostComment from './PostComment'
import NotFound from './NotFound'
export default {
  name: 'Post',
  data () {
    return {
      post: null,
      isNotFound: false
    }
  },
  components: {
    PostBody,
    PostComment,
    NotFound
  },
  created () {
    // console.log(this.$route.params.id)
    const { id } = this.$route.params
    this.axios.get(`http://localhost:3000/posts/${id}`).then(res => {
      setTimeout(() => {
        this.post = res.data
      }, 1000);
    }).catch(() => {
      this.isNotFound = true
      // 记录下这个 id 在本地，当再次出现的时候就不发送请求了
    })
  },

}
</script>

<style>
</style>