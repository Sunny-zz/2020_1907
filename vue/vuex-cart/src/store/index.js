import Vue from 'vue'
import Vuex from 'vuex'
import productModule from './modules/product'
import cartModule from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    productModule,
    cartModule
  },
  actions: {
    addToCart ({ commit }, id) {
      commit('addToCart', id)
    },
    delProductInCart ({ commit }, id) {
      commit('delProductInCart', id)
    },
    changeCartProductQuatity ({ commit }, payload) {
      commit('changeCartProductQuatity', payload)
    }
  }
})
