<template>
  <div>
    <h2>
      home 页
    </h2>
    <ul>
      <li>
        <router-link
          active-class="active"
          :class="{ active: $route.path === '/' }"
          to="/home/postlist"
          >文章列表页</router-link
        >
      </li>
      <li>
        <router-link active-class="active" to="/home/userlist"
          >用户列表页</router-link
        >
      </li>
    </ul>
    <hr />
    <h3>子页面</h3>
    <!-- home 页面的子页面位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>