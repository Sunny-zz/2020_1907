<template>
  <div id="app">
    <Button type="primary">Button</Button>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <Icon size="40" type="ios-checkmark" />
    <hr />
    <Scroll
      class="content"
      :on-reach-bottom="handleReachBottom"
      :distance-to-edge="0"
      :on-reach-top="handleReachTop"
      :loading-text="text"
    >
      <Card
        dis-hover
        v-for="(item, index) in list1"
        :key="index"
        style="margin: 32px 0"
      >
        Content {{ item }}
      </Card>
    </Scroll>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      text: ''
    }
  },
  methods: {
    handleReachBottom () {
      console.log(1)
      this.text = '加载更多'
      setTimeout(() => {
        this.list1.push(11, 12, 13, 14, 15, 16, 17)
      }, 1000);
    },
    handleReachTop () {
      console.log(1)
      this.text = '刷新'
      setTimeout(() => {
        this.list1.reverse()
      }, 1000);
    }
  },
}
</script>

<style lang='less'>
/* 在 vue 中使用 less */
#app {
  .content.ivu-scroll-wrapper {
    width: 400px;
    border: 1px solid #ccc;
  }
}
</style>
