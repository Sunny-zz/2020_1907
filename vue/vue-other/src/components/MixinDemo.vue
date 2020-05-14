<template>
  <div>
    <h2>mixin 测试</h2>
    <div>
      <span>{{ num }}</span>
      <button @click="num++">add</button>
    </div>
    <div>
      <h4>mixin内的数据展示</h4>
      <span>组件内没有 foo 也可以展示 foo(mixin内的)：{{ foo }}</span> <br />
      <span>组件内有 message mixin内的 message 就不展示 ：{{ message }}</span>
      <br />
      <button @click="foo = '哈哈哈'">
        修改 mixin 数据 (其实就是修改的自己组件的)
      </button>
      <button @click="fun">测试 fun</button>
      <button @click="fun1">测试 fun1</button>
    </div>
  </div>
</template>

<script>
// 引入局部定义的 mixin， 混入组件内
import { logHello } from '../mixins/index'
export default {
  name: 'MixinDemo',
  // 使用 mixin 
  mixins: [logHello],
  data () {
    return {
      num: 10,
      // 当组件内和 mixin 内有相同的 data 时，组件内的优先
      message: 'hello world'
    }
  },
  created () {
    console.log(this)
  },
  // 组件和 mixin 的生命周期会合并，
  // methods、components 和 directives
  // 这些属性也会合并，但是遇到重名的组件优先
  methods: {
    fun () {
      console.log('组件内的 method fun')
    }
  },
}

</script>

<style>
</style>