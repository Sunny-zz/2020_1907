<template>
  <div>
    <h2>组件注册(模块系统下)</h2>
    <BaseButton />
    <BaseInput />
  </div>
</template>

<script>
// import BaseButton from './BaseButton'
export default {
  name: 'ComponentRegister',
  // 组件的局部注册，只能在该组件中使用已经注册的组件
  // components: {
  //   BaseButton,
  // },
}
</script>

<style>
</style>