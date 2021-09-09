// 实现add函数使得一下表达式的值正确
// add(1，2，3).sumOf() // 6
// add(2)(4, 1)(2).sumOf() // 9
function add() {
  const arr = [...arguments]
  function addPro() {
    arr.push(...arguments)
    return addPro
  }
  addPro.sumOf = function() {
    return arr.reduce((a, b) =>  a + b )
  }
  return addPro
}
console.log(add(1)(2)(3).sumOf())

// 注意：
// 1. 一般fn.fn1()（比如fn.call()）这种表达形式的函数是需要在Function原型上面定义函数的，即Function.prototype.fn1
// 2. 但是此处sumOf是add方法里面return的addPro方法的静态方法（已知目标函数），所以无需在原型上定义
// 参考：https://segmentfault.com/a/1190000023910451
