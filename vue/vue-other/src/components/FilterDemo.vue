<template>
  <div>
    <h2>组件内的过滤器</h2>
    <h4>实现数据的首字母大写展示</h4>
    <!-- 过滤器的使用  参数 | 过滤器函数  会得到过滤器函数的返回值  -->
    <p>{{ msg | upperStr }}</p>
    <p :class="msg1 | camelCase">{{ msg1 | camelCase | upperFirst }}</p>
    <p>{{ date | moment("YYYY-MM-D") }}</p>
  </div>
</template>

<script>

export default {
  name: 'FilterDemo',
  data () {
    return {
      msg: 'hello',
      msg1: 'hello-world',
      date: new Date()
    }
  },
  // 创建组件内的过滤器
  // filters: {
  //   upperStr (value) {
  //     if (!value) return ''
  //     value = value.toString()
  //     return value.charAt(0).toUpperCase() + value.slice(1)
  //   }
  // },
  computed: {
    // UpperMsg () {
    //   return this.msg.charAt(0).toUpperCase() + this.msg.slice(1)
    //   
    // },
    // UpperMsg1 () {
    //   return this.msg1.charAt(0).toUpperCase() + this.msg1.slice(1)
    //   
    // }
  },
  methods: {
    // upperStr (str) {
    //   return str.charAt(0).toUpperCase() + str.slice(1)
    // }
  },
}
</script>

<style>
</style>