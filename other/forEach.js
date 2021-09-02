



Array.prototype.myForEach = function(fn, context) {
  if (typeof this !== 'array') {
    throw TypeError(this + '.myMap is not a function')
  }
  // this指向调用myMap函数的数组
  for (let i = 0; i < this.length; i++) {
    // 如果 context 参数有值，则每次 callback 函数被调用时，this 都会指向 context 参数。
    // 如果省略了 context 参数，或者其值为 null 或 undefined，this 则指向全局对象。
    fn.call(context || window, this[i], i, context)    
  }
}