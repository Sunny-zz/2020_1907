<template>
  <div style="margin-left: 200px;">
    <h3>vue 动画和过渡</h3>
    <button @click="handleClick">toggle</button>
    <!-- 点击按钮让下面的文字 渐渐消失或者渐渐出现，消失是dom节点不在页面上了 -->
    <!-- <p :style="{ opacity: styleShow ? 1 : 0 }" class="txt" v-show="show">
      hello
    </p> -->
    <!-- vue 内置了 transition 组件用来实现组件的动画效果 -->
    <h4>单元素</h4>
    <transition appear name="fade">
      <p v-if="show">hello ，你好</p>
    </transition>
    <h4>多个元素</h4>
    <button @click="showTwo = !showTwo">切换</button>
    <br />
    <!-- mode 的作用 -->
    <!-- 下面的例子当切换 showTwo 的时候某个阶段两个元素会同事存现在页面上，可以使用 mode 修改 -->
    <!-- 1. mode='out-in' 离开的元素先执行动画，执行完毕之后出现的动画在执行。 -->
    <!-- 2. mode='in-out' 与上面相反 -->
    <transition name="move" mode="in-out">
      <button key="on" class="btn1" v-if="showTwo">on</button>
      <!-- <input class="btn1" v-else type="button" value="off" /> -->
      <button key="off" class="btn1" v-else>off</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data () {
    return {
      show: true,
      showTwo: true,
      // styleShow: true
    }
  },
  methods: {
    // 消失的动画效果实现    先修改样式  --->(需要一秒延迟) 控制标签真正消失
    // 出现的动画效果实现    先控制标签真正出现 --->(不需要延迟) 修改样式
    // handleClick () {
    //   // 修改样式
    //   if (this.show) {
    //     // 消失效果
    //     this.styleShow = false
    //     setTimeout(() => {
    //       // 修改真的出现或者消失
    //       this.show = false
    //     }, 1000);
    //   } else {
    //     // 出现效果
    //     this.show = true
    //     setTimeout(() => {
    //       this.styleShow = true
    //     }, 0);
    //   }
    // }
    handleClick () {
      this.show = !this.show
    }
  },
}
</script>

<style>
/* .txt {
  opacity: 1;
  transition: opacity 1s;
} */
/* 根据 transition 的 name 属性设置动画的不同阶段的样式 */
/* 都有哪些阶段 */
/* xxx 代表给 transitoin 传递的 name 属性 */
/* 出现： 出现的第一帧 xxx-enter   出现过程  xxx-enter-active    出现结束  xxx-enter-to  */
/* 消失： 消失的第一帧 xxx-leave   消失过程  xxx-leave-active    消失结束  xxx-leave-to  */

/* 如果默认元素是出现的  那么元素的默认样式就是  消失的第一帧和出现结束那一帧 不需要设置*/
/* .fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 1.5s;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
  transform: translateX(20px);
} */
p {
  width: 200px;
  line-height: 40px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
}
.fade-leave-active {
  animation: bounceOut 2.5s;
}
.fade-enter-active {
  animation: roundIn 2.5s;
}
@keyframes bounceOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes roundIn {
  0% {
    transform: scale(0) rotate(0);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(3600deg);
    opacity: 1;
  }
}

.move-enter-active,
.move-leave-active {
  transition: all linear 1s;
}
.btn1 {
  transform: translateX(0);
  opacity: 1;
  width: 40px;
}
.move-enter {
  margin-left: 40px;
  opacity: 0;
}
.move-leave-to {
  margin-left: -40px;
  opacity: 0;
}
</style>