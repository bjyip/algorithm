Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError(this + '.myBind is not a function')
  }
  const self = this // 指向调用myBind的方法
  const bound = function() {
    // 如果bound函数作为构造函数被new调用，this应该指向bound的实例
    self.apply(this instanceof bound ? this : context, [...args, ...arguments])
  }
  // 维护原型关系
  const temp = function() {}
  temp.prototype = self.prototype
  bound.prototype = new temp()
  bound.prototype.constructor = self
  // 返回新函数
  return bound
}