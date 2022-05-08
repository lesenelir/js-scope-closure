let a = 0, b = 0

function A(a) {
  A = function (b) { // 函数执行完，被当前上下文以外的东西所占用，形成闭包
    console.log(a + (b++))
  }
  console.log(a++)
}

A(1)
A(2)


/**
 *  预编译 产生GO对象: {a: undefined, b: undefined, A: function A(a)}
 *
 *  执行第一行，修改GO对象: {a: 0, b: 0, A: function}
 *
 *  执行第10行，生成第一个A1AO对象: {a: 1} (形参并赋值)，并修改Go对象中的A属性
 *                                    GO: {a: 0, b: 0, A: function(b){a+b++}}
 *            此时A1AO对象的[[scopes]]：
 *                      0: A1AO: {a: 1}
 *                      1: GO: {a: 0, b: 0, A: function(b){a+b++}}
 *  接着执行第7行，打印a++为1，a为2，但是修改了GO中的A的属性值和GO中的a值
 *  GO: {a: 2, b: 0, A: function(b){a+b++}}
 *
 *
 *  执行第11行，生成第二个A2AO对象：{b: 2} （形参并赋值）
 *            此时A2AO对象的[[scopes]]：
 *                      0: A2AO: {b: 2}
 *                      1: GO: {a: 2, b: 0, A: function(b){a+b++}}
 *      并调用GO中的A方法，b为参数A2AO对象中的
 *
 */


let x = 1, y = z = 0
function add(n) {
  return n = n + 1
}
y = add(x)

function add(n) {   // 相同函数会覆盖原来的函数
  return n = n + 3
}
z = add(x)

console.log(x, y, z) // 1 4 4
