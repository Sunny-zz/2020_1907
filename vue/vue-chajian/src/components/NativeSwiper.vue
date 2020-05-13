<template>
  <div>
    <h1>测试 swiper</h1>
    <div v-if="lists.length" ref="swiperContainer" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in lists" :key="item.id">
          {{ item.text }}
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <button @click="num++">{{ num }}</button>
    <button @click="updateBanner">更新 banner</button>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'NativeSwiper',
  data () {
    return {
      lists: [],
      num: 0,
      time: 0
    }
  },
  created () {
    setTimeout(() => {
      this.lists = [
        {
          id: 1,
          text: '第一张banner'
        },
        {
          id: 2,
          text: '第二张banner'
        },
        {
          id: 3,
          text: '第三张banner'
        },
        {
          id: 4,
          text: '第四张banner'
        },
      ]
    }, 1000);
  },
  // updated () {
  //   if (this.time === 0) {
  //     console.log(1111)
  //     new Swiper('.swiper-container', {
  //       loop: true, // 循环模式选项
  //       // 如果需要分页器
  //       pagination: {
  //         el: '.swiper-pagination',
  //       },
  //       // 如果需要前进后退按钮
  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //       },
  //     })
  //     this.time = 1
  //   }
  // },
  watch: {
    lists () {
      // console.log(this.lists)
      // 数据更好了 但是获取不到数据对应的真实 dom 节点  (我们之前做的todo编辑时让input自动获得焦点)
      // 使用 vue 提供的 $nextTick 的回调去获去更新之后 dom 节点
      this.$nextTick(() => {
        // console.log(document.querySelector('.swiper-container'))
        // 通过 ref 获取真实 dom 节点
        // 当 ref 设置给了一个组件，那么 ref 就代表这个组件
        // console.log(this.$refs.swiperContainer)
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      })
    }
  },
  methods: {
    updateBanner () {
      this.lists = [
        {
          id: 1,
          text: '第一张'
        },
        {
          id: 2,
          text: '第二张'
        },
        {
          id: 3,
          text: '第三张'
        }
      ]
    }
  },
}
</script>

<style>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>