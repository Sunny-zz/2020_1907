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

  ```html
  <view
    wx:for="{{todos}}"
    wx:for-index="ind"
    wx:for-item="todo"
    wx:key="{{todo.id}}"
  >
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
