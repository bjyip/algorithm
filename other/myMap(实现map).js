Array.prototype.myMap = function(fn, context) {
  // this指向调用myMap函数的数组
  if (this.constructor !== Array) {
    throw TypeError(this + '.myMap is not a function')
  }
  // 如果 context 参数有值，则每次 callback 函数被调用时，this 都会指向 context 参数。
  // 如果省略了 context 参数，或者其值为 null 或 undefined，this 则指向全局对象。
  context = context || window
  const res = []
  for (let i = 0; i < this.length; i++) {
    // fn的3个参数分别是：item， index， array
    res.push(fn.call(context, this[i], i, this))
  }
  return res
}
// 原理
// 1. 在原型上添加一个方法
// 2. 传一个函数和this
// 3. call 方法传的参数和封装好的map方法的参数是一样的。