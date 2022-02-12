/**
 *  执行上下文栈：
 *    1. 在全局代码执行前，JS引擎会创建一个栈来存储管理所有的执行上下文对象
 *    2. 在全局执行上下文（window）确定后，将其添加到栈中（压栈）
 *    3. 在函数执行上下文创建后，将其添加到栈中（压栈）
 *    4. 在当前函数执行完后，将栈顶的对象移除（出栈）
 *    5. 当所有的代码执行完后，栈中只剩下window
 *
 *    Note： 函数执行上下文是调用的时候产生的，不是声明的时候产生的。调用了几次函数，就产生了几次函数执行上下文
 */

    // 1 进入window全局上下文
var a = 10

var bar = function (x) {
  var b = 5
  foo(x + b)         // 3. bar调用后，调用foo函数，进入foo函数的执行上下文
}

var foo = function (y) {
  var c = 5
  console.log(a + c + y)
}

bar(10)    // 2. 函数调用后 进入bar的执行上下文 （函数执行上下文顺序是看执行顺序，不是看调用顺序）


console.log("============================")
// 函数执行上下文和递归思想
// 出栈：是从递归出出栈
// return i = 4 只是结束的是 f4的代码，整个代码还没有执行完
/**
 gb: undefined
 fb: 1
 fb: 2
 fb: 3
 fe: 3
 fe: 2
 fe: 1
 ge: 1
 */
console.log("gb:", i)
var i = 1
fn(1)

function fn(i) {
  if (i === 4) {  // 此处结束的是fn4时候的执行上下文，并没有完全推出整个大循环
    return
  }
  console.log("fb:", i)
  fn(i + 1)
  console.log("fe:", i)
}

console.log("ge:", i)


console.log("============================")
/**
 *  先执行变量提升，再执行函数提升
 */
// function k() {
//
// }
// var k
// console.log(typeof k)

