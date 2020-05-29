<template>
  <div class="cart-product">
    <input
      type="checkbox"
      :checked="product.selected"
      @change="radioSelect(product.id)"
    />
    <div class="p-name">{{ product.name }}</div>
    <div class="p-price">￥{{ product.price | numberToString }}</div>
    <div class="p-quantity">
      <button
        :disabled="product.number === 1"
        @click="changeCartProductQuatity({ id: product.id, value: -1 })"
      >
        -
      </button>
      <!-- v-model 指令 直接就是双向的 -->
      <!-- vuex 内表单的双向绑定  :value    @input   or   @change -->
      <input
        type="number"
        :value="product.number"
        ref="input"
        @change="handleInput"
      />
      <button @click="add">
        +
      </button>
    </div>
    <div class="p-sum">￥{{ sum | numberToString }}</div>
    <button @click="del(product.id)" class="p-action">删除</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartProduct',
  props: ['product'],
  computed: {
    sum () {
      return this.product.price * this.product.number
    }
  },
  methods: {
    ...mapActions(['delProductInCart', 'changeCartProductQuatity', 'radioSelect']),
    del (id) {
      if (confirm('真的要删除吗？')) {
        this.delProductInCart(id)
      }
    },
    handleInput () {
      const num = this.$refs.input.value
      if (num <= 0) {
        alert('数量的值必须大于0')
        this.$refs.input.value = this.product.number
      } else if (num > this.product.inventory) {
        alert(`数量最大值为${this.product.inventory}`)
        this.$refs.input.value = this.product.number
      } else {
        this.changeCartProductQuatity({
          id: this.product.id,
          value: num
        })
      }
    },
    add () {
      if (this.product.showInventory === 0) {
        // 显示的库存和真实库存相等时不能继续加了
        alert(`数量最大值为${this.product.inventory}`)
      } else {
        this.changeCartProductQuatity({
          id: this.product.id,
          value: 1
        })
      }
    }
  }
}
</script>

<style lang='scss'>
.cart-product {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ccc;
  .p-name {
    width: 200px;
    overflow: hidden;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .p-quantity input {
    width: 100px;
    text-align: center;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
