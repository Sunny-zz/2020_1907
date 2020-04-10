import React from 'react'
import './box.css'
import { Link } from 'react-router-dom'
// 如何接收两个 children  或者 传递带名字的 children 
const Box = (props) => <div className='box'>
  <div className="box-header">
    {props.linkText ? <span> <Link to={props.linkAddress}>{props.linkText}</Link><span>/</span> {props.title1} </span> : ''}<span>{props.title}</span>
  </div>
  <div className="box-content">
    {props.children}
  </div>
</div>
export default Box