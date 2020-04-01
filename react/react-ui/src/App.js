import React from 'react';
import EchartsDemo from './components/EchartsDemo/EchartsDemo';
// import SwiperDemo from './components/SwiperDemo/SwiperDemo';
// import MaterialUiDemo from './components/MaterialUiDemo/MaterialUiDemo';
// import AntdDemo from './components/AntdDemo/AntdDemo';
// import LayoutDemo from './components/AntdDemo/LayoutDemo';
// import TreeDemo from './components/AntdDemo/TreeDemo';
// import LessDemo from './components/LessDemo/LessDemo';
// import SassDemo from './components/SassDemo/SassDemo';
// import StyledComponents from './components/StyledComponents/StyledComponents';
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
// import blue from '@material-ui/core/colors/blue'


function App () {
  // const theme = createMuiTheme({
  //   palette: {
  //     // primary 主体颜色是有很多同样颜色的对象组成的不能直接设置一个颜色
  //     primary: blue
  //   },
  //   status: {
  //     danger: 'orange',
  //   },
  // });
  return (
    <div className="App">
      <h1>react 插件 </h1>
      {/* <h2>antd</h2>
      <AntdDemo />
      <LayoutDemo />
      <TreeDemo />
      <LessDemo />
      <SassDemo />
      <StyledComponents /> */}
      {/* <h2>material</h2>
      <MuiThemeProvider theme={theme} >
        <MaterialUiDemo />
      </MuiThemeProvider> 
      <hr/>*/}
      {/* <h2>swiper</h2>
      <SwiperDemo /> */}
      <h2> Echarts 数据可视化</h2>
      <EchartsDemo />
    </div>
  );
}

export default App;
