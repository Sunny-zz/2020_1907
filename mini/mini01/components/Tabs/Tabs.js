// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  // 当自定义组件的数据来源是页面的时候需要页面在使用自定义组件的时候，需要传递 properties ，组件内接收并使用
  properties: {
    // tabs: {
    //   type: Array,
    //    设置默认值
    //   value: []
    // },
    tabs: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      // 触发父页面传递过来的事件
      // 如何将数据传递给父页面的事件
      const { id } = e.currentTarget.dataset
      // triggerEvent  调用父页面传递过来的方法
      // this.triggerEvent('事件名', detail(可以向父页面传递信息), myEventOption)
      this.triggerEvent('select', { id }, {})
    },
  },
})
