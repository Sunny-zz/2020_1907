import React from 'react'
import './button.css'

// text  父组件想要我展示的文字
// click  父组件想要我点击时触发的函数
const Button = (props) => <button onClick={props.click} className='btn'>{props.text}</button>

export default Button