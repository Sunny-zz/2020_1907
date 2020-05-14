<template>
  <div>
    <h2>数据改变引起视图更新</h2>
    <hr />
    <div>
      <span>{{ msg }}</span>
      <button @click="msg = 'hello world'">更新 msg</button>
    </div>
    <h3>某些数据修改时不能触发试图更新</h3>
    <h4>
      数据是对象，更新时，给对象添加新的属性，不能触发视图的更新(但是数据更新了)
    </h4>
    <div>
      <span>{{ obj.name }}</span>
      |
      <span v-if="obj.age">{{ obj.age }}</span>

      <button @click="obj.name = '小红'">更新 obj.name</button>
      <button @click="obj.age = 10">更新 obj 新增 age</button>
      <button @click="obj = { name: '小黑', age: 10 }">
        更新 obj ,直接重新赋值
      </button>
      <button @click="handleClick">$set更新</button>
    </div>
    <br />
    <hr />
    <h4>
      数据是对象数组，更新时，给内部对象新增属性，不能触发视图的更新(但是数据更新了)
    </h4>
    <ul>
      <li v-for="(item, index) in arr" :key="item.id">
        <span>{{ item.text }}</span>
        <button v-if="item.isHasDel">删除</button>
        <button @click="addDel(item, index)">新增删除按钮</button>
      </li>
    </ul>
    <br />
    <hr />
    <h4>
      数据是数组，更新时，使用 数组[index] = value
      更新数组的数据不会触发视图的更新
    </h4>
    <h4>
      数据是数组，更新时，使用 数组.length = newLength
      更新数组的数据不会触发视图的更新
    </h4>
    <ul>
      <li v-for="(num, index) in numArr" :key="index">
        {{ num }}
      </li>
    </ul>
    <button @click="numArr[0] = 8">使用 numArr[0] = 8 修改数据</button>
    <button @click="numArr.splice(0, 1, 8)">使用 splice 修改</button>
    <button @click="$set(numArr, 0, 8)">使用set修改数据</button>
    <button @click="numArr.length = 2">
      使用 numArr.length = 2 做删除操作
    </button>
    <button @click="numArr.splice(2)">使用splice进行删除</button>
  </div>
</template>

<script>
// const arr = [1, 2, 3, 4]
// arr.length = 2
// console.log(arr)
export default {
  name: 'DataView',
  data () {
    return {
      msg: 'hello',
      // 当数据是一个对象的时候，vue 如何监听这个数据
      // 1. 监听整个 obj    2.也监听已经存在的属性
      // 当你直接给对象添加 age 属性，整个对象的地址没有改变， vue 底层并不认为修改了 obj，肯定没有修改 name
      // 只要上述发生了改变那么就会触发生命周期(更新)，进而视图更新
      obj: {
        name: '小黑',
      },
      arr: [
        {
          id: 1,
          text: '666'
        },
        {
          id: 2,
          text: 'oh my god'
        }
      ],
      numArr: [
        1, 2, 3, 4
      ]
    }
    // 只要我们使用直接重新赋值的方式修改 data 肯定会触发视图的更新
  },
  methods: {
    handleClick () {
      // $set(要被修改的数据(对象),新增的属性名,新增的属性值)
      this.$set(this.obj, 'age', 10)
    },
    addDel (item, index) {
      // this.$set(this.arr, index, { ...item, isHasDel: true })
      console.log(index)
      this.$set(item, 'isHasDel', true)
      // console.log(this.arr)
    }
  },
}
</script>

<style>
</style>