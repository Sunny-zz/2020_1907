<template>
  <div>
    我是选项卡 home
    <span>{{ num }}</span>
    <button @click="num++">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // mounted () {
  //   console.log('home组件的 mounted 钩子执行');
  // },
  // destroyed () {
  //   console.log('home组件销毁了')
  // },
  data () {
    return {
      num: 1000
    }
  },
}
</script>

<style>
</style>