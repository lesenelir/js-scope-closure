/**
 *    产生： 在嵌套内部函数定义执行完时就产生了（不是在调用）
 *    死亡： 在嵌套的内部函数成为垃圾对象时
 */

function fn1() {
  // 此时通过函数提升， 闭包已经产生了（函数提升，内部函数对象已经创建了）
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

f = null  // 此时闭包死亡

