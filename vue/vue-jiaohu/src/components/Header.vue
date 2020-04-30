<template>
  <header>
    <h2>头部</h2>
    <Button type="login" color="red" text="登录"></Button>
    <Button type="signup" color="green" text="注册"></Button>
    <Button color="#00b3d4"></Button>
    <hr />
    <br />
    <span>{{ num }}</span>
    <br />
    <Button text="add" @add="add"></Button>
    <!-- prop 就是父组件向子组件传递数据 -->
    <!-- 自定义事件当父组件需要向子组件传递函数的时候，可以写成自定义事件的写法 -->
    <!-- 自定义事件用法  在父组件内给子组件传递一个事件这个事件属于自定义的，事件名称自己定-->
    <!-- 
      在子组件内 
      1. template 直接使用 $emit('事件名')接收 
      2. script 直接使用 this.$emit('事件名') 接收
     -->
  </header>
</template>

<script>

import Button from './Button'
export default {
  name: 'Header',
  components: {
    Button
  },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
    }
  },
  created () {
    console.log('组件的生命周期---初始化数据和事件完毕')
    // 组件首次出现的时候发送请求获取数据更新 data 
  },
  mounted () {
    console.log('组件的生命周期---初始挂载(在浏览器中出现组件的页面结构)完毕')
    // 获取页面的真实 dom 节点
    console.log(document.querySelector('header'))
  },
  updated () {
    console.log('组件的生命周期---更新data或者prop等，并且页面渲染完毕');
  }
}
</script>

<style>
</style>