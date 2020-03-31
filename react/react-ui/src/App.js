import React from 'react';
import AntdDemo from './components/AntdDemo/AntdDemo';
import LayoutDemo from './components/AntdDemo/LayoutDemo';
import TreeDemo from './components/AntdDemo/TreeDemo';
import LessDemo from './components/LessDemo/LessDemo';
import SassDemo from './components/SassDemo/SassDemo';



function App () {
  return (
    <div className="App">
      <h1>hello </h1>
      <h2>按钮</h2>
      <AntdDemo />
      <LayoutDemo />
      <TreeDemo />
      <LessDemo />
      <SassDemo />
    </div>
  );
}

export default App;
