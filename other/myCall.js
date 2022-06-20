// 因为myApply是给方法调用的，所以需要定义在Function.prototype上面
Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {   // this指向当前调用myApply的函数对象（Function实例）
    throw new Error(this + '.myCall is not a function')
  }
  context = context || window         // 若没有传入context, 默认绑定window对象
  const fn = Symbol('fn')             // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  context[fn] = this                  // 把调用myCall的函数绑定在context上
  const result = context[fn](...args) // 利用context执行“调用myCall的函数”，隐式绑定，函数的this指向context
  delete context[fn]                  // 删除我们声明的fn属性
  return result                       // 返回函数执行结果
}

// 原理：
//   1. fn.myCall(context)
//   2. this指的就是调用call 方法的函数
//   3. 给当前上下文（call方法的第一个参数）添加一个属性fn，属性值为this，当前上下文就可以调用这个方法了。
//   4. 把call方法传入的其他的参数传入到属性fn指代的函数中，直接调用函数
//   5. fn.myCall(context) 就是将fn方法添加到context的属性中，fn中的this 指向 context
//   6. 把arguments转成数组的其他方法：var args = Array.prototype.slice.call(arguments)