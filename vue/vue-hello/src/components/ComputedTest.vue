<template>
  <div class="computed">
    <h3>测试计算属性</h3>
    <p>展示默认字符串: "{{ str }}"</p>
    <!-- <p>展示翻转之后的字符串: "{{ reverseStr(str) }}"</p> -->
    <p>展示翻转之后的字符串: "{{ reverseStr }}"</p>
    <h3>测试侦听属性</h3>
    <h4>侦听属性的反面案例，使用计算属性更好</h4>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <div>某人的全名: {{ fullName }}</div>
    <button @click="changeFullName('pan yuting')">修改全名</button>
    <h4>适合侦听属性的案例</h4>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <!-- .lazy 作用是 question 会在失去焦点的时候发生改变 -->
        <!-- 不加的话输入就会改变 -->
        <input v-model.lazy="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
// 如何将字符串翻转

export default {
  name: 'ComputedTest',
  data () {
    return {
      str: 'hello',
      firstName: 'zhao',
      lastName: 'weibing',
      // fullName: 'zhaoweibing'
      question: '',
      answer: ''
    }
  },
  // 计算属性将data 的数据进行变形，相当创建一个新的 data
  // 在组件导出的对象内添加一个 computed 属性该属性的属性值是一个对象,该对象下只能添加方法，每一个方法代表一个计算属性
  // 而且方法必须设置返回值，返回的值作为新的 data,该 data 只能使用不能进行修改
  // 计算属性的名不能和 data 的名冲突
  computed: {
    reverseStr () {
      return this.str.split('').reverse().join('')
    },
    // 如果计算属性可以直接被修改，那么计算属性的数据来源也应该被修改，需要设置计算属性的 setter 进行修改，
    // 所以计算属性就需要写成对象类型了，里面有两个属性  get  set
    fullName: {
      // getter 获取用的
      get () {
        return this.firstName + " " + this.lastName
      },
      // setter 用于反向修改
      // 当直接修改了计算属性时，该计算属性的 set 就会被触发，参数就是新的计算属性
      set (val) {
        this.firstName = val.split(' ')[0]
        this.lastName = val.split(' ')[1]
      }
    },
    // answer () {
    // 根据question发送请求，然后请求结束之后得到answer

    // return this.question.length > 10 ? 'yes' : this.question.length === 0 ? '' : 'no'

    // setTimeout(() => {
    //   return this.question.length > 10 ? 'yes' : this.question.length === 0 ? '' : 'no'
    // }, 500);
    // return 在设置返回的话必须等异步操作结束，很难实现
    // }
  },
  // 侦听属性
  // 监听组件内的 data 或者 props 的变化从而控制另外的 data
  watch: {
    // firstName (val) {
    //   this.fullName = val + this.lastName
    // },
    // lastName (val) {
    //   this.fullName = this.firstName + val
    // },
    question (val) {
      this.answer = 'Waiting for you to stop typing...'
      setTimeout(() => {
        this.answer = val.length > 10 ? 'yes' : val.length === 0 ? '' : 'no'
      }, 2000);
    }
  },
  methods: {
    // reverseStr (str) {
    //   return str
    //     .split("")
    //     .reverse()
    //     .join("")
    // }
    changeFullName (fullName) {
      // 正常情况下一般不需要对计算属性进行直接修改
      // 直接修改了计算属性，默认会失败 提示需要给 计算属性设置一个 setter 
      this.fullName = fullName
    }
  }
}
</script>

<style>
</style>