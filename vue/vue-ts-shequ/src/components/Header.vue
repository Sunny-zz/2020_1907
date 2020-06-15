<template>
  <header>
    <router-link to="/"
      ><img @click="link" src="../assets/logo.png" alt=""
    /></router-link>
  </header>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  // 类似之前的写法
  methods: {
    link () {
      // this.$router.push('/')
      // console.log('可以回到首页')
    }
  }
})
export default class Header extends Vue { }
</script>
<style lang="scss">
header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #ccc;
  img {
    width: 40px;
  }
}
</style>
