// pages/demo01/demo01.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 100,
    msg: 'world',
    checked: true,
    todos: [
      {
        id: 1,
        text: '打王者',
      },
      {
        id: 2,
        text: '玩联盟',
      },
    ],
    show: false,
  },
  add: function (event) {
    console.log('事件绑定成功并处触发', event)
    // 如何修改页面的 data    this.setData 更新的时候不要去修改 this.data 里面的值
    // 如何获取页面的 data    this.data.count
    this.setData({
      count: this.data.count + 1,
    })
  },
  // 带参数的事件 需要借助 event 对象
  add1(event) {
    // 获取参数需要使用 event.currentTarget.dataset
    const data = event.currentTarget.dataset
    console.log('测试事件传递参数', data)
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
