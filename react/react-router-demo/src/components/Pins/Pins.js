import React from 'react'
import { Prompt } from 'react-router-dom';
const state = {
  article: '121323'
}
const Pins = (props) => <div>
  <h2>pins</h2>
  <Prompt when={state.article ? true : false} message='你确定现在离开吗' />
</div>
export default Pins