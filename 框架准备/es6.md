## es6
ECMASCRIPT2015 简写成 es6.

### 基础语法

##### let 和 const

用来声明变量的用来替代之前的 var 声明。

let const 和 var 的区别
- 不存在变量声明提升
- 暂时性死区(自带块级作用域),当你在花括号内声明变量时，花括号自动变成一个作用域。
- 不允许重复声明

let 和 const 区别
const 是用来声明常量的，声明的变量不能修改。反之都使用 let。

##### 变量的解构赋值
分为数组的解构赋值，对象的解构赋值，字符串的解构赋值
```js
  let author = {
      name: 'lily',
      age: 20
    }
  let { age = 10, name } = author
  let [a,b,c] = [1,2,3]
  let [d,e,f] = 'hello'
```
函数参数的解构赋值
```js
  let author = {
      name: 'lily',
      age: 20
    }
  function fun({ name, age }) {
    //相当于 let {name,age} = author 
    console.log(name)
  }
  fun(author)
```

函数参数的默认值
```js
  let author = {
      age: 20
    }
  function showName({ name = '暂时没有姓名资料' }) {
    console.log(name)
  }
  showName(author)
```
##### 模板字符串

```js
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
// 使用模板字符串替换成
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

##### 函数的扩展
函数参数的默认值
```js
  function add(a = 0,b = 0) {
    // 不传递值的时候 a b 默认为 0
    return a + b
  }
  let res = add(10)   // res ===> 10 + 0 = 10
```
reset 参数--->函数的剩余参数(实参)
```js
  function add(a,...x){
    console.log(x)
    // x --->  [2,3,4,5,6,7,8,9]  这个剩余参数和 arguments 关键字有点像
  }
  add(1,2,3,4,5,6,7,8,9)
```
name 属性，函数创建之后自带一个 name 属性
```js
 function fun(){}
 console.log(fun.name)
```

箭头函数 
箭头函数的创建，分为箭头左边和箭头右边，箭头左边写的是函数的参数写在小括号内。箭头的右边写的是函数执行的语句和返回值，比如
```js
  function add(a ,b){
    let c = a + b
    return c
  }
  // 简化成 
  let add = (a,b) => {
    let c = a + b
    return c
  }
```
规则： 
  - 左边当参数只有一个的时候可以省略小括号
  - 右边有其他操作的时候需要将操作放到花括号内,有操作时返回值只能使用 return 返回
  - 右边没有其他操作只有返回值的时候直接写返回的内容

**注意：只要箭头右侧先写了花括号，那么这个花括号只能当做代码块，不能当做一个对象**

箭头函数和普通函数的不同
1. 箭头函数内的 this 指向，定义的时候就绑定好了。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。


##### 对象的扩展
属性的简洁表达法,当属性名和属性值的变量名相同时可以省略
除了属性可以简写之外，方法也可以简写
```js
  const name = '小红'
  const age = 6
  const obj = {
    name,
    age,
    say(){
      console.log(this.name)
    }
  }
  console.log(obj)
```

对象属性的遍历 
- for in
- Object.keys(obj)
- Object.getOwnPropertyNames(obj)

对象的扩展运算符
拷贝一个新的对象，和原来没关系
同样的 ... 也适用于内置对象(数组等)
```js
  const obj = {
    name: 'lily',
    age: 20
  }
  const obj1 = { ...obj }
  obj1.age = 30
  console.log(obj)
  const arr = [1,2,3]
  const arr1 = [...arr]
```

##### symbol
es6 新增的数据类型，创建成独一无二的数据。
```js
  let mySymbol = Symbol();
  let a = {};
  a[mySymbol] = 'Hello!';
```

##### set  数据结构
set 就是类似数组的数据。里面的所有元素不能相等。
```js
  const s = new Set();
  [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
  const newArr = Array.from(s)
  console.log(newArr)
```

##### class 
class 就是将构造函数和原型组合到了一起并做了一些优化。
```js
  // 之前的构造函数和原型
  function Cat(name, age) {
    this.name = name
    this.age = age
  }
  Cat.prototype.say = function () {
    console.log('喵喵喵')
  }
  const catOne = new Cat('花花儿', 3)
  // 现在 class
  class Cat {
  constructor(name, age) {
    this.name = name
    this.age = age
    
  }
  say = () => {
    console.log(this.name)
  }
```
类的继承
```js
  class Point {
    constructor(x ,y){
      this.x = x
      this.y = y
    }
    toString(){
      return `${this.x},${this.y}`
    }
  }
  // 类如果想继承另外一个类的属性或方法需要在创建的时候使用 extends 关键字创建 ,在 constructor 函数内要使用 super 方法实现继承
  class ColorPoint extends Point {
    constructor(x,y,color){
      // super 其实相当于 new 父级类
      super(x,y)
      // 设置私有的属性只能在 super 之后
      this.color = color 
    }
    say = ()=>{
      console.log('我是带颜色的坐标')
    }
  }
  const colorX = new ColorPoint(10,-20,'red')
  console.log(colorX.toString())
  colorX.say()
```

##### module 
es6 模块，一个 js 文件就可以被当做成一个模块。可以使用模块的导入导出功能，导入到其他的 js 文件内。
导出方式
- 命名导出
```js
const a = 10
const b = 100
// export {b}
// export {a}
// 上面的两句等价于下面 
export { a, b }
```
- 默认导出 
```js
const a = 10
const b = 100
// 导出一个变量 a
// export default a
// 导出了一个对象
export default { a, b }
```

导入方式
- 命名导入
```js
  // import {a,c} from './xx/js'
  // 可以使用 as 重命名
  import {a as aaa ,c} from './xx/js'
```

- 默认导入 
```js 
  // 命名随意
  import xx from './xx.js'
```

**默认导出和命名导出可以同时存在，而且命名导出可以导出多次，默认导出只能一次。自定义的模块导入时写路径，第三方的模块导入时写包名**