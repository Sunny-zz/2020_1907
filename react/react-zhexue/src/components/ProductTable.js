import React, { Component } from 'react'
class ProductTable extends Component {
  render () {
    const goods = [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
    return (
      <div className="product-table">
        <div className="table-head">
          <span>Name</span>
          <span>Price</span>
        </div>
        {/* 另外一个组件 商品标题组件 */}
        {/* 商品组件 写几个呢？  */}
        {/* 另外一个组件 商品标题组件 */}
        {/* 商品组件 写几个呢？  */}
      </div>
    )
  }
}
export default ProductTable