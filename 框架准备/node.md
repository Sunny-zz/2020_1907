## node 
Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。有了这个引擎(node)，可以让 javascript 语言跑在服务器上。进而 javascript 可以做后台语言了。javascript 就变成了全栈。数据库 mongodb.

### node 的包管理工具 npm 
npm 是 node package manger 的简写。电脑上安装了 node 会自带 npm 工具。可以使用 `npm -v` 查看版本。现在的项目都是使用 npm 下载对应的包(插件)。以后我们要使用框架写项目，但是框架使用了巨多的包来实现框架的功能，开发时很麻烦。npm 可以帮助你管理你的项目的插件(依赖)，记录好版本等信息，而且传递的时候不需要传递整个插件文件，直接可以使用 npm 自动下载。以后我们的项目需要写成 npm 项目。
如何将自己的项目创建成 npm 项目
- 在命令行中进入到项目文件夹
- 执行 `npm init -y`命令,将你的项目初始化成 npm 项目。
- 安装项目依赖，使用命令 `npm install jquery` 也可以简写成 `npm i jquery` 安装 jquery 项目依赖。
  安装项目依赖只写包名安装的是最新版本，可以使用 包名@+版本号 例如 jquery@1.1.1,还有有些包的功能以后无论在哪各项目都可能需要使用需要全局下载使用 `npm i -g packageName` 安装
- 项目传递时只需要知道 package.json ,然后使用 `npm i` 命令。就可以将对应版本的所有依赖重新下载
- 项目内如何使用安装的项目依赖
    需要使用模块的导入例如 `var $ = require('jquery')`，但是模块的导入浏览器不支持所以需要使用 webpack 工具打包编译。

npm 下载包的时候，可以有两个后缀参数。第一个 `--save 或 -S  或省略`,加了这个参数包的版本及命名成会存储到 package.json 中的 dependencies 字段中，意思是这个包是项目的必须依赖(项目没有这个包跑步起来,或者叫项目上线的时候必须的依赖)。第二个 `--save-dev 或 -D`，加了这个参数包的版本及命名成会存储到 package.json 中的 devDependencies 字段中。意思是这个包是项目的非必须依赖(项目没有这个包可以跑步起来,或者叫项目开发的时候的依赖)

npm 项目通常需要执行一些脚本命令，去打包编译文件、创建本地服务器。。。,npm 提供了一个方便的方式可以帮助你快速执行命令。需要提前在 package.json 中的 script 字段设置。例如将 `npx webpack` 命令，写到 package.json 的脚本字段中。
    ```
    "scripts": {
        "build": "npx webpack"
    },
    ```
直接使用 `npm run build` 就可以执行编译打包操作了。
#### 常用命令
- `npm config set registry http://registry.npm.taobao.org/` 将下载的包的资源替换成国内的淘宝镜像。
- `npm config set loglevel=http` 设置下载时显示 http 下载进度。
- `npm uninstall 包名` 简写 `npm un 包名`



#### webpack 的简单使用
- 创建一个新项目
- 进入到项目内 `npm init -y`
- 执行 `npm i webpack webpack-cli --save-dev`
- 