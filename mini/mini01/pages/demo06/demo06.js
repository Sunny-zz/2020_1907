// pages/demo06/demo06.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    posts: [],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    // 获取页面相关的数据 发请求到后台
    // 微信小程序内如何发送请求
    // wx.request({
    //   url: 'https://cnodejs.org/api/v1/topics',
    //   method: 'GET',
    //   success: (res) => {
    //     console.log(res.data)
    //     this.setData({
    //       posts: res.data.data,
    //     })
    //   },
    // })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // 需要在页面配置或者应用配置内添加设置才会生效
  onPullDownRefresh: function () {
    // console.log('onPullDownRefresh')
    // 更新页面信息 numbers
    // [1,2,3,4,5,6,7,8,9,10]
    const { numbers } = this.data
    const newNumbers = []
    const len = numbers.length
    for (let i = 0; i < len; i++) {
      const randomNum = Math.floor(Math.random() * numbers.length)
      newNumbers.push(numbers[randomNum])
      numbers.splice(randomNum, 1)
    }
    setTimeout(() => {
      this.setData({
        numbers: newNumbers,
      })
      wx.stopPullDownRefresh()
    }, 500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // 页面需要出现滚动条
  onReachBottom: function () {
    const that = this
    const { numbers } = this.data
    if (numbers.length < 30) {
      // 弹出一个提示框告诉用户现在正在加载
      //
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        that.setData({
          numbers: [
            ...numbers,
            numbers.length + 1,
            numbers.length + 2,
            numbers.length + 3,
            numbers.length + 4,
            numbers.length + 5,
          ],
        })
        wx.hideLoading()
      }, 500)
    } else {
      wx.showToast({
        title: '我是有底线的',
        duration: 1000,
        icon: 'none',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('分享了')
  },
  // 滚动条滚动触发
  onPageScroll() {
    console.log('滚动条滚动了')
  },
  // 横竖屏的切换
  onResize() {
    console.log('横竖屏切换')
  },
})
