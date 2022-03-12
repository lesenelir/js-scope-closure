// 1. 函数作为返回值
function test() {
  const a = 1
  return function () {
    console.log('a', a)
  }
}
const fn = test() // 闭包会在函数定义的地方向上查找值
const a = 2
fn()


// 2. 函数作为参数
function test1(fn1) {
  const a1 = 2
  fn1()
}

const a1= 3
function fn1() {
  // 变量查找规则是在函数定义的时候向上查找，找到全局的a1，而不是在函数调用的时候进行查找
  console.log('a1', a1) // a1 3
}

test1(fn1)


