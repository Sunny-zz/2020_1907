<template>
  <div id="app">
    <h1>hello</h1>
    <Header />
    <hr />
    <Main></Main>
    <button @click="handleClick">测试 lodash</button>
    <hr />
    <h3>选项卡测试动态组件</h3>
    <Tabs />
    <hr />
    <Animation />
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Tabs from './components/Tabs'
import Animation from './components/Animation'
import _ from 'lodash'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Tabs,
    Animation
  },
  // 在script标签内 各种属性想要相互使用的话,都是直接使用 this.  获取
  methods: {
    handleClick () {
      // const str = 'HELLO'
      // console.log(_.capitalize(str))
      _.debounce(this.fun, 1500)()
    },
    fun () {
      console.log('测试测试测试')
    }
  }
}

</script>

<style>
body {
  margin: 0;
}
</style>
