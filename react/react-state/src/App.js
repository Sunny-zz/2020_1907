import React from 'react';
import Count from './components/Count'
import Box from './components/Box/Box'
import Drawer from './components/Drawer'
import Tabs from './components/Tabs/Tabs'
import Banner from './components/Banner/Banner'
function App () {
  return (
    <div className="App">
      <h1>hello</h1>
      <Count />
      <hr />
      <Box />
      <hr />
      <Drawer />
      <hr />
      <Tabs />
      <hr />
      <Banner />
    </div>
  );
}

export default App;
