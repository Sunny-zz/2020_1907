<template>
  <div id="app">
    <h1>Vuex 购物车</h1>
    <h2>商品列表</h2>
    <ProductList />
    <hr />
    <h2>购物车</h2>
    <ShoppingCart />
  </div>
</template>

<script>

import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
