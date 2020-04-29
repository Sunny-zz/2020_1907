import React from 'react';
// react 框架是使用组件生成页面
// 组件内的 html 结构称之为 虚拟 dom，通过 react 语法。。。生成真正的 dom 渲染到页面的某个标签内
import ReactDOM from 'react-dom';
// 在 react 组件内所有文件都被当做模块处理都可以导入
import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
