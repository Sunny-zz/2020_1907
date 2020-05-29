<template>
  <div class="cart-head">
    <label for="">
      <input
        type="checkbox"
        :checked="allProductInCartIsSelected"
        @change="allSelect($event.target.checked)"
      />
      <span>全选</span>
    </label>
    <div class="h-name">商品</div>
    <div class="h-price">单价</div>
    <div class="h-quantity">数量</div>
    <div class="h-sum">小计</div>
    <div class="h-action">操作</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CartHead',
  computed: {
    ...mapGetters(['allProductInCartIsSelected'])
  },
  methods: {
    ...mapActions(['allSelect'])
  }
}

</script>

<style lang='scss'>
.cart-head {
  display: flex;
  width: 900px;
  height: 50px;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: space-between;
}
</style>
