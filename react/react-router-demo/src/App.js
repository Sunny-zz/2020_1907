import React from 'react';
import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main/Main';
import 'moment/locale/zh-cn'
import moment from 'moment'
// 全局设置  moment 的语言 设置一次就够了
moment.locale('zh-cn')

function App () {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}
export default App;
