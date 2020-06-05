<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>价格￥{{ total }}</span>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

interface Goods {
  id: number;
  price: number;
}

@Component
export default class About extends Vue {
  arr: Array<Goods> = [
    {
      id: 1,
      price: 10
    },
    {
      id: 2,
      price: 20
    }
  ]

  get total (): string {
    return this.arr.reduce((res, item) => res + item.price, 0).toFixed(2)
  }
}
</script>
