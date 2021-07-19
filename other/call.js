


Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + '.myCall is not a function')
  }
  context = context || window        // 若没有传入this, 默认绑定window对象
  const fn = Symbol('fn')            // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  context[fn] = this                 // this指向当前调用call的函数对象（Function实例），即我们要改变this指向的函数
  const result = context.fn(...args) // 执行当前函数，隐式绑定，当前函数的this指向context
  delete context[fn]                 // 删除我们声明的fn属性
  return result                      // 返回函数执行结果
}