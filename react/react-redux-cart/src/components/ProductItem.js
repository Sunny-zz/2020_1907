import React from 'react'
import Product from './Product'
const ProductItem = ({ product, addToCart }) => {

  return <div>
    <Product {...product} />
    <button disabled={product.inventory ? false : true} onClick={() => addToCart(product.id)}>{product.inventory ? 'add to cart' : 'sold out'}</button>
  </div>
}
export default ProductItem