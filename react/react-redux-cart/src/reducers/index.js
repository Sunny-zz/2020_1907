import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
const rootReducer = combineReducers({
  cart,
  products
})
// 根据商品数据和购物出数据筛选出购物车商品列表数据 不直接在 container 中执行而是定义成公共的方法哪里使用哪里调用

// 计算 store 数据的方法
export const getProductsInCart = (products, cart) => {
  return cart.addedIds.map(id => {
    const product = products.find(product => product.id === id)
    return {
      ...product,
      inventory: cart.quantityById[id]
    }
  })
}
export const getTotal = (products, cart) => {
  // return getProductsInCart(products, cart).reduce((res, item) => {
  //   res = res + item.price * item.inventory
  //   return res
  // }, 0)
  // return getProductsInCart(products, cart).reduce((res, item) => res + item.price * item.inventory, 0)
  return cart.addedIds.reduce((res, id) => res + products.find(product => product.id === id).price * cart.quantityById[id], 0)
}

export default rootReducer