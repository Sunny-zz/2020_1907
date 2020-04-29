import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getProductsInCart, getTotal } from '../reducers';
import { checkout } from '../actions';
const mapStateToProps = state => {
  // 根据 store 内的 cart 数据和 products 数据计算出 
  // productsInCart 数据
  return {
    productsInCart: getProductsInCart(state.products, state.cart),
    total: getTotal(state.products, state.cart)
  }
}
const CartContainer = connect(mapStateToProps, { checkout })(Cart)
export default CartContainer

// 已知
// const arr = [
//   { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
//   { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
//   { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 }
// ]
// const obj = {
//   addedIds: [1, 3],
//   quantityById: { 1: 2, 3: 4 }
// }
// 得到
// const arr1 = [
//   { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
//   { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 3 }
// ]

// const newArr = obj.addedIds.map(id => {
//   const product = arr.find(product => product.id === id)
//   return {
//     ...product,
//     count: obj.quantityById[id]
//   }
// })
// reduce 的用法  数组的高级用法 基本上数组的所有功能都可以使用该方法实现

// const newArr = obj.addedIds.reduce((res, id) => {
//   const product = arr.find(product => product.id === id)
//   res.push({ ...product, count: obj.quantityById[id] })
//   return res
// }, [])


// console.log(newArr)

// const arr3 = [1, 2, 30]
// const arr4 = arr3.reduce((res, item) => {
//   res = res + item
//   return res
// }, 0)
// console.log(arr4)