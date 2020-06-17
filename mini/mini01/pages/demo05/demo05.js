// pages/demo05/demo05.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        name: '小程序',
        selected: true,
        content: '小程序内容',
      },
      {
        id: 2,
        name: '前端',
        selected: false,
        content: '前端内容',
      },
      {
        id: 3,
        name: 'vue',
        selected: false,
        content: 'vue内容',
      },
    ],
  },
  change(e) {
    this.setData({
      tabs: this.data.tabs.map((item) => {
        if (e.detail.id === item.id) {
          item.selected = true
        } else {
          item.selected = false
        }
        return item
      }),
    })
    // console.log('父页面内的事件触发了', e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
