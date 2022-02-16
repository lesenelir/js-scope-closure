/**
 *  如果希望函数调用后，闭包依旧保持，则需要把内部函数返回到外部函数的外面
 *
 */


function a() {
  var num = 0
  function b() {
    console.log(num++) // 形成闭包
  }
  return b
}

var demo = a()
// console.dir(demo())
demo() // b() 0
demo() // b() 1


// 1. GO: {demo: undefined, a: function}

// 执行15行，产生aAO对象：
// aAO: {num: undefined, b: function}
// 预编译结束，执行第8行，则修改了aAO对象
//  aAO: {num: 0, b: function}
// 执行第12行，返回b函数给demo变量
// GO: {demo: b, a: function}

// 执行第17行，产生了一个bAO对象
// bAO: {}
// b的作用域[[scopes]]:  0 - bAO
//                      1 - aAO: {num: 0, b: function}
//                      2 - GO

// 执行第18行前，num的值已经递增1，并且此时产生一个新的bAO对象
// bAO: {}
// b的作用域[[scopes]]:  0 - bAO
//                      1 - aAO: {num: 1, b: function}
//                      2 - GO


// Note： 此时就可以通过嵌套一个内部函数，实现在外部函数修改使用外部函数的变量内容
