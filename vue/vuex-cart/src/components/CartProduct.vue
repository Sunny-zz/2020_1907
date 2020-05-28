<template>
  <div class="cart-product">
    <input type="checkbox" name="" id="" />
    <div class="p-name">{{ product.name }}</div>
    <div class="p-price">{{ product.price }}</div>
    <div class="p-quantity">
      <button>-</button>
      <input type="text" :value="product.number" />
      <button>+</button>
    </div>
    <div class="p-sum">0.00</div>
    <button class="p-action">删除</button>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: ['product']
}
</script>

<style lang='scss'>
</style>
