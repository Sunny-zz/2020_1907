// 给 create-react-app 工具搭建的环境添加配置的
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  // 配置 antd 组件的按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 可以使用 less 语法
  addLessLoader({
    javascriptEnabled: true
  })

);