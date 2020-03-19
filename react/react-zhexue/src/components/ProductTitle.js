import React from 'react'
const ProductTitle = (props) => <div>{props.title || 'default category'}</div>
// ProductTitle.defaultProps = {
//   title: 'default category'
// }
export default ProductTitle