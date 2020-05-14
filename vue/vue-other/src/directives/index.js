import Vue from 'vue'
// 创建全局指令
// Vue.directive(指令名称(并不需要写 v-focus),{设置钩子函数})
// 钩子函数会在使用指令的时候触发，一般我们设置  inserted 钩子 或者 bind 钩子
Vue.directive('focus', {
  // inserted 钩子函数 该函数接收四个参数
  // 第一个参数 el  指令所绑定的元素，可以用来直接操作 DOM。真实的 dom 元素
  // 第一个参数 binding  是一个对象 
  inserted: function (el, binding) {
    // 指令的功能
    if (binding.value) {
      el.focus()
    }
  }
})