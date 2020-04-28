<template>
  <div id="app">
    <h1>hello</h1>
    <img class="pic" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a :class="10 > 5 ? 'active' : ''">{{ 10 > 5 ? "对的" : "错的" }}</a>
    <div v-html="'<span>123</span>'"></div>
    <!-- class 绑定 -->
    <!-- 普通的判断 -->
    <!-- <div :class="show ? 'box show' : 'box'"></div> -->
    <!-- <div class="box" :class="show && 'show'"></div> -->
    <!-- 对象语法 将 class 设置成对象,对象的属性就是一个 class 名，属性的属性值设置成 true 或 false，对应的名字就会生效和失效了 -->
    <!-- 当 class 名是组合形式的时候 例如 header-top 怎么写成属性名   {'header-top': boolean } -->
    <!-- <div class="box" :class="{ show }"></div> -->
    <!-- 数组语法 将 class 设置成数组 数组的每一项都代表一个 class 名 -->
    <!-- <div :class="['box', show ? 'show' : '']"></div> -->
    <!-- style 绑定 -->
    <!-- <div class="box1" style="display: none"></div> -->
    <!-- <div class="box1" :style="`display:${show ? 'block' : 'none'}`"></div> -->
    <!-- 对象语法  -->
    <!-- <div class="box1" :style="{ display: show ? 'block' : 'none' }"></div> -->
    <!-- <div class="box1" :style="show ? {} : { display: 'none' }"></div> -->

    <!-- 条件渲染   v-show 可以使用 class 或者 style 替代 -->
    <!-- <div class="box2" v-show="show"></div> -->
    <!-- 条件渲染   v-if  -->
    <!-- <div class="box2" v-if="show"></div>
    <div v-else>配合 v-if</div> -->

    <!-- 列表渲染 v-for -->
    <!-- <ul>
      <li v-for="(item, index) in articles" :key="item.id">
        <span>{{ item.title }}</span>
        <span>对应的索引值{{ index }}</span>
      </li>
    </ul> -->
    <!-- <div>
      <div>xingming {{ author.name }}</div>
      <div v-for="item in author" :key="item">
        {{ item }}
      </div>
    </div> -->
    <div>
      <!-- 事件绑定的时候可以直接赋值一个函数，点击的时候函数触发 -->
      <button @click.once="add">
        +1
      </button>
      <!-- 也可以将执行的内容直接给 click 赋值，点击的时候执行，一般执行的内容都是简单的修改 data  -->
      <!-- <button @click="num++">
        +1
      </button> -->
      <button @click="setNum(1000, $event)">
        把 num 想改成什么改成什么(事件传参)
      </button>
      <span>{{ num }}</span>
    </div>

    <form action="">
      <!-- 双向绑定 -->
      <!-- 当用户输入，导致视图改变 -->
      <!-- 通过 js 逻辑处理修改，导致视图改变 -->
      <!-- 在 vue 中  change 事件是在失去焦点的时候触发的 -->
      <!-- <input type="text" :value="value" @change="handleInput" @input="handleInput"  /> -->
      <input type="text" v-model="value" />
      <!-- v-model 替换的是 @input + value 修改  -->
      <p>展示修改的value: {{ value }}</p>
      <button @click="submit">提交</button>

      <h3>你喜欢的框架有哪些？</h3>
      <label for="">Vue</label>
      <input value="vue" v-model="checkedNames" type="checkbox" />
      <label for="">React</label>
      <input value="react" v-model="checkedNames" type="checkbox" />
      <label for="">微信小程序</label>
      <input value="微信小程序" v-model="checkedNames" type="checkbox" />
      <label for="">Angular</label>
      <input value="angular" v-model="checkedNames" type="checkbox" />
      <p>结果: {{ checkedNames }}</p>

      <input type="radio" value="男" v-model="picked" />
      <label for="">男</label>
      <br />
      <input type="radio" value="女" v-model="picked" />
      <label for="">女</label>
      <br />
      <span>Picked: {{ picked }}</span>

      <div id="example-5">
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
    </form>
    <div class="box3" @click.self="handleBox3">
      <div class="box4"></div>
    </div>
    <button @click.ctrl="num++">
      测试系统修饰符只有当按住 ctrl 点击按钮是才会触发事件
    </button>
    <ComputedTest />
  </div>
</template>

<script>

// 父组件导入子组件并展示
import HelloWorld from './components/HelloWorld'
import ComputedTest from './components/ComputedTest'

// 一般来说每一个组件必须默认导出一个对象，该对象下才能写该组件的一些 js 逻辑(事件函数各种操作)
// 该对象下默认需要有一个 name 属性，该属性其实就相当于给组件命了个名儿，这个名不能和html标签名冲突，否则会有警告.
// 该对象下的 components 属性 是一个对象，需要将所有子组件当成属性写在里面，然后父组件才能使用

// 一旦出现了指令那么后面的值 就是使用 js 设置的了，所以 引号内直接写的 js 语法


export default {
  name: 'App',
  components: {
    HelloWorld,
    ComputedTest
  },
  // data: function(){ return {} },
  // data: () => { return {} }
  data () {
    return {
      num: 100,
      show: true,
      articles: [
        {
          id: '1de1',
          title: 'Vue'
        },
        {
          id: '32dq',
          title: 'React'
        },
        {
          id: '8u8y',
          title: '小程序'
        }
      ],
      author: {
        name: 'lily',
        age: 24
      },
      value: '默认值',
      checkedNames: [],
      picked: '男',
      selected: ''
    }
  },
  methods: {
    // 事件函数只能写成 普通函数(只有这里才能使用 this )
    // 这里面定义的函数不一定都当做事件函数
    add () {
      // console.log(this.num)
      this.num++
    },
    // 如果事件函数设置了参数，那么如果事件触发的时候不传递参数，那么事件函数接收的第一个参数默认是事件对象
    // 如果真正想要传递事件对象的话，使用 $event 传递
    setNum (newNum, event) {
      console.log(newNum, event)
      this.num = newNum
    },
    submit (event) {
      event.preventDefault()
      console.log(this)
      console.log(this.value)
    },
    // handleInput (event) {
    //   console.log(11111111)
    //   this.value = event.target.value
    // }
    handleBox3 () {
      console.log('点击了 box3')
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 2000px;
}
.pic {
  width: 400px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  display: none;
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: teal;
}

.box2 {
  width: 300px;
  height: 300px;
  background-color: hotpink;
}
.box3 {
  width: 400px;
  height: 400px;
  background-color: #ccc;
}
.box4 {
  width: 200px;
  height: 200px;
  background-color: teal;
}
.show {
  display: block;
}
.active {
  color: red;
}
</style>
