// 闭包实现累加器
function add() {
  let num = 1

  function fn() {
    console.log(num++)
  }
  return fn
}

let res = add()
res()
res()
res()

// 闭包实现打印学生名单
function classroom(name) {
  let stuArr = []

  let obj = {
    add(name) {
      stuArr.push(name)
      console.log(stuArr)
    },
    delete(name) {
      stuArr.filter((item) => {
        return item !== name
      })
    }
  }

  return obj // 返回一个对象
}


