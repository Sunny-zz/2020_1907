// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 获取数据库相关对象
const db = cloud.database()
// 云函数入口函数
// 为什么云函数一般都是声明时候加上 async
// 一般来说云函数内都可能有异步操作
// 等待异步操作之后才能给云函数写返回值
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  // 关联数据库获取数据库内的信息
  // 由于云函数内的权限和数据库端是一样的获取数据的时候可以获取所有用户数据，需要获取当前用户数据的话，添加查询条件
  return db
    .collection('todos')
    .where({
      _openid: wxContext.OPENID,
    })
    .get()
}
