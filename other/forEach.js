Array.prototype.myForEach = function(fn, context) {
  if (!(this instanceof Array)) {
    throw TypeError(this + '.myMap is not a function')
  }
  // this指向调用myMap函数的数组
  for (let i = 0; i < this.length; i++) {
    // 如果 context 参数有值，则每次 callback 函数被调用时，this 都会指向 context 参数。
    // 如果省略了 context 参数，或者其值为 null 或 undefined，this 则指向全局对象。
    // fn的3个参数分别是：item， index， array
    fn.call(context, this[i], i, this)
  }
}

// 原理：遍历数组每个元素，没有返回值，如果遍历数组的目的是为了得到返回值，那么使用map，否则使用forEach