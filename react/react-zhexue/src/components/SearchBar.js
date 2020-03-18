import React, { Component } from 'react'
class SearchBar extends Component {
  state = {}
  render () {
    return (
      <div className='searchbar'>
        <input type="text" placeholder='Search...' />
        <br />
        <label htmlFor="x">
          <input type="checkbox" id="x" />
          <span>only show  products in stock</span>
        </label>
      </div>
    )
  }
}
export default SearchBar