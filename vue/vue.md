### vue 官方脚手架  vue-cli 
安装脚手架工具 `npm i -g @vue/cli`
安装好之后使用 `vue create 项目名` 创建项目即可。
创建项目的时候有三个模板我们选择的是第二个，default 模板。

### 组件
后缀名是 .vue 的文件，组件一般有三部分构成 template(html结构)  script(js 逻辑)  style(css 样式)


### 模板语法

- 在开始和闭合标签中间写 js。需要使用双花括号包裹 js

- 用 js 控制开始标签的属性。使用 v-bind: 指令 ,可以简写成  : 。就可以直接在引号内添加 js 了。
  ```html
    <a v-bind:class="10 > 5 ? 'active' : ''">hello</a>
    <a :class="10 > 5 ? 'active' : ''">hello</a>
  ```
- 标签中想要插入 html 字符串并解析，需要使用  v-html 命令
  ```html
  <div v-html="'<span>123</span>'"></div>
  ```
### 组件的嵌套 
在父组件中导入子组件，然后在父组件导出的对象下添加一个 components 属性，将导入的子组件写成 components 对象的属性。这样父组件中就可以使用了。

###  class 与 style
class 绑定

- 默认的模板语法判断
  ```html
    <div :class="show ? 'box show' : 'box'"></div>
  ```
- 对象语法
  ```html
    <div class="box" :class="{ show }"></div>
  ```
- 数组语法
  ```html
    <div :class="['box', show ? 'show' : '']"></div>
  ```
style 
- 默认的模板语法判断
  ```html
  <div class="box1" :style="`display:${show ? 'block' : 'none'}`"></div>
  ```
- 对象语法
  ```html
    <!-- 用法一  -->
    <div class="box1" :style="{ display: show ? 'block' : 'none' }"></div>
    <!-- 用法二  -->
    <div class="box1" :style="show ? {} : { display: 'none' }"></div>
  ```

### 条件渲染
- 样式控制 (none  ----   block|flex|table...)    v-show
  ```html
    <div class="box2" v-show="show"></div>
  ```
- 结构控制 (标签是否存在)   v-if 可以配合 v-else-if v-else 使用 
  ```html
    <div class="box2" v-if="show"></div>
    <div v-else>配合 v-if</div>
  ```

### 列表渲染
使用 v-for 指令
  ```html
      <ul>
        <!-- articles 代表 数组数据 -->
        <!-- item 只是一个形参 代表数组内的一项 -->
        <!-- index 只是一个形参 代表数组内的一项的索引 -->
        <li v-for="(item, index) in articles" :key="item.id">
          <span>{{ item.title }}</span>
          <span>对应的索引值{{ index }}</span>
        </li>
      </ul>
  ```
### 事件处理
使用 v-on 指令绑定事件 可以简写成 @ 例如
template 
```html
  <button @click="add">+1</button>
```
script
```js
  methods: {
    // 事件函数只能写成 普通函数(只有这里才能使用 this )
    add () {
      // 数据的修改直接重新赋值即可
      this.num++
    }
  }
```

### 表单的输入绑定
就是直接使用 v-model 指令

### 指令修饰符
v-on 事件修饰符
- .stop 阻止事件冒泡或者叫阻止事件向上传递
- .prevent 阻止事件的默认行为(a 的跳转，表单的提交。。。)
- .self 只当在 event.target 是当前元素自身时触发处理函数
- .once 事件只触发一次
按键修饰符
系统修饰符
v-model 修饰符
- .lazy 使用懒惰模式，意思是双向绑定不使用 input 事件而是使用 change 事件
- .number
- .trim


### 计算属性和侦听器
计算属性 computed
当你有一些数据需要在做一些变形之后在展示到页面上，一般情况下不需要再重新定义一个 data，而是使用计算属性设置
但是计算属性的写法是一个函数必须返回一个值，如果当你的计算属性需要异步请求才能变形的话，设置返回会很复杂。考虑使用侦听器替代。
计算属性一般是单项的，也就是根据某些数据计算出来一个计算属性，来源数据发生了改变，计算属性就跟着变。但是有些时候可能需要直接修改计算属性，那么数据的来源也应该跟着改变，此时就需要给计算属性设置 setter。

侦听器 watch
侦听器跟计算属性相同功能。
当你有一些数据需要变形之后展示在页面上，并且这种变形操作需要发起步请求才能实现，那么就需要顶一个新的 data ，使用侦听器监听数据来源，从而改变新创建的data。为什么不使用计算属性，因为侦听器的写法不需要设置返回值，而是直接修改新的 data 即可。




### 组件的数据(data)
创建
在组件导出的对象下新添加一个 data 属性，该属性的属性值是一个函数，而且这个函数需要返回一个对象，这个对象下下的属性就是组件的数据了。
```js
export default {
  name: 'App',
  data () {
    return {
      num: 100
    }
  }
}
```

使用
- 在 template 中使用，直接使用数据名即可
- 在 script 中使用，需要使用 this.num

修改
直接对数据重新重新赋值即可


### 组件的 prop 
当子组件再父组件中展示的时候，可能需要多个相同子组件，每一个子组件可能都有一些不同(组件内的内容或者样式).
那么此时就需要父组件向子组件传递 prop ，子组件接收之后根据传过来的数据进行改变。