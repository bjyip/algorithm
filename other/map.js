Array.prototype.myMap = function(fn, context) {
  if (!(this instanceof Array)) {
    throw TypeError(this + '.myMap is not a function')
  }
  const res = []
  for (let i = 0; i < this.length; i++) { // this指向调用myMap函数的数组
    // 如果 context 参数提供给myMap，则会被用作回调函数的this值。否则undefined会被用作回调函数的this值
    res.push(fn.call(context, this[i], i, this))
  }
  return res
}
// 原理
// 1. 在原型上添加一个方法
// 2. 传一个函数和this
// 3. call 方法传的参数和封装好的map方法的参数是一样的。