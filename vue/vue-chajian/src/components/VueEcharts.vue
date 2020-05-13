<template>
  <div class="chart">
    <ve-line
      v-if="chartData"
      :data="chartData"
      :settings="chartSettings"
    ></ve-line>

    <div v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
  name: 'VueEcharts',
  data () {
    return {
      chartData: null,
    }
  },
  created () {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          type: '初级工程师',
          minSalary: 6000,
          maxSalary: 8000
        },
        {
          id: 2,
          type: '中级工程师',
          minSalary: 8000,
          maxSalary: 10000
        },
        {
          id: 3,
          type: '高级工程师',
          minSalary: 9000,
          maxSalary: 16000
        },
        {
          id: 4,
          type: '全栈工程师',
          minSalary: 15000,
          maxSalary: 22000
        },
        {
          id: 5,
          type: '框架级工程师',
          minSalary: 20000,
          maxSalary: 35000
        },
      ]
      // {  
      //  columns: ['日期', '访问用户', '下单用户'],
      //  rows: [
      //   { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
      //   { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
      //   { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
      //  ]
      // }

      // 使用 this 创建一个组件内的全局变量，很像 data 但是并不是
      this.chartSettings = {
        // 以下是纵坐标的配置 纵坐标有可能有两个 左和右
        yAxisName: ['薪资（k/月）'],
        min: [5000],
        max: [35000],
        labelMap: {
          minSalary: '最低薪资',
          maxSalary: '最高薪资'
        },
        yAxisType: ['KMB'],
        smooth: false
      }
      this.chartData = {
        columns: ['type', 'minSalary', 'maxSalary'],
        rows: data
      }
    }, 500);
  },
}
</script>

<style>
/* .chart {
  width: 80%;
  margin-left: 10%;
} */
</style>