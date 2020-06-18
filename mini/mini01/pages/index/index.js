//index.js
//获取整个应用实例
const app = getApp()

Page({
  // data: {
  //   motto: 'Hello World',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo')
  // },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
  // click() {
  //   wx.navigateTo({
  //     url: '../demo06/demo06',
  //   })
  // },
  data: {
    userInfo: null,
  },
  getUserInfo(e) {
    // 判断授权是否允许了
    const { userInfo } = e.detail
    // console.log(userInfo)
    if (userInfo) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
      })
    } else {
      console.log('授权失败')
    }
  },
  // 页面的生命周期 进入页面触发
  onLoad() {
    // 想要将全局数据展示到某一个页面中需要在页面内再定义一个 data 值写成 全局数据的值
    const { userInfo } = app.globalData
    // 判断全局的数据是否存在
    // console.log(app)
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      // 给 app 添加了一个方法 叫 userInfoReadyCallback 作用是修改本页面的 data
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    }
  },
  jump() {
    wx.navigateTo({
      url: '../demo06/demo06',
    })
  },
  // 获取用户信息流程
  // 1. 用户首次进入小程序 ---> 出现授权按钮 点击授权 ---> 信息获取 (修改页面的data以及全局的data)
  // 2. 用户再次进入小程序 ---> 检测是否授权了 ---> 直接获取信息(修改全局data以及页面 data )
  // 在 第二个 流程时，修改页面的 data 出现了问题。由于获取信息是异步操作 。
  // 也就是说页面的 onLoad 事件在 应用的 onLaunch 事件获取信息结束之前执行了
  // 需要在页面中线定义好修改 data 的方法，传递给应用去执行
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
})
