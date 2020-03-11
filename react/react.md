## 搭建 react 项目开发环境
使用官方提供的脚手架 create-react-app 。你需要在你的机器上安装 Node >= 8.10 和 npm >= 5.6。要创建项目，请执行：
```
npx create-react-app react-hello
cd react-hello
npm start
```

## react 项目的目录结构
- node_modules 环境所需要的依赖
- public 存放项目页面的模版(index.html)
- src 存储项目源代码
- .gitignore git 忽略上传的文件
- package-lock.json 包的信息
- package.json node项目的信息

## react 的基础知识
react 的脚手架搭建出来的项目默认是单页面应用(SPA)。react 创建页面并不是使用传统的 html 文件去搭建。而是将页面拆分成很多个组件，然后把所有组件重新组合到一起形成页面。

### 组件




### 单页面应用(SPA)
单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。