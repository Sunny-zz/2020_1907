<template>
  <div id="app">
    <h1>hello cube-ui</h1>
    <cube-button @click="handleClick" class="btn">Button</cube-button>
    <cube-button :primary="true">Primary Button</cube-button>
    <cube-scroll-nav-bar
      :current="current"
      :labels="labels"
      @change="changeHandler"
    />
    <div class="side-container">
      <cube-scroll-nav-bar
        direction="vertical"
        :current="current"
        :labels="labels"
        :txts="txts"
        @change="changeHandler"
      >
        <i slot-scope="props">{{ props.txt }}</i>
      </cube-scroll-nav-bar>
    </div>
  </div>
</template>

<script>
// 当你的项目使用了某个第三方 ui 库，可能会自动引入 UI 库自带的样式初始化
export default {
  name: 'App',
  data () {
    return {
      current: '快车',
      labels: [
        '快车',
        '小巴',
        '专车',
        '顺风车',
        '代驾',
        '公交',
        '自驾租车',
        '豪华车',
        '二手车',
        '出租车'
      ],
      txts: [
        '1快车',
        '2小巴',
        '3专车',
        '4顺风车',
        '5代驾',
        '6公交',
        '7自驾租车',
        '8豪华车',
        '9二手车',
        '10出租车'
      ]
    }
  },

  methods: {
    handleClick () {
      console.log(111)
    },
    changeHandler (cur) {
      this.current = cur
    }
  },
}
</script>

<style>
.btn {
  width: 50%;
}
.side-container {
  height: 300px;
  margin-top: 20px;
}
.cube-scroll-nav-bar {
  background-color: #ccc;
}
.cube-scroll-wrapper {
  width: 100%;
}
.cube-scroll-nav-bar-item_active {
  background-color: teal;
}
</style>
