<template>
  <div id="app">
    <CountOne />
    <CountTwo />
  </div>
</template>

<script>
import CountOne from './components/CountOne'
import CountTwo from './components/CountTwo'
export default {
  name: 'App',
  components: {
    CountOne,
    CountTwo
  }
}
</script>

<style>
</style>
