import React from 'react'
// 函数参数的解构赋值
const Product = ({ stocked, name, price }) => <div><span style={{ color: stocked ? 'black' : 'red' }}>{name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{price}</span></div>

export default Product