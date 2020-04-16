import React from 'react'
import ProductItem from './ProductItem'
const ProductsList = ({ products, addToCart }) => {
  return <div>
    <h3>products</h3>
    {products.length ? products.map(item => <ProductItem key={item.id} product={item} addToCart={addToCart} />) : '请稍等'}
  </div>
}
export default ProductsList