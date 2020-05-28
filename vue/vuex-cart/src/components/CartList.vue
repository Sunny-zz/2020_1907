<template>
  <div class="cart-list">
    <CartProduct
      v-for="item in productListInCart"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartProduct from './CartProduct'
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['productListInCart'])
  },
  components: {
    CartProduct
  }
}
</script>

<style lang='scss'>
.cart-list {
  width: 900px;
  margin: 20px 0;
}
</style>
