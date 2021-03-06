import React from 'react'
const Product = ({ title, inventory, price }) => {

  return <div>
    <p style={{ marginBottom: 0 }}><span>{title}</span>
      <span> - </span>
      <span>${price}</span>
      {inventory ? <span> × {inventory}</span> : ''}
    </p>
  </div>

}
export default Product