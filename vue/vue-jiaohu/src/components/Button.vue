<template>
  <button @click="$emit('add')" class="btn" :class="type">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  // props  data  computed 都是数据，不能重名
  // props: ['text', 'color']
  // 利用 prop 进行验证
  props: {
    // text: String,
    text: {
      type: String,
      // 假如传递过来的数据是对象(数组)类型设置默认值的时候，需要将 default 属性写成函数返回一个默认兑现
      default: '默认按钮'
    },
    // color: {
    //   type: String,
    //   required: true
    // }
    type: {
      type: String,
      validator (val) {
        return ['login', 'signup', 'default'].includes(val)
      },
      default: 'default'
    },
    // click: {
    //   type: Function,
    //   default: function () { }
    // }
  }
}
</script>

<style>
.btn {
  width: 100px;
  height: 40px;
  outline: 0;
  border: 0;
  border-radius: 6px;
  font-size: 20px;
}
.login {
  background-color: #337bd8;
  color: #fff;
}
.signup {
  background-color: rgb(106, 175, 135);
  color: #000;
}
.default {
  background-color: #ccc;
  color: teal;
}
</style>