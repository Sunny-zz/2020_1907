import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Topic from '../Topic/Topic'
import User from '../User/User'
const Main = (props) => <>
  <Route exact path='/' component={Home} />
  <Route path='/topic/:topicid' component={Topic} />
  <Route path='/user/:userid' component={User} />
</>
export default Main