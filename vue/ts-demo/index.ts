// ts 语法
// function greeter (person) {
//   return "Hello, " + person;
// }

// let user = "Jane User";
// document.body.innerHTML = greeter(user);
// let num = 3;
// const arr = [1, 2, '3', true]
// let arr: [number, number] = [1, 2]
// arr.push(3)
// 枚举

// enum Color { Red = 4, Green, Blue, Pink }
// let x = Color.Pink
// 给 x 重新赋值的时候一般只能赋值成枚举中的另外值
// 判断 x 到底是哪一个枚举类型
// 可以用枚举编号   编号默认从数字0开始，可以在枚举声明的时候修改
// if (x === 7) {
//   console.log('粉色')
// }

// enum Color { Red, Green, Blue, Pink }
// let x = Color[0]
// console.log(x)

// any
// let x: any;
// setTimeout(() => {
//   x = '1000'
// }, 1000);

// function warnUser (): void {
//   console.log("This is my warning message");
// }

// let someValue: any = "this is a string";
// 将 any 类型断言成字符串类型
// let strLength: number = (<string>someValue).length   // 不能在 jsx 中使用
// let strLength: number = (someValue as string).length;
// let o = { a: 10, b: 20 }
// let { a: newName1, b: newName2 } = o;
// console.log(newName1, newName2)
// 函数
// 如果不声明参数和返回值的类型，默认都会因为类型推论设置成 any 类型
function add (x: number, y: number): number {
  return x + y;
}
let add1 = (x: number, y: number): number => x + y
// console.log(add(1, 2))
// = 左边规定的是变量的类型 因为变量是一个函数 
// = 右边是函数本体因为存在类型推论可以省略 参数和返回值的类型设置
let myAdd: (baseValue: number, increment: number) => string = function (x, y) { return (x + y).toString() };


