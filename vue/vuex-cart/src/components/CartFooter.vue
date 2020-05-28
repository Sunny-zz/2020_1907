<template>
  <div class="cart-footer">
    <div class="left">
      <label for="">
        <input type="checkbox" name="" id="" />
        <span>全选</span>
      </label>
      <span>删除选中商品</span>
    </div>
    <div class="right">
      <span>已选0件商品</span>
      <span>总价: ￥999</span>
      <button class="pay">结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartFooter'
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
