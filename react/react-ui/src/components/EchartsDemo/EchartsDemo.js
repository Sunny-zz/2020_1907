import React, { Component } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
class EchartsDemo extends Component {
  state = {
    data: [],
    data1: [
      {
        qujian: '6-8k',
        precent: '10%'
      },
      {
        qujian: '8-10k',
        precent: '10%'
      },
      {
        qujian: '12-15k',
        precent: '10%'
      },
      {
        qujian: '6-8k',
        precent: '10%'
      },
      {
        qujian: '6-8k',
        precent: '10%'
      },
      {
        qujian: '6-8k',
        precent: '10%'
      },
    ]
  }

  render () {
    const { data } = this.state
    return <div>
      {
        data.length ? <div>
          <button onClick={this.update}>更新数据</button>
          <div style={{ width: '600px', height: '400px' }} id="main"></div>
        </div> : '等一下'
      }
      {/* <div style={{ width: '800px', height: '400px' }} id='main1'></div> */}
    </div>
  }
  update = () => {
    setTimeout(() => {
      this.setState({
        data: [
          {
            country: '北京',
            number: 36203
          },
          {
            country: '上海',
            number: 21400
          },
          {
            country: '深圳',
            number: 18200
          },
          {
            country: '广州',
            number: 12100
          },
          {
            country: '武汉',
            number: 10400
          },
          {
            country: '杭州',
            number: 22100
          },
        ]
      })
    }, 1000);
  }
  componentDidUpdate () {
    const { data } = this.state
    // console.log(data)
    var myChart = echarts.init(document.getElementById('main'));
    // 基于准备好的dom，初始化echarts实例
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          return `<span style="display: inline-block;margin-right: 5px;border-radius: 10px; width: 10px;height: 10px;background-color: ${params[0].color};"></span>${params[0].name}:${params[0].value}`
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        show: false
      },
      yAxis: [
        {
          type: 'category',
          data: data.map(item => item.country),
          axisTick: {
            length: 5,
            lineStyle: {
              shadowOffsetX: 5
            }
          }
        },
        {
          type: 'category',
          data: data.map(item => item.number + '职位'),
          offset: 5,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          type: 'bar',
          data: data.map(item => item.number),
          itemStyle: {
            color: function (params) {
              // console.log(params)
              var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83']
              return colorList[params.dataIndex]
            }
          }
        }
      ]
    });
  }
  // 两件事  1.获取数据 2.根据数据生成图表
  componentDidMount () {
    // 发请求获取数据
    // console.log(111111)
    setTimeout(() => {
      this.setState({
        data: [
          {
            country: '北京',
            number: 3603
          },
          {
            country: '上海',
            number: 2400
          },
          {
            country: '深圳',
            number: 1800
          },
          {
            country: '广州',
            number: 1200
          },
          {
            country: '武汉',
            number: 1000
          },
          {
            country: '杭州',
            number: 2200
          },
        ].sort((a, b) => a.number - b.number)
      })
    }, 1000);


    // var myChart1 = echarts.init(document.getElementById('main1'));
    // // 绘制图表
    // myChart1.setOption({
    //   tooltip: {

    //   },
    //   legend: {
    //     type: 'plain',
    //     show: true,
    //     right: 20,
    //     align: "right",
    //     orient: 'vertical',
    //     bottom: 120
    //   },
    //   series: [
    //     {
    //       type: 'pie',
    //       radius: ['30%', '70%'],
    //       data: [
    //         {
    //           name: '6-8',
    //           value: 20
    //         },
    //         {
    //           name: '6-81',
    //           value: 20
    //         },
    //         {
    //           name: '6-82',
    //           value: 20
    //         },
    //         {
    //           name: '6-83',
    //           value: 20
    //         },
    //         {
    //           name: '6-84',
    //           value: 20
    //         }
    //       ],
    //       itemStyle: {
    //         color: function (params) {
    //           // console.log(params)
    //           var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83']
    //           return colorList[params.dataIndex]
    //         }
    //       }
    //     }
    //   ]
    // });
  }
}
export default EchartsDemo