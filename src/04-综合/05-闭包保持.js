/**
 *  如果希望函数调用后，闭包依旧保持，则需要把内部函数返回到外部函数的外面
 *
 */


function a() {
  var num = 0
  function b() {
    console.log(num++) // 形成闭包, 函数b使用了不属于自己的变量
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
// b的作用域[[scopes]]:  0 - bAO: {}
//                      1 - aAO: {num: 0, b: function}
//                      2 - GO

// 执行第18行前，num的值已经递增1，并且此时产生一个新的bAO对象
// bAO: {}
// b的作用域[[scopes]]:  0 - bAO: {}
//                      1 - aAO: {num: 1, b: function}
//                      2 - GO


// Note： 此时就可以通过嵌套一个内部函数，实现在外部函数修改使用外部函数的变量内容

//   如果没有把内部函数返回到外部函数的外面，则内部函数调用完后，闭包就会被销毁。

// 某一个函数的外部不能访问该函数内部的变量，如果需要访问，则需要在该函数内部定义一个函数
// 并在该函数的中使用该变量，并把内部函数return到该函数的外部

// Note: 闭包保持的要素：1. 形成闭包：内部函数使用了外部函数变量、函数 2. 内部函数return到外部函数外部
