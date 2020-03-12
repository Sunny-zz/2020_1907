import React from 'react'
import './pra.css'
const Pra = (props) => {
  return (
    <div className='pra'>
      {/* <h3>{props.title ? props.title : '默认的'}</h3> */}
      <h3>{props.title || '默认的'}</h3>
      <p>{props.onePra}</p>
    </div>
  )
}
export default Pra