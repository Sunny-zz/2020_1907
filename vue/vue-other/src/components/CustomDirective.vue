<template>
  <div>
    <h2>自定义指令</h2>
    <input v-focus="true" type="text" />
  </div>
</template>

<script>
export default {
  name: 'CustomDirective',
  // 局部指令只能在该组件中使用
  // directives: {
  //   focus: {
  //     // 指令的定义
  //     inserted: function (el, binding) {
  //       if (binding.value) {
  //         el.focus()
  //       }
  //     }
  //   }
  // }
}
</script>

<style>
</style>