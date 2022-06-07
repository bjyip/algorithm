// 因为myApply是给方法调用的，所以需要定义在Function.prototype上面
Function.prototype.myApply = function(context, args) {
  if (typeof this !== 'function') {   // this指向当前调用myApply的函数对象（Function实例）
    throw new TypeError(this + '.myApply is not a function')
  }
  context = context || window         // 若没有传入context, 默认绑定window对象
  const fn = Symbol('fn')             // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  context[fn] = this                  // 把调用myApply的函数绑定在context上
  const result = context[fn](args)    // 利用context执行“调用myApply的函数”，隐式绑定，函数的this指向context
  delete context[fn]                  // 删除我们声明的fn属性
  return result                       // 返回函数执行结果
}

// 原理：跟call相似，把参数列表改为参数数组
