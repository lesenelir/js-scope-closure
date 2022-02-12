/*
*   变量声明提升
*     通过var声明的语句可以直接使用
*
*   函数声明提升：
*     通过function声明的函数，在此之前可以直接调用（表达式方式不可提升）
*
* */


fn()
// fn2()

function fn() {
  console.log("fn可以提升")
}


var fn2 = function () {
  console.log("fn2不可以提升")
}
