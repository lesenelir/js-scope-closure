/**
 *  常见的闭包：
 *    1. 将函数作为另一个函数的返回值
 *    2. 将函数作为实参传递给另外一个函数调用
 *
 */

function fn1() {
  var a = 2
  function fn2() {
    a++
    console.log(a)
  }
  return fn2
}

var f = fn1()
f()
f()
// a 的值不会消失：
// 闭包是内部函数引用了外部函数的局部变量，所以在外部函数调用完之后，还不能直接释放外部函数的执行上下文
// （因为内部函数还要引用外部函数的执行上下文中的变量）
// 闭包的实质：把一个局部变量保存到函数的属性中，局部变量随函数的执行结束消失，但函数对象还在堆内存中


console.log("====================")


function showDelay(msg, time) {
  setTimeout(() => {
    msg
  }, time)
}
showDelay('lesenelir', 1000)

