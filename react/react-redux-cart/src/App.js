import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

function App () {
  return (
    <div className="App">
      <h1>Shopping Cart Example</h1>
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  );
}
// 数据
// 1. 商品列表数据
// [
//   {
//     id: '1',
//     name: '手机'
//     ....
//   },
//   {
//     id: '2',
//     name: '笔记本'
//     ....
//   }
// ]
// 2. 购物车列表数据
// [
//   {
//     id: '11',
//     productId: '1',
//     num: 10
//   },
//   {
//     id: '22',
//     productId: '2',
//     num: 10
//   }
// ]

// 
// {
//   productInCartIds: ['1','2'],
//   productInCartNum: { '1': 10, '2': 5 }
// }

export default App;
