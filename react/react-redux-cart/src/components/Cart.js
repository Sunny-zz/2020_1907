import React from 'react'
import Product from './Product'
const Cart = ({ productsInCart, total, checkout }) => {
  return <div>
    <h3>your cart</h3>
    {
      productsInCart.length ? productsInCart.map(item => <Product key={item.id} {...item} />) : <i><strong>Please add some products to cart.</strong></i>
    }
    <p>total: ${total.toFixed(2)}</p>
    <button disabled={productsInCart.length ? false : true} onClick={checkout}>checkout</button>
  </div>
}
export default Cart