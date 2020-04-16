import React from 'react'
import Product from './Product'
const ProductItem = ({ product, addToCart }) => {
  return <div>
    <Product {...product} />
    <button onClick={() => addToCart(product.id)}>add to cart</button>
  </div>
}
export default ProductItem