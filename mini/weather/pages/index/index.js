//index.js
const bmap = require('../../libs/bmap-wx.min')
const app = getApp()
const { ak } = app.globalData
Page({
  data: {
    address: null,
    weatherData: null,
  },
  onLoad() {},
  goSearch() {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  onShow() {
    console.log('全局数据', app.globalData)
    // 重新根据 全局数据下的 showAddress 去获取对应的天气信息
    // 因为获取天气情况需要知道地址的经纬度

    // 请求天气 默认会请求当前位置的天气
    // 新建百度地图对象
    const BMap = new bmap.BMapWX({
      ak,
    })

    // const location =
    //   app.globalData.showAddress !== app.globalData.currentAddress
    //     ? '新的经纬度'
    //     : '否则该参数就不需要使用'
    wx.request({
      url:
        'https://api.map.baidu.com/geocoding/v3/?address=上海市&output=json&ak=MZsh6R2dcARRzvRHCUnQronVI9XtD1V9',
      success: (res) => {
        console.log(res)
      },
    })
    const fail = (data) => {
      console.log(data)
    }
    const success = (data) => {
      const weatherData = data.currentWeather[0]
      console.log(data.originalData)
      // console.log(weatherData.temperature.match(/-?[0-9]{1,2}/g))
      // 28 ~ 21℃
      // 字符串的 match 方法
      // 12312dsa qe （实时： 21℃）
      // console.log(weatherData.date.match(/-?[0-9]{1,2}(?=℃)/)[0])
      this.setData({
        weatherData: {
          pm25: weatherData.pm25,
          temperature: weatherData.temperature.match(/-?[0-9]{1,2}/g),
          weatherDesc: weatherData.weatherDesc,
          wind: weatherData.wind,
          currentTemperature: weatherData.date.match(/-?[0-9]{1,2}(?=℃)/)[0],
          weatherOther: data.originalData.results[0].weather_data,
          weatherIndex: data.originalData.results[0].index,
        },
      })
    }
    // 发起weather请求 默认的位置是当前位置
    BMap.weather({
      fail: fail,
      success: success,
    })

    // 获取全局数据 currentAddress
    if (app.globalData.currentAddress) {
      this.setData({
        address: app.globalData.currentAddress,
      })
    } else {
      console.log('请求地址后执行了')
      app.getLocationCallBack = (address) => {
        this.setData({
          address: address,
        })
      }
    }
  },
})
