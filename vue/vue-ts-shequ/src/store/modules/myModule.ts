import { Module, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
// dynamic 动态创建 store 模块
// name 是模块名
// store 指的是创建到哪
@Module({ name: 'mm', dynamic: true, store })
export default class MyModule extends VuexModule {
  message = 'hello world'
}
