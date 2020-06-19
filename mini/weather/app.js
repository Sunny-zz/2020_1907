//app.js
App({
  onLaunch() {
    // https://api.map.baidu.com/reverse_geocoding/v3/?ak=您的ak&output=json&coordtype=wgs84ll&location=31.225696563611,121.49884033194
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy: true,
      success: (res) => {
        // 纬度
        const latitude = res.latitude
        // 经度
        const longitude = res.longitude
        // const speed = res.speed
        // const accuracy = res.accuracy
        // 想要实现将经纬度转化为详细地址需要百度地图 web api 接口 --> 逆地址解析
        wx.request({
          url: `https://api.map.baidu.com/reverse_geocoding/v3/?ak=${this.globalData.ak}&output=json&coordtype=wgs84ll&location=${res.latitude},${res.longitude}`,
          success: (res) => {
            const { addressComponent } = res.data.result

            this.globalData.currentAddress = {
              street: addressComponent.street,
              district: addressComponent.district,
              city: addressComponent.city,
            }
            this.globalData.showAddress = this.globalData.currentAddress
            if (this.getLocationCallBack) {
              console.log('请求地址信息后执行了')
              this.getLocationCallBack(this.globalData.currentAddress)
            }
          },
        })
      },
    })
  },
  globalData: {
    ak: 'MZsh6R2dcARRzvRHCUnQronVI9XtD1V9',
    currentAddress: null,
    showAddress: null,
  },
})
