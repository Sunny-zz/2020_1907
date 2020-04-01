// 给 create-react-app 工具搭建的环境添加配置的
const { override, fixBabelImports, addLessLoader, useBabelRc } = require('customize-cra');
module.exports = override(
  // 配置 antd 组件的按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 可以使用 less 语法
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A', '@text-color': 'rgba(0, 255, 0, 0.65)' }
  }),
  // 配置 material ui 
  // 减少 引入组件时使用 import { Button } from '@material-ui/core' 的捆绑包大小
  useBabelRc()
);