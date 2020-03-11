// react 中引入 React 作用是 让该模块支持 react 语法 (jsx 语法 在 js 内写 html)
import React from 'react';
// ReactDOM 的作用是 使用它下面的 render 方法 将 react 的 app 组件  渲染到真实的页面内的 #root 中
import ReactDOM from 'react-dom';
// 样式
import './index.css';
// 导入整合之后的 app 组件
import App from './App';
import * as serviceWorker from './serviceWorker';

// 渲染
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
