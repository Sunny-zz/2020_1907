<template>
  <div id="app">
    <h1>element demo</h1>
    <el-button style="color: red" size="small" @click="percent = 50"
      >按钮</el-button
    >
    <el-button class="login" :loading="loading" @click="login">登录</el-button>
    <el-link type="success">成功链接</el-link>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    javascript：
    <el-progress
      :text-inside="false"
      :stroke-width="18"
      :percentage="percent"
    ></el-progress>
    <hr />
    <h4>抽屉</h4>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button>
    <!-- .sync 修饰符可以将 prop 变成双向绑定的，意思就是可以支持子组件直接修改 prop 导致父组件的 data 也修改 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :before-close="closeDrawer"
    >
      <span>我来啦!</span>
    </el-drawer>
    <hr />
    <h4>树形控件</h4>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value1: '',
      input: '',
      percent: 0,
      loading: false,
      drawer: false,
      data: [{
        key: '一级 1',
        list: [{
          key: '二级 1-1',
          list: [{
            key: '三级 1-1-1'
          }]
        }]
      }, {
        key: '一级 2',
        list: [{
          key: '二级 2-1',
          list: [{
            key: '三级 2-1-1'
          }]
        }, {
          key: '二级 2-2',
          list: [{
            key: '三级 2-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'list',
        label: 'key'
      }
    }
  },
  created () {
    const runKey = setInterval(() => {
      this.percent += 1
      if (this.percent >= 75) {
        clearInterval(runKey)
      }
    }, 10);
  },
  methods: {
    login () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000);
    },
    closeDrawer (done) {
      // 关闭之前执行的回调
      // done 是一个函数该函数的作用是关闭抽屉
      this.messageBox.confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => { });
    },
    handleNodeClick (data) {
      console.log(data);
    }
  }
}
</script>

<style lang='scss' >
/* 在 vue 中如何使用 sass 语法直接安装  node-sass   sass-loader  */
#app {
  width: 60%;
}

/* #app .login {
  color: aqua;
}
.login span {
  font-size: 20px;
} */
</style>
