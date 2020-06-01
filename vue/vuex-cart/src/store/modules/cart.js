import Vue from 'vue'
const cartModule = {
  state: () => ({
    productIdInCart: [],
    quantityById: {},
    selectedProductIdInCart: []
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
        number: state.quantityById[id],
        selected: state.selectedProductIdInCart.includes(id)
      }))
    },
    allProductInCartIsSelected (state, getters) {
      return getters.productListInCart.every(item => item.selected)
    },
    totalData (state, getters) {
      // 使用 reduce 实现 [1,2,3,4,5,6,7]  求和  28
      // [{id:1,price:100},{id:1,price:100},{id:1,price:100}]    300
      return getters.productListInCart.reduce((res, item) => ({
        total: res.total + (item.selected ? item.price * item.number : 0),
        selectedProductNumInCart: res.selectedProductNumInCart + (item.selected ? item.number : 0)
      }), {
        total: 0,
        selectedProductNumInCart: 0
      })
      //  {
      //   total: 111,
      //   selectedProductNumInCart:  3
      // }
    }
  },
  mutations: {
    addToCart (state, id) {
      if (!state.productIdInCart.includes(id)) {
        // 没买过 该 id 的商品
        state.productIdInCart.push(id)
        Vue.set(state.quantityById, id, 1)
        state.selectedProductIdInCart.push(id)
        // state.quantityById = { ...state.quantityById, [id]: 1 }
      } else {
        // 买过了
        state.quantityById[id]++
      }
    },
    changeCartProductQuatity (state, payload) {
      const { value, id } = payload
      if (value === 1) {
        // 点了 +
        state.quantityById[id]++
      } else if (value === -1) {
        // 点了 -
        state.quantityById[id]--
      } else {
        // 操作了 input
        if (value * 1 <= 0) {
          alert('商品数量需要大于 0')
          state.quantityById[id] = 1
        } else {
          state.quantityById[id] = value * 1
        }
      }
    },
    delProductInCart (state, id) {
      // [1,2,3]   2
      // {1:10,2: 5}   ｛2：5｝
      // state.productIdInCart = state.productIdInCart.filter(item => item !== id)
      state.productIdInCart.splice(state.productIdInCart.indexOf(id), 1)
      delete state.quantityById[id]
    },
    allSelect (state, status) {
      state.selectedProductIdInCart = status ? state.productIdInCart : []
    },
    radioSelect (state, id) {
      // 1. 值传递 id 进来   a. 如果数组内有该 id 那么删除   b. 没有就添加
      // 2. 传递 id 和 选中状态    a. 1 true  数组添加 1   b.1  false  数组删除 1
      const ind = state.selectedProductIdInCart.indexOf(id)
      if (ind < 0) {
        // 里面没有这个 id
        state.selectedProductIdInCart.push(id)
      } else {
        state.selectedProductIdInCart.splice(ind, 1)
      }
    },
    deleteSelectedProductInCart (state, payload) {
      // productIdInCart: [1],
      // quantityById: { 1: 1, 2: 2, 3: 3 },
      // selectedProductIdInCart: [2, 3]
      state.productIdInCart = state.productIdInCart.filter(item => !payload.selectedIds.includes(item))
      payload.selectedIds.forEach(item => {
        // 如何判断一个变量的值是否时某个对象的属性名
        // 访问对象下不存在的属性的属性值 是 undefined
        if (!(state.quantityById[item] === undefined)) {
          delete state.quantityById[item]
        }
      })
      state.selectedProductIdInCart = []
    }
  },
  actions: {
    allSelect ({ commit }, status) {
      commit('allSelect', status)
    },
    radioSelect ({ commit }, id) {
      commit('radioSelect', id)
    }
  }
}
export default cartModule
