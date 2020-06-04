## 简单上手 typeScript
- npm 全局安装 typescript  `npm i -g typescript`
- 创建你的第一个TypeScript文件 `index.ts` ,添加一些 javascript 语句。
- 使用 tsc 命令将 ts 文件编译成 js 文件 `tsc index.ts`,编译完成之后就会出现一个 `index.js` 文件

## 基础语法

### 基础类型 
布尔值,字符串，数字

```ts
// 在变量名之后使用 :类型 去声明该变量的类型
// 因为 ts 有一个类型推论功能，所以 :类型 在变量声明的时候可以省略
let isDone: boolean = false;
let number: number = 100;
let str: string = 'hello';
```
数组 
```ts
// 数字数组的声明
let arr: number[] = [1,2,3]
// 字符串数组
let arr1: Array<string> = ['a','b']
// 也支持类型推论功能
```
元组 Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

```ts
// arr 内有两个元素并且类型都是数字
// 要添加其他元素的话必须添加已有的数据类型元素
let arr: [number,number] = [1,2]
```

枚举

```ts
enum Color { Red = 4, Green, Blue, Pink }
let x = Color.Pink
// 给 x 重新赋值的时候一般只能赋值成枚举中的另外值
// 判断 x 到底是哪一个枚举类型
// 可以用枚举编号   编号默认从数字0开始，可以在枚举声明的时候修改
if (x === 7) {
  console.log('粉色')
}
```

Any

```ts
let x: any;
// 也支持类型推论功能
setTimeout(() => {
  // 一系列操作才能确定 x 的值到底是什么类型，那么初始定义的时候 x 类型设置成 any
  x = '1000'
}, 1000);
```

Void
```ts
// 函数不写返回的时候函数的类型设置成 void
// 也支持类型推论功能
function warnUser(): void {
    console.log("This is my warning message");
}
```
类型断言
```ts
let someValue: any = "this is a string";
// 将 any 类型断言成字符串类型
let strLength: number = (<string>someValue).length   // 不能在 jsx 中使用
// let strLength: number = (someValue as string).length;
```
### 类型推论
TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。
```ts
let num = 3;
// 当重新给 num 赋值字符串的时候，会报错，提示不能赋值字符串
num = 'hello';
```

### 函数

函数类型(函数参数和返回值)
```ts
// 原来普通函数
function add(x, y) {
    return x + y;
}
// 声明类型的 
// 函数式声明
function add(x:number, y:number):number {
    return x + y;
}

// 变量声明
let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
// 支持类型推论
```