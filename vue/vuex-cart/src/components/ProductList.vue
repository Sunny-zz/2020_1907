<template>
  <div class="product-list">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from './Product'
import { mapState } from 'vuex'
export default {
  name: 'ProductList',
  components: {
    Product
  },
  computed: {
    ...mapState({
      products: state => state.productModule.products
    })
  }
}
</script>

<style lang="scss">
.product-list {
  display: flex;
  width: 840px;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
