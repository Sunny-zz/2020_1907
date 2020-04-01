import React, { Component } from 'react'
import styled from 'styled-components'
class StyledComponents extends Component {
  state = {}
  render () {
    // class 名永远不会冲突
    const H4 = styled.a`
      color: red;
    `
    const Wrap = styled.div`
    width: 100%;
    `
    return <Wrap>
      <H4>styled-components 的使用</H4>
    </Wrap>
  }
}
export default StyledComponents