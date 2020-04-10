import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

// HashRouter    BrowserRouter   
// 地址栏展示不同前者带 # 
function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
