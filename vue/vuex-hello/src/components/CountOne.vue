<template>
  <div class="count-one">
    <div>
      <button @click="sub">-</button>{{ num }}<button @click="add">+</button>
    </div>
    <!-- 默认的commit提交 -->
    <!-- <button @click="$store.commit('change', { num1: 100, num2: 200 })">
      看我72变
    </button> -->
    <!-- 对象提交方式  commit 方法的参数对象直接传递给了  mutation 的第二参数 payload -->
    <button @click="change">
      看我72变
    </button>
    <button @click="$store.state.num = 1000">不通过mutation就修改store</button>
    <h3>{{ msg }}</h3>
    <p>{{ fullName }}</p>
    <div>
      <h3>store 中数据底层的监测和组件的数据一样</h3>
      <p>{{ obj }}</p>
      <button @click="changeObj">修改 obj</button>
    </div>
  </div>
</template>

<script>
// mapState  叫辅助函数，帮助我们生成计算属性
import { mapState } from 'vuex'
import { ADD, SUB, CHANGE, CHANGEOBJ } from '../store/mutationTypes';

export default {
  name: 'CountOne',
  data () {
    return {
      firstNmae: '张',
      lastName: '三'
    }
  },
  // computed: mapState({
  //   // 1. 普通写法 写成箭头函数  适合对 store 数据进行计算
  //   // state 参数代表 store 中的 state ，函数的返回值就是计算属性
  //   len: (state) => state.numArr.length,
  //   // 2. 直接写字符串 写成 store 中的 state 中的属性名  适合直接获取 store
  //   msg: 'msg',
  //   num: 'num',
  //   // 3. 写成普通函数  如果计算属性的时候需要用到组件自己的数据(需要使用this获取)
  // }),
  // 4.直接给mapState 传数组
  computed: {
    ...mapState(['num', 'msg', 'obj']),
    fullName () {
      return this.firstNmae + this.lastName
    }
  },
  methods: {
    add () {
      this.$store.commit(ADD)
    },
    sub () {
      this.$store.commit(SUB)
    },
    change () {
      this.$store.commit({ type: CHANGE, num1: 100, num2: 200 })
    },
    changeObj () {
      this.$store.commit(CHANGEOBJ)
    }
  },

}
</script>

<style>
</style>