import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
class ShowProductWrap extends Component {
  state = {
    searchValue: '',
    isStocked: false,
    goods: [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ]
  }
  render () {
    const { searchValue, isStocked, goods } = this.state
    // console.log(searchValue, isStocked)
    const filterGoods = goods.filter((item) => item.name.indexOf(searchValue) !== -1 && (isStocked ? item.stocked : true))
    // console.log(filterGoods)
    return (
      <div className='product-wrap' style={{ width: '300px', margin: '0 auto' }}>
        {goods.length ? <div><SearchBar searchValue={searchValue} isStocked={isStocked} handleChange={this.handleChange} />
          {filterGoods.length ? <ProductTable goods={filterGoods} /> : <div>没有查询到相关商品</div>}</div> : <div>等一下</div>}
      </div>
    )
  }
  handleChange = (event, value) => {
    this.setState({
      [value]: value === 'isStocked' ? event.target.checked : event.target.value
    })
  }
}

export default ShowProductWrap