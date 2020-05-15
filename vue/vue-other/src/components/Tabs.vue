<template>
  <div>
    <h2>用动态组件实现选项卡功能，并且加上 keep-alive 功能</h2>
    <div class="tabs">
      <ul>
        <li
          :style="{ color: CurrentComponentName === 'Home' ? 'red' : '#000' }"
          @click="CurrentComponentName = 'Home'"
        >
          home
        </li>
        <li
          :style="{ color: CurrentComponentName === 'Posts' ? 'red' : '#000' }"
          @click="CurrentComponentName = 'Posts'"
        >
          posts
        </li>
      </ul>
      <hr />
      <div>
        <!-- v-if  和  v-show 的在组件上使用的区别 -->
        <!-- v-if 从出现变成消失执行的生命周期  beforeDestroy  destroyed-->
        <!-- v-if 从消失到出现 beforeCreate created  beforeMount  mounted -->
        <!-- v-show 的更新并不会触发生命周期函数   -->
        <!-- :is='已注册的组件名字符串，就会展示对应的组件' -->
        <!-- 动态组件的切换是 v-if 的切换 -->

        <!-- <keep-alive :include="/Posts/"> -->
        <keep-alive include="Posts">
          <component :is="CurrentComponentName"></component>
        </keep-alive>

        <!-- 使用了 动态组件(v-if)切换选项卡之后，当展示某个选项卡是因为是重新渲染，所以选项卡组件会初始化。也就是选项卡徐建内的所有数据都会变成会初始状态 -->
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home'
import Posts from './Posts'
export default {
  name: 'Tabs',
  components: {
    Home,
    Posts
  },
  data () {
    return {
      CurrentComponentName: 'Posts',
      show: false
    }
  },
}
</script>

<style>
.tabs {
  width: 600px;
  height: 300px;
  border: 1px solid #ccc;
}
.tabs li {
  cursor: pointer;
}
</style>