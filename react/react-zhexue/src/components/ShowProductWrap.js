import React, { Component } from 'react'
import SearchBar from './SearchBar'
class ShowProductWrap extends Component {
  state = {}
  render () {
    return (
      <div className='product-wrap' style={{ width: '300px', margin: '0 auto' }}>
        <SearchBar />
      </div>
    )
  }
}
export default ShowProductWrap