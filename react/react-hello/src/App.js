// app.js 就是一个组件，这个组件通常被当做根组件，所有额其他组件都直接或间接的放到 app 组件内
import React from 'react';
import Header from './Header'
// 组件其实就是页面上的某个结构，app 组件可以理解成 body 结构。一个 js 文件代表一个组件
// 组件的创建 
// 1. 函数式组件  函数名必须大写，文件名也必须大写
// 直接写个函数函数需要返回一个 html 结构，最后将 该函数使用默认导出方式导出
// 一个组件的最外层只能有一个结构

function App () {
  return (
    <div>
      <Header />
    </div>

  );
}

export default App;
