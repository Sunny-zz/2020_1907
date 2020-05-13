<template>
  <div>
    <!-- <NativeSwiper ref="aa" /> -->
    <!-- <VueSwiper /> -->
    <!-- <NativeEcharts /> -->
    <VueEcharts />
    <!-- <DataVDemo /> -->
  </div>
</template>

<script>
// import NativeSwiper from './components/NativeSwiper'
// import VueSwiper from './components/VueSwiper'
// import NativeEcharts from './components/NativeEcharts'
import VueEcharts from './components/VueEcharts'
// import DataVDemo from './components/DataVDemo'
export default {
  name: 'App',
  components: {
    // NativeSwiper,
    // VueSwiper,
    // NativeEcharts
    VueEcharts,
    // DataVDemo
  },
  mounted () {
    // console.log(this.$refs.aa)
  },
}
</script>

<style>
</style>