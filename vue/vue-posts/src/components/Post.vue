<template>
  <div v-if="post">
    <h1>
      {{ post.title }}
    </h1>
    <div v-html="post.content"></div>
    <!-- 文章评论 实现可以展示 添加  删除操作 -->
  </div>
  <NotFound v-else-if="isNotFound"></NotFound>
  <div v-else>稍等。。。</div>
</template>

<script>
import NotFound from './NotFound'
export default {
  name: 'Post',
  components: {
    NotFound,
  },
  data () {
    return {
      post: null,
      isNotFound: false
    }
  },
  // 因为vue路由被设置成了全局的，任何一个组件内都可以访问路由的信息
  // 路由提供了两个属性
  // 1. $router  代表的是整个项目的路由
  // 2. $route   代表的是当前匹配的路由
  created () {
    // console.log(this.$route.params.id)
    const { id } = this.$route.params
    this.axios.get(`http://localhost:3000/posts/${id}`).then(res => {
      // console.log(res.data)
      setTimeout(() => {
        this.post = res.data
      }, 1000);
    }).catch(() => {
      // this.$router.push('/notfound')
      this.isNotFound = true
    })


    // axios.get('http://localhost:3000/comments?postId=12312sa1')
  },
}
</script>

<style>
</style>