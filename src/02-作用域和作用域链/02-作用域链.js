/**
 *    作用域链
 *       理解：做个作用域上下级关系的作用域形成的链，方向是从内往外，查找变量时沿着作用域来查找
 *
 *    一个变量的查找规则：
 *      1. 在当前的作用域下的执行上下文查找对应的属性，如果有则返回
 *      2. 在上一级作用域的执行上下文中查找对应的属性，如果有则返回
 *      3. 不断执行步骤2，直至全局作用域，如果还找不到就抛出找不到的异常
 *
 */

var a = 1
// function fn1() {
//   var b = 2
//   function fn2() {  // 立即执行函数
//     var c = 3
//     console.log(a)
//     console.log(b)
//     console.log(c)
//   }
//   fn2()
// }
function fn1() {
  var b = 2
  ;(function fn2() {  // 立即执行函数
    var c = 3
    console.log(a)
    console.log(b)
    console.log(c)
  })()
}

fn1()


console.log("================")
// 作用域是定义完函数后就不会改变了

var x = 10
function fn() {
  console.log(x)
}

function show(f) {
  var x = 20
  f()
}

show(fn)

// Note： 不能访问show中的x是因为，此时show执行第49行之后，show的AO对象被销毁
