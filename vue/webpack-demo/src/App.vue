<template>
  <div>
    <h1>测试 webpack4 搭建 <span>vue</span> 开发环境</h1>
    <span>{{ num | toString }} </span>
    <button @click="num++">按钮</button>
    <HelloWorld />
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
    console.log(111111111)
  },
}
</script>

<style lang='scss'>
h1 {
  span {
    color: red;
  }
}
</style>