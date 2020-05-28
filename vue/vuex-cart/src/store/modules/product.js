const productModule = {
  state: () => ({
    products: [
      {
        id: 1,
        price: 3999,
        name: '酷蛙 降噪版type-c接口手机游戏耳机入耳式 小米10/9Pro5G小米8se华为P20',
        inventory: 20
      },
      {
        id: 2,
        price: 66,
        name: '筷子家用家庭防滑快子分用耐高温不发霉一人一色钛防霉10合金 炫彩 花开富贵 金色底红花 10双',
        inventory: 2000
      }
    ]
  }),
  mutations: {
    addToCart (state, id) {
      const currentProduct = state.products.find(item => item.id === id)
      currentProduct.inventory--
    }
  },
  actions: {
    addToCart ({ commit }, id) {
      commit('addToCart', id)
    }
  }
}
export default productModule
