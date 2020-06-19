const { BMapWX } = require('../../libs/bmap-wx.min')

// pages/search/search.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: null,
  },
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    app.globalData.showAddress = {
      street: '',
      district: e.detail.value[2],
      city: e.detail.value[1],
    }
    wx.navigateTo({
      url: '../index/index',
    })
  },
  // handleSearch(e) {
  //   console.log(e)
  // },
  // blur() {
  //   console.log('112312')
  // },
  // confirm() {
  // console.log('000000')
  // wx.request({
  //   url:
  //     'https://api.map.baidu.com/place/v2/search?region=北京&output=json&ak=MZsh6R2dcARRzvRHCUnQronVI9XtD1V9',
  //   success: (res) => {
  //     console.log(res)
  //   },
  // })
  // },
  // http://api.map.baidu.com/place/v2/search?query=ATM机&tag=银行&region=北京&output=json&ak=您的ak
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      address: app.globalData.currentAddress,
    })
  },

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
