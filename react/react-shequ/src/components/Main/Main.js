import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Topic from '../Topic/Topic'
import User from '../User/User'
import CreateTopic from '../CreateTopic/CreateTopic'
import Message from '../Message/Message'
const Main = (props) => <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/topic/create' component={CreateTopic} />
  <Route path='/topic/:topicid' component={Topic} />
  <Route path='/user/:username' component={User} />
  <Route path='/my/messages' component={Message} />
</Switch>
export default Main