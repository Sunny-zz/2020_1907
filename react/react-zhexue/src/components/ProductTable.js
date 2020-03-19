import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import Product from './Product'

class ProductTable extends Component {
  // 想要定义在 class 组件中全局的东西
  // 1. 定义成 calss 的一个方法
  // 2. this.xxx = 'xxxxxx'
  render () {
    const { goods } = this.props
    // const goods = [
    //   { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    //   { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    //   { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    //   { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    //   { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    //   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    // ];
    // const sportingGoods = this.filterArr(goods, 'Sporting Goods')
    // const electronicsGoods = this.filterArr(goods, 'Electronics')

    // const sportingGoodsList = sportingGoods.map(goods => <Product key={goods.name} name={goods.name} price={goods.price} stocked={goods.stocked} />)
    // const electronicsGoodsList = electronicsGoods.map(goods => <Product key={goods.name} name={goods.name} price={goods.price} stocked={goods.stocked} />)
    return (
      <div className="product-table">
        <div className="table-head">
          <span>Name</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Price</span>
        </div>
        {
          goods.find(item => item.category === 'Sporting Goods') ? <div>
            <ProductTitle title='Sporting Goods' />
            {/* 列表渲染     react 可以渲染列表（react 元素(标签)数组） */}
            {this.createProductList(goods, 'Sporting Goods')}
          </div> : ''
        }
        {
          goods.find(item => item.category === 'Electronics') ? <div>
            <ProductTitle title='Electronics Goods' />
            {this.createProductList(goods, 'Electronics')}
          </div> : ''
        }
      </div>
    )
  }
  // filterArr = (goods, category) => goods.filter(item => item.category === category)
  createProductList = (goods, category) => goods.filter(item => item.category === category).map(ele => <Product key={ele.name} name={ele.name} price={ele.price} stocked={ele.stocked} />)

}
export default ProductTable