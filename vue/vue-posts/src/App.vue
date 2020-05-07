<template>
  <div id="app">
    <ul>
      <!-- router-link 的匹配规则是包含匹配  exact 属性变成严格匹配-->
      <li>
        <!--/hudong/uiy13?title=2018NH -->
        <!-- <router-link
          exact-active-class="active"
          :to="{
            path: '/hudong',
            params: {huodongid: 'uiy13'},
            query: { title: '2018NH' }
          }"
          >home</router-link
        > -->
        <router-link
          exact-active-class="active"
          :class="{ active: $route.path.includes('home') }"
          to="/"
          >home</router-link
        >
      </li>
      <li>
        <router-link active-class="active" to="/aboutother">about</router-link>
      </li>
    </ul>
    <button @click="back">返回</button>
    <button @click="push">事件跳转不使用 link 回到首页</button>
    <hr />
    <!-- 展示路由页面需要使用  router-view 组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back () {
      console.log(this.$router)
      this.$router.back()
    },
    push () {
      this.$router.push('/')
    }
  },
}

</script>

<style>
.active {
  color: red;
}
</style>
