<template>
  <div class="chart">
    <h2>Datav</h2>

    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
  </div>
</template>

<script>
export default {
  name: 'DataVDemo',
  data () {
    return {
      config: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ],
        // showValue: true
      }
    }
  }
}
</script>

<style>
.chart {
  background-color: #000;
}
</style>