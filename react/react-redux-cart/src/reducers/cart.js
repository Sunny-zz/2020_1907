import { ADD_TO_CART, CHECKOUT } from '../constants/actionTypes';
import { combineReducers } from 'redux';
// const cart = (state = {
//   // 添加到购物车中的商品 id 数组
//   addedIds: [undefined],
//   // 对应的 id 的商品个数
//   quantityById: {undefined：1}
// }, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       // 当首次购买某一个商品 addedIds 中添加上商品的 id 
//       // 并且 quantityById 中新增一个属性，属性名为这个 id 值为 1
//       // 当不是首次购买商品时 不需要修改 addedIds 
//       // 只需要将商品 id 对应的属性的属性值加 1 即可
//       const { id } = action
//       return state.addedIds.includes(id) ?
//         { ...state, quantityById: { ...state.quantityById, [id]: state.quantityById[id] + 1 } }
//         :
//         { addedIds: [...state.addedIds, id], quantityById: { ...state.quantityById, [id]: 1 } }
//     case CHECKOUT:
//       return { addedIds: [], quantityById: {} }
//     default:
//       return state
//   }
// }
const addedIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.includes(action.id) ? state : [...state, action.id]
    case CHECKOUT:
      return []
    default:
      return state
  }
}
const quantityById = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 判断对象下是否存在某个属性
      // const obj = ｛a:10｝
      // console.log(obj.a)
      const { id } = action
      // return state[id] ? { ...state, [id]: state[id] + 1 } : { ...state, [id]: 1 }
      return { ...state, [id]: state[id] ? state[id] + 1 : 1 }
    case CHECKOUT:
      return {}
    default:
      return state
  }
}
const cart = combineReducers({
  addedIds,
  quantityById
})
export default cart