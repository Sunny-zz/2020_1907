import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import en_US from "antd/es/locale/en_US";
const antConfig = {
  autoInsertSpaceInButton: false,
  locale: en_US
}
ReactDOM.render(<ConfigProvider {...antConfig}  ><App /></ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
