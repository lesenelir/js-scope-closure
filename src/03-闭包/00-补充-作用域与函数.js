let title = 'scope'

function show() {
  let url = 'www.Google.com'
  function fn() {
    let host = '8080'
    console.log(url, host)
  }

  // console.log(host) // 报错外部函数不能用内部函数的变量
  fn()
}

show()

console.log("========================================")

function hd() {
  let n = 1
  return function () { // 函数内部返回函数，该函数被引用
    console.log(++n)
  }
}
let a = hd()
a() // 2
a() // 3
let b = hd() // 函数调用就会创建新的一片内存空间
b()
b()

function hd2() {
  return function () {
    let m = 1
    return function () {
      console.log(++m)
    }
  }
}
let c = hd2()()
c()
c()

