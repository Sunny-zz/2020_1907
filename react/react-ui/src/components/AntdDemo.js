import React, { Component } from 'react'
import { Button, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
class AntdDemo extends Component {
  state = {
    isLogin: false,
    btnLoading: false
  }
  render () {
    const { isLogin, btnLoading } = this.state
    return <div>
      <Button danger size='small'>按钮三</Button>
      <br />
      <Button onClick={() => console.log(1111)} shape='circle' ghost type="primary">1</Button>
      <br />
      <Button size='large' icon={<DownloadOutlined />} shape='round' type="dashed">Dashed</Button>
      <br />
      <Button disabled={true} type="link">Link</Button>
      <DownloadOutlined style={{ color: 'red', fontSize: '100px' }} />
      <br />
      <Button loading={btnLoading} onClick={() => {
        this.setState({
          btnLoading: true
        })
        setTimeout(() => {
          this.setState({
            btnLoading: false,
            isLogin: true
          })
          if (isLogin) {
            message.success('登陆成功', 2, () => { console.log('提示的弹窗关闭了，你可以用这个函数做一些操作') })
          } else {
            message.error('登录失败')
          }
        }, 1000);
      }} type='primary'  >提交</Button>
    </div>
  }
}
export default AntdDemo