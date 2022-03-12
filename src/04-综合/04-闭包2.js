function a() {
  var aa = 100
  function b() {
    var b = 200
    console.log(b)   // 不会形成闭包，此处调用的是bAO对象中的属性（变量）
  }
  b()
}

a()


// 1. 产生aAO对象
//    aAO: {aa: 100, b: function}
// 2. 产生bAO对象
//    bAO: {b: 200}
//  [[scopes]]:  0: bAO
//               1: aAO
//               2: GO



// Note： 会不会形成闭包的关键点在于：内部函数使用的是自身的AO对象中的属性，还是外部函数AO对象中的属性
//        使用内部函数的变量属性，不是闭包
