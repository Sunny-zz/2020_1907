<template>
  <div class="home">
    <HelloWorld :msg="msg" />
    <button @click="editor">修改 msg</button>
  </div>
</template>

<script lang='ts'>
import HelloWorld from '../components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  // html 相关
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js'
  editor () {
    console.log(this)
    // 该 this 代表的是 VueComponent  Home
    this.msg += ' App'
  }
  // editor = () => {
  //   // 定义方法的时候不能使用箭头函数
  //   console.log(this)
  //   // 该 this 代表的是 Home 类
  //   this.msg += ' App'
  // }
}
</script>
