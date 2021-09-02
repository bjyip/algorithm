

Array.prototype.myMap = function(fn, context) {
  if (typeof this !== 'array') {
    throw TypeError(this + '.myMap is not a function')
  }
  const temp = []
  for (let i = 0; i < this.length; i++) { // this指向调用myMap函数的数组
    // 如果 context 参数提供给myMap，则会被用作回调函数的this值。否则undefined会被用作回调函数的this值
    const result = fn.call(context, this[i], i, this)
    temp.push(result)
  }
  return temp
}