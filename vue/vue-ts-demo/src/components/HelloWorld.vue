<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
// 组件中 ts 的写法
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  // 接收 prop  msg 如果不加 ! 声明的话 命令行会报错，提示 msg 这个属性没有被赋予初始值
  // 但是我们这个 msg 是 prop 不能再 class 内赋值，所以需要加一个 ! 告诉 ts 我这个属性 msg 肯定有值
  @Prop() private msg!: string;
}

</script>
