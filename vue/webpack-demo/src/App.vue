<template>
  <div>
    <h1>测试 webpack4 搭建 <span>vue</span> 开发环境</h1>
    <span>{{ num | toString }} </span>
    <button @click="num++">按钮</button>
    <div class="box"></div>
    <HelloWorld />
    <hr />
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
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
    return {
      num: 1000
    }
  },
  components: {
    HelloWorld,
  },
  created () {
    console.log(11213123)
  },
}
</script>

<style lang='scss'>
h1 {
  span {
    color: red;
  }
}
.box {
  display: flex;
  width: 400px;
  height: 200px;
  background-image: url("./assets/2.jpg");
  background-position: center center;
  background-size: 150%;
}
</style>