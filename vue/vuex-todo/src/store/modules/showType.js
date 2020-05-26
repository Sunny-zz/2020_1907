import { CHANGE_SHOW_TYPE } from '../mutationTypes';
// 一个 store 模块是一个对象,对象有 state  mutations  getters actions 属性
const showTypeModule = {
  state: () => ({
    showType: 'all'
  }),
  mutations: {
    [CHANGE_SHOW_TYPE] (state, newType) {
      state.showType = newType
    }
  },
}

export default showTypeModule