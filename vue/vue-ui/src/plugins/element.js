import Vue from 'vue'
// import '../assets/element-variables.scss'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import { Button, Link, Input, Progress, Drawer, MessageBox, Tree, DatePicker } from 'element-ui'

// 设置语言
locale.use(lang)
Vue.prototype.messageBox = MessageBox
// 把 element 导入的组件做成了全局组件
Vue.use(Button)
// 在任何项目组件内都可以使用导入的 Button 组件，需要使用 el-button 标签
Vue.use(Link)
Vue.use(Input)
Vue.use(Progress)
Vue.use(Drawer)
Vue.use(Tree)
Vue.use(DatePicker)

