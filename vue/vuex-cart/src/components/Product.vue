<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <!-- ￥3999.00 -->
    <span class="price">￥{{ product.price | numberToString }}</span>
    <span class="inventory">库存剩余{{ product.showInventory }}</span>
    <button @click="add(product.id)" :disabled="product.showInventory <= 0">
      添加到购物车
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    ...mapActions(['addToCart', 'addProductToCart']),
    add (id) {
      this.addToCart(id)
      // this.addProductToCart(id)
    }
  }
}
</script>

<style lang='scss'>
.product {
  width: 200px;
  height: 160px;
  border: 1px dashed #ccc;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  h3 {
    overflow: hidden;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }
  span.price {
    color: #d91f20;
  }
  span.inventory {
    font-size: 12px;
    color: rgb(134, 132, 132);
  }
}
</style>
