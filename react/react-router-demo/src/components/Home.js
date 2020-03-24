import React from 'react'
import { Link } from 'react-router-dom'
const Home = (props) => <div> <h1>REACT ROUTER DEMO</h1>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul> <h2>home</h2></div>
</div>
export default Home