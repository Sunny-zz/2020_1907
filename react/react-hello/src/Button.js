import React from 'react';
import './button.css'
import PropTypes from 'prop-types'
const Button = (props) => {
  console.log(props)
  return (
    // React 的行内样式 style 需要设置成一个对象
    // <button className='btn' style={{ color: props.color, backgroundColor: props.bgc }}>{props.text}</button>
    <button className={`btn ${props.type}`} >{props.text}</button>
  );
}
// 给组件的 prop 设定规则，父组件向子组件传递 prop 的时候不满足规则就会提示错误警告。
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['zhuce', 'denglu']),
}
// 设置 prop 的默认值 跟 prop-types 包没有关系
Button.defaultProps = {
  text: '按钮'
};
export default Button;
