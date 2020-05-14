
const logHello = {
  data () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created () {
    console.log('hello from mixin!');
    if (!localStorage.getItem('token')) {
      console.log('你还没有登录，请先登录')
    }
  },
  methods: {
    fun1 () {
      console.log('我是 mixin 内的 method fun1')
    },
    fun () {
      console.log('我是 mixin 内的 method fun1')
    }
  },
};

export { logHello }