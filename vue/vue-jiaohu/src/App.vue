<template>
  <div id="app">
    <h1>hello</h1>
    <Header />
    <hr />
    <Main></Main>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}

</script>

<style>
body {
  margin: 0;
}
</style>
