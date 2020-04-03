import React from 'react'
import { LoginContext } from './login-context'
const Button = (props) => {
  return <LoginContext.Consumer>
    {
      (context) => {
        console.log(context)
        return <button>1111</button>
      }
    }
  </LoginContext.Consumer>
}
export default Button