## 微信小程序

### 注册

### 安装小程序开发者工具

### 小程序 demo 的目录构成

### 小程序的配置

#### 应用配置

app.json

- pages
- window
- tabBar
- ...

#### 页面配置

page.json

- 下拉
- 上拉
- 自定义组件
- ...

### 小程序的基础知识

#### 模板语法

- 数据绑定
  使用 `{{}}` 语法实现数据绑定，简单的分为 文本类 属性类 计算类

- 列表渲染
  使用 `wx:for` 实现
  需要注意的问题就是 key 的值可以直接写 item 内的属性名字符串

  ```html
  <view wx:for="{{todos}}" wx:for-index="ind" wx:for-item="todo" wx:key="id">
    {{todo.text}} : {{ind}}
  </view>
  ```

- 条件渲染
  1. 使用 `wx:if` `wx:else` `wx:elif` 结构的显示和出现
  2. 使用 `hidden` 样式的出现和消失
  ```html
  <block wx:if="{{show}}">
    <view>测试</view>
  </block>
  <view hidden="{{show}}" class="box"></view>
  ```

#### 事件绑定

需要使用 `bind:事件名`
事件的定义需要在 Page 的对象内新增方法即可
使用

```html
<button bind:tap="add">测试事件绑定</button>
<button bind:tap="add1" data-num="{{100}}" data-num2="{{2000}}">
  测试事件传递参数
</button>
```

需要注意的是传递参数需要使用 `data-xx` 属性，接收参数需要使用 `event.currentTarget.dataset`

#### 样式

- 样式单位 rpx ,小程序将整个屏幕横向分为 750 rpx
- 通配符选择器 \* 不可用
- 在小程序中使用 css 扩展语法
  1. 添加环境配置 npm 等
  2. 借助编辑器写 less 或 sass 自动编译成 wxss, 推荐 vscode 编辑器 安装 easyless easysass 插件

#### 基础组件

##### text 组件

相当于之前的 html 标签 span，行元素。小程序中只有该组件内的文字可以长按复制。
text 组件自能嵌套 text 组件

##### view 组件

div 的代替品 块元素

##### scroll-view 组件

当你的 view 组件想要带滚动条，必须使用 scroll-view 组件,该组件支持很多滚动的事件
不推荐使用 view 组件加 overflow 样式实现滚动条

##### image 组件

自带默认大小 320\* 240
自带 mode 属性，用来控制图片的展示效果，mode 有 14 中模式 常用的是 aspectFit
懒加载功能

##### swiper 组件

需要搭配 swiper-item 使用
swiper 默认宽高 100% 150px
swiper-item 默认宽高 100% 100%
如果想要 swiper 自适应图片比例 需要根据图片的实际大小手动设置 swiper 的宽高

##### navigator 组件

页面跳转组件
属性 open-type 比较重要

##### rich-text 组件

很想 vue v-html  
设置 nodes 属性

##### button 组件

open-type 按钮的开放功能

##### radio 组件

一般需要配合 radio-group 组件使用
表单组件获取值的内容 一般都通过事件对象内获取

##### checkbox 组件

一般需要配合 checkbox-group 组件使用

##### picker 组件

需要注意的就是 modo 属性，还有就是一定要手动填充 picker 的大小

#### 自定义组件

1. 创建
2. 使用
3. 页面和子组件之间的交互
   - 页面数据传递给子组件 类似于 vue 的 props
   - 子组件内的数据传递给页面 类似于 vue 的 自定义事件

#### 小程序的生命周期

小程序内自带的一些函数，在小程序的一些动作中会被自动触发

##### 应用的生命周期

- onLaunch 生命周期回调——监听小程序初始化。
- onShow 生命周期回调——监听小程序启动或切前台。
- onHide 生命周期回调——监听小程序切后台。
- onError 错误监听函数。
- onPageNotFound 页面不存在监听函数。

###### 全局数据 globalData

可以共享给小程序内的所有页面使用

1. 创建
2. 使用
3. 修改

##### 页面的生命周期

#### 小程序的环境搭建

#### 小程序的基础

#### 小程序的配置

##### 模板语法

##### 事件绑定

##### 基础组件

##### 生命周期

##### 自定义组件

##### 小程序的 api
