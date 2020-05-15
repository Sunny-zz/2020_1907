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
    <br />
    <hr />
    <ComponentRegister />
    <br />
    <hr />
    <FilterDemo />
    <br />
    <hr />
    <Tabs />
  </div>
</template>

<script>

import DataView from './components/DataView'
import MixinDemo from './components/MixinDemo'
import MixinDemo1 from './components/MixinDemo1'
import CustomDirective from './components/CustomDirective'
import ComponentRegister from './components/ComponentRegister'
import FilterDemo from './components/FilterDemo'
import Tabs from './components/Tabs'
export default {
  name: 'App',
  components: {
    DataView,
    MixinDemo,
    MixinDemo1,
    CustomDirective,
    ComponentRegister,
    FilterDemo,
    Tabs
  }
}
</script>

<style>
#app {
  height: 2000px;
}
</style>
