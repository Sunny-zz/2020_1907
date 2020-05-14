<template>
  <div id="app">
    <DataView />
    <br />
    <hr />
    <MixinDemo />
    <br />
    <hr />
    <MixinDemo1 />
    <br />
    <hr />
    <CustomDirective />
  </div>
</template>

<script>

import DataView from './components/DataView'
import MixinDemo from './components/MixinDemo'
import MixinDemo1 from './components/MixinDemo1'
import CustomDirective from './components/CustomDirective'
export default {
  name: 'App',
  components: {
    DataView,
    MixinDemo,
    MixinDemo1,
    CustomDirective
  }
}
</script>

<style>
#app {
  height: 2000px;
}
</style>
