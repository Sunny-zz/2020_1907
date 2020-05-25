// 创建 store 存储我们的共享数据
import Vue from 'vue'
import Vuex from 'vuex'
import { ADD, SUB, CHANGE, CHANGEOBJ } from './mutationTypes';
Vue.use(Vuex)


const store = new Vuex.Store({
  // 在开发环境下加上严格模式
  // 开发环境   npm run serve
  // 生产环境   npm run build
  strict: process.env.NODE_ENV !== 'production',
  state: {
    num: 100,
    msg: 'hello vuex',
    show: false,
    numArr: [1, 2, 3],
    obj: { name: '大乔' }
    // 表单数据如果共享到 store 中 那么就不能使用 v-model 双向绑定，需要使用  :value='store数据'  @input='事件(修改 store数据)'
  },
  // 提供修改 state 的方法
  mutations: {
    [ADD] (state) {
      state.num++
    },
    [SUB] (state) {
      state.num--
    },
    // 默认 mutation 函数最多只能接收两个参数
    [CHANGE] (state, payload) {
      state.num = payload.num1 + payload.num2
    },
    [CHANGEOBJ] (state) {
      // state.obj = { ...state.obj, age: 18 }
      // 在不同的环境下 调用 vue 的 api
      Vue.set(state.obj, 'age', 18)
    }
  }
})

export default store


// store 的创建
// 在入口文件导入共享 store 
// 组件中的获取 (直接, mapState(a,b,c,d))
// 组件中修改 commit 触发 mutation  (普通，载荷(a,b))