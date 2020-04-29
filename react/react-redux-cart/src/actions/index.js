import { ADD_TO_CART, CHECKOUT } from '../constants/actionTypes';
// 全局用来修改哪个 store 数据都可以
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  }
}
export const checkout = () => {
  return {
    type: CHECKOUT
  }
}