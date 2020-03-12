import React from 'react'
// react 内将所有的文件(css js  .jpg ... )都可以当做成模块,都可以导入
// header.css 就被当作了模块导入了
import './header.css'
import pic from './img/slide-3.jpg'
import Button from "./Button";
function Header () {
  // react 中的标签起名字使用 className 
  return (
    <header>
      <h1 className='header-title' >hello</h1>
      {/* 在父组件内如何给子组件传递 props  */}
      {/* 使用子组件时，当作标签的属性传递 */}
      {/* 子组件的 props 内就会多一个属性 */}
      <Button type='denglu' />
      <br />
      {/* 这个图片地址找不到 */}
      {/* 1. 将图片上传到网上使用网络地址 */}
      {/* 2. 将图片当作模块导入到组件内然后使用 */}
      {/* jsx 内嵌套 js */}
      {/* 在 jsx 内使用｛｝ 包裹 js */}
      <img src={pic} alt="" />
      <div className="box"></div>
    </header>
  )
}
export default Header