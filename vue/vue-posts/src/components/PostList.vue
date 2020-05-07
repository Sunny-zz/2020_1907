<template>
  <div>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
    <div v-else>请稍等...</div>
  </div>
</template>

<script>
// 在 vue 中引入第三方插件的方式 
// 1. 在某个组件中引入并使用(只能在这个组件中使用)
// 设置成全局
// 2. 使用 Vue.use 方法将该插件当成全局插件。只要是在vue 项目中都能使用，不需要再引入了
// 3. 假如导入的第三方插件不是组件形式的，我可以使用 Vue.prototype 将该插件定义成 vue 的全局变量在组建内可以使用 this.属性 访问
// import axios from 'axios'
export default {
  name: 'PostList',
  data () {
    return {
      posts: []
    }
  },
  created () {
    // console.log(this)
    this.axios.get('http://localhost:3000/posts').then(res => {
      this.posts = res.data
    })
  },
}
</script>

<style>
</style>