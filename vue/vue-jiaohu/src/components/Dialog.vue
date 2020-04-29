<template>
  <div
    :style="{ display: show ? 'block' : 'none' }"
    class="dialog-mask"
    @click.self="$emit('changeShow', false)"
  >
    <div class="dialog">
      <div class="dialog-header">
        <slot name="header"></slot>
      </div>
      <hr />
      <div class="dialog-content">
        <!-- 父组件想展示什么就展示什么 -->
        <slot></slot>
      </div>
      <hr />
      <div class="dialog-footer">
        <!-- 确定和取消按钮的功能不仅仅是关闭对话框，还需要做的是确定和取消功能 -->
        <!-- 比如弹出的对话框是是否确认删除，当你点击确定的时候需要执行删除操作(这些操作其实都是父组件的)，否则执行不删除操作 -->
        <button @click="okClick">确定</button>
        <button v-if="isHasCancel" @click="cancelClick">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['show', 'changeShow', 'isHasCancel'],
  methods: {
    okClick () {
      this.$emit('okClick')
      // 自定义事件如何传递参数
      this.$emit('changeShow', false)
      // this.changeShow(false)
    },
    cancelClick () {
      this.$emit('cancelClick')
      this.$emit('changeShow', false)
      // this.changeShow(false)
    }
  },
}
</script>

<style scoped>
.dialog-mask {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.dialog {
  position: absolute;
  width: 400px;
  text-align: center;
  height: 200px;
  background-color: #fff;
  top: 100px;
  left: 50%;
  margin-left: -200px;
}
</style>