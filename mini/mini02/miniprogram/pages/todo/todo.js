// pages/todo/todo.js
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    todos: [],
    text: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 获取数据库引用
    // const db = wx.cloud.database()
    // 2. 构造查询语句
    // collection 方法获取一个集合的引用
    // get 方法会触发网络请求，向数据库取数据
    // 向程序获取云端数据库数据
    // 1. 方式1 通过小程序端 最多20 条
    // db.collection('todos').get({
    //   success: (res) => {
    //     this.setData({
    //       todos: res.data,
    //     })
    //   },
    // })
    // 2. 方式2 通过云函数 最多 100 条
    wx.cloud
      .callFunction({
        // 云函数名称
        name: 'getTodos',
      })
      .then((res) => {
        console.log(res)
        this.setData({
          todos: res.result.data,
        })
      })
    // 想要获取更多参考 promise.all
  },

  change(e) {
    // 修改数据库内容
    // const db = wx.cloud.database()
    const { item } = e.currentTarget.dataset
    // console.log(item)
    db.collection('todos')
      .doc(item._id)
      .update({
        // data 传入需要局部更新的数据
        data: {
          // 表示将 done 字段置为 true
          done: !item.done,
        },
      })
      .then((res) => {
        // 后台请求的返回值没有用
        // console.log('更新成功')
        this.setData({
          todos: this.data.todos.map((todo) => {
            const newTodo = { ...todo }
            // console.log(newTodo._id, item._id)
            if (newTodo._id === item._id) {
              newTodo.done = !newTodo.done
            }
            return newTodo
          }),
        })
      })
  },
  handleInput(e) {
    // console.log(e)
    this.setData({
      text: e.detail.value,
    })
  },
  add() {
    // const db = wx.cloud.database()
    db.collection('todos')
      .add({
        // data 字段表示需新增的 JSON 数据
        data: {
          text: this.data.text,
          done: false,
        },
      })
      .then((res) => {
        this.setData({
          todos: [
            ...this.data.todos,
            {
              _id: res._id,
              text: this.data.text,
              done: false,
            },
          ],
          text: '',
        })
      })
  },
  del(e) {
    const { id } = e.currentTarget.dataset
    db.collection('todos')
      .doc(id)
      .remove()
      .then(() => {
        this.setData({
          todos: this.data.todos.filter((todo) => todo._id !== id),
        })
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
