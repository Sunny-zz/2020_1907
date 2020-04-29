import Vue from 'vue'
const Button = Vue.component('my-button', {
  data () {
    return {
      text: '按钮'
    }
  },
  template: '<button>{{text}}</button>'
})
export default Button