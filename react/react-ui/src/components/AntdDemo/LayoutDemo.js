import React, { Component } from 'react'
import { Layout, Button } from 'antd';

class LayoutDemo extends Component {
  state = {}
  render () {
    const { Header, Footer, Content } = Layout;
    return (
      <Layout>
        <Header>
          <Button danger size='small'>按钮</Button>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
export default LayoutDemo