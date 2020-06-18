//app.js
App({
  // onLaunch: function () {
  //   // 展示本地存储能力
  //   var logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)
  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  //   // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // 可以将 res 发送给后台解码出 unionId
  //             this.globalData.userInfo = res.userInfo
  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  // globalData: {
  //   userInfo: null
  // }
  // 获取用户信息
  // 只是在第一次进入小程序的时候授权
  // 授权提示弹窗   1. 进入小程序就提示   2. 使用按钮  button   open-type
  // 再次进入小程序的时候就不需要授权了，自动获取用户信息
  onLaunch() {
    // 首次进入小程序时触发 可以获取用户信息以及该小程序进入时需要的一些数据
    // console.log('小程序的生命周期 onLaunch')
    // 判断用户是否授权可以获取用户信息了
    wx.getSetting({
      success: (res) => {
        // console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // console.log('用户已经授权过了')
          wx.getUserInfo({
            success: (res) => {
              // console.log(res)
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                // console.log('callBack')
                this.userInfoReadyCallback(res)
              }
            },
          })
        }
      },
    })
  },
  onShow() {
    // console.log('小程序的生命周期 onShow')
  },
  onHide() {
    // 关闭一些定时器
    // console.log('小程序的生命周期 onHide')
  },
  onError(err) {
    // console.log('小程序的生命周期 onError')
    // console.log(err)
  },
  onPageNotFound() {
    // console.log('小程序的生命周期 onPageNotFound')
    // console.log(err)
    // wx.switchTab({
    //   url: './pages/about/about',
    // })
  },

  globalData: {
    // 共享数据
    userInfo: null,
  },
})
