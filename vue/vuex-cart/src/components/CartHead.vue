<template>
  <div class="cart-head">
    <label for="">
      <input type="checkbox" name="" id="" />
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
export default {
  name: 'CartHead'
}
</script>

<style lang='scss'>
.cart-head {
  display: flex;
  width: 900px;
  height: 50px;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: space-around;
}
</style>
