const cartModule = {
  state: () => ({
    productIdInCart: [2, 1],
    quantityById: {
      1: 10,
      2: 5
    }
  }),
  getters: {
    productListInCart (state, getters, rootState) {
      // console.log(state)
      // console.log(rootState.productModule)
      // 根据商品列表模块数据和购物车模块数据计算出 购物车证的商品
      // 因为在 ShoppingCart 组件内判断了 productIdInCart 数据有商品才会出现 购物车商品组件，
      // 那么获取该计算属性的的时候就不需要做额外的判断了
      return state.productIdInCart.map(id => ({
        ...rootState.productModule.products.find(item => item.id === id),
        number: state.quantityById[id]
      }))
    }
  }
}
export default cartModule
