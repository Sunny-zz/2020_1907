import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
import VueMoment from 'vue-moment'
Vue.use(VueMoment, { moment })
Vue.moment().locale()
