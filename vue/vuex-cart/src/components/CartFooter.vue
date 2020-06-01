<template>
  <div class="cart-footer">
    <div class="left">
      <label for="">
        <input
          type="checkbox"
          :checked="allProductInCartIsSelected"
          @change="allSelect($event.target.checked)"
        />
        <span>全选</span>
      </label>
      <span
        @click="
          deleteSelectedProductInCart({
            selectedIds: $store.state.cartModule.selectedProductIdInCart,
            type: 'delete'
          })
        "
        >删除选中商品</span
      >
    </div>
    <div class="right">
      <span>已选{{ totalData.selectedProductNumInCart }}件商品</span>
      <span>总价: ￥{{ totalData.total | numberToString }}</span>
      <button
        @click="
          deleteSelectedProductInCart({
            selectedIds: $store.state.cartModule.selectedProductIdInCart,
            type: 'pay'
          })
        "
        class="pay"
      >
        结算
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CartFooter',
  created () {
    console.log(this.totalData.total.toFixed(2))
  },
  computed: {
    ...mapGetters(['allProductInCartIsSelected', 'totalData'])
  },
  methods: {
    ...mapActions(['allSelect', 'deleteSelectedProductInCart'])
  }
}
</script>

<style lang='scss'>
.cart-footer {
  width: 900px;
  height: 50px;
  border: 1px solid #ccc;
  justify-content: space-between;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    justify-content: space-between;
    font-style: 0;
    width: 180px;
  }
  .right {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
  }
  .pay {
    height: 50px;
    width: 50px;
  }
}
</style>
