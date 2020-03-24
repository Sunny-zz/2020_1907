import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
function App () {
  return (
    <Router>
      <div className="App">
        {/* / 代表的是主目录 */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router >
  );
}
export default App;
