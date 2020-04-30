<template>
  <div class="main">
    <h2>对话框例子</h2>

    <button @click="show = true">删除</button>
    <Dialog
      :show="show"
      :changeShow="changeShow"
      @changeShow="changeShow"
      @okClick="del"
      @cancelClick="noDel"
      :isHasCancel="false"
    >
      <!-- 插槽 slot -->
      <!-- 在父组件中使用子组件时向子组件的开始标签和结束标签之间传递插槽内容(html结构) -->
      <!-- 在子组件中可以直接使用  slot 标签接收父组件传递的 插槽 -->
      <!-- 假如父组件传递插槽内容是想要在子组件中的不同位置展示，那么就要定义多个插槽，也就是需要给插槽命名(v-slot) -->
      <!-- 带了名字的插槽叫具名插槽，在组组件内使用 slot 标签，加上name属性接收 例如 <slot name="header"></slot>  v-slot: 可以简写成 #  -->
      <template #header>
        <h3>提示信息</h3>
      </template>
      <!-- 没有命名的叫默认插槽，在子组件内依然使用 slot 标签接收 -->
      <p>真的要删除吗？(不可恢复)</p>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  name: 'Main',
  data () {
    return {
      show: false,
      arr: [1, 2, 3, 4]
    }
  },
  components: {
    Dialog,
  },
  methods: {
    // close () {
    //   this.show = false
    // },
    changeShow (newShow) {
      this.show = newShow
    },
    del () {
      console.log('执行删除操作')
      this.arr.pop()
    },
    noDel () {
      console.log('执行非删除操作')
    }
  },
}
</script>

<style>
</style>