<template>
  <div>
    <h3>第二个使用 mixin 的组件</h3>
    <!-- <span>{{ foo }}</span> -->
  </div>
</template>

<script>
import { logHello } from '../mixins/index'

export default {
  name: 'MixinDemo1',
  mixins: [logHello],
}
</script>

<style>
</style>