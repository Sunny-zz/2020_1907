// miniprogram/pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: '',
  },
  // 上传头像 以及自动保存头像流程
  // 进入该页面的时候去数据库中获取头像图片的文件 id ，
  // 如果没有就是首次进入头像设置，需要上传图片
  // 上传图片完毕之后，需要将图片的 id 存储到数据库中，方便下次进入的时候获取已经保存的头像
  // 如果有id 那么就使用该 id 获取图片的临时文件路径展示到页面
  upLoad() {
    const that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // 获取了图片的本地临时文件路径
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.cloud.uploadFile({
          cloudPath: 'imgs/user.jpg', // 上传至云端的路径
          filePath: tempFilePaths[0], // 小程序临时文件路径
          success: (res) => {
            // 返回文件 ID
            console.log(res.fileID)
            that.setData({
              imgSrc: tempFilePaths[0],
            })
          },
          fail: console.error,
        })
      },
    })
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
