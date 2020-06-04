<template>
  <div>
    <h1>sunny_zz 出品 webpack4 vue 开发环境</h1>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='scss'>
body {
  margin: 0;
}
</style>