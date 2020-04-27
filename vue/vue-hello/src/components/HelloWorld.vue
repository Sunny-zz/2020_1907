<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a
      href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
      target="_blank"
      rel="noopener"
      >babel</a
    >
  </div>
</template>

<script>
// 导出对象下有个  props 属性，该属性是一个对象，用来接收父组件传递过来的数据，同时可以对数据进行类型检查
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- style 标签内的 scoped 属性的作用是让组件的 css 私有化 -->
<style scoped>
a {
  color: #42b983;
}
</style>
