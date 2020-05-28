<template>
  <div v-if="isHasProductInCart" class="shopping-cart">
    <CartHead />
    <CartList />
    <CartFooter />
  </div>
  <div v-else>
    <h3>购物车空空</h3>
  </div>
</template>

<script>
import CartHead from './CartHead'
import CartFooter from './CartFooter'
import CartList from './CartList'
import { mapState } from 'vuex'
export default {
  name: 'ShoppingCart',
  components: {
    CartHead,
    CartFooter,
    CartList
  },
  computed: {
    ...mapState({
      isHasProductInCart: state => state.cartModule.productIdInCart.length > 0
    })
  }
}
</script>

<style>
</style>
