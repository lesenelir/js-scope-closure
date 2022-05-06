// let x = [12, 23];
// function f(y) {
//   y[0] = 100;
//   y = [100];
//   y[1] = 200;
//   console.log(y);
// }
// f(x);
// console.log(x);

// 预编译： GO = {x:undefined, f: fn}
// 执行第1行： GO = {x: [12, 23], f: fn}
// 执行第8行产生fAO对象 fAO = {y: x}
// 执行第3行 fAO = {y: [100, 23]} GO = {x: [100, 23], f: fn}
// 执行第4行 fAO = {y: [100]}
// 执行第5行 fAO = {y: [100, 200]}
// 执行第6行 [100, 200]


let x = 5;
function fn(x) {
  function b(y) {
    console.log(y + ++x);
  }
  return b
}

let f = fn(6);
f(7);

// 预编译： GO = {x: un, fn: fn, f: un}
// 执行20行 GO = {x: 5, fn: fn, f: un}
// 执行28行  产生fnAO对象 fnAO = {x: 6, b: function}
// 执行25行 返回b GO = {x: 5, fn: fn, f: b}，此时[scopes] 有GO 也有fnAO
// 执行29行  产生bAO对象  bAO = {y:  7} 此时[scopes]有GO也有bAO
// 7 + ++6 = 7+7=14


let foo = function () {
  let i = 0
  return function () {
    console.log(i++)
  }
}

let f1 = foo()
let f2 = foo()
f1()
f2()
f1()

console.log(typeof foo)


