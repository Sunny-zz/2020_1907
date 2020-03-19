import React from 'react'
const SearchBar = (props) => (
  <div className='searchbar'>
    <input type="text" placeholder='Search...' value={props.searchValue} onChange={(event) => {
      props.handleChange(event, 'searchValue')
    }} />
    <br />
    <label htmlFor="x">
      <input type="checkbox" id="x" checked={props.isStocked} onChange={(event) => {
        props.handleChange(event, 'isStocked')
      }} />
      <span>only show  products in stock</span>
    </label>
  </div>
)
export default SearchBar