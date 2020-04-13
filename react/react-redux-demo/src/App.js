import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App () {
  // const str = '<div class="markdown-text"><p><a href="/user/shiyunhao">@shiyunhao</a> 测试</p>↵</div>'
  // console.log(str.replace('href="/', 'href="#/'))
  // <div class="markdown-text"><p><a href="#/user/shiyunhao">@shiyunhao</a> 测试</p>↵</div>

  return (
    <div className="App">
      <h1>hello redux</h1>
      <Header />
      <hr />
      <Main />
    </div>
  );
}

export default App;
